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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"10da2c5026a2ccabae93c51a2c798223","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"abc53fa656abd822c4f0f6cb754426dc","url":"404.html"},{"revision":"abc53fa656abd822c4f0f6cb754426dc","url":"200.html"},{"revision":"aa24647b96f02d6d689599e6799034a4","url":"sugestoes/nomes.json"},{"revision":"39e0e9544763cb88c7aaa313c0ca7c21","url":"sobre/index.html"},{"revision":"04eb581e0bdf2bb78bb1259e29bf7307","url":"settings/index.html"},{"revision":"04eb581e0bdf2bb78bb1259e29bf7307","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"04eb581e0bdf2bb78bb1259e29bf7307","url":"relatorio/index.html"},{"revision":"3fada45b6fe199432d0c716cc6f64e82","url":"records/index.html"},{"revision":"3fada45b6fe199432d0c716cc6f64e82","url":"recentes/index.html"},{"revision":"3fada45b6fe199432d0c716cc6f64e82","url":"perfil/index.html"},{"revision":"39e0e9544763cb88c7aaa313c0ca7c21","url":"pages/index.html"},{"revision":"3fada45b6fe199432d0c716cc6f64e82","url":"navegar/index.html"},{"revision":"39e0e9544763cb88c7aaa313c0ca7c21","url":"login/index.html"},{"revision":"04eb581e0bdf2bb78bb1259e29bf7307","url":"lista/index.html"},{"revision":"04eb581e0bdf2bb78bb1259e29bf7307","url":"lista/edit/index.html"},{"revision":"abc53fa656abd822c4f0f6cb754426dc","url":"lista/calendar-print/index.html"},{"revision":"abc53fa656abd822c4f0f6cb754426dc","url":"lista/calendar/index.html"},{"revision":"39e0e9544763cb88c7aaa313c0ca7c21","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"dbb3e8573b59e2c645501148585fe8bd","url":"js/sw/firebase.js"},{"revision":"2cc32c31d1de207c4268a72a2198311e","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"2808538d6ebb922a6fff3e7e8c357541","url":"js/sw/vendor/dexie.js"},{"revision":"c2eba1515364b627c4f3d5eb6a4bee5b","url":"js/sw/vendor/workbox/workbox-sw.js"},{"revision":"d72bef0e706a8b25012dfa8aa1e4dfff","url":"js/sw/vendor/workbox/workbox-strategies.prod.js"},{"revision":"90d3aeeedbf6f25853c480d92bc51839","url":"js/sw/vendor/workbox/workbox-routing.prod.js"},{"revision":"24c50c33b7c66d7152d4ebae0ac8bd31","url":"js/sw/vendor/workbox/workbox-precaching.prod.js"},{"revision":"2c14e6d1a14b7b1db30586e38ff7a7ae","url":"js/sw/vendor/workbox/workbox-navigation-preload.prod.js"},{"revision":"0e7ae639b709c2e7c22abb64c359f85c","url":"js/sw/vendor/workbox/workbox-expiration.prod.js"},{"revision":"7d66f77f1d0ff9348205a245c75cc6e3","url":"js/sw/vendor/workbox/workbox-core.prod.js"},{"revision":"c1164a2c6ee0dbe4099f435a008a7d00","url":"js/sw/vendor/workbox/workbox-cacheable-response.prod.js"},{"revision":"e640131b6725841102014e560e21d647","url":"js/sw/vendor/firebase/firebase-messaging-compat.js"},{"revision":"c9a629d733922bfe5a271fb7442e7d2d","url":"js/sw/vendor/firebase/firebase-app-compat.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"04eb581e0bdf2bb78bb1259e29bf7307","url":"hinos/index.html"},{"revision":"04eb581e0bdf2bb78bb1259e29bf7307","url":"forms/view/index.html"},{"revision":"abc53fa656abd822c4f0f6cb754426dc","url":"forms/manutencao/index.html"},{"revision":"abc53fa656abd822c4f0f6cb754426dc","url":"forms/levantamento_preventiva/index.html"},{"revision":"abc53fa656abd822c4f0f6cb754426dc","url":"forms/contato/index.html"},{"revision":"abc53fa656abd822c4f0f6cb754426dc","url":"forgot-password/index.html"},{"revision":"3fada45b6fe199432d0c716cc6f64e82","url":"eventos/index.html"},{"revision":"abc53fa656abd822c4f0f6cb754426dc","url":"evento/index.html"},{"revision":"abc53fa656abd822c4f0f6cb754426dc","url":"evento/solicitar/index.html"},{"revision":"5cafd7bb752521a507d7c87141a2900f","url":"data/tags.json"},{"revision":"6b714752ddf9accc46258f481d2eb107","url":"data/tags-circulares.json"},{"revision":"0c67f062d6c248fbad406549c816ea19","url":"data/relatorio.json"},{"revision":"416ef7202529463a618e35c6f3d32152","url":"data/ministerio.json"},{"revision":"196008493bb75371cbea968b2332aa9a","url":"data/metadata.json"},{"revision":"d15b4a22b3cb4b091954c2788282c3f1","url":"data/data.json"},{"revision":"3fada45b6fe199432d0c716cc6f64e82","url":"agenda/index.html"},{"revision":"316dc014fcf7ed8f1e6955844bc400f3","url":"_nuxt/xIx_q3WF.js"},{"revision":"c225ec00e88f7b566d4054e35dcf4d59","url":"_nuxt/xC6pLgYx.js"},{"revision":"9d1c130304249ffb9748f91ef429605d","url":"_nuxt/x2cdHqvk.js"},{"revision":"3f44ccb4108397220bff07f752266515","url":"_nuxt/vmoqApFq.js"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"daffd2785af85788f50a8270e7b8140a","url":"_nuxt/vBGSatDK.js"},{"revision":"369a13493f795cdc835586b01d582a1f","url":"_nuxt/useHolidays.CKDun-Df.css"},{"revision":"bbec79e5583859b9655e6bd76426722c","url":"_nuxt/sugestoes.worker-CFb5SVC2.js"},{"revision":"11a7fbf8ad9d0a846c012e7c937cc7e9","url":"_nuxt/solicitar._ehbK0Xg.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"1241bb1feb900287ccb14310328a22c3","url":"_nuxt/settings.BXvx61R5.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"95df1e3ed7bb77f9b82ee5ef2ec3a945","url":"_nuxt/recentes.Boz8l2j6.css"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"4d75b794ebe75ae92116f8793f4d2526","url":"_nuxt/o0KId3nf.js"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"aa61533f2a29387ba2341e2cba4b3ae4","url":"_nuxt/navegar.CcnZmLym.css"},{"revision":"38b7f0b38a102e1b524086132952642c","url":"_nuxt/menu.B8Zv1MPp.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"e286bca3632779019297573e89ebc66c","url":"_nuxt/lc_gB_4v.js"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"0ec9bcd196823e46523696b1ccc4eb61","url":"_nuxt/jY6tiCXp.js"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"612ef4e07d3d55ddc82a28d2e62e105b","url":"_nuxt/index.BsKMkQK8.css"},{"revision":"07b76dbe7cb25381c5a6c0cbad4fdabe","url":"_nuxt/index.Bp-q4RrK.css"},{"revision":"b213e86de89b4d60992ddaa12d99aadd","url":"_nuxt/index.BVnlTXVf.css"},{"revision":"b6d7c788382dd69ae94f04edb59b8b60","url":"_nuxt/hFTa7Ss6.js"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"e40fa705edf2d96cda763ee64f032a17","url":"_nuxt/fkO7h6gA.js"},{"revision":"86ce05391455d4958a4c542a68bb2c23","url":"_nuxt/eventos.CPbUpmG_.css"},{"revision":"33f5b22f165265f6108e72a020a83c49","url":"_nuxt/entry.C4GxIwhk.css"},{"revision":"3ea575dcfd14d89d01a2f70d98699e94","url":"_nuxt/e3n7oh83.js"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"900ef03dde1cf8cf40b23f5cad80a360","url":"_nuxt/calendar.4YSbG8xb.css"},{"revision":"325e12c62a5a4595aff4809fe00518ae","url":"_nuxt/calendar-print.Bm9BqBkm.css"},{"revision":"a23290058c789b908cd29e28493a2627","url":"_nuxt/ampla.BdiKVozZ.css"},{"revision":"d81b9acdd06e3b4f2630697955077ea8","url":"_nuxt/agenda.BuOyYIVx.css"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"3afadbec8f2c5dd3525f9fc79787613c","url":"_nuxt/XGw4VT9n.js"},{"revision":"2d6075d11c5c91824c684c09cdf68ce1","url":"_nuxt/Oy8U1KJc.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"1a39b1525cbcba64196709658123d0ad","url":"_nuxt/Dsq9KZO8.js"},{"revision":"1a843ca4e805ded4338bcb97e4bea9e5","url":"_nuxt/DnT_ZL11.js"},{"revision":"6e2baf709fd5436745f1b39c07bc6754","url":"_nuxt/Dlq4tOQN.js"},{"revision":"d1874d6702c316a88c33dc5b3616811d","url":"_nuxt/DlPGSJCS.js"},{"revision":"3842ee7fb1c582d88a13b11470b2d3a1","url":"_nuxt/DVgFYEdT.js"},{"revision":"710b881395a257ca6a289309cc07fb28","url":"_nuxt/DR-Kyuxm.js"},{"revision":"3e62a8cc2be81bd7f9c3ad30effd6609","url":"_nuxt/DQYbMoyY.js"},{"revision":"89dc659da71728161596ed42834fb40f","url":"_nuxt/DNa3VveV.js"},{"revision":"323605c5977b71b41b944a7dd90e082d","url":"_nuxt/DM55_-3g.js"},{"revision":"fc0e06775d394a0a7c6bc4670c75c845","url":"_nuxt/DJKeF2XY.js"},{"revision":"970c8d10c9a30ba25e7f412ccada6ec5","url":"_nuxt/DGYZwM2y.js"},{"revision":"ec58d9db720ae3e21bb5698f950fadec","url":"_nuxt/DC_1ZEff.js"},{"revision":"839b1b6083f9b25fd239ecf0db52450f","url":"_nuxt/D3YvHE9Z.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"e4dba879920eb37e424a4275e895efb7","url":"_nuxt/CsB5jwLz.js"},{"revision":"21b87216d763ec34c2268b90eb2e9a38","url":"_nuxt/CopOnUI2.js"},{"revision":"b1e55564d11fc78c02454c3a021c413d","url":"_nuxt/CnSTpY0B.js"},{"revision":"9ca2ab49a16fdff3f7f5fb98d5a0f280","url":"_nuxt/CmM6Oe2b.js"},{"revision":"a9b049988f5d3d9dd9d85ad4feb57763","url":"_nuxt/Cm8hBwEZ.js"},{"revision":"a45187afa2340a51c386388b17f034ca","url":"_nuxt/CaXv5JBl.js"},{"revision":"1910e0dcdeb0bc49616925c83de13c3f","url":"_nuxt/CQRrbzCP.js"},{"revision":"9b1945a8f98c47247df19e3e5ce739c2","url":"_nuxt/CNSsPXUm.js"},{"revision":"fc4dc83ac59bf98a4d13ee59c8214347","url":"_nuxt/CL0IjbRz.js"},{"revision":"8046a825b5683d5315f705034f18ef84","url":"_nuxt/CJxd2UYi.js"},{"revision":"7e91ea8d67e8c75639b741e2495fde1f","url":"_nuxt/CJ4uMcbX.js"},{"revision":"656fbf5fdb8021bf7172529904b53e8e","url":"_nuxt/CEvB2iih.js"},{"revision":"030c2c8a666e4855a0cb51478464357b","url":"_nuxt/CDePHKXN.js"},{"revision":"55c5845d3e8342aca1ee5c87afe29b41","url":"_nuxt/C7ojOXI2.js"},{"revision":"d1edb6801b30fdfc5ad9a0ba773991b8","url":"_nuxt/Byes2ofu.js"},{"revision":"a369ba81488bf3b99a3ed6f7c6eb3454","url":"_nuxt/BvhJ_QKf.js"},{"revision":"81e82134f4617186f8a04eb39dbd16ec","url":"_nuxt/BplrFsRd.js"},{"revision":"3bbc7549435bfcb31d7bd69609dc4fc3","url":"_nuxt/BlXYvfMd.js"},{"revision":"8d87d986b156c714affc099eb6d6f32a","url":"_nuxt/Bk-zPBlD.js"},{"revision":"286e0cad1ba06f3d96a41517abd8ae2c","url":"_nuxt/B_JzlDLz.js"},{"revision":"f8122eaa2507f9b2f7561a8d67462e48","url":"_nuxt/BUHjccwz.js"},{"revision":"b5586ceaece8a5a3499be2f590e8b32d","url":"_nuxt/2KVOsojZ.js"},{"revision":"f1567c884ec1b04578f15aeeebae0fa6","url":"_nuxt/builds/latest.json"},{"revision":"7f84b86fceec3e2c7c288026bfd60910","url":"_nuxt/builds/meta/48a1f3bf-4521-4591-8ac0-4869e205e9b4.json"},{"revision":"39e0e9544763cb88c7aaa313c0ca7c21","url":"500/index.html"},{"revision":"1ac83149aca818dd37a2d0cb18c17653","url":"404/index.html"},{"revision":"1ac83149aca818dd37a2d0cb18c17653","url":"200/index.html"}] || []);
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
