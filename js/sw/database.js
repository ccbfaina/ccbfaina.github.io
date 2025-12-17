importScripts("https://unpkg.com/dexie@3.2.3/dist/dexie.js");

/**
 * Gerenciador de Dados e Atualizações da Aplicação
 *
 */
self.DataManager = {
  CONFIG: {
    name: "CCB",
    version: 2,
    chunk: 500,
    log: false,
    delay: 5,
  },
  UPDATE_CONFIG: [
    { type: "tags", metadataKey: "tags", versionKey: "tags_version" },
    { type: "events", metadataKey: "lista", versionKey: "lista_version" },
    {
      type: "relatorio",
      metadataKey: "relatorio",
      versionKey: "relatorio_version",
    },
  ],
  db: null,

  clearDB: async () => {
    try {
      self.Client.send("message", "Limpando banco de dados...");
      await self.DataManager.db.relatorio.clear();
      await self.DataManager.db.eventos.clear();
      await self.DataManager.db.tags.clear();
      await self.DataManager.db.desc.clear();
      await self.DataManager.db.titles.clear();
      await self.DataManager.db.locales.clear();
      await self.DataManager.db.notificacoesEnviadas.clear();
      await self.DataManager.db.versions.clear();

      self.Logger.log("Banco de dados limpo.");
      return { message: "Banco de dados limpo com sucesso." };
    } catch (err) {
      self.Logger.handleError("Erro ao limpar DB", err);
      throw err;
    }
  },

  _fetchAndParseJson: async (url, errorMessage) => {
    const res = await fetch(`${url}?v=${new Date().getTime()}`);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} ao baixar ${errorMessage}`);
    }
    return res.json();
  },

  updateTags: async () => {
    const normalize = self.Utils.normalizeString;

    // 1️⃣ Feedback imediato para o usuário
    self.DataManager.Client.send("message", "Atualizando menu...");

    // 2️⃣ Baixa tags principais (bloqueante)
    const mainResponse = await self.DataManager._fetchAndParseJson(
      `/tags.json`,
      "tags principais"
    );

    const mainTagsRaw = Array.isArray(mainResponse.tags)
      ? mainResponse.tags
      : [];

    let order = 0;
    const mainTags = mainTagsRaw.map((tag) => ({
      ...tag,
      order: ++order,
      normalizedTitle: normalize(tag.title),
      normalizedGroup: normalize(tag.group),
    }));

    await self.DataManager.db.transaction(
      "rw",
      self.DataManager.db.tags,
      async () => {
        await self.DataManager.db.tags.clear();
        await self.DataManager.db.tags.bulkPut(mainTags);
      }
    );

    try {
      const circularResponse = await self.DataManager._fetchAndParseJson(
        `/tags-circulares.json`,
        "tags circulares"
      );

      const circularTagsRaw = Array.isArray(circularResponse.tags)
        ? circularResponse.tags
        : [];

      if (!circularTagsRaw.length) return;

      const circularTags = circularTagsRaw.map((tag) => ({
        ...tag,
        order: ++order,
        normalizedTitle: normalize(tag.title),
        normalizedGroup: normalize(tag.group),
      }));

      await self.DataManager.db.tags.bulkPut(circularTags);
      self.Logger.log(`Tags circulares adicionadas: ${circularTags.length}`);
    } catch (err) {
      // Não quebra o fluxo do usuário
      self.Logger.log("Falha ao atualizar tags circulares", err);
    }
  },

  updateTags: async () => {
    self.Client.send("message", "Baixando menu...");
    const tagsMain = await self.DataManager._fetchAndParseJson(
      "/data/tags.json",
      "tags principais"
    );
    self.Logger.log("Tags principais baixadas.");

    let order = 0;
    const processedTagsMain = (tagsMain.tags || []).map((tag) => ({
      ...tag,
      order: ++order,
      normalizedTitle: self.Utils.normalizeString(tag.title),
      normalizedGroup: self.Utils.normalizeString(tag.group),
    }));
    await self.DataManager.db.tags.clear();
    await self.DataManager.db.tags.bulkPut(processedTagsMain);

    const tagsCircular = await self.DataManager._fetchAndParseJson(
      "/data/tags-circulares.json",
      "tags circulares"
    );

    const processedTagsCircular = (tagsCircular.tags || []).map((tag) => ({
      ...tag,
      order: ++order,
      normalizedTitle: self.Utils.normalizeString(tag.title),
      normalizedGroup: self.Utils.normalizeString(tag.group),
    }));
    await self.DataManager.db.tags.bulkAdd(processedTagsCircular);
    self.Logger.log(
      `Tags circulares adicionadas: ${processedTagsCircular.length} registros.`
    );
  },

  // Atualiza os metadados de eventos (titles, locales, desc)
  updateEventMetadata: async () => {
    const dataMain = await self.DataManager._fetchAndParseJson(
      "/data/data.json",
      "dados principais de eventos"
    );
    self.Logger.log("Dados principais de eventos baixados.");

    await self.DataManager.db.transaction(
      "rw",
      self.DataManager.db.desc,
      self.DataManager.db.titles,
      self.DataManager.db.locales,
      async () => {
        await self.DataManager.db.desc.clear();
        await self.DataManager.db.titles.clear();
        await self.DataManager.db.locales.clear();

        const mapText = (text, id) => ({ id: id + 1, text });
        await self.DataManager.db.titles.bulkPut(
          dataMain.eventos.titles.map(mapText)
        );
        await self.DataManager.db.locales.bulkPut(
          dataMain.eventos.locales.map(mapText)
        );
        await self.DataManager.db.desc.bulkPut(
          dataMain.eventos.desc.map(mapText)
        );
      }
    );
    self.Logger.log(
      "Metadados de eventos (títulos, locais, descrições) atualizados."
    );
    return dataMain.eventos.items;
  },

  // Processa e salva os itens de eventos
  updateEventItems: async (eventItems) => {
    self.Client.send("message", `Recebendo atualização...`);

    const preprocessEvent = (evento) => {
      const d = evento.date ? new Date(evento.date) : null;
      const isSpecialTitle = evento.title === "AVISOS À IRMANDADE";
      evento.noDate = evento.desc.includes("!nodate");
      if (evento.noDate)
        evento.desc = evento.desc.replace(/!nodate/gi, "").trim();
      const hasValidDate = d && !isSpecialTitle && !evento.noDate;
      const isMorningOrLater = d && d.getHours() >= 3;

      const { title, locale, desc, list } = evento;
      const processedEvent = { ...evento, onDate: d };

      processedEvent.formatDate = hasValidDate
        ? self.Utils.ptBRFormatters.date.format(d)
        : "";
      processedEvent.formatWeek = hasValidDate
        ? self.Utils.ptBRFormatters.weekday.format(d).replace(".", "")
        : "";
      processedEvent.formatTime =
        hasValidDate && isMorningOrLater
          ? self.Utils.ptBRFormatters.time.format(d)
          : "";

      processedEvent.normalizedTitle = self.Utils.normalizeString(title);
      processedEvent.normalizedLocale = self.Utils.normalizeString(locale);
      processedEvent.normalizedDesc = self.Utils.normalizeString(desc);
      processedEvent.normalizedList = self.Utils.normalizeString(list);
      processedEvent.desc = (desc || "").replace(
        /<(?!\/?(b|br)\b)[^>]*>/gi,
        ""
      );
      processedEvent.date = d;
      processedEvent.end = new Date(evento.end);
      return processedEvent;
    };

    const newEvents = eventItems
      .map(preprocessEvent)
      .filter((item) => item !== null);

    await self.DataManager.db.eventos.clear();
    for (let i = 0; i < newEvents.length; i += self.DataManager.CONFIG.chunk) {
      const chunk = newEvents.slice(i, i + self.DataManager.CONFIG.chunk);
      await self.DataManager.db.transaction(
        "rw",
        self.DataManager.db.eventos,
        async () => {
          await self.DataManager.db.eventos.bulkPut(chunk);
        }
      );
      self.Utils.delay(self.DataManager.CONFIG.delay);
    }
    self.Logger.log(`Itens de eventos salvos: ${newEvents.length} registros.`);
  },

  // Atualiza os dados do relatório
  updateRelatorio: async () => {
    self.Client.send("message", "Iniciando download do relatório...");
    const { headers, data } = await self.DataManager._fetchAndParseJson(
      "/data/relatorio.json",
      "relatório"
    );

    await self.DataManager.db.relatorio.clear();
    for (let i = 0; i < data.length; i += self.DataManager.CONFIG.chunk) {
      const rawChunk = data
        .slice(i, i + self.DataManager.CONFIG.chunk)
        .map((r) => self.Utils.mapRow(headers, r));
      const relatorioChunk = rawChunk.map((item) => ({
        ...item,
        normalizedMinisterio: self.Utils.normalizeString(
          item.MinisterioConcatenados
        ),
        normalizedNomeCidade: self.Utils.normalizeString(item.NomeCidade),
      }));

      await self.DataManager.db.transaction(
        "rw",
        self.DataManager.db.relatorio,
        async () => {
          await self.DataManager.db.relatorio.bulkPut(relatorioChunk);
        }
      );
      self.Utils.delay(self.DataManager.CONFIG.delay);
    }
    self.Client.send("status_update", "Atualização do relatório concluída.");
  },

  async updateProcess(payload = {}) {
    self.Logger.log(
      "Iniciando processo de verificação de atualizações...",
      payload
    );
    const { updateType = "all" } = payload;
    let updatesExecuted = 0;

    try {
      // 1. Obter metadados do servidor
      const metadataRes = await self.DataManager._fetchAndParseJson(
        "/data/metadata.json",
        "metadados"
      );

      // 2. Obter todas as versões armazenadas de uma vez
      const storedVersionPromises = self.DataManager.UPDATE_CONFIG.map((cfg) =>
        self.DataManager.db.versions
          .get(cfg.versionKey)
          .then((res) => res?.value)
      );
      const storedVersions = await Promise.all(storedVersionPromises);

      // 3. Iterar e processar cada recurso
      for (let i = 0; i < self.DataManager.UPDATE_CONFIG.length; i++) {
        const cfg = self.DataManager.UPDATE_CONFIG[i];
        const serverVersion = metadataRes[cfg.metadataKey]?.version;
        const storedVersion = storedVersions[i];

        const checkType = updateType === "all" || updateType === cfg.type;
        const needsUpdate = serverVersion && serverVersion !== storedVersion;

        if (checkType && needsUpdate) {
          updatesExecuted++;

          self.Logger.log(`Processando atualização de ${cfg.type}.`);

          // Lógica de atualização específica:
          if (cfg.type === "tags") {
            await self.DataManager.updateTags();
          } else if (cfg.type === "events") {
            const eventItems = await self.DataManager.updateEventMetadata();
            await self.DataManager.updateEventItems(eventItems);
          } else if (cfg.type === "relatorio") {
            await self.DataManager.updateRelatorio();
          }

          // Salva a nova versão após o sucesso
          await self.DataManager.db.versions.put({
            key: cfg.versionKey,
            value: serverVersion,
          });
          self.Logger.log(`Atualização de ${cfg.type} concluída.`);
        }
      }
      // 4. Retorno final
      if (updatesExecuted > 0) {
        return { message: "Dados atualizados com sucesso." };
      } else {
        return { message: "Nenhuma atualização necessária." };
      }
    } catch (err) {
      self.Logger.handleError("Erro ao verificar ou aplicar atualizações", err);
      throw err;
    }
  },
};

// --- Inicialização do Banco de Dados Dexie ---
self.DataManager.db = new Dexie(self.DataManager.CONFIG.name);
self.DataManager.db
  .version(self.DataManager.CONFIG.version)
  .stores({
    eventos:
      "id, group, date, normalizedList, normalizedTitle, normalizedLocale, normalizedDesc",
    tags: "&href, normalizedGroup, normalizedTitle",
    notificacoesEnviadas: "id",
    desc: "&id, text",
    titles: "&id, text",
    locales: "&id, text",
    relatorio: "&Codigo, normalizedMinisterio, normalizedNomeCidade",
    versions: "&key, value",
  })
  .upgrade(async (tx) => {
    // await Dexie.delete("Agenda2DB").catch(() => {});
    await Dexie.delete("Agenda").catch(() => {});
    await Dexie.delete("Listas").catch(() => {});
    await Dexie.delete("CCB2").catch(() => {});
  });
