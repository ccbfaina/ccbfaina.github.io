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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"85a6a034ce66cb7f85d1b301f8202122","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"85a6a034ce66cb7f85d1b301f8202122","url":"404.html"},{"revision":"85a6a034ce66cb7f85d1b301f8202122","url":"200.html"},{"revision":"aa24647b96f02d6d689599e6799034a4","url":"sugestoes/nomes.json"},{"revision":"68a3dff0573ee87a01a17d8e5a12c080","url":"sobre/index.html"},{"revision":"30a233a1015f6693f9e63d8f06acb886","url":"settings/index.html"},{"revision":"30a233a1015f6693f9e63d8f06acb886","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"30a233a1015f6693f9e63d8f06acb886","url":"relatorio/index.html"},{"revision":"6e3945e5463ca8e6bac45a7283b720b0","url":"records/index.html"},{"revision":"6e3945e5463ca8e6bac45a7283b720b0","url":"recentes/index.html"},{"revision":"6e3945e5463ca8e6bac45a7283b720b0","url":"perfil/index.html"},{"revision":"68a3dff0573ee87a01a17d8e5a12c080","url":"pages/index.html"},{"revision":"6e3945e5463ca8e6bac45a7283b720b0","url":"navegar/index.html"},{"revision":"68a3dff0573ee87a01a17d8e5a12c080","url":"login/index.html"},{"revision":"30a233a1015f6693f9e63d8f06acb886","url":"lista/index.html"},{"revision":"30a233a1015f6693f9e63d8f06acb886","url":"lista/edit/index.html"},{"revision":"85a6a034ce66cb7f85d1b301f8202122","url":"lista/calendar-print/index.html"},{"revision":"85a6a034ce66cb7f85d1b301f8202122","url":"lista/calendar/index.html"},{"revision":"68a3dff0573ee87a01a17d8e5a12c080","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"dbb3e8573b59e2c645501148585fe8bd","url":"js/sw/firebase.js"},{"revision":"5f743225aa84711433cdd3880dbf51d4","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"2808538d6ebb922a6fff3e7e8c357541","url":"js/sw/vendor/dexie.js"},{"revision":"c2eba1515364b627c4f3d5eb6a4bee5b","url":"js/sw/vendor/workbox/workbox-sw.js"},{"revision":"d72bef0e706a8b25012dfa8aa1e4dfff","url":"js/sw/vendor/workbox/workbox-strategies.prod.js"},{"revision":"90d3aeeedbf6f25853c480d92bc51839","url":"js/sw/vendor/workbox/workbox-routing.prod.js"},{"revision":"24c50c33b7c66d7152d4ebae0ac8bd31","url":"js/sw/vendor/workbox/workbox-precaching.prod.js"},{"revision":"2c14e6d1a14b7b1db30586e38ff7a7ae","url":"js/sw/vendor/workbox/workbox-navigation-preload.prod.js"},{"revision":"0e7ae639b709c2e7c22abb64c359f85c","url":"js/sw/vendor/workbox/workbox-expiration.prod.js"},{"revision":"7d66f77f1d0ff9348205a245c75cc6e3","url":"js/sw/vendor/workbox/workbox-core.prod.js"},{"revision":"c1164a2c6ee0dbe4099f435a008a7d00","url":"js/sw/vendor/workbox/workbox-cacheable-response.prod.js"},{"revision":"e640131b6725841102014e560e21d647","url":"js/sw/vendor/firebase/firebase-messaging-compat.js"},{"revision":"c9a629d733922bfe5a271fb7442e7d2d","url":"js/sw/vendor/firebase/firebase-app-compat.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"30a233a1015f6693f9e63d8f06acb886","url":"hinos/index.html"},{"revision":"30a233a1015f6693f9e63d8f06acb886","url":"forms/view/index.html"},{"revision":"85a6a034ce66cb7f85d1b301f8202122","url":"forms/manutencao/index.html"},{"revision":"85a6a034ce66cb7f85d1b301f8202122","url":"forms/levantamento_preventiva/index.html"},{"revision":"85a6a034ce66cb7f85d1b301f8202122","url":"forms/contato/index.html"},{"revision":"85a6a034ce66cb7f85d1b301f8202122","url":"forgot-password/index.html"},{"revision":"6e3945e5463ca8e6bac45a7283b720b0","url":"eventos/index.html"},{"revision":"30a233a1015f6693f9e63d8f06acb886","url":"evento/index.html"},{"revision":"85a6a034ce66cb7f85d1b301f8202122","url":"evento/solicitar/index.html"},{"revision":"5cafd7bb752521a507d7c87141a2900f","url":"data/tags.json"},{"revision":"6b714752ddf9accc46258f481d2eb107","url":"data/tags-circulares.json"},{"revision":"0c67f062d6c248fbad406549c816ea19","url":"data/relatorio.json"},{"revision":"416ef7202529463a618e35c6f3d32152","url":"data/ministerio.json"},{"revision":"e53cbcb9dee19ec010f47b53b3a2f895","url":"data/metadata.json"},{"revision":"ded6c47602b6082e50072328311b66a2","url":"data/data.json"},{"revision":"6e3945e5463ca8e6bac45a7283b720b0","url":"agenda/index.html"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"369a13493f795cdc835586b01d582a1f","url":"_nuxt/useHolidays.CKDun-Df.css"},{"revision":"9c51cc1b500b24e341817ebe241c3c2d","url":"_nuxt/uYxsuM2d.js"},{"revision":"bbec79e5583859b9655e6bd76426722c","url":"_nuxt/sugestoes.worker-CFb5SVC2.js"},{"revision":"11a7fbf8ad9d0a846c012e7c937cc7e9","url":"_nuxt/solicitar._ehbK0Xg.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"1241bb1feb900287ccb14310328a22c3","url":"_nuxt/settings.BXvx61R5.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"95df1e3ed7bb77f9b82ee5ef2ec3a945","url":"_nuxt/recentes.Boz8l2j6.css"},{"revision":"de57811ad74d69025a9015c48a21b37a","url":"_nuxt/qi_v6OBu.js"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"aa61533f2a29387ba2341e2cba4b3ae4","url":"_nuxt/navegar.CcnZmLym.css"},{"revision":"38b7f0b38a102e1b524086132952642c","url":"_nuxt/menu.B8Zv1MPp.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"612ef4e07d3d55ddc82a28d2e62e105b","url":"_nuxt/index.BsKMkQK8.css"},{"revision":"07b76dbe7cb25381c5a6c0cbad4fdabe","url":"_nuxt/index.Bp-q4RrK.css"},{"revision":"14565141e0c51facabb10bb021bfd662","url":"_nuxt/index.B39oQhXY.css"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"6093fc94de5bfb72b97b64d0630eeb8b","url":"_nuxt/eventos.DyQhSg0M.css"},{"revision":"53e71371a4fc535d3ef491c3fb0e1b67","url":"_nuxt/entry.CAlzyXVH.css"},{"revision":"8ee24050cd9254c57b1ecfad2f75f74c","url":"_nuxt/e7ZqtvPn.js"},{"revision":"3ea575dcfd14d89d01a2f70d98699e94","url":"_nuxt/e3n7oh83.js"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"900ef03dde1cf8cf40b23f5cad80a360","url":"_nuxt/calendar.4YSbG8xb.css"},{"revision":"325e12c62a5a4595aff4809fe00518ae","url":"_nuxt/calendar-print.Bm9BqBkm.css"},{"revision":"ccf9bcbed9933107a121b8441d8a8370","url":"_nuxt/agenda.B1qY6oE2.css"},{"revision":"d5b070ef22a499126d21a310957bfa11","url":"_nuxt/_mVfVeFN.js"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"95b7faacbbb21f3e9f3b32fabe2baf0f","url":"_nuxt/Zc_gCKuK.js"},{"revision":"8feb3762b7baf02e4ab606295158886a","url":"_nuxt/RZOvl56l.js"},{"revision":"a88f4c3a6d7e32af5c9a2d7726391844","url":"_nuxt/PPwAfgjm.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"4321e4410da204ac2245655849edeb33","url":"_nuxt/FnOrK86D.js"},{"revision":"fbf4101f5884aac0b36b03b8c5ce8d0d","url":"_nuxt/E-8TJXPi.js"},{"revision":"fdf65b8dce899feb32b0bba86cc9306b","url":"_nuxt/Dz0NXLqJ.js"},{"revision":"e8c468765c8414a7aac2d8f8f20a4610","url":"_nuxt/DvcNnLvL.js"},{"revision":"a8ef896536525c337736efe8430fd0ef","url":"_nuxt/Dr511E3J.js"},{"revision":"6e2baf709fd5436745f1b39c07bc6754","url":"_nuxt/Dlq4tOQN.js"},{"revision":"412d6f6954eb2c2734f9fae01641b25e","url":"_nuxt/D_Hc0wiA.js"},{"revision":"1f1050ecfe3e4222f43cb18496ee7005","url":"_nuxt/DZ4mvIjZ.js"},{"revision":"39fe641fb041cadae98eea9e1c7331d1","url":"_nuxt/DUtdKbs8.js"},{"revision":"f3ef4e018f0322335e6d5382d64c727d","url":"_nuxt/DNQ1YQKQ.js"},{"revision":"d10303fca5064e6ebb670fd72f24001b","url":"_nuxt/DIvzj17A.js"},{"revision":"0abbe8fab0d2d115dc2e491b775db36b","url":"_nuxt/DFe24AlW.js"},{"revision":"1e2c154fae8032c0487a53aeb3629a70","url":"_nuxt/DCPLiu8r.js"},{"revision":"3602e383b2d1cbd5912c5e8cb7e0d7de","url":"_nuxt/DAbJ8kiN.js"},{"revision":"e8c3b5ad43feac3cb9dc9e429881793a","url":"_nuxt/D7mCwKkT.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"964d7f2d65df73233e027aac090afac9","url":"_nuxt/CzAC8H8c.js"},{"revision":"6e5d975cbac5fa7dec2e3e2886ad0aca","url":"_nuxt/Cy-q_d9d.js"},{"revision":"07a58f590c1a469b2b17e039bb4202a2","url":"_nuxt/CwoIH3QN.js"},{"revision":"3691f24a883cc95258d2027ca619817b","url":"_nuxt/Cw8UumeD.js"},{"revision":"37958d2e4cda7b6bc29dd827e7a17af3","url":"_nuxt/CuCdqets.js"},{"revision":"4caed0aa02fda5077df6b6db428e8b3b","url":"_nuxt/CrheMvcZ.js"},{"revision":"75c627f9f7841af0cedc4689c13bf7e1","url":"_nuxt/CqFDNlrv.js"},{"revision":"d5e35544cecded3933d66ee2b7636640","url":"_nuxt/CgqMQtOA.js"},{"revision":"cf8c91272518448028050b5647851e4a","url":"_nuxt/Cf6wv15x.js"},{"revision":"9eb187275c1212afec0fe6424c36a209","url":"_nuxt/CY0AfHI9.js"},{"revision":"21c023683979fac90110c7cdd8d54341","url":"_nuxt/CKzCmIsT.js"},{"revision":"f9a634df854e5ba228650bdd9e0a9a2a","url":"_nuxt/CBw3C6Vj.js"},{"revision":"eb1f76c18c0d37bb3c11a9683677208d","url":"_nuxt/CAISnxeu.js"},{"revision":"e878a59878f97001f7a9e3f42ece2297","url":"_nuxt/C6YNw0W_.js"},{"revision":"42b09459f02d75b72a1f4f4c04632eda","url":"_nuxt/Budr8cl0.js"},{"revision":"f264f94bc5d2eeb25bb8ae2337988f81","url":"_nuxt/BseFHemL.js"},{"revision":"fff6e0970a240e6590e0c4462a3a73f2","url":"_nuxt/BT9MS94_.js"},{"revision":"b5d2aa46c4e5e7b2e9ea08e9ca0316ed","url":"_nuxt/BLd69avn.js"},{"revision":"a61b3c429b9a821f6a9e50da537f0a2d","url":"_nuxt/BIPYd7A4.js"},{"revision":"c214b4ad4329a5539698b41bf37841b7","url":"_nuxt/BIF0po0m.js"},{"revision":"a1331f585b8284d5f3581fb43dd27825","url":"_nuxt/B6gHEqd4.js"},{"revision":"6cf46cd70a9d1df3e8cf307eb2c55b3e","url":"_nuxt/B1gNzNg2.js"},{"revision":"9ab04987bbc03b81e9de3bd0a65a3615","url":"_nuxt/9IPF6AhN.js"},{"revision":"e719dd5494b15a449f696bba13eee43b","url":"_nuxt/41TPxGwi.js"},{"revision":"e5b8b079329334f815ead8ed9eec3f93","url":"_nuxt/builds/latest.json"},{"revision":"a6e2bb2299614e29b6ab3eefe16fc7f3","url":"_nuxt/builds/meta/4d878f8f-62ff-4f66-b878-0f5da8bfa8ac.json"},{"revision":"68a3dff0573ee87a01a17d8e5a12c080","url":"500/index.html"},{"revision":"eb8c060ea8aeb9cfa71d77aa3d38f17b","url":"404/index.html"},{"revision":"eb8c060ea8aeb9cfa71d77aa3d38f17b","url":"200/index.html"}] || []);
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
