importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js"
);
/**
 * Gerencia o cache usando Workbox para melhorar o desempenho e a disponibilidade offline.
 * Inicializa o self.CacheManager após a configuração do self.DataManager
 */
self.CacheManager = {
  init: () => {
    if (workbox) {
      workbox.setConfig({ debug: self.DataManager.CONFIG.log });
      workbox.core.skipWaiting();
      workbox.core.clientsClaim();
      self.Client.send("activated", "Service ativado!");
      workbox.precaching.precacheAndRoute([{"revision":"d60ea64ab21acdd7bc18643edacd7438","url":"_nuxt/0OxFnqIM.js"},{"revision":"9f77c6e55555d4e6d604de8fa8bfde45","url":"_nuxt/0zhWYkdO.js"},{"revision":"0d23aa23caa4f4c5e6a206d558b05c5d","url":"_nuxt/4cJQqYMq.js"},{"revision":"5357d399244b6761a22ca88fb6e61211","url":"_nuxt/6KN0uFlr.js"},{"revision":"db2a208cd92aa799b456af693edcc70b","url":"_nuxt/9DD5Dmim.js"},{"revision":"ad65e380139b4c7ff5dd68a39e591461","url":"_nuxt/agenda.BxqxQMWe.css"},{"revision":"cbafc692436987cfd1cf5080b4497682","url":"_nuxt/B38RsYVl.js"},{"revision":"ece1ef354ffec81ec1b7db7357695c3a","url":"_nuxt/BETHh0rh.js"},{"revision":"ae7373f5bc443f4014b6c252695abdd4","url":"_nuxt/Biw55M6u.js"},{"revision":"555832dd9b1ed14ff01f8cf00d18ba35","url":"_nuxt/BlJv716x.js"},{"revision":"186588a577b9b8067ce51f30603f8590","url":"_nuxt/BOWN9vEn.js"},{"revision":"13d9915d98d24991eecc646009aefa81","url":"_nuxt/BsM408Tb.js"},{"revision":"f8d499c55cbccce3533b12e6b80376dc","url":"_nuxt/builds/latest.json"},{"revision":"02337bcb8298158e67fa1906121cf678","url":"_nuxt/builds/meta/f8b80a00-42f8-4f2d-8285-fd7bc80df38d.json"},{"revision":"bc3fa1e12dcd51689461e8c9cf12b25d","url":"_nuxt/BwCRZclE.js"},{"revision":"683908e92b97e2afed96b326f0fed684","url":"_nuxt/C-QZLA9J.js"},{"revision":"57def07f72522343e431befb3bfcc754","url":"_nuxt/calendar-print.dd1EitgG.css"},{"revision":"9815d41ae434326a24dc35e62eec237b","url":"_nuxt/calendar.DHgtuuC9.css"},{"revision":"019c9c15b53f4c81bf503db1d64a6dbe","url":"_nuxt/CBLNZWpr.js"},{"revision":"1ceb59d84c3c77e3bb7e935448ee158b","url":"_nuxt/Ccft6O6o.js"},{"revision":"e71f176aff668408f046138809a87f0f","url":"_nuxt/CeWvUcNx.js"},{"revision":"c0daff935bd1fd113507f6b1329b0602","url":"_nuxt/CG9USXZp.js"},{"revision":"b6b7ec324375926866b5757525f093f8","url":"_nuxt/Cik3kmmp.js"},{"revision":"c2fdd7e513d2affc95646e21c2a43fdc","url":"_nuxt/CjwcfW54.js"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"5338da63202983798bdde99890146071","url":"_nuxt/ClEdVoBh.js"},{"revision":"3b4feda250f225fa03f7d0e7a1d2af0f","url":"_nuxt/Cltv5lAf.js"},{"revision":"14e879ebc75efcda12e0066eee635c52","url":"_nuxt/contato.3ci9Le7x.css"},{"revision":"ca769a9f7ff0655645bf5e67707a9688","url":"_nuxt/CrwbUF3G.js"},{"revision":"d2ec793f205a5344b84b312568e0ad3a","url":"_nuxt/CvjRc_Nl.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"5b7813ae18106d79fa77b81348af1bec","url":"_nuxt/D2TRSquu.js"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"9aa2f2ee4ce2bc7c55d07b435463f21f","url":"_nuxt/DFQ3Q39w.js"},{"revision":"99b4ff589abeab50fe89ce37d1a754a6","url":"_nuxt/DiIRDxHt.js"},{"revision":"ce2fdfb10b971c48f2fc4a27fc9da507","url":"_nuxt/Dj0cefW5.js"},{"revision":"faf39f5f7ea8d0b59a1a31e8f6d97ba1","url":"_nuxt/DjLTzplq.js"},{"revision":"8ac49117ef6fed037a71895ebe5e5254","url":"_nuxt/DNGZdbBQ.js"},{"revision":"47e63262822aa44f77e491735a84e60e","url":"_nuxt/DUkN8Pf4.js"},{"revision":"67337ff13e96f9412aa63b70edad59f3","url":"_nuxt/DVglLeyp.js"},{"revision":"cb0ed5644bcd0e8d11469dc0da1a6db3","url":"_nuxt/DweuGx15.js"},{"revision":"8395a8764dec3d665e5856fb19acdaaa","url":"_nuxt/DyXoOg7F.js"},{"revision":"7b1c94588dbfd284c47eec60e5fd9b64","url":"_nuxt/entry.CrEu4H3P.css"},{"revision":"1cec47ab46b69aff51eb4d9fe8b481a9","url":"_nuxt/eventos.D0qi4T-e.css"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"5bfc4f03af2175efbfde5c245e9405f4","url":"_nuxt/index.BT7qESRD.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"df7f4f74f56b70b16d49ab41b128b950","url":"_nuxt/index.DzYW3UB-.css"},{"revision":"d3838d7d373de5ff91c0962fb4b0890c","url":"_nuxt/index.efd4-kTG.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"be00fce10a162e4469800634b006201d","url":"_nuxt/menu.0lHMkiB6.css"},{"revision":"824b1d7761a285e7b1cbaf771eae182f","url":"_nuxt/navegar.DXE9DLXy.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"069017b15d99939f06e910ab1cdd92eb","url":"_nuxt/perfil.BbtFWlj7.css"},{"revision":"91ad51a5475e739048e2c452058fe3b0","url":"_nuxt/Q5mJkmMq.js"},{"revision":"8456b4730f5a71d9d9d63b6a3f8dc488","url":"_nuxt/recentes.CtKQcL51.css"},{"revision":"e5400f28ac27375dc249adf4b972c4b6","url":"_nuxt/relatorio.BGMUo3JX.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"e16fe871f60ebca36f1b2fd2b8bdfed6","url":"_nuxt/settings.D81KzNVB.css"},{"revision":"a8b5179d5b5806ec3883dc79a41b65f8","url":"_nuxt/sobre.c9vjT2Gh.css"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"50a888560956187ff7913d114ee2fc9d","url":"_nuxt/WUbtqANU.js"},{"revision":"caf6c2c1ea48ecedcfd707d35a8dc191","url":"_nuxt/zPE6NOXR.js"},{"revision":"f6e064dc33ad0dd72a9fc1354ce48d95","url":"200.html"},{"revision":"29658accf53ff117a735f8951fcc6ce5","url":"200/index.html"},{"revision":"f6e064dc33ad0dd72a9fc1354ce48d95","url":"404.html"},{"revision":"29658accf53ff117a735f8951fcc6ce5","url":"404/index.html"},{"revision":"3f3696b0a51eb71b2b7f9a059b53d243","url":"500/index.html"},{"revision":"3f3696b0a51eb71b2b7f9a059b53d243","url":"agenda/index.html"},{"revision":"0ab4eb13ec640467dbfdc9efd832d2ea","url":"data/data.json"},{"revision":"03042e638c592eff104555d2ca647d4f","url":"data/metadata.json"},{"revision":"416ef7202529463a618e35c6f3d32152","url":"data/ministerio.json"},{"revision":"0c67f062d6c248fbad406549c816ea19","url":"data/relatorio.json"},{"revision":"50d93598b24e42211df0a4e3dfb7d751","url":"data/tags-circulares.json"},{"revision":"50a4512f2768551bb27b7453a3066a3d","url":"data/tags.json"},{"revision":"c5491b6089a1a7ce9730e832261c79a3","url":"evento/index.html"},{"revision":"c5491b6089a1a7ce9730e832261c79a3","url":"evento/solicitar/index.html"},{"revision":"3f3696b0a51eb71b2b7f9a059b53d243","url":"eventos/index.html"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"c5491b6089a1a7ce9730e832261c79a3","url":"forms/contato/index.html"},{"revision":"f6e064dc33ad0dd72a9fc1354ce48d95","url":"forms/levantamento_preventiva/index.html"},{"revision":"c5491b6089a1a7ce9730e832261c79a3","url":"forms/manutencao/index.html"},{"revision":"0e781d8263a7362a6e2b16e503fd1bb0","url":"forms/view/index.html"},{"revision":"c5491b6089a1a7ce9730e832261c79a3","url":"hinos/index.html"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"f6e064dc33ad0dd72a9fc1354ce48d95","url":"index.html"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"9495f82a0135c996553402c95ce39470","url":"js/sw/database.js"},{"revision":"5d6350ed327d88fb0f4a6b8072a8a519","url":"js/sw/firebase.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"c5491b6089a1a7ce9730e832261c79a3","url":"lista/calendar-print/index.html"},{"revision":"c5491b6089a1a7ce9730e832261c79a3","url":"lista/calendar/index.html"},{"revision":"c5491b6089a1a7ce9730e832261c79a3","url":"lista/edit/index.html"},{"revision":"c5491b6089a1a7ce9730e832261c79a3","url":"lista/index.html"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"0e781d8263a7362a6e2b16e503fd1bb0","url":"navegar/index.html"},{"revision":"3f3696b0a51eb71b2b7f9a059b53d243","url":"perfil/index.html"},{"revision":"0e781d8263a7362a6e2b16e503fd1bb0","url":"recentes/index.html"},{"revision":"0e781d8263a7362a6e2b16e503fd1bb0","url":"relatorio/index.html"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"c40976a112fda680365583dc5cdeb52c","url":"service-worker.js"},{"revision":"0e781d8263a7362a6e2b16e503fd1bb0","url":"servicos/index.html"},{"revision":"0e781d8263a7362a6e2b16e503fd1bb0","url":"settings/index.html"},{"revision":"3f3696b0a51eb71b2b7f9a059b53d243","url":"sobre/index.html"}] || []);
      self.CacheManager._addRoutes();
      self.CacheManager._enableNavigationPreload();
      self.Client.send("init", "Service inicializado!");
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
              self.Logger.log(
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
      } catch (error) {
        self.Logger.handleError("Erro ao habilitar Navigation Preload", error);
      }
    } else {
      self.Logger.log(
        "Navigation Preload não suportado ou não disponível neste navegador."
      );
    }
  },
};
