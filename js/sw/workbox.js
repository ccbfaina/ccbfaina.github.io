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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"02f0f4e6b8415c7dfbf251fe1b3b5c9e","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"02f0f4e6b8415c7dfbf251fe1b3b5c9e","url":"404.html"},{"revision":"02f0f4e6b8415c7dfbf251fe1b3b5c9e","url":"200.html"},{"revision":"aa24647b96f02d6d689599e6799034a4","url":"sugestoes/nomes.json"},{"revision":"eab64aff93cc2c5a023bab8ee3ba19c5","url":"sobre/index.html"},{"revision":"c951b96932bc7324ffecc7ef91a880b9","url":"settings/index.html"},{"revision":"c951b96932bc7324ffecc7ef91a880b9","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"c951b96932bc7324ffecc7ef91a880b9","url":"relatorio/index.html"},{"revision":"eab64aff93cc2c5a023bab8ee3ba19c5","url":"records/index.html"},{"revision":"c951b96932bc7324ffecc7ef91a880b9","url":"recentes/index.html"},{"revision":"eab64aff93cc2c5a023bab8ee3ba19c5","url":"perfil/index.html"},{"revision":"8d12d3ffff0d1e68d7c63290c7c4842e","url":"pages/index.html"},{"revision":"eab64aff93cc2c5a023bab8ee3ba19c5","url":"navegar/index.html"},{"revision":"8d12d3ffff0d1e68d7c63290c7c4842e","url":"login/index.html"},{"revision":"5e20056503a035f67e3f9569f8481840","url":"lista/index.html"},{"revision":"c951b96932bc7324ffecc7ef91a880b9","url":"lista/edit/index.html"},{"revision":"02f0f4e6b8415c7dfbf251fe1b3b5c9e","url":"lista/calendar-print/index.html"},{"revision":"5e20056503a035f67e3f9569f8481840","url":"lista/calendar/index.html"},{"revision":"8d12d3ffff0d1e68d7c63290c7c4842e","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"dbb3e8573b59e2c645501148585fe8bd","url":"js/sw/firebase.js"},{"revision":"5f743225aa84711433cdd3880dbf51d4","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"2808538d6ebb922a6fff3e7e8c357541","url":"js/sw/vendor/dexie.js"},{"revision":"c2eba1515364b627c4f3d5eb6a4bee5b","url":"js/sw/vendor/workbox/workbox-sw.js"},{"revision":"d72bef0e706a8b25012dfa8aa1e4dfff","url":"js/sw/vendor/workbox/workbox-strategies.prod.js"},{"revision":"90d3aeeedbf6f25853c480d92bc51839","url":"js/sw/vendor/workbox/workbox-routing.prod.js"},{"revision":"24c50c33b7c66d7152d4ebae0ac8bd31","url":"js/sw/vendor/workbox/workbox-precaching.prod.js"},{"revision":"2c14e6d1a14b7b1db30586e38ff7a7ae","url":"js/sw/vendor/workbox/workbox-navigation-preload.prod.js"},{"revision":"0e7ae639b709c2e7c22abb64c359f85c","url":"js/sw/vendor/workbox/workbox-expiration.prod.js"},{"revision":"7d66f77f1d0ff9348205a245c75cc6e3","url":"js/sw/vendor/workbox/workbox-core.prod.js"},{"revision":"c1164a2c6ee0dbe4099f435a008a7d00","url":"js/sw/vendor/workbox/workbox-cacheable-response.prod.js"},{"revision":"e640131b6725841102014e560e21d647","url":"js/sw/vendor/firebase/firebase-messaging-compat.js"},{"revision":"c9a629d733922bfe5a271fb7442e7d2d","url":"js/sw/vendor/firebase/firebase-app-compat.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"c951b96932bc7324ffecc7ef91a880b9","url":"hinos/index.html"},{"revision":"c951b96932bc7324ffecc7ef91a880b9","url":"forms/view/index.html"},{"revision":"02f0f4e6b8415c7dfbf251fe1b3b5c9e","url":"forms/manutencao/index.html"},{"revision":"02f0f4e6b8415c7dfbf251fe1b3b5c9e","url":"forms/levantamento_preventiva/index.html"},{"revision":"5e20056503a035f67e3f9569f8481840","url":"forms/contato/index.html"},{"revision":"5e20056503a035f67e3f9569f8481840","url":"forgot-password/index.html"},{"revision":"eab64aff93cc2c5a023bab8ee3ba19c5","url":"eventos/index.html"},{"revision":"5e20056503a035f67e3f9569f8481840","url":"evento/index.html"},{"revision":"5e20056503a035f67e3f9569f8481840","url":"evento/solicitar/index.html"},{"revision":"eab64aff93cc2c5a023bab8ee3ba19c5","url":"agenda/index.html"},{"revision":"b111be6a4081e5e2542f53f136861e75","url":"_nuxt/xXWviFn0.js"},{"revision":"07d27177c085d23a52636f82ed021fa6","url":"_nuxt/x0jOrQeb.js"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"369a13493f795cdc835586b01d582a1f","url":"_nuxt/useHolidays.CKDun-Df.css"},{"revision":"bbec79e5583859b9655e6bd76426722c","url":"_nuxt/sugestoes.worker-CFb5SVC2.js"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"1241bb1feb900287ccb14310328a22c3","url":"_nuxt/settings.BXvx61R5.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"95df1e3ed7bb77f9b82ee5ef2ec3a945","url":"_nuxt/recentes.Boz8l2j6.css"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"aa61533f2a29387ba2341e2cba4b3ae4","url":"_nuxt/navegar.CcnZmLym.css"},{"revision":"38b7f0b38a102e1b524086132952642c","url":"_nuxt/menu.B8Zv1MPp.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"cc8c0900b67493d3ddf840612f656ab4","url":"_nuxt/m0fJh-W8.js"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"d7e2fbdabc4ecc7af51b6d37f0f6c22c","url":"_nuxt/lHDumArF.js"},{"revision":"d4de3e3a0b06d518682f139f87cf74d4","url":"_nuxt/kfr5sQUb.js"},{"revision":"2e6c3e01edd3e6e707f76bfe1f9ca5d7","url":"_nuxt/jYdXotGv.js"},{"revision":"2a0e41f635cc3844a8c2830826ae3beb","url":"_nuxt/index.xA83gVRs.css"},{"revision":"20044ccd19f6775d1639e26df4052677","url":"_nuxt/index.DKEm0VN6.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"51d941c6cd52e3a056237c25060d5734","url":"_nuxt/index.Bir61zYh.css"},{"revision":"c811bd940375aa83272b010bbcef4b09","url":"_nuxt/hC2ZExTO.js"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"5feca39a2cb78880acc4aee12c93dade","url":"_nuxt/eventos.BoYXlox9.css"},{"revision":"3a1cea3743d4b7eb96f697e56a56c44f","url":"_nuxt/entry.DuAPpwJ6.css"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"8e4c5cd9f6d002a3e8e90f8371b9ae43","url":"_nuxt/d3N2FOKH.js"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"900ef03dde1cf8cf40b23f5cad80a360","url":"_nuxt/calendar.4YSbG8xb.css"},{"revision":"325e12c62a5a4595aff4809fe00518ae","url":"_nuxt/calendar-print.Bm9BqBkm.css"},{"revision":"ccf9bcbed9933107a121b8441d8a8370","url":"_nuxt/agenda.B1qY6oE2.css"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"8b13390cd801a59077ac46f620df9625","url":"_nuxt/XgDXAhpz.js"},{"revision":"33957926d05155986a088d798fba8909","url":"_nuxt/V_Y-hW_J.js"},{"revision":"ed5186c1ad8f3d33c35f43d86cd1a375","url":"_nuxt/QRiMJSL0.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"177628254e82a41846faa67fb2fc998e","url":"_nuxt/Khd5ivfY.js"},{"revision":"316e23f188fa230674379fafe14187ef","url":"_nuxt/HIZv6POT.js"},{"revision":"6e2baf709fd5436745f1b39c07bc6754","url":"_nuxt/Dlq4tOQN.js"},{"revision":"95e86c6fd0d5af8438df20eb7b40cbf6","url":"_nuxt/Dll3FPJ8.js"},{"revision":"0e8b26898059627cb5651d55e62a13df","url":"_nuxt/Dbg7DleJ.js"},{"revision":"f6218f7a4cdb2235a9e9bdc832f91db0","url":"_nuxt/DbeNrWeA.js"},{"revision":"681f47080a1f264f412730d19ee00da3","url":"_nuxt/DarIm0f7.js"},{"revision":"438879bc6aadf4bc94ab8518deabd503","url":"_nuxt/DaHsUmO4.js"},{"revision":"0dbd8a9d0247e9d321b3d5c707ced480","url":"_nuxt/D_bbCLn2.js"},{"revision":"c433d03b1fff6bbfaa103daf72d19b10","url":"_nuxt/DXaq1IQg.js"},{"revision":"2424a2cd977d459e874fccaa7d428445","url":"_nuxt/DTcFi72k.js"},{"revision":"3bf8cd11abe3bc845890770cbe7cf8f7","url":"_nuxt/DRQ9F33n.js"},{"revision":"371054600f907b153afdc83f936b26a6","url":"_nuxt/DBpSemUz.js"},{"revision":"363f0779a2d216a8a5f3beceae04136a","url":"_nuxt/D9JpxQhp.js"},{"revision":"6fce6c2b7848b0460332cc94d2a62c8f","url":"_nuxt/D5yV2gc7.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"da1d389840b1bbb1d989eb2fd2b92d92","url":"_nuxt/Cmt6m262.js"},{"revision":"28ca59dce09c827e4a0c69eccaf87964","url":"_nuxt/Cl81QvEc.js"},{"revision":"fad4268ca48ad67d57146fc8ed2012f2","url":"_nuxt/CeU4OK22.js"},{"revision":"32f689af7a0c9027f2707f58bd153933","url":"_nuxt/CW-98qJJ.js"},{"revision":"9d61a68be8924d4a414edef5c467f5ec","url":"_nuxt/CJ6D_X5n.js"},{"revision":"c5981726154a1af03d0a0825354f1e52","url":"_nuxt/CHxNi5V6.js"},{"revision":"405d7f8f289d3aa4b87e000bd750b76b","url":"_nuxt/CBze4mb-.js"},{"revision":"7425ff8d77f4f55eb058386b9186d59d","url":"_nuxt/C-Q793aa.js"},{"revision":"b5158da504dffa67653fbdc65968ba9c","url":"_nuxt/BvhZthad.js"},{"revision":"de857a28a2db136e1776a7666d381776","url":"_nuxt/BquNjP9k.js"},{"revision":"95878e24da6f803b5a2cbff7d8ba53d9","url":"_nuxt/BdoQRSXZ.js"},{"revision":"b2dd0c3c917629bd776d1618b2dc46ff","url":"_nuxt/B_2n-G3x.js"},{"revision":"13932f0b0b6db08e6bb62eff526d4622","url":"_nuxt/BRlJOrgU.js"},{"revision":"e9cfd28e4a402ca2258a4135436b7016","url":"_nuxt/BQohkfPB.js"},{"revision":"9f926e49c64d8b3dae9f459948e60c29","url":"_nuxt/BMO6Nc7r.js"},{"revision":"6f2bc650826e8ec8a6b730c951f44e2b","url":"_nuxt/BCyVLBHK.js"},{"revision":"dd0f950bb1ef18c4e489c2fd010efba1","url":"_nuxt/B8ITyZOZ.js"},{"revision":"35b3198b4bbffca3168f13d2ccbc4961","url":"_nuxt/B0drTCYM.js"},{"revision":"7d6b54ee959ed82cf534e48c0ccbfb8b","url":"_nuxt/876GT-w3.js"},{"revision":"f84d9378425eab4d296319d6196d22bb","url":"_nuxt/1HE_tXzw.js"},{"revision":"984adb360fb735e8c4cfa45bfdc1fa5f","url":"_nuxt/builds/latest.json"},{"revision":"3c4c55f26cda3637e9eab3a840d31b7d","url":"_nuxt/builds/meta/ea864cbd-cb9f-4f34-8436-83441cc8c1f7.json"},{"revision":"8d12d3ffff0d1e68d7c63290c7c4842e","url":"500/index.html"},{"revision":"8d12d3ffff0d1e68d7c63290c7c4842e","url":"404/index.html"},{"revision":"f8d8f43f88c51155d76d904ad6323e39","url":"200/index.html"}] || []);
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
