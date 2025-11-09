// ==========================================================
// --- Seção 1: Importações e Configurações Globais ---
// ==========================================================

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js",
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js"
);

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
};

// ==========================================================
// --- Seção 3: Workbox Handler ---
// ==========================================================

const WorkboxHandler = {
  init: function () {
    if (workbox) {
      console.log("Workbox está carregado! 🎉");

      self.skipWaiting();
      workbox.core.clientsClaim();

      const isProduction = self.location.origin.includes("ccbgo.org.br");

      if (isProduction) {
        workbox.core.setCacheNameDetails({ prefix: "nuxt-prod-cache" });

        // Lista de URLs para pré-cachear (disponíveis offline imediatamente)
        const precacheList = [
          '/',
          '/sobre',
          '/forms/contato',
          '/lista',
          '/agenda',
          '/hinos',
          '/navegar'
        ];

        // Pré-cacheia as páginas essenciais
        workbox.precaching.precacheAndRoute(precacheList.map(url => ({ url, revision: null })));

        // Define um handler padrão para rotas não pré-cacheadas ou não explicitamente roteadas
        workbox.routing.setDefaultHandler(
          new workbox.strategies.StaleWhileRevalidate()
        );

        workbox.routing.registerRoute(
          /\.(?:js|json|css|html|png|svg|ico|woff2|woff|ttf|otf|eot|jpg|jpeg|gif|bmp|webp|avif)$/,
          new workbox.strategies.CacheFirst({
            cacheName: "assets-cache",
            plugins: [
              new workbox.expiration.ExpirationPlugin({
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              }),
              new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200],
              }),
            ],
          })
        );

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
                  return new Response('', { status: 200, statusText: 'OK' });
                },
              },
            ],
          })
        );
        workbox.routing.registerRoute(
          /.*\/api\/.*/,
          new workbox.strategies.NetworkOnly()
        );
      } else {
        workbox.core.setCacheNameDetails({ prefix: "nuxt-dev-cache" });
        workbox.routing.setDefaultHandler(
          new workbox.strategies.NetworkFirst()
        );
      }
    } else {
      console.log("Workbox falhou ao carregar. 😬");
    }
  },
};

// ==========================================================
// --- Seção 4: Firebase Handler ---
// ==========================================================

