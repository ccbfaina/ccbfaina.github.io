importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js"
);

// Carrega os scripts do Firebase para Service Worker
importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js"
);

/**
 * Meu service Worker
 */

if (workbox) {
  console.log("Workbox está carregado! 🎉");
} else {
  console.log("Workbox falhou ao carregar. 😬");
}

/**
 * Cache
 */
// Define os detalhes do nome do cache
workbox.core.setCacheNameDetails({
  prefix: "nuxt-app-cache",
});

self.skipWaiting();
workbox.core.clientsClaim();

workbox.routing.setDefaultHandler(new workbox.strategies.NetworkFirst());

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
  /^https:\/\/www\.googletagmanager\.com\//,
  new workbox.strategies.NetworkOnly({
    plugins: [
      {
        handlerDidError: async ({ request }) => {
          console.warn(
            `[Workbox] Failed to fetch GTM script from network: ${request.url}. This might be due to network issues or ad blockers.`
          );
          return null;
        },
      },
    ],
  })
);

workbox.routing.registerRoute(
  /.*\/api\/.*/,
  new workbox.strategies.NetworkOnly()
);

/**
 * Messaging do Firebase
 */
const firebaseConfig = {
  apiKey: "AIzaSyDjh-kSamZSSOA1pEwMuCB1HZxiZBgCaVE",
  authDomain: "agenda-408113.firebaseapp.com",
  projectId: "agenda-408113",
  storageBucket: "agenda-408113.appspot.com",
  messagingSenderId: "865568496873",
  appId: "1:865568496873:web:66e24b202af5ba7f1b6478",
  measurementId: "G-KDP8RZ0Z19",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  try {
    console.log(
      "[firebase-messaging-sw.js] Mensagem em segundo plano recebida:",
      payload
    );

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
    console.error(
      "[firebase-messaging-sw.js] Erro ao exibir notificação:",
      error
    );
  }
});

self.addEventListener("notificationclick", (event) => {
  console.log("[firebase-messaging-sw.js] Notificação clicada:", event);
  event.notification.close();

  const data = event.notification.data || {};
  const targetUrl = data.url || "/";

  event.waitUntil(
    self.clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then((clientList) => {
        const urlToOpen = new URL(targetUrl, self.location.origin).href;
        for (const client of clientList) {
          if (
            client.url.startsWith(urlToOpen) &&
            "focus" in client
          ) {
            return client.focus();
          }
        }
        return self.clients.openWindow(urlToOpen);
      })
      .catch((err) => {
        console.error("[firebase-messaging-sw.js] Erro ao redirecionar:", err);
      })
  );
});

self.addEventListener("install", () => {
  console.log("[firebase-messaging-sw.js] Service Worker instalado.");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("[firebase-messaging-sw.js] Service Worker ativado.");
  event.waitUntil(self.clients.claim());
});

/**
 * Notificações e banco de dados
 */
const dbName = 'Agenda';
const dbVersion = 2;
const storeName = 'eventos';
const sentNotificationsStoreName = 'notificacoesEnviadas';

// Função para abrir ou criar o banco de dados IndexedDB
function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, dbVersion);

    request.onerror = (event) => {
      console.error('Erro ao abrir o banco de dados:', event.target.error);
      reject('Erro ao abrir o banco de dados.');
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains(sentNotificationsStoreName)) {
        db.createObjectStore(sentNotificationsStoreName, { keyPath: 'id' });
      }
    };
  });
}

function clearData() {
  return openDatabase().then(db => {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([storeName], 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.clear();

      request.onsuccess = () => {
        resolve('Banco de dados limpo com sucesso!');
      };

      request.onerror = (event) => {
        console.error('Erro ao limpar o banco de dados:', event.target.error);
        reject('Erro ao limpar o banco de dados.');
      };
    });
  });
}

async function saveAllData(dataArray) {
  const db = await openDatabase();
  const transaction = db.transaction([storeName], 'readwrite');
  const store = transaction.objectStore(storeName);

  return new Promise((resolve, reject) => {
    dataArray.forEach(item => {
      store.put(item);
    });

    transaction.oncomplete = () => {
      resolve('Dados salvos com sucesso!');
    };

    transaction.onerror = (event) => {
      console.error('Erro ao salvar os dados:', event.target.error);
      reject('Erro ao salvar os dados.');
    };
  });
}

async function isNotificationSent(eventId) {
  const db = await openDatabase();
  const transaction = db.transaction([sentNotificationsStoreName], 'readonly');
  const store = transaction.objectStore(sentNotificationsStoreName);

  return new Promise((resolve, reject) => {
    const request = store.get(eventId);
    request.onsuccess = () => {
      resolve(!!request.result);
    };
    request.onerror = () => {
      console.error('Erro ao verificar notificação enviada:', request.error);
      reject(request.error);
    };
  });
}

