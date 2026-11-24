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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"3f37fe1d40df37696130cf5b830956fa","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"3f37fe1d40df37696130cf5b830956fa","url":"404.html"},{"revision":"3f37fe1d40df37696130cf5b830956fa","url":"200.html"},{"revision":"4d21bd512531c8b51244e10fb84ecc96","url":"sobre/index.html"},{"revision":"4d7aa9ffdb57c0a7461e99c7cd13a655","url":"settings/index.html"},{"revision":"4d7aa9ffdb57c0a7461e99c7cd13a655","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"4d7aa9ffdb57c0a7461e99c7cd13a655","url":"relatorio/index.html"},{"revision":"4d7aa9ffdb57c0a7461e99c7cd13a655","url":"records/index.html"},{"revision":"4d7aa9ffdb57c0a7461e99c7cd13a655","url":"recentes/index.html"},{"revision":"4d21bd512531c8b51244e10fb84ecc96","url":"perfil/index.html"},{"revision":"4d21bd512531c8b51244e10fb84ecc96","url":"pages/index.html"},{"revision":"4d7aa9ffdb57c0a7461e99c7cd13a655","url":"navegar/index.html"},{"revision":"245848b11d6aacb2416b9cbac634496d","url":"login/index.html"},{"revision":"349b900c8461999cdcc4d4a918c7dcc2","url":"lista/index.html"},{"revision":"349b900c8461999cdcc4d4a918c7dcc2","url":"lista/edit/index.html"},{"revision":"3f37fe1d40df37696130cf5b830956fa","url":"lista/calendar-print/index.html"},{"revision":"349b900c8461999cdcc4d4a918c7dcc2","url":"lista/calendar/index.html"},{"revision":"245848b11d6aacb2416b9cbac634496d","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"5d6350ed327d88fb0f4a6b8072a8a519","url":"js/sw/firebase.js"},{"revision":"9495f82a0135c996553402c95ce39470","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"349b900c8461999cdcc4d4a918c7dcc2","url":"hinos/index.html"},{"revision":"349b900c8461999cdcc4d4a918c7dcc2","url":"forms/view/index.html"},{"revision":"3f37fe1d40df37696130cf5b830956fa","url":"forms/manutencao/index.html"},{"revision":"3f37fe1d40df37696130cf5b830956fa","url":"forms/levantamento_preventiva/index.html"},{"revision":"349b900c8461999cdcc4d4a918c7dcc2","url":"forms/contato/index.html"},{"revision":"3f37fe1d40df37696130cf5b830956fa","url":"forgot-password/index.html"},{"revision":"4d7aa9ffdb57c0a7461e99c7cd13a655","url":"eventos/index.html"},{"revision":"349b900c8461999cdcc4d4a918c7dcc2","url":"evento/index.html"},{"revision":"3f37fe1d40df37696130cf5b830956fa","url":"evento/solicitar/index.html"},{"revision":"4d21bd512531c8b51244e10fb84ecc96","url":"agenda/index.html"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"3d9aad04796ee8f3d3e3c63d41ed354f","url":"_nuxt/useHolidays.Cnq2fMW2.css"},{"revision":"adbf2272b48e14f982ce6232bd7ed29b","url":"_nuxt/uQjamXS5.js"},{"revision":"c80dd4830f2b2adca031d4b7d229db48","url":"_nuxt/tlzmhQUt.js"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"e16fe871f60ebca36f1b2fd2b8bdfed6","url":"_nuxt/settings.D81KzNVB.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"8456b4730f5a71d9d9d63b6a3f8dc488","url":"_nuxt/recentes.CtKQcL51.css"},{"revision":"072ae0a13544c695f02c05eef8601937","url":"_nuxt/qZhNsaLS.js"},{"revision":"7c733513cd2ab58f835a006454dfedde","url":"_nuxt/q0U8-ED9.js"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"824b1d7761a285e7b1cbaf771eae182f","url":"_nuxt/navegar.DXE9DLXy.css"},{"revision":"e0510296dbe54614b7d355cdab608b37","url":"_nuxt/menu.DVhHSjEg.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"e8a334de04480715e0ec26bca15b2d5e","url":"_nuxt/j3FSSNIE.js"},{"revision":"2a0e41f635cc3844a8c2830826ae3beb","url":"_nuxt/index.xA83gVRs.css"},{"revision":"f6b6a1f7fafcbc0b241ea5f3569f7b5e","url":"_nuxt/index.DU09tfFf.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"fbda544487abe7009243e7339ea281b0","url":"_nuxt/index.BNQXmi5z.css"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"2b214c846899444a69c59b290c93751c","url":"_nuxt/eventos.CXhhCs06.css"},{"revision":"c65545ddb8b339ad7466dec1b7878723","url":"_nuxt/entry.C-aqvbc1.css"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"543a4556d33e597d4bbdd6b18724bd44","url":"_nuxt/calendar.By77Oy8o.css"},{"revision":"b263c0f5b9698bdb39542f87dd866dc4","url":"_nuxt/calendar-print.DHVwiYMP.css"},{"revision":"ccf9bcbed9933107a121b8441d8a8370","url":"_nuxt/agenda.B1qY6oE2.css"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"84b8b83eafac8b213fe823ef99b1f0a6","url":"_nuxt/VheePARA.js"},{"revision":"79b5bc3f21fd6c98d5e59e7cc48355e1","url":"_nuxt/RkoObD-x.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"b114ab2cd1a1a1ad561b1d97bdd9b3d3","url":"_nuxt/DwBe0BNI.js"},{"revision":"4e6fe784e89db61da8854b4154ab7337","url":"_nuxt/DsIPVs0h.js"},{"revision":"69b945445334444e87ad016ba75b9916","url":"_nuxt/Ds0DZuK4.js"},{"revision":"c06e7eb4018a968c2d5c414d6a85d47c","url":"_nuxt/Dpu6GlmC.js"},{"revision":"eff6c074ad90fe1ace9b4d7599e572a5","url":"_nuxt/DeuZ5de8.js"},{"revision":"5166c9688d73221ae12a3f4669067699","url":"_nuxt/DciF2Beg.js"},{"revision":"13617029026c88ec834c9fe4f55bccf7","url":"_nuxt/DbnqcUuA.js"},{"revision":"948b1373e25b1afc4f4c68bd8b722f3f","url":"_nuxt/DWNR-oOh.js"},{"revision":"5eceed34b4158fec845c40173bad6767","url":"_nuxt/DSoGZSbY.js"},{"revision":"b1c5db1c981f0b63693d06067e677604","url":"_nuxt/DMnUiOtz.js"},{"revision":"4e44dea8034b541b45cef4197a1daa46","url":"_nuxt/DLqroipg.js"},{"revision":"17d45c13c1ba42ca45d4dbde59c20005","url":"_nuxt/DGS2DFxB.js"},{"revision":"95e129c7cca1d7757a81a9e452fbd33c","url":"_nuxt/DG6O2-pw.js"},{"revision":"8c545a5b6d5d1f7e996b7923d7c751b7","url":"_nuxt/D4Bv1lLz.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"f6f8a678ca665e8cbacd3302690e1e52","url":"_nuxt/D08nRhas.js"},{"revision":"58feee0ccccfcd540d06255c125e7824","url":"_nuxt/Ci5o2sP7.js"},{"revision":"e2676f23f5203070f6fc13729c3fa612","url":"_nuxt/CfvVRPaw.js"},{"revision":"dc7dbfb4baaa072a010df57e4c596645","url":"_nuxt/CcUN2Go8.js"},{"revision":"87c50beaa7cb19492b2dc45d4efdd5b6","url":"_nuxt/CcJNk4cO.js"},{"revision":"c8db6824f80a7f057087909d6a1bb0ea","url":"_nuxt/CYgtoHs0.js"},{"revision":"5451cb573c31589c5236963572c64a49","url":"_nuxt/CYJ9oKtG.js"},{"revision":"b3b7024ccaeb3f9e100d1d7780ab594b","url":"_nuxt/CRoSBgkR.js"},{"revision":"c86b62e1cf7140513acd38300dd1b993","url":"_nuxt/CQ1CZ_Ml.js"},{"revision":"189200f332dced3ad8ea36df4daf239d","url":"_nuxt/CCchDrGn.js"},{"revision":"67eab0e1f881d8b3c75ab386719b2fb4","url":"_nuxt/C8al6Vhp.js"},{"revision":"e5cec540dd93fae0a2445b7aac7571be","url":"_nuxt/C3-wlxQx.js"},{"revision":"f1201fd8c2d71009c430153dd256c20a","url":"_nuxt/C09IH-Pz.js"},{"revision":"4255e20a64c846580499b39ced21c3be","url":"_nuxt/Bm9kH0_a.js"},{"revision":"117849b8a7d65269041d4e64aa12a5bd","url":"_nuxt/Bf3NWEAj.js"},{"revision":"76c79219404cef2625090dc31d45eb79","url":"_nuxt/BYwh-uul.js"},{"revision":"952f9d22940162f836a12bfe840f7d58","url":"_nuxt/BWczk2p5.js"},{"revision":"8936e27e08c701cca44cac99508176f0","url":"_nuxt/B9tcVPS-.js"},{"revision":"bc72c000c2ab7177a6bd61277da30445","url":"_nuxt/B5WS6_TX.js"},{"revision":"600bbd8e3142cb024dcf97e62244fa68","url":"_nuxt/B1mdnh_w.js"},{"revision":"b39f192f58ff764649e17c79c00e3969","url":"_nuxt/AbimiDj2.js"},{"revision":"aef35eab09263db70af5589d6136572d","url":"_nuxt/7HJxhUH6.js"},{"revision":"40a2af16bc4c71cbceb6bb9dd1011bae","url":"_nuxt/3b9-PBok.js"},{"revision":"197772c34457bff60c1150b9bc11e8ea","url":"_nuxt/builds/latest.json"},{"revision":"b9dc44a9bf2c66fbebf478606c0a94a8","url":"_nuxt/builds/meta/a42b77b6-ac21-4aca-84bd-548bfcd00c42.json"},{"revision":"245848b11d6aacb2416b9cbac634496d","url":"500/index.html"},{"revision":"245848b11d6aacb2416b9cbac634496d","url":"404/index.html"},{"revision":"de99d3ee7ab9e119c302c59d3722c626","url":"200/index.html"}] || []);
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
