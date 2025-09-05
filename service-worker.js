// ==========================================================
// --- Seção 1: Configurações e Importações de Bibliotecas ---
// ==========================================================

// Importa os scripts principais do Workbox e Firebase
importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js",
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js"
);

// Constantes de Configuração
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDjh-kSamZSSOA1pEwMuCB1HZxiZBgCaVE",
  authDomain: "agenda-408113.firebaseapp.com",
  projectId: "agenda-408113",
  storageBucket: "agenda-408113.appspot.com",
  messagingSenderId: "865568496873",
  appId: "1:865568496873:web:66e24b202af5ba7f1b6478",
  measurementId: "G-KDP8RZ0Z19",
};

// Constantes do IndexedDB
const DB_NAME = 'Agenda';
const DB_VERSION = 5;


// ==========================================================
// --- Seção 2: Lógica de Caching com Workbox ---
// ==========================================================

if (workbox) {

  console.log("Workbox está carregado! 🎉");

  self.skipWaiting();
  workbox.core.clientsClaim();

  const isProduction = self.location.origin.includes('ccbgo.org.br');

  if (isProduction) {
    workbox.core.setCacheNameDetails({
      prefix: "nuxt-prod-cache"
    });
    workbox.routing.setDefaultHandler(new workbox.strategies.StaleWhileRevalidate());
    // Rota para a página inicial, sempre busca da rede primeiro
    workbox.routing.registerRoute(
      /^\/$/,
      new workbox.strategies.NetworkFirst({
        cacheName: "home-page-cache",
        plugins: [
          new workbox.cacheableResponse.CacheableResponsePlugin({
            statuses: [0, 200],
          }),
        ],
      })
    );

    // Rota para assets estáticos, prioriza o cache
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

    // Rota para o Google Tag Manager (sempre da rede, sem cache)
    workbox.routing.registerRoute(
      /^https:\/\/www\.googletagmanager\.com\//,
      new workbox.strategies.NetworkOnly({
        plugins: [
          {
            handlerDidError: async ({ request }) => {
              console.warn(`[Workbox] Falha ao buscar script GTM da rede: ${request.url}.`);
              return null;
            },
          },
        ],
      })
    );

    // Rota para a API, sempre da rede (sem cache)
    workbox.routing.registerRoute(
      /.*\/api\/.*/,
      new workbox.strategies.NetworkOnly()
    );
  } else {
    workbox.core.setCacheNameDetails({
      prefix: "nuxt-dev-cache"
    });
    workbox.routing.setDefaultHandler(new workbox.strategies.NetworkFirst());
  }
} else {
  console.log("Workbox falhou ao carregar. 😬");
}

// ==========================================================
// --- Seção 3: Funções Auxiliares (IndexedDB) ---
// ==========================================================

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = (event) => reject(`Erro ao abrir o banco de dados: ${event.target.error}`);
    request.onsuccess = (event) => resolve(event.target.result);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('eventos')) {
        const eventosStore = db.createObjectStore('eventos', { keyPath: 'id' });
        eventosStore.createIndex('group', 'group', { unique: false });
        eventosStore.createIndex('list', 'list', { unique: false });
      }
      if (!db.objectStoreNames.contains('notificacoesEnviadas')) {
        db.createObjectStore('notificacoesEnviadas', { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains('titles')) {
        db.createObjectStore('titles', { keyPath: 'text' });
      }
      if (!db.objectStoreNames.contains('locales')) {
        db.createObjectStore('locales', { keyPath: 'text' });
      }
      if (!db.objectStoreNames.contains('desc')) {
        db.createObjectStore('desc', { keyPath: 'text' });
      }
    };
  });
}

async function clearData(storeName) {
  const db = await openDatabase();
  const transaction = db.transaction([storeName], 'readwrite');
  const store = transaction.objectStore(storeName);
  return new Promise((resolve, reject) => {
    const request = store.clear();
    request.onsuccess = () => resolve('Banco de dados limpo com sucesso!');
    request.onerror = (event) => reject(`Erro ao limpar o banco de dados: ${event.target.error}`);
  });
}

