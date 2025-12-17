importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js"
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
      workbox.precaching.precacheAndRoute([{"revision":"d14bee76bac17b0b6e10e5ce86d0bf18","url":"_nuxt/7kJ4VEyx.js"},{"revision":"ad65e380139b4c7ff5dd68a39e591461","url":"_nuxt/agenda.BxqxQMWe.css"},{"revision":"1ae062dcfcb85935eb4dd6a53b51cad1","url":"_nuxt/B1_QuNi6.js"},{"revision":"4e10a34c63da74c186b3a7fdac0ee6ea","url":"_nuxt/B5fAXCB8.js"},{"revision":"fc207dd638810227c91ad4fe7adbd2b4","url":"_nuxt/BBxnc6Ty.js"},{"revision":"70dec319c2bfae52aaa9d1de5139e235","url":"_nuxt/BcVdxVZN.js"},{"revision":"512c080ed5a48d5ec32d0837739a28ec","url":"_nuxt/BdrO_j_K.js"},{"revision":"916a4457f3d5df024f2d8a49dd4c97da","url":"_nuxt/BewSv2Yg.js"},{"revision":"354517738518d9a77a354209895defa2","url":"_nuxt/BJoWGXT8.js"},{"revision":"894c9294ed21f19293d0d6b96ef83c09","url":"_nuxt/Bp81fhLe.js"},{"revision":"80a6513cd8095b5ac91ffbe7fa27bcfb","url":"_nuxt/builds/latest.json"},{"revision":"6785db4fc52d59b514ce02b6eb198ce8","url":"_nuxt/builds/meta/01f9df89-f46f-42cf-a88f-076314f1035b.json"},{"revision":"ea3b06f737550b7db4a7bed3445eb1d7","url":"_nuxt/BWHDtym6.js"},{"revision":"57b6ad7d70908c15d90b9979e83e9b73","url":"_nuxt/BYX0Iw3m.js"},{"revision":"d7721451c1d54d1ec462042884ddd280","url":"_nuxt/C_YHdJha.js"},{"revision":"a92df27506fc1eea38fbac9589c8de2b","url":"_nuxt/C6Xe7PJl.js"},{"revision":"2fbc99c4db5e8bd5c0153195caa91977","url":"_nuxt/CaAKYC6k.js"},{"revision":"3dcf4983e944971910bfb712a287f727","url":"_nuxt/calendar-print.Be_7hRd-.css"},{"revision":"9815d41ae434326a24dc35e62eec237b","url":"_nuxt/calendar.DHgtuuC9.css"},{"revision":"627cb83be7e639c9a04cc11c892e633d","url":"_nuxt/CaYEEKjK.js"},{"revision":"bc02a53a99508547409163bfc2e46a98","url":"_nuxt/Cfyu-hzA.js"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"14e879ebc75efcda12e0066eee635c52","url":"_nuxt/contato.3ci9Le7x.css"},{"revision":"2ae1b54eaa8125b610daa8687964f939","url":"_nuxt/CpYRyTmP.js"},{"revision":"a6c1bd12dc3508e772a23226cb05904c","url":"_nuxt/CQ7YhTgJ.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"cc390ded815723e346dd28e99ab8f23f","url":"_nuxt/D0vk6b-R.js"},{"revision":"066c611bb5d829c0b581474546f43167","url":"_nuxt/Ddc0cbiE.js"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"1feaf4bc3fc3e28dcfe2b2f4a7acf1f8","url":"_nuxt/DFkQ6UR1.js"},{"revision":"7082e168b45b96e432ab0947431d3980","url":"_nuxt/DmHMV9jA.js"},{"revision":"8a26034b8c4d843a5916d5a92ae93b27","url":"_nuxt/Dn8HwyeC.js"},{"revision":"3b63cb2ff08bf85d41dc1e4c352c1b38","url":"_nuxt/DngqHYUg.js"},{"revision":"f13ceb679525c2b65cb9ed6434df2613","url":"_nuxt/DtylkgzJ.js"},{"revision":"34d916a3ac2cc75cc7df4ea88bc0242f","url":"_nuxt/DWhp258g.js"},{"revision":"7b1c94588dbfd284c47eec60e5fd9b64","url":"_nuxt/entry.CrEu4H3P.css"},{"revision":"1cec47ab46b69aff51eb4d9fe8b481a9","url":"_nuxt/eventos.D0qi4T-e.css"},{"revision":"17eea3f5385eae6922848588816662c6","url":"_nuxt/EvoOpkM-.js"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"c0ef7e915c568eb28435bf4e3419a3c8","url":"_nuxt/hAigh6fP.js"},{"revision":"b2547f458ab51d48d80e125a8cceceec","url":"_nuxt/hRMdjsT6.js"},{"revision":"5bfc4f03af2175efbfde5c245e9405f4","url":"_nuxt/index.BT7qESRD.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"df7f4f74f56b70b16d49ab41b128b950","url":"_nuxt/index.DzYW3UB-.css"},{"revision":"d3838d7d373de5ff91c0962fb4b0890c","url":"_nuxt/index.efd4-kTG.css"},{"revision":"9a8e8868a533aee80fae3be98cff4c4f","url":"_nuxt/ktQWEL3d.js"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"c73d1cf2a213a3e2203077aae6ba9058","url":"_nuxt/lSMWsiWr.js"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"be00fce10a162e4469800634b006201d","url":"_nuxt/menu.0lHMkiB6.css"},{"revision":"fc1c65959abb7cd2a5d6d5f0ed8519f2","url":"_nuxt/mTH9F1x-.js"},{"revision":"24000ca9f101da21f33b3efc9649bb55","url":"_nuxt/n-pc2klk.js"},{"revision":"824b1d7761a285e7b1cbaf771eae182f","url":"_nuxt/navegar.DXE9DLXy.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"069017b15d99939f06e910ab1cdd92eb","url":"_nuxt/perfil.BbtFWlj7.css"},{"revision":"8456b4730f5a71d9d9d63b6a3f8dc488","url":"_nuxt/recentes.CtKQcL51.css"},{"revision":"e5400f28ac27375dc249adf4b972c4b6","url":"_nuxt/relatorio.BGMUo3JX.css"},{"revision":"12ace90735c0f94a44b105ab32f1e3cc","url":"_nuxt/rSj_cBWL.js"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"e16fe871f60ebca36f1b2fd2b8bdfed6","url":"_nuxt/settings.D81KzNVB.css"},{"revision":"a8b5179d5b5806ec3883dc79a41b65f8","url":"_nuxt/sobre.c9vjT2Gh.css"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"4f9356eca9db2f795802f8afcfa7311a","url":"_nuxt/ssjGYqRw.js"},{"revision":"3b6cbfef0ac52e61d06a206265e902d5","url":"_nuxt/sVZdXV3y.js"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"44a66a393181f1b325157254e2177204","url":"200.html"},{"revision":"fc942cad20dfe9cdd29814038cb2c535","url":"200/index.html"},{"revision":"44a66a393181f1b325157254e2177204","url":"404.html"},{"revision":"fc942cad20dfe9cdd29814038cb2c535","url":"404/index.html"},{"revision":"c00836cdf98c788ab0a0a53064f1874a","url":"500/index.html"},{"revision":"c00836cdf98c788ab0a0a53064f1874a","url":"agenda/index.html"},{"revision":"0ab4eb13ec640467dbfdc9efd832d2ea","url":"data/data.json"},{"revision":"03042e638c592eff104555d2ca647d4f","url":"data/metadata.json"},{"revision":"416ef7202529463a618e35c6f3d32152","url":"data/ministerio.json"},{"revision":"0c67f062d6c248fbad406549c816ea19","url":"data/relatorio.json"},{"revision":"50d93598b24e42211df0a4e3dfb7d751","url":"data/tags-circulares.json"},{"revision":"50a4512f2768551bb27b7453a3066a3d","url":"data/tags.json"},{"revision":"49c693354d289263fe260fc087cfc432","url":"evento/index.html"},{"revision":"49c693354d289263fe260fc087cfc432","url":"evento/solicitar/index.html"},{"revision":"c00836cdf98c788ab0a0a53064f1874a","url":"eventos/index.html"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"49c693354d289263fe260fc087cfc432","url":"forms/contato/index.html"},{"revision":"44a66a393181f1b325157254e2177204","url":"forms/levantamento_preventiva/index.html"},{"revision":"49c693354d289263fe260fc087cfc432","url":"forms/manutencao/index.html"},{"revision":"da987976d57160c2a7ad1e5a1c852793","url":"forms/view/index.html"},{"revision":"49c693354d289263fe260fc087cfc432","url":"hinos/index.html"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"44a66a393181f1b325157254e2177204","url":"index.html"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"9495f82a0135c996553402c95ce39470","url":"js/sw/database.js"},{"revision":"5d6350ed327d88fb0f4a6b8072a8a519","url":"js/sw/firebase.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"49c693354d289263fe260fc087cfc432","url":"lista/calendar-print/index.html"},{"revision":"49c693354d289263fe260fc087cfc432","url":"lista/calendar/index.html"},{"revision":"49c693354d289263fe260fc087cfc432","url":"lista/edit/index.html"},{"revision":"49c693354d289263fe260fc087cfc432","url":"lista/index.html"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"da987976d57160c2a7ad1e5a1c852793","url":"navegar/index.html"},{"revision":"c00836cdf98c788ab0a0a53064f1874a","url":"perfil/index.html"},{"revision":"da987976d57160c2a7ad1e5a1c852793","url":"recentes/index.html"},{"revision":"da987976d57160c2a7ad1e5a1c852793","url":"relatorio/index.html"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"c40976a112fda680365583dc5cdeb52c","url":"service-worker.js"},{"revision":"da987976d57160c2a7ad1e5a1c852793","url":"servicos/index.html"},{"revision":"da987976d57160c2a7ad1e5a1c852793","url":"settings/index.html"},{"revision":"c00836cdf98c788ab0a0a53064f1874a","url":"sobre/index.html"}] || []);
      self.CacheManager._addRoutes();
      self.CacheManager._enableNavigationPreload();
      self.Client.send("init", "Service inicializado!");
    } else {
      console.warn("Workbox não pôde ser carregado.");
    }
  },

  _addRoutes: () => {
    // Navegação (HTML) otimizada para Preload
    workbox.routing.registerRoute(
      ({ request }) => request.mode === "navigate",
      new workbox.strategies.NetworkFirst({
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
      })
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
