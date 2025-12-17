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
      workbox.precaching.precacheAndRoute([{"revision":"d157fd09e590d7439c8f54b441655646","url":"_nuxt/021n9XC4.js"},{"revision":"13f9e96eadf356ea4b080e9d65d4b6a8","url":"_nuxt/0auCfL-U.js"},{"revision":"eff8e1dafadae7bf616747394eb95111","url":"_nuxt/9kxbkpTV.js"},{"revision":"ad65e380139b4c7ff5dd68a39e591461","url":"_nuxt/agenda.BxqxQMWe.css"},{"revision":"b330e1ff129e0f1dc9a0831bd9b8f8cb","url":"_nuxt/B62cKo0k.js"},{"revision":"179dbbe065740b50bae008d4aac1d4b8","url":"_nuxt/BheGBRLV.js"},{"revision":"5d5d3dadc041f0db45b2c61f11f699da","url":"_nuxt/BIOXUTjc.js"},{"revision":"c381ef5ea859f54673b67e7d8155028a","url":"_nuxt/BjM3I0nR.js"},{"revision":"5e37d031a93104e3ada12aa1f8e252bc","url":"_nuxt/BK-YuSyA.js"},{"revision":"b021a26cf04f240d48d3391e6b768dd0","url":"_nuxt/BkfNGUzz.js"},{"revision":"7ee0a895e91208aae92273e46579097f","url":"_nuxt/BtRlyN1-.js"},{"revision":"159e4bb3078a3e990ffce02c5fb2bf7f","url":"_nuxt/builds/latest.json"},{"revision":"8347b8e3acbac7cafdaa3cf0cab3aca2","url":"_nuxt/builds/meta/4b941ec4-cb5e-473a-ba9a-cb307cd92a99.json"},{"revision":"68a5298ddb4352390b6dfe3c4225127d","url":"_nuxt/C03LAeNh.js"},{"revision":"5611da9fbfa96d3c0ed2a77161cbb34c","url":"_nuxt/C5SaqBdg.js"},{"revision":"fc7e269ff1c7f09c767765ac8079c3ad","url":"_nuxt/calendar-print.BIubssgp.css"},{"revision":"8f17cc97aa342deedc7f6b233bf66ec5","url":"_nuxt/calendar.CQK-tHd3.css"},{"revision":"30eea7df798290b1fa2922d9f157c9d0","url":"_nuxt/CawFiUsw.js"},{"revision":"0e343a0ae201348e7f67cbd741370175","url":"_nuxt/CC0mZKU2.js"},{"revision":"31fa29a4c5db61783c304512ac7ab458","url":"_nuxt/CiEXHWot.js"},{"revision":"59e7532f25aefd6f85a1c842bdce11b1","url":"_nuxt/CJjtgMyx.js"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"14e879ebc75efcda12e0066eee635c52","url":"_nuxt/contato.3ci9Le7x.css"},{"revision":"878a551e91850acca04a8d2ad91cca3e","url":"_nuxt/Crb5S4Mh.js"},{"revision":"17c67a2099e704dbd42bf27c71cc8551","url":"_nuxt/CsRdZ9hL.js"},{"revision":"b79cbc40d7bfb74181cda994112bcdb9","url":"_nuxt/CU20j9fl.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"7f1b7dff34b59b342f068780f54f74b6","url":"_nuxt/D4msPRtv.js"},{"revision":"312a8f73488fc24bc996bef6b1330967","url":"_nuxt/DE5ceiTV.js"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"c752a23fef795cf561f0963a2b5d025c","url":"_nuxt/Dj0oqw5B.js"},{"revision":"711e769340203e2756da4e59d6de7963","url":"_nuxt/DmDki7DU.js"},{"revision":"dc94fcdc007d9ecedaca78dac96b677a","url":"_nuxt/Ds29FJ69.js"},{"revision":"65ed776beb2037cdf7c2d8472037f205","url":"_nuxt/DUlK-Bnb.js"},{"revision":"f9f0139a835d2ff583dd4f2df280089b","url":"_nuxt/DYtGswUL.js"},{"revision":"7b1c94588dbfd284c47eec60e5fd9b64","url":"_nuxt/entry.CrEu4H3P.css"},{"revision":"1cec47ab46b69aff51eb4d9fe8b481a9","url":"_nuxt/eventos.D0qi4T-e.css"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"498f1adf06f2ffa2268af35d307d23bc","url":"_nuxt/hLv7-RgB.js"},{"revision":"5bfc4f03af2175efbfde5c245e9405f4","url":"_nuxt/index.BT7qESRD.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"df7f4f74f56b70b16d49ab41b128b950","url":"_nuxt/index.DzYW3UB-.css"},{"revision":"d3838d7d373de5ff91c0962fb4b0890c","url":"_nuxt/index.efd4-kTG.css"},{"revision":"76eb77f4e4cc08caab8c2ccbd73aa4f1","url":"_nuxt/K1e2MpLU.js"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"be00fce10a162e4469800634b006201d","url":"_nuxt/menu.0lHMkiB6.css"},{"revision":"824b1d7761a285e7b1cbaf771eae182f","url":"_nuxt/navegar.DXE9DLXy.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"069017b15d99939f06e910ab1cdd92eb","url":"_nuxt/perfil.BbtFWlj7.css"},{"revision":"eebfa71db680ae1e4c3bf6f383ee1557","url":"_nuxt/qpvyKu5O.js"},{"revision":"8456b4730f5a71d9d9d63b6a3f8dc488","url":"_nuxt/recentes.CtKQcL51.css"},{"revision":"e5400f28ac27375dc249adf4b972c4b6","url":"_nuxt/relatorio.BGMUo3JX.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"e16fe871f60ebca36f1b2fd2b8bdfed6","url":"_nuxt/settings.D81KzNVB.css"},{"revision":"c456964a169f635cba9e83182ed366bd","url":"_nuxt/SM3PbrxX.js"},{"revision":"a8b5179d5b5806ec3883dc79a41b65f8","url":"_nuxt/sobre.c9vjT2Gh.css"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"2b10af7a65032468a6ed296d70dd1b3c","url":"_nuxt/Th0Hn3CC.js"},{"revision":"909b95a8fef1cd29ab61c0d9a943b12d","url":"_nuxt/ti4pi6uL.js"},{"revision":"abf23ef8271c9ac676c4b155cf0a837f","url":"_nuxt/u0bMfRcs.js"},{"revision":"237345de98b9143a7cbf146cf03db273","url":"_nuxt/vgcyZSbj.js"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"ad18b501a53fa781700001dceae2dd6d","url":"_nuxt/W2M65uUf.js"},{"revision":"c50ed530da08402293515dfb21d8469c","url":"_nuxt/WVpgEFHB.js"},{"revision":"3e6af244e0a1b1f0cbbdd64c43828419","url":"200.html"},{"revision":"c30eca2a58ed95788b5423fd2f65b2b0","url":"200/index.html"},{"revision":"3e6af244e0a1b1f0cbbdd64c43828419","url":"404.html"},{"revision":"3f90944c0b571c65f310942a39c74e16","url":"404/index.html"},{"revision":"57e909ab67a056bf08d5fe1062fd8717","url":"500/index.html"},{"revision":"57e909ab67a056bf08d5fe1062fd8717","url":"agenda/index.html"},{"revision":"7fa4705c865da48540f7d90b5e87b7d2","url":"data/data.json"},{"revision":"9badce2397ba94531a41a4587676577e","url":"data/metadata.json"},{"revision":"416ef7202529463a618e35c6f3d32152","url":"data/ministerio.json"},{"revision":"0c67f062d6c248fbad406549c816ea19","url":"data/relatorio.json"},{"revision":"50d93598b24e42211df0a4e3dfb7d751","url":"data/tags-circulares.json"},{"revision":"50a4512f2768551bb27b7453a3066a3d","url":"data/tags.json"},{"revision":"510b1dd9ed35aaa360d50092a8c89afc","url":"evento/index.html"},{"revision":"510b1dd9ed35aaa360d50092a8c89afc","url":"evento/solicitar/index.html"},{"revision":"3d6ab5c053ecb8d8cadb03e9ad67ccb0","url":"eventos/index.html"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"510b1dd9ed35aaa360d50092a8c89afc","url":"forms/contato/index.html"},{"revision":"510b1dd9ed35aaa360d50092a8c89afc","url":"forms/levantamento_preventiva/index.html"},{"revision":"510b1dd9ed35aaa360d50092a8c89afc","url":"forms/manutencao/index.html"},{"revision":"d1335596020abae25d0add89a468b1c0","url":"forms/view/index.html"},{"revision":"d1335596020abae25d0add89a468b1c0","url":"hinos/index.html"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"3e6af244e0a1b1f0cbbdd64c43828419","url":"index.html"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"9495f82a0135c996553402c95ce39470","url":"js/sw/database.js"},{"revision":"5d6350ed327d88fb0f4a6b8072a8a519","url":"js/sw/firebase.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"510b1dd9ed35aaa360d50092a8c89afc","url":"lista/calendar-print/index.html"},{"revision":"510b1dd9ed35aaa360d50092a8c89afc","url":"lista/calendar/index.html"},{"revision":"d1335596020abae25d0add89a468b1c0","url":"lista/edit/index.html"},{"revision":"510b1dd9ed35aaa360d50092a8c89afc","url":"lista/index.html"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"3d6ab5c053ecb8d8cadb03e9ad67ccb0","url":"navegar/index.html"},{"revision":"3d6ab5c053ecb8d8cadb03e9ad67ccb0","url":"perfil/index.html"},{"revision":"3d6ab5c053ecb8d8cadb03e9ad67ccb0","url":"recentes/index.html"},{"revision":"d1335596020abae25d0add89a468b1c0","url":"relatorio/index.html"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"c40976a112fda680365583dc5cdeb52c","url":"service-worker.js"},{"revision":"d1335596020abae25d0add89a468b1c0","url":"servicos/index.html"},{"revision":"d1335596020abae25d0add89a468b1c0","url":"settings/index.html"},{"revision":"57e909ab67a056bf08d5fe1062fd8717","url":"sobre/index.html"}] || []);
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
