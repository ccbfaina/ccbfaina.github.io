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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"d19fbc85519f213835e8d1fbf2598e11","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"d19fbc85519f213835e8d1fbf2598e11","url":"404.html"},{"revision":"d19fbc85519f213835e8d1fbf2598e11","url":"200.html"},{"revision":"2fe440d568b33836cca1ecffd86d524f","url":"sobre/index.html"},{"revision":"4ba65db83ba9fc80457a21d878ebbb40","url":"settings/index.html"},{"revision":"4ba65db83ba9fc80457a21d878ebbb40","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"8005b914098a3bbd2e69586557217584","url":"relatorio/index.html"},{"revision":"4ba65db83ba9fc80457a21d878ebbb40","url":"records/index.html"},{"revision":"4ba65db83ba9fc80457a21d878ebbb40","url":"recentes/index.html"},{"revision":"4ba65db83ba9fc80457a21d878ebbb40","url":"perfil/index.html"},{"revision":"2fe440d568b33836cca1ecffd86d524f","url":"pages/index.html"},{"revision":"4ba65db83ba9fc80457a21d878ebbb40","url":"navegar/index.html"},{"revision":"2fe440d568b33836cca1ecffd86d524f","url":"login/index.html"},{"revision":"8005b914098a3bbd2e69586557217584","url":"lista/index.html"},{"revision":"8005b914098a3bbd2e69586557217584","url":"lista/edit/index.html"},{"revision":"d19fbc85519f213835e8d1fbf2598e11","url":"lista/calendar-print/index.html"},{"revision":"17a8efd6346513c1405579e40bbc3216","url":"lista/calendar/index.html"},{"revision":"b2d1be2e2b63e1a67630ffad22c6c013","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"dbb3e8573b59e2c645501148585fe8bd","url":"js/sw/firebase.js"},{"revision":"5f743225aa84711433cdd3880dbf51d4","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"2808538d6ebb922a6fff3e7e8c357541","url":"js/sw/vendor/dexie.js"},{"revision":"c2eba1515364b627c4f3d5eb6a4bee5b","url":"js/sw/vendor/workbox/workbox-sw.js"},{"revision":"d72bef0e706a8b25012dfa8aa1e4dfff","url":"js/sw/vendor/workbox/workbox-strategies.prod.js"},{"revision":"90d3aeeedbf6f25853c480d92bc51839","url":"js/sw/vendor/workbox/workbox-routing.prod.js"},{"revision":"24c50c33b7c66d7152d4ebae0ac8bd31","url":"js/sw/vendor/workbox/workbox-precaching.prod.js"},{"revision":"2c14e6d1a14b7b1db30586e38ff7a7ae","url":"js/sw/vendor/workbox/workbox-navigation-preload.prod.js"},{"revision":"0e7ae639b709c2e7c22abb64c359f85c","url":"js/sw/vendor/workbox/workbox-expiration.prod.js"},{"revision":"7d66f77f1d0ff9348205a245c75cc6e3","url":"js/sw/vendor/workbox/workbox-core.prod.js"},{"revision":"c1164a2c6ee0dbe4099f435a008a7d00","url":"js/sw/vendor/workbox/workbox-cacheable-response.prod.js"},{"revision":"e640131b6725841102014e560e21d647","url":"js/sw/vendor/firebase/firebase-messaging-compat.js"},{"revision":"c9a629d733922bfe5a271fb7442e7d2d","url":"js/sw/vendor/firebase/firebase-app-compat.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"8005b914098a3bbd2e69586557217584","url":"hinos/index.html"},{"revision":"8005b914098a3bbd2e69586557217584","url":"forms/view/index.html"},{"revision":"d19fbc85519f213835e8d1fbf2598e11","url":"forms/manutencao/index.html"},{"revision":"d19fbc85519f213835e8d1fbf2598e11","url":"forms/levantamento_preventiva/index.html"},{"revision":"8005b914098a3bbd2e69586557217584","url":"forms/contato/index.html"},{"revision":"d19fbc85519f213835e8d1fbf2598e11","url":"forgot-password/index.html"},{"revision":"4ba65db83ba9fc80457a21d878ebbb40","url":"eventos/index.html"},{"revision":"8005b914098a3bbd2e69586557217584","url":"evento/index.html"},{"revision":"d19fbc85519f213835e8d1fbf2598e11","url":"evento/solicitar/index.html"},{"revision":"2fe440d568b33836cca1ecffd86d524f","url":"agenda/index.html"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"3d9aad04796ee8f3d3e3c63d41ed354f","url":"_nuxt/useHolidays.Cnq2fMW2.css"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"1241bb1feb900287ccb14310328a22c3","url":"_nuxt/settings.BXvx61R5.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"ded8f4d1879b8e333b1acc6d5566cdbd","url":"_nuxt/recentes.BkrU-6cZ.css"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"824b1d7761a285e7b1cbaf771eae182f","url":"_nuxt/navegar.DXE9DLXy.css"},{"revision":"38b7f0b38a102e1b524086132952642c","url":"_nuxt/menu.B8Zv1MPp.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"03a732134fe01799fc8f19692ae4eb82","url":"_nuxt/kDt9IDwY.js"},{"revision":"6bf2afc6be6eda4959e63fd2f439f369","url":"_nuxt/j7kdK-jZ.js"},{"revision":"2a0e41f635cc3844a8c2830826ae3beb","url":"_nuxt/index.xA83gVRs.css"},{"revision":"b8225ff6e280a22a007bfb59c39ed457","url":"_nuxt/index.Cu1XzCbo.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"0a3577959cb979eb2c226a2b4b46ab3d","url":"_nuxt/index.9doV5TK9.css"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"a2d5898b76b8daf3e03cf92c7062d4e1","url":"_nuxt/eventos.DSkMyjd6.css"},{"revision":"3a1cea3743d4b7eb96f697e56a56c44f","url":"_nuxt/entry.DuAPpwJ6.css"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"9a61a6f3a910c91783c01f8b4b380e7f","url":"_nuxt/calendar.BLvGtnrh.css"},{"revision":"325e12c62a5a4595aff4809fe00518ae","url":"_nuxt/calendar-print.Bm9BqBkm.css"},{"revision":"e72dbda54f240c44508a2946595b884a","url":"_nuxt/bqV8Dr8p.js"},{"revision":"ccf9bcbed9933107a121b8441d8a8370","url":"_nuxt/agenda.B1qY6oE2.css"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"be1ab2364f3bb9ab895f8ec5e9ea96d7","url":"_nuxt/Z8f1V1t2.js"},{"revision":"b8ed374b50c347757890bbc1e5bb0968","url":"_nuxt/XWzykfcX.js"},{"revision":"ab2c0081bce9773bf47f7b224a7462d8","url":"_nuxt/S9-Agn5a.js"},{"revision":"4188e99d38a1d32c0b323492d9b2fc89","url":"_nuxt/P5X5fqW1.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"096e4107aa7f364ee95c45e5da7f39a3","url":"_nuxt/Htwa7XLO.js"},{"revision":"825455584ed62631432fbce802c01857","url":"_nuxt/EyLzCWvT.js"},{"revision":"b9f1861ba2cf3325084cb764ef069155","url":"_nuxt/DxF9LrAu.js"},{"revision":"d4439530c9ac9cf47c674d1b187d3cd6","url":"_nuxt/Dl9WHS-e.js"},{"revision":"0cee74549689f440c3afda6664969bd9","url":"_nuxt/DcHT9LvY.js"},{"revision":"c08b24e0210b21c11efe92840f6d1a0f","url":"_nuxt/DXGpvgQ6.js"},{"revision":"300567e6691078ca6561b3802e551290","url":"_nuxt/DOUFRQp5.js"},{"revision":"611b3e3161bd891982319f6ab811bf94","url":"_nuxt/DM-bkc8x.js"},{"revision":"a6e7b8e0f09d7674892ef8e0596b208a","url":"_nuxt/DJlmYqrp.js"},{"revision":"c8afe35055f1369533062e8660888cd5","url":"_nuxt/DBMRxEjp.js"},{"revision":"0f0399d2590621b410dfc14d0c7cea12","url":"_nuxt/DA0t2eer.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"3d92e448dd01205bb4b502376aac1a4d","url":"_nuxt/CxxroD_M.js"},{"revision":"9509658275189da3c6e87b8c3e43e7b8","url":"_nuxt/CuIfS3JY.js"},{"revision":"9eff528030a3b7d98932f31fa03224a9","url":"_nuxt/CrZZyFaV.js"},{"revision":"77029b81c4366e6c5d4143265bbc5025","url":"_nuxt/CpDHCajc.js"},{"revision":"b1798b9536e00fc1c1448829eaa9d242","url":"_nuxt/CmK1mJRs.js"},{"revision":"45bed32ee1e9978bbf2451bbe0ead3ef","url":"_nuxt/Clw6ghQC.js"},{"revision":"400667ea17ac7265e734d483be3bc7d5","url":"_nuxt/CbbK8JlW.js"},{"revision":"c7dcf3327f777e66793ff9e4cdb1b07c","url":"_nuxt/CbOJk3N7.js"},{"revision":"f099e4c5a9c59f236563270608035faf","url":"_nuxt/CNrLBJ8e.js"},{"revision":"e7e6748b435b446f6ef34a5acdd4c3ea","url":"_nuxt/CL98P4QQ.js"},{"revision":"2b92054b6abf032e18c6d4e5802c1fbd","url":"_nuxt/CGAz1vpj.js"},{"revision":"67f662a5b86c0f938da7ab74e0f22d76","url":"_nuxt/ByRDFHUu.js"},{"revision":"8b3b3bbca8b887e97a7227cc5402ef07","url":"_nuxt/BruBQAAK.js"},{"revision":"9ec939d29f404bc2f9bf897560a1a05c","url":"_nuxt/BngQMztZ.js"},{"revision":"9334d9f954513d6f20c64f7b5746d278","url":"_nuxt/Ba7kahVn.js"},{"revision":"c0a9d39929ca45f074a754af0aeaa6d0","url":"_nuxt/BVkO4t1H.js"},{"revision":"533b36b159d18614be6073f5b6f90a6f","url":"_nuxt/BVj_j0mF.js"},{"revision":"6d167ac5cea07766abc5d256acae2bca","url":"_nuxt/BSE3F_ez.js"},{"revision":"365a143548b2a6828a61b68e750d95cb","url":"_nuxt/BMtlH644.js"},{"revision":"9ee71917aedd7aec2690e57cfc20f56f","url":"_nuxt/BMYtvSvy.js"},{"revision":"fc14953545da72a9d062a1aa6c2e6020","url":"_nuxt/BK3v_qKq.js"},{"revision":"ef181fa1a4a57ac4cc24ec69f2bbbf75","url":"_nuxt/BJo8XY5k.js"},{"revision":"c9da808a48bfcbd59ec252c6e15200db","url":"_nuxt/BJigKNSJ.js"},{"revision":"9d100133de2708a96fc3e130d65339a1","url":"_nuxt/B9cPYj-g.js"},{"revision":"341ccb2f484e1c2a13254a7149b78aeb","url":"_nuxt/B9GPnd0s.js"},{"revision":"2f5eef65d355a5a5686e702ef1b733ec","url":"_nuxt/B9CiTtJZ.js"},{"revision":"2474a4a1a85cdd6af2811421e485d299","url":"_nuxt/B7DybSNK.js"},{"revision":"594e91bb9ee70d30c8b2dcc9e3af50d3","url":"_nuxt/628M3a6W.js"},{"revision":"e52a5b4d80b8796a6a21a735559bc606","url":"_nuxt/builds/latest.json"},{"revision":"fa80216c6d15601da13536544c3855ec","url":"_nuxt/builds/meta/ff752685-5011-4738-9623-ae00f5ad50cf.json"},{"revision":"b2d1be2e2b63e1a67630ffad22c6c013","url":"500/index.html"},{"revision":"b2d1be2e2b63e1a67630ffad22c6c013","url":"404/index.html"},{"revision":"f8f3cd3504a84fe3678dc726eea371b4","url":"200/index.html"}] || []);
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
