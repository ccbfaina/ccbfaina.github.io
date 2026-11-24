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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"39d8717894a74df735ad70c07786b6d3","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"39d8717894a74df735ad70c07786b6d3","url":"404.html"},{"revision":"39d8717894a74df735ad70c07786b6d3","url":"200.html"},{"revision":"9fa2d95d1cdb4fe8b1ef7072d62e5dd0","url":"sobre/index.html"},{"revision":"7a65a52518f2c3410b5b550ef8125a45","url":"settings/index.html"},{"revision":"7a65a52518f2c3410b5b550ef8125a45","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"7a65a52518f2c3410b5b550ef8125a45","url":"relatorio/index.html"},{"revision":"7a65a52518f2c3410b5b550ef8125a45","url":"records/index.html"},{"revision":"7a65a52518f2c3410b5b550ef8125a45","url":"recentes/index.html"},{"revision":"9fa2d95d1cdb4fe8b1ef7072d62e5dd0","url":"perfil/index.html"},{"revision":"9fa2d95d1cdb4fe8b1ef7072d62e5dd0","url":"pages/index.html"},{"revision":"9fa2d95d1cdb4fe8b1ef7072d62e5dd0","url":"navegar/index.html"},{"revision":"b9e8f0d2993ba64e94f60005ebeb2a10","url":"login/index.html"},{"revision":"65143ac14e973b5faa51e555e78ac4a0","url":"lista/index.html"},{"revision":"7a65a52518f2c3410b5b550ef8125a45","url":"lista/edit/index.html"},{"revision":"65143ac14e973b5faa51e555e78ac4a0","url":"lista/calendar-print/index.html"},{"revision":"65143ac14e973b5faa51e555e78ac4a0","url":"lista/calendar/index.html"},{"revision":"b9e8f0d2993ba64e94f60005ebeb2a10","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"dbb3e8573b59e2c645501148585fe8bd","url":"js/sw/firebase.js"},{"revision":"5f743225aa84711433cdd3880dbf51d4","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"2808538d6ebb922a6fff3e7e8c357541","url":"js/sw/vendor/dexie.js"},{"revision":"c2eba1515364b627c4f3d5eb6a4bee5b","url":"js/sw/vendor/workbox/workbox-sw.js"},{"revision":"d72bef0e706a8b25012dfa8aa1e4dfff","url":"js/sw/vendor/workbox/workbox-strategies.prod.js"},{"revision":"90d3aeeedbf6f25853c480d92bc51839","url":"js/sw/vendor/workbox/workbox-routing.prod.js"},{"revision":"24c50c33b7c66d7152d4ebae0ac8bd31","url":"js/sw/vendor/workbox/workbox-precaching.prod.js"},{"revision":"2c14e6d1a14b7b1db30586e38ff7a7ae","url":"js/sw/vendor/workbox/workbox-navigation-preload.prod.js"},{"revision":"0e7ae639b709c2e7c22abb64c359f85c","url":"js/sw/vendor/workbox/workbox-expiration.prod.js"},{"revision":"7d66f77f1d0ff9348205a245c75cc6e3","url":"js/sw/vendor/workbox/workbox-core.prod.js"},{"revision":"c1164a2c6ee0dbe4099f435a008a7d00","url":"js/sw/vendor/workbox/workbox-cacheable-response.prod.js"},{"revision":"e640131b6725841102014e560e21d647","url":"js/sw/vendor/firebase/firebase-messaging-compat.js"},{"revision":"c9a629d733922bfe5a271fb7442e7d2d","url":"js/sw/vendor/firebase/firebase-app-compat.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"65143ac14e973b5faa51e555e78ac4a0","url":"hinos/index.html"},{"revision":"7a65a52518f2c3410b5b550ef8125a45","url":"forms/view/index.html"},{"revision":"65143ac14e973b5faa51e555e78ac4a0","url":"forms/manutencao/index.html"},{"revision":"65143ac14e973b5faa51e555e78ac4a0","url":"forms/levantamento_preventiva/index.html"},{"revision":"65143ac14e973b5faa51e555e78ac4a0","url":"forms/contato/index.html"},{"revision":"65143ac14e973b5faa51e555e78ac4a0","url":"forgot-password/index.html"},{"revision":"9fa2d95d1cdb4fe8b1ef7072d62e5dd0","url":"eventos/index.html"},{"revision":"65143ac14e973b5faa51e555e78ac4a0","url":"evento/index.html"},{"revision":"65143ac14e973b5faa51e555e78ac4a0","url":"evento/solicitar/index.html"},{"revision":"9fa2d95d1cdb4fe8b1ef7072d62e5dd0","url":"agenda/index.html"},{"revision":"56bae43761ccde931c9a31b5e2d6cfb2","url":"_nuxt/xQqabgvK.js"},{"revision":"0028383165af0a92c7704dfe3b4ab4da","url":"_nuxt/wx6CdQp3.js"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"3d9aad04796ee8f3d3e3c63d41ed354f","url":"_nuxt/useHolidays.Cnq2fMW2.css"},{"revision":"573ce350dd300dbc576437d69453e04f","url":"_nuxt/uIJbH6WF.js"},{"revision":"09ce9f1ab63cfce0beb1122addc830f8","url":"_nuxt/uGYbhw5E.js"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"1241bb1feb900287ccb14310328a22c3","url":"_nuxt/settings.BXvx61R5.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"95df1e3ed7bb77f9b82ee5ef2ec3a945","url":"_nuxt/recentes.Boz8l2j6.css"},{"revision":"94eb86c82655af43d785f829ff31f2ac","url":"_nuxt/q12qcHjX.js"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"ff7b7b669146f069c4f4e8aa01b28fca","url":"_nuxt/oxdPr8cu.js"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"aa61533f2a29387ba2341e2cba4b3ae4","url":"_nuxt/navegar.CcnZmLym.css"},{"revision":"38b7f0b38a102e1b524086132952642c","url":"_nuxt/menu.B8Zv1MPp.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"2a0e41f635cc3844a8c2830826ae3beb","url":"_nuxt/index.xA83gVRs.css"},{"revision":"20044ccd19f6775d1639e26df4052677","url":"_nuxt/index.DKEm0VN6.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"51d941c6cd52e3a056237c25060d5734","url":"_nuxt/index.Bir61zYh.css"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"a2d5898b76b8daf3e03cf92c7062d4e1","url":"_nuxt/eventos.DSkMyjd6.css"},{"revision":"3a1cea3743d4b7eb96f697e56a56c44f","url":"_nuxt/entry.DuAPpwJ6.css"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"900ef03dde1cf8cf40b23f5cad80a360","url":"_nuxt/calendar.4YSbG8xb.css"},{"revision":"325e12c62a5a4595aff4809fe00518ae","url":"_nuxt/calendar-print.Bm9BqBkm.css"},{"revision":"ff0d4baffa763bc56eb1ae88fe56c538","url":"_nuxt/c7mG2Opm.js"},{"revision":"67db0104022083d44edfe707664adee2","url":"_nuxt/b_DyJTRe.js"},{"revision":"ccf9bcbed9933107a121b8441d8a8370","url":"_nuxt/agenda.B1qY6oE2.css"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"3d891a29538c1fab8b96a12b4d2face9","url":"_nuxt/MMuQMb32.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"6e2baf709fd5436745f1b39c07bc6754","url":"_nuxt/Dlq4tOQN.js"},{"revision":"beb61a823cd4208426d9c92cff59cfdc","url":"_nuxt/DfkLopf5.js"},{"revision":"23c7f80ba5db0836082cb1e38f01af0d","url":"_nuxt/DfBp0_qt.js"},{"revision":"ea710922e5749ea0ac723193a917c2ef","url":"_nuxt/DVLEOdAU.js"},{"revision":"213e319a63f5f50ba7c3b3caa66b186e","url":"_nuxt/DObUcQj8.js"},{"revision":"0ae0e3267c6a19e11c6f1bea23d7c994","url":"_nuxt/DNtbmTBH.js"},{"revision":"0b4ecb787b3592c7e720e5513aa0489c","url":"_nuxt/DE6FSY0K.js"},{"revision":"4b5d0677d04ab82dabac8af4b085494a","url":"_nuxt/D2ZidKsw.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"ce5b9b1219cbb898b0f4f7256dc59e8f","url":"_nuxt/ClEyVfkr.js"},{"revision":"fabf5d7faeac29ade92ae5463cca1a05","url":"_nuxt/CkvZdPXn.js"},{"revision":"f0541686b0bb611831afa2a9e1dfbe26","url":"_nuxt/CiJnnjPp.js"},{"revision":"3ee780c284e249cdc5ffc50197994a25","url":"_nuxt/CU-d6aGO.js"},{"revision":"0f6180d8496be0e177d99e2be71d42b7","url":"_nuxt/CSfhTcnk.js"},{"revision":"32f6c5ab626e529ced6167e8d1635e2e","url":"_nuxt/CRcIdMmY.js"},{"revision":"5a6a3d551a22ecd76e70fc303741f0fb","url":"_nuxt/CJxzSydD.js"},{"revision":"c37b6f3f63b894d321c81c7e0a3f403e","url":"_nuxt/CFRYj9ot.js"},{"revision":"e35bb854d2d882e7a475e54b4416d26e","url":"_nuxt/C8rRGSQi.js"},{"revision":"29251b7cf4b1dc88b736ff072e2c9a9c","url":"_nuxt/C7XzBOKe.js"},{"revision":"3b15a8cb150f6bff259ee245752daee3","url":"_nuxt/C6lZXNdx.js"},{"revision":"4ab530e2933e9c8b504cfcfac2897315","url":"_nuxt/C2rPTlNi.js"},{"revision":"c681946eec7a214f72bc8a7ea64aad9c","url":"_nuxt/C2YvS9sh.js"},{"revision":"2be103a138cc135e970339fd8f0df2a4","url":"_nuxt/C14MadvA.js"},{"revision":"a03d4ab24b6cb5032669aee65965a271","url":"_nuxt/C-5F15qn.js"},{"revision":"265373aad84da49f523c3c17934fb321","url":"_nuxt/BzrkKt2r.js"},{"revision":"ec46dacd402a2fe6174643a098888ef8","url":"_nuxt/BsxE3XKZ.js"},{"revision":"46431e86c50a3dfcdf2e80fd17758f13","url":"_nuxt/BrECqGgD.js"},{"revision":"a888cb96125c1fd1494da28f3a77ea3c","url":"_nuxt/Bn-xENp8.js"},{"revision":"7d0a56f1c6b5cbcfc2534adc85c8886c","url":"_nuxt/BhLyinum.js"},{"revision":"a2a633b447fb9a2f8104bf7c03eeac9a","url":"_nuxt/BgZtRfiW.js"},{"revision":"4852020fd42f1a73e295b9e3f81ebb3d","url":"_nuxt/BOIriPDC.js"},{"revision":"c97f38889be05273ff010de35ebe4d81","url":"_nuxt/BJM73Wj4.js"},{"revision":"bfcb23d7edb8e5330079a234d0effd96","url":"_nuxt/BAg8qwt_.js"},{"revision":"0cd5a5d54e1debb0f89ad679d8a3b212","url":"_nuxt/B7U1nmyb.js"},{"revision":"1527d4e9e8718a7f131c77b625658797","url":"_nuxt/B6zLviNI.js"},{"revision":"25efa1ebd8ba5c7f8ba0334839bcf188","url":"_nuxt/B0SsOuhI.js"},{"revision":"27df5c821a4bc649b1a057b1321360b2","url":"_nuxt/B-CSZ5qb.js"},{"revision":"ccc8d37c8cfb648394d33c54fa14e1e9","url":"_nuxt/3TAgUH96.js"},{"revision":"69bc8bd3e8db5f9f8b23e4a7f579914c","url":"_nuxt/builds/latest.json"},{"revision":"5d064db588dfe2fc0adf66ae6a0a4105","url":"_nuxt/builds/meta/c6004467-b74b-4091-b9d4-5c6b37f74661.json"},{"revision":"b9e8f0d2993ba64e94f60005ebeb2a10","url":"500/index.html"},{"revision":"b9e8f0d2993ba64e94f60005ebeb2a10","url":"404/index.html"},{"revision":"e7fcf80432d5523cf94f018324510afa","url":"200/index.html"}] || []);
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
