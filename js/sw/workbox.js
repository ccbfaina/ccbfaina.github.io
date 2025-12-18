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
      workbox.precaching.precacheAndRoute([{"revision":"f18514c774328c8a000db37f9c9a6b1c","url":"_nuxt/1OUMbeJy.js"},{"revision":"2d3a411b0bb76bfae1935b8195ce1d1d","url":"_nuxt/agenda.Cb08Du6M.css"},{"revision":"90cae94549d29096acc237a0d42a35c8","url":"_nuxt/B2mNKc1N.js"},{"revision":"0468a2e7cf692806f167e9194b242c8e","url":"_nuxt/BI0QEODR.js"},{"revision":"f26be8c4686360828c21c0b06088152e","url":"_nuxt/BkaJ0DXb.js"},{"revision":"8a6ab1ae12c2bf14f2fcc61cff0bf3ef","url":"_nuxt/BsI_Gq_k.js"},{"revision":"c225bebbb26df5b09cb658ef85cd3878","url":"_nuxt/builds/latest.json"},{"revision":"e35ebbb1bad52dcb1806cc5c9c558c63","url":"_nuxt/builds/meta/d7c41142-ae3d-4056-9332-5c083a0801b9.json"},{"revision":"21f5abd204d35d444b97cebed68ee209","url":"_nuxt/C8Eta1VE.js"},{"revision":"3b30b83d5326dfc600daf12dfd58e806","url":"_nuxt/C9EMordB.js"},{"revision":"ed42e499cd6aad558d648afe72ddd361","url":"_nuxt/calendar-print.T5tZYI5_.css"},{"revision":"9815d41ae434326a24dc35e62eec237b","url":"_nuxt/calendar.DHgtuuC9.css"},{"revision":"8ceac48c7bc973d2e4fab767d9de505d","url":"_nuxt/CD-EZydU.js"},{"revision":"89ff7ea622574684f800628f5aa8b971","url":"_nuxt/cfK1Wpvm.js"},{"revision":"13998acb03a9d33546132f15b01693bd","url":"_nuxt/CfVVdfyE.js"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"87a9f16a0ac2d30c83b171e877fbfc9f","url":"_nuxt/CMZMne4k.js"},{"revision":"14e879ebc75efcda12e0066eee635c52","url":"_nuxt/contato.3ci9Le7x.css"},{"revision":"b9ac5e10516ba16e2388d8718fc972c9","url":"_nuxt/CWW1n6AE.js"},{"revision":"3a4ecdac9f8fc8b75072a116e4985996","url":"_nuxt/CzMbUIHD.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"7919a451de2e8bd9c63976a3046a65a0","url":"_nuxt/DaNAWMaO.js"},{"revision":"223751e38b3fad7789749a419a000fd4","url":"_nuxt/DBDAui1i.js"},{"revision":"789490160bc462ebefe248bb5c224d93","url":"_nuxt/DbEtIfB4.js"},{"revision":"f39333200686af1d35c987128e2afbf1","url":"_nuxt/DBqtv4qv.js"},{"revision":"f94ff436ea2dd7c47e082e713ca40d43","url":"_nuxt/ddIkDnxG.js"},{"revision":"1c916f445ba394452071f89bccc1053c","url":"_nuxt/DecyOXwM.js"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"36f341e7c5ca5e65fcc91dce5202d202","url":"_nuxt/Dg9jpFHV.js"},{"revision":"f7fecd49e028e79865cafe8873c8684d","url":"_nuxt/DH-QUcWC.js"},{"revision":"712461be23b832d5298727ce2f09fc75","url":"_nuxt/DmkMO4cs.js"},{"revision":"1367d70f1c66ffeb5b025a60b3082b09","url":"_nuxt/Dmn0vmg5.js"},{"revision":"d10d730c05ca43635fb110d9e83edf56","url":"_nuxt/DPUvZxPE.js"},{"revision":"558851ec7581ec0b211515820030d6ca","url":"_nuxt/Dzvhedjq.js"},{"revision":"1df9f658ca06d6912b7e3c4afb5fe099","url":"_nuxt/EeDLGZpf.js"},{"revision":"822a7684d7c7aca1f8d28e6ba05cabd7","url":"_nuxt/entry.CM71C6yA.css"},{"revision":"1cec47ab46b69aff51eb4d9fe8b481a9","url":"_nuxt/eventos.D0qi4T-e.css"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"71c0797704e3ba6c6131812d26f4ad88","url":"_nuxt/ijkTaXCt.js"},{"revision":"5bfc4f03af2175efbfde5c245e9405f4","url":"_nuxt/index.BT7qESRD.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"df7f4f74f56b70b16d49ab41b128b950","url":"_nuxt/index.DzYW3UB-.css"},{"revision":"d3838d7d373de5ff91c0962fb4b0890c","url":"_nuxt/index.efd4-kTG.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"bc2d7613b5359fb09142aaff3c3bdcc6","url":"_nuxt/lj0firdq.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"be00fce10a162e4469800634b006201d","url":"_nuxt/menu.0lHMkiB6.css"},{"revision":"824b1d7761a285e7b1cbaf771eae182f","url":"_nuxt/navegar.DXE9DLXy.css"},{"revision":"7ab63ccccd79db73adb85c353fe559dd","url":"_nuxt/nnFkMnYp.js"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"bbe39b624200d245766bfedf3501c4e8","url":"_nuxt/oBh7x2jV.js"},{"revision":"fa0a916bb8ea5144500721e29c12662d","url":"_nuxt/OZndx6Yc.js"},{"revision":"658cd736a3a4d04b943de2f64f8c0d00","url":"_nuxt/pb4XLZ44.js"},{"revision":"069017b15d99939f06e910ab1cdd92eb","url":"_nuxt/perfil.BbtFWlj7.css"},{"revision":"8456b4730f5a71d9d9d63b6a3f8dc488","url":"_nuxt/recentes.CtKQcL51.css"},{"revision":"e5400f28ac27375dc249adf4b972c4b6","url":"_nuxt/relatorio.BGMUo3JX.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"e16fe871f60ebca36f1b2fd2b8bdfed6","url":"_nuxt/settings.D81KzNVB.css"},{"revision":"a8b5179d5b5806ec3883dc79a41b65f8","url":"_nuxt/sobre.c9vjT2Gh.css"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"faa0bad53779117ff8e12da80ac8917f","url":"_nuxt/TAHwMCRj.js"},{"revision":"fa2900c03f828a156c8490ad29cdecbe","url":"_nuxt/TQLcfTug.js"},{"revision":"10384aacb7f712cdf088409d5d450d71","url":"_nuxt/uyfUw2Pz.js"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"92edaa5072e434315f346e6567494050","url":"_nuxt/vZGkS2hF.js"},{"revision":"c5cfc8cdaf0e93b01396214dda927551","url":"200.html"},{"revision":"4340165ff26960d510f17ec52708fdd1","url":"200/index.html"},{"revision":"30b4e5e98badc45b952123d4b2b42a33","url":"404.html"},{"revision":"4d160c0264f0e95aa74f00cdcb4324b1","url":"404/index.html"},{"revision":"b9b7bd627eb77440a0ee4bb390cc23cb","url":"500/index.html"},{"revision":"1bcbc397968a9f206fcf9de94d0ccdb3","url":"agenda/index.html"},{"revision":"0f420845f7e264b300eadff4e2bc548f","url":"data/data.json"},{"revision":"8cbfdd1c02fe0392bf90b823fd138dd3","url":"data/metadata.json"},{"revision":"416ef7202529463a618e35c6f3d32152","url":"data/ministerio.json"},{"revision":"0c67f062d6c248fbad406549c816ea19","url":"data/relatorio.json"},{"revision":"50d93598b24e42211df0a4e3dfb7d751","url":"data/tags-circulares.json"},{"revision":"50a4512f2768551bb27b7453a3066a3d","url":"data/tags.json"},{"revision":"33503940b7b86cb0fd9249d2eb1cc999","url":"evento/index.html"},{"revision":"33503940b7b86cb0fd9249d2eb1cc999","url":"evento/solicitar/index.html"},{"revision":"fa14d42241a67ad2768add846dbcd0bf","url":"eventos/index.html"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"33503940b7b86cb0fd9249d2eb1cc999","url":"forms/contato/index.html"},{"revision":"33503940b7b86cb0fd9249d2eb1cc999","url":"forms/levantamento_preventiva/index.html"},{"revision":"33503940b7b86cb0fd9249d2eb1cc999","url":"forms/manutencao/index.html"},{"revision":"743dd7d7bb220666c098db870f75db07","url":"forms/view/index.html"},{"revision":"743dd7d7bb220666c098db870f75db07","url":"hinos/index.html"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"96f3db5fd0e129e598555f945893f2f5","url":"index.html"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"9495f82a0135c996553402c95ce39470","url":"js/sw/database.js"},{"revision":"5d6350ed327d88fb0f4a6b8072a8a519","url":"js/sw/firebase.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"33503940b7b86cb0fd9249d2eb1cc999","url":"lista/calendar-print/index.html"},{"revision":"33503940b7b86cb0fd9249d2eb1cc999","url":"lista/calendar/index.html"},{"revision":"743dd7d7bb220666c098db870f75db07","url":"lista/edit/index.html"},{"revision":"743dd7d7bb220666c098db870f75db07","url":"lista/index.html"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"fa14d42241a67ad2768add846dbcd0bf","url":"navegar/index.html"},{"revision":"fa14d42241a67ad2768add846dbcd0bf","url":"perfil/index.html"},{"revision":"dfb211215523f376eaedbdafad3aaf6e","url":"recentes/index.html"},{"revision":"743dd7d7bb220666c098db870f75db07","url":"relatorio/index.html"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"c40976a112fda680365583dc5cdeb52c","url":"service-worker.js"},{"revision":"dfb211215523f376eaedbdafad3aaf6e","url":"servicos/index.html"},{"revision":"dfb211215523f376eaedbdafad3aaf6e","url":"settings/index.html"},{"revision":"1bcbc397968a9f206fcf9de94d0ccdb3","url":"sobre/index.html"}] || []);
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