async function saveAllData(storeName, dataArray) {
  const db = await openDatabase();
  const transaction = db.transaction([storeName], 'readwrite');
  const store = transaction.objectStore(storeName);
  return new Promise((resolve, reject) => {
    dataArray.forEach(item => store.put(item));
    transaction.oncomplete = () => resolve('Dados salvos com sucesso!');
    transaction.onerror = (event) => reject(`Erro ao salvar os dados: ${event.target.error}`);
  });
}

async function isNotificationSent(eventId) {
  const db = await openDatabase();
  const transaction = db.transaction(['notificacoesEnviadas'], 'readonly');
  const store = transaction.objectStore('notificacoesEnviadas');
  const request = store.get(eventId);
  return new Promise((resolve) => {
    request.onsuccess = () => resolve(!!request.result);
    request.onerror = () => resolve(false);
  });
}

async function logNotificationSent(eventId) {
  const db = await openDatabase();
  const transaction = db.transaction(['notificacoesEnviadas'], 'readwrite');
  const store = transaction.objectStore('notificacoesEnviadas');
  return new Promise((resolve, reject) => {
    const request = store.put({ id: eventId, timestamp: new Date().toISOString() });
    request.onsuccess = () => resolve();
    request.onerror = (event) => reject(`Erro ao registrar notificação enviada: ${event.target.error}`);
  });
}

const ptBRFormatters = {
  date: new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit' }),
  time: new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit' }),
  weekday: new Intl.DateTimeFormat('pt-BR', { weekday: 'short' }),
};

function normalizeString(str = "") {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function preprocessEvent(evento) {
  const d = evento.date ? new Date(evento.date) : null;
  const isSpecialTitle = evento.title === "AVISOS À IRMANDADE";
  evento.noDate = evento.desc.includes("!nodate");
  if (evento.noDate) evento.desc = evento.desc.replace(/!nodate/gi, '').trim();
  const hasValidDate = d && !isSpecialTitle && !evento.noDate;
  const isMorningOrLater = d && d.getHours() >= 3;

  const { title, locale, desc, list } = evento;
  const processedEvent = {
    ...evento,
    onDate: d,
  };

  if (hasValidDate) {
    processedEvent.formatDate = ptBRFormatters.date.format(d);
    processedEvent.formatWeek = ptBRFormatters.weekday.format(d).replace('.', '');
  } else {
    processedEvent.formatDate = '';
    processedEvent.formatWeek = '';
  }

  if (hasValidDate && isMorningOrLater) {
    processedEvent.formatTime = ptBRFormatters.time.format(d);
  } else {
    processedEvent.formatTime = '';
  }
  processedEvent.normalizedTitle = normalizeString(title);
  processedEvent.normalizedLocale = normalizeString(locale);
  processedEvent.normalizedDesc = normalizeString(desc);
  processedEvent.normalizedList = normalizeString(list);
  processedEvent.desc = (desc || '').replace(/<(?!\/?(b|br)\b)[^>]*>/gi, '');
  processedEvent.date = d;
  processedEvent.end = new Date(evento.end);
  return processedEvent;
}

// ==========================================================
// --- Seção 4: Lógica de Notificações e Firebase ---
// ==========================================================

firebase.initializeApp(FIREBASE_CONFIG);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  try {
    const notification = payload.notification || {};
    const data = payload.data || {};
    const notificationTitle = notification.title || "Nova Notificação";
    const notificationOptions = {
      body: notification.body || "Você tem uma nova mensagem.",
      icon: notification.icon || "/favicon.ico",
      data: data,
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
  } catch (error) {
    console.error("[firebase] Erro ao exibir notificação em segundo plano:", error);
  }
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const targetUrl = event.notification.data.url || "/";
  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true })
      .then((clientList) => {
        const urlToOpen = new URL(targetUrl, self.location.origin).href;
        const matchingClient = clientList.find(c => c.url.startsWith(urlToOpen));
        return matchingClient ? matchingClient.focus() : self.clients.openWindow(urlToOpen);
      })
      .catch((err) => console.error("[firebase] Erro ao redirecionar:", err))
  );
});

