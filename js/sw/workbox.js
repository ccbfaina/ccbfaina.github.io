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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"3346238408ba6330b71ff7bb469877cf","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"3346238408ba6330b71ff7bb469877cf","url":"404.html"},{"revision":"3346238408ba6330b71ff7bb469877cf","url":"200.html"},{"revision":"aa24647b96f02d6d689599e6799034a4","url":"sugestoes/nomes.json"},{"revision":"4a4d6d4708cfdfaa80e9619cb8ef9057","url":"sobre/index.html"},{"revision":"0c7e55df9cf9ef44cacf070a0d5ca64f","url":"settings/index.html"},{"revision":"0c7e55df9cf9ef44cacf070a0d5ca64f","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"0c7e55df9cf9ef44cacf070a0d5ca64f","url":"relatorio/index.html"},{"revision":"0c7e55df9cf9ef44cacf070a0d5ca64f","url":"records/index.html"},{"revision":"0c7e55df9cf9ef44cacf070a0d5ca64f","url":"recentes/index.html"},{"revision":"4a4d6d4708cfdfaa80e9619cb8ef9057","url":"perfil/index.html"},{"revision":"4a4d6d4708cfdfaa80e9619cb8ef9057","url":"pages/index.html"},{"revision":"0c7e55df9cf9ef44cacf070a0d5ca64f","url":"navegar/index.html"},{"revision":"4a4d6d4708cfdfaa80e9619cb8ef9057","url":"login/index.html"},{"revision":"68790979ced214693f2e0d1360fad450","url":"lista/index.html"},{"revision":"68790979ced214693f2e0d1360fad450","url":"lista/edit/index.html"},{"revision":"3346238408ba6330b71ff7bb469877cf","url":"lista/calendar-print/index.html"},{"revision":"68790979ced214693f2e0d1360fad450","url":"lista/calendar/index.html"},{"revision":"4a4d6d4708cfdfaa80e9619cb8ef9057","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"dbb3e8573b59e2c645501148585fe8bd","url":"js/sw/firebase.js"},{"revision":"2cc32c31d1de207c4268a72a2198311e","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"2808538d6ebb922a6fff3e7e8c357541","url":"js/sw/vendor/dexie.js"},{"revision":"c2eba1515364b627c4f3d5eb6a4bee5b","url":"js/sw/vendor/workbox/workbox-sw.js"},{"revision":"d72bef0e706a8b25012dfa8aa1e4dfff","url":"js/sw/vendor/workbox/workbox-strategies.prod.js"},{"revision":"90d3aeeedbf6f25853c480d92bc51839","url":"js/sw/vendor/workbox/workbox-routing.prod.js"},{"revision":"24c50c33b7c66d7152d4ebae0ac8bd31","url":"js/sw/vendor/workbox/workbox-precaching.prod.js"},{"revision":"2c14e6d1a14b7b1db30586e38ff7a7ae","url":"js/sw/vendor/workbox/workbox-navigation-preload.prod.js"},{"revision":"0e7ae639b709c2e7c22abb64c359f85c","url":"js/sw/vendor/workbox/workbox-expiration.prod.js"},{"revision":"7d66f77f1d0ff9348205a245c75cc6e3","url":"js/sw/vendor/workbox/workbox-core.prod.js"},{"revision":"c1164a2c6ee0dbe4099f435a008a7d00","url":"js/sw/vendor/workbox/workbox-cacheable-response.prod.js"},{"revision":"e640131b6725841102014e560e21d647","url":"js/sw/vendor/firebase/firebase-messaging-compat.js"},{"revision":"c9a629d733922bfe5a271fb7442e7d2d","url":"js/sw/vendor/firebase/firebase-app-compat.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"68790979ced214693f2e0d1360fad450","url":"hinos/index.html"},{"revision":"68790979ced214693f2e0d1360fad450","url":"forms/view/index.html"},{"revision":"3346238408ba6330b71ff7bb469877cf","url":"forms/manutencao/index.html"},{"revision":"3346238408ba6330b71ff7bb469877cf","url":"forms/levantamento_preventiva/index.html"},{"revision":"68790979ced214693f2e0d1360fad450","url":"forms/contato/index.html"},{"revision":"68790979ced214693f2e0d1360fad450","url":"forgot-password/index.html"},{"revision":"0c7e55df9cf9ef44cacf070a0d5ca64f","url":"eventos/index.html"},{"revision":"68790979ced214693f2e0d1360fad450","url":"evento/index.html"},{"revision":"68790979ced214693f2e0d1360fad450","url":"evento/solicitar/index.html"},{"revision":"5cafd7bb752521a507d7c87141a2900f","url":"data/tags.json"},{"revision":"6b714752ddf9accc46258f481d2eb107","url":"data/tags-circulares.json"},{"revision":"0c67f062d6c248fbad406549c816ea19","url":"data/relatorio.json"},{"revision":"416ef7202529463a618e35c6f3d32152","url":"data/ministerio.json"},{"revision":"196008493bb75371cbea968b2332aa9a","url":"data/metadata.json"},{"revision":"d15b4a22b3cb4b091954c2788282c3f1","url":"data/data.json"},{"revision":"4a4d6d4708cfdfaa80e9619cb8ef9057","url":"agenda/index.html"},{"revision":"52f9fcf6c70c1accfc3adb8c0d15a7ae","url":"_nuxt/y3yyG8qt.js"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"369a13493f795cdc835586b01d582a1f","url":"_nuxt/useHolidays.CKDun-Df.css"},{"revision":"a869bc6713f84aaa1be01e18d5a537cf","url":"_nuxt/tKPu8b2m.js"},{"revision":"bbec79e5583859b9655e6bd76426722c","url":"_nuxt/sugestoes.worker-CFb5SVC2.js"},{"revision":"11a7fbf8ad9d0a846c012e7c937cc7e9","url":"_nuxt/solicitar._ehbK0Xg.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"1241bb1feb900287ccb14310328a22c3","url":"_nuxt/settings.BXvx61R5.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"95df1e3ed7bb77f9b82ee5ef2ec3a945","url":"_nuxt/recentes.Boz8l2j6.css"},{"revision":"487e8c9ac37e795def0471af2b9dbc2d","url":"_nuxt/q02qTZz9.js"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"aa61533f2a29387ba2341e2cba4b3ae4","url":"_nuxt/navegar.CcnZmLym.css"},{"revision":"38b7f0b38a102e1b524086132952642c","url":"_nuxt/menu.B8Zv1MPp.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"e748c49f086e13cb8d2e32d9212337ce","url":"_nuxt/kHBTFLfi.js"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"612ef4e07d3d55ddc82a28d2e62e105b","url":"_nuxt/index.BsKMkQK8.css"},{"revision":"07b76dbe7cb25381c5a6c0cbad4fdabe","url":"_nuxt/index.Bp-q4RrK.css"},{"revision":"b213e86de89b4d60992ddaa12d99aadd","url":"_nuxt/index.BVnlTXVf.css"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"daef84bed5eab504ecd36ad1937393f7","url":"_nuxt/eventos.DJQJd56G.css"},{"revision":"6f67855fb368952de8ea6e8b478d9a0d","url":"_nuxt/entry.DSH3FrNR.css"},{"revision":"3ea575dcfd14d89d01a2f70d98699e94","url":"_nuxt/e3n7oh83.js"},{"revision":"e47b306aaa3f31c5f43ea88a631690df","url":"_nuxt/dmkdlztc.js"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"900ef03dde1cf8cf40b23f5cad80a360","url":"_nuxt/calendar.4YSbG8xb.css"},{"revision":"325e12c62a5a4595aff4809fe00518ae","url":"_nuxt/calendar-print.Bm9BqBkm.css"},{"revision":"a23290058c789b908cd29e28493a2627","url":"_nuxt/ampla.BdiKVozZ.css"},{"revision":"d81b9acdd06e3b4f2630697955077ea8","url":"_nuxt/agenda.BuOyYIVx.css"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"bb6b91ecd6e2ee7922d8b7a76b5ecca3","url":"_nuxt/_32Zkpee.js"},{"revision":"f59d772a63ae357e7eff082d8cb2a179","url":"_nuxt/OTmBwZdo.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"c5d85fb3f53343c4030a61639af5ebd1","url":"_nuxt/DtDg_BIp.js"},{"revision":"8e3f1227fcc4d1c5765352fe6f88feeb","url":"_nuxt/DsKDaqdA.js"},{"revision":"c69eacee36f47093aae115aee658e231","url":"_nuxt/DqsHYdgI.js"},{"revision":"6e2baf709fd5436745f1b39c07bc6754","url":"_nuxt/Dlq4tOQN.js"},{"revision":"b8d794f2544f3128e13a6b5da9033638","url":"_nuxt/DecOHyJR.js"},{"revision":"e7d61a72a6daf3610371624f92a868d9","url":"_nuxt/DaPtNtaV.js"},{"revision":"c970c94519ed8ecffe6eb48ebbae8689","url":"_nuxt/DZ_3YXXf.js"},{"revision":"264d8838bcff0638b70955bf0d4a4d9f","url":"_nuxt/DAh5Nw83.js"},{"revision":"ba51691007c1534e7ff504371cc7abb2","url":"_nuxt/D7nWPn90.js"},{"revision":"1a1a28505b9fbe8c96735cb2df09b0cd","url":"_nuxt/D3f20msP.js"},{"revision":"86c163b3770f24f1252a77cf5ec6bf69","url":"_nuxt/D24DBS48.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"a05ea34328ff12f66cc54281b865ab6a","url":"_nuxt/D-8LaTT_.js"},{"revision":"89d59d17eb9e994902dd8d0c2006d0f2","url":"_nuxt/CjbcJbS6.js"},{"revision":"f682a9ba588e7a8e4b2adbb5708a26b4","url":"_nuxt/CeyDLNF0.js"},{"revision":"76680d35baf2b7e5e346eef3b9146713","url":"_nuxt/CdlYQ2wO.js"},{"revision":"ca5936ff988735c838895932d8515681","url":"_nuxt/Cdbx52gM.js"},{"revision":"115dbb8ae9aa84f73dee90ca673e0cfa","url":"_nuxt/CcpSr2G3.js"},{"revision":"f56ea7167cad4b8729340eb54775420a","url":"_nuxt/Cbj9q8B-.js"},{"revision":"1d23169272c5e0e3352a43e37331da4f","url":"_nuxt/CZxqUlZI.js"},{"revision":"0aecd720e64d9df26bb7dcacb013d7a3","url":"_nuxt/CW9ezuGp.js"},{"revision":"3ec5ad6544ddec71d694f86f7cc61fa7","url":"_nuxt/CVl73LfP.js"},{"revision":"30b40ac4fccd4e24a7e52e55235c40d2","url":"_nuxt/CRzv41N0.js"},{"revision":"81484214e44d44daf4d2e150f86157be","url":"_nuxt/CMeRhujB.js"},{"revision":"4bade4392dd3d2d7d901ded4cdc6c4b8","url":"_nuxt/C1k0fpFy.js"},{"revision":"728b3d4ed0937df3bfc83463f961f973","url":"_nuxt/C1e5WopK.js"},{"revision":"9775cfe9b477cde548d776e313c012af","url":"_nuxt/ByGJQcke.js"},{"revision":"9c8f19c6b57deff92ebfb6ca649fb790","url":"_nuxt/BwhGeVPp.js"},{"revision":"79e57bed49a827c9c2f226a8cd7cc972","url":"_nuxt/BvU83enl.js"},{"revision":"1ee12c6175aeb49c1f9b277c20fa24b7","url":"_nuxt/BlTTLWrR.js"},{"revision":"fa6630f4610bd998a9751abcd92db6ed","url":"_nuxt/BjphyAX0.js"},{"revision":"56cdfd0f2a9d28282ca96fb812bdd635","url":"_nuxt/Bd_mMRx0.js"},{"revision":"3e607fb9a918c10d9f47156c7af29966","url":"_nuxt/Bc5UR8oz.js"},{"revision":"bb42f12bf1c812b4faffdd48fae10ff8","url":"_nuxt/B_SUN0V3.js"},{"revision":"faddcd94794272509ee8caf92eddf723","url":"_nuxt/BWt3bqBA.js"},{"revision":"7e64a13282e27981b307c9c1e664eb06","url":"_nuxt/BDRE7mtf.js"},{"revision":"83e2b28f6c740d8cb3ba713f16a6065f","url":"_nuxt/B2aMRDpi.js"},{"revision":"762898208462bc2bc8dd23a7f1b697cd","url":"_nuxt/7Y2RdcNa.js"},{"revision":"a507501d1335aaa039ebbf0a914dd2d5","url":"_nuxt/-iCV9c-X.js"},{"revision":"2ea78838bf2091b350bd7c1e9680aa66","url":"_nuxt/-fX9h3bk.js"},{"revision":"6274b45f534c339d31c6ec849b2329b1","url":"_nuxt/-AoEmTUy.js"},{"revision":"41745f06e212291ff64eb638de4ead56","url":"_nuxt/builds/latest.json"},{"revision":"46b42f51093ddaab319024df717b0047","url":"_nuxt/builds/meta/7b19d2fe-2871-4f41-8f8e-5e0286e1fc96.json"},{"revision":"d7873bf514c1e93090917dc18c03e336","url":"500/index.html"},{"revision":"d7873bf514c1e93090917dc18c03e336","url":"404/index.html"},{"revision":"bb9b1eb96828cc8e9f4e28d05e293bf1","url":"200/index.html"}] || []);
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
