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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"25ce1b80925229c0cd7be1c3ac1a63c6","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"25ce1b80925229c0cd7be1c3ac1a63c6","url":"404.html"},{"revision":"25ce1b80925229c0cd7be1c3ac1a63c6","url":"200.html"},{"revision":"aa24647b96f02d6d689599e6799034a4","url":"sugestoes/nomes.json"},{"revision":"128ac0418871d045fabcdf6e31d5fc77","url":"sobre/index.html"},{"revision":"2740dcb88c540b53d36c31983f22557a","url":"settings/index.html"},{"revision":"2740dcb88c540b53d36c31983f22557a","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"b4d662f6aa0aef16f797ed7651d9e46c","url":"relatorio/index.html"},{"revision":"2740dcb88c540b53d36c31983f22557a","url":"records/index.html"},{"revision":"2740dcb88c540b53d36c31983f22557a","url":"recentes/index.html"},{"revision":"2740dcb88c540b53d36c31983f22557a","url":"perfil/index.html"},{"revision":"128ac0418871d045fabcdf6e31d5fc77","url":"pages/index.html"},{"revision":"2740dcb88c540b53d36c31983f22557a","url":"navegar/index.html"},{"revision":"128ac0418871d045fabcdf6e31d5fc77","url":"login/index.html"},{"revision":"b4d662f6aa0aef16f797ed7651d9e46c","url":"lista/index.html"},{"revision":"b4d662f6aa0aef16f797ed7651d9e46c","url":"lista/edit/index.html"},{"revision":"25ce1b80925229c0cd7be1c3ac1a63c6","url":"lista/calendar-print/index.html"},{"revision":"b4d662f6aa0aef16f797ed7651d9e46c","url":"lista/calendar/index.html"},{"revision":"128ac0418871d045fabcdf6e31d5fc77","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"dbb3e8573b59e2c645501148585fe8bd","url":"js/sw/firebase.js"},{"revision":"2cc32c31d1de207c4268a72a2198311e","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"2808538d6ebb922a6fff3e7e8c357541","url":"js/sw/vendor/dexie.js"},{"revision":"c2eba1515364b627c4f3d5eb6a4bee5b","url":"js/sw/vendor/workbox/workbox-sw.js"},{"revision":"d72bef0e706a8b25012dfa8aa1e4dfff","url":"js/sw/vendor/workbox/workbox-strategies.prod.js"},{"revision":"90d3aeeedbf6f25853c480d92bc51839","url":"js/sw/vendor/workbox/workbox-routing.prod.js"},{"revision":"24c50c33b7c66d7152d4ebae0ac8bd31","url":"js/sw/vendor/workbox/workbox-precaching.prod.js"},{"revision":"2c14e6d1a14b7b1db30586e38ff7a7ae","url":"js/sw/vendor/workbox/workbox-navigation-preload.prod.js"},{"revision":"0e7ae639b709c2e7c22abb64c359f85c","url":"js/sw/vendor/workbox/workbox-expiration.prod.js"},{"revision":"7d66f77f1d0ff9348205a245c75cc6e3","url":"js/sw/vendor/workbox/workbox-core.prod.js"},{"revision":"c1164a2c6ee0dbe4099f435a008a7d00","url":"js/sw/vendor/workbox/workbox-cacheable-response.prod.js"},{"revision":"e640131b6725841102014e560e21d647","url":"js/sw/vendor/firebase/firebase-messaging-compat.js"},{"revision":"c9a629d733922bfe5a271fb7442e7d2d","url":"js/sw/vendor/firebase/firebase-app-compat.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"b4d662f6aa0aef16f797ed7651d9e46c","url":"hinos/index.html"},{"revision":"b4d662f6aa0aef16f797ed7651d9e46c","url":"forms/view/index.html"},{"revision":"25ce1b80925229c0cd7be1c3ac1a63c6","url":"forms/manutencao/index.html"},{"revision":"25ce1b80925229c0cd7be1c3ac1a63c6","url":"forms/levantamento_preventiva/index.html"},{"revision":"b4d662f6aa0aef16f797ed7651d9e46c","url":"forms/contato/index.html"},{"revision":"25ce1b80925229c0cd7be1c3ac1a63c6","url":"forgot-password/index.html"},{"revision":"2740dcb88c540b53d36c31983f22557a","url":"eventos/index.html"},{"revision":"b4d662f6aa0aef16f797ed7651d9e46c","url":"evento/index.html"},{"revision":"25ce1b80925229c0cd7be1c3ac1a63c6","url":"evento/solicitar/index.html"},{"revision":"5cafd7bb752521a507d7c87141a2900f","url":"data/tags.json"},{"revision":"6b714752ddf9accc46258f481d2eb107","url":"data/tags-circulares.json"},{"revision":"0c67f062d6c248fbad406549c816ea19","url":"data/relatorio.json"},{"revision":"416ef7202529463a618e35c6f3d32152","url":"data/ministerio.json"},{"revision":"196008493bb75371cbea968b2332aa9a","url":"data/metadata.json"},{"revision":"d15b4a22b3cb4b091954c2788282c3f1","url":"data/data.json"},{"revision":"128ac0418871d045fabcdf6e31d5fc77","url":"agenda/index.html"},{"revision":"1aec58b11c8cbab808de638002ac7bcd","url":"_nuxt/z2OT5DaD.js"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"369a13493f795cdc835586b01d582a1f","url":"_nuxt/useHolidays.CKDun-Df.css"},{"revision":"bbec79e5583859b9655e6bd76426722c","url":"_nuxt/sugestoes.worker-CFb5SVC2.js"},{"revision":"11a7fbf8ad9d0a846c012e7c937cc7e9","url":"_nuxt/solicitar._ehbK0Xg.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"1241bb1feb900287ccb14310328a22c3","url":"_nuxt/settings.BXvx61R5.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"95df1e3ed7bb77f9b82ee5ef2ec3a945","url":"_nuxt/recentes.Boz8l2j6.css"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"a9c7eefbbb4668bbb7168a99135b7bc7","url":"_nuxt/pJ2MOLz7.js"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"aa61533f2a29387ba2341e2cba4b3ae4","url":"_nuxt/navegar.CcnZmLym.css"},{"revision":"38b7f0b38a102e1b524086132952642c","url":"_nuxt/menu.B8Zv1MPp.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"f6094a12d8c18590b8ed6b65995146a3","url":"_nuxt/mSBfwWsq.js"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"612ef4e07d3d55ddc82a28d2e62e105b","url":"_nuxt/index.BsKMkQK8.css"},{"revision":"07b76dbe7cb25381c5a6c0cbad4fdabe","url":"_nuxt/index.Bp-q4RrK.css"},{"revision":"b213e86de89b4d60992ddaa12d99aadd","url":"_nuxt/index.BVnlTXVf.css"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"eb43b4804b90cc4f0cd250481f47c92c","url":"_nuxt/eventos.C3CAA-Oq.css"},{"revision":"53e71371a4fc535d3ef491c3fb0e1b67","url":"_nuxt/entry.CAlzyXVH.css"},{"revision":"3ea575dcfd14d89d01a2f70d98699e94","url":"_nuxt/e3n7oh83.js"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"d9bd2195aea82139e80f0e0c90c5c658","url":"_nuxt/cdJ8S4i1.js"},{"revision":"900ef03dde1cf8cf40b23f5cad80a360","url":"_nuxt/calendar.4YSbG8xb.css"},{"revision":"325e12c62a5a4595aff4809fe00518ae","url":"_nuxt/calendar-print.Bm9BqBkm.css"},{"revision":"7a47f108afaae5d8f989576f42f38a0f","url":"_nuxt/cZQBh0Vs.js"},{"revision":"a23290058c789b908cd29e28493a2627","url":"_nuxt/ampla.BdiKVozZ.css"},{"revision":"d81b9acdd06e3b4f2630697955077ea8","url":"_nuxt/agenda.BuOyYIVx.css"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"b380c8c6e0e2910bc8ef105c57015ea6","url":"_nuxt/OZn1FNYd.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"197e2f1f88c348390702f92e5eaa7b82","url":"_nuxt/Kt6d3KvX.js"},{"revision":"04bd7bf3ff4a2a50052445bdb6b78d76","url":"_nuxt/HM1bA2mV.js"},{"revision":"2f9ad9dab264ec8d5f8db5460e592cad","url":"_nuxt/DxoRWsvn.js"},{"revision":"2e96e643b8bfc4a8d2bef5cc8be1475e","url":"_nuxt/Dn6Dxxre.js"},{"revision":"6e2baf709fd5436745f1b39c07bc6754","url":"_nuxt/Dlq4tOQN.js"},{"revision":"bf38b99aebb327ff6ddf2f363dac5f5f","url":"_nuxt/DdG_rvga.js"},{"revision":"1be5759b118c504c98099240a1d917aa","url":"_nuxt/DY9MQFAO.js"},{"revision":"657e3276fea5d7f0dacd29d12a19958b","url":"_nuxt/DQmfhJT2.js"},{"revision":"25fff9e3e2343e767bac68b4d1a4994a","url":"_nuxt/DPsT279j.js"},{"revision":"5538c59290128bfad46ea775dc59100b","url":"_nuxt/DKuEcemX.js"},{"revision":"45383741897b2ee5cc3f6f653817fc7e","url":"_nuxt/DJA2SxWJ.js"},{"revision":"2a550705f199986145b61bb0cbd6ecff","url":"_nuxt/DIC_s9LU.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"d4b333bf7aac3063c4d475c211facaf1","url":"_nuxt/D-jMvh-m.js"},{"revision":"0b9cfbc85cf66890f9a8d1686f9131f6","url":"_nuxt/Cy-ge5vB.js"},{"revision":"6696b550776f9dc8d1a0f9600c13bef1","url":"_nuxt/CxtfuNPa.js"},{"revision":"28bcecdc849dae38a09819eb5025c924","url":"_nuxt/CpTkB9IN.js"},{"revision":"2d2ebd8611d4fb47ec4b5723e93866fd","url":"_nuxt/CnpmnW-O.js"},{"revision":"b428b606e90ad1e435a5bd62d5af6244","url":"_nuxt/ClXDPC_Y.js"},{"revision":"37212edb0b60b055abd161f40fa2b822","url":"_nuxt/Cjl2zr8y.js"},{"revision":"2bdccabd99a4e2b7711bf593d76bbce6","url":"_nuxt/CdAEXqZQ.js"},{"revision":"da6ac4722ae46af0b84b866d96b85329","url":"_nuxt/CZhAQCns.js"},{"revision":"5cbb5b9e6ba713bf0a6a9e22ca058fc9","url":"_nuxt/CSJ6IH_T.js"},{"revision":"81de6107c84396939ca180e7270dbe22","url":"_nuxt/CMX8jSlm.js"},{"revision":"78f58b55c20a4ecab1c6f0d643efc04f","url":"_nuxt/CIb37ZN-.js"},{"revision":"f4eb62bf0bf45c62a9451db25bf76b39","url":"_nuxt/C9ufjtrM.js"},{"revision":"874ec2a9917d6ecac73cfcf083e74f57","url":"_nuxt/C5vlYBED.js"},{"revision":"aec1a0a44eea5dcb1c60ef2f1f7f140a","url":"_nuxt/C3K-AplL.js"},{"revision":"25b1e2302c749e39d7822f48a714e2b4","url":"_nuxt/By0YmDaE.js"},{"revision":"6f720d10b2f876d3963e6cec1ddd5b4e","url":"_nuxt/BgH8vE1F.js"},{"revision":"1322e99bb2142ffa9f9d6a657fcf91de","url":"_nuxt/BdB4EOMz.js"},{"revision":"6c3f9235afeb52e880f91ce68172f571","url":"_nuxt/Bbdv9OU5.js"},{"revision":"19cc4d893e580f43b089b8db1a362cd6","url":"_nuxt/Bb2uysS7.js"},{"revision":"61b18a98ec4273e383945b6f53d4a80e","url":"_nuxt/BZmpX-5U.js"},{"revision":"7cf7f2f35c721d8190af3f210a617b07","url":"_nuxt/BYXBh57o.js"},{"revision":"df5215e3bb43f4d29aeb18891d746bca","url":"_nuxt/BRs9-0fX.js"},{"revision":"a66837f1dde545e1d460206c71dd09a6","url":"_nuxt/BOtEExbR.js"},{"revision":"407b74d989696e3067b818fd59f7d243","url":"_nuxt/BLePMbBD.js"},{"revision":"2a4cf264e867cb9ed15c33100837b6f0","url":"_nuxt/BK57fIr9.js"},{"revision":"25c31a7301fe43f9309f43f11445efd5","url":"_nuxt/B8pfFJiH.js"},{"revision":"4900ffd70dc744db38e8e1f2ede6c60a","url":"_nuxt/B75VOjM-.js"},{"revision":"386d7747dd73148346a66277cc674f6e","url":"_nuxt/85ilC6eU.js"},{"revision":"d012be4a7333275bfa2d2037d3d8e070","url":"_nuxt/builds/latest.json"},{"revision":"0019e42fc69f9399eeb8bdafea670092","url":"_nuxt/builds/meta/070095eb-7d9a-4a22-b898-a6f4864bd3d2.json"},{"revision":"007948a34fec4bfa43c517f966e7b906","url":"500/index.html"},{"revision":"007948a34fec4bfa43c517f966e7b906","url":"404/index.html"},{"revision":"007948a34fec4bfa43c517f966e7b906","url":"200/index.html"}] || []);
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
