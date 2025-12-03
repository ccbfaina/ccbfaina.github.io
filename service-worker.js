// Import Workbox e Dexie
importScripts(
  "https://unpkg.com/dexie@3.2.3/dist/dexie.js",
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js",
  "https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js"
);

/**
 * Firebase Cloud Messaging
 */
const FirebaseManager = {
  init: function () {
    const Config = {
      FIREBASE_CONFIG: {
        apiKey: "AIzaSyDjh-kSamZSSOA1pEwMuCB1HZxiZBgCaVE",
        authDomain: "agenda-408113.firebaseapp.com",
        projectId: "agenda-408113",
        storageBucket: "agenda-408113.appspot.com",
        messagingSenderId: "865568496873",
        appId: "1:865568496873:web:66e24b202af5ba7f1b6478",
        measurementId: "G-KDP8RZ0Z19",
      },
    };
    firebase.initializeApp(Config.FIREBASE_CONFIG);
    const messaging = firebase.messaging();

    messaging.onBackgroundMessage(this.onBackgroundMessage);
    self.addEventListener("notificationclick", this.onNotificationClick);
  },

  onBackgroundMessage: function (payload) {
    try {
      const notification = payload.notification || {};
      const data = payload.data || {};
      const notificationTitle = notification.title || "Nova Notificação";
      const notificationOptions = {
        body: notification.body || "Você tem uma nova mensagem.",
        icon: notification.icon || "/favicon.ico",
        data: data,
      };
      self.registration.showNotification(
        notificationTitle,
        notificationOptions
      );
    } catch (error) {
      console.error(
        "[firebase] Erro ao exibir notificação em segundo plano:",
        error
      );
    }
  },

  onNotificationClick: function (event) {
    event.notification.close();
    const targetUrl = event.notification.data.url || "/";
    event.waitUntil(
      self.clients
        .matchAll({ type: "window", includeUncontrolled: true })
        .then((clientList) => {
          const urlToOpen = new URL(targetUrl, self.location.origin).href;
          const matchingClient = clientList.find((c) =>
            c.url.startsWith(urlToOpen)
          );
          return matchingClient
            ? matchingClient.focus()
            : self.clients.openWindow(urlToOpen);
        })
        .catch((err) => console.error("[firebase] Erro ao redirecionar:", err))
    );
  },
};
FirebaseManager.init();

const Client = {
  _messageCallbacks: {},

  /**
   * Funções de Comunicação (Broadcast)
   * @param {*} type
   * @param {*} message
   * @param {*} data
   */
  send: (type, message, data = null) => {
    // Função auxiliar para serializar, evitando serialização dupla se já for string
    const safeStringify = (value) => {
      if (typeof value === "string") {
        // Tenta parsear para verificar se já é JSON válido
        try {
          JSON.parse(value);
          return value; // Já é um JSON string, retorna como está
        } catch (e) {
          // Não é um JSON string válido, stringifica como uma string literal
          return JSON.stringify(value);
        }
      }
      return JSON.stringify(value);
    };

    self.clients.matchAll().then((clients) =>
      clients.forEach((c) =>
        c.postMessage({
          type,
          message: safeStringify(message), // Usa a função auxiliar
          data: safeStringify(data), // Usa a função auxiliar
        })
      )
    );
  },

  /**
   * Registra um callback para um tipo de mensagem específico.
   * @param {string} type - O tipo da mensagem a ser ouvida.
   * @param {Function} callback - A função a ser executada quando a mensagem for recebida.
   *                              Callback will receive (payload, eventSource)
   */
  receive: function (type, callback) {
    this._messageCallbacks[type] = callback;
  },
  init() {
    self.addEventListener("message", async (e) => {
      const { id, type, payload } = e.data;
      let result;
      try {
        // Deserializa o payload recebido do cliente
        const parsedPayload =
          typeof payload === "string" ? JSON.parse(payload) : payload;
        const callback = Client._messageCallbacks[type];
        if (callback) {
          // Pass e.source to the callback for direct response if needed
          result = await callback(parsedPayload, e.source);
        } else {
          result = { error: `Tipo de comando desconhecido: ${type}` };
        }
      } catch (err) {
        console.error(`[RelatorioSW] Erro ao processar comando ${type}:`, err);
        result = { error: err.message || "Erro interno do Service Worker." };
      }
      if (e.source && id) {
        // Only respond if there's an ID (request-response)
        // Serializa o resultado antes de enviar de volta ao cliente
        e.source.postMessage({ id, result: JSON.stringify(result) });
      }
    });
  },
};
Client.init();

/**
 * Objeto Logger para logs e tratamento de erros
 */
const Logger = {
  log: (...args) => console.log("[SW]", ...args),
  handleError: (context, err) => {
    console.error(`[SW] ${context}:`, err);
    Client.send("message", `Erro ao executar ${context}: ${err.message}`);
  },
};

/**
 * Funções Utilitárias
 */
