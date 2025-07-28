importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js'
)

// Carrega os scripts do Firebase para Service Worker
importScripts(
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js'
)

/**
 * Meu service Worker
 */

if (workbox) {
  console.log('Workbox está carregado! 🎉')
} else {
  console.log('Workbox falhou ao carregar. 😬')
}

/**
 * Cache
 */
// Define os detalhes do nome do cache
workbox.core.setCacheNameDetails({
  // Um prefixo dinâmico ajuda a invalidar caches durante o desenvolvimento
  // ou quando você faz deploy de novas versões.
  prefix: 'nuxt-app-cache',
})

// Força o Service Worker a ativar imediatamente
self.skipWaiting()
// Assume o controle de todas as abas abertas controladas por este Service Worker
workbox.core.clientsClaim()

// Estratégia para a Home Page (NetworkFirst): Sempre tenta a rede primeiro
workbox.routing.setDefaultHandler(new workbox.strategies.NetworkFirst())

// para garantir que a versão mais recente seja exibida.
workbox.routing.registerRoute(
  /^\/$/,
  new workbox.strategies.NetworkFirst({
    cacheName: 'home-page-cache',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200], // Cache respostas com status 0 (para CORS) e 200
      }),
    ],
  })
)

// Estratégia para Ativos Estáticos (CacheFirst): Cacheia assets como JS, CSS, imagens.
// Útil para performance e offline.
workbox.routing.registerRoute(
  /\.(?:js|json|css|html|png|svg|ico|woff2|woff|ttf|otf|eot|jpg|jpeg|gif|bmp|webp|avif)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'assets-cache',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 100, // Máximo de 100 entradas no cache
        maxAgeSeconds: 30 * 24 * 60 * 60, // Expira após 30 dias
      }),
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200], // Cache respostas com status 0 (para CORS) e 200
      }),
    ],
  })
)

// --- Ignorar URLs específicas (NetworkOnly) ---

// **NÃO CACHEIA REQUISIÇÕES PARA GOOGLE TAG MANAGER**
// Garante que o Google Tag Manager sempre seja buscado da rede.
workbox.routing.registerRoute(
  /^https:\/\/www\.googletagmanager\.com\//,
  new workbox.strategies.NetworkOnly({
    plugins: [
      {
        // Este plugin será chamado se a estratégia NetworkOnly falhar
        handlerDidError: async ({ request }) => {
          console.warn(
            `[Workbox] Failed to fetch GTM script from network: ${request.url}. This might be due to network issues or ad blockers.`
          )
          // Retorna null para indicar que não há resposta, mas sem lançar um erro
          // que o Workbox consideraria um "no-response" irrecuperável.
          return null
        },
      },
    ],
  })
)

// **NÃO CACHEIA REQUISIÇÕES DE API**
// Suas chamadas de API devem sempre ir para a rede para obter dados atualizados.
workbox.routing.registerRoute(
  /.*\/api\/.*/,
  new workbox.strategies.NetworkOnly()
)

/**
 * Messaging do Firebase
 */
const firebaseConfig = {
  apiKey: 'AIzaSyDjh-kSamZSSOA1pEwMuCB1HZxiZBgCaVE',
  authDomain: 'agenda-408113.firebaseapp.com',
  projectId: 'agenda-408113',
  storageBucket: 'agenda-408113.appspot.com',
  messagingSenderId: '865568496873',
  appId: '1:865568496873:web:66e24b202af5ba7f1b6478',
  measurementId: 'G-KDP8RZ0Z19',
}

firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()

// Este listener é acionado quando uma mensagem FCM é recebida
messaging.onBackgroundMessage((payload) => {
  try {
    console.log(
      '[firebase-messaging-sw.js] Mensagem em segundo plano recebida:',
      payload
    )

    // Garante que notification e data existam
    const notification = payload.notification || {}
    const data = payload.data || {}

    const notificationTitle = notification.title || 'Nova Notificação'
    const notificationOptions = {
      body: notification.body || 'Você tem uma nova mensagem.',
      icon: notification.icon || '/favicon.ico',
      data: data,
    }
    // Exibe a notificação ao usuário
    self.registration.showNotification(notificationTitle, notificationOptions)
  } catch (error) {
    console.error(
      '[firebase-messaging-sw.js] Erro ao exibir notificação:',
      error
    )
  }
})

// --- Manipulação de Cliques na Notificação ---
self.addEventListener('notificationclick', (event) => {
  console.log('[firebase-messaging-sw.js] Notificação clicada:', event)

  event.notification.close()

  // Garante que data exista e obtenha a URL de redirecionamento
  const data = event.notification.data || {}
  const targetUrl = data.url || '/'

  // Abre a URL em uma nova aba ou foca uma aba existente se já estiver aberta
  event.waitUntil(
    self.clients
      .matchAll({ type: 'window', includeUncontrolled: true })
      .then((clientList) => {
        for (const client of clientList) {
          // Usa startsWith para garantir que a URL base seja considerada
          if (
            client.url.startsWith(self.location.origin + targetUrl) &&
            'focus' in client
          ) {
            return client.focus() // Foca a aba existente
          }
        }
        // Se a aba não estiver aberta, abre uma nova
        return self.clients.openWindow(targetUrl)
      })
      .catch((err) => {
        console.error('[firebase-messaging-sw.js] Erro ao redirecionar:', err)
      })
  )
})

// --- Eventos do Service Worker ---
// Opcional: Listener para o evento 'install' do Service Worker
self.addEventListener('install', () => {
  console.log('[firebase-messaging-sw.js] Service Worker instalado.')
  self.skipWaiting()
})

// Opcional: Listener para o evento 'activate' do Service Worker
self.addEventListener('activate', (event) => {
  console.log('[firebase-messaging-sw.js] Service Worker ativado.')
  event.waitUntil(self.clients.claim())
})
