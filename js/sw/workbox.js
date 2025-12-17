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
      workbox.precaching.precacheAndRoute([{"revision":"ad65e380139b4c7ff5dd68a39e591461","url":"_nuxt/agenda.BxqxQMWe.css"},{"revision":"2a029925c7c49cd7df1dc6960fb7924c","url":"_nuxt/B0WCbwT0.js"},{"revision":"ba8190e87946fbcdac5e468a5b86d8b4","url":"_nuxt/BApoRQKo.js"},{"revision":"f8cbbe4aa4814b5fa3b9ecb9164dc8c1","url":"_nuxt/BH9dZuJW.js"},{"revision":"a027cacc00f53bad8bc2bde9203903ea","url":"_nuxt/BkJOpqce.js"},{"revision":"8bc0f7b4865223e234bf9d43c82d88aa","url":"_nuxt/BLVUxl_5.js"},{"revision":"26c597818b51f9293aba51329dc7629f","url":"_nuxt/Bogp-1th.js"},{"revision":"56bd80eadb335145d1aef3ac9dcb775e","url":"_nuxt/BP3WUk0P.js"},{"revision":"65660fec1c6eefc12acac1b1a268b1d6","url":"_nuxt/BPJXjES6.js"},{"revision":"e7e9d7331d46a69662d36480140b318c","url":"_nuxt/BprwGtYq.js"},{"revision":"f286b7ef05697602587c7800d2d4cbee","url":"_nuxt/BRKr13Wk.js"},{"revision":"8d6468f8d3e25a1158bd80820e9266c2","url":"_nuxt/BroNLtJt.js"},{"revision":"09a9934634c0bda4fb8ef976566ea3ed","url":"_nuxt/BS8QdyU_.js"},{"revision":"1bfb474119d2dcdb969ac803f254dc3b","url":"_nuxt/builds/latest.json"},{"revision":"25a5010e853333697ee4c0c995f5570e","url":"_nuxt/builds/meta/652aa363-997d-4dcc-8213-90d12105a6a2.json"},{"revision":"e234acf6d20e26fc7dff3585be6706d1","url":"_nuxt/But1cDCZ.js"},{"revision":"8a79cb2413492d2af98872cd2f77f9e7","url":"_nuxt/C0Lc0fmM.js"},{"revision":"b1ddda42c5b2b24bb75927b08e06aceb","url":"_nuxt/calendar-print.gWBDFPdY.css"},{"revision":"9815d41ae434326a24dc35e62eec237b","url":"_nuxt/calendar.DHgtuuC9.css"},{"revision":"8ff7be1690a2e748f3cc15c7617b8c70","url":"_nuxt/CcehPV9g.js"},{"revision":"9c4f033ae51f0a22a6b475f84cf1c089","url":"_nuxt/CGaeszlF.js"},{"revision":"b68c7ceb032375d84bcf975625c9bf4c","url":"_nuxt/CjCp0y6z.js"},{"revision":"092b768f9310ec84197777ad60129713","url":"_nuxt/CJhOJHJw.js"},{"revision":"2738af9e4a909ec193b8180d73c91edc","url":"_nuxt/CJMVep7M.js"},{"revision":"8d020a56f09cbed1c2b25b3571702482","url":"_nuxt/CKOY4Tch.js"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"61d2c770fae823200feb86dd6604837a","url":"_nuxt/CN4XYh72.js"},{"revision":"14e879ebc75efcda12e0066eee635c52","url":"_nuxt/contato.3ci9Le7x.css"},{"revision":"5a510b28c6f2f13ea9cba3c5113bcf3e","url":"_nuxt/CQijsIbT.js"},{"revision":"d47f4d1367b6bb82f492c4c975708de3","url":"_nuxt/CUpR8154.js"},{"revision":"64130411e703dcd5d42e1847d278a5ea","url":"_nuxt/CURpDiIM.js"},{"revision":"0cd4677ef23c257a5e918e149af230eb","url":"_nuxt/D_6FBNEe.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"677066f94ce67a9b043f7d76e3fb9883","url":"_nuxt/D40dd_cX.js"},{"revision":"6502dc52719e2918d7e5cc5ea0ab377c","url":"_nuxt/D5HYD_eQ.js"},{"revision":"c5cbcf0d4acfd08a22bf2fbfc1c115f7","url":"_nuxt/D92VlWqS.js"},{"revision":"d4849bf9caba7b6ea54daa1dbf24e258","url":"_nuxt/DAosRn28.js"},{"revision":"7240178e6e196c4688038186b00a7e33","url":"_nuxt/DeEQxn-8.js"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"3bdb8d9a788435574820f09aa3a49c70","url":"_nuxt/DK3ZIzzi.js"},{"revision":"d78e32dd7ef7a62d62af155321238a00","url":"_nuxt/DMyxucgi.js"},{"revision":"7b1c94588dbfd284c47eec60e5fd9b64","url":"_nuxt/entry.CrEu4H3P.css"},{"revision":"1cec47ab46b69aff51eb4d9fe8b481a9","url":"_nuxt/eventos.D0qi4T-e.css"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"6ef99b3808a652f39026cca604af7bf5","url":"_nuxt/gE3vm8fl.js"},{"revision":"5bfc4f03af2175efbfde5c245e9405f4","url":"_nuxt/index.BT7qESRD.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"df7f4f74f56b70b16d49ab41b128b950","url":"_nuxt/index.DzYW3UB-.css"},{"revision":"d3838d7d373de5ff91c0962fb4b0890c","url":"_nuxt/index.efd4-kTG.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"be00fce10a162e4469800634b006201d","url":"_nuxt/menu.0lHMkiB6.css"},{"revision":"824b1d7761a285e7b1cbaf771eae182f","url":"_nuxt/navegar.DXE9DLXy.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"b972e8916979b420bf526b11259f9d74","url":"_nuxt/oP8JY7cr.js"},{"revision":"069017b15d99939f06e910ab1cdd92eb","url":"_nuxt/perfil.BbtFWlj7.css"},{"revision":"051095d9fb6a48ab04251e2845e237f7","url":"_nuxt/PQfk9T0v.js"},{"revision":"8456b4730f5a71d9d9d63b6a3f8dc488","url":"_nuxt/recentes.CtKQcL51.css"},{"revision":"e5400f28ac27375dc249adf4b972c4b6","url":"_nuxt/relatorio.BGMUo3JX.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"e16fe871f60ebca36f1b2fd2b8bdfed6","url":"_nuxt/settings.D81KzNVB.css"},{"revision":"a8b5179d5b5806ec3883dc79a41b65f8","url":"_nuxt/sobre.c9vjT2Gh.css"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"84cf65acba407104e1f757261762436a","url":"_nuxt/vGLycu4f.js"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"e78331d79984936074e741277f1d614d","url":"200.html"},{"revision":"284ba186497481ba11d2fb3cacae09eb","url":"200/index.html"},{"revision":"e78331d79984936074e741277f1d614d","url":"404.html"},{"revision":"d9d37027ff53a9f3d5126642bf392302","url":"404/index.html"},{"revision":"d9d37027ff53a9f3d5126642bf392302","url":"500/index.html"},{"revision":"d9d37027ff53a9f3d5126642bf392302","url":"agenda/index.html"},{"revision":"0ab4eb13ec640467dbfdc9efd832d2ea","url":"data/data.json"},{"revision":"03042e638c592eff104555d2ca647d4f","url":"data/metadata.json"},{"revision":"416ef7202529463a618e35c6f3d32152","url":"data/ministerio.json"},{"revision":"0c67f062d6c248fbad406549c816ea19","url":"data/relatorio.json"},{"revision":"50d93598b24e42211df0a4e3dfb7d751","url":"data/tags-circulares.json"},{"revision":"50a4512f2768551bb27b7453a3066a3d","url":"data/tags.json"},{"revision":"5883d707f6dedb02a22658ee89c0273b","url":"evento/index.html"},{"revision":"e78331d79984936074e741277f1d614d","url":"evento/solicitar/index.html"},{"revision":"5200cd81e9a924db3fd2e6885d8d9392","url":"eventos/index.html"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"5883d707f6dedb02a22658ee89c0273b","url":"forms/contato/index.html"},{"revision":"e78331d79984936074e741277f1d614d","url":"forms/levantamento_preventiva/index.html"},{"revision":"e78331d79984936074e741277f1d614d","url":"forms/manutencao/index.html"},{"revision":"5883d707f6dedb02a22658ee89c0273b","url":"forms/view/index.html"},{"revision":"5883d707f6dedb02a22658ee89c0273b","url":"hinos/index.html"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e78331d79984936074e741277f1d614d","url":"index.html"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"9495f82a0135c996553402c95ce39470","url":"js/sw/database.js"},{"revision":"5d6350ed327d88fb0f4a6b8072a8a519","url":"js/sw/firebase.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"e78331d79984936074e741277f1d614d","url":"lista/calendar-print/index.html"},{"revision":"5883d707f6dedb02a22658ee89c0273b","url":"lista/calendar/index.html"},{"revision":"5883d707f6dedb02a22658ee89c0273b","url":"lista/edit/index.html"},{"revision":"5883d707f6dedb02a22658ee89c0273b","url":"lista/index.html"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"5200cd81e9a924db3fd2e6885d8d9392","url":"navegar/index.html"},{"revision":"d9d37027ff53a9f3d5126642bf392302","url":"perfil/index.html"},{"revision":"5200cd81e9a924db3fd2e6885d8d9392","url":"recentes/index.html"},{"revision":"5883d707f6dedb02a22658ee89c0273b","url":"relatorio/index.html"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"c40976a112fda680365583dc5cdeb52c","url":"service-worker.js"},{"revision":"5200cd81e9a924db3fd2e6885d8d9392","url":"servicos/index.html"},{"revision":"5200cd81e9a924db3fd2e6885d8d9392","url":"settings/index.html"},{"revision":"d9d37027ff53a9f3d5126642bf392302","url":"sobre/index.html"}] || []);
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
