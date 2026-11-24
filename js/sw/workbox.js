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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"bf237b57764ed5a84eb99d739552bce9","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"bf237b57764ed5a84eb99d739552bce9","url":"404.html"},{"revision":"bf237b57764ed5a84eb99d739552bce9","url":"200.html"},{"revision":"24e38698313af08b84682ab6acdce5c2","url":"sobre/index.html"},{"revision":"4e9fcc4899d4843ad2584306835afa5d","url":"settings/index.html"},{"revision":"dee4e3a5a97a9c82b2b46b05d458f702","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"4e9fcc4899d4843ad2584306835afa5d","url":"relatorio/index.html"},{"revision":"dee4e3a5a97a9c82b2b46b05d458f702","url":"records/index.html"},{"revision":"dee4e3a5a97a9c82b2b46b05d458f702","url":"recentes/index.html"},{"revision":"dee4e3a5a97a9c82b2b46b05d458f702","url":"perfil/index.html"},{"revision":"24e38698313af08b84682ab6acdce5c2","url":"pages/index.html"},{"revision":"dee4e3a5a97a9c82b2b46b05d458f702","url":"navegar/index.html"},{"revision":"24e38698313af08b84682ab6acdce5c2","url":"login/index.html"},{"revision":"4e9fcc4899d4843ad2584306835afa5d","url":"lista/index.html"},{"revision":"4e9fcc4899d4843ad2584306835afa5d","url":"lista/edit/index.html"},{"revision":"bf237b57764ed5a84eb99d739552bce9","url":"lista/calendar-print/index.html"},{"revision":"bf237b57764ed5a84eb99d739552bce9","url":"lista/calendar/index.html"},{"revision":"24e38698313af08b84682ab6acdce5c2","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"5d6350ed327d88fb0f4a6b8072a8a519","url":"js/sw/firebase.js"},{"revision":"9495f82a0135c996553402c95ce39470","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"4e9fcc4899d4843ad2584306835afa5d","url":"hinos/index.html"},{"revision":"4e9fcc4899d4843ad2584306835afa5d","url":"forms/view/index.html"},{"revision":"bf237b57764ed5a84eb99d739552bce9","url":"forms/manutencao/index.html"},{"revision":"bf237b57764ed5a84eb99d739552bce9","url":"forms/levantamento_preventiva/index.html"},{"revision":"4e9fcc4899d4843ad2584306835afa5d","url":"forms/contato/index.html"},{"revision":"bf237b57764ed5a84eb99d739552bce9","url":"forgot-password/index.html"},{"revision":"dee4e3a5a97a9c82b2b46b05d458f702","url":"eventos/index.html"},{"revision":"4e9fcc4899d4843ad2584306835afa5d","url":"evento/index.html"},{"revision":"bf237b57764ed5a84eb99d739552bce9","url":"evento/solicitar/index.html"},{"revision":"24e38698313af08b84682ab6acdce5c2","url":"agenda/index.html"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"3d9aad04796ee8f3d3e3c63d41ed354f","url":"_nuxt/useHolidays.Cnq2fMW2.css"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"e16fe871f60ebca36f1b2fd2b8bdfed6","url":"_nuxt/settings.D81KzNVB.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"cd1ace775cadcd04eef5c065051f1527","url":"_nuxt/s0Rcg6Co.js"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"8456b4730f5a71d9d9d63b6a3f8dc488","url":"_nuxt/recentes.CtKQcL51.css"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"98301379c4e0c4ea003901ab8f3b42a8","url":"_nuxt/ouNY7BvX.js"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"824b1d7761a285e7b1cbaf771eae182f","url":"_nuxt/navegar.DXE9DLXy.css"},{"revision":"e0510296dbe54614b7d355cdab608b37","url":"_nuxt/menu.DVhHSjEg.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"3517d3a361327a928a8f0bb9833b7cf5","url":"_nuxt/kuRw1Kjr.js"},{"revision":"2a0e41f635cc3844a8c2830826ae3beb","url":"_nuxt/index.xA83gVRs.css"},{"revision":"f6b6a1f7fafcbc0b241ea5f3569f7b5e","url":"_nuxt/index.DU09tfFf.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"517fe963daa0821a497496afc1ad8532","url":"_nuxt/index.Bpry5Zt_.css"},{"revision":"a96d4a28525421eb061aa4015ee19420","url":"_nuxt/gsCQzMoY.js"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"2b214c846899444a69c59b290c93751c","url":"_nuxt/eventos.CXhhCs06.css"},{"revision":"c65545ddb8b339ad7466dec1b7878723","url":"_nuxt/entry.C-aqvbc1.css"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"543a4556d33e597d4bbdd6b18724bd44","url":"_nuxt/calendar.By77Oy8o.css"},{"revision":"b263c0f5b9698bdb39542f87dd866dc4","url":"_nuxt/calendar-print.DHVwiYMP.css"},{"revision":"ccf9bcbed9933107a121b8441d8a8370","url":"_nuxt/agenda.B1qY6oE2.css"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"c305e39b7344f01ee7f82edd63bd3991","url":"_nuxt/ZEzDUWU-.js"},{"revision":"de2361f12059db05c1075f38e6befc02","url":"_nuxt/S3__7ksq.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"fa6aa6aa3295070ad07d4d07e53f6cb4","url":"_nuxt/GY-isFx-.js"},{"revision":"0f21ccff2c58cc0e87f177a1eafba8a8","url":"_nuxt/Dy6WZsFv.js"},{"revision":"6e16d5ce4807a1dbd81f7c4d04fb962c","url":"_nuxt/Dvf7rPUg.js"},{"revision":"e0c72513ab068f76ed28429aab9d7794","url":"_nuxt/DrXuYTSx.js"},{"revision":"4eb72bc50096253b3aba8cdfc8aad55d","url":"_nuxt/DoMFPStV.js"},{"revision":"e14d262a5bd87dba8edae5afa5b48672","url":"_nuxt/DgUUHy-P.js"},{"revision":"e4f6fdaa5c96c738fde4fe0cc70fa5a2","url":"_nuxt/Df5x0EFL.js"},{"revision":"00ddb18466e3778fde37fd6923cfde15","url":"_nuxt/D_b6fu5R.js"},{"revision":"4f301c4b7b8279edcc7a2fcbc254629f","url":"_nuxt/DZA4ExGP.js"},{"revision":"36a1554ed8c02843daecad8515fed8ca","url":"_nuxt/DY8wsJOg.js"},{"revision":"87752353c50ac9b2c59e5a88bb5575f8","url":"_nuxt/DVYWcOP7.js"},{"revision":"d897c37537825208e9279318ace35c26","url":"_nuxt/DR5LP_oP.js"},{"revision":"1615dab00d76e02df727d635e4f06e63","url":"_nuxt/DMq6mJmk.js"},{"revision":"0706cacb3c47ab09bb9ccbcee7d4fe5c","url":"_nuxt/DJ6DuJyf.js"},{"revision":"fe4bc6365eab6f30932be6a667867a60","url":"_nuxt/D5HfupfY.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"936792af6f7c5cc49815afa301b0030a","url":"_nuxt/CvvBeJc0.js"},{"revision":"2b52bc54e1cc718f06f357489bc8249e","url":"_nuxt/Cr_dlZsr.js"},{"revision":"b7c686cde47d99d8d47640dba16563a4","url":"_nuxt/CqOXZNCG.js"},{"revision":"7fc2dfe01379f996253bec164207c1c7","url":"_nuxt/CpIN2nIC.js"},{"revision":"bcf46bb3b2777edc3cb8f8acab86cc92","url":"_nuxt/Chp2_3eZ.js"},{"revision":"f42739da936428675dab667ccb6e3fa8","url":"_nuxt/CgqCmomM.js"},{"revision":"49a53f1883d4e8bf063ab61fb1ec71e9","url":"_nuxt/CbdE2i28.js"},{"revision":"4f93469781acddfe7d76d65f9e35f38c","url":"_nuxt/CaTqtsRw.js"},{"revision":"fc656ab32b7e54a5790beff9de3f2430","url":"_nuxt/CWvqrG0Z.js"},{"revision":"6d3964e36f8e728f29971b5ac734d3ed","url":"_nuxt/CVdtQCQq.js"},{"revision":"45150eaf12a0f189f0ea630250a3a839","url":"_nuxt/COMiwNHL.js"},{"revision":"375fd2af8a23e8b17dab0d545a4e5ec3","url":"_nuxt/CNwaQ_wj.js"},{"revision":"6b3e3f5a623874e81bc46b21186edea2","url":"_nuxt/CDX-bdrH.js"},{"revision":"8ef14e8ae0e06ed25c8fba559dc94028","url":"_nuxt/CAIDDdqT.js"},{"revision":"324ead96b1ca9e216563b4735c602c3c","url":"_nuxt/C599EQRI.js"},{"revision":"e5aee650ae910962b405bb525896e3a5","url":"_nuxt/C-pCc-27.js"},{"revision":"5e11b79238a0adfc07687615db35c41a","url":"_nuxt/BzVAh1TN.js"},{"revision":"708669461f84d751dadd7e544d08ebee","url":"_nuxt/BrQ7A3hK.js"},{"revision":"c48e58191836a65abb7a6ceb7035ac02","url":"_nuxt/BPjKKsWi.js"},{"revision":"b68b9c97be1713cb2958af69c952c831","url":"_nuxt/BM4LKVbY.js"},{"revision":"e76429e45a7343b7e0644a5bcefcce94","url":"_nuxt/BItKhM6k.js"},{"revision":"39f3f18dcca11aaaf34198c57038cf2b","url":"_nuxt/B5TJLoJU.js"},{"revision":"08ca6fc9fcbfbddd8d9506224b06c0f0","url":"_nuxt/2FkUFQTI.js"},{"revision":"53980f8837a1fe13675157461b77b0fe","url":"_nuxt/builds/latest.json"},{"revision":"bdcc70a43a88fbe71a17f13f90ba9a4b","url":"_nuxt/builds/meta/9b877dca-bf1d-43a1-9733-5e2ffc4a3fed.json"},{"revision":"0262f464dce966f0ac0b620b45624023","url":"500/index.html"},{"revision":"0262f464dce966f0ac0b620b45624023","url":"404/index.html"},{"revision":"0262f464dce966f0ac0b620b45624023","url":"200/index.html"}] || []);
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