async function showTomorrowEventNotifications() {
  try {
    const db = await openDatabase();
    const transaction = db.transaction(['eventos'], 'readonly');
    const store = transaction.objectStore('eventos');
    const eventos = await new Promise((resolve, reject) => {
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject('Erro ao buscar dados do cache.');
    });

    if (!eventos || eventos.length === 0) {
      console.log('Nenhum evento no cache para notificar.');
      return;
    }

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const tomorrowEvents = eventos.filter(e => {
      const eventDate = new Date(e.date);
      eventDate.setHours(0, 0, 0, 0);
      return eventDate.getTime() === tomorrow.getTime();
    })
      .filter(e => ["Regional Faina", "Regional Goiânia", "Regional Uruaçu", "Regional Bom Jesus", "Regional Catalão"].includes(e.list));

    const eventsToNotify = [];
    for (const event of tomorrowEvents) {
      const isSent = await isNotificationSent(event.id);
      if (!isSent) {
        eventsToNotify.push(event);
      }
    }

    if (eventsToNotify.length > 0) {
      const summary = Array.from(new Set(eventsToNotify.map(e => `${e.title}|${e.locale}`)))
        .map(s => s.replace('|', ' - '))
        .join('\n');

      if (eventsToNotify.length && eventsToNotify[0]?.date) {
        let dateStr = eventsToNotify[0].date;
        if (dateStr instanceof Date) {
          dateStr = dateStr.toISOString();
        }
        const url = `/agenda/?next=true&regionais=true&data=${dateStr.replace(/T.*/g, "")}`;

        await self.registration.showNotification(
          `Eventos de amanhã (${eventsToNotify.length})`, {
          body: summary,
          icon: '/icons/icon-128x128.png',
          tag: `eventos-amanha-resumo`,
          renotify: true,
          data: { url: url }
        }
        );

        console.log("Notificações> ", { url, summary });
        for (const event of eventsToNotify) {
          await logNotificationSent(event.id);
        }
        console.log(`Notificações exibidas para ${eventsToNotify.length} evento(s) de amanhã.`);
      }

    } else {
      console.log('Nenhum novo evento para amanhã. Nenhuma notificação exibida.');
    }
  } catch (error) {
    console.error('Falha ao exibir notificações:', error);
  }
}

// ==========================================================
// --- Seção 5: Handlers Principais de Eventos ---
// ==========================================================

self.addEventListener("install", () => {
  console.log("[firebase] Service Worker instalado.");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("[firebase] Service Worker ativado.");
  event.waitUntil(self.clients.claim());
});

self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-eventos') {
    console.log('Evento de sincronização recebido. Buscando dados e notificando...');
    event.waitUntil(
      fetch('/data/data.json')
        .then(response => {
          if (!response.ok) throw new Error('Falha na resposta da rede.');
          return response.json();
        })
        .then(data => {
          clearData('eventos').then(() => saveAllData('eventos', data.eventos.items.map(preprocessEvent)))
          clearData('titles').then(() => saveAllData('titles', data.eventos.titles.map((text, id) => ({ text, id }))))
          clearData('locales').then(() => saveAllData('locales', data.eventos.locales.map((text, id) => ({ text, id }))))
          clearData('desc').then(() => saveAllData('desc', data.eventos.desc.map((text, id) => ({ text, id }))))
        })
        .then(() => showTomorrowEventNotifications())
        .catch(error => console.error('Falha na sincronização ou notificação:', error))
    );
  }
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'GET_DB_VERSION') {
    event.ports[0].postMessage({ type: 'DB_VERSION', version: DB_VERSION });
  }
});