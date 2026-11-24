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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"d153ac4d9cba7dcfdd42e6aef518b0f7","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"d153ac4d9cba7dcfdd42e6aef518b0f7","url":"404.html"},{"revision":"d153ac4d9cba7dcfdd42e6aef518b0f7","url":"200.html"},{"revision":"e9e7a9a36f081671115805a59260079f","url":"sobre/index.html"},{"revision":"906cd96819515993f94db826e6a2f12b","url":"settings/index.html"},{"revision":"21412b27dea21b40e16b5c3db1f74d94","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"906cd96819515993f94db826e6a2f12b","url":"relatorio/index.html"},{"revision":"21412b27dea21b40e16b5c3db1f74d94","url":"records/index.html"},{"revision":"21412b27dea21b40e16b5c3db1f74d94","url":"recentes/index.html"},{"revision":"21412b27dea21b40e16b5c3db1f74d94","url":"perfil/index.html"},{"revision":"e9e7a9a36f081671115805a59260079f","url":"pages/index.html"},{"revision":"21412b27dea21b40e16b5c3db1f74d94","url":"navegar/index.html"},{"revision":"e9e7a9a36f081671115805a59260079f","url":"login/index.html"},{"revision":"906cd96819515993f94db826e6a2f12b","url":"lista/index.html"},{"revision":"906cd96819515993f94db826e6a2f12b","url":"lista/edit/index.html"},{"revision":"d153ac4d9cba7dcfdd42e6aef518b0f7","url":"lista/calendar-print/index.html"},{"revision":"d153ac4d9cba7dcfdd42e6aef518b0f7","url":"lista/calendar/index.html"},{"revision":"e9e7a9a36f081671115805a59260079f","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"dbb3e8573b59e2c645501148585fe8bd","url":"js/sw/firebase.js"},{"revision":"5f743225aa84711433cdd3880dbf51d4","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"2808538d6ebb922a6fff3e7e8c357541","url":"js/sw/vendor/dexie.js"},{"revision":"c2eba1515364b627c4f3d5eb6a4bee5b","url":"js/sw/vendor/workbox/workbox-sw.js"},{"revision":"d72bef0e706a8b25012dfa8aa1e4dfff","url":"js/sw/vendor/workbox/workbox-strategies.prod.js"},{"revision":"90d3aeeedbf6f25853c480d92bc51839","url":"js/sw/vendor/workbox/workbox-routing.prod.js"},{"revision":"24c50c33b7c66d7152d4ebae0ac8bd31","url":"js/sw/vendor/workbox/workbox-precaching.prod.js"},{"revision":"2c14e6d1a14b7b1db30586e38ff7a7ae","url":"js/sw/vendor/workbox/workbox-navigation-preload.prod.js"},{"revision":"0e7ae639b709c2e7c22abb64c359f85c","url":"js/sw/vendor/workbox/workbox-expiration.prod.js"},{"revision":"7d66f77f1d0ff9348205a245c75cc6e3","url":"js/sw/vendor/workbox/workbox-core.prod.js"},{"revision":"c1164a2c6ee0dbe4099f435a008a7d00","url":"js/sw/vendor/workbox/workbox-cacheable-response.prod.js"},{"revision":"e640131b6725841102014e560e21d647","url":"js/sw/vendor/firebase/firebase-messaging-compat.js"},{"revision":"c9a629d733922bfe5a271fb7442e7d2d","url":"js/sw/vendor/firebase/firebase-app-compat.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"906cd96819515993f94db826e6a2f12b","url":"hinos/index.html"},{"revision":"906cd96819515993f94db826e6a2f12b","url":"forms/view/index.html"},{"revision":"d153ac4d9cba7dcfdd42e6aef518b0f7","url":"forms/manutencao/index.html"},{"revision":"d153ac4d9cba7dcfdd42e6aef518b0f7","url":"forms/levantamento_preventiva/index.html"},{"revision":"906cd96819515993f94db826e6a2f12b","url":"forms/contato/index.html"},{"revision":"d153ac4d9cba7dcfdd42e6aef518b0f7","url":"forgot-password/index.html"},{"revision":"21412b27dea21b40e16b5c3db1f74d94","url":"eventos/index.html"},{"revision":"906cd96819515993f94db826e6a2f12b","url":"evento/index.html"},{"revision":"d153ac4d9cba7dcfdd42e6aef518b0f7","url":"evento/solicitar/index.html"},{"revision":"e9e7a9a36f081671115805a59260079f","url":"agenda/index.html"},{"revision":"1b74ffee11313d117202c2b6d8ade000","url":"_nuxt/zXhl-cMf.js"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"9c8cfe448c97f504018eca173f5f0245","url":"_nuxt/v2Wgoe5-.js"},{"revision":"3d9aad04796ee8f3d3e3c63d41ed354f","url":"_nuxt/useHolidays.Cnq2fMW2.css"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"1241bb1feb900287ccb14310328a22c3","url":"_nuxt/settings.BXvx61R5.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"95df1e3ed7bb77f9b82ee5ef2ec3a945","url":"_nuxt/recentes.Boz8l2j6.css"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"aa61533f2a29387ba2341e2cba4b3ae4","url":"_nuxt/navegar.CcnZmLym.css"},{"revision":"38b7f0b38a102e1b524086132952642c","url":"_nuxt/menu.B8Zv1MPp.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"9847d3b0a080c81d371b8d74300e575c","url":"_nuxt/kkN5V-Ua.js"},{"revision":"2a0e41f635cc3844a8c2830826ae3beb","url":"_nuxt/index.xA83gVRs.css"},{"revision":"20044ccd19f6775d1639e26df4052677","url":"_nuxt/index.DKEm0VN6.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"51d941c6cd52e3a056237c25060d5734","url":"_nuxt/index.Bir61zYh.css"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"203482c325513a968260258a22ca5274","url":"_nuxt/eventos.z9DZkjaz.css"},{"revision":"3a1cea3743d4b7eb96f697e56a56c44f","url":"_nuxt/entry.DuAPpwJ6.css"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"900ef03dde1cf8cf40b23f5cad80a360","url":"_nuxt/calendar.4YSbG8xb.css"},{"revision":"325e12c62a5a4595aff4809fe00518ae","url":"_nuxt/calendar-print.Bm9BqBkm.css"},{"revision":"0db7e48d4f36c8aeec09abea6dadbe2d","url":"_nuxt/bcxxGekG.js"},{"revision":"ccf9bcbed9933107a121b8441d8a8370","url":"_nuxt/agenda.B1qY6oE2.css"},{"revision":"6ffedc87c88d5abe26751c567364e43f","url":"_nuxt/aKSTGZNv.js"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"24aec29d73adff5dfd39cb9c6c9d295b","url":"_nuxt/ZfZTqIf3.js"},{"revision":"7912a23ff3c4f0e0d23a7df53c195f3a","url":"_nuxt/UWHbrwfp.js"},{"revision":"c4daa8b74851e481a4e8d9d940f6b52f","url":"_nuxt/TA5MKMKv.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"fc01822eafa954d4cc6219bcc94285cb","url":"_nuxt/Jn8P8j7Z.js"},{"revision":"56968fd2a25e92ca9ee1fceee9d9c657","url":"_nuxt/Jh7T0vWk.js"},{"revision":"4c8dce356ff6fc811341b115c9b8e5c1","url":"_nuxt/DzN4q4nO.js"},{"revision":"10f2f3468c9b565b9422d4ff224d79e5","url":"_nuxt/Dwv09ZWS.js"},{"revision":"1e05bce7e976d7fd88d82319745a8a75","url":"_nuxt/DwYj0H8X.js"},{"revision":"4fcd14a0aec7c231b2ca7f8f801cc9b0","url":"_nuxt/DtzcuNxn.js"},{"revision":"c84cae5ec1709a0d5b23fe6a74c62dc8","url":"_nuxt/Dm3-LvS6.js"},{"revision":"6e2baf709fd5436745f1b39c07bc6754","url":"_nuxt/Dlq4tOQN.js"},{"revision":"4f8773fa83008d161c76b8d31ee5aa4c","url":"_nuxt/D_Dh8bp4.js"},{"revision":"69b0da6ebeea9eb1067bd43cbd83eb02","url":"_nuxt/DSkWAm74.js"},{"revision":"82e3690228bdc4904acf4dd634509d45","url":"_nuxt/DCyzWkbW.js"},{"revision":"fe694b6d6bfe247622e3b8c514323de4","url":"_nuxt/DBbxoc2U.js"},{"revision":"5c1065a95289017f2c39d8f23a73387e","url":"_nuxt/D6NfIQog.js"},{"revision":"73cca70c66472af1cf78886dbed93c5a","url":"_nuxt/D2lQvVbt.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"947adb0a2a62daa7fea3d5f318622617","url":"_nuxt/CzK5E_pf.js"},{"revision":"fb93e2d51dfea30939d79804574d52d7","url":"_nuxt/CkiAnRe-.js"},{"revision":"e9ea68702ef3d2364e75b9f0558ad657","url":"_nuxt/CirHojgc.js"},{"revision":"38e32da990eec8a50b9d2bf0ce0c1550","url":"_nuxt/Cajxcddq.js"},{"revision":"9f44cd083b7829661d554087354ab9da","url":"_nuxt/CWwe0qzx.js"},{"revision":"a00a6063020860618bc2a32697dc1138","url":"_nuxt/CTk55Vib.js"},{"revision":"46d80f21c32817a5a2578bf511b5b946","url":"_nuxt/CTBxsyMo.js"},{"revision":"a2f3fe6f04f42663db031a66d0900164","url":"_nuxt/CN0LlImC.js"},{"revision":"a1725e7aa00ab709ef18eaa31d9c2c09","url":"_nuxt/CLNNf5VY.js"},{"revision":"e4b0e37019f0e172a8f99b306bc6613e","url":"_nuxt/CKyuwkEx.js"},{"revision":"42aa3a10cb3d06e079d15f056d7ff903","url":"_nuxt/CHHCO8-N.js"},{"revision":"ec974f710998d6cdff5a609b01504e46","url":"_nuxt/CGwo1BUz.js"},{"revision":"713f6db59a4de09660c5a51b4058dc6f","url":"_nuxt/CA-dt8lB.js"},{"revision":"49686a6d39f1015fb13efe74728438bd","url":"_nuxt/C8IBfwhr.js"},{"revision":"2038c23ee2ee763bfb79adba7e90ab9e","url":"_nuxt/C75qZeD1.js"},{"revision":"7a7619faf863db658589e4331abb64fd","url":"_nuxt/BzwJp8Js.js"},{"revision":"6c90b924e79a8ceb8f1f44aed0892321","url":"_nuxt/BwW2Zyo7.js"},{"revision":"4616b7d15cabfec17e54c0d4c9944792","url":"_nuxt/BRanitPv.js"},{"revision":"e71b0e689b8f8a34e85cbffe2cc52e72","url":"_nuxt/BEJ0AtKf.js"},{"revision":"d4c06d7334449f6905090efbe64c4874","url":"_nuxt/BDgxgQe8.js"},{"revision":"86cbe2228f209e50b1d0c9df4f696933","url":"_nuxt/B3d1suG7.js"},{"revision":"eddd78a0b5d3172a9c4639c63ceb7583","url":"_nuxt/B28bdoMD.js"},{"revision":"77c9b9564327ec13ac85181182ba5c3b","url":"_nuxt/B1_qbBvQ.js"},{"revision":"16f88b7fd0bd235c91afa93d09bc4123","url":"_nuxt/-SUWR59i.js"},{"revision":"af0f1644ffab8593d8687284668db4af","url":"_nuxt/builds/latest.json"},{"revision":"bd4c35e08325b785b8b1e6b4aeddb80c","url":"_nuxt/builds/meta/653666d9-6abf-4d63-b671-00ee53bb0876.json"},{"revision":"0360792a624966f307af06fa06b08f07","url":"500/index.html"},{"revision":"0360792a624966f307af06fa06b08f07","url":"404/index.html"},{"revision":"0360792a624966f307af06fa06b08f07","url":"200/index.html"}] || []);
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
