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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"8223406e407736ea597beaac39460e77","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"8223406e407736ea597beaac39460e77","url":"404.html"},{"revision":"8223406e407736ea597beaac39460e77","url":"200.html"},{"revision":"91fd9e03af86421e622772dbf2e95a8f","url":"sobre/index.html"},{"revision":"2ab665857ddbab0bc1852d1ad7291e8c","url":"settings/index.html"},{"revision":"6a3ec93785b8b8a2cbc0e912d5cc8935","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"2ab665857ddbab0bc1852d1ad7291e8c","url":"relatorio/index.html"},{"revision":"6a3ec93785b8b8a2cbc0e912d5cc8935","url":"records/index.html"},{"revision":"6a3ec93785b8b8a2cbc0e912d5cc8935","url":"recentes/index.html"},{"revision":"6a3ec93785b8b8a2cbc0e912d5cc8935","url":"perfil/index.html"},{"revision":"91fd9e03af86421e622772dbf2e95a8f","url":"pages/index.html"},{"revision":"6a3ec93785b8b8a2cbc0e912d5cc8935","url":"navegar/index.html"},{"revision":"91fd9e03af86421e622772dbf2e95a8f","url":"login/index.html"},{"revision":"2ab665857ddbab0bc1852d1ad7291e8c","url":"lista/index.html"},{"revision":"2ab665857ddbab0bc1852d1ad7291e8c","url":"lista/edit/index.html"},{"revision":"07ab0c9e3ccab88ac1fef9e45078d182","url":"lista/calendar-print/index.html"},{"revision":"07ab0c9e3ccab88ac1fef9e45078d182","url":"lista/calendar/index.html"},{"revision":"91fd9e03af86421e622772dbf2e95a8f","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"dbb3e8573b59e2c645501148585fe8bd","url":"js/sw/firebase.js"},{"revision":"5f743225aa84711433cdd3880dbf51d4","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"2808538d6ebb922a6fff3e7e8c357541","url":"js/sw/vendor/dexie.js"},{"revision":"c2eba1515364b627c4f3d5eb6a4bee5b","url":"js/sw/vendor/workbox/workbox-sw.js"},{"revision":"d72bef0e706a8b25012dfa8aa1e4dfff","url":"js/sw/vendor/workbox/workbox-strategies.prod.js"},{"revision":"90d3aeeedbf6f25853c480d92bc51839","url":"js/sw/vendor/workbox/workbox-routing.prod.js"},{"revision":"24c50c33b7c66d7152d4ebae0ac8bd31","url":"js/sw/vendor/workbox/workbox-precaching.prod.js"},{"revision":"2c14e6d1a14b7b1db30586e38ff7a7ae","url":"js/sw/vendor/workbox/workbox-navigation-preload.prod.js"},{"revision":"0e7ae639b709c2e7c22abb64c359f85c","url":"js/sw/vendor/workbox/workbox-expiration.prod.js"},{"revision":"7d66f77f1d0ff9348205a245c75cc6e3","url":"js/sw/vendor/workbox/workbox-core.prod.js"},{"revision":"c1164a2c6ee0dbe4099f435a008a7d00","url":"js/sw/vendor/workbox/workbox-cacheable-response.prod.js"},{"revision":"e640131b6725841102014e560e21d647","url":"js/sw/vendor/firebase/firebase-messaging-compat.js"},{"revision":"c9a629d733922bfe5a271fb7442e7d2d","url":"js/sw/vendor/firebase/firebase-app-compat.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"2ab665857ddbab0bc1852d1ad7291e8c","url":"hinos/index.html"},{"revision":"2ab665857ddbab0bc1852d1ad7291e8c","url":"forms/view/index.html"},{"revision":"07ab0c9e3ccab88ac1fef9e45078d182","url":"forms/manutencao/index.html"},{"revision":"07ab0c9e3ccab88ac1fef9e45078d182","url":"forms/levantamento_preventiva/index.html"},{"revision":"07ab0c9e3ccab88ac1fef9e45078d182","url":"forms/contato/index.html"},{"revision":"07ab0c9e3ccab88ac1fef9e45078d182","url":"forgot-password/index.html"},{"revision":"6a3ec93785b8b8a2cbc0e912d5cc8935","url":"eventos/index.html"},{"revision":"2ab665857ddbab0bc1852d1ad7291e8c","url":"evento/index.html"},{"revision":"07ab0c9e3ccab88ac1fef9e45078d182","url":"evento/solicitar/index.html"},{"revision":"91fd9e03af86421e622772dbf2e95a8f","url":"agenda/index.html"},{"revision":"447fe80e27beb603d3c94337fd3ee317","url":"_nuxt/xptlssRa.js"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"5f603accf13d4611567b405a9940e654","url":"_nuxt/v3FZQWr6.js"},{"revision":"3d9aad04796ee8f3d3e3c63d41ed354f","url":"_nuxt/useHolidays.Cnq2fMW2.css"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"1241bb1feb900287ccb14310328a22c3","url":"_nuxt/settings.BXvx61R5.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"b7109072fc7ad771e87f4a81d70915d8","url":"_nuxt/rkNcyhVY.js"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"95df1e3ed7bb77f9b82ee5ef2ec3a945","url":"_nuxt/recentes.Boz8l2j6.css"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"aa61533f2a29387ba2341e2cba4b3ae4","url":"_nuxt/navegar.CcnZmLym.css"},{"revision":"38b7f0b38a102e1b524086132952642c","url":"_nuxt/menu.B8Zv1MPp.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"2a0e41f635cc3844a8c2830826ae3beb","url":"_nuxt/index.xA83gVRs.css"},{"revision":"20044ccd19f6775d1639e26df4052677","url":"_nuxt/index.DKEm0VN6.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"51d941c6cd52e3a056237c25060d5734","url":"_nuxt/index.Bir61zYh.css"},{"revision":"dc883ab3c2ed77e5c8d445ef4b6ed6b2","url":"_nuxt/gJWR07aM.js"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"bc52864a6736bd45dca818e801ad5ff2","url":"_nuxt/eventos.BGXk-ZSs.css"},{"revision":"3a1cea3743d4b7eb96f697e56a56c44f","url":"_nuxt/entry.DuAPpwJ6.css"},{"revision":"0091caf9349d320b9f3887b26a14c632","url":"_nuxt/dpqTygz2.js"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"900ef03dde1cf8cf40b23f5cad80a360","url":"_nuxt/calendar.4YSbG8xb.css"},{"revision":"325e12c62a5a4595aff4809fe00518ae","url":"_nuxt/calendar-print.Bm9BqBkm.css"},{"revision":"ccf9bcbed9933107a121b8441d8a8370","url":"_nuxt/agenda.B1qY6oE2.css"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"aecfb7646ec10b5950166b05e6c8300f","url":"_nuxt/XynPLkON.js"},{"revision":"4af6232c5aa5567d45584e46b71e7367","url":"_nuxt/WZaqZLfe.js"},{"revision":"32d6c75d37e83a7fbad55ae726b8a1f4","url":"_nuxt/PlgGBIUt.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"95e236e673ba5a095d7813d8decca9b6","url":"_nuxt/GtCoCSn-.js"},{"revision":"fb906fcac508df248d792728ed1ee441","url":"_nuxt/DyuqIUSF.js"},{"revision":"6e1d1ef827d11613348eea2372fcc545","url":"_nuxt/Dw4-dbwW.js"},{"revision":"5a0e2768fe039952157dfa2a4fbb9f7a","url":"_nuxt/Dmz69o3c.js"},{"revision":"6e2baf709fd5436745f1b39c07bc6754","url":"_nuxt/Dlq4tOQN.js"},{"revision":"f935c0f8690f20fd30d9a4ba0bc7449e","url":"_nuxt/DfL-rTl0.js"},{"revision":"5ddb52dc1071d636cec42ba4a60f55f7","url":"_nuxt/DfGslQiY.js"},{"revision":"48238c8d54fe62b6e7e92de44b175130","url":"_nuxt/DdVPG_Pu.js"},{"revision":"855d20598e4f3ea4c0d02078abea62d1","url":"_nuxt/DcYCFnrY.js"},{"revision":"494b23559ab4a03cbde1ced660217c9a","url":"_nuxt/DaY_WVCj.js"},{"revision":"c8efb6db6c9bc37c78ba7453014bc423","url":"_nuxt/Da5ChIPS.js"},{"revision":"48c7db844e7fe7045691f93448d725a1","url":"_nuxt/DJ5RwUJu.js"},{"revision":"8a4c63455b3e2170a8064250adbf73af","url":"_nuxt/DGzEmR5M.js"},{"revision":"77ae558b0c1986e5feb66ca76ee0032e","url":"_nuxt/DF4TgUoS.js"},{"revision":"7e5b0c38dee461944ed57fb31877b11e","url":"_nuxt/D2mwf058.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"f0ce8d56f0ce74b8fefa1f554f799929","url":"_nuxt/D-zbVBY8.js"},{"revision":"3e0e95f55f5fb337d172d90964a44c4d","url":"_nuxt/Cyj2wjqi.js"},{"revision":"a50a51c31a8ad3ff23833e1e3cea27fe","url":"_nuxt/CgZc0xXW.js"},{"revision":"853b816ae7d531b4748d5c56e3d587d8","url":"_nuxt/CfJo3pJ1.js"},{"revision":"19ec1ec942f033b0e5dfd8dac34bc798","url":"_nuxt/CeY7ERJG.js"},{"revision":"9223cdf89576f94fed0d5618f07894b0","url":"_nuxt/CPscoNa1.js"},{"revision":"93301e5dc1532df11d97bd6bdc40fdcb","url":"_nuxt/CIjJHLJU.js"},{"revision":"de7e9ed4c8bc7a06b35d894dab03c94c","url":"_nuxt/CDzAOLsE.js"},{"revision":"441cbe5c56ece44ef7257c44ab039c97","url":"_nuxt/C8XRbXQs.js"},{"revision":"1d787ee46f61089b63cf445c63b8be31","url":"_nuxt/Bz_8m4eL.js"},{"revision":"dfecbdb2e7557ea70a42cbfc4da31042","url":"_nuxt/BuCI1zFR.js"},{"revision":"2740f3c06434bdd0c7c50ba0a666fa81","url":"_nuxt/BqlEESI2.js"},{"revision":"db2274d78e4ad30df6ecdeb8399308fd","url":"_nuxt/BjddN95t.js"},{"revision":"6b9b3495eb1533dadbf9c660eb591846","url":"_nuxt/BcANYFpr.js"},{"revision":"b979c76a55bb574e742dc3ead0304546","url":"_nuxt/Bb8MiO3B.js"},{"revision":"fd2e0e73e8d1ef15cc32114921132773","url":"_nuxt/BXNzH1xS.js"},{"revision":"c45d5e5a540ff2c28b360650b3bb6c8d","url":"_nuxt/BQUZJzFh.js"},{"revision":"c58916c33322b1c14d401e234e2c2d1d","url":"_nuxt/B8ERia9_.js"},{"revision":"576befcac71ac7b0cd8c09fb41e9845c","url":"_nuxt/B769j7jj.js"},{"revision":"83af9ce821cf1505a2d2c0da9475d1e4","url":"_nuxt/AwAK_sgi.js"},{"revision":"1fa7543928e8c3a29f53059b63a8a65d","url":"_nuxt/AKvqjQ9g.js"},{"revision":"d710e3eb7752033523db51624855d74b","url":"_nuxt/8L3UOXuF.js"},{"revision":"44e517ed9faef78e5c45959deb5a701e","url":"_nuxt/3BSLJMcx.js"},{"revision":"a20ccecb61b2abcfdfcdc0645440cc2b","url":"_nuxt/builds/latest.json"},{"revision":"7311a1ff2c3bd3dab1a5d784579ca21c","url":"_nuxt/builds/meta/c9ba24e7-5d77-4b00-b5a9-a9f406c65c32.json"},{"revision":"c64ea11c65ae90a0103f6cb8b9b0aedd","url":"500/index.html"},{"revision":"c64ea11c65ae90a0103f6cb8b9b0aedd","url":"404/index.html"},{"revision":"27d7cdb4a0de973b5ab56f8ca929158f","url":"200/index.html"}] || []);
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
