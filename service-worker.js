importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/7.0.0/workbox-sw.js"
);

if (workbox) {
  console.log("Workbox está carregado! 🎉");
} else {
  console.log("Workbox falhou ao carregar. 😬");
}

// Define os detalhes do nome do cache
workbox.core.setCacheNameDetails({
  // Um prefixo dinâmico ajuda a invalidar caches durante o desenvolvimento
  // ou quando você faz deploy de novas versões.
  prefix: "nuxt-app-cache",
});

// Força o Service Worker a ativar imediatamente
self.skipWaiting();
// Assume o controle de todas as abas abertas controladas por este Service Worker
workbox.core.clientsClaim();

// Importa o script do Firebase Messaging Service Worker, se existir
// Certifique-se de que 'firebase-messaging-sw.js' esteja na raiz ou no caminho correto
try {
  importScripts("/firebase-messaging-sw.js");
} catch (e) {
  console.warn(
    "Firebase Messaging Service Worker não encontrado ou erro ao carregar:",
    e
  );
}

workbox.routing.setDefaultHandler(new workbox.strategies.NetworkFirst());

// Estratégia para a Home Page (NetworkFirst): Sempre tenta a rede primeiro
// para garantir que a versão mais recente seja exibida.
workbox.routing.registerRoute(
  /^\/$/,
  new workbox.strategies.NetworkFirst({
    cacheName: "home-page-cache",
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200], // Cache respostas com status 0 (para CORS) e 200
      }),
    ],
  })
);

// Estratégia para Ativos Estáticos (CacheFirst): Cacheia assets como JS, CSS, imagens.
// Útil para performance e offline.
workbox.routing.registerRoute(
  /\.(?:js|json|css|html|png|svg|ico|woff2|woff|ttf|otf|eot|jpg|jpeg|gif|bmp|webp|avif)$/,
  new workbox.strategies.CacheFirst({
    cacheName: "assets-cache",
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
);

// --- Ignorar URLs específicas (NetworkOnly) ---

// **NÃO CACHEIA REQUISIÇÕES PARA GOOGLE TAG MANAGER**
// Garante que o Google Tag Manager sempre seja buscado da rede.
workbox.routing.registerRoute(
  /^https:\/\/www\.googletagmanager\.com\//,
  new workbox.strategies.NetworkOnly()
);

// **NÃO CACHEIA REQUISIÇÕES DE API**
// Suas chamadas de API devem sempre ir para a rede para obter dados atualizados.
workbox.routing.registerRoute(
  /.*\/api\/.*/,
  new workbox.strategies.NetworkOnly()
);

// **NÃO CACHEIA RECURSOS DO NUXT EM DESENVOLVIMENTO**
// O padrão `_nuxt` é usado pelo Nuxt para servir seus bundles.
// Em `nuxt dev`, você quer que esses arquivos sejam sempre da rede para refletir
// as mudanças no código.
workbox.routing.registerRoute(
  /.*_nuxt.*/,
  new workbox.strategies.NetworkOnly()
);
