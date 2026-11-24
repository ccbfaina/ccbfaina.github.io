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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"2280649b3daed832ca88100e3808a09a","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"2280649b3daed832ca88100e3808a09a","url":"404.html"},{"revision":"2280649b3daed832ca88100e3808a09a","url":"200.html"},{"revision":"142d14b4d6e73bd7798d0c084ffa1402","url":"sobre/index.html"},{"revision":"05dde7b585446416e17a1da17d0715a2","url":"settings/index.html"},{"revision":"05dde7b585446416e17a1da17d0715a2","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"05dde7b585446416e17a1da17d0715a2","url":"relatorio/index.html"},{"revision":"9ab88d36d97c7ef3fb8f4b534b7a615f","url":"records/index.html"},{"revision":"9ab88d36d97c7ef3fb8f4b534b7a615f","url":"recentes/index.html"},{"revision":"9ab88d36d97c7ef3fb8f4b534b7a615f","url":"perfil/index.html"},{"revision":"142d14b4d6e73bd7798d0c084ffa1402","url":"pages/index.html"},{"revision":"9ab88d36d97c7ef3fb8f4b534b7a615f","url":"navegar/index.html"},{"revision":"dcdf22cb5f82625535de0b085726e569","url":"login/index.html"},{"revision":"f2a4ce84863c542960265012b335c1c5","url":"lista/index.html"},{"revision":"05dde7b585446416e17a1da17d0715a2","url":"lista/edit/index.html"},{"revision":"f2a4ce84863c542960265012b335c1c5","url":"lista/calendar-print/index.html"},{"revision":"f2a4ce84863c542960265012b335c1c5","url":"lista/calendar/index.html"},{"revision":"dcdf22cb5f82625535de0b085726e569","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"dbb3e8573b59e2c645501148585fe8bd","url":"js/sw/firebase.js"},{"revision":"5f743225aa84711433cdd3880dbf51d4","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"2808538d6ebb922a6fff3e7e8c357541","url":"js/sw/vendor/dexie.js"},{"revision":"c2eba1515364b627c4f3d5eb6a4bee5b","url":"js/sw/vendor/workbox/workbox-sw.js"},{"revision":"d72bef0e706a8b25012dfa8aa1e4dfff","url":"js/sw/vendor/workbox/workbox-strategies.prod.js"},{"revision":"90d3aeeedbf6f25853c480d92bc51839","url":"js/sw/vendor/workbox/workbox-routing.prod.js"},{"revision":"24c50c33b7c66d7152d4ebae0ac8bd31","url":"js/sw/vendor/workbox/workbox-precaching.prod.js"},{"revision":"2c14e6d1a14b7b1db30586e38ff7a7ae","url":"js/sw/vendor/workbox/workbox-navigation-preload.prod.js"},{"revision":"0e7ae639b709c2e7c22abb64c359f85c","url":"js/sw/vendor/workbox/workbox-expiration.prod.js"},{"revision":"7d66f77f1d0ff9348205a245c75cc6e3","url":"js/sw/vendor/workbox/workbox-core.prod.js"},{"revision":"c1164a2c6ee0dbe4099f435a008a7d00","url":"js/sw/vendor/workbox/workbox-cacheable-response.prod.js"},{"revision":"e640131b6725841102014e560e21d647","url":"js/sw/vendor/firebase/firebase-messaging-compat.js"},{"revision":"c9a629d733922bfe5a271fb7442e7d2d","url":"js/sw/vendor/firebase/firebase-app-compat.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"05dde7b585446416e17a1da17d0715a2","url":"hinos/index.html"},{"revision":"05dde7b585446416e17a1da17d0715a2","url":"forms/view/index.html"},{"revision":"f2a4ce84863c542960265012b335c1c5","url":"forms/manutencao/index.html"},{"revision":"2280649b3daed832ca88100e3808a09a","url":"forms/levantamento_preventiva/index.html"},{"revision":"f2a4ce84863c542960265012b335c1c5","url":"forms/contato/index.html"},{"revision":"f2a4ce84863c542960265012b335c1c5","url":"forgot-password/index.html"},{"revision":"9ab88d36d97c7ef3fb8f4b534b7a615f","url":"eventos/index.html"},{"revision":"f2a4ce84863c542960265012b335c1c5","url":"evento/index.html"},{"revision":"f2a4ce84863c542960265012b335c1c5","url":"evento/solicitar/index.html"},{"revision":"142d14b4d6e73bd7798d0c084ffa1402","url":"agenda/index.html"},{"revision":"7f5d64ebf9f50310968b75a9cf143a88","url":"_nuxt/yf_hxkrc.js"},{"revision":"f88c9da90e51169444ba93a33890971d","url":"_nuxt/wIiwX9bn.js"},{"revision":"291c369b0d9ffe04d68cdead57cbbbb4","url":"_nuxt/vqSry0qM.js"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"a0df597648b76eb3edbd9cbeaa0f3ed0","url":"_nuxt/vTcT6LEi.js"},{"revision":"00fd5e55140f968fddc650ddaaa2958e","url":"_nuxt/vSgD7e9D.js"},{"revision":"3d9aad04796ee8f3d3e3c63d41ed354f","url":"_nuxt/useHolidays.Cnq2fMW2.css"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"1241bb1feb900287ccb14310328a22c3","url":"_nuxt/settings.BXvx61R5.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"b12620256d14e897a1be98f9d3ad57cd","url":"_nuxt/recentes.YPfqBw-P.css"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"058a6aff9836eccbb3d348658e51df59","url":"_nuxt/navegar.BzXhEhIc.css"},{"revision":"38b7f0b38a102e1b524086132952642c","url":"_nuxt/menu.B8Zv1MPp.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"610fdf4f6b08195db08b5969cfc8aa81","url":"_nuxt/jTKZao4t.js"},{"revision":"2a0e41f635cc3844a8c2830826ae3beb","url":"_nuxt/index.xA83gVRs.css"},{"revision":"20044ccd19f6775d1639e26df4052677","url":"_nuxt/index.DKEm0VN6.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"b81afd01bed465a8150707d1e035982d","url":"_nuxt/index.BbG8S8cs.css"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"a2d5898b76b8daf3e03cf92c7062d4e1","url":"_nuxt/eventos.DSkMyjd6.css"},{"revision":"3a1cea3743d4b7eb96f697e56a56c44f","url":"_nuxt/entry.DuAPpwJ6.css"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"900ef03dde1cf8cf40b23f5cad80a360","url":"_nuxt/calendar.4YSbG8xb.css"},{"revision":"325e12c62a5a4595aff4809fe00518ae","url":"_nuxt/calendar-print.Bm9BqBkm.css"},{"revision":"ccf9bcbed9933107a121b8441d8a8370","url":"_nuxt/agenda.B1qY6oE2.css"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"53e750eea97424d704515c4c46f6cdce","url":"_nuxt/KWxJBLQo.js"},{"revision":"f9cbe4d04cb33c1347ead44134065038","url":"_nuxt/GNs7hY57.js"},{"revision":"a503d8cc8d757a8bdf0c1c8e9b706bcb","url":"_nuxt/DuVZWX_p.js"},{"revision":"0569e511e014eda4cec2bed9f1462fc6","url":"_nuxt/DtAbR-OX.js"},{"revision":"4a3a2d8a22a1248b81498873ddf0cb66","url":"_nuxt/DrtIS7zt.js"},{"revision":"343ceb66596d79444085e838ddf1a8e5","url":"_nuxt/DlNP6hLB.js"},{"revision":"1f7eab7a96422d458999c9907651e896","url":"_nuxt/DdrNCnEq.js"},{"revision":"21c1f1c091db6020497a50203a39fcd1","url":"_nuxt/DXHflJXp.js"},{"revision":"3d367c152863afaf0cdf5d1644eb9242","url":"_nuxt/DSYnBeh2.js"},{"revision":"3c1e33fe04e7e15551d137ad5eeabc12","url":"_nuxt/DJB11Tlx.js"},{"revision":"484254b1f83f20f8b6c4dddc62dee26d","url":"_nuxt/D8ZCXtHL.js"},{"revision":"fff2d2348ef2bbac58cbc7b84eadd69f","url":"_nuxt/D3XPbbQY.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"9509658275189da3c6e87b8c3e43e7b8","url":"_nuxt/CuIfS3JY.js"},{"revision":"d735ae97531007396330eff030af476c","url":"_nuxt/CjKZM7H9.js"},{"revision":"1eb09a68ee866d4fedb503d2f06de2c6","url":"_nuxt/CjAlZeiX.js"},{"revision":"054d07201f2c5b6b6cd7c3b967f53de9","url":"_nuxt/CgjtUYsj.js"},{"revision":"416e7700739ad8c9cd06a117e53dc478","url":"_nuxt/CganSvJX.js"},{"revision":"0e8b90dd72aff6135a74f01a2c8e5207","url":"_nuxt/CW4edhb2.js"},{"revision":"389242882ed363a0a5e3dc7dfce9fb89","url":"_nuxt/CK5n6HRC.js"},{"revision":"17e86dd55c4b4adfd9eb188dc5799210","url":"_nuxt/CFJg3Pny.js"},{"revision":"e808dbe60badc051d1e624e80a15f488","url":"_nuxt/CE0ALuqI.js"},{"revision":"cdf0eba0de4eb2f34b38e18859503fd7","url":"_nuxt/C8g2eQKT.js"},{"revision":"4d60f5094df1f26c2fab9a9d2f0542b1","url":"_nuxt/C7PA9VHh.js"},{"revision":"291305473623af29a1d25b84ecdb742e","url":"_nuxt/C613Js2t.js"},{"revision":"d2237cff07b53903891221ae10de849d","url":"_nuxt/C-wnAtyT.js"},{"revision":"69c1168504a2b12eefda65acfb83ccad","url":"_nuxt/C-3nYT7b.js"},{"revision":"b420f9612de63264557984361b1e7a39","url":"_nuxt/BwsCY8sC.js"},{"revision":"868f752034a364363eb205785ca16b42","url":"_nuxt/BnGFY3q5.js"},{"revision":"d862a05e3484f131cb864e51e7027147","url":"_nuxt/BnBTguhq.js"},{"revision":"3496dd770f1210738762d24cc9293f4c","url":"_nuxt/BhSSinoV.js"},{"revision":"ba4037cd4577399c4144ac42dd6eb5f0","url":"_nuxt/BdY7KV5B.js"},{"revision":"0e572f53570490f17fb22b68c9e23f6e","url":"_nuxt/Bd2eVrjM.js"},{"revision":"108fca6e4b383a8b58f733091de103df","url":"_nuxt/Ba2srERe.js"},{"revision":"b6d7286dbd85da9a313f1d0772a5cc4f","url":"_nuxt/BZxL_pY1.js"},{"revision":"077465b603ed679aec90656453f5c722","url":"_nuxt/BVSZwDjM.js"},{"revision":"797e0c53d78c303100645e5c20cb9e0c","url":"_nuxt/BRQD3qTG.js"},{"revision":"35791b73c1e4fe19338fdaf0393c42fd","url":"_nuxt/BLbqmj5R.js"},{"revision":"bf7b682818b951a7d7080a5624e23041","url":"_nuxt/BDeLcrUK.js"},{"revision":"688b971fa441215016c55138b23e62a8","url":"_nuxt/B0AV6fOm.js"},{"revision":"f11ef60787b43a6c022eedcbfb8d6267","url":"_nuxt/7dBm0Nrt.js"},{"revision":"1c010fa2d243fabe1bdf6a953216ffe7","url":"_nuxt/builds/latest.json"},{"revision":"39c2c8e4d932243c68ae70d65879378f","url":"_nuxt/builds/meta/b1b02394-cfb1-47ed-b36f-9a10ef1a1d4a.json"},{"revision":"65290ffb4f1b7b8f9d95b97d51e13518","url":"500/index.html"},{"revision":"65290ffb4f1b7b8f9d95b97d51e13518","url":"404/index.html"},{"revision":"9e19a1a5fac38d4d1820395153f8844b","url":"200/index.html"}] || []);
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
