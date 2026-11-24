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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"4f6f219dd8c451975a217c39124353a2","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"4f6f219dd8c451975a217c39124353a2","url":"404.html"},{"revision":"4f6f219dd8c451975a217c39124353a2","url":"200.html"},{"revision":"ae1a373db0f693666757193f6411c494","url":"sobre/index.html"},{"revision":"87737d7259b01a77a66517d5e06a6bce","url":"settings/index.html"},{"revision":"87737d7259b01a77a66517d5e06a6bce","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"87737d7259b01a77a66517d5e06a6bce","url":"relatorio/index.html"},{"revision":"87737d7259b01a77a66517d5e06a6bce","url":"records/index.html"},{"revision":"87737d7259b01a77a66517d5e06a6bce","url":"recentes/index.html"},{"revision":"ae1a373db0f693666757193f6411c494","url":"perfil/index.html"},{"revision":"ae1a373db0f693666757193f6411c494","url":"pages/index.html"},{"revision":"87737d7259b01a77a66517d5e06a6bce","url":"navegar/index.html"},{"revision":"ae1a373db0f693666757193f6411c494","url":"login/index.html"},{"revision":"d351084ad7dde45954fe321602463baf","url":"lista/index.html"},{"revision":"d351084ad7dde45954fe321602463baf","url":"lista/edit/index.html"},{"revision":"4f6f219dd8c451975a217c39124353a2","url":"lista/calendar-print/index.html"},{"revision":"d351084ad7dde45954fe321602463baf","url":"lista/calendar/index.html"},{"revision":"eaf44ce6a5f479020ba4be6d8664eb83","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"dbb3e8573b59e2c645501148585fe8bd","url":"js/sw/firebase.js"},{"revision":"5f743225aa84711433cdd3880dbf51d4","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"2808538d6ebb922a6fff3e7e8c357541","url":"js/sw/vendor/dexie.js"},{"revision":"c2eba1515364b627c4f3d5eb6a4bee5b","url":"js/sw/vendor/workbox/workbox-sw.js"},{"revision":"d72bef0e706a8b25012dfa8aa1e4dfff","url":"js/sw/vendor/workbox/workbox-strategies.prod.js"},{"revision":"90d3aeeedbf6f25853c480d92bc51839","url":"js/sw/vendor/workbox/workbox-routing.prod.js"},{"revision":"24c50c33b7c66d7152d4ebae0ac8bd31","url":"js/sw/vendor/workbox/workbox-precaching.prod.js"},{"revision":"2c14e6d1a14b7b1db30586e38ff7a7ae","url":"js/sw/vendor/workbox/workbox-navigation-preload.prod.js"},{"revision":"0e7ae639b709c2e7c22abb64c359f85c","url":"js/sw/vendor/workbox/workbox-expiration.prod.js"},{"revision":"7d66f77f1d0ff9348205a245c75cc6e3","url":"js/sw/vendor/workbox/workbox-core.prod.js"},{"revision":"c1164a2c6ee0dbe4099f435a008a7d00","url":"js/sw/vendor/workbox/workbox-cacheable-response.prod.js"},{"revision":"e640131b6725841102014e560e21d647","url":"js/sw/vendor/firebase/firebase-messaging-compat.js"},{"revision":"c9a629d733922bfe5a271fb7442e7d2d","url":"js/sw/vendor/firebase/firebase-app-compat.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"d351084ad7dde45954fe321602463baf","url":"hinos/index.html"},{"revision":"d351084ad7dde45954fe321602463baf","url":"forms/view/index.html"},{"revision":"4f6f219dd8c451975a217c39124353a2","url":"forms/manutencao/index.html"},{"revision":"4f6f219dd8c451975a217c39124353a2","url":"forms/levantamento_preventiva/index.html"},{"revision":"d351084ad7dde45954fe321602463baf","url":"forms/contato/index.html"},{"revision":"d351084ad7dde45954fe321602463baf","url":"forgot-password/index.html"},{"revision":"87737d7259b01a77a66517d5e06a6bce","url":"eventos/index.html"},{"revision":"d351084ad7dde45954fe321602463baf","url":"evento/index.html"},{"revision":"4f6f219dd8c451975a217c39124353a2","url":"evento/solicitar/index.html"},{"revision":"ae1a373db0f693666757193f6411c494","url":"agenda/index.html"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"73aa8599b8147e93b205de05340c34cf","url":"_nuxt/vFSSVojU.js"},{"revision":"3d9aad04796ee8f3d3e3c63d41ed354f","url":"_nuxt/useHolidays.Cnq2fMW2.css"},{"revision":"b44b0025514e0dd87792f7f3e33eb7e6","url":"_nuxt/uq3Imo-F.js"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"1241bb1feb900287ccb14310328a22c3","url":"_nuxt/settings.BXvx61R5.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"ded8f4d1879b8e333b1acc6d5566cdbd","url":"_nuxt/recentes.BkrU-6cZ.css"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"824b1d7761a285e7b1cbaf771eae182f","url":"_nuxt/navegar.DXE9DLXy.css"},{"revision":"a2bca14c0862a56af6e185e3685f82eb","url":"_nuxt/n1a2bgSR.js"},{"revision":"38b7f0b38a102e1b524086132952642c","url":"_nuxt/menu.B8Zv1MPp.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"2a0e41f635cc3844a8c2830826ae3beb","url":"_nuxt/index.xA83gVRs.css"},{"revision":"b8225ff6e280a22a007bfb59c39ed457","url":"_nuxt/index.Cu1XzCbo.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"425695bea52cc0780fdb80611e846663","url":"_nuxt/index.Bn6D8NIZ.css"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"2b214c846899444a69c59b290c93751c","url":"_nuxt/eventos.CXhhCs06.css"},{"revision":"3a1cea3743d4b7eb96f697e56a56c44f","url":"_nuxt/entry.DuAPpwJ6.css"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"9a61a6f3a910c91783c01f8b4b380e7f","url":"_nuxt/calendar.BLvGtnrh.css"},{"revision":"325e12c62a5a4595aff4809fe00518ae","url":"_nuxt/calendar-print.Bm9BqBkm.css"},{"revision":"4fd79c563b38c707c0fd80f1990005a2","url":"_nuxt/cAqAnyqZ.js"},{"revision":"49b0915e9e590a1a4044a3c0ee765fde","url":"_nuxt/bfPZkxP_.js"},{"revision":"ccf9bcbed9933107a121b8441d8a8370","url":"_nuxt/agenda.B1qY6oE2.css"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"21a8b3596d936357ff6a4f218cedbfec","url":"_nuxt/U9-3EDyu.js"},{"revision":"152e7c532c09f74a16e4a103cc01d875","url":"_nuxt/SaSC6Qgo.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"6ecc478d2126534acc0aa51e3682033f","url":"_nuxt/JsgHJN-W.js"},{"revision":"3f9115521543f22015eb4dcec621a86a","url":"_nuxt/DotcmlNd.js"},{"revision":"4062175501792d02e474498d8c1a9fe6","url":"_nuxt/DoLTzFTg.js"},{"revision":"9c9348700a23f091b3ec425a15fc5a04","url":"_nuxt/DaleTehz.js"},{"revision":"71657d5002fed0974543da63a17218d8","url":"_nuxt/DRlUKrLk.js"},{"revision":"a42798657f2fbcd63a76e94514a8ef48","url":"_nuxt/DOmQ4nXA.js"},{"revision":"5fef64079e6f12a2529b9743055cc297","url":"_nuxt/DOYo4g5z.js"},{"revision":"c8cf04501062e168f5f0a0ce9858f34a","url":"_nuxt/DLcciE-U.js"},{"revision":"c017f341552ac7919f1f6853ae1fe976","url":"_nuxt/DIBlfVtM.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"27da2b3606df290571a21157157b6188","url":"_nuxt/Cx13jEvO.js"},{"revision":"fae9fcae492aafecfba0d29fb31aec12","url":"_nuxt/CwGFGPQt.js"},{"revision":"9509658275189da3c6e87b8c3e43e7b8","url":"_nuxt/CuIfS3JY.js"},{"revision":"d09c9afa31ad74e3f727ff5dc9916d0e","url":"_nuxt/CtFKF5wP.js"},{"revision":"39788d0a714e4d2ff64d270917c839f9","url":"_nuxt/Cs-s7r2i.js"},{"revision":"d4ddc8d7ffbc37456d131316d2d0e1c3","url":"_nuxt/CeO2XvRj.js"},{"revision":"cd35fbe49a5b10199e7be363b3df5c9d","url":"_nuxt/C_sDKL0W.js"},{"revision":"a6330e24bf227a56454dcb397706654b","url":"_nuxt/CWZV_Ke9.js"},{"revision":"e1567727582de07b7f350ece57549ac3","url":"_nuxt/CV8u9ytb.js"},{"revision":"d1702a2cfdd44ae05c67dab7468f66b3","url":"_nuxt/CQJJImWJ.js"},{"revision":"36ecc5baf029f625bea0e153ef59e5ef","url":"_nuxt/CJpDpx-8.js"},{"revision":"aabf276a5264033c8ba9f3c65b998d5a","url":"_nuxt/CC9T7iwf.js"},{"revision":"87110261bd95e7a0f5d8d13196519f9b","url":"_nuxt/C7b1Gx8_.js"},{"revision":"833452397ba18ae7fe3be9990cbe2b76","url":"_nuxt/C20s3AGr.js"},{"revision":"343fb8dec39fe51ab2cbbd4a99f25c55","url":"_nuxt/C-119Uk3.js"},{"revision":"70eb4436c5dc8bfe7bb82bea852f5726","url":"_nuxt/Bydy6PYe.js"},{"revision":"1f5ab90a62e800e1759b366385c4082a","url":"_nuxt/BrzKD_6J.js"},{"revision":"1c151e793af02c42c445389b2f329785","url":"_nuxt/BrO6zzTS.js"},{"revision":"edebc76fbb93e153b1fbbcb81c5bafc1","url":"_nuxt/BiCXi8G6.js"},{"revision":"dc93ed2a91d8e9a9e45a99b3a101db24","url":"_nuxt/Bh8-df96.js"},{"revision":"ce769f92ac5a0ff9077924bc9d60ad52","url":"_nuxt/BatSN3kB.js"},{"revision":"8b418c54e00dcebbace2c6d4f347a892","url":"_nuxt/Ba0RmSUp.js"},{"revision":"19416a1b3f15e5194e65c37d072ee947","url":"_nuxt/BV3nA-UW.js"},{"revision":"71f36954793aa29b1f74f78a688419ab","url":"_nuxt/BNp4xRnT.js"},{"revision":"b2a2c7005ec634cac7f41c2041f52a66","url":"_nuxt/BNaRrY69.js"},{"revision":"7bfd3bf844769cb320bc24c352c8740b","url":"_nuxt/B1YKhLOO.js"},{"revision":"397be6fe2c2fd0cb7d67e6c4bbc44539","url":"_nuxt/B1Rd3nS3.js"},{"revision":"b70ae31d04c256980a2ad047b6ff0c4a","url":"_nuxt/5icqCCOx.js"},{"revision":"bf05c8c8e6adfcf591e67e6d89d29c0c","url":"_nuxt/16X7CVV2.js"},{"revision":"173f147fbff5abb915ee15683019dbb4","url":"_nuxt/0C55ViUM.js"},{"revision":"3d73126e50cfb8338a7d7ab23c257dee","url":"_nuxt/builds/latest.json"},{"revision":"21ea7c83b70adda44ad59e3f2629ddc9","url":"_nuxt/builds/meta/6594bc17-e979-4f7c-9570-a8d2b91c65a5.json"},{"revision":"eaf44ce6a5f479020ba4be6d8664eb83","url":"500/index.html"},{"revision":"eaf44ce6a5f479020ba4be6d8664eb83","url":"404/index.html"},{"revision":"18761e8af5881706b94fe4adaf779a8e","url":"200/index.html"}] || []);
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
