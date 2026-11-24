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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"054abc7b4b4edb8350664a5e1be6b6d4","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"a099fd0a3772a05aabee449a4f722976","url":"404.html"},{"revision":"054abc7b4b4edb8350664a5e1be6b6d4","url":"200.html"},{"revision":"f696e28b6c3f642be380b33dd4b3d350","url":"sobre/index.html"},{"revision":"72aa3bf50ad81aa867f38f51031c2f03","url":"settings/index.html"},{"revision":"939690d111d4e510e5be599e9241cb28","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"c672f85fb9743887c78e6b643e51ec7e","url":"relatorio/index.html"},{"revision":"1ee822c985a9639aab01b66b79755f15","url":"records/index.html"},{"revision":"939690d111d4e510e5be599e9241cb28","url":"recentes/index.html"},{"revision":"2055533e4f27aad78c050949515160cd","url":"perfil/index.html"},{"revision":"a8488253d7197d40fc08fbbd9aafe428","url":"pages/index.html"},{"revision":"1ee822c985a9639aab01b66b79755f15","url":"navegar/index.html"},{"revision":"a8488253d7197d40fc08fbbd9aafe428","url":"login/index.html"},{"revision":"d00e58e5d6d1a0e504d0fe74a0d742e1","url":"lista/index.html"},{"revision":"c672f85fb9743887c78e6b643e51ec7e","url":"lista/edit/index.html"},{"revision":"6bfefe747ef48aedd977135642fcd4ba","url":"lista/calendar-print/index.html"},{"revision":"615ae13421dc8732985bcde3a5c3f984","url":"lista/calendar/index.html"},{"revision":"fd7badf86c86c45aef0cc11cfb192826","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"dbb3e8573b59e2c645501148585fe8bd","url":"js/sw/firebase.js"},{"revision":"5f743225aa84711433cdd3880dbf51d4","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"2808538d6ebb922a6fff3e7e8c357541","url":"js/sw/vendor/dexie.js"},{"revision":"c2eba1515364b627c4f3d5eb6a4bee5b","url":"js/sw/vendor/workbox/workbox-sw.js"},{"revision":"d72bef0e706a8b25012dfa8aa1e4dfff","url":"js/sw/vendor/workbox/workbox-strategies.prod.js"},{"revision":"90d3aeeedbf6f25853c480d92bc51839","url":"js/sw/vendor/workbox/workbox-routing.prod.js"},{"revision":"24c50c33b7c66d7152d4ebae0ac8bd31","url":"js/sw/vendor/workbox/workbox-precaching.prod.js"},{"revision":"2c14e6d1a14b7b1db30586e38ff7a7ae","url":"js/sw/vendor/workbox/workbox-navigation-preload.prod.js"},{"revision":"0e7ae639b709c2e7c22abb64c359f85c","url":"js/sw/vendor/workbox/workbox-expiration.prod.js"},{"revision":"7d66f77f1d0ff9348205a245c75cc6e3","url":"js/sw/vendor/workbox/workbox-core.prod.js"},{"revision":"c1164a2c6ee0dbe4099f435a008a7d00","url":"js/sw/vendor/workbox/workbox-cacheable-response.prod.js"},{"revision":"e640131b6725841102014e560e21d647","url":"js/sw/vendor/firebase/firebase-messaging-compat.js"},{"revision":"c9a629d733922bfe5a271fb7442e7d2d","url":"js/sw/vendor/firebase/firebase-app-compat.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"d00e58e5d6d1a0e504d0fe74a0d742e1","url":"hinos/index.html"},{"revision":"c672f85fb9743887c78e6b643e51ec7e","url":"forms/view/index.html"},{"revision":"6bfefe747ef48aedd977135642fcd4ba","url":"forms/manutencao/index.html"},{"revision":"a099fd0a3772a05aabee449a4f722976","url":"forms/levantamento_preventiva/index.html"},{"revision":"615ae13421dc8732985bcde3a5c3f984","url":"forms/contato/index.html"},{"revision":"df0783df8a6afb8fefa5fe4ff62c6477","url":"forgot-password/index.html"},{"revision":"f117d822641e48e647e8cf7f4864fc98","url":"eventos/index.html"},{"revision":"5ded2c1fd9970172181942c963aef6c5","url":"evento/index.html"},{"revision":"df0783df8a6afb8fefa5fe4ff62c6477","url":"evento/solicitar/index.html"},{"revision":"2055533e4f27aad78c050949515160cd","url":"agenda/index.html"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"3d9aad04796ee8f3d3e3c63d41ed354f","url":"_nuxt/useHolidays.Cnq2fMW2.css"},{"revision":"fb7c5decb1dee07bfefae8434a5428a0","url":"_nuxt/tm1DeIdA.js"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"1241bb1feb900287ccb14310328a22c3","url":"_nuxt/settings.BXvx61R5.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"edb93bd91d5a8765d1af9be446cc262f","url":"_nuxt/s7Ef_HUC.js"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"ded8f4d1879b8e333b1acc6d5566cdbd","url":"_nuxt/recentes.BkrU-6cZ.css"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"824b1d7761a285e7b1cbaf771eae182f","url":"_nuxt/navegar.DXE9DLXy.css"},{"revision":"38b7f0b38a102e1b524086132952642c","url":"_nuxt/menu.B8Zv1MPp.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"eaa0ac1f0fb70c413166130ec7a52d2f","url":"_nuxt/kOZ8Zo1J.js"},{"revision":"f7ac7173723ac371ce19bb3b8855e5be","url":"_nuxt/jtsIh8dB.js"},{"revision":"2a0e41f635cc3844a8c2830826ae3beb","url":"_nuxt/index.xA83gVRs.css"},{"revision":"b8225ff6e280a22a007bfb59c39ed457","url":"_nuxt/index.Cu1XzCbo.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"64fcbb9bc362b652b463a14a01fbddea","url":"_nuxt/index.BjOIiZJa.css"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"2f8e42f41bbeafda29a73ef0e79a3ba5","url":"_nuxt/eventos.1rr9hiTl.css"},{"revision":"3a1cea3743d4b7eb96f697e56a56c44f","url":"_nuxt/entry.DuAPpwJ6.css"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"9a61a6f3a910c91783c01f8b4b380e7f","url":"_nuxt/calendar.BLvGtnrh.css"},{"revision":"325e12c62a5a4595aff4809fe00518ae","url":"_nuxt/calendar-print.Bm9BqBkm.css"},{"revision":"ccf9bcbed9933107a121b8441d8a8370","url":"_nuxt/agenda.B1qY6oE2.css"},{"revision":"19885830a5a32429719b029d537a894f","url":"_nuxt/aREowPfM.js"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"a26b4a8244585ab86517df159e68b70b","url":"_nuxt/OGrhCAQf.js"},{"revision":"9a4ccc31df8df595acbcc1698e4121ef","url":"_nuxt/MG_pOX4g.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"d86cf3365981edc75db1d1d027c2b9f6","url":"_nuxt/L5Ys5OuJ.js"},{"revision":"36cfdb545a73e0f1e5622730a4c99330","url":"_nuxt/DxUnJgGp.js"},{"revision":"76aeab86407c715b8efec89e8c13083e","url":"_nuxt/DY96mGZ7.js"},{"revision":"93c0fd80c0943c1f61ac617150ef65cb","url":"_nuxt/DRaHCNyO.js"},{"revision":"6d9f89f8dc015ac33fa67f60d5e94669","url":"_nuxt/DONGRFpG.js"},{"revision":"1414d19b9e770c09e934d18611317b37","url":"_nuxt/DM_zYu4L.js"},{"revision":"663b73e3e81a914d2fa8f3e9aed7ea97","url":"_nuxt/D4sZ9-Lp.js"},{"revision":"c9896f48688d510a72c775fa7862884a","url":"_nuxt/D4ZFF64F.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"9509658275189da3c6e87b8c3e43e7b8","url":"_nuxt/CuIfS3JY.js"},{"revision":"7417797a099f5c5ac7cdf82b0c3f45c8","url":"_nuxt/CtCIuMua.js"},{"revision":"96b4c5e53ec72951ffe63685e7b0a22c","url":"_nuxt/Cqu3vX7_.js"},{"revision":"eec0595b5ec79d20f73da5f2984c00ee","url":"_nuxt/CkS3qoJB.js"},{"revision":"ee10516d92b16a6dbe86e53d6c86996c","url":"_nuxt/CfmJifkR.js"},{"revision":"f838992063b7b5dfde38bb390a02d2b2","url":"_nuxt/Ce16htOA.js"},{"revision":"86ea4e5deb4dec7317afde70835432cf","url":"_nuxt/CcHgRGgN.js"},{"revision":"95b55c5127902a1e6d06ae5ed350a51c","url":"_nuxt/CaBDesS4.js"},{"revision":"61c5c0814ec4323177dc37350bfc69b7","url":"_nuxt/CUzGlINF.js"},{"revision":"b170e426f7321131f2b6ac980b3d097e","url":"_nuxt/CRArIn6W.js"},{"revision":"0d509b906be478b6845aab926b0cd418","url":"_nuxt/CQJbOGds.js"},{"revision":"b8fcaee042964c37972233a8e42a0f7e","url":"_nuxt/CMOgF3JX.js"},{"revision":"be5bd08b509f44d3b82955bf2f6d121b","url":"_nuxt/C3q3To0C.js"},{"revision":"f38f8bdfa31e948f4fa15b5dee06966f","url":"_nuxt/C30y7dzF.js"},{"revision":"f5d98640856c75ce30989698773b9883","url":"_nuxt/C1U6TJJ2.js"},{"revision":"29f6b81754e88052bcc2aca2788a154f","url":"_nuxt/Bt_uE9rR.js"},{"revision":"9358cb347acd59eb14be14616e94464a","url":"_nuxt/BsrvxVEY.js"},{"revision":"2bcd7d85d724108bffdb5685491d97d8","url":"_nuxt/Bsqgdsze.js"},{"revision":"746004f109da9cd115ed170f99c55447","url":"_nuxt/BmaOhdbN.js"},{"revision":"4877055fad8b17766f591ec437bc62a3","url":"_nuxt/BghCDhxd.js"},{"revision":"5183d58690269161b08450f5e6304d93","url":"_nuxt/BasPxbvG.js"},{"revision":"4e7198480d29f4eacf71b5ad9de1732b","url":"_nuxt/BVhCMOwA.js"},{"revision":"413ff3de6c7a8d58b9ae84e8cd3560d3","url":"_nuxt/BUbDkx4P.js"},{"revision":"79fc79ed5d4034951f86148d484ef44d","url":"_nuxt/BUMihyaP.js"},{"revision":"da04876cee2fe446a574cd22daae7102","url":"_nuxt/BRqUiX2A.js"},{"revision":"d8632e66bf0594174a13eb7f5a758452","url":"_nuxt/BJ6ljP98.js"},{"revision":"d51d98508c938acdc03de3ad45b64f57","url":"_nuxt/BFm2nTA8.js"},{"revision":"52a0743aaa92999463a41f4459b034f8","url":"_nuxt/B92y0QxL.js"},{"revision":"893f4127ddcf73d97f99ab992270d650","url":"_nuxt/B7jv8L_e.js"},{"revision":"eecfb43c52ae0cd46837915725c20a46","url":"_nuxt/B5B7ypIu.js"},{"revision":"0736db7e06abdabaf8fadcc4ece03c55","url":"_nuxt/B4JBaMaW.js"},{"revision":"c278bed625479cbf439fd561aeead82c","url":"_nuxt/builds/latest.json"},{"revision":"1f2e756ff0163f2a832b33bf05490d43","url":"_nuxt/builds/meta/d1f226ec-ee82-4e4f-8708-8d751e11cf7f.json"},{"revision":"ddc501dee6732c6a2dd06a221bfde46b","url":"500/index.html"},{"revision":"3cc81fb66e234644ade38e93bf9c7b7e","url":"404/index.html"},{"revision":"430993b8412e152fdd65928d331019fa","url":"200/index.html"}] || []);
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
