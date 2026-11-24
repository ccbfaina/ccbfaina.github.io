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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"97c81be78f13e246df922be8a3651280","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"d9982a4c4b7aa5cab09cae600b1abda5","url":"404.html"},{"revision":"97c81be78f13e246df922be8a3651280","url":"200.html"},{"revision":"207907e263f360fb5102db6b652dcec4","url":"sobre/index.html"},{"revision":"dd7d1c9900a1ae3788b8800a75ca18fc","url":"settings/index.html"},{"revision":"7721e51f3187d764049874ae5def0e10","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"dd7d1c9900a1ae3788b8800a75ca18fc","url":"relatorio/index.html"},{"revision":"981a97a3a50d75744d0acd2895fbea77","url":"records/index.html"},{"revision":"7721e51f3187d764049874ae5def0e10","url":"recentes/index.html"},{"revision":"47a37582d25f2fc562a75324beb21f7c","url":"perfil/index.html"},{"revision":"4aa9342151af059d0d97ab843fd8a6cd","url":"pages/index.html"},{"revision":"981a97a3a50d75744d0acd2895fbea77","url":"navegar/index.html"},{"revision":"6d8165a4d1c88f1dd8bde9183c3e979a","url":"login/index.html"},{"revision":"1218da9f431edde040ed81480e0f448a","url":"lista/index.html"},{"revision":"fcc466416ebfe68d5f4f8f07ed122e47","url":"lista/edit/index.html"},{"revision":"efaa2efce8788fa29657e453e7116a21","url":"lista/calendar-print/index.html"},{"revision":"37cfb01fc07269ad57108c2a49832767","url":"lista/calendar/index.html"},{"revision":"d8b1ed53b58594f589b5eb059229c263","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"dbb3e8573b59e2c645501148585fe8bd","url":"js/sw/firebase.js"},{"revision":"5f743225aa84711433cdd3880dbf51d4","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"2808538d6ebb922a6fff3e7e8c357541","url":"js/sw/vendor/dexie.js"},{"revision":"c2eba1515364b627c4f3d5eb6a4bee5b","url":"js/sw/vendor/workbox/workbox-sw.js"},{"revision":"d72bef0e706a8b25012dfa8aa1e4dfff","url":"js/sw/vendor/workbox/workbox-strategies.prod.js"},{"revision":"90d3aeeedbf6f25853c480d92bc51839","url":"js/sw/vendor/workbox/workbox-routing.prod.js"},{"revision":"24c50c33b7c66d7152d4ebae0ac8bd31","url":"js/sw/vendor/workbox/workbox-precaching.prod.js"},{"revision":"2c14e6d1a14b7b1db30586e38ff7a7ae","url":"js/sw/vendor/workbox/workbox-navigation-preload.prod.js"},{"revision":"0e7ae639b709c2e7c22abb64c359f85c","url":"js/sw/vendor/workbox/workbox-expiration.prod.js"},{"revision":"7d66f77f1d0ff9348205a245c75cc6e3","url":"js/sw/vendor/workbox/workbox-core.prod.js"},{"revision":"c1164a2c6ee0dbe4099f435a008a7d00","url":"js/sw/vendor/workbox/workbox-cacheable-response.prod.js"},{"revision":"e640131b6725841102014e560e21d647","url":"js/sw/vendor/firebase/firebase-messaging-compat.js"},{"revision":"c9a629d733922bfe5a271fb7442e7d2d","url":"js/sw/vendor/firebase/firebase-app-compat.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"c1721f30d698f38a6cd8bd5993615eb7","url":"hinos/index.html"},{"revision":"fcc466416ebfe68d5f4f8f07ed122e47","url":"forms/view/index.html"},{"revision":"efaa2efce8788fa29657e453e7116a21","url":"forms/manutencao/index.html"},{"revision":"efaa2efce8788fa29657e453e7116a21","url":"forms/levantamento_preventiva/index.html"},{"revision":"fe386531d50aa75371054ee67cad4c05","url":"forms/contato/index.html"},{"revision":"37cfb01fc07269ad57108c2a49832767","url":"forgot-password/index.html"},{"revision":"664110b0a31acdfcb78ce25ca1417adc","url":"eventos/index.html"},{"revision":"1218da9f431edde040ed81480e0f448a","url":"evento/index.html"},{"revision":"a008aa9efee6fe61c4beb50aefa65afc","url":"evento/solicitar/index.html"},{"revision":"207907e263f360fb5102db6b652dcec4","url":"agenda/index.html"},{"revision":"8b875041439e7137d57455089999cea3","url":"_nuxt/wbKa7_yO.js"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"87b12db3a6ef97b55d581ab877fa6a51","url":"_nuxt/vVx3tomC.js"},{"revision":"3d9aad04796ee8f3d3e3c63d41ed354f","url":"_nuxt/useHolidays.Cnq2fMW2.css"},{"revision":"c0b5d211126c0da654899ce4ffcac547","url":"_nuxt/u8OpkntK.js"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"1241bb1feb900287ccb14310328a22c3","url":"_nuxt/settings.BXvx61R5.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"95df1e3ed7bb77f9b82ee5ef2ec3a945","url":"_nuxt/recentes.Boz8l2j6.css"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"57d106fd9bca58ccebe5724ad4695c35","url":"_nuxt/pG_KfkNK.js"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"aa61533f2a29387ba2341e2cba4b3ae4","url":"_nuxt/navegar.CcnZmLym.css"},{"revision":"38b7f0b38a102e1b524086132952642c","url":"_nuxt/menu.B8Zv1MPp.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"2a0e41f635cc3844a8c2830826ae3beb","url":"_nuxt/index.xA83gVRs.css"},{"revision":"20044ccd19f6775d1639e26df4052677","url":"_nuxt/index.DKEm0VN6.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"51d941c6cd52e3a056237c25060d5734","url":"_nuxt/index.Bir61zYh.css"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"bc52864a6736bd45dca818e801ad5ff2","url":"_nuxt/eventos.BGXk-ZSs.css"},{"revision":"3a1cea3743d4b7eb96f697e56a56c44f","url":"_nuxt/entry.DuAPpwJ6.css"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"900ef03dde1cf8cf40b23f5cad80a360","url":"_nuxt/calendar.4YSbG8xb.css"},{"revision":"325e12c62a5a4595aff4809fe00518ae","url":"_nuxt/calendar-print.Bm9BqBkm.css"},{"revision":"ccf9bcbed9933107a121b8441d8a8370","url":"_nuxt/agenda.B1qY6oE2.css"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"d8f35461db9fcbd73f2f4a686316ae91","url":"_nuxt/Vg-Dqwfc.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"f8e08a55d5e17c33f3335944d7513091","url":"_nuxt/J2Q83w39.js"},{"revision":"421e2b6ef581c20d99f5b311c74f0dfd","url":"_nuxt/IkRdsoe-.js"},{"revision":"958fd627bf5545170f5266574e4003b5","url":"_nuxt/Dzuk2k8A.js"},{"revision":"e500f0b2c364001e141db495a347aa4b","url":"_nuxt/Dzeedrin.js"},{"revision":"9502d58fa111038c472941e1f764406e","url":"_nuxt/DtGXYkSM.js"},{"revision":"efa13d7b5aec21da114ebaa902c4009a","url":"_nuxt/DqEY7LNL.js"},{"revision":"6e2baf709fd5436745f1b39c07bc6754","url":"_nuxt/Dlq4tOQN.js"},{"revision":"8785caabaab1efabfa596ade35cafb2c","url":"_nuxt/DgthzN4W.js"},{"revision":"6cd394440b6a42996cfeb84ac0680a36","url":"_nuxt/DfylfELO.js"},{"revision":"fa4fbffe3c29056474beb7875b61e858","url":"_nuxt/DYlx26PQ.js"},{"revision":"f35a4c6a2ddb465130debf74a6658948","url":"_nuxt/DWV7tUm5.js"},{"revision":"69d45182a726c4d4c5df95761a6a4609","url":"_nuxt/DU9LNUHn.js"},{"revision":"2b1ddddc4576768fb341f8593f6809cd","url":"_nuxt/DHxeHQwh.js"},{"revision":"1b7d04bd430fec4a61c7b2ade9ebc699","url":"_nuxt/D4w0IvVq.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"525da1f8faac1e24b82346c2de8a231f","url":"_nuxt/CtfkvvnM.js"},{"revision":"dc641ff692d0f3a5f90f5279f993f4c8","url":"_nuxt/CdE8kZZv.js"},{"revision":"db53b3d7eb5e7d19c8304efce3d26d19","url":"_nuxt/CSF9c7dH.js"},{"revision":"eda6603aaa77621c77ba06383a96deab","url":"_nuxt/COvFyoCT.js"},{"revision":"ca74890377c9176b98fce94c817488cd","url":"_nuxt/CGmRHEbt.js"},{"revision":"fd988e97047013389177577b27bfb62b","url":"_nuxt/C8Ncfcha.js"},{"revision":"fe119184bfdd4f8f7c8f2a7103746a05","url":"_nuxt/C3KU_zTm.js"},{"revision":"9f87702263538e2023f04ed56652867f","url":"_nuxt/C3D32WCN.js"},{"revision":"922f3393eccf3c5cb8a737b4ec75a168","url":"_nuxt/C1-eev7g.js"},{"revision":"f5becc191f1dd7c511993a69c0924f29","url":"_nuxt/C-SsDA7S.js"},{"revision":"d760e4db9daa3d2a334069fa366469dd","url":"_nuxt/ByJvNfgD.js"},{"revision":"a2943563fde8a2ead017a360c36d524a","url":"_nuxt/BxFsPyXg.js"},{"revision":"c3986f0c6e92c3d4869fe527b998161b","url":"_nuxt/BqzWtWEU.js"},{"revision":"6cef83f7b054efa5625bc5063743c8ec","url":"_nuxt/BpBjrkN8.js"},{"revision":"0abb116aebbe6f71dc4209ac996a12cc","url":"_nuxt/BZAnd7Xb.js"},{"revision":"ea34f6c772adcf722efef7f8c8a1fbe2","url":"_nuxt/BYsJKBjz.js"},{"revision":"69b367292e4fb183b1fd5ae149dd18ae","url":"_nuxt/BYcwHvHf.js"},{"revision":"90f02b367a8ddf474a559133944e87a6","url":"_nuxt/BThqBxCp.js"},{"revision":"4f5327e2c0a5e83e4d512bca7ad2eed4","url":"_nuxt/BQxoXHaD.js"},{"revision":"58c8d8e779d8f93a1edc193e23053050","url":"_nuxt/BQX7k2b-.js"},{"revision":"f0583fad3f37b331e7e2a4a0a1fca3b2","url":"_nuxt/BOQQtLYH.js"},{"revision":"19cff433c239186169694d391d724189","url":"_nuxt/BKU15iro.js"},{"revision":"78c8ad9ab706db8a1ba90f7f6c1f55c0","url":"_nuxt/B2dWwOdX.js"},{"revision":"18e06b099ea016ec449648b13897174f","url":"_nuxt/B1NVCqom.js"},{"revision":"11ffa5b00bfb36ae2549b8e27e56a8ae","url":"_nuxt/AJv4Whgt.js"},{"revision":"e1cf9f5a6180e68f28dc3357823e8d61","url":"_nuxt/2bzS4mym.js"},{"revision":"dd2d7b38d945456998dd226dcbbfffe7","url":"_nuxt/2_mqX4XW.js"},{"revision":"0cb83124965aef3973e4adbbc5e03d12","url":"_nuxt/builds/latest.json"},{"revision":"24dab4bec0c0439014fe1f39bc129d94","url":"_nuxt/builds/meta/f0eb948f-7ca1-46e4-97e7-73fe222c9659.json"},{"revision":"ab908807f42088cec581b494a4fb4748","url":"500/index.html"},{"revision":"3bf485c666d8d0944c1b2ac385f7f8cd","url":"404/index.html"},{"revision":"4d84317023bfb9783c55a99e7310deaf","url":"200/index.html"}] || []);
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
