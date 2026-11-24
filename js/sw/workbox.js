importScripts(
  "/js/sw/vendor/workbox/workbox-sw.js"
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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"9b2f34d31bd5ad52aef2be9ce9e1dc91","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"9b2f34d31bd5ad52aef2be9ce9e1dc91","url":"404.html"},{"revision":"9b2f34d31bd5ad52aef2be9ce9e1dc91","url":"200.html"},{"revision":"eead8fca0b6c2cc67dd12384c30ae551","url":"sobre/index.html"},{"revision":"876b865ec0daf9b29f3b9c7deb96513f","url":"settings/index.html"},{"revision":"876b865ec0daf9b29f3b9c7deb96513f","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"876b865ec0daf9b29f3b9c7deb96513f","url":"relatorio/index.html"},{"revision":"5af2830bc4c984b5d0ae219af12d5ecc","url":"records/index.html"},{"revision":"5af2830bc4c984b5d0ae219af12d5ecc","url":"recentes/index.html"},{"revision":"eead8fca0b6c2cc67dd12384c30ae551","url":"perfil/index.html"},{"revision":"e56f719bde826075a38b6c0e25f1dd85","url":"pages/index.html"},{"revision":"eead8fca0b6c2cc67dd12384c30ae551","url":"navegar/index.html"},{"revision":"e56f719bde826075a38b6c0e25f1dd85","url":"login/index.html"},{"revision":"101e5f50accfe3641a57923a40af0c35","url":"lista/index.html"},{"revision":"101e5f50accfe3641a57923a40af0c35","url":"lista/edit/index.html"},{"revision":"9b2f34d31bd5ad52aef2be9ce9e1dc91","url":"lista/calendar-print/index.html"},{"revision":"101e5f50accfe3641a57923a40af0c35","url":"lista/calendar/index.html"},{"revision":"e56f719bde826075a38b6c0e25f1dd85","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"dbb3e8573b59e2c645501148585fe8bd","url":"js/sw/firebase.js"},{"revision":"5f743225aa84711433cdd3880dbf51d4","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"2808538d6ebb922a6fff3e7e8c357541","url":"js/sw/vendor/dexie.js"},{"revision":"c2eba1515364b627c4f3d5eb6a4bee5b","url":"js/sw/vendor/workbox/workbox-sw.js"},{"revision":"d72bef0e706a8b25012dfa8aa1e4dfff","url":"js/sw/vendor/workbox/workbox-strategies.prod.js"},{"revision":"90d3aeeedbf6f25853c480d92bc51839","url":"js/sw/vendor/workbox/workbox-routing.prod.js"},{"revision":"24c50c33b7c66d7152d4ebae0ac8bd31","url":"js/sw/vendor/workbox/workbox-precaching.prod.js"},{"revision":"2c14e6d1a14b7b1db30586e38ff7a7ae","url":"js/sw/vendor/workbox/workbox-navigation-preload.prod.js"},{"revision":"0e7ae639b709c2e7c22abb64c359f85c","url":"js/sw/vendor/workbox/workbox-expiration.prod.js"},{"revision":"7d66f77f1d0ff9348205a245c75cc6e3","url":"js/sw/vendor/workbox/workbox-core.prod.js"},{"revision":"c1164a2c6ee0dbe4099f435a008a7d00","url":"js/sw/vendor/workbox/workbox-cacheable-response.prod.js"},{"revision":"e640131b6725841102014e560e21d647","url":"js/sw/vendor/firebase/firebase-messaging-compat.js"},{"revision":"c9a629d733922bfe5a271fb7442e7d2d","url":"js/sw/vendor/firebase/firebase-app-compat.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"101e5f50accfe3641a57923a40af0c35","url":"hinos/index.html"},{"revision":"876b865ec0daf9b29f3b9c7deb96513f","url":"forms/view/index.html"},{"revision":"101e5f50accfe3641a57923a40af0c35","url":"forms/manutencao/index.html"},{"revision":"9b2f34d31bd5ad52aef2be9ce9e1dc91","url":"forms/levantamento_preventiva/index.html"},{"revision":"101e5f50accfe3641a57923a40af0c35","url":"forms/contato/index.html"},{"revision":"101e5f50accfe3641a57923a40af0c35","url":"forgot-password/index.html"},{"revision":"eead8fca0b6c2cc67dd12384c30ae551","url":"eventos/index.html"},{"revision":"101e5f50accfe3641a57923a40af0c35","url":"evento/index.html"},{"revision":"101e5f50accfe3641a57923a40af0c35","url":"evento/solicitar/index.html"},{"revision":"eead8fca0b6c2cc67dd12384c30ae551","url":"agenda/index.html"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"3d9aad04796ee8f3d3e3c63d41ed354f","url":"_nuxt/useHolidays.Cnq2fMW2.css"},{"revision":"4c173e078d6a149332deec63e0b69cd4","url":"_nuxt/um7_Y5DW.js"},{"revision":"76815758e2ccf6f85b186894d7a3de59","url":"_nuxt/uTxGGJ7g.js"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"1241bb1feb900287ccb14310328a22c3","url":"_nuxt/settings.BXvx61R5.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"95df1e3ed7bb77f9b82ee5ef2ec3a945","url":"_nuxt/recentes.Boz8l2j6.css"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"1258a0802fcd543e0ca3c5e1239a7c68","url":"_nuxt/p4DFYyNF.js"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"aa61533f2a29387ba2341e2cba4b3ae4","url":"_nuxt/navegar.CcnZmLym.css"},{"revision":"38b7f0b38a102e1b524086132952642c","url":"_nuxt/menu.B8Zv1MPp.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"73c2ea31e1c6ce1bc9dc920c376f4372","url":"_nuxt/lhWZzYtW.js"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"ac39f00be638eb71da7a8e7a32d87193","url":"_nuxt/jewtTO42.js"},{"revision":"2a0e41f635cc3844a8c2830826ae3beb","url":"_nuxt/index.xA83gVRs.css"},{"revision":"20044ccd19f6775d1639e26df4052677","url":"_nuxt/index.DKEm0VN6.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"51d941c6cd52e3a056237c25060d5734","url":"_nuxt/index.Bir61zYh.css"},{"revision":"937dc6a633198964cf393f64d47e9be5","url":"_nuxt/haWBgeFE.js"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"bc52864a6736bd45dca818e801ad5ff2","url":"_nuxt/eventos.BGXk-ZSs.css"},{"revision":"3a1cea3743d4b7eb96f697e56a56c44f","url":"_nuxt/entry.DuAPpwJ6.css"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"900ef03dde1cf8cf40b23f5cad80a360","url":"_nuxt/calendar.4YSbG8xb.css"},{"revision":"325e12c62a5a4595aff4809fe00518ae","url":"_nuxt/calendar-print.Bm9BqBkm.css"},{"revision":"ccf9bcbed9933107a121b8441d8a8370","url":"_nuxt/agenda.B1qY6oE2.css"},{"revision":"7fd13aa7b85ee0b385eae46a4e9087a3","url":"_nuxt/aaYUKJrG.js"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"d2060c3d513180a46db250c4b741e390","url":"_nuxt/Zi956SDt.js"},{"revision":"af253b93a5f38a684141e53b67e121f8","url":"_nuxt/Uo86jhtg.js"},{"revision":"e17ca50ef2a35a78bbf45a0eaf477e40","url":"_nuxt/QjkD2sTv.js"},{"revision":"de5e78fb63e4464f251057989375c986","url":"_nuxt/QhYG0daB.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"a26cd7023e0df01b94c0f7ead93e6ee9","url":"_nuxt/DvhwQyc7.js"},{"revision":"15087884d485733daef5478010e218b0","url":"_nuxt/DrhnLLcy.js"},{"revision":"6e2baf709fd5436745f1b39c07bc6754","url":"_nuxt/Dlq4tOQN.js"},{"revision":"a555a55a47622c28bae62635cce478aa","url":"_nuxt/DdeVk9In.js"},{"revision":"5fc04e39362189754d70ba34b4e52552","url":"_nuxt/DH51CiU8.js"},{"revision":"83b0580a288308a80a20eadceed7d010","url":"_nuxt/DCh0SQXp.js"},{"revision":"b9b942c6fc11cbabd019ee1c8aa9b529","url":"_nuxt/D3qu_zlc.js"},{"revision":"b805c83f4d38b5ef819679f063041bad","url":"_nuxt/D2yWqx5x.js"},{"revision":"2d50912257441d6008c40c713f7e957e","url":"_nuxt/D179g0AX.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"af4c6a63c6c72c200453e432c8939167","url":"_nuxt/CxUXIH3F.js"},{"revision":"5bc5cb71dbdd245c072dd75c0b26d5b7","url":"_nuxt/CsVeHQh1.js"},{"revision":"b354b92f4cbcc8ba9da51957b1d02666","url":"_nuxt/Cq0S56ws.js"},{"revision":"dd15ffc01c12f3006d4d9deca457766b","url":"_nuxt/CHhMz_-O.js"},{"revision":"0a368c959715054806ebb0ac5a2ad62b","url":"_nuxt/CG3HvJNo.js"},{"revision":"61fbdbb906d42ab06dc7a9be6af454de","url":"_nuxt/CBAETbDw.js"},{"revision":"88426284bcebaee25f379c2ee45dbbd4","url":"_nuxt/C7jsqsR2.js"},{"revision":"71339db1cb29044254570d45dcc4b62a","url":"_nuxt/C46L89jd.js"},{"revision":"5bb13d5f98becafbfb087ee8b200180d","url":"_nuxt/C2mgHCxM.js"},{"revision":"c5fb751da4853a38e67761a837aa20cd","url":"_nuxt/C01XYdHe.js"},{"revision":"4547c0e83d9d6bc1cc760590e08753eb","url":"_nuxt/ByeU5zPr.js"},{"revision":"3d0ef948a5e64a343ce4a64064a4af6b","url":"_nuxt/BvJNeF0z.js"},{"revision":"aa96f27aead5344da3422ebad0bc8779","url":"_nuxt/BsL3cnLi.js"},{"revision":"1751ae26d5b9cd980b8e12cf6a7de52e","url":"_nuxt/Bhfi8LJF.js"},{"revision":"e4d519f1f2d6afe267f3610699729a92","url":"_nuxt/Bh24Vu29.js"},{"revision":"7ab38296e3034ba2f95b7e4d02c3089a","url":"_nuxt/BatomfgO.js"},{"revision":"c278ebda0425f6c6c2e786358f4ae655","url":"_nuxt/BZ3kHOAO.js"},{"revision":"ca0c817e52c5ab1668500ce684bfd6ee","url":"_nuxt/BVc2D55L.js"},{"revision":"3ace96702c00ba67337573bc23a244d2","url":"_nuxt/BQAYUAVR.js"},{"revision":"287f5a2c93acfd7644c12b69ff7b19d9","url":"_nuxt/BLClUY-V.js"},{"revision":"63f845ba465e35b985faf74931707fed","url":"_nuxt/BI0yf7GA.js"},{"revision":"c58f6c0bdfa6583208d6fa7bb3ad8f94","url":"_nuxt/BGb8DqJv.js"},{"revision":"33580bc33c1f88308f37ca56992ddecc","url":"_nuxt/B4oSaHzV.js"},{"revision":"c5f6d614e07698803043f972e05f57c6","url":"_nuxt/8c1cSPCq.js"},{"revision":"fdd8b337d9253062484e104b205dbada","url":"_nuxt/3pm7bUgP.js"},{"revision":"7720aac54ad1edecae503d15789dfcf8","url":"_nuxt/-pJwPop_.js"},{"revision":"cd0656490a1d43a0087847a384f935d7","url":"_nuxt/builds/latest.json"},{"revision":"526ad20521b2fc2533990bd60208d8f4","url":"_nuxt/builds/meta/bffd087f-c7a7-44e7-9c6c-5ade5c54182e.json"},{"revision":"e56f719bde826075a38b6c0e25f1dd85","url":"500/index.html"},{"revision":"e56f719bde826075a38b6c0e25f1dd85","url":"404/index.html"},{"revision":"9f8c1c0b75e59dc92dedfb2a8f95b3c5","url":"200/index.html"}] || []);
      self.CacheManager._addRoutes();
      self.CacheManager._enableNavigationPreload();
      self.Client.send("init", "Service inicializado!");
    } else {
      console.warn("Workbox não pôde ser carregado.");
    }
  },

  _addRoutes: () => {
    // Navegação (HTML) otimizada para Preload
    const navegacao = new workbox.strategies.NetworkFirst({
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
    });
    // Offline: as telas do app (SPA, com ou sem query string) caem na casca index.html;
    // o roteador do Vue monta a tela certa a partir da URL.
    workbox.routing.registerRoute(
      ({ request }) => request.mode === "navigate",
      async (opcoes) => {
        try {
          return await navegacao.handle(opcoes);
        } catch (erro) {
          // A chave do pré-cache leva a revisão (?__WB_REVISION__=...): usa o mapeamento do Workbox.
          const chave = workbox.precaching.getCacheKeyForURL("/index.html");
          const casca = chave && (await caches.match(chave));
          if (casca) return casca;
          throw erro;
        }
      }
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
