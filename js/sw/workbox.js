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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"e81b77cb0a3911abd4a0afb7aa7b301f","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"e81b77cb0a3911abd4a0afb7aa7b301f","url":"404.html"},{"revision":"e81b77cb0a3911abd4a0afb7aa7b301f","url":"200.html"},{"revision":"08b4f3b1ffcac105db92c8d449693800","url":"sobre/index.html"},{"revision":"5b52b8bdcfb7ca99d7658841106927f5","url":"settings/index.html"},{"revision":"02c65bd621354446dd8a45610c68381b","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"5b52b8bdcfb7ca99d7658841106927f5","url":"relatorio/index.html"},{"revision":"02c65bd621354446dd8a45610c68381b","url":"records/index.html"},{"revision":"02c65bd621354446dd8a45610c68381b","url":"recentes/index.html"},{"revision":"02c65bd621354446dd8a45610c68381b","url":"perfil/index.html"},{"revision":"f1f009a090bc105bdaaef519242b33a6","url":"pages/index.html"},{"revision":"02c65bd621354446dd8a45610c68381b","url":"navegar/index.html"},{"revision":"f1f009a090bc105bdaaef519242b33a6","url":"login/index.html"},{"revision":"5b52b8bdcfb7ca99d7658841106927f5","url":"lista/index.html"},{"revision":"5b52b8bdcfb7ca99d7658841106927f5","url":"lista/edit/index.html"},{"revision":"e81b77cb0a3911abd4a0afb7aa7b301f","url":"lista/calendar-print/index.html"},{"revision":"e81b77cb0a3911abd4a0afb7aa7b301f","url":"lista/calendar/index.html"},{"revision":"f1f009a090bc105bdaaef519242b33a6","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"5d6350ed327d88fb0f4a6b8072a8a519","url":"js/sw/firebase.js"},{"revision":"9495f82a0135c996553402c95ce39470","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"5b52b8bdcfb7ca99d7658841106927f5","url":"hinos/index.html"},{"revision":"5b52b8bdcfb7ca99d7658841106927f5","url":"forms/view/index.html"},{"revision":"e81b77cb0a3911abd4a0afb7aa7b301f","url":"forms/manutencao/index.html"},{"revision":"e81b77cb0a3911abd4a0afb7aa7b301f","url":"forms/levantamento_preventiva/index.html"},{"revision":"e81b77cb0a3911abd4a0afb7aa7b301f","url":"forms/contato/index.html"},{"revision":"e81b77cb0a3911abd4a0afb7aa7b301f","url":"forgot-password/index.html"},{"revision":"02c65bd621354446dd8a45610c68381b","url":"eventos/index.html"},{"revision":"5b52b8bdcfb7ca99d7658841106927f5","url":"evento/index.html"},{"revision":"e81b77cb0a3911abd4a0afb7aa7b301f","url":"evento/solicitar/index.html"},{"revision":"08b4f3b1ffcac105db92c8d449693800","url":"agenda/index.html"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"3d9aad04796ee8f3d3e3c63d41ed354f","url":"_nuxt/useHolidays.Cnq2fMW2.css"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"e16fe871f60ebca36f1b2fd2b8bdfed6","url":"_nuxt/settings.D81KzNVB.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"3dc0fce1a5edc44a4b94095c04de80eb","url":"_nuxt/recentes.p2X5nAX5.css"},{"revision":"f1af54752e67f4c2814f21c7e22dc0f5","url":"_nuxt/pwUBqmvT.js"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"824b1d7761a285e7b1cbaf771eae182f","url":"_nuxt/navegar.DXE9DLXy.css"},{"revision":"38b7f0b38a102e1b524086132952642c","url":"_nuxt/menu.B8Zv1MPp.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"3e8642d0731b6baa30eef83726434280","url":"_nuxt/lHgPhxbs.js"},{"revision":"2a0e41f635cc3844a8c2830826ae3beb","url":"_nuxt/index.xA83gVRs.css"},{"revision":"b378e058eed86c9ae937b2c2a81851d8","url":"_nuxt/index.aTsxEMpu.css"},{"revision":"5d9d6a5378fd89b0e2c3c82a3262ab33","url":"_nuxt/index.ChW9PT6h.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"d3d901a80cfa3737494916063243c7d6","url":"_nuxt/h14Lgijh.js"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"2b214c846899444a69c59b290c93751c","url":"_nuxt/eventos.CXhhCs06.css"},{"revision":"1fd1b6813c0d40a17206aa24dcc7d0a3","url":"_nuxt/entry.DYz43uzN.css"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"543a4556d33e597d4bbdd6b18724bd44","url":"_nuxt/calendar.By77Oy8o.css"},{"revision":"b263c0f5b9698bdb39542f87dd866dc4","url":"_nuxt/calendar-print.DHVwiYMP.css"},{"revision":"ccf9bcbed9933107a121b8441d8a8370","url":"_nuxt/agenda.B1qY6oE2.css"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"ef588cf43731766456ef2add004a483c","url":"_nuxt/DylaBsHH.js"},{"revision":"960dd3e6598ff53b99a01f20b719af0f","url":"_nuxt/DuAtnUOr.js"},{"revision":"f322023cf42e2307e8f5a6705305bcc6","url":"_nuxt/Dt_idWY9.js"},{"revision":"8964f76ec20ce56173ab2f94862f3f91","url":"_nuxt/DdQHZKpN.js"},{"revision":"da164452cbf4bcbc00038cdd5e3e1586","url":"_nuxt/DavQGvOI.js"},{"revision":"cee5752f68fc315c7903d43b422e7a3f","url":"_nuxt/DaQ89d9J.js"},{"revision":"fb399678c5308787b89e07a1897d5de7","url":"_nuxt/DXZQER4q.js"},{"revision":"60805900f3cfe724ea91349ecbac495a","url":"_nuxt/DUZ4buiF.js"},{"revision":"7a6ff9f5fb89fa1c192e0923467dd08f","url":"_nuxt/DSPY14PU.js"},{"revision":"76cf5e02b6c321e498cf440f92a3d621","url":"_nuxt/DMHRc6YP.js"},{"revision":"5e94d06514fbc1b421b1dbd7642efc0f","url":"_nuxt/DIRYvKL4.js"},{"revision":"6f4e07f6b8d812d626d84d1c315908b1","url":"_nuxt/D2oSISDP.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"ab4495ca0466cbd28ff30e34038b7caa","url":"_nuxt/Cekwircq.js"},{"revision":"523aa237b547d7a19d0a05a783beebc4","url":"_nuxt/CbAEG9Sk.js"},{"revision":"30a4754a29c8dfa1b3063e29a7f4cb70","url":"_nuxt/CauQ5ek-.js"},{"revision":"ff253d4c31a18c750c9ef98033a85de0","url":"_nuxt/C__sEs_3.js"},{"revision":"e90933b42f76c9ef1b840cc0495c97ed","url":"_nuxt/CWNMTdpa.js"},{"revision":"dd3ba319fdab20fe266cde22d6242a38","url":"_nuxt/CPnvh9bf.js"},{"revision":"8ca00b469ead1d23b7860975ba281e5e","url":"_nuxt/CPhAUu5R.js"},{"revision":"47d63ff80646237634bc87f916fb4dda","url":"_nuxt/CP633MHv.js"},{"revision":"b2558f74963e309502da7dc9fd0d8d3e","url":"_nuxt/CNGfR34S.js"},{"revision":"260b4f645c2ac4dcd2972fd95b322b68","url":"_nuxt/C3YaskVK.js"},{"revision":"de500d305f1148bf22cd09c066f734a2","url":"_nuxt/C2tIa5Hw.js"},{"revision":"401b6d595f6c2f02d58f65ee9bfe839a","url":"_nuxt/Bwh7mCZx.js"},{"revision":"9fd8e0de44f5fed8ceedf5413beb20c3","url":"_nuxt/Bs7Zq3Eg.js"},{"revision":"e95c81e2e6b6401c6a1293234fab3e10","url":"_nuxt/BkQNVGK8.js"},{"revision":"4ce81324c39233a0692cfc144d2af7f9","url":"_nuxt/BjcMZ7s_.js"},{"revision":"4f0f83a7cb8c4e7224c0071566f4e93d","url":"_nuxt/Bh8VOAjc.js"},{"revision":"5e937d3ccbcdf90a1bd7b37c073eb070","url":"_nuxt/BfGsWo2k.js"},{"revision":"91572d1fa215b3e6108eb233624df937","url":"_nuxt/BbhDLfil.js"},{"revision":"e8529c6861caccebca9263c1c692a8f3","url":"_nuxt/B_2A0n2p.js"},{"revision":"097959df05ea3f0c7aa3635351207507","url":"_nuxt/BVPItbA7.js"},{"revision":"64f2d1bda65d82b7122eb341ac0ef884","url":"_nuxt/BSLEbDcn.js"},{"revision":"c21684d3714609c8323736399376a2e8","url":"_nuxt/BKHpF4kh.js"},{"revision":"ec861d856c075a016a6f971e90b3d016","url":"_nuxt/BIw2RELV.js"},{"revision":"72524f547efa740e67877f53075bbdf2","url":"_nuxt/BH6IJIHY.js"},{"revision":"395f66ad544a6422e087610aeddc3210","url":"_nuxt/BEbKRT2u.js"},{"revision":"2c39843c04b6dbb4980f897b11584330","url":"_nuxt/BBygrKlL.js"},{"revision":"9403d33c258a61d601dc32882ee40090","url":"_nuxt/BB3DGTkr.js"},{"revision":"542ff8d56955b73ec9ab29d9226c6303","url":"_nuxt/B1I3vU3-.js"},{"revision":"337315715e8dc0314856da84cfe67e2d","url":"_nuxt/A8koh-ky.js"},{"revision":"ea647581e60227245142479d302a4f58","url":"_nuxt/58nQXd4m.js"},{"revision":"982de1c904ef54a23c27a1bafcd66eb4","url":"_nuxt/builds/latest.json"},{"revision":"84c59112502c37ec7e4c1f95925037a0","url":"_nuxt/builds/meta/bd83feb4-be4d-4572-a2aa-d1a684234b74.json"},{"revision":"488403e0203480f7b8ef0e3df125e643","url":"500/index.html"},{"revision":"488403e0203480f7b8ef0e3df125e643","url":"404/index.html"},{"revision":"516d87ae5e36b24899af5dbee5282774","url":"200/index.html"}] || []);
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