const FirebaseHandler = {
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

// ==========================================================
// --- Seção 5: Core Service Worker Handler ---
// ==========================================================

const CoreSWHandler = {
  init: function () {
    self.addEventListener("install", this.onInstall);
    self.addEventListener("activate", this.onActivate);
  },

  onInstall: function () {
    console.log("[SW] Service Worker instalado.");
    self.skipWaiting();
  },

  onActivate: function (event) {
    console.log("[SW] Service Worker ativado.");
    event.waitUntil(self.clients.claim());
  },
};

// ==========================================================
// --- Seção 6: Data Synchronization Handler ---
// ==========================================================

const DataSyncHandler = {
  syncLock: null,

  preprocessEvent: function (evento) {
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
    processedEvent.desc = (desc || "").replace(/<(?!\/?(b|br)\b)[^>]*>/gi, "");
    processedEvent.date = d;
    processedEvent.end = new Date(evento.end);
    return processedEvent;
  },

  performSync: async function () {
    try {
      const fetchPromises = [
        fetch(`/data/tags.json?v=${new Date().getTime()}`).then((res) =>
          res.json()
        ),
        fetch(`/data/tags-circulares.json?v=${new Date().getTime()}`).then(
          (res) => res.json()
        ),
        fetch(`/data/data.json?v=${new Date().getTime()}`).then((res) =>
          res.json()
        ),
      ];

      const [tagsMain, tagsCircular, dataMain] = await Promise.all(
        fetchPromises
      );

      // Agrupa tags e pré-processa eventos
      const allTags = [...(tagsMain.tags || []), ...(tagsCircular.tags || [])];
      const newEvents = dataMain.eventos.items.map(this.preprocessEvent);

      const mapText = (text, id) => ({ id: id + 1, text });
      const lookupData = {
        titles: dataMain.eventos.titles.map(mapText),
        locales: dataMain.eventos.locales.map(mapText),
        desc: dataMain.eventos.desc.map(mapText),
      };

      // Adicional: publica SYNC_DATA_READY via BroadcastChannel para garantir entrega em janelas não controladas
      try {
        const bc = new BroadcastChannel("agenda_channel");
        bc.postMessage({
          type: "SYNC_DATA_READY",
          payload: {
            events: newEvents,
            tags: allTags.map((tag, index) => ({ ...tag, id: index + 1 })),
            lookup: lookupData,
          },
        });
        bc.close();
      } catch (bcErr) {
        console.warn(
          "[SW] BroadcastChannel indisponível ou falhou ao postar SYNC_DATA_READY:",
          bcErr
        );
      }

      setTimeout(() => {
        RelatorioHandler.fetchIfNeeded().catch((err) =>
          console.warn("[SW] Erro no fetchRelatorioIfNeeded:", err)
        );
      }, 1500);
    } catch (error) {
      console.error("[SW] Falha na busca de rede para sincronização.", error);
    } finally {
      this.syncLock = null; // Libera o lock após a sincronização
    }
  },

  init: function () {
    self.addEventListener("sync", (event) => {
      if (event.tag === "full-data-sync") {
        if (!this.syncLock) {
          console.warn("[SW] Evento de sincronização em background recebido.");
          event.waitUntil(this.performSync());
          this.syncLock = true;
        }
      }
    });

    self.addEventListener("message", (event) => {
      if (event.data?.type === "full-data-sync") {
        if (!this.syncLock) {
          console.warn("[SW] Mensagem recebida para sincronização imediata.");
          event.waitUntil(this.performSync());
          this.syncLock = true;
        }
      }
    });
  },
};

// ==========================================================
// --- Seção 7: Relatorio Handler ---
// ==========================================================

const RelatorioHandler = {
  lastRelatorioChunks: null,
  lastRelatorioMeta: null,
  pendingRelatorioVersion: null,
  pendingRelatorioVersionTimeout: null,

  fetchIfNeeded: async function () {
    try {
      // Primeiro, busca o metadata.json para verificar a versão do relatorio
      const metadataUrl = `/data/metadata.json?v=${new Date().getTime()}`;
      const metadataResp = await fetch(metadataUrl);
      if (!metadataResp.ok) {
        console.warn(
          "[SW] Falha ao buscar metadata.json:",
          metadataResp.status
        );
        return;
      }
      const metadata = await metadataResp.json();
      const remoteVersion = metadata.relatorio?.version || null;

      let cachedVersion = null;
      try {
        const cache = await caches.open("relatorio-meta");
        const res = await cache.match("/relatorio-version");
        if (res) {
          cachedVersion = await res.text();
        }
      } catch (e) {
        console.warn("[SW] Falha ao ler versão do cache do relatorio:", e);
        cachedVersion = null;
      }

      if (remoteVersion && cachedVersion === remoteVersion) {
        console.log(
          "[SW] Versão do relatorio em cache é a mais recente. Nenhuma ação necessária."
        );
        return; // Retorna se a versão em cache for a mesma da remota
      }

      console.log(
        `[SW] Nova versão do relatorio detectada (Remota: ${remoteVersion}, Cache: ${cachedVersion}). Baixando relatorio.json...`
      );

      // Se as versões forem diferentes, busca o relatorio.json completo
      const relatorioUrl = `/data/relatorio.json?v=${new Date().getTime()}`;
      const resp = await fetch(relatorioUrl);
      if (!resp.ok) {
        console.warn("[SW] Falha ao buscar relatorio.json:", resp.status);
        return;
      }
      const rel = await resp.json();
      const headers =
        [...rel.headers, "normalizedNomeCidade", "normalizedNome"] || [];
      const rawRows = rel.data || [];
      const rows = rawRows.map((r) => [
        ...r,
        Utils.normalizeString(r[1] || ""),
        Utils.normalizeString(r[2] || ""),
      ]);
      // console.log("relatorioi Registros para salvar:::: ", rows);

      const total = rows.length;
      const chunkSize = 500;
      const totalChunks = Math.max(1, Math.ceil(total / chunkSize));

      const clientsList = await self.clients.matchAll({ type: "window" });
      const postChunk = (chunkIndex, chunkRows) => {
        const payload = {
          headers,
          rows: chunkRows,
          chunkIndex,
          totalChunks,
          total,
          version: remoteVersion,
        };
        clientsList.forEach((client) =>
          client.postMessage({ type: "RELATORIO_RAW_DATA_CHUNK", payload })
        );
        try {
          const bc = new BroadcastChannel("agenda_channel");
          bc.postMessage({ type: "RELATORIO_RAW_DATA_CHUNK", payload });
          bc.close();
        } catch (bcErr) {
          // não fatal
        }
      };

      this.lastRelatorioChunks = [];

      // envia os chunks sequencialmente, com pequena pausa para não travar a thread
      for (let i = 0, idx = 1; i < total; i += chunkSize, idx++) {
        const chunkRows = rows.slice(i, i + chunkSize);
        const payload = {
          headers,
          rows: chunkRows,
          chunkIndex: idx,
          totalChunks,
          total,
          version: remoteVersion,
        };
        this.lastRelatorioChunks.push(payload);
        postChunk(idx, chunkRows);
        // pequena pausa (ajustável) para evitar bloquear
        await new Promise((res) => setTimeout(res, 50));
      }
      this.lastRelatorioMeta = {
        headers,
        totalChunks,
        total,
        version: remoteVersion,
      };

      // sinaliza fim do envio
      const endPayload = {
        headers,
        totalChunks,
        total,
        version: remoteVersion,
      };
      clientsList.forEach((client) =>
        client.postMessage({
          type: "RELATORIO_RAW_DATA_END",
          payload: endPayload,
        })
      );
      try {
        const bc = new BroadcastChannel("agenda_channel");
        bc.postMessage({ type: "RELATORIO_RAW_DATA_END", payload: endPayload });
        bc.close();
      } catch (bcErr) {
        console.warn(
          "[[SW]] Falha ao enviar mensagem para BroadcastChannel agenda_channel:",
          bcErr
        );
      }

      // Controle de versão pendente do relatorio (aguarda confirmação do cliente)
      this.pendingRelatorioVersion = remoteVersion;
      this.pendingRelatorioVersionTimeout = setTimeout(() => {
        console.warn(
          "[SW] Timeout aguardando confirmação de salvamento do relatorio. Versão pendente:",
          this.pendingRelatorioVersion
        );
        this.pendingRelatorioVersion = null;
      }, 60 * 1000); // 60 segundos

      console.log("[SW] relatorio.json enviado para clientes (por chunks).", {
        total,
        totalChunks,
      });
    } catch (e) {
      console.error("[SW] Erro ao processar relatorio.json em background:", e);
    }
  },

  handleRelatorioSaveComplete: async function (event) {
    const version = event.data.payload?.version;
    if (
      version &&
      this.pendingRelatorioVersion &&
      version === this.pendingRelatorioVersion
    ) {
      try {
        const cache = await caches.open("relatorio-meta");
        await cache.put("/relatorio-version", new Response(String(version)));
        console.log(
          "[SW] Recebida confirmação de salvamento do relatorio. Versão gravada no cache:",
          version
        );
      } catch (e) {
        console.error(
          "[SW] Erro ao gravar versão do relatorio após confirmação:",
          e
        );
      } finally {
        this.pendingRelatorioVersion = null;
        if (this.pendingRelatorioVersionTimeout) {
          clearTimeout(this.pendingRelatorioVersionTimeout);
          this.pendingRelatorioVersionTimeout = null;
        }
      }
    }
  },

  handleRequestRelatorioChunks: function (event) {
    const { version, missingChunks } = event.data.payload || {};
    if (
      this.lastRelatorioChunks &&
      this.lastRelatorioMeta &&
      this.lastRelatorioMeta.version === version &&
      Array.isArray(missingChunks)
    ) {
      const clientsListPromise = self.clients.matchAll({ type: "window" });
      clientsListPromise.then((clientsList) => {
        missingChunks.forEach((chunkIdx) => {
          const payload = this.lastRelatorioChunks[chunkIdx - 1];
          if (payload) {
            clientsList.forEach((client) =>
              client.postMessage({
                type: "RELATORIO_RAW_DATA_CHUNK",
                payload,
              })
            );
            try {
              const bc = new BroadcastChannel("agenda_channel");
              bc.postMessage({
                type: "RELATORIO_RAW_DATA_CHUNK",
                payload,
              });
              bc.close();
            } catch (bcErr) {}
          }
        });
      });
    }
  },

  init: function () {
    self.addEventListener("message", (event) => {
      if (event.data?.type === "RELATORIO_SAVE_COMPLETE") {
        event.waitUntil(this.handleRelatorioSaveComplete(event));
      } else if (event.data?.type === "REQUEST_RELATORIO_CHUNKS") {
        this.handleRequestRelatorioChunks(event);
      }
    });
  },
};

// ==========================================================
// --- Seção 8: Inicialização Principal ---
// ==========================================================

WorkboxHandler.init();
FirebaseHandler.init();
CoreSWHandler.init();
DataSyncHandler.init();
RelatorioHandler.init();