async function logNotificationSent(eventId) {
  const db = await openDatabase();
  const transaction = db.transaction([sentNotificationsStoreName], 'readwrite');
  const store = transaction.objectStore(sentNotificationsStoreName);

  return new Promise((resolve, reject) => {
    const request = store.put({ id: eventId, timestamp: new Date().toISOString() });
    request.onsuccess = () => resolve();
    request.onerror = () => {
      console.error('Erro ao registrar notificação enviada:', request.error);
      reject(request.error);
    };
  });
}

async function showTomorrowEventNotifications() {
  try {
    const db = await openDatabase();
    const transaction = db.transaction([storeName], 'readonly');
    const store = transaction.objectStore(storeName);
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

    const tomorrowEvents = eventos
      .filter(e => ["Regional Faina", "Regional Goiânia", "Regional Uruaçu", "Regional Bom Jesus", "Regional Catalão"].includes(e.list))
      .filter(event => {
        const eventDate = new Date(event.date);
        eventDate.setHours(0, 0, 0, 0);
        return eventDate.getTime() === tomorrow.getTime();
      })
      .filter(async event => !(await isNotificationSent(event.id)));

    if (tomorrowEvents.length > 0) {
      const summary = tomorrowEvents.map(event =>
        `${event.title} - ${event.locale}`
      ).join('\n');

      const url = `/agenda/?next=true&regionais=true&data=${tomorrowEvents[0].date.replace(/T.*/g, "")}`;
      const options = {
        body: summary,
        icon: '/icons/icon-128x128.png',
        tag: `eventos-amanha-resumo`,
        renotify: true,
        data: { url: url }
      };

      await self.registration.showNotification(
        `Eventos de amanhã (${tomorrowEvents.length})`,
        options
      );

      console.log("Notificações> ", options);


      // Marca todos como notificados
      for (const event of tomorrowEvents) {
        await logNotificationSent(event.id);
      }
    }

    if (tomorrowEvents.length > 0) {
      console.log(`Notificações exibidas para ${tomorrowEvents.length} evento(s) de amanhã.`, tomorrowEvents);
    } else {
      console.log('Nenhum evento para amanhã. Nenhuma notificação exibida.');
    }

  } catch (error) {
    console.error('Falha ao exibir notificações:', error);
  }
}

// --- INTEGRAÇÃO COM SYNC E FETCH ---

self.addEventListener('fetch', event => {
  if (event.request.url.includes('/data/data.json')) {
    event.respondWith(
      (async () => {
        const cachedPromise = new Promise(async (resolve) => {
          try {
            const db = await openDatabase();
            const transaction = db.transaction([storeName], 'readonly');
            const store = transaction.objectStore(storeName);
            const request = store.getAll();

            request.onsuccess = () => {
              const cachedData = request.result;
              if (cachedData && cachedData.length > 0) {
                console.log('Retornando dados do cache imediatamente.');
                resolve(new Response(JSON.stringify(cachedData), {
                  headers: { 'Content-Type': 'application/json' }
                }));
              } else {
                resolve(null);
              }
            };

            request.onerror = () => {
              console.warn('Erro ao ler do cache. Buscando da rede.');
              resolve(null);
            };
          } catch (error) {
            console.error('Erro no acesso ao IndexedDB:', error);
            resolve(null);
          }
        });

        updateCacheFromNetwork(event.request.clone());

        const cachedResponse = await cachedPromise;
        if (cachedResponse) {
          return cachedResponse;
        }

        console.log('Cache vazio ou falhou. Retornando resposta da rede.');
        return fetch(event.request);
      })()
    );
  }
});


self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-eventos') {
    console.log('Evento de sincronização recebido. Buscando dados da rede e notificando eventos de amanhã.');
    event.waitUntil(
      fetch('/data/data.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('Falha na resposta da rede.');
          }
          return response.json();
        })
        .then(data => {
          const eventos = data.eventos.items;
          // Limpa e salva os dados na mesma sequência
          return clearData().then(() => saveAllData(eventos));
        })
        .then(() => {
          console.log('Sincronização completa! Cache atualizado.');
          // CHAMA A FUNÇÃO DE NOTIFICAÇÃO APÓS A ATUALIZAÇÃO DO CACHE
          return showTomorrowEventNotifications();
        })
        .catch(error => {
          console.error('Falha na sincronização ou na notificação:', error);
        })
    );
  }
});