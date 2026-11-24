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
      workbox.precaching.precacheAndRoute([{"revision":"c40976a112fda680365583dc5cdeb52c","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"f53c09e14087dbb61f061192ad88d6e9","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"b3ded3a1a050530d802b523c25cb5c91","url":"404.html"},{"revision":"b3ded3a1a050530d802b523c25cb5c91","url":"200.html"},{"revision":"d0a5fe202db2af3c557df7e8d52aca1b","url":"sobre/index.html"},{"revision":"8b62f47db92708322984f422dd020ced","url":"settings/index.html"},{"revision":"391c74aafc9f4e915518355ccbcd5435","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"8b62f47db92708322984f422dd020ced","url":"relatorio/index.html"},{"revision":"391c74aafc9f4e915518355ccbcd5435","url":"records/index.html"},{"revision":"391c74aafc9f4e915518355ccbcd5435","url":"recentes/index.html"},{"revision":"c7002dcaae0c7a98e982b97565a8c77f","url":"perfil/index.html"},{"revision":"d0a5fe202db2af3c557df7e8d52aca1b","url":"pages/index.html"},{"revision":"391c74aafc9f4e915518355ccbcd5435","url":"navegar/index.html"},{"revision":"d0a5fe202db2af3c557df7e8d52aca1b","url":"login/index.html"},{"revision":"0628c6ab064cebb1227e1db20f421ce0","url":"lista/index.html"},{"revision":"8b62f47db92708322984f422dd020ced","url":"lista/edit/index.html"},{"revision":"b3ded3a1a050530d802b523c25cb5c91","url":"lista/calendar-print/index.html"},{"revision":"0628c6ab064cebb1227e1db20f421ce0","url":"lista/calendar/index.html"},{"revision":"d0a5fe202db2af3c557df7e8d52aca1b","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"5d6350ed327d88fb0f4a6b8072a8a519","url":"js/sw/firebase.js"},{"revision":"9495f82a0135c996553402c95ce39470","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"0628c6ab064cebb1227e1db20f421ce0","url":"hinos/index.html"},{"revision":"8b62f47db92708322984f422dd020ced","url":"forms/view/index.html"},{"revision":"b3ded3a1a050530d802b523c25cb5c91","url":"forms/manutencao/index.html"},{"revision":"b3ded3a1a050530d802b523c25cb5c91","url":"forms/levantamento_preventiva/index.html"},{"revision":"0628c6ab064cebb1227e1db20f421ce0","url":"forms/contato/index.html"},{"revision":"b3ded3a1a050530d802b523c25cb5c91","url":"forgot-password/index.html"},{"revision":"c7002dcaae0c7a98e982b97565a8c77f","url":"eventos/index.html"},{"revision":"0628c6ab064cebb1227e1db20f421ce0","url":"evento/index.html"},{"revision":"b3ded3a1a050530d802b523c25cb5c91","url":"evento/solicitar/index.html"},{"revision":"fa22ddb830f20e1cbc567fe2075f52d8","url":"data/tags.json"},{"revision":"50d93598b24e42211df0a4e3dfb7d751","url":"data/tags-circulares.json"},{"revision":"0c67f062d6c248fbad406549c816ea19","url":"data/relatorio.json"},{"revision":"416ef7202529463a618e35c6f3d32152","url":"data/ministerio.json"},{"revision":"8cbfdd1c02fe0392bf90b823fd138dd3","url":"data/metadata.json"},{"revision":"db320e577dbfa83d8489c5c71ad24284","url":"data/data.json"},{"revision":"c7002dcaae0c7a98e982b97565a8c77f","url":"agenda/index.html"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"3d9aad04796ee8f3d3e3c63d41ed354f","url":"_nuxt/useHolidays.Cnq2fMW2.css"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"e16fe871f60ebca36f1b2fd2b8bdfed6","url":"_nuxt/settings.D81KzNVB.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"8456b4730f5a71d9d9d63b6a3f8dc488","url":"_nuxt/recentes.CtKQcL51.css"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"824b1d7761a285e7b1cbaf771eae182f","url":"_nuxt/navegar.DXE9DLXy.css"},{"revision":"e0510296dbe54614b7d355cdab608b37","url":"_nuxt/menu.DVhHSjEg.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"c79b715f975f199a2c4cffb7d3cc911d","url":"_nuxt/kQY5AmGS.js"},{"revision":"17c274f29864f7ba42666966183dc105","url":"_nuxt/joU9xiut.js"},{"revision":"2a0e41f635cc3844a8c2830826ae3beb","url":"_nuxt/index.xA83gVRs.css"},{"revision":"f6b6a1f7fafcbc0b241ea5f3569f7b5e","url":"_nuxt/index.DU09tfFf.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"fbda544487abe7009243e7339ea281b0","url":"_nuxt/index.BNQXmi5z.css"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"2b214c846899444a69c59b290c93751c","url":"_nuxt/eventos.CXhhCs06.css"},{"revision":"c65545ddb8b339ad7466dec1b7878723","url":"_nuxt/entry.C-aqvbc1.css"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"543a4556d33e597d4bbdd6b18724bd44","url":"_nuxt/calendar.By77Oy8o.css"},{"revision":"b263c0f5b9698bdb39542f87dd866dc4","url":"_nuxt/calendar-print.DHVwiYMP.css"},{"revision":"293301ffff89fafcd7e3a2a0fe8f4fe0","url":"_nuxt/c1u878Dn.js"},{"revision":"ccf9bcbed9933107a121b8441d8a8370","url":"_nuxt/agenda.B1qY6oE2.css"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"9c36ce5c65bcb378d5a3b6950a0d3066","url":"_nuxt/YISHmkjF.js"},{"revision":"e9db5d02067ef9ed86e06dccf960311b","url":"_nuxt/QuP7cye5.js"},{"revision":"b387ecd5685c38d68cb7d3a7fd68fd9a","url":"_nuxt/Qr5c4fPk.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"5047d1a824c620715a764cf4e0f5dfa5","url":"_nuxt/KOqunBWs.js"},{"revision":"8263cd750fbee8d81c0c40ec72665e7d","url":"_nuxt/DtaNByPE.js"},{"revision":"edc570c05507571bef569f26dfaf9b35","url":"_nuxt/DrPxxynT.js"},{"revision":"5776bef57f987417d4cfad973557cc97","url":"_nuxt/Dr6m7lhO.js"},{"revision":"a900822df3d913449d6861a719812eed","url":"_nuxt/Dp7e31O6.js"},{"revision":"2922836ccab67fbf2e9451ac233a42f3","url":"_nuxt/Dp4VMlPq.js"},{"revision":"8a21abec1e45578972b886324e270441","url":"_nuxt/DmYIsbsN.js"},{"revision":"0aba7264dd31e768db6bc7cc4743b745","url":"_nuxt/Dj_rG-F9.js"},{"revision":"17a84850d867f93690eef705ac24a06c","url":"_nuxt/DdFo8GDX.js"},{"revision":"afb54902525a23a75289c977ee49422b","url":"_nuxt/DSHVr9yF.js"},{"revision":"f7f07760d560a4826889f075a69e073a","url":"_nuxt/DEjtiUvJ.js"},{"revision":"024d082a39b40fb5aaafd2cf2cac2574","url":"_nuxt/DBY_GC6c.js"},{"revision":"25df74e6368fd3fd75097eff69123c90","url":"_nuxt/DA9J_0eP.js"},{"revision":"15827b6df58f3b0f908e892140599229","url":"_nuxt/D6f5NO2y.js"},{"revision":"c38cea12fa9f9e20199606fd73d28c3a","url":"_nuxt/D3WI5TFK.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"ce7c794ede43aef7c91061336658fade","url":"_nuxt/CtWnZ3wx.js"},{"revision":"ea0a6e3408f17610ed417723db389303","url":"_nuxt/CnYmUD9Y.js"},{"revision":"83e0ae83d5ef1f569ce7b1fe9b5f42a1","url":"_nuxt/C_XXwh-i.js"},{"revision":"089d2355bbb71634a5c91d529626a304","url":"_nuxt/CVF2Avaz.js"},{"revision":"b257ca70326f097643c78f0aed541550","url":"_nuxt/CShvNBvj.js"},{"revision":"fbfc8d7b0f76eee521d1b4796deb2580","url":"_nuxt/CHBt7WoK.js"},{"revision":"967cee2734707c6a88c4249408a437b2","url":"_nuxt/CE_xvkuM.js"},{"revision":"d24b6ce51245a47da2b30b1d13cd9a9f","url":"_nuxt/C5sMx_9o.js"},{"revision":"3f97abc256036ac8a6e8795986d75bbf","url":"_nuxt/C4XMWy3Y.js"},{"revision":"1a97a9019942b3cf3c9ff7118cc04f99","url":"_nuxt/Byqd57g2.js"},{"revision":"cbb7b0c6175d2668ec29dadf381a2014","url":"_nuxt/BxBlEp2A.js"},{"revision":"69aade6a07de190009fe2024986a2315","url":"_nuxt/BnmvdYhi.js"},{"revision":"d88122b4375e15d4ba49d4c39f0db4da","url":"_nuxt/BipPK340.js"},{"revision":"0492df825461eaf09381acc2e2e4cabe","url":"_nuxt/BbRujrn6.js"},{"revision":"2a9dfb3f553c7a1334f4f389f8fd5ed0","url":"_nuxt/B_07DhUH.js"},{"revision":"f53babb5b4794234a2e0e1c5ab8660b6","url":"_nuxt/BUUgcKLp.js"},{"revision":"231f1801c5208546fba9715ad3ee22c9","url":"_nuxt/BRCYYAbD.js"},{"revision":"18638f2d44be6e3f6cdadff4435354fb","url":"_nuxt/BMTxq2Zh.js"},{"revision":"5c1bebd6c3c82e6d6fe4a98cb78a85e3","url":"_nuxt/BBChMtSN.js"},{"revision":"341638d8999ae8917676fe1a7a77faf3","url":"_nuxt/B7tWM5lc.js"},{"revision":"26eea4fc2de9021844de08f207d2b375","url":"_nuxt/B1Uv1nv3.js"},{"revision":"e864a9440153f0fa61987cc2da9ff4a1","url":"_nuxt/B0WR9t_N.js"},{"revision":"f3c7dadb36e23ce7a87fa77caaab2330","url":"_nuxt/7YOx4yn2.js"},{"revision":"d2de4fb294246ebf0edcb907db1b9238","url":"_nuxt/builds/latest.json"},{"revision":"590d941e2d4e7d6ff6bfb2e60f88645e","url":"_nuxt/builds/meta/520517c5-96ce-4cd0-a0c8-eb1260640ff8.json"},{"revision":"906c7341130757b0ddf88840944fd0ce","url":"500/index.html"},{"revision":"906c7341130757b0ddf88840944fd0ce","url":"404/index.html"},{"revision":"afa2ae8fc0b2c74c580b3bf697247a3c","url":"200/index.html"}] || []);
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
