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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"3522898f548c34aaa7ea0640eb90ced3","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"3522898f548c34aaa7ea0640eb90ced3","url":"404.html"},{"revision":"3522898f548c34aaa7ea0640eb90ced3","url":"200.html"},{"revision":"9859311101ff5376e2fceaf79b42be93","url":"sobre/index.html"},{"revision":"a01848a5131cd92e0dc76cfdd25f0240","url":"settings/index.html"},{"revision":"a01848a5131cd92e0dc76cfdd25f0240","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"a01848a5131cd92e0dc76cfdd25f0240","url":"relatorio/index.html"},{"revision":"2456018cec0b8c5309595b9c6120d4c0","url":"records/index.html"},{"revision":"a01848a5131cd92e0dc76cfdd25f0240","url":"recentes/index.html"},{"revision":"2456018cec0b8c5309595b9c6120d4c0","url":"perfil/index.html"},{"revision":"9859311101ff5376e2fceaf79b42be93","url":"pages/index.html"},{"revision":"2456018cec0b8c5309595b9c6120d4c0","url":"navegar/index.html"},{"revision":"9859311101ff5376e2fceaf79b42be93","url":"login/index.html"},{"revision":"d2f9251e3208d21f0adbee083354feb8","url":"lista/index.html"},{"revision":"a01848a5131cd92e0dc76cfdd25f0240","url":"lista/edit/index.html"},{"revision":"3522898f548c34aaa7ea0640eb90ced3","url":"lista/calendar-print/index.html"},{"revision":"d2f9251e3208d21f0adbee083354feb8","url":"lista/calendar/index.html"},{"revision":"9859311101ff5376e2fceaf79b42be93","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"5d6350ed327d88fb0f4a6b8072a8a519","url":"js/sw/firebase.js"},{"revision":"9495f82a0135c996553402c95ce39470","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"d2f9251e3208d21f0adbee083354feb8","url":"hinos/index.html"},{"revision":"a01848a5131cd92e0dc76cfdd25f0240","url":"forms/view/index.html"},{"revision":"d2f9251e3208d21f0adbee083354feb8","url":"forms/manutencao/index.html"},{"revision":"3522898f548c34aaa7ea0640eb90ced3","url":"forms/levantamento_preventiva/index.html"},{"revision":"d2f9251e3208d21f0adbee083354feb8","url":"forms/contato/index.html"},{"revision":"d2f9251e3208d21f0adbee083354feb8","url":"forgot-password/index.html"},{"revision":"2456018cec0b8c5309595b9c6120d4c0","url":"eventos/index.html"},{"revision":"d2f9251e3208d21f0adbee083354feb8","url":"evento/index.html"},{"revision":"d2f9251e3208d21f0adbee083354feb8","url":"evento/solicitar/index.html"},{"revision":"2456018cec0b8c5309595b9c6120d4c0","url":"agenda/index.html"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"3d9aad04796ee8f3d3e3c63d41ed354f","url":"_nuxt/useHolidays.Cnq2fMW2.css"},{"revision":"14afaca6e3bd7ee95072fe88d377566f","url":"_nuxt/solicitar.C0T4GfkF.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"e16fe871f60ebca36f1b2fd2b8bdfed6","url":"_nuxt/settings.D81KzNVB.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"872f4e48bf987374b2020c37de3bfe6c","url":"_nuxt/relatorio.WcyAoo_0.css"},{"revision":"8c59562116e9547c7e0a469614dc4d69","url":"_nuxt/records.Bpffve3U.css"},{"revision":"3dc0fce1a5edc44a4b94095c04de80eb","url":"_nuxt/recentes.p2X5nAX5.css"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"b537e1043ea3056cf778b22456fd3dba","url":"_nuxt/pages.D3VW3Cta.css"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"824b1d7761a285e7b1cbaf771eae182f","url":"_nuxt/navegar.DXE9DLXy.css"},{"revision":"38b7f0b38a102e1b524086132952642c","url":"_nuxt/menu.B8Zv1MPp.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"4c3560cb333bc8fd3eaf2fe938664f54","url":"_nuxt/login.GAlrDt4w.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"2a0e41f635cc3844a8c2830826ae3beb","url":"_nuxt/index.xA83gVRs.css"},{"revision":"b378e058eed86c9ae937b2c2a81851d8","url":"_nuxt/index.aTsxEMpu.css"},{"revision":"10306cf4d5a01f9a01c358add87bbc49","url":"_nuxt/index.DAXCvfOW.css"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/index.C01wgp59.css"},{"revision":"193b9c772a1a41a570bfc427d213baf5","url":"_nuxt/gfJflpoM.js"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"ee3f9c623a9d6ed6fde35bffc52195be","url":"_nuxt/forgot-password.BBRbIn8t.css"},{"revision":"2b214c846899444a69c59b290c93751c","url":"_nuxt/eventos.CXhhCs06.css"},{"revision":"1fd1b6813c0d40a17206aa24dcc7d0a3","url":"_nuxt/entry.DYz43uzN.css"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"543a4556d33e597d4bbdd6b18724bd44","url":"_nuxt/calendar.By77Oy8o.css"},{"revision":"b263c0f5b9698bdb39542f87dd866dc4","url":"_nuxt/calendar-print.DHVwiYMP.css"},{"revision":"3a1e07ce57e01f33384cd9039b0f1c01","url":"_nuxt/b7RWAxd8.js"},{"revision":"ccf9bcbed9933107a121b8441d8a8370","url":"_nuxt/agenda.B1qY6oE2.css"},{"revision":"67c70effc9060884156b000569c143df","url":"_nuxt/_id_.DV6VS9Qw.css"},{"revision":"3a7bb8513743b1305b6c0f4608a38772","url":"_nuxt/_id_.CIZ3A7EQ.css"},{"revision":"ef7774103b1a83ad38a1401ef52881b5","url":"_nuxt/ZhG07umN.js"},{"revision":"7988c20290b0b995f01b71b0d1bb5e41","url":"_nuxt/XnSpu6nm.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"462712f05e71014ac27e21ed4d6dcbf6","url":"_nuxt/IhzoZfZP.js"},{"revision":"57db122586d4c7f3539601ea79e4bbc6","url":"_nuxt/HOEq_OYY.js"},{"revision":"9c42a4f33dc66c05fcc3a2d51ac43f02","url":"_nuxt/Esp5ZzoE.js"},{"revision":"07fdf83ab8feab53cc4bc42be418c1c8","url":"_nuxt/EoWmsWko.js"},{"revision":"2b50eb4b171a1c6a732efa1565a8a79a","url":"_nuxt/DxxmzFYq.js"},{"revision":"1d17b2a1a63c7228eb6f849e66502acf","url":"_nuxt/DjA8FV16.js"},{"revision":"16ce287bf8b155f164f58a5f98b9b014","url":"_nuxt/D_hAetRs.js"},{"revision":"362dd226ccc0836051ff57b616e08b60","url":"_nuxt/DZ80TfGh.js"},{"revision":"78106e7fa965f20ceb5c972319fa9090","url":"_nuxt/DY1p5LNj.js"},{"revision":"fe4d5bd78250665b6b0ba4254b4e1c4d","url":"_nuxt/DO8AWbtR.js"},{"revision":"45c0619755690c479b95357b59e8e29d","url":"_nuxt/DImgVv6T.js"},{"revision":"00627eca636322c609503aad51ed7a65","url":"_nuxt/DGycxLMA.js"},{"revision":"ed6f9d543bb9ab71ec78129d55e558f5","url":"_nuxt/D2hSdqq4.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"90034db5895898de542a5222d9d922b4","url":"_nuxt/CndY1Cxi.js"},{"revision":"82415a1aa2d7d494da96eb189df842af","url":"_nuxt/ClNtJBFv.js"},{"revision":"3483fcc57e862c5a85dbefb92d1713a3","url":"_nuxt/Cktd4LhL.js"},{"revision":"35dc291693af7432bf0fd008c07cf99e","url":"_nuxt/CdaAsbfx.js"},{"revision":"fda4c15a5be1d409db7d61c9e895e871","url":"_nuxt/CVBTfJN2.js"},{"revision":"444da8bf04487fc69e99fc34922487a6","url":"_nuxt/CSvdyAYS.js"},{"revision":"31d3b60e1cda0a6ed329ce24ec739d1f","url":"_nuxt/CLeDmbQ-.js"},{"revision":"2ab2aa882afeaf6d45f6763c281b3785","url":"_nuxt/CKhXDUAf.js"},{"revision":"c3d01a703779ae5c614e4d0495b780b4","url":"_nuxt/CF9i29xe.js"},{"revision":"ed767e8af5a17bc393f36a613d16d7e9","url":"_nuxt/CEXeOqO9.js"},{"revision":"02c3f1aa16afdebf3c95a36efb50c4e6","url":"_nuxt/C9JRMx_p.js"},{"revision":"e076ca9473773502c2a738661eb34834","url":"_nuxt/C-5dcKP3.js"},{"revision":"52c9b5c6882e01ca71bcb8edc8dd529e","url":"_nuxt/ByrkTcFq.js"},{"revision":"7c9c817cd78f727c35905fd839637cc5","url":"_nuxt/BtPEFUYJ.js"},{"revision":"92d70b99edf11d00e0425656f7f84706","url":"_nuxt/BsJ09V87.js"},{"revision":"eade7bd94346db3feaf6e06a7221dcf7","url":"_nuxt/Bo_T_tpx.js"},{"revision":"43a97ac0f246846cd83634bfbcc3e026","url":"_nuxt/BoVw4Xrb.js"},{"revision":"f2e3b17d83eccfe0e04e57c8cd325dcd","url":"_nuxt/BmLsWWw4.js"},{"revision":"f6fcc052ab79ac25249625fa4f8c23fd","url":"_nuxt/Blgw1SMR.js"},{"revision":"e7012a1979d169e300600a088200c2f0","url":"_nuxt/BjU6b2OY.js"},{"revision":"2c0879a668bf5d0f16ef825b8c276651","url":"_nuxt/Bc5j2hLO.js"},{"revision":"4ea35b556f2990b6a079928c73df6af7","url":"_nuxt/BZfqWQ_p.js"},{"revision":"678aada26f8750fe59ffdf030cbb0755","url":"_nuxt/BR3j-Ul8.js"},{"revision":"46a0b7182c34d27583ef4e81023fe978","url":"_nuxt/BFVNTRL7.js"},{"revision":"deda5d3d50a6a268397275d6a5b5141c","url":"_nuxt/BCCE6NGz.js"},{"revision":"4a5bbfb1d811c886bddb4527664f02e5","url":"_nuxt/7rlU5-G-.js"},{"revision":"ef0d091f7ec83f48627d40c1d709d102","url":"_nuxt/7VcMQ8JE.js"},{"revision":"d1765c72d2f76a68c115c8e622471775","url":"_nuxt/65mFAwI3.js"},{"revision":"94555661fa7ff22e4aba79aa439aa847","url":"_nuxt/builds/latest.json"},{"revision":"a53752f33c8ab3a4acada86887aee426","url":"_nuxt/builds/meta/980b0d04-fa40-4ae7-971c-09f09b173206.json"},{"revision":"364d4adfcf0676dbede35ef4d8e425a2","url":"500/index.html"},{"revision":"364d4adfcf0676dbede35ef4d8e425a2","url":"404/index.html"},{"revision":"364d4adfcf0676dbede35ef4d8e425a2","url":"200/index.html"}] || []);
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
