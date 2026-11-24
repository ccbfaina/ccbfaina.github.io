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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"4e9c46f473693101850c878f90c55d9f","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"4e9c46f473693101850c878f90c55d9f","url":"404.html"},{"revision":"4e9c46f473693101850c878f90c55d9f","url":"200.html"},{"revision":"aa24647b96f02d6d689599e6799034a4","url":"sugestoes/nomes.json"},{"revision":"e90c80beb3871059ad0d2a36188d7d63","url":"sobre/index.html"},{"revision":"b1079197254b52d877b07fb7e85cc5e9","url":"settings/index.html"},{"revision":"6329ddf4700a7a2a1d44bc3783ecdcd2","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"b1079197254b52d877b07fb7e85cc5e9","url":"relatorio/index.html"},{"revision":"6329ddf4700a7a2a1d44bc3783ecdcd2","url":"records/index.html"},{"revision":"6329ddf4700a7a2a1d44bc3783ecdcd2","url":"recentes/index.html"},{"revision":"e90c80beb3871059ad0d2a36188d7d63","url":"perfil/index.html"},{"revision":"e90c80beb3871059ad0d2a36188d7d63","url":"pages/index.html"},{"revision":"6329ddf4700a7a2a1d44bc3783ecdcd2","url":"navegar/index.html"},{"revision":"e90c80beb3871059ad0d2a36188d7d63","url":"login/index.html"},{"revision":"375c0699f9e04ac5943b1bf0628c6bfc","url":"lista/index.html"},{"revision":"b1079197254b52d877b07fb7e85cc5e9","url":"lista/edit/index.html"},{"revision":"4e9c46f473693101850c878f90c55d9f","url":"lista/calendar-print/index.html"},{"revision":"375c0699f9e04ac5943b1bf0628c6bfc","url":"lista/calendar/index.html"},{"revision":"d0d267b8348d63cfd28b4d0d4992b9d0","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"dbb3e8573b59e2c645501148585fe8bd","url":"js/sw/firebase.js"},{"revision":"5f743225aa84711433cdd3880dbf51d4","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"2808538d6ebb922a6fff3e7e8c357541","url":"js/sw/vendor/dexie.js"},{"revision":"c2eba1515364b627c4f3d5eb6a4bee5b","url":"js/sw/vendor/workbox/workbox-sw.js"},{"revision":"d72bef0e706a8b25012dfa8aa1e4dfff","url":"js/sw/vendor/workbox/workbox-strategies.prod.js"},{"revision":"90d3aeeedbf6f25853c480d92bc51839","url":"js/sw/vendor/workbox/workbox-routing.prod.js"},{"revision":"24c50c33b7c66d7152d4ebae0ac8bd31","url":"js/sw/vendor/workbox/workbox-precaching.prod.js"},{"revision":"2c14e6d1a14b7b1db30586e38ff7a7ae","url":"js/sw/vendor/workbox/workbox-navigation-preload.prod.js"},{"revision":"0e7ae639b709c2e7c22abb64c359f85c","url":"js/sw/vendor/workbox/workbox-expiration.prod.js"},{"revision":"7d66f77f1d0ff9348205a245c75cc6e3","url":"js/sw/vendor/workbox/workbox-core.prod.js"},{"revision":"c1164a2c6ee0dbe4099f435a008a7d00","url":"js/sw/vendor/workbox/workbox-cacheable-response.prod.js"},{"revision":"e640131b6725841102014e560e21d647","url":"js/sw/vendor/firebase/firebase-messaging-compat.js"},{"revision":"c9a629d733922bfe5a271fb7442e7d2d","url":"js/sw/vendor/firebase/firebase-app-compat.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"b1079197254b52d877b07fb7e85cc5e9","url":"hinos/index.html"},{"revision":"b1079197254b52d877b07fb7e85cc5e9","url":"forms/view/index.html"},{"revision":"4e9c46f473693101850c878f90c55d9f","url":"forms/manutencao/index.html"},{"revision":"4e9c46f473693101850c878f90c55d9f","url":"forms/levantamento_preventiva/index.html"},{"revision":"375c0699f9e04ac5943b1bf0628c6bfc","url":"forms/contato/index.html"},{"revision":"375c0699f9e04ac5943b1bf0628c6bfc","url":"forgot-password/index.html"},{"revision":"6329ddf4700a7a2a1d44bc3783ecdcd2","url":"eventos/index.html"},{"revision":"375c0699f9e04ac5943b1bf0628c6bfc","url":"evento/index.html"},{"revision":"375c0699f9e04ac5943b1bf0628c6bfc","url":"evento/solicitar/index.html"},{"revision":"e90c80beb3871059ad0d2a36188d7d63","url":"agenda/index.html"},{"revision":"b5985ca207938e5bb00ea73f4b6c29a8","url":"_nuxt/whA1iPlw.js"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"3d9aad04796ee8f3d3e3c63d41ed354f","url":"_nuxt/useHolidays.Cnq2fMW2.css"},{"revision":"bbec79e5583859b9655e6bd76426722c","url":"_nuxt/sugestoes.worker-CFb5SVC2.js"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"1241bb1feb900287ccb14310328a22c3","url":"_nuxt/settings.BXvx61R5.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"95df1e3ed7bb77f9b82ee5ef2ec3a945","url":"_nuxt/recentes.Boz8l2j6.css"},{"revision":"4c0cd2800b7fa4289da1109e5a56bee4","url":"_nuxt/pg9NNEB8.js"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"aa61533f2a29387ba2341e2cba4b3ae4","url":"_nuxt/navegar.CcnZmLym.css"},{"revision":"38b7f0b38a102e1b524086132952642c","url":"_nuxt/menu.B8Zv1MPp.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"f20dafb63b37b214aa3aa4cac7e7c462","url":"_nuxt/itdPFAD3.js"},{"revision":"2a0e41f635cc3844a8c2830826ae3beb","url":"_nuxt/index.xA83gVRs.css"},{"revision":"20044ccd19f6775d1639e26df4052677","url":"_nuxt/index.DKEm0VN6.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"51d941c6cd52e3a056237c25060d5734","url":"_nuxt/index.Bir61zYh.css"},{"revision":"53602fb455cd96535534eed24e2cc595","url":"_nuxt/iNHiQfdt.js"},{"revision":"71a9177943c97bbaa291aeebe7294864","url":"_nuxt/g-XeVRzv.js"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"5feca39a2cb78880acc4aee12c93dade","url":"_nuxt/eventos.BoYXlox9.css"},{"revision":"3a1cea3743d4b7eb96f697e56a56c44f","url":"_nuxt/entry.DuAPpwJ6.css"},{"revision":"03ffb8a84fbdd109bb7faa78414ce284","url":"_nuxt/eO6OlD8V.js"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"db2853c8b96eec0f6283d381d57da517","url":"_nuxt/dYgPUUy6.js"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"900ef03dde1cf8cf40b23f5cad80a360","url":"_nuxt/calendar.4YSbG8xb.css"},{"revision":"325e12c62a5a4595aff4809fe00518ae","url":"_nuxt/calendar-print.Bm9BqBkm.css"},{"revision":"005719ef133ef473bdda25b9c6b3ae43","url":"_nuxt/b-9qsKfB.js"},{"revision":"ccf9bcbed9933107a121b8441d8a8370","url":"_nuxt/agenda.B1qY6oE2.css"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"8dd0b63bad0596f661fb88d2c76c3444","url":"_nuxt/UuRwLmIf.js"},{"revision":"065258d53c5dd4fec6a1c94f1428f898","url":"_nuxt/U8OqMvLV.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"d09da3fd17924cb35c1a248ffc110ba2","url":"_nuxt/FbNACBil.js"},{"revision":"84598e0557a2a2eee1dcef1bfc3830bc","url":"_nuxt/EpAvo4Mp.js"},{"revision":"ecbf533cbdfc0bc2bbdd1d0d13b38881","url":"_nuxt/DsNZQsMm.js"},{"revision":"c054dad28dacd66fb08da0a7c98f73cf","url":"_nuxt/DrkVASsI.js"},{"revision":"6e2baf709fd5436745f1b39c07bc6754","url":"_nuxt/Dlq4tOQN.js"},{"revision":"9fade869e603422e82053b3c238adb81","url":"_nuxt/DkKT_f4Y.js"},{"revision":"2241cdc0933125e5c80ed46981a37535","url":"_nuxt/DdttcBZL.js"},{"revision":"f91e3017cbe37ab7fe711d3f9e3e05dc","url":"_nuxt/DYJ4tcrb.js"},{"revision":"b2dde9f5c1c5737260e5749aa3c5cf78","url":"_nuxt/DWqYqy-Z.js"},{"revision":"350387c73bad2d3dec28942f88da44b4","url":"_nuxt/DIHl6rv7.js"},{"revision":"cb2b8c20f42a80c0e54c9d9d9f9bddf8","url":"_nuxt/D8J6B9AA.js"},{"revision":"6a3d06f48ad1329ec7262fc006c7d2f9","url":"_nuxt/D7E2lZ9u.js"},{"revision":"9a7c274935e6ed2c8795ac3ef34f37f4","url":"_nuxt/D1-TIsxT.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"a0f2d9f777e0d473f4a46d955db1e365","url":"_nuxt/D-IcwMXk.js"},{"revision":"c18351c076521080fe9ac3782d571423","url":"_nuxt/Cvz0H_3V.js"},{"revision":"6258275958c03bb618cc7b558b6e60e1","url":"_nuxt/CdGwLf90.js"},{"revision":"ce584ed24760371bad345065265d575c","url":"_nuxt/Cayn7fp1.js"},{"revision":"7bdee627514248c9a9b34241cc014965","url":"_nuxt/C_JGCAKr.js"},{"revision":"f127f74d882d140ac7ddca41015254f9","url":"_nuxt/CZz0Utr5.js"},{"revision":"7f8d765eb408501e72890827c6201ad6","url":"_nuxt/CRr-zWbc.js"},{"revision":"e0f63d604b586e51aff0c3a40c2e5250","url":"_nuxt/CRAwZypo.js"},{"revision":"3400148b655e091b661e69f573ba2c92","url":"_nuxt/CQkYhGiz.js"},{"revision":"2d4c82b284054f76dbf8c82a99a203a4","url":"_nuxt/CKi0gLXH.js"},{"revision":"f2c5f690460affbba6580a82594e5921","url":"_nuxt/C4HMBGyr.js"},{"revision":"39eb4231114a9970379d8ae8fb028d9e","url":"_nuxt/C45HKH2T.js"},{"revision":"c18c862f1fd8da864e8df1539d5bb0a4","url":"_nuxt/BywhZJkS.js"},{"revision":"3cb7f6864adf867d877eb762e0fa567b","url":"_nuxt/Bs4Zmwi-.js"},{"revision":"3e2fa5c2f6d78144c510cb2eaf02eed8","url":"_nuxt/BqrwBIEu.js"},{"revision":"434c8a5d9a98eb930d718357ae5994c3","url":"_nuxt/BnMgdNYg.js"},{"revision":"7ce1c2b400c5eaf6f18451c530eac241","url":"_nuxt/BhcEgrrd.js"},{"revision":"ce7b38057b51d5eae634374730d15995","url":"_nuxt/BLzSBXkH.js"},{"revision":"b8617682a4303139eda454084a4869c0","url":"_nuxt/BBdhP65s.js"},{"revision":"86f549ca2ac93ad7d69adbe86756fb88","url":"_nuxt/B1wTUOht.js"},{"revision":"f2813acbf6fb93586d72cdd5dab7078d","url":"_nuxt/7LrtQTfc.js"},{"revision":"9f6bdc40c6269e924cc198ac8c528c76","url":"_nuxt/3c685ZoS.js"},{"revision":"669c5f49ff30ea8b79c0a23a6ca8a4c2","url":"_nuxt/-5TRD3Qi.js"},{"revision":"e4f30af2b08e77f5e9d834a41dcc2306","url":"_nuxt/builds/latest.json"},{"revision":"215a205aa5b414aa5890ca2894c5e572","url":"_nuxt/builds/meta/4e57b107-69d6-4231-a173-11b440d10ce4.json"},{"revision":"d0d267b8348d63cfd28b4d0d4992b9d0","url":"500/index.html"},{"revision":"d0d267b8348d63cfd28b4d0d4992b9d0","url":"404/index.html"},{"revision":"77d70a51fbf66f385dd6654a154613d9","url":"200/index.html"}] || []);
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
