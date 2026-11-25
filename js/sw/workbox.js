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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"29b766d3d110c8a57d7821578fc87b15","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"29b766d3d110c8a57d7821578fc87b15","url":"404.html"},{"revision":"29b766d3d110c8a57d7821578fc87b15","url":"200.html"},{"revision":"ef1cc4bd9c54dcd9f743e0829d4d5592","url":"sugestoes/regional.json"},{"revision":"aa24647b96f02d6d689599e6799034a4","url":"sugestoes/nomes.json"},{"revision":"694ad844333b4a7fa1f56f10b3c67d1d","url":"sobre/index.html"},{"revision":"5fd20a700d180908178a795f2fc00f4f","url":"settings/index.html"},{"revision":"5fd20a700d180908178a795f2fc00f4f","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"5fd20a700d180908178a795f2fc00f4f","url":"relatorio/index.html"},{"revision":"5fd20a700d180908178a795f2fc00f4f","url":"records/index.html"},{"revision":"5fd20a700d180908178a795f2fc00f4f","url":"recentes/index.html"},{"revision":"694ad844333b4a7fa1f56f10b3c67d1d","url":"perfil/index.html"},{"revision":"694ad844333b4a7fa1f56f10b3c67d1d","url":"pages/index.html"},{"revision":"5fd20a700d180908178a795f2fc00f4f","url":"navegar/index.html"},{"revision":"694ad844333b4a7fa1f56f10b3c67d1d","url":"login/index.html"},{"revision":"ef7a02036d5f38025c6bf5b0e225fcd3","url":"lista/index.html"},{"revision":"5fd20a700d180908178a795f2fc00f4f","url":"lista/edit/index.html"},{"revision":"ef7a02036d5f38025c6bf5b0e225fcd3","url":"lista/calendar-print/index.html"},{"revision":"ef7a02036d5f38025c6bf5b0e225fcd3","url":"lista/calendar/index.html"},{"revision":"a0a51aeed1dfff6efe969d640b5fbddd","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"dbb3e8573b59e2c645501148585fe8bd","url":"js/sw/firebase.js"},{"revision":"2cc32c31d1de207c4268a72a2198311e","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"2808538d6ebb922a6fff3e7e8c357541","url":"js/sw/vendor/dexie.js"},{"revision":"c2eba1515364b627c4f3d5eb6a4bee5b","url":"js/sw/vendor/workbox/workbox-sw.js"},{"revision":"d72bef0e706a8b25012dfa8aa1e4dfff","url":"js/sw/vendor/workbox/workbox-strategies.prod.js"},{"revision":"90d3aeeedbf6f25853c480d92bc51839","url":"js/sw/vendor/workbox/workbox-routing.prod.js"},{"revision":"24c50c33b7c66d7152d4ebae0ac8bd31","url":"js/sw/vendor/workbox/workbox-precaching.prod.js"},{"revision":"2c14e6d1a14b7b1db30586e38ff7a7ae","url":"js/sw/vendor/workbox/workbox-navigation-preload.prod.js"},{"revision":"0e7ae639b709c2e7c22abb64c359f85c","url":"js/sw/vendor/workbox/workbox-expiration.prod.js"},{"revision":"7d66f77f1d0ff9348205a245c75cc6e3","url":"js/sw/vendor/workbox/workbox-core.prod.js"},{"revision":"c1164a2c6ee0dbe4099f435a008a7d00","url":"js/sw/vendor/workbox/workbox-cacheable-response.prod.js"},{"revision":"e640131b6725841102014e560e21d647","url":"js/sw/vendor/firebase/firebase-messaging-compat.js"},{"revision":"c9a629d733922bfe5a271fb7442e7d2d","url":"js/sw/vendor/firebase/firebase-app-compat.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"ef7a02036d5f38025c6bf5b0e225fcd3","url":"hinos/index.html"},{"revision":"5fd20a700d180908178a795f2fc00f4f","url":"forms/view/index.html"},{"revision":"ef7a02036d5f38025c6bf5b0e225fcd3","url":"forms/manutencao/index.html"},{"revision":"29b766d3d110c8a57d7821578fc87b15","url":"forms/levantamento_preventiva/index.html"},{"revision":"ef7a02036d5f38025c6bf5b0e225fcd3","url":"forms/contato/index.html"},{"revision":"ef7a02036d5f38025c6bf5b0e225fcd3","url":"forgot-password/index.html"},{"revision":"694ad844333b4a7fa1f56f10b3c67d1d","url":"eventos/index.html"},{"revision":"ef7a02036d5f38025c6bf5b0e225fcd3","url":"evento/index.html"},{"revision":"ef7a02036d5f38025c6bf5b0e225fcd3","url":"evento/solicitar/index.html"},{"revision":"5cafd7bb752521a507d7c87141a2900f","url":"data/tags.json"},{"revision":"6b714752ddf9accc46258f481d2eb107","url":"data/tags-circulares.json"},{"revision":"0c67f062d6c248fbad406549c816ea19","url":"data/relatorio.json"},{"revision":"416ef7202529463a618e35c6f3d32152","url":"data/ministerio.json"},{"revision":"196008493bb75371cbea968b2332aa9a","url":"data/metadata.json"},{"revision":"d15b4a22b3cb4b091954c2788282c3f1","url":"data/data.json"},{"revision":"694ad844333b4a7fa1f56f10b3c67d1d","url":"agenda/index.html"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"369a13493f795cdc835586b01d582a1f","url":"_nuxt/useHolidays.CKDun-Df.css"},{"revision":"a0bb2b4a3c08e41dd5d1bd67d5e4fba8","url":"_nuxt/uQxW9FEp.js"},{"revision":"55be65db23b071a96d7c956046946627","url":"_nuxt/sugestoes.worker-DJpSY2_z.js"},{"revision":"11a7fbf8ad9d0a846c012e7c937cc7e9","url":"_nuxt/solicitar._ehbK0Xg.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"1241bb1feb900287ccb14310328a22c3","url":"_nuxt/settings.BXvx61R5.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"95df1e3ed7bb77f9b82ee5ef2ec3a945","url":"_nuxt/recentes.Boz8l2j6.css"},{"revision":"91793c6606fa1eb432c8c87d6550e1eb","url":"_nuxt/qLj3-kK-.js"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"aa61533f2a29387ba2341e2cba4b3ae4","url":"_nuxt/navegar.CcnZmLym.css"},{"revision":"38b7f0b38a102e1b524086132952642c","url":"_nuxt/menu.B8Zv1MPp.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"052076731c72c2ab0045dc417ec2b24c","url":"_nuxt/j9ENt3oA.js"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"612ef4e07d3d55ddc82a28d2e62e105b","url":"_nuxt/index.BsKMkQK8.css"},{"revision":"07b76dbe7cb25381c5a6c0cbad4fdabe","url":"_nuxt/index.Bp-q4RrK.css"},{"revision":"b213e86de89b4d60992ddaa12d99aadd","url":"_nuxt/index.BVnlTXVf.css"},{"revision":"fdb8d833f2306a73df99c17d690def89","url":"_nuxt/i2lPlmyN.js"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"babef075454e432dc5033d4dbfc549a8","url":"_nuxt/fQFln3wv.js"},{"revision":"009715c72d9ac2e6aa85162808db502b","url":"_nuxt/eventos.CDwAGl8L.css"},{"revision":"95f360d0d86d6717290e57bddd9f5ce4","url":"_nuxt/entry.CG9WzyQG.css"},{"revision":"3ea575dcfd14d89d01a2f70d98699e94","url":"_nuxt/e3n7oh83.js"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"900ef03dde1cf8cf40b23f5cad80a360","url":"_nuxt/calendar.4YSbG8xb.css"},{"revision":"325e12c62a5a4595aff4809fe00518ae","url":"_nuxt/calendar-print.Bm9BqBkm.css"},{"revision":"a23290058c789b908cd29e28493a2627","url":"_nuxt/ampla.BdiKVozZ.css"},{"revision":"d81b9acdd06e3b4f2630697955077ea8","url":"_nuxt/agenda.BuOyYIVx.css"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"48fd5431020372377e8e3dc4db9c4e4d","url":"_nuxt/Yaqd3lr9.js"},{"revision":"f1623760066911a7090123020f58aa2a","url":"_nuxt/Ryzyxwb5.js"},{"revision":"ec526af5a818673e8770f44af02487ed","url":"_nuxt/QC5JCfyV.js"},{"revision":"abe92b44c55283e0fc4d1171c865045e","url":"_nuxt/NZFrsiVi.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"64254b81b7ad8837cfc3c53f87fb80aa","url":"_nuxt/Kq5t_3q3.js"},{"revision":"4e5ddcd2a7457e4908fa38854bb9c1d5","url":"_nuxt/KUE_3_X5.js"},{"revision":"5289b7e61cfb8280cbaf4fc602be8065","url":"_nuxt/JRunShmL.js"},{"revision":"3582b8ce4bbd438994c0b554ee255845","url":"_nuxt/DuAh2IVo.js"},{"revision":"28302ce826d4d8f4e8e8a3f2bb01e465","url":"_nuxt/DorcOsJD.js"},{"revision":"7316f9c5773aff475a63c73797a21e29","url":"_nuxt/DnYbX2i0.js"},{"revision":"6e2baf709fd5436745f1b39c07bc6754","url":"_nuxt/Dlq4tOQN.js"},{"revision":"c300cec9412361c5deb88b2880bf09fc","url":"_nuxt/DbbhwXcc.js"},{"revision":"5ee6e47fed67fec14cbbd3e4d0d630e2","url":"_nuxt/DTpo3ekW.js"},{"revision":"0fd1c861569d58ee76963deee077cffa","url":"_nuxt/DS_VsTRP.js"},{"revision":"da00c292fba52dc7c1bc8a346d125f6b","url":"_nuxt/DS3uo9eD.js"},{"revision":"b330f98356577f9d83dff41ce8b78602","url":"_nuxt/DR3CNoW_.js"},{"revision":"7903b6c4f83180013f5e4d0f9c084034","url":"_nuxt/DDN1Euoe.js"},{"revision":"7893f50a2d825bcdd9ced153f1c3a039","url":"_nuxt/DCXTowCq.js"},{"revision":"2ff040f2e3971a94215477624335528a","url":"_nuxt/D7142YHv.js"},{"revision":"0bfcbc0112880a90afef9f46b1b11ccb","url":"_nuxt/D0Q17XwN.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"c88e92cc1e3b06fdb3eab5acdac09665","url":"_nuxt/CzAT4L_J.js"},{"revision":"ee81ae7ef8c3fe200caa8a361452ed01","url":"_nuxt/Cwhf37Rm.js"},{"revision":"e5db4422da19439c58fce3ee87e187ee","url":"_nuxt/CaO7EFU0.js"},{"revision":"5315683090836c9b8c20eb7154f77351","url":"_nuxt/CY948N0M.js"},{"revision":"32d5c27b05253eed5224a846442bb4d6","url":"_nuxt/CSR4UXVK.js"},{"revision":"12e5216a9ea6a1f2b6963e9dc0d560c0","url":"_nuxt/CLWJC4ti.js"},{"revision":"333d4ae2824a12c4f4feaacb09f4c0ce","url":"_nuxt/CKphDOEw.js"},{"revision":"1e9a41139160d30732fef1338607b404","url":"_nuxt/CIwmsA2X.js"},{"revision":"e2476132e9d6d595f50dc92b475179cc","url":"_nuxt/C18nlUfM.js"},{"revision":"2896138d2e820063ec2bb7e7c2af436f","url":"_nuxt/C-lvynIe.js"},{"revision":"4acbb30a7c2325e3aacb982887a044d8","url":"_nuxt/Blkv4qDE.js"},{"revision":"e3abefb002930c3b606fc2ddea3687e7","url":"_nuxt/BkLeuU9h.js"},{"revision":"75b1846472f507e6c9d4813cdf9f22b7","url":"_nuxt/BhBRTTvf.js"},{"revision":"a0cb52b20cb368d35f63ae1ee405bd2c","url":"_nuxt/BdWsPB4m.js"},{"revision":"a02d938f75bec8c2a561613f4c19396a","url":"_nuxt/B_X2btuM.js"},{"revision":"4062c2d2c071977f06c15dfc115ad997","url":"_nuxt/BYELU2bc.js"},{"revision":"75bc48b02e6d2b13d2d3f5c8bb9bb5b3","url":"_nuxt/BUPtNw8r.js"},{"revision":"e735793b8af851f4ef1e516d525c2ff7","url":"_nuxt/BCtcj4l2.js"},{"revision":"bd183a5cd33f141ccaeae994361db7d4","url":"_nuxt/B9haJzNH.js"},{"revision":"fe46cb1001a594e85e7eb1720a930f51","url":"_nuxt/B4jg3NUx.js"},{"revision":"ea541d4017912793f83bc5bcb93dcdee","url":"_nuxt/B0YSI-Zb.js"},{"revision":"2460eddb22c5c68bfaf86f0b20e96e0c","url":"_nuxt/5ADujsl4.js"},{"revision":"73e2c6f053af2bd74a99e7c14498fc02","url":"_nuxt/builds/latest.json"},{"revision":"56bf2cae54437851e54ba66d4bd243b8","url":"_nuxt/builds/meta/4e25f3d3-bbac-452d-ba7b-f1e24220c52b.json"},{"revision":"a0a51aeed1dfff6efe969d640b5fbddd","url":"500/index.html"},{"revision":"a0a51aeed1dfff6efe969d640b5fbddd","url":"404/index.html"},{"revision":"37987d0494e73022b16ab9757087f49c","url":"200/index.html"}] || []);
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
