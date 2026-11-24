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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"41f7c558e145fa742c3afc5c9a8c6748","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"41f7c558e145fa742c3afc5c9a8c6748","url":"404.html"},{"revision":"41f7c558e145fa742c3afc5c9a8c6748","url":"200.html"},{"revision":"ebdafa284e2375644e9357c6a9a90a08","url":"sobre/index.html"},{"revision":"fc732353f5474701a4fb6692234e6ce4","url":"settings/index.html"},{"revision":"0d82d6b677be19a8ea25bbc83588df2d","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"2b01f57852a45aabafb7d0a375423778","url":"relatorio/index.html"},{"revision":"0d82d6b677be19a8ea25bbc83588df2d","url":"records/index.html"},{"revision":"0d82d6b677be19a8ea25bbc83588df2d","url":"recentes/index.html"},{"revision":"ebdafa284e2375644e9357c6a9a90a08","url":"perfil/index.html"},{"revision":"ebd9bc8c6a6857c12aa4a5ed7272e726","url":"pages/index.html"},{"revision":"ebdafa284e2375644e9357c6a9a90a08","url":"navegar/index.html"},{"revision":"ebd9bc8c6a6857c12aa4a5ed7272e726","url":"login/index.html"},{"revision":"2b01f57852a45aabafb7d0a375423778","url":"lista/index.html"},{"revision":"2b01f57852a45aabafb7d0a375423778","url":"lista/edit/index.html"},{"revision":"41f7c558e145fa742c3afc5c9a8c6748","url":"lista/calendar-print/index.html"},{"revision":"2b01f57852a45aabafb7d0a375423778","url":"lista/calendar/index.html"},{"revision":"ebd9bc8c6a6857c12aa4a5ed7272e726","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"dbb3e8573b59e2c645501148585fe8bd","url":"js/sw/firebase.js"},{"revision":"5f743225aa84711433cdd3880dbf51d4","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"2808538d6ebb922a6fff3e7e8c357541","url":"js/sw/vendor/dexie.js"},{"revision":"c2eba1515364b627c4f3d5eb6a4bee5b","url":"js/sw/vendor/workbox/workbox-sw.js"},{"revision":"d72bef0e706a8b25012dfa8aa1e4dfff","url":"js/sw/vendor/workbox/workbox-strategies.prod.js"},{"revision":"90d3aeeedbf6f25853c480d92bc51839","url":"js/sw/vendor/workbox/workbox-routing.prod.js"},{"revision":"24c50c33b7c66d7152d4ebae0ac8bd31","url":"js/sw/vendor/workbox/workbox-precaching.prod.js"},{"revision":"2c14e6d1a14b7b1db30586e38ff7a7ae","url":"js/sw/vendor/workbox/workbox-navigation-preload.prod.js"},{"revision":"0e7ae639b709c2e7c22abb64c359f85c","url":"js/sw/vendor/workbox/workbox-expiration.prod.js"},{"revision":"7d66f77f1d0ff9348205a245c75cc6e3","url":"js/sw/vendor/workbox/workbox-core.prod.js"},{"revision":"c1164a2c6ee0dbe4099f435a008a7d00","url":"js/sw/vendor/workbox/workbox-cacheable-response.prod.js"},{"revision":"e640131b6725841102014e560e21d647","url":"js/sw/vendor/firebase/firebase-messaging-compat.js"},{"revision":"c9a629d733922bfe5a271fb7442e7d2d","url":"js/sw/vendor/firebase/firebase-app-compat.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"2b01f57852a45aabafb7d0a375423778","url":"hinos/index.html"},{"revision":"2b01f57852a45aabafb7d0a375423778","url":"forms/view/index.html"},{"revision":"41f7c558e145fa742c3afc5c9a8c6748","url":"forms/manutencao/index.html"},{"revision":"41f7c558e145fa742c3afc5c9a8c6748","url":"forms/levantamento_preventiva/index.html"},{"revision":"2b01f57852a45aabafb7d0a375423778","url":"forms/contato/index.html"},{"revision":"2b01f57852a45aabafb7d0a375423778","url":"forgot-password/index.html"},{"revision":"ebdafa284e2375644e9357c6a9a90a08","url":"eventos/index.html"},{"revision":"2b01f57852a45aabafb7d0a375423778","url":"evento/index.html"},{"revision":"41f7c558e145fa742c3afc5c9a8c6748","url":"evento/solicitar/index.html"},{"revision":"ebdafa284e2375644e9357c6a9a90a08","url":"agenda/index.html"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"10c8c205d125c8f5302137f810a76f5f","url":"_nuxt/vPdcz2K-.js"},{"revision":"3d9aad04796ee8f3d3e3c63d41ed354f","url":"_nuxt/useHolidays.Cnq2fMW2.css"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"e16fe871f60ebca36f1b2fd2b8bdfed6","url":"_nuxt/settings.D81KzNVB.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"ded8f4d1879b8e333b1acc6d5566cdbd","url":"_nuxt/recentes.BkrU-6cZ.css"},{"revision":"aa291c60d773c2711425fcde7cdeddb8","url":"_nuxt/qL1vqFve.js"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"824b1d7761a285e7b1cbaf771eae182f","url":"_nuxt/navegar.DXE9DLXy.css"},{"revision":"38b7f0b38a102e1b524086132952642c","url":"_nuxt/menu.B8Zv1MPp.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"2a0e41f635cc3844a8c2830826ae3beb","url":"_nuxt/index.xA83gVRs.css"},{"revision":"b8225ff6e280a22a007bfb59c39ed457","url":"_nuxt/index.Cu1XzCbo.css"},{"revision":"5d9d6a5378fd89b0e2c3c82a3262ab33","url":"_nuxt/index.ChW9PT6h.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"2b214c846899444a69c59b290c93751c","url":"_nuxt/eventos.CXhhCs06.css"},{"revision":"3a1cea3743d4b7eb96f697e56a56c44f","url":"_nuxt/entry.DuAPpwJ6.css"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"6165034fc70c53b8d70ccd6c59f0836d","url":"_nuxt/cxhLn77k.js"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"77cd79ca97576a20c013cdd7e2502be3","url":"_nuxt/calendar.u9Y1HfoX.css"},{"revision":"325e12c62a5a4595aff4809fe00518ae","url":"_nuxt/calendar-print.Bm9BqBkm.css"},{"revision":"9e50171d5f02c103b125b3721a58aad9","url":"_nuxt/alwObQ1N.js"},{"revision":"ccf9bcbed9933107a121b8441d8a8370","url":"_nuxt/agenda.B1qY6oE2.css"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"480137f7e5a55b63e908769ed5568f27","url":"_nuxt/ZdKJlbTP.js"},{"revision":"0734e81aabc9c33b91065a5bfc898caf","url":"_nuxt/V8c-cHbl.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"a1fcce338611949c31223916c99a4796","url":"_nuxt/IAySTqdp.js"},{"revision":"2c56a16a0ba015481fbeeecb2a9f33f9","url":"_nuxt/I0jWL4nM.js"},{"revision":"c81d6abbbd3154a51b4f329f2e6ba671","url":"_nuxt/DzVFv0M-.js"},{"revision":"cf345b9cd5f09e315a17dc6f0a18c71e","url":"_nuxt/DtH2mVgu.js"},{"revision":"44b12567f61e8ada5df03c9eb39cf27b","url":"_nuxt/DmS5Ppzz.js"},{"revision":"f8b56aa720edfa93cade8e36518729a9","url":"_nuxt/DhXwL9HD.js"},{"revision":"cd557cedbded676f7d1198874b12f1f0","url":"_nuxt/Df0_t2gb.js"},{"revision":"5ee8fa1b1a4c3e33b83600f245c9a260","url":"_nuxt/DPj3QKfz.js"},{"revision":"29e43a4b46e4e0e5ad7599f337a2f041","url":"_nuxt/DMNn8zoj.js"},{"revision":"9fc00cfc5d08b6bc560a7499fc796c40","url":"_nuxt/DHgR_a5F.js"},{"revision":"883b3c6fed6e4732ed0fdac8194a4bc9","url":"_nuxt/DHQJy5nc.js"},{"revision":"f1242b0400b207e52fb136dea059f58e","url":"_nuxt/DEru8Vvp.js"},{"revision":"bc5e00c69ca5773b354dbcf5d4d9e3f8","url":"_nuxt/DAIEsSFP.js"},{"revision":"16f39c40283d974b7664d1512b43a6e8","url":"_nuxt/D9GL7HdY.js"},{"revision":"1e56eedf1097942e187e82a9c66c0f4c","url":"_nuxt/D8LTmqgX.js"},{"revision":"9f3e644db0b6514016fff6445af4821b","url":"_nuxt/D7E9hSYU.js"},{"revision":"a0e6306dc69ccb99e54f08725d9edc8a","url":"_nuxt/D2lqY-Tx.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"864b8f9c2ef0874155a33187c8797c3d","url":"_nuxt/CwnH9g74.js"},{"revision":"9509658275189da3c6e87b8c3e43e7b8","url":"_nuxt/CuIfS3JY.js"},{"revision":"3c178d2051e299ae2a5167277ee6e1c9","url":"_nuxt/CmiwA8Yj.js"},{"revision":"93f05f710b1a45d793e494d0dee56d07","url":"_nuxt/CgdlcMlw.js"},{"revision":"9fbd0e4f1b509c1d40b2e7c084c18412","url":"_nuxt/CfNchSYH.js"},{"revision":"11c1bb325b9d43f4ee0f32d3f77832b2","url":"_nuxt/CPSo3P98.js"},{"revision":"ec75702c9ea1278f4292e3647cea2ba8","url":"_nuxt/CO6BXOn_.js"},{"revision":"e7454437998b4815e4be53ece4a7108d","url":"_nuxt/CI3yTE0Y.js"},{"revision":"d6d15691d2ab2f769e26d8314a2d3772","url":"_nuxt/CFLy7CDF.js"},{"revision":"d868182f77e957c859b411e2ff9b1e4f","url":"_nuxt/CDRm_ZYD.js"},{"revision":"88aad8ca503f3aa1762398dd78c1ddb2","url":"_nuxt/CD4vwNru.js"},{"revision":"2bfb736b006ec5b62ba61556f6c20892","url":"_nuxt/C94jpPRR.js"},{"revision":"513d96edc93ef81c75b037821c12972f","url":"_nuxt/C4HRAuY2.js"},{"revision":"54787fab22b475d4e991ab5f4c225cf7","url":"_nuxt/C-z2bJ7J.js"},{"revision":"84ceff22f07ee22c5e596e3469df3aab","url":"_nuxt/BxDXtv_l.js"},{"revision":"1c39429da59be9fcdfe6eb3f8ed974c4","url":"_nuxt/BvkK3Yqz.js"},{"revision":"cd9de20907b59f6141c7dd7c34e4c00e","url":"_nuxt/Bt4OE2JO.js"},{"revision":"4fdf443488a3b2ed69f37178864842cf","url":"_nuxt/BqamoZ9N.js"},{"revision":"53e20a11e365987102dc33a8e4f68159","url":"_nuxt/BmngsHpz.js"},{"revision":"2ba31f50036c376eeafe4947837ec0db","url":"_nuxt/Bd3s5O_m.js"},{"revision":"b37910fa631da011b3254d743a6c647c","url":"_nuxt/3f4Cx3xY.js"},{"revision":"55722fb201c9aeb8938f9a1046cacc1c","url":"_nuxt/08xyBGNb.js"},{"revision":"fdc0200b01b576ff9099080bacddabe8","url":"_nuxt/0218iQhH.js"},{"revision":"a500a4c8c4105c6b6af7178c01546738","url":"_nuxt/builds/latest.json"},{"revision":"053c8c2881ae193f865bdd811e7a8d1b","url":"_nuxt/builds/meta/fec20c66-997d-492f-ae0e-ce55c8f12b78.json"},{"revision":"ebd9bc8c6a6857c12aa4a5ed7272e726","url":"500/index.html"},{"revision":"e62772b59c03165b1486f925f915fc63","url":"404/index.html"},{"revision":"e62772b59c03165b1486f925f915fc63","url":"200/index.html"}] || []);
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