const Utils = {
  ptBRFormatters: {
    date: new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
    }),
    time: new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    weekday: new Intl.DateTimeFormat("pt-BR", { weekday: "short" }),
  },

  normalizeString: function (str = "") {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  },
  setBrasiliaTime(date, hours, minutes, seconds, ms) {
    if (isNaN(date.getTime())) return;
    // Define as horas em UTC, ajustando para o fuso horário de Brasília (UTC-3).
    // Isso garante que as operações de data (e.g., para filtros) sejam consistentes.
    date.setUTCHours(hours + 3, minutes, seconds, ms);
  },
  // A propriedade 'delay' usará DataManager.CONFIG.dalay
  // Pequeno atraso para ceder o controle ao event loop e permitir a propagação de mensagens de status.
  delay: (ms) => new Promise((res) => setTimeout(res, ms)),
  mapRow(headers, row) {
    let obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index];
    });
    return obj;
  },
};

/**
 * Gerenciador de Dados e Atualizações da Aplicação
 *
 */
const DataManager = {
  // --- Configuração do Banco de Dados ---
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
  // --- Instância do Banco de Dados Dexie ---
  db: null, // Será inicializado abaixo

  // --- Funções de Ação Principal ---
  clearDB: async () => {
    try {
      Client.send("message", "Limpando banco de dados...");
      await DataManager.db.relatorio.clear();
      await DataManager.db.eventos.clear();
      await DataManager.db.tags.clear();
      await DataManager.db.desc.clear();
      await DataManager.db.titles.clear();
      await DataManager.db.locales.clear();
      await DataManager.db.notificacoesEnviadas.clear();
      await DataManager.db.versions.clear();

      Logger.log("Banco de dados limpo.");
      return { message: "Banco de dados limpo com sucesso." };
    } catch (err) {
      Logger.handleError("Erro ao limpar DB", err);
      throw err;
    }
  },

  // Helper para centralizar a lógica de fetch e tratamento de erro para um endpoint JSON
  _fetchAndParseJson: async (url, errorMessage) => {
    const res = await fetch(`${url}?v=${new Date().getTime()}`);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} ao baixar ${errorMessage}`);
    }
    return res.json();
  },

  // Atualiza as tags principais
  updateTagsMain: async () => {
    Client.send("message", "Baixando tags principais...");
    const tagsMain = await DataManager._fetchAndParseJson(
      "https://faina.ccbgo.org.br/data/tags.json",
      "tags principais"
    );
    Logger.log("Tags principais baixadas.");

    Client.send("message", "Limpando e salvando tags principais...");
    let order = 0;
    const processedTagsMain = (tagsMain.tags || []).map((tag) => ({
      ...tag,
      order: ++order,
      normalizedTitle: Utils.normalizeString(tag.title),
      normalizedGroup: Utils.normalizeString(tag.group),
    }));
    await DataManager.db.tags.clear();
    await DataManager.db.tags.bulkPut(processedTagsMain);
    Logger.log(
      `Tags principais salvas: ${processedTagsMain.length} registros.`
    );
    Utils.delay(DataManager.CONFIG.delay);
    return order; // Retorna o último ID usado para continuar com as tags circulares
  },

  // Atualiza as tags circulares
  updateTagsCircular: async (startTagId) => {
    Client.send("message", "Baixando tags circulares e adicionando...");
    const tagsCircular = await DataManager._fetchAndParseJson(
      "https://faina.ccbgo.org.br/data/tags-circulares.json",
      "tags circulares"
    );
    Logger.log("Tags circulares baixadas.");

    Client.send("message", "Adicionando tags circulares...");
    let order = startTagId; // Continua a partir do último ID das tags principais
    const processedTagsCircular = (tagsCircular.tags || []).map((tag) => ({
      ...tag,
      order: ++order,
      normalizedTitle: Utils.normalizeString(tag.title),
      normalizedGroup: Utils.normalizeString(tag.group),
    }));
    await DataManager.db.tags.bulkAdd(processedTagsCircular);
    Logger.log(
      `Tags circulares adicionadas: ${processedTagsCircular.length} registros.`
    );
    Utils.delay(DataManager.CONFIG.delay);
  },

  // Atualiza os metadados de eventos (titles, locales, desc)
  updateEventMetadata: async () => {
    Client.send("message", "Baixando dados principais de eventos...");
    const dataMain = await DataManager._fetchAndParseJson(
      "https://faina.ccbgo.org.br/data/data.json",
      "dados principais de eventos"
    );
    Logger.log("Dados principais de eventos baixados.");
    Utils.delay(DataManager.CONFIG.delay);

    Client.send("message", "Limpando e salvando metadados de eventos...");
    await DataManager.db.transaction(
      "rw",
      DataManager.db.desc,
      DataManager.db.titles,
      DataManager.db.locales,
      async () => {
        await DataManager.db.desc.clear();
        await DataManager.db.titles.clear();
        await DataManager.db.locales.clear();

        const mapText = (text, id) => ({ id: id + 1, text });
        await DataManager.db.titles.bulkPut(
          dataMain.eventos.titles.map(mapText)
        );
        await DataManager.db.locales.bulkPut(
          dataMain.eventos.locales.map(mapText)
        );
        await DataManager.db.desc.bulkPut(dataMain.eventos.desc.map(mapText));
      }
    );
    Logger.log(
      "Metadados de eventos (títulos, locais, descrições) atualizados."
    );
    Utils.delay(DataManager.CONFIG.delay);
    return dataMain.eventos.items; // Retorna os itens para o próximo passo
  },

  // Processa e salva os itens de eventos
  updateEventItems: async (eventItems) => {
    Client.send(
      "message",
      `Processando ${eventItems.length.toLocaleString(
        "pt-BR"
      )} itens de eventos...`
    );

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
        ? Utils.ptBRFormatters.date.format(d)
        : "";
      processedEvent.formatWeek = hasValidDate
        ? Utils.ptBRFormatters.weekday.format(d).replace(".", "")
        : "";
      processedEvent.formatTime =
        hasValidDate && isMorningOrLater
          ? Utils.ptBRFormatters.time.format(d)
          : "";

      processedEvent.normalizedTitle = Utils.normalizeString(title);
      processedEvent.normalizedLocale = Utils.normalizeString(locale);
      processedEvent.normalizedDesc = Utils.normalizeString(desc);
      processedEvent.normalizedList = Utils.normalizeString(list);
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

    const db = DataManager.db;
    const chunkSize = DataManager.CONFIG.chunk;

    try {
      // Inicia uma única transação para todas as operações
      await db.transaction("rw", db.eventos, async () => {
        // 1. Prepara dados para comparação
        const existingEvents = await db.eventos.toArray();
        const existingEventsMap = new Map(existingEvents.map((e) => [e.id, e]));

        const eventsToPut = []; // Novos ou Atualizados
        const idsToKeep = new Set(); // IDs da fonte

        // 2. Calcula CRIAÇÕES e ATUALIZAÇÕES
        for (const newEvent of newEvents) {
          const existing = existingEventsMap.get(newEvent.id);
          idsToKeep.add(newEvent.id);

          // Conversão para timestamp para comparação (garante que só atualiza se for mais novo)
          const newUpdated = new Date(newEvent.updated).getTime();

          if (!existing) {
            eventsToPut.push(newEvent); // Novo
          } else {
            const existingUpdated = new Date(existing.updated || 0).getTime();
            if (newUpdated > existingUpdated) {
              eventsToPut.push(newEvent); // Atualizado
            }
          }
        }

        // 3. Calcula EXCLUSÕES
        const idsToDelete = existingEvents
          .filter((e) => !idsToKeep.has(e.id))
          .map((e) => e.id);

        // 4. Executa EXCLUSÃO (bulkDelete)
        if (idsToDelete.length > 0) {
          await db.eventos.bulkDelete(idsToDelete);
        }

        // 5. Executa CRIAÇÃO/ATUALIZAÇÃO (bulkPut), mantendo o chunking
        if (eventsToPut.length > 0) {
          for (let i = 0; i < eventsToPut.length; i += chunkSize) {
            const chunk = eventsToPut.slice(i, i + chunkSize);
            await db.eventos.bulkPut(chunk);
          }
        }
      });
      Logger.log("✅ Sincronização Delta concluída com sucesso.");
    } catch (error) {
      Logger.error("❌ Transação abortada devido a erro:", error);
    }
    Logger.log(`Itens de eventos salvos: ${newEvents.length} registros.`);
  },

  // Atualiza os dados do relatório
  updateRelatorio: async () => {
    Client.send("message", "Iniciando download do relatório...");
    const { headers, data } = await DataManager._fetchAndParseJson(
      "https://faina.ccbgo.org.br/data/relatorio.json",
      "relatório"
    );

    await DataManager.db.relatorio.clear();
    for (let i = 0; i < data.length; i += DataManager.CONFIG.chunk) {
      const rawChunk = data
        .slice(i, i + DataManager.CONFIG.chunk)
        .map((r) => Utils.mapRow(headers, r));
      const relatorioChunk = rawChunk.map((item) => ({
        ...item,
        normalizedMinisterio: Utils.normalizeString(
          item.MinisterioConcatenados
        ),
        normalizedNomeCidade: Utils.normalizeString(item.NomeCidade),
      }));

      await DataManager.db.transaction(
        "rw",
        DataManager.db.relatorio,
        async () => {
          await DataManager.db.relatorio.bulkPut(relatorioChunk);
        }
      );
      Utils.delay(DataManager.CONFIG.delay);
    }
    Client.send("status_update", "Atualização do relatório concluída.");
  },

  async updateProcess(payload = {}) {
    Logger.log("Iniciando processo de verificação de atualizações...", payload);
    const { updateType = "all" } = payload;
    let updatesExecuted = 0;

    try {
      // 1. Obter metadados do servidor
      const metadataRes = await DataManager._fetchAndParseJson(
        "/data/metadata.json",
        "metadados"
      );

      // 2. Obter todas as versões armazenadas de uma vez
      const storedVersionPromises = DataManager.UPDATE_CONFIG.map((cfg) =>
        DataManager.db.versions.get(cfg.versionKey).then((res) => res?.value)
      );
      const storedVersions = await Promise.all(storedVersionPromises);

      // 3. Iterar e processar cada recurso
      for (let i = 0; i < DataManager.UPDATE_CONFIG.length; i++) {
        const cfg = DataManager.UPDATE_CONFIG[i];
        const serverVersion = metadataRes[cfg.metadataKey]?.version;
        const storedVersion = storedVersions[i];

        const checkType = updateType === "all" || updateType === cfg.type;
        const needsUpdate = serverVersion && serverVersion !== storedVersion;

        if (checkType && needsUpdate) {
          updatesExecuted++;

          Client.send(
            "message",
            `Novas atualizações disponíveis. Iniciando: ${cfg.type}...`
          );
          
          Logger.log(`Processando atualização de ${cfg.type}.`);

          // Lógica de atualização específica:
          if (cfg.type === "tags") {
            const lastTagId = await DataManager.updateTagsMain();
            await DataManager.updateTagsCircular(lastTagId);
          } else if (cfg.type === "events") {
            const eventItems = await DataManager.updateEventMetadata();
            await DataManager.updateEventItems(eventItems);
          } else if (cfg.type === "relatorio") {
            await DataManager.updateRelatorio();
          }

          // Salva a nova versão após o sucesso
          await DataManager.db.versions.put({
            key: cfg.versionKey,
            value: serverVersion,
          });
          Client.send("message", `Atualização de ${cfg.type} concluída.`);
        }
      }
      // 4. Retorno final
      if (updatesExecuted > 0) {
        return { message: "Dados atualizados com sucesso." };
      } else {
        return { message: "Nenhuma atualização necessária." };
      }
    } catch (err) {
      Logger.handleError("Erro ao verificar ou aplicar atualizações", err);
      throw err;
    }
  },
};
DataManager.updateProcess();

// --- Inicialização do Banco de Dados Dexie ---
DataManager.db = new Dexie(DataManager.CONFIG.name);
DataManager.db
  .version(DataManager.CONFIG.version)
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

/**
 * Gerencia o cache usando Workbox para melhorar o desempenho e a disponibilidade offline.
 * Inicializa o CacheManager após a configuração do DataManager
 */
const CacheManager = {
  init: () => {
    if (workbox) {
      workbox.setConfig({ debug: DataManager.CONFIG.log });
      workbox.core.skipWaiting();
      workbox.core.clientsClaim();
      Client.send("activated", "Service ativado!");
      workbox.precaching.precacheAndRoute([{"revision":"dd269b0fbb9c772a1c3d8a2e42f63b03","url":"_nuxt/agenda.Cxy7HutF.css"},{"revision":"90cae94549d29096acc237a0d42a35c8","url":"_nuxt/B2mNKc1N.js"},{"revision":"0f5cee2aacc780b85cd3b0ed53140526","url":"_nuxt/B7cr_GLp.js"},{"revision":"5af79e8966d2fd7202d26d9ec152eeba","url":"_nuxt/BD3kfZLA.js"},{"revision":"f26be8c4686360828c21c0b06088152e","url":"_nuxt/BkaJ0DXb.js"},{"revision":"d78563e5994a8dc10d10bad80ca9a445","url":"_nuxt/BPyFwVPR.js"},{"revision":"9c8700759de5ff8efef5d05dff9601e6","url":"_nuxt/BQIJfskR.js"},{"revision":"d363d272159b128e07635873269d5025","url":"_nuxt/BQmSfujb.js"},{"revision":"0dd00bc3161e4127c5f59a13d466cd4d","url":"_nuxt/builds/latest.json"},{"revision":"88b6b39efe54715808ac89673cf68beb","url":"_nuxt/builds/meta/b3bd07b2-f5e1-441e-951f-ad62b53f99f0.json"},{"revision":"72656fc08b7a185d726502a8e733fbdf","url":"_nuxt/Buo1mzZq.js"},{"revision":"0e7fc50171dc1dcd5d9364dcb463b2d8","url":"_nuxt/Bvc8oI_b.js"},{"revision":"78a53d0c01e2d8eca2436913eba514cc","url":"_nuxt/C4wnYRHc.js"},{"revision":"21f5abd204d35d444b97cebed68ee209","url":"_nuxt/C8Eta1VE.js"},{"revision":"3b30b83d5326dfc600daf12dfd58e806","url":"_nuxt/C9EMordB.js"},{"revision":"e909242e388ed7624f7e2c660dbd2604","url":"_nuxt/calendar.9oQBoDIV.css"},{"revision":"89ff7ea622574684f800628f5aa8b971","url":"_nuxt/cfK1Wpvm.js"},{"revision":"13998acb03a9d33546132f15b01693bd","url":"_nuxt/CfVVdfyE.js"},{"revision":"715dd0b70c5a0a9831ae57207a6d60f3","url":"_nuxt/CkPGhGjQ.js"},{"revision":"751ed9fb80217a0817902e039b525347","url":"_nuxt/CNKszBmN.js"},{"revision":"14e879ebc75efcda12e0066eee635c52","url":"_nuxt/contato.3ci9Le7x.css"},{"revision":"9454a8581ae8c957a3daba14fe6a5c57","url":"_nuxt/CS966vdy.js"},{"revision":"b9ac5e10516ba16e2388d8718fc972c9","url":"_nuxt/CWW1n6AE.js"},{"revision":"c09149e7b5e1be633c06680ee48995cf","url":"_nuxt/CXOs5zuY.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"46f084310af982e238f1b9dd1a756ad1","url":"_nuxt/D7rl8lNW.js"},{"revision":"7919a451de2e8bd9c63976a3046a65a0","url":"_nuxt/DaNAWMaO.js"},{"revision":"789490160bc462ebefe248bb5c224d93","url":"_nuxt/DbEtIfB4.js"},{"revision":"8613ab68b335b453cd8c564b8dcb5012","url":"_nuxt/Dd96c-IT.js"},{"revision":"f94ff436ea2dd7c47e082e713ca40d43","url":"_nuxt/ddIkDnxG.js"},{"revision":"1c916f445ba394452071f89bccc1053c","url":"_nuxt/DecyOXwM.js"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"542b361a24681a04f7b5a0be44fd3f06","url":"_nuxt/DGM1GRPj.js"},{"revision":"712461be23b832d5298727ce2f09fc75","url":"_nuxt/DmkMO4cs.js"},{"revision":"1367d70f1c66ffeb5b025a60b3082b09","url":"_nuxt/Dmn0vmg5.js"},{"revision":"bfeaae004bb9585c43b4b91f77353244","url":"_nuxt/DZ7Cx6oq.js"},{"revision":"e8515421610af759bfc9f15497ab3f15","url":"_nuxt/entry.BO-rWFXR.css"},{"revision":"ec311ea5bf450f591480bc5de4b74515","url":"_nuxt/eventos.DC8w-Mze.css"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"5dc79fd91297a1e6edee8f03357b63b0","url":"_nuxt/GdTu9iWa.js"},{"revision":"f5e241098d2cc623e21579a598a82277","url":"_nuxt/IEZT0LLa.js"},{"revision":"bd69e4f915e5d568b33063a030e5602a","url":"_nuxt/index.B3U2Ud4L.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"5c4f7f672ac6bf0de18e9d746f64e0b1","url":"_nuxt/index.CA-Ono2w.css"},{"revision":"d3838d7d373de5ff91c0962fb4b0890c","url":"_nuxt/index.efd4-kTG.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"be00fce10a162e4469800634b006201d","url":"_nuxt/menu.0lHMkiB6.css"},{"revision":"824b1d7761a285e7b1cbaf771eae182f","url":"_nuxt/navegar.DXE9DLXy.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"6abf22d4f7c4fbb02a68d68f0bab3b35","url":"_nuxt/perfil.NIbQGJpK.css"},{"revision":"fcbcae30130990780ffa631e15a30fd9","url":"_nuxt/qe3v-g0_.js"},{"revision":"8456b4730f5a71d9d9d63b6a3f8dc488","url":"_nuxt/recentes.CtKQcL51.css"},{"revision":"e5400f28ac27375dc249adf4b972c4b6","url":"_nuxt/relatorio.BGMUo3JX.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"e16fe871f60ebca36f1b2fd2b8bdfed6","url":"_nuxt/settings.D81KzNVB.css"},{"revision":"a8b5179d5b5806ec3883dc79a41b65f8","url":"_nuxt/sobre.c9vjT2Gh.css"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"41a5687094cf45020aca17ff24f46dd3","url":"_nuxt/sZW4RbK6.js"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"92edaa5072e434315f346e6567494050","url":"_nuxt/vZGkS2hF.js"},{"revision":"5d6d24399d3f8a7703f2c53f239ad0d1","url":"200.html"},{"revision":"329328889508123a24adba1b7f10ef82","url":"200/index.html"},{"revision":"6335abcbe9c2e98a60c1584e6b000470","url":"404.html"},{"revision":"c7335fa572ae335b7037f97f1cf0e252","url":"404/index.html"},{"revision":"c7335fa572ae335b7037f97f1cf0e252","url":"500/index.html"},{"revision":"848d0d7b085a9c048493d0706418b4f3","url":"agenda/index.html"},{"revision":"f6dd097462e02677e84d421780cd7cab","url":"data/data.json"},{"revision":"ab950c66c6282c741cfcfa9205fb179a","url":"data/metadata.json"},{"revision":"416ef7202529463a618e35c6f3d32152","url":"data/ministerio.json"},{"revision":"0c67f062d6c248fbad406549c816ea19","url":"data/relatorio.json"},{"revision":"50d93598b24e42211df0a4e3dfb7d751","url":"data/tags-circulares.json"},{"revision":"17e54cf3cfdcb040a2757f4f1d71434e","url":"data/tags.json"},{"revision":"754e755875dd230c5f0e04d7e6b1c368","url":"evento/index.html"},{"revision":"754e755875dd230c5f0e04d7e6b1c368","url":"evento/solicitar/index.html"},{"revision":"adec710ef1f36961abaaaefe039c5872","url":"eventos/index.html"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"754e755875dd230c5f0e04d7e6b1c368","url":"forms/contato/index.html"},{"revision":"8fd5246d74a6b963d665500702e8dacf","url":"forms/levantamento_preventiva/index.html"},{"revision":"8fd5246d74a6b963d665500702e8dacf","url":"forms/manutencao/index.html"},{"revision":"8def921a7da56cf41cdcffdf5cb0e790","url":"forms/view/index.html"},{"revision":"754e755875dd230c5f0e04d7e6b1c368","url":"hinos/index.html"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"f97d6104235482f9d32f18e819462baa","url":"index.html"},{"revision":"754e755875dd230c5f0e04d7e6b1c368","url":"lista/calendar/index.html"},{"revision":"8def921a7da56cf41cdcffdf5cb0e790","url":"lista/edit/index.html"},{"revision":"754e755875dd230c5f0e04d7e6b1c368","url":"lista/index.html"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"adec710ef1f36961abaaaefe039c5872","url":"navegar/index.html"},{"revision":"848d0d7b085a9c048493d0706418b4f3","url":"perfil/index.html"},{"revision":"adec710ef1f36961abaaaefe039c5872","url":"recentes/index.html"},{"revision":"8def921a7da56cf41cdcffdf5cb0e790","url":"relatorio/index.html"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"8def921a7da56cf41cdcffdf5cb0e790","url":"servicos/index.html"},{"revision":"8def921a7da56cf41cdcffdf5cb0e790","url":"settings/index.html"},{"revision":"848d0d7b085a9c048493d0706418b4f3","url":"sobre/index.html"}] || []);
      CacheManager._addRoutes();
      CacheManager._enableNavigationPreload();
      Client.send("init", "Service inicializado!"); 
    } else {
      console.warn("Workbox não pôde ser carregado.");
    }
  },

  _addRoutes: () => {
    // Navegação (HTML) otimizada para Preload
    workbox.routing.registerRoute(
      ({ request }) => request.mode === "navigate",
      new workbox.strategies.NetworkFirst({
        cacheName: "html-navigation-cache",
        plugins: [
          (() => {
            if (
              workbox.navigationPreload &&
              typeof workbox.navigationPreload.NavigationPreloadPlugin ===
                "function"
            ) {
              return new workbox.navigationPreload.NavigationPreloadPlugin();
            } else {
              Logger.log(
                "workbox.navigationPreload.NavigationPreloadPlugin not found or not a constructor. Skipping NavigationPreloadPlugin."
              );
              return null;
            }
          })(),

          new workbox.cacheableResponse.CacheableResponsePlugin({
            statuses: [200],
          }),

          // Opcional: Configurar um fallback de página offline, se necessário.
        ].filter(Boolean), // Filter out any null plugins if the conditional failed
      })
    );
    // 2. Cache de runtime para dados dinâmicos de faina.ccbgo.org.br/data/
    // Esta estratégia tenta a rede primeiro, depois retorna para o cache.
    // Ela ignora o parâmetro de consulta 'v' para fins de cache, evitando múltiplas entradas.
    workbox.routing.registerRoute(
      ({ url }) =>
        url.origin === "https://faina.ccbgo.org.br" &&
        url.pathname.startsWith("/data/"),
      new workbox.strategies.NetworkFirst({
        cacheName: "app-data-cache",
        plugins: [
          new workbox.expiration.ExpirationPlugin({
            maxEntries: 50, // Armazena em cache até 50 arquivos de dados
            maxAgeSeconds: 30 * 24 * 60 * 60, // Mantém os dados por 30 dias
          }),
          new workbox.cacheableResponse.CacheableResponsePlugin({
            statuses: [0, 200], // Armazena em cache respostas bem-sucedidas e opacas
          }),
        ],
        // Ignora o parâmetro de consulta 'v' ao corresponder solicitações a entradas de cache.
        // Isso garante que 'data.json?v=123' e 'data.json?v=456' sejam tratados como o mesmo recurso no cache.
        matchOptions: {
          ignoreSearch: true,
        },
      })
    );

    // 3. Cache de runtime para outros assets estáticos (ex: imagens, fontes, scripts e estilos não precacheados)
    // Esta estratégia serve do cache primeiro, enquanto revalida em segundo plano.
    // É ideal para assets que não mudam com frequência, mas não fazem parte do manifesto de precache.
    workbox.routing.registerRoute(
      ({ request }) =>
        request.destination === "image" ||
        request.destination === "font" ||
        request.destination === "script" ||
        request.destination === "style" ||
        request.destination === "manifest",
      new workbox.strategies.StaleWhileRevalidate({
        cacheName: "static-assets-cache",
        plugins: [
          new workbox.expiration.ExpirationPlugin({
            maxEntries: 200,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Dias
          }),
        ],
      })
    );

    // Cache para imagens do Google User Content
    workbox.routing.registerRoute(
      ({ url }) => url.hostname === "lh3.googleusercontent.com",
      new workbox.strategies.CacheFirst({
        cacheName: "googleusercontent-images",
        plugins: [
          new workbox.expiration.ExpirationPlugin({
            maxEntries: 200,
            maxAgeSeconds: 30 * 24 * 60 * 60,
          }),
          new workbox.cacheableResponse.CacheableResponsePlugin({
            statuses: [0, 200],
          }),
        ],
      })
    );

    // Estratégia NetworkOnly para Google Tag Manager com tratamento de erro
    workbox.routing.registerRoute(
      /^https:\/\/www\.googletagmanager\.com\//,
      new workbox.strategies.NetworkOnly({
        plugins: [
          {
            handlerDidError: async ({ request }) => {
              console.warn(
                `[Workbox] Falha ao buscar script GTM: ${request.url}. Retornando resposta vazia para evitar erro no console.`
              );
              // Retorna uma resposta vazia e bem-sucedida para evitar o erro 'no-response'
              return new Response("", { status: 200, statusText: "OK" });
            },
          },
        ],
      })
    );
  },

  _enableNavigationPreload: () => {
    // Opcional: Habilitar precarregamento de navegação para requisições de navegação mais rápidas.
    if (self.registration && self.registration.navigationPreload) {
      try {
        workbox.navigationPreload.enable();
        Logger.log("Navigation Preload habilitado.");
      } catch (error) {
        Logger.handleError("Erro ao habilitar Navigation Preload", error);
      }
    } else {
      Logger.log(
        "Navigation Preload não suportado ou não disponível neste navegador."
      );
    }
  },
};
CacheManager.init();

// Register the message handlers using Client.receive
// Client.receive("clear", (payload) => DataManager.clearDB(payload));

Client.receive("fetchTitles", async (payload) => {
  const result = await DataManager.db.titles.toArray();
  return result.sort((a, b) => a.id - b.id).map((e) => e.text);
});

Client.receive("fetchLocales", async (payload) => {
  const result = await DataManager.db.locales.toArray();
  return result.sort((a, b) => a.id - b.id).map((e) => e.text);
});

Client.receive("fetchDesc", async (payload) => {
  const result = await DataManager.db.desc.toArray();
  return result.sort((a, b) => a.id - b.id).map((e) => e.text);
});

Client.receive("fetchTags", async (payload) => {
  const filters = {
    search: "",
    href: "",
    title: "",
    group: "",
    ...payload,
  };
  const title = Utils.normalizeString(filters.title);
  const group = Utils.normalizeString(filters.group);
  const search = Utils.normalizeString(filters.search);
  try {
    let query = DataManager.db.tags;
    if (filters.href || title || group || search) {
      query = query.filter((tag) => {
        let match = true;
        if (filters.href && !tag.href.includes(filters.href)) {
          match = false;
        }
        if (match && title && !tag.normalizedTitle.includes(title)) {
          match = false;
        }
        if (match && group && !tag.normalizedGroup.includes(group)) {
          match = false;
        }
        if (match && search) {
          const target = `${tag.normalizedTitle} ${
            tag.normalizedGroup
          } ${Utils.normalizeString(tag.description || "")}`;
          if (!target.includes(search)) {
            match = false;
          }
        }
        return match;
      });
    }
    const filteredTags = (await query.toArray()).sort(
      (a, b) => a.order - b.order
    );
    return filteredTags;
  } catch (error) {
    Logger.handleError("Erro ao buscar tags com filtro em Dexie", error); // Corrigido para usar handleError
    return [];
  }
});

Client.receive("fetchEventos", async (payload) => {
  try {
    const data = {
      data: {
        events: [],
        calendars: [],
        titles: [],
        locales: [],
        desc: [],
      },
      message: "Dados carregados com sucesso!",
    };

    const filters = {
      id: "",
      search: "",
      title: "",
      locale: "",
      start: "",
      end: "",
      calendars: [],
      ...payload,
    };

    const calendarSet = new Set(filters.calendars.map(Utils.normalizeString));

    const startDate = new Date(filters.start);
    const endDate = new Date(filters.end);

    Utils.setBrasiliaTime(startDate, 0, 0, 0, 0);
    Utils.setBrasiliaTime(endDate, 23, 59, 59, 999);

    const regexTitle = new RegExp(Utils.normalizeString(filters.title), "i");
    const regexLocale = new RegExp(
      `^${Utils.normalizeString(filters.locale)}`,
      "i"
    );

    const terms = Utils.normalizeString(filters.search)
      .replace(/\bou\b/gi, ",")
      .split(/,|\s+/)
      .map((t) => t.trim())
      .filter(Boolean);

    const includeTerms = [];
    const excludeTerms = [];

    terms.forEach((term) => {
      if (term.startsWith("!")) {
        const cleanTerm = term.substring(1).trim();
        if (cleanTerm) {
          excludeTerms.push(cleanTerm);
        }
      } else {
        includeTerms.push(term);
      }
    });
    const includeRegexesSearch = includeTerms.map(
      (t) => new RegExp(`\\b${t}`, "i")
    );
    const excludeRegexesSearch = excludeTerms.map(
      (t) => new RegExp(`\\b${t}`, "i")
    );

    try {
      let collection;
      if (
        filters.start &&
        filters.end &&
        !isNaN(startDate.getTime()) &&
        !isNaN(endDate.getTime())
      ) {
        collection = DataManager.db.eventos
          .where("date")
          .between(startDate, endDate, true, true);
      } else {
        collection = DataManager.db.eventos.toCollection();
      }

      const filteredEvents = await collection
        .filter((evento) => {
          if (filters.id && evento.id === filters.id) {
            return true;
          }

          let match = true;
          const target = `${evento.normalizedTitle || ""} ${
            evento.normalizedLocale || ""
          } ${evento.normalizedDesc || ""}`;

          if (
            filters.calendars.length &&
            !calendarSet.has(evento.normalizedList)
          ) {
            match = false;
          }
          if (
            match &&
            filters.title &&
            !regexTitle.test(evento.normalizedTitle)
          ) {
            match = false;
          }
          if (
            match &&
            filters.locale &&
            !regexLocale.test(evento.normalizedLocale)
          ) {
            match = false;
          }
          if (
            match &&
            filters.search &&
            !includeRegexesSearch.every((r) => r.test(target))
          ) {
            match = false;
          }
          if (
            match &&
            filters.search &&
            excludeRegexesSearch.some((r) => r.test(target))
          ) {
            match = false;
          }

          return match;
        })
        .toArray();

      const calendars = new Set(),
        titles = new Set(),
        locales = new Set(),
        desc = new Set();

      filteredEvents.forEach((evento) => {
        calendars.add(evento.list);
        titles.add(evento.title);
        locales.add(evento.locale);
        desc.add(evento.desc);
      });

      data.data = {
        events: filteredEvents,
        calendars: Array.from(calendars),
        titles: Array.from(titles),
        locales: Array.from(locales),
        desc: Array.from(desc),
      };
    } catch (error) {
      Logger.handleError("Erro na busca de eventos com Dexie", error); // Corrigido para usar handleError
      data.error = error;
    }
    return data;
  } catch (err) {
    Logger.handleError("Erro ao carregar dados existentes", err);
    throw err;
  }
});

Client.receive("fetchRelatorio", async (payload) => {
  const filters = {
    nome: "",
    cidade: "",
    locale: "",
    offset: 0,
    limit: 50,
    ...payload,
  };

  const data = {
    data: [],
    total: 0,
    message: "Dados carregados com sucesso.",
    filters,
  };

  try {
    const nome = Utils.normalizeString(filters.nome || "");
    const cidade = Utils.normalizeString(filters.cidade || "");
    const includeRegexesNome = nome
      .split(/,|\s+/)
      .map((t) => new RegExp(`\\b${t}`, "i"));
    const includeRegexesCidade = cidade
      .split(/,|\s+/)
      .map((t) => new RegExp(`\\b${t}`, "i"));

    try {
      const all = await DataManager.db.relatorio
        .toCollection()
        .filter((row) => {
          if (!nome && !cidade) return true;
          const rowNome = row.normalizedMinisterio || "";
          const rowCidade = row.normalizedNomeCidade || "";
          return (
            includeRegexesNome.every((r) => r.test(rowNome)) &&
            includeRegexesCidade.every((r) => r.test(rowCidade))
          );
        })
        .toArray();

      let sorted = all;
      if (cidade) {
        const exact = [];
        const others = [];
        // Simplificado: Assumindo que normalizedNomeCidade sempre existe após updateRelatorio
        const getRowCityNormalized = (row) =>
          Utils.normalizeString(row.NomeCidade);

        for (let i = 0; i < all.length; i++) {
          const row = all[i];
          const rowCidadeNorm = getRowCityNormalized(row);
          if (rowCidadeNorm === cidade) {
            exact.push(row);
          } else {
            others.push(row);
          }
        }
        sorted = exact.length ? exact.concat(others) : others;
      } else if (nome) {
        const exact = [];
        const others = [];
        // Simplificado: Assumindo que normalizedMinisterio sempre existe após updateRelatorio
        const getRowNameNormalized = (row) =>
          Utils.normalizeString(row.MinisterioConcatenados);

        for (let i = 0; i < all.length; i++) {
          const row = all[i];
          const rowNomeNorm = getRowNameNormalized(row);
          if (rowNomeNorm === nome) {
            exact.push(row);
          } else {
            others.push(row);
          }
        }
        sorted = exact.length ? exact.concat(others) : others;
      }

      data.total = sorted.length;
      data.data = sorted.slice(
        filters.offset || 0,
        (filters.offset || 0) + (filters.limit || 50)
      );
    } catch (error) {
      Logger.handleError("[[DEXIE]] Erro na busca do relatorio:", error);
    }
  } catch (err) {
    Logger.handleError("Erro ao carregar dados existentes", err);
  }
});

Client.receive("update", (payload) => DataManager.updateProcess(payload));

Client.receive("fetchRecenteTags", async (payload) => {
  try {
    const limit = payload.limit || 10;
    const tagsWithUpdated = await DataManager.db.tags
      .filter(
        (tag) =>
          tag.updated !== undefined &&
          tag.updated !== null &&
          tag.updated !== ""
      )
      .toArray();
    const recentTags = tagsWithUpdated
      .sort((a, b) => new Date(b.updated) - new Date(a.updated))
      .slice(0, limit);
    return recentTags;
  } catch (error) {
    Logger.handleError("Erro ao buscar tags recentes em Dexie", error); // Corrigido para usar handleError
    return [];
  }
});

Client.receive("client_ping", (payload, eventSource) => {
  Logger.log(
    "SW: Received client_ping from:",
    eventSource.url,
    "payload:",
    payload
  );
  return {
    status: "pong",
    swStatus: "active",
    swInitialized: true,
    payload,
    eventSource,
  };
});
