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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"97f28a963f9632d32e3160e7d3847c75","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"ad1751942ef74f53ac58a715be45a3bd","url":"404.html"},{"revision":"97f28a963f9632d32e3160e7d3847c75","url":"200.html"},{"revision":"f114a95f5d7efbbaa91d57846cc0dc47","url":"sobre/index.html"},{"revision":"25488a8a2dea2aeced7e38d7b577a847","url":"settings/index.html"},{"revision":"25488a8a2dea2aeced7e38d7b577a847","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"6276d01a33c2a93d2c3223feff491c5b","url":"relatorio/index.html"},{"revision":"21789ba3fa57630b0d094eee9ee124da","url":"records/index.html"},{"revision":"25488a8a2dea2aeced7e38d7b577a847","url":"recentes/index.html"},{"revision":"94e645961f8baf929de5df33d2a359f3","url":"perfil/index.html"},{"revision":"c75238093a1979911b32d52d51dc8bb1","url":"pages/index.html"},{"revision":"5369733e73ad0b7c0243f709b86e05b9","url":"navegar/index.html"},{"revision":"55217f04c37aaa5e28fc72e811e9bd94","url":"login/index.html"},{"revision":"93089404566a88f99f7d407b737de5c7","url":"lista/index.html"},{"revision":"223213ac481883a79a86b081a6243ef1","url":"lista/edit/index.html"},{"revision":"945595737da13e1e92e9be3618162a7d","url":"lista/calendar-print/index.html"},{"revision":"9881c6cf35948aeb3aa6ca68b02360b3","url":"lista/calendar/index.html"},{"revision":"44e09e374ef4f73096b9e38cf08bf9b3","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"dbb3e8573b59e2c645501148585fe8bd","url":"js/sw/firebase.js"},{"revision":"5f743225aa84711433cdd3880dbf51d4","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"2808538d6ebb922a6fff3e7e8c357541","url":"js/sw/vendor/dexie.js"},{"revision":"c2eba1515364b627c4f3d5eb6a4bee5b","url":"js/sw/vendor/workbox/workbox-sw.js"},{"revision":"d72bef0e706a8b25012dfa8aa1e4dfff","url":"js/sw/vendor/workbox/workbox-strategies.prod.js"},{"revision":"90d3aeeedbf6f25853c480d92bc51839","url":"js/sw/vendor/workbox/workbox-routing.prod.js"},{"revision":"24c50c33b7c66d7152d4ebae0ac8bd31","url":"js/sw/vendor/workbox/workbox-precaching.prod.js"},{"revision":"2c14e6d1a14b7b1db30586e38ff7a7ae","url":"js/sw/vendor/workbox/workbox-navigation-preload.prod.js"},{"revision":"0e7ae639b709c2e7c22abb64c359f85c","url":"js/sw/vendor/workbox/workbox-expiration.prod.js"},{"revision":"7d66f77f1d0ff9348205a245c75cc6e3","url":"js/sw/vendor/workbox/workbox-core.prod.js"},{"revision":"c1164a2c6ee0dbe4099f435a008a7d00","url":"js/sw/vendor/workbox/workbox-cacheable-response.prod.js"},{"revision":"e640131b6725841102014e560e21d647","url":"js/sw/vendor/firebase/firebase-messaging-compat.js"},{"revision":"c9a629d733922bfe5a271fb7442e7d2d","url":"js/sw/vendor/firebase/firebase-app-compat.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"93089404566a88f99f7d407b737de5c7","url":"hinos/index.html"},{"revision":"223213ac481883a79a86b081a6243ef1","url":"forms/view/index.html"},{"revision":"945595737da13e1e92e9be3618162a7d","url":"forms/manutencao/index.html"},{"revision":"ad1751942ef74f53ac58a715be45a3bd","url":"forms/levantamento_preventiva/index.html"},{"revision":"9881c6cf35948aeb3aa6ca68b02360b3","url":"forms/contato/index.html"},{"revision":"8cd19e23cf89e300ed7df38e715aeb07","url":"forgot-password/index.html"},{"revision":"5369733e73ad0b7c0243f709b86e05b9","url":"eventos/index.html"},{"revision":"23e4e5fac59eb4afcf1904f97ba63504","url":"evento/index.html"},{"revision":"8cd19e23cf89e300ed7df38e715aeb07","url":"evento/solicitar/index.html"},{"revision":"f114a95f5d7efbbaa91d57846cc0dc47","url":"agenda/index.html"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"3d9aad04796ee8f3d3e3c63d41ed354f","url":"_nuxt/useHolidays.Cnq2fMW2.css"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"1241bb1feb900287ccb14310328a22c3","url":"_nuxt/settings.BXvx61R5.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"b12620256d14e897a1be98f9d3ad57cd","url":"_nuxt/recentes.YPfqBw-P.css"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"058a6aff9836eccbb3d348658e51df59","url":"_nuxt/navegar.BzXhEhIc.css"},{"revision":"38b7f0b38a102e1b524086132952642c","url":"_nuxt/menu.B8Zv1MPp.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"c4f40e721e6e9a7a4919c2b702bf1ab3","url":"_nuxt/lzUZqeTN.js"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"aeb2ee395ba02dfd991807aba8628743","url":"_nuxt/j1sN09p9.js"},{"revision":"2a0e41f635cc3844a8c2830826ae3beb","url":"_nuxt/index.xA83gVRs.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"b81afd01bed465a8150707d1e035982d","url":"_nuxt/index.BbG8S8cs.css"},{"revision":"0a3577959cb979eb2c226a2b4b46ab3d","url":"_nuxt/index.9doV5TK9.css"},{"revision":"435e65e9e2ed3ad5cdae8982f5aed549","url":"_nuxt/iKfSOf-x.js"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"a2d5898b76b8daf3e03cf92c7062d4e1","url":"_nuxt/eventos.DSkMyjd6.css"},{"revision":"b37b6107ac48cf4fe5bc42db4e0d0647","url":"_nuxt/epSsCTUI.js"},{"revision":"3a1cea3743d4b7eb96f697e56a56c44f","url":"_nuxt/entry.DuAPpwJ6.css"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"900ef03dde1cf8cf40b23f5cad80a360","url":"_nuxt/calendar.4YSbG8xb.css"},{"revision":"325e12c62a5a4595aff4809fe00518ae","url":"_nuxt/calendar-print.Bm9BqBkm.css"},{"revision":"ccf9bcbed9933107a121b8441d8a8370","url":"_nuxt/agenda.B1qY6oE2.css"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"80a62000014b81feaedbd82a2c26a1b9","url":"_nuxt/_fyKxKkP.js"},{"revision":"f22c6bec6a072e98739fd4db60139b9f","url":"_nuxt/O6bdX8Kt.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"e42c6fc9740afb660e172589926e9b76","url":"_nuxt/DymjPiP5.js"},{"revision":"48cc4dd99b642d3c198e327466fa1021","url":"_nuxt/DuW3tlO0.js"},{"revision":"c8e6486319e6de078e70b25697b9c228","url":"_nuxt/DuAToNeg.js"},{"revision":"5dccb4c42728fa89e8dab64394cdd5fe","url":"_nuxt/DpwEsz6l.js"},{"revision":"61d1ede7909991ffefe665390cc23faa","url":"_nuxt/DmCHwiHE.js"},{"revision":"48e83121c431e80e31597161d058933a","url":"_nuxt/Djn1dQp5.js"},{"revision":"ed472ef6ea17277a12e004c3b2cfc90e","url":"_nuxt/D_Be3uA2.js"},{"revision":"1eb6f9a9eb0b009496757f4da721107c","url":"_nuxt/DUpJQ2rV.js"},{"revision":"38b2e3d4d6dea4e3831840e3e30aa7fd","url":"_nuxt/DOehpGLk.js"},{"revision":"d8b5248712b06dfd397ecfb1b03309c9","url":"_nuxt/DMHJJKTv.js"},{"revision":"3cfa4a15ea909f97fc944a91c64f4b4d","url":"_nuxt/DCGgsjwG.js"},{"revision":"665ffd6a3299a627768a954821493a8e","url":"_nuxt/DBzU6opH.js"},{"revision":"f0b26036b087acc513f2994bf0d21a1f","url":"_nuxt/DAdcwa6p.js"},{"revision":"916beae4c6bb49c6dfca4869fe994a9d","url":"_nuxt/D6SVkar7.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"9509658275189da3c6e87b8c3e43e7b8","url":"_nuxt/CuIfS3JY.js"},{"revision":"62d1decb75f250ba530cebc69b7e31dc","url":"_nuxt/CbLh8i8a.js"},{"revision":"a2554298c309242d800cdb88bc08f798","url":"_nuxt/CaQG4d-l.js"},{"revision":"d6df3191c3f0cf30bf9318ebe0e86510","url":"_nuxt/CTGUJHr1.js"},{"revision":"9436557b298714253ff477c61163c19a","url":"_nuxt/CLCrz9kj.js"},{"revision":"e8d5f576416be59ef0fedcc18274c544","url":"_nuxt/CImcISts.js"},{"revision":"de037a1d16ebd6db1bc3efd711ed83b2","url":"_nuxt/CDI6JcIL.js"},{"revision":"47fe2666745c427f7febf3fd6200fcaa","url":"_nuxt/CA0upinF.js"},{"revision":"7cfb2779b888f67cfda0b911f9319a0f","url":"_nuxt/C7QSNujz.js"},{"revision":"eaca3c7fc7dc0427884e1addddf500ea","url":"_nuxt/C5wxSjXP.js"},{"revision":"a4d30ed4b7b88ff02ae2847efc0a3061","url":"_nuxt/Byk3G97j.js"},{"revision":"0327aeade4cc257cd4a61722dd3b6482","url":"_nuxt/BudOKTFv.js"},{"revision":"da51b25910a16a91f85c02aa0dc6b825","url":"_nuxt/Bmnx2fO7.js"},{"revision":"c2d6f3daaa3f0eb0b63b1257fae6781a","url":"_nuxt/BlUV1bwb.js"},{"revision":"e2c917f97c447c1071b5a914eed6bf1c","url":"_nuxt/BiSeMzem.js"},{"revision":"c7dfff50e53eff1676e94b70bacbbda2","url":"_nuxt/BheYAsWC.js"},{"revision":"92ccb4840ff9381539fce56a78d50c7d","url":"_nuxt/Bh_QhEDi.js"},{"revision":"5e87353257cfe234c7b38403382c93e2","url":"_nuxt/BftTs-NZ.js"},{"revision":"4e0c8789310d00780f5a53aab66eef52","url":"_nuxt/BeSDRzq_.js"},{"revision":"ca4be5642c7904fef901a23fd5db98f9","url":"_nuxt/BWnIDYs8.js"},{"revision":"86e1489d2aa96927e36c389e39735ba4","url":"_nuxt/BVCUEp6w.js"},{"revision":"b88277dc498a5c721578f5ba95989477","url":"_nuxt/BV9kCDd1.js"},{"revision":"d84b772593356c90327ff0501e5cbec9","url":"_nuxt/BDLmRz69.js"},{"revision":"acf81b7806d1f9264a8f57c469e956f4","url":"_nuxt/BAgdSZ1r.js"},{"revision":"67bee19610e4d1f374cf40ee8025ae55","url":"_nuxt/B3-UFKZ8.js"},{"revision":"c509ed32881882469576ee8a6f0fcafc","url":"_nuxt/7I-jvbjs.js"},{"revision":"6701847e8cb28c35b75064466a0bd1a2","url":"_nuxt/builds/latest.json"},{"revision":"ec083738e95296928d0f70af05903f3d","url":"_nuxt/builds/meta/de662272-9707-482e-a052-1184554f24ce.json"},{"revision":"77889146c48ffc0407cbbb9fbe77a596","url":"500/index.html"},{"revision":"e0eeb1e71916d08f895d096c4b1d3bf4","url":"404/index.html"},{"revision":"b9cb95d5940f8d3baa6083a63f9fa781","url":"200/index.html"}] || []);
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
