// Import Workbox e Dexie
importScripts(
  "/js/sw/workbox.js",
  "/js/sw/logger.js",
  "/js/sw/database.js",
  "/js/sw/firebase.js",
  "/js/sw/client-manager.js",
  "/js/sw/utils.js"
);

self.FirebaseManager.init();
self.Client.init();
self.CacheManager.init();

self.Client.receive("clear", (payload) => self.DataManager.clearDB(payload));
self.Client.receive("fetchTitles", async (payload) => {
  const result = await self.DataManager.db.titles.toArray();
  return result.sort((a, b) => a.id - b.id).map((e) => e.text);
});

self.Client.receive("fetchLocales", async (payload) => {
  const result = await self.DataManager.db.locales.toArray();
  return result.sort((a, b) => a.id - b.id).map((e) => e.text);
});

self.Client.receive("fetchDesc", async (payload) => {
  const result = await self.DataManager.db.desc.toArray();
  return result.sort((a, b) => a.id - b.id).map((e) => e.text);
});

self.Client.receive("fetchTags", async (payload) => {
  const filters = {
    search: "",
    href: "",
    title: "",
    group: "",
    ...payload,
  };
  const title = self.Utils.normalizeString(filters.title);
  const group = self.Utils.normalizeString(filters.group);
  const search = self.Utils.normalizeString(filters.search);
  try {
    let query = self.DataManager.db.tags;
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
          } ${self.Utils.normalizeString(tag.description || "")}`;
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
    self.Logger.handleError("Erro ao buscar tags com filtro em Dexie", error); // Corrigido para usar handleError
    return [];
  }
});

self.Client.receive("fetchEventos", async (payload) => {
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

    const calendarSet = new Set(filters.calendars.map(self.Utils.normalizeString));

    const startDate = new Date(filters.start);
    const endDate = new Date(filters.end);

    self.Utils.setBrasiliaTime(startDate, 0, 0, 0, 0);
    self.Utils.setBrasiliaTime(endDate, 23, 59, 59, 999);

    const regexTitle = new RegExp(self.Utils.normalizeString(filters.title), "i");
    const regexLocale = new RegExp(
      `^${self.Utils.normalizeString(filters.locale)}`,
      "i"
    );

    const terms = self.Utils.normalizeString(filters.search)
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
        collection = self.DataManager.db.eventos
          .where("date")
          .between(startDate, endDate, true, true);
      } else {
        collection = self.DataManager.db.eventos.toCollection();
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
      self.Logger.handleError("Erro na busca de eventos com Dexie", error); // Corrigido para usar handleError
      data.error = error;
    }
    return data;
  } catch (err) {
    self.Logger.handleError("Erro ao carregar dados existentes", err);
    throw err;
  }
});

self.Client.receive("fetchRelatorio", async (payload) => {
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
    const nome = self.Utils.normalizeString(filters.nome || "");
    const cidade = self.Utils.normalizeString(filters.cidade || "");
    const includeRegexesNome = nome
      .split(/,|\s+/)
      .map((t) => new RegExp(`\\b${t}`, "i"));
    const includeRegexesCidade = cidade
      .split(/,|\s+/)
      .map((t) => new RegExp(`\\b${t}`, "i"));

    try {
      const all = await self.DataManager.db.relatorio
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
          self.Utils.normalizeString(row.NomeCidade);

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
          self.Utils.normalizeString(row.MinisterioConcatenados);

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
      return data;
    } catch (error) {
      self.Logger.handleError("[[DEXIE]] Erro na busca do relatorio:", error);
    }
  } catch (err) {
    self.Logger.handleError("Erro ao carregar dados existentes", err);
  }
});

self.Client.receive("update", (payload) => self.DataManager.updateProcess(payload));

self.Client.receive("fetchRecenteTags", async (payload) => {
  try {
    const limit = payload.limit || 10;
    const tagsWithUpdated = await self.DataManager.db.tags
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
    self.Logger.handleError("Erro ao buscar tags recentes em Dexie", error); // Corrigido para usar handleError
    return [];
  }
});

self.Client.receive("client_ping", (payload, eventSource) => {
  self.Logger.log(
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
