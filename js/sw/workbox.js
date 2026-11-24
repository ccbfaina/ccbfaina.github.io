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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"2a17f11c5d5182756e0e4eeeb4608bc7","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"2a17f11c5d5182756e0e4eeeb4608bc7","url":"404.html"},{"revision":"2a17f11c5d5182756e0e4eeeb4608bc7","url":"200.html"},{"revision":"bc9d65f9bfaa7a8ab3ea1b9cce188860","url":"sobre/index.html"},{"revision":"6ff0937cbfab3f52bf20f2c598bc747e","url":"settings/index.html"},{"revision":"6ff0937cbfab3f52bf20f2c598bc747e","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"6ff0937cbfab3f52bf20f2c598bc747e","url":"relatorio/index.html"},{"revision":"6ff0937cbfab3f52bf20f2c598bc747e","url":"records/index.html"},{"revision":"6ff0937cbfab3f52bf20f2c598bc747e","url":"recentes/index.html"},{"revision":"bc9d65f9bfaa7a8ab3ea1b9cce188860","url":"perfil/index.html"},{"revision":"8dec3d27243ae98327e347d2952d7878","url":"pages/index.html"},{"revision":"bc9d65f9bfaa7a8ab3ea1b9cce188860","url":"navegar/index.html"},{"revision":"8dec3d27243ae98327e347d2952d7878","url":"login/index.html"},{"revision":"36351608ed1351b5dd8a832a7488b2ba","url":"lista/index.html"},{"revision":"36351608ed1351b5dd8a832a7488b2ba","url":"lista/edit/index.html"},{"revision":"2a17f11c5d5182756e0e4eeeb4608bc7","url":"lista/calendar-print/index.html"},{"revision":"36351608ed1351b5dd8a832a7488b2ba","url":"lista/calendar/index.html"},{"revision":"8dec3d27243ae98327e347d2952d7878","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"5d6350ed327d88fb0f4a6b8072a8a519","url":"js/sw/firebase.js"},{"revision":"9495f82a0135c996553402c95ce39470","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"36351608ed1351b5dd8a832a7488b2ba","url":"hinos/index.html"},{"revision":"6ff0937cbfab3f52bf20f2c598bc747e","url":"forms/view/index.html"},{"revision":"36351608ed1351b5dd8a832a7488b2ba","url":"forms/manutencao/index.html"},{"revision":"2a17f11c5d5182756e0e4eeeb4608bc7","url":"forms/levantamento_preventiva/index.html"},{"revision":"36351608ed1351b5dd8a832a7488b2ba","url":"forms/contato/index.html"},{"revision":"36351608ed1351b5dd8a832a7488b2ba","url":"forgot-password/index.html"},{"revision":"bc9d65f9bfaa7a8ab3ea1b9cce188860","url":"eventos/index.html"},{"revision":"36351608ed1351b5dd8a832a7488b2ba","url":"evento/index.html"},{"revision":"36351608ed1351b5dd8a832a7488b2ba","url":"evento/solicitar/index.html"},{"revision":"fa22ddb830f20e1cbc567fe2075f52d8","url":"data/tags.json"},{"revision":"50d93598b24e42211df0a4e3dfb7d751","url":"data/tags-circulares.json"},{"revision":"0c67f062d6c248fbad406549c816ea19","url":"data/relatorio.json"},{"revision":"416ef7202529463a618e35c6f3d32152","url":"data/ministerio.json"},{"revision":"8cbfdd1c02fe0392bf90b823fd138dd3","url":"data/metadata.json"},{"revision":"db320e577dbfa83d8489c5c71ad24284","url":"data/data.json"},{"revision":"bc9d65f9bfaa7a8ab3ea1b9cce188860","url":"agenda/index.html"},{"revision":"8818d5f9e41ebae96ded3fd48e924256","url":"_nuxt/xEFZtgK-.js"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"3d9aad04796ee8f3d3e3c63d41ed354f","url":"_nuxt/useHolidays.Cnq2fMW2.css"},{"revision":"9548c99c45e9a20dd09503206349aa3d","url":"_nuxt/ucUSG9sB.js"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"e16fe871f60ebca36f1b2fd2b8bdfed6","url":"_nuxt/settings.D81KzNVB.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"8456b4730f5a71d9d9d63b6a3f8dc488","url":"_nuxt/recentes.CtKQcL51.css"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"824b1d7761a285e7b1cbaf771eae182f","url":"_nuxt/navegar.DXE9DLXy.css"},{"revision":"e0510296dbe54614b7d355cdab608b37","url":"_nuxt/menu.DVhHSjEg.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"e675b093903bdea5a59e00992e1e5369","url":"_nuxt/kkUwlr6Y.js"},{"revision":"2a0e41f635cc3844a8c2830826ae3beb","url":"_nuxt/index.xA83gVRs.css"},{"revision":"f6b6a1f7fafcbc0b241ea5f3569f7b5e","url":"_nuxt/index.DU09tfFf.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"fbda544487abe7009243e7339ea281b0","url":"_nuxt/index.BNQXmi5z.css"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"2b214c846899444a69c59b290c93751c","url":"_nuxt/eventos.CXhhCs06.css"},{"revision":"c65545ddb8b339ad7466dec1b7878723","url":"_nuxt/entry.C-aqvbc1.css"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"543a4556d33e597d4bbdd6b18724bd44","url":"_nuxt/calendar.By77Oy8o.css"},{"revision":"b263c0f5b9698bdb39542f87dd866dc4","url":"_nuxt/calendar-print.DHVwiYMP.css"},{"revision":"ccf9bcbed9933107a121b8441d8a8370","url":"_nuxt/agenda.B1qY6oE2.css"},{"revision":"2a68ba76d6a2479fb739d21400589a89","url":"_nuxt/a3B0-qcj.js"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"2c76fea9fa687b9ccb0116e58e6c7106","url":"_nuxt/SXJXkBUA.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"c0e8cacfab8cd23719f6cd3ba1ffbbc7","url":"_nuxt/DzoaG8uh.js"},{"revision":"6edeb883766871075b0cd0f9b725332c","url":"_nuxt/DylGIWA2.js"},{"revision":"1ae49ce746cca16e1ebde664d162957e","url":"_nuxt/DrP6UJ2u.js"},{"revision":"6ff5a5bf175485d87c0022d877204bac","url":"_nuxt/DogLxHXc.js"},{"revision":"1c66de8115741fb843eac3c25d5ff374","url":"_nuxt/DiCWR4Zh.js"},{"revision":"d8e165750719c2437ff613ccc612ef1f","url":"_nuxt/DhsoIQrf.js"},{"revision":"5f449be9a74f08105047d657cb0f631c","url":"_nuxt/DcoJO3_d.js"},{"revision":"b05a445013713bfe29a25e538a4b8e91","url":"_nuxt/DbcVOkWK.js"},{"revision":"980d52d39b8cb3fd1aee36217647af06","url":"_nuxt/DQgD0c7I.js"},{"revision":"79510bd091633d6938edb6c207703479","url":"_nuxt/DK172cm9.js"},{"revision":"08b5e4adcd5284d2db7f042ae8ad832c","url":"_nuxt/DGnb20Uw.js"},{"revision":"9e0d0533b2a09a189a2fd1088ba6f9f3","url":"_nuxt/D9_voy_1.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"f48efe04fb0cf2754907648672ba409d","url":"_nuxt/D-YjtLol.js"},{"revision":"69a83aaace325e848fae7b2b88544148","url":"_nuxt/CsIOPrtT.js"},{"revision":"953014ac5c881f578ff7daf6986e5f3a","url":"_nuxt/CsBROK6O.js"},{"revision":"1ea5849fbeeab51b2efe20da540dcc27","url":"_nuxt/Caome6W6.js"},{"revision":"3df4e0a95e54da3170aac96d63f7c346","url":"_nuxt/CWGZn_sb.js"},{"revision":"c7aca90a4b931b70a98ae3556db292e5","url":"_nuxt/CT09Swq4.js"},{"revision":"e2e8eae550cf3b6981919a848ab46156","url":"_nuxt/CSW3Ihb-.js"},{"revision":"68282fa55ff79eb58b6876d4f100c299","url":"_nuxt/CSFjFLuP.js"},{"revision":"f401b401bf6dec417f97e4cc12803a9c","url":"_nuxt/COik3yfb.js"},{"revision":"d2cf4837723bd326041cbbf87996e16b","url":"_nuxt/CMKgR-Nc.js"},{"revision":"d1e9ecf389a9ceb50f917ae1d6fd2270","url":"_nuxt/CGsMuk9s.js"},{"revision":"47c9ce591498bd70252757842e5fbbcf","url":"_nuxt/C9RpHEUF.js"},{"revision":"b97dbb748e27436d75e860ff3e1b2b58","url":"_nuxt/C7pKyyti.js"},{"revision":"a192531bbcf6a70a2e11890a9a65fbf3","url":"_nuxt/C7fUoNWs.js"},{"revision":"cd307c4a4bfdb0c173a0d24a3a8932b9","url":"_nuxt/C7JfUVQB.js"},{"revision":"abb345f71d1ad7c658fe3d4c7444bee9","url":"_nuxt/Bzlsh166.js"},{"revision":"818f4de880a99bbd1ce059d74bbac210","url":"_nuxt/BwsewEjI.js"},{"revision":"0d43823830fef91297946c65eb9a73dc","url":"_nuxt/BpmYE468.js"},{"revision":"d0754d0ad6601f97d8c7600b4a555f18","url":"_nuxt/BjNUSOqQ.js"},{"revision":"fd01680955b3fdef6579e1c81704d28f","url":"_nuxt/BYZ-Eypu.js"},{"revision":"f8754f3485f5958817d73dd30543625d","url":"_nuxt/BWEnGmX4.js"},{"revision":"3573e672893f414ab7227d8b500ab40a","url":"_nuxt/BKSS0l1t.js"},{"revision":"81c34c94748ea600ff6dc770bf38b477","url":"_nuxt/BBrqU_Mz.js"},{"revision":"76693b44d197f060ff8eb2e1ab1626f0","url":"_nuxt/B-yaf85J.js"},{"revision":"a2c684e7564333fc84852edc5bcc3621","url":"_nuxt/AeZNPKsN.js"},{"revision":"dc5498042c7a0fd3d7f959307f8b7c99","url":"_nuxt/8v7gYjDp.js"},{"revision":"051280c11dbf57af035cf59c19b54dbb","url":"_nuxt/402sLbIK.js"},{"revision":"d56ad60abfb1f1d6a6e7bd6d1f7a107b","url":"_nuxt/builds/latest.json"},{"revision":"6ec16a42411d8359958ea8a036490d39","url":"_nuxt/builds/meta/183c75d8-e24e-4903-8cf9-2334f583d7cc.json"},{"revision":"8dec3d27243ae98327e347d2952d7878","url":"500/index.html"},{"revision":"8dec3d27243ae98327e347d2952d7878","url":"404/index.html"},{"revision":"7d55343510f9bbcad386172c33c13f84","url":"200/index.html"}] || []);
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
