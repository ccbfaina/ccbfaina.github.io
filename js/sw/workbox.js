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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"6f29820dcbc4a22f74cc077a6585581d","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"6f29820dcbc4a22f74cc077a6585581d","url":"404.html"},{"revision":"6f29820dcbc4a22f74cc077a6585581d","url":"200.html"},{"revision":"aa24647b96f02d6d689599e6799034a4","url":"sugestoes/nomes.json"},{"revision":"6b4378a87f4f16455b0a5f222b23f76f","url":"sobre/index.html"},{"revision":"0ef2af0f29045c44a7c399fd2d4a7cce","url":"settings/index.html"},{"revision":"0ef2af0f29045c44a7c399fd2d4a7cce","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"0ef2af0f29045c44a7c399fd2d4a7cce","url":"relatorio/index.html"},{"revision":"0ef2af0f29045c44a7c399fd2d4a7cce","url":"records/index.html"},{"revision":"0ef2af0f29045c44a7c399fd2d4a7cce","url":"recentes/index.html"},{"revision":"6b4378a87f4f16455b0a5f222b23f76f","url":"perfil/index.html"},{"revision":"6b4378a87f4f16455b0a5f222b23f76f","url":"pages/index.html"},{"revision":"0ef2af0f29045c44a7c399fd2d4a7cce","url":"navegar/index.html"},{"revision":"49dee058a4b910e246c260df29da367e","url":"login/index.html"},{"revision":"7c418f1d69ca1613ba954b34d59e0f80","url":"lista/index.html"},{"revision":"7c418f1d69ca1613ba954b34d59e0f80","url":"lista/edit/index.html"},{"revision":"6f29820dcbc4a22f74cc077a6585581d","url":"lista/calendar-print/index.html"},{"revision":"7c418f1d69ca1613ba954b34d59e0f80","url":"lista/calendar/index.html"},{"revision":"49dee058a4b910e246c260df29da367e","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"dbb3e8573b59e2c645501148585fe8bd","url":"js/sw/firebase.js"},{"revision":"5f743225aa84711433cdd3880dbf51d4","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"2808538d6ebb922a6fff3e7e8c357541","url":"js/sw/vendor/dexie.js"},{"revision":"c2eba1515364b627c4f3d5eb6a4bee5b","url":"js/sw/vendor/workbox/workbox-sw.js"},{"revision":"d72bef0e706a8b25012dfa8aa1e4dfff","url":"js/sw/vendor/workbox/workbox-strategies.prod.js"},{"revision":"90d3aeeedbf6f25853c480d92bc51839","url":"js/sw/vendor/workbox/workbox-routing.prod.js"},{"revision":"24c50c33b7c66d7152d4ebae0ac8bd31","url":"js/sw/vendor/workbox/workbox-precaching.prod.js"},{"revision":"2c14e6d1a14b7b1db30586e38ff7a7ae","url":"js/sw/vendor/workbox/workbox-navigation-preload.prod.js"},{"revision":"0e7ae639b709c2e7c22abb64c359f85c","url":"js/sw/vendor/workbox/workbox-expiration.prod.js"},{"revision":"7d66f77f1d0ff9348205a245c75cc6e3","url":"js/sw/vendor/workbox/workbox-core.prod.js"},{"revision":"c1164a2c6ee0dbe4099f435a008a7d00","url":"js/sw/vendor/workbox/workbox-cacheable-response.prod.js"},{"revision":"e640131b6725841102014e560e21d647","url":"js/sw/vendor/firebase/firebase-messaging-compat.js"},{"revision":"c9a629d733922bfe5a271fb7442e7d2d","url":"js/sw/vendor/firebase/firebase-app-compat.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"7c418f1d69ca1613ba954b34d59e0f80","url":"hinos/index.html"},{"revision":"0ef2af0f29045c44a7c399fd2d4a7cce","url":"forms/view/index.html"},{"revision":"7c418f1d69ca1613ba954b34d59e0f80","url":"forms/manutencao/index.html"},{"revision":"6f29820dcbc4a22f74cc077a6585581d","url":"forms/levantamento_preventiva/index.html"},{"revision":"7c418f1d69ca1613ba954b34d59e0f80","url":"forms/contato/index.html"},{"revision":"7c418f1d69ca1613ba954b34d59e0f80","url":"forgot-password/index.html"},{"revision":"6b4378a87f4f16455b0a5f222b23f76f","url":"eventos/index.html"},{"revision":"7c418f1d69ca1613ba954b34d59e0f80","url":"evento/index.html"},{"revision":"7c418f1d69ca1613ba954b34d59e0f80","url":"evento/solicitar/index.html"},{"revision":"5cafd7bb752521a507d7c87141a2900f","url":"data/tags.json"},{"revision":"6b714752ddf9accc46258f481d2eb107","url":"data/tags-circulares.json"},{"revision":"0c67f062d6c248fbad406549c816ea19","url":"data/relatorio.json"},{"revision":"416ef7202529463a618e35c6f3d32152","url":"data/ministerio.json"},{"revision":"e53cbcb9dee19ec010f47b53b3a2f895","url":"data/metadata.json"},{"revision":"ded6c47602b6082e50072328311b66a2","url":"data/data.json"},{"revision":"6b4378a87f4f16455b0a5f222b23f76f","url":"agenda/index.html"},{"revision":"f45e0b923b63b4d4a0b839fa5420e38a","url":"_nuxt/yGhROsRW.js"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"9e8bf1c800df2f4aff584705fea7d6c9","url":"_nuxt/vbYKu7d5.js"},{"revision":"2c881657a14ac12f61384cd561891975","url":"_nuxt/uyMG61dg.js"},{"revision":"369a13493f795cdc835586b01d582a1f","url":"_nuxt/useHolidays.CKDun-Df.css"},{"revision":"bbec79e5583859b9655e6bd76426722c","url":"_nuxt/sugestoes.worker-CFb5SVC2.js"},{"revision":"11a7fbf8ad9d0a846c012e7c937cc7e9","url":"_nuxt/solicitar._ehbK0Xg.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"1241bb1feb900287ccb14310328a22c3","url":"_nuxt/settings.BXvx61R5.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"95df1e3ed7bb77f9b82ee5ef2ec3a945","url":"_nuxt/recentes.Boz8l2j6.css"},{"revision":"67daf6e52b976b9196fb85b345b1edd4","url":"_nuxt/quqxYEAq.js"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"aa61533f2a29387ba2341e2cba4b3ae4","url":"_nuxt/navegar.CcnZmLym.css"},{"revision":"38b7f0b38a102e1b524086132952642c","url":"_nuxt/menu.B8Zv1MPp.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"734c203cac14d751a51c9ad77167581f","url":"_nuxt/liSDAnL4.js"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"204084e7b984661515b518d057b62b07","url":"_nuxt/kBup8dWh.js"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"612ef4e07d3d55ddc82a28d2e62e105b","url":"_nuxt/index.BsKMkQK8.css"},{"revision":"07b76dbe7cb25381c5a6c0cbad4fdabe","url":"_nuxt/index.Bp-q4RrK.css"},{"revision":"6439205a3ce8b09f1bb28d5a5983c041","url":"_nuxt/index.B9CTi-v0.css"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"8f406b0d9b3ba6d6653d9c280541c8d6","url":"_nuxt/eventos.CJgOpicB.css"},{"revision":"bd536206a12a7fcfede62f2aa672c089","url":"_nuxt/entry.CaC3cSUp.css"},{"revision":"3ea575dcfd14d89d01a2f70d98699e94","url":"_nuxt/e3n7oh83.js"},{"revision":"e547ff147bc2add4928200c7a51ff91c","url":"_nuxt/e0dfp2gR.js"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"900ef03dde1cf8cf40b23f5cad80a360","url":"_nuxt/calendar.4YSbG8xb.css"},{"revision":"325e12c62a5a4595aff4809fe00518ae","url":"_nuxt/calendar-print.Bm9BqBkm.css"},{"revision":"0121cbf24067fbc2f023c04129e7389f","url":"_nuxt/bMkRrawU.js"},{"revision":"ccf9bcbed9933107a121b8441d8a8370","url":"_nuxt/agenda.B1qY6oE2.css"},{"revision":"1c5cef8853090d6c57f8b45eace1ac1c","url":"_nuxt/a0M0eH6k.js"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"34b2dfa403714f1d0b5fad41a2fdf99d","url":"_nuxt/DyQIisMW.js"},{"revision":"39eb9f4016917c2154b6cd08fc421940","url":"_nuxt/Dxeig5ts.js"},{"revision":"d4c984c02f37ad6ffdd15bbbd587c8da","url":"_nuxt/DqPvQ8de.js"},{"revision":"fce7b5e7d733114ccb8396444ae42436","url":"_nuxt/Dq5Jzwge.js"},{"revision":"2f08ea5ce8fce0b88a529d4f16da4498","url":"_nuxt/DopEUVEo.js"},{"revision":"6e2baf709fd5436745f1b39c07bc6754","url":"_nuxt/Dlq4tOQN.js"},{"revision":"dc49d7701eb340034cebe1c6c3832d58","url":"_nuxt/DlKYTA7I.js"},{"revision":"492c5587691640a882e778c365a173a1","url":"_nuxt/DYntp2T0.js"},{"revision":"f020a17003082f446424c72456f7090e","url":"_nuxt/DPiAu4u6.js"},{"revision":"0ebe5734b0910f80d42e0f4aea4e9ce3","url":"_nuxt/DJCEV5Vw.js"},{"revision":"cdd9cad0245b79d6f3875c655b4431b1","url":"_nuxt/D0zFmwdy.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"ef644a09f674bb397ba90a33b2cdae9b","url":"_nuxt/ClGRG6BQ.js"},{"revision":"63af05fbfd12369736a43931ae702ee0","url":"_nuxt/CjIfeL_m.js"},{"revision":"7cce8022e8d5ab7114e044defad97b71","url":"_nuxt/CdJCAakl.js"},{"revision":"175a91b997961c78c7725f2a71e3c2fa","url":"_nuxt/CbmQEjVN.js"},{"revision":"55e99cbfab248c69ca7806224095213e","url":"_nuxt/CWIZmxi0.js"},{"revision":"ec4c7670a49a4a47a498fa370650a79b","url":"_nuxt/CVfAGhrK.js"},{"revision":"9ad6a5eb839c12eaad07b6f2c58487a5","url":"_nuxt/CR3Yk3Vh.js"},{"revision":"a15143fae8c3de1dd6d96a23acc0e884","url":"_nuxt/CO377DVX.js"},{"revision":"e04e99780dd5fcb1282be696effbd528","url":"_nuxt/CMSx19LV.js"},{"revision":"5758875c76141a06e15c79c70b133894","url":"_nuxt/CDpuuysW.js"},{"revision":"043815dd02af5e998eb2afe13cfd36e0","url":"_nuxt/C4vH0HqP.js"},{"revision":"6e4326f87b53aeb6f77264ffb1aea022","url":"_nuxt/C0Mr9xdo.js"},{"revision":"046b0284d4ff84d5ef0f855db873bca8","url":"_nuxt/BwdZXzkB.js"},{"revision":"816991d3b1b99f9c6c9f6f60d7c0b5da","url":"_nuxt/Bw3ZpHWF.js"},{"revision":"e3046131592db9b875176343910920c1","url":"_nuxt/BvO3Y9fL.js"},{"revision":"ba15522c1b006cdbfbbee03bcc15974b","url":"_nuxt/BpE9GubM.js"},{"revision":"6d2883b8f2201b8f41368da0c5adfbc7","url":"_nuxt/BXwVG2ky.js"},{"revision":"10269eaea3a72e90bd3fc7df87bc3633","url":"_nuxt/BT864K7Z.js"},{"revision":"8955ca06ce0611864cb195c80c38e66d","url":"_nuxt/BT58VfWl.js"},{"revision":"292bdb8af5de911f3f584385a30ba04d","url":"_nuxt/B9jTPu2p.js"},{"revision":"6475220faab43fe666172126c29c023c","url":"_nuxt/B7XwqagF.js"},{"revision":"b34b5174ac039d33515d2b8c37fd909d","url":"_nuxt/B1e0Cf4i.js"},{"revision":"e232fc1c2de0ecdcac093c69fe24a778","url":"_nuxt/B-lQUdOS.js"},{"revision":"5a93e748433677c7eb02f8becc7f4588","url":"_nuxt/842ONEQ6.js"},{"revision":"98e364c6c441ab8195cfdfd902466883","url":"_nuxt/2PaAaP-V.js"},{"revision":"413f52359d53cef54399b3692f6de1e7","url":"_nuxt/-9JZBWMy.js"},{"revision":"75a73144960853a4a02e7f9cd226b668","url":"_nuxt/builds/latest.json"},{"revision":"f9d74c86a5679260b322f71af1228077","url":"_nuxt/builds/meta/9252ad62-f0b9-4ecf-abf5-d5fad2ecb6a2.json"},{"revision":"49dee058a4b910e246c260df29da367e","url":"500/index.html"},{"revision":"49dee058a4b910e246c260df29da367e","url":"404/index.html"},{"revision":"bb6a39a253d5a6a4ba079c10b573b930","url":"200/index.html"}] || []);
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
