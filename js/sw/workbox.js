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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"fe4bf5daf35b486ce09bc8d97f1a8d54","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"fe4bf5daf35b486ce09bc8d97f1a8d54","url":"404.html"},{"revision":"fe4bf5daf35b486ce09bc8d97f1a8d54","url":"200.html"},{"revision":"ef1cc4bd9c54dcd9f743e0829d4d5592","url":"sugestoes/regional.json"},{"revision":"aa24647b96f02d6d689599e6799034a4","url":"sugestoes/nomes.json"},{"revision":"15c0017bcec5b6243f97de0ab5742479","url":"sobre/index.html"},{"revision":"f3d40951ffd1364fb2eee1c5fa370a9e","url":"settings/index.html"},{"revision":"f3d40951ffd1364fb2eee1c5fa370a9e","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"afeb5d7a6302f33d876ba0a462556a44","url":"relatorio/index.html"},{"revision":"f3d40951ffd1364fb2eee1c5fa370a9e","url":"records/index.html"},{"revision":"f3d40951ffd1364fb2eee1c5fa370a9e","url":"recentes/index.html"},{"revision":"15c0017bcec5b6243f97de0ab5742479","url":"perfil/index.html"},{"revision":"15c0017bcec5b6243f97de0ab5742479","url":"pages/index.html"},{"revision":"f3d40951ffd1364fb2eee1c5fa370a9e","url":"navegar/index.html"},{"revision":"4bbb365109af050d4e2232b4027b12af","url":"login/index.html"},{"revision":"afeb5d7a6302f33d876ba0a462556a44","url":"lista/index.html"},{"revision":"afeb5d7a6302f33d876ba0a462556a44","url":"lista/edit/index.html"},{"revision":"fe4bf5daf35b486ce09bc8d97f1a8d54","url":"lista/calendar-print/index.html"},{"revision":"fe4bf5daf35b486ce09bc8d97f1a8d54","url":"lista/calendar/index.html"},{"revision":"4bbb365109af050d4e2232b4027b12af","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"dbb3e8573b59e2c645501148585fe8bd","url":"js/sw/firebase.js"},{"revision":"2cc32c31d1de207c4268a72a2198311e","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"2808538d6ebb922a6fff3e7e8c357541","url":"js/sw/vendor/dexie.js"},{"revision":"c2eba1515364b627c4f3d5eb6a4bee5b","url":"js/sw/vendor/workbox/workbox-sw.js"},{"revision":"d72bef0e706a8b25012dfa8aa1e4dfff","url":"js/sw/vendor/workbox/workbox-strategies.prod.js"},{"revision":"90d3aeeedbf6f25853c480d92bc51839","url":"js/sw/vendor/workbox/workbox-routing.prod.js"},{"revision":"24c50c33b7c66d7152d4ebae0ac8bd31","url":"js/sw/vendor/workbox/workbox-precaching.prod.js"},{"revision":"2c14e6d1a14b7b1db30586e38ff7a7ae","url":"js/sw/vendor/workbox/workbox-navigation-preload.prod.js"},{"revision":"0e7ae639b709c2e7c22abb64c359f85c","url":"js/sw/vendor/workbox/workbox-expiration.prod.js"},{"revision":"7d66f77f1d0ff9348205a245c75cc6e3","url":"js/sw/vendor/workbox/workbox-core.prod.js"},{"revision":"c1164a2c6ee0dbe4099f435a008a7d00","url":"js/sw/vendor/workbox/workbox-cacheable-response.prod.js"},{"revision":"e640131b6725841102014e560e21d647","url":"js/sw/vendor/firebase/firebase-messaging-compat.js"},{"revision":"c9a629d733922bfe5a271fb7442e7d2d","url":"js/sw/vendor/firebase/firebase-app-compat.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"afeb5d7a6302f33d876ba0a462556a44","url":"hinos/index.html"},{"revision":"afeb5d7a6302f33d876ba0a462556a44","url":"forms/view/index.html"},{"revision":"fe4bf5daf35b486ce09bc8d97f1a8d54","url":"forms/manutencao/index.html"},{"revision":"fe4bf5daf35b486ce09bc8d97f1a8d54","url":"forms/levantamento_preventiva/index.html"},{"revision":"afeb5d7a6302f33d876ba0a462556a44","url":"forms/contato/index.html"},{"revision":"fe4bf5daf35b486ce09bc8d97f1a8d54","url":"forgot-password/index.html"},{"revision":"f3d40951ffd1364fb2eee1c5fa370a9e","url":"eventos/index.html"},{"revision":"afeb5d7a6302f33d876ba0a462556a44","url":"evento/index.html"},{"revision":"fe4bf5daf35b486ce09bc8d97f1a8d54","url":"evento/solicitar/index.html"},{"revision":"5cafd7bb752521a507d7c87141a2900f","url":"data/tags.json"},{"revision":"6b714752ddf9accc46258f481d2eb107","url":"data/tags-circulares.json"},{"revision":"0c67f062d6c248fbad406549c816ea19","url":"data/relatorio.json"},{"revision":"416ef7202529463a618e35c6f3d32152","url":"data/ministerio.json"},{"revision":"196008493bb75371cbea968b2332aa9a","url":"data/metadata.json"},{"revision":"d15b4a22b3cb4b091954c2788282c3f1","url":"data/data.json"},{"revision":"15c0017bcec5b6243f97de0ab5742479","url":"agenda/index.html"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"369a13493f795cdc835586b01d582a1f","url":"_nuxt/useHolidays.CKDun-Df.css"},{"revision":"55220aaaf0a3c97a2b9dea8cff41f080","url":"_nuxt/u7NKxTgV.js"},{"revision":"55be65db23b071a96d7c956046946627","url":"_nuxt/sugestoes.worker-DJpSY2_z.js"},{"revision":"11a7fbf8ad9d0a846c012e7c937cc7e9","url":"_nuxt/solicitar._ehbK0Xg.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"1241bb1feb900287ccb14310328a22c3","url":"_nuxt/settings.BXvx61R5.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"4144a78b39dac6e687818b2b0d11740d","url":"_nuxt/rl0d_jYS.js"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"95df1e3ed7bb77f9b82ee5ef2ec3a945","url":"_nuxt/recentes.Boz8l2j6.css"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"aa61533f2a29387ba2341e2cba4b3ae4","url":"_nuxt/navegar.CcnZmLym.css"},{"revision":"38b7f0b38a102e1b524086132952642c","url":"_nuxt/menu.B8Zv1MPp.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"612ef4e07d3d55ddc82a28d2e62e105b","url":"_nuxt/index.BsKMkQK8.css"},{"revision":"07b76dbe7cb25381c5a6c0cbad4fdabe","url":"_nuxt/index.Bp-q4RrK.css"},{"revision":"b213e86de89b4d60992ddaa12d99aadd","url":"_nuxt/index.BVnlTXVf.css"},{"revision":"e1671745776a7b7910f0bd84b2ab2bb3","url":"_nuxt/iN0laL4L.js"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"a554b0fbb9cb81de52274fc6e95efb99","url":"_nuxt/eventos.LtAvD9gF.css"},{"revision":"9958fddcc328ef9ba35ecd54acb5d5e1","url":"_nuxt/entry.evL04zbw.css"},{"revision":"3ea575dcfd14d89d01a2f70d98699e94","url":"_nuxt/e3n7oh83.js"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"51ef125d8ab1f69530ff7482a433965a","url":"_nuxt/d8noRXTb.js"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"900ef03dde1cf8cf40b23f5cad80a360","url":"_nuxt/calendar.4YSbG8xb.css"},{"revision":"325e12c62a5a4595aff4809fe00518ae","url":"_nuxt/calendar-print.Bm9BqBkm.css"},{"revision":"a23290058c789b908cd29e28493a2627","url":"_nuxt/ampla.BdiKVozZ.css"},{"revision":"d81b9acdd06e3b4f2630697955077ea8","url":"_nuxt/agenda.BuOyYIVx.css"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"00b0b646e3320b0699901e4b7c83b1a8","url":"_nuxt/Zpv1Suf4.js"},{"revision":"25cd578132a25a666d374cf8e2833713","url":"_nuxt/UpBSAx2A.js"},{"revision":"207c6b21120b469f0650b9abf9d2c295","url":"_nuxt/TUjMx0RY.js"},{"revision":"7f8ea47a5c7cb1678154fbfac6c003d9","url":"_nuxt/RjNJ-Aiq.js"},{"revision":"2446628a610f41aea0fbe8a9d2af2207","url":"_nuxt/QdVWJQif.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"c1d6ffa0f039aceb59437250fb2d8dc5","url":"_nuxt/KIdbt71n.js"},{"revision":"e30d6e965caf17841fac8815733f7e74","url":"_nuxt/IcKeMHVQ.js"},{"revision":"4d3df1e9aaac8bed402ebe86aac90135","url":"_nuxt/DxTZkRrI.js"},{"revision":"6e2baf709fd5436745f1b39c07bc6754","url":"_nuxt/Dlq4tOQN.js"},{"revision":"b640bd2828248a7f3df581af8ac70880","url":"_nuxt/DigRBEPM.js"},{"revision":"05d9dc3a3b64eee0785bdd1c564e5fe8","url":"_nuxt/DgcsiYHh.js"},{"revision":"526b24c48777d656dc5d57d06fe9ae7a","url":"_nuxt/DacUAVcR.js"},{"revision":"782d8a190568c8fc32a7982cfc95e930","url":"_nuxt/D_t7ZAWx.js"},{"revision":"ec2f8b4fb03f119ef7290518f7fbcaa0","url":"_nuxt/D_BLzwIB.js"},{"revision":"a5757b7e82b7e5a3803afb3f5c238396","url":"_nuxt/DYjK3PSk.js"},{"revision":"692b974d31fa90ca02d0f956813f9118","url":"_nuxt/DXV5rd15.js"},{"revision":"6c730bfbb4b46891669fbb7f1c237906","url":"_nuxt/DW-R6HoJ.js"},{"revision":"accb98861a7bd9da61f05e96d80fea60","url":"_nuxt/DOM43b5g.js"},{"revision":"0d18e09f78f29585a2563a802c126496","url":"_nuxt/DKLp_EYB.js"},{"revision":"d1859b629a0cff15dce943e25dd8693e","url":"_nuxt/DK49De7G.js"},{"revision":"c637811029821a64b9b1931f175bdd21","url":"_nuxt/DE3-9GMi.js"},{"revision":"7e1fa976b8bfa90bc1768b7eb9e6c3f1","url":"_nuxt/DDRF_qnc.js"},{"revision":"a082fd8df8fe225415462e250092b9ed","url":"_nuxt/DAYb2mg8.js"},{"revision":"16423308666fbc16eb28c720b23ee8d5","url":"_nuxt/D8K8erCG.js"},{"revision":"aae83bd828ec658218aef18d42f94645","url":"_nuxt/D336b1UC.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"546a265ccdbcc7de8dd4f075fda643e5","url":"_nuxt/CzxiWOM_.js"},{"revision":"2639ff2ccc56c3da044361392da34488","url":"_nuxt/ClSU22-c.js"},{"revision":"36f4491b7674226c376f362bd346415c","url":"_nuxt/CWJan46z.js"},{"revision":"e6dedc65cc821489fff5ecb56e2ba747","url":"_nuxt/CQjt7hxQ.js"},{"revision":"119de4efc101848467d75e6d44518196","url":"_nuxt/CIzwQwQi.js"},{"revision":"d411bbf6836d0586e345148d70c9e9f9","url":"_nuxt/CGTnhMlO.js"},{"revision":"578a15b9bd8e7f029de5b2316410baeb","url":"_nuxt/CFgqrs5f.js"},{"revision":"aed8b97938b747b3cef02db146cf3010","url":"_nuxt/C8kfzBW0.js"},{"revision":"8fa2d602de8e68d3ffff17505981e93d","url":"_nuxt/C7_V3n8j.js"},{"revision":"56eec6f776dea29546d2f065f5081430","url":"_nuxt/BqmZuHSz.js"},{"revision":"533606626649604d6cd6fea207b624f8","url":"_nuxt/BZf9bhOp.js"},{"revision":"9eadf5f417b2d4f4237ae4bca6a87548","url":"_nuxt/BT3QAp11.js"},{"revision":"69b0bfc6718b6fce5ba7b69ce3b5a5c4","url":"_nuxt/BRmQGaJ2.js"},{"revision":"aa4fcca2eb7035d8f9af4ac41363a351","url":"_nuxt/BNPyWnjF.js"},{"revision":"f98bad2144ce21413e3d4c4e93067917","url":"_nuxt/BKOzmAhK.js"},{"revision":"fd6d3505abf4f53ee8937376f31c22d4","url":"_nuxt/B9sRtjmu.js"},{"revision":"96f293f0b8a4f27bceb979b9ac57a6ae","url":"_nuxt/B90hDjx6.js"},{"revision":"f7f2fb7b108f410818137d478030ec74","url":"_nuxt/B6VwyfNR.js"},{"revision":"c010f88b8ac4495df062dd452c71b3a7","url":"_nuxt/builds/latest.json"},{"revision":"2ce81e9a408487d4c133f11285a72384","url":"_nuxt/builds/meta/881dde7b-a427-4383-a5d9-b3935c73217b.json"},{"revision":"4bbb365109af050d4e2232b4027b12af","url":"500/index.html"},{"revision":"4bbb365109af050d4e2232b4027b12af","url":"404/index.html"},{"revision":"82be4e629babb5f6b319f698339a5238","url":"200/index.html"}] || []);
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
