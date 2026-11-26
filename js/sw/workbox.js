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
      workbox.precaching.precacheAndRoute([{"revision":"cfff77eb2fb48abada7cd6fc0e904e07","url":"service-worker.js"},{"revision":"46041b0767d24770a77cca3ada6b1311","url":"manifest.webmanifest"},{"revision":"7d25d1ecbe91a8a5eaed92695558d3d3","url":"index.html"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.sync-conflict-20251009-114321-MQCW6GZ.js"},{"revision":"fe3fb4ba1af11bd08db69b42559eb245","url":"firebase-messaging-sw.js"},{"revision":"27b89616efd846aa579b3b5734343c8f","url":"favicon.ico"},{"revision":"7d25d1ecbe91a8a5eaed92695558d3d3","url":"404.html"},{"revision":"7d25d1ecbe91a8a5eaed92695558d3d3","url":"200.html"},{"revision":"ef1cc4bd9c54dcd9f743e0829d4d5592","url":"sugestoes/regional.json"},{"revision":"aa24647b96f02d6d689599e6799034a4","url":"sugestoes/nomes.json"},{"revision":"36ceac81598c76443e176dc8142946c9","url":"sobre/index.html"},{"revision":"e697ea658d0e80baf5a9f41422c47a5b","url":"settings/index.html"},{"revision":"e697ea658d0e80baf5a9f41422c47a5b","url":"servicos/index.html"},{"revision":"22203dd79381b922a8453fd9003822a8","url":"screenshots/mobile.png"},{"revision":"5dd1ef12b5306cb6eb2a34b21a34ce23","url":"screenshots/desktop.png"},{"revision":"e697ea658d0e80baf5a9f41422c47a5b","url":"relatorio/index.html"},{"revision":"e697ea658d0e80baf5a9f41422c47a5b","url":"records/index.html"},{"revision":"e697ea658d0e80baf5a9f41422c47a5b","url":"recentes/index.html"},{"revision":"e697ea658d0e80baf5a9f41422c47a5b","url":"perfil/index.html"},{"revision":"36ceac81598c76443e176dc8142946c9","url":"pages/index.html"},{"revision":"e697ea658d0e80baf5a9f41422c47a5b","url":"navegar/index.html"},{"revision":"36ceac81598c76443e176dc8142946c9","url":"login/index.html"},{"revision":"e697ea658d0e80baf5a9f41422c47a5b","url":"lista/index.html"},{"revision":"e697ea658d0e80baf5a9f41422c47a5b","url":"lista/edit/index.html"},{"revision":"7d25d1ecbe91a8a5eaed92695558d3d3","url":"lista/calendar-print/index.html"},{"revision":"e697ea658d0e80baf5a9f41422c47a5b","url":"lista/calendar/index.html"},{"revision":"36ceac81598c76443e176dc8142946c9","url":"leads/index.html"},{"revision":"f7863cc8fdd5df3fc7c88664e5f22773","url":"js/sw/utils.js"},{"revision":"03aa2fc3692eb28110c26a7a2448f517","url":"js/sw/logger.js"},{"revision":"dbb3e8573b59e2c645501148585fe8bd","url":"js/sw/firebase.js"},{"revision":"2cc32c31d1de207c4268a72a2198311e","url":"js/sw/database.js"},{"revision":"214a77fa9f007dd0d4652ee8e268ad73","url":"js/sw/client-manager.js"},{"revision":"2808538d6ebb922a6fff3e7e8c357541","url":"js/sw/vendor/dexie.js"},{"revision":"c2eba1515364b627c4f3d5eb6a4bee5b","url":"js/sw/vendor/workbox/workbox-sw.js"},{"revision":"d72bef0e706a8b25012dfa8aa1e4dfff","url":"js/sw/vendor/workbox/workbox-strategies.prod.js"},{"revision":"90d3aeeedbf6f25853c480d92bc51839","url":"js/sw/vendor/workbox/workbox-routing.prod.js"},{"revision":"24c50c33b7c66d7152d4ebae0ac8bd31","url":"js/sw/vendor/workbox/workbox-precaching.prod.js"},{"revision":"2c14e6d1a14b7b1db30586e38ff7a7ae","url":"js/sw/vendor/workbox/workbox-navigation-preload.prod.js"},{"revision":"0e7ae639b709c2e7c22abb64c359f85c","url":"js/sw/vendor/workbox/workbox-expiration.prod.js"},{"revision":"7d66f77f1d0ff9348205a245c75cc6e3","url":"js/sw/vendor/workbox/workbox-core.prod.js"},{"revision":"c1164a2c6ee0dbe4099f435a008a7d00","url":"js/sw/vendor/workbox/workbox-cacheable-response.prod.js"},{"revision":"e640131b6725841102014e560e21d647","url":"js/sw/vendor/firebase/firebase-messaging-compat.js"},{"revision":"c9a629d733922bfe5a271fb7442e7d2d","url":"js/sw/vendor/firebase/firebase-app-compat.js"},{"revision":"d78f8eab7b18b38fba494719de4804db","url":"img/logo-ccb-light.png"},{"revision":"e9e4b7922d30b56a6abe7a18d2f8af48","url":"icons/user.png"},{"revision":"1280df887f0e62362507d1d2838eec71","url":"icons/safari-pinned-tab.svg"},{"revision":"cc9cc708e9a0caacd09cd25f25c32ac3","url":"icons/ms-icon-144x144.png"},{"revision":"aab03ed9af399f7d146ff8a9c51ae96d","url":"icons/icon-512x512.png"},{"revision":"fe39b949477ecdc47cbd8eb4b84fb0ea","url":"icons/icon-384x384.png"},{"revision":"afabfd81700092d07d6dd1a472313aaf","url":"icons/icon-256x256.png"},{"revision":"7ce4b17cca36b21129d6575124962c6e","url":"icons/icon-192x192.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/icon-128x128.png"},{"revision":"367f65061b9581fa2846a490a642b1f6","url":"icons/favicon-96x96.png"},{"revision":"e5c43a798628015cc5709a04495734e3","url":"icons/favicon-32x32.png"},{"revision":"46e80c945a6991b54b573905e47c2c4a","url":"icons/favicon-16x16.png"},{"revision":"39aec49812573de3df34a815a3c78bd2","url":"icons/favicon-128x128.png"},{"revision":"121f96f3c9e71537cfb3078a78b4978d","url":"icons/apple-launch-828x1792.png"},{"revision":"495d3004f238f1cb3c8cdf759e95d9d0","url":"icons/apple-launch-750x1334.png"},{"revision":"c092d59e226573b1742f0e3f44014521","url":"icons/apple-launch-2048x2732.png"},{"revision":"5d87d86da198249158de50e52331d7de","url":"icons/apple-launch-1668x2388.png"},{"revision":"e514179c99fd26b7de6e02382cfecda0","url":"icons/apple-launch-1668x2224.png"},{"revision":"7ff54e1750aebaa29beedf5abeeccad5","url":"icons/apple-launch-1620x2160.png"},{"revision":"3cae7d354552572d14cfd53a9393ded5","url":"icons/apple-launch-1536x2048.png"},{"revision":"3051e3ead28e5bd48377b24b6fcecf2c","url":"icons/apple-launch-1290x2796.png"},{"revision":"21128a0bf6a4cfaf634d6ef8b5b142e1","url":"icons/apple-launch-1284x2778.png"},{"revision":"b3bfd03718947f8eeca5fee0467d3a25","url":"icons/apple-launch-1242x2688.png"},{"revision":"8f4e03c150d73b3d937be52937d4aad8","url":"icons/apple-launch-1242x2208.png"},{"revision":"b2a5d799798b2e7f4b06d428069e3b35","url":"icons/apple-launch-1179x2556.png"},{"revision":"92c201082d1000ec01e0af9fa2c1f002","url":"icons/apple-launch-1170x2532.png"},{"revision":"a650246dd488b11d81a130057b740a22","url":"icons/apple-launch-1125x2436.png"},{"revision":"d79610b2ac314df70e3554b1dbc4fcee","url":"icons/apple-launch-1080x2340.png"},{"revision":"cca2ffedcdeae214720aefe89e9fdcbe","url":"icons/apple-icon-180x180.png"},{"revision":"01ffc5e4414a34c50f65e1bf6d7ca7a3","url":"icons/apple-icon-167x167.png"},{"revision":"f7dd465713c1240865bb7b70370406c2","url":"icons/apple-icon-152x152.png"},{"revision":"9867a3422e5addc595886168208cc592","url":"icons/apple-icon-120x120.png"},{"revision":"0411c0e5da61b3b3e590b1715898e5ca","url":"icons/Contents.json"},{"revision":"e697ea658d0e80baf5a9f41422c47a5b","url":"hinos/index.html"},{"revision":"e697ea658d0e80baf5a9f41422c47a5b","url":"forms/view/index.html"},{"revision":"e697ea658d0e80baf5a9f41422c47a5b","url":"forms/manutencao/index.html"},{"revision":"7d25d1ecbe91a8a5eaed92695558d3d3","url":"forms/levantamento_preventiva/index.html"},{"revision":"e697ea658d0e80baf5a9f41422c47a5b","url":"forms/contato/index.html"},{"revision":"e697ea658d0e80baf5a9f41422c47a5b","url":"forgot-password/index.html"},{"revision":"e697ea658d0e80baf5a9f41422c47a5b","url":"eventos/index.html"},{"revision":"e697ea658d0e80baf5a9f41422c47a5b","url":"evento/index.html"},{"revision":"e697ea658d0e80baf5a9f41422c47a5b","url":"evento/solicitar/index.html"},{"revision":"5cafd7bb752521a507d7c87141a2900f","url":"data/tags.json"},{"revision":"6b714752ddf9accc46258f481d2eb107","url":"data/tags-circulares.json"},{"revision":"0c67f062d6c248fbad406549c816ea19","url":"data/relatorio.json"},{"revision":"416ef7202529463a618e35c6f3d32152","url":"data/ministerio.json"},{"revision":"196008493bb75371cbea968b2332aa9a","url":"data/metadata.json"},{"revision":"d15b4a22b3cb4b091954c2788282c3f1","url":"data/data.json"},{"revision":"36ceac81598c76443e176dc8142946c9","url":"agenda/index.html"},{"revision":"1cb7e789c2fc5298328f1db25f1a907b","url":"_nuxt/ycyrtpvs.js"},{"revision":"3974e7149796930485754d57fb5e45cc","url":"_nuxt/x2SuDXuo.js"},{"revision":"e63755708115972acfd3c882b6e9bcd6","url":"_nuxt/view.toBhRDQR.css"},{"revision":"743403653bfcccca453fcb039df24718","url":"_nuxt/useHolidays._FbjFjsv.css"},{"revision":"55be65db23b071a96d7c956046946627","url":"_nuxt/sugestoes.worker-DJpSY2_z.js"},{"revision":"9156f2a948e1809a88cbca87d5708993","url":"_nuxt/solicitar.PsSwqUop.css"},{"revision":"740fbad8247ee51d5542cc33a1a675c8","url":"_nuxt/sobre.CTp3FTow.css"},{"revision":"1241bb1feb900287ccb14310328a22c3","url":"_nuxt/settings.BXvx61R5.css"},{"revision":"a784c03c378790004948dbf2002e5f91","url":"_nuxt/servicos.DXKw4MpX.css"},{"revision":"ced934964a92d837799d44e51ef0d1d1","url":"_nuxt/relatorio.7Jo9KL7s.css"},{"revision":"e0f0fcc3312488d67827911f167ee879","url":"_nuxt/records.ChBP0RMG.css"},{"revision":"cd1f65b7d6f91f285f0e26c102f2cc75","url":"_nuxt/recentes.DaK8ctL5.css"},{"revision":"4fb95e71e24b52cf1ae7ad166c4020a5","url":"_nuxt/perfil.C1TwmE74.css"},{"revision":"07d9170beba62148969cbf6a4e5b80f3","url":"_nuxt/pages.CDnOtWV0.css"},{"revision":"97b7aa02d71cc6c541504ea10e1fee7f","url":"_nuxt/pages.3nj7Z6-3.css"},{"revision":"705724ba74e812caed86c4b2f741dbb9","url":"_nuxt/p35elrgW.js"},{"revision":"a86f547890ba57b50319267b1e1ad695","url":"_nuxt/ny_ufJJG.js"},{"revision":"40c2a0c90612ca71f55611a290899a6b","url":"_nuxt/noscroll.DrWb4tOw.css"},{"revision":"aa61533f2a29387ba2341e2cba4b3ae4","url":"_nuxt/navegar.CcnZmLym.css"},{"revision":"38b7f0b38a102e1b524086132952642c","url":"_nuxt/menu.B8Zv1MPp.css"},{"revision":"59154c4971da99157c72bc6bee67f55e","url":"_nuxt/manutencao.DIm-6Bk8.css"},{"revision":"1fc72e7ddbdc77a1a8624e6564ca2c39","url":"_nuxt/login.DA28MLwc.css"},{"revision":"dd63455bdd339503260917876ec47f97","url":"_nuxt/lista.Dt-AaVv_.css"},{"revision":"2996e58afd2099d18d1e0a222ca605a1","url":"_nuxt/levantamento_preventiva.D-3OeP-V.css"},{"revision":"3cac10f0f8155d0af3dc66162c4569c8","url":"_nuxt/leads.DP3_A8en.css"},{"revision":"70b1c8b576c234d52bdf3955a6c6296d","url":"_nuxt/landscape.BFEAchZd.css"},{"revision":"82537264a20dadfdb5e67a67de3f2f63","url":"_nuxt/kaC6pRfD.js"},{"revision":"7a30d7f2bc5129104bf19f5b499cd889","url":"_nuxt/jy1XS358.js"},{"revision":"026e0d7acf2202a5c7f8513a3e690acc","url":"_nuxt/hinos.C01wgp59.css"},{"revision":"b6e29837330cacdfe587ba06a3b22417","url":"_nuxt/hMWUXwSc.js"},{"revision":"e1d580bc8c87679d55b0a1561835430f","url":"_nuxt/form.D8ztOVBm.css"},{"revision":"f5dadf1831c6c13c1ed5a6d0d6130ea7","url":"_nuxt/forgot-password.yKKeIOCk.css"},{"revision":"a49b557dd35a4c04760dbc4f838be83f","url":"_nuxt/eventos.CfnnQkPx.css"},{"revision":"dc50c8c849d6e5fbc035a88d4cf648fb","url":"_nuxt/evento.DTYwDAF5.css"},{"revision":"0e410545e09772a7a010192c979166cb","url":"_nuxt/entry.CgSKbCV5.css"},{"revision":"44ecf398c8451f4823357944ac745851","url":"_nuxt/default.BllfGIqY.css"},{"revision":"21020c6731230f49ddff814c56363f03","url":"_nuxt/contato.B1VRy11C.css"},{"revision":"be68a8afc953d570ca900b2bef05db73","url":"_nuxt/clear.Cj1UNC5S.css"},{"revision":"d2be4d113dac807cd04500c7b290af39","url":"_nuxt/calendar.5sE1hdYd.css"},{"revision":"325e12c62a5a4595aff4809fe00518ae","url":"_nuxt/calendar-print.Bm9BqBkm.css"},{"revision":"a23290058c789b908cd29e28493a2627","url":"_nuxt/ampla.BdiKVozZ.css"},{"revision":"aaf83e03eba19fa468d28585ca0000a0","url":"_nuxt/agenda.CduTZFRL.css"},{"revision":"72e60435a89d7c3d5b87d91d81927d6e","url":"_nuxt/_id_.gbDZG_pL.css"},{"revision":"187b2225592bb7c2d27082bdf3767305","url":"_nuxt/_id_.Zb13Lnmn.css"},{"revision":"66627fab3879e8141c6b23e11a768add","url":"_nuxt/N9BdzYlb.js"},{"revision":"265ed4d21f21ef41c522dbb746881052","url":"_nuxt/LoadingSpinner.B8lNEaQd.css"},{"revision":"b53cf32447627eeb72243ce235235ad3","url":"_nuxt/DwO3p06_.js"},{"revision":"6e2baf709fd5436745f1b39c07bc6754","url":"_nuxt/Dlq4tOQN.js"},{"revision":"40c2add8d02e9faa9ab7a74b40432fc1","url":"_nuxt/Dh_mPEDL.js"},{"revision":"cfe62a8e8b1e6155942831de61bc981f","url":"_nuxt/Dey4BwnS.js"},{"revision":"f1fb09d3e8a026dca7ff4018c53f26da","url":"_nuxt/Decul_OP.js"},{"revision":"f640aae58ca26587b65bf69da61e7d11","url":"_nuxt/DSVF7-DN.js"},{"revision":"20130e924f229325166c0fdf9334a182","url":"_nuxt/DDHGQMtU.js"},{"revision":"e2da6cf0e709faa70563bed99d21246a","url":"_nuxt/D5wmWNIq.js"},{"revision":"05a2b1a8b24596db5c37c15bb5939e8e","url":"_nuxt/D1Or57eY.js"},{"revision":"6e0098aca43b9d7c89cbe8fd3ee40c13","url":"_nuxt/D0Dr7phT.js"},{"revision":"5a85218bfc5b6aebd3ffafc1e4e71bb3","url":"_nuxt/CvZFz1eK.js"},{"revision":"c53178c36e880d9c03f0d5d7241c41cf","url":"_nuxt/CtnQ1YB4.js"},{"revision":"396ccdf3f15ec29b21dc35b91aed586f","url":"_nuxt/CrZ0ZSxf.js"},{"revision":"90d1f47c37d81cc4017d0421e9128482","url":"_nuxt/CnqSTxFX.js"},{"revision":"24d532a821819393e6a633f9637a26cc","url":"_nuxt/CmHwqRan.js"},{"revision":"2c8ec3c477f77e921666d2210549fc5f","url":"_nuxt/CgP5oj41.js"},{"revision":"6178de69bbaff3d21877cfef5e1f27e4","url":"_nuxt/CWie31L2.js"},{"revision":"f834d56d61951fbdc806ceeaa74e5003","url":"_nuxt/CTOEDNDj.js"},{"revision":"c83a16d05198bf79477008c0a5517b45","url":"_nuxt/CKtBhlqR.js"},{"revision":"79b5230c3f53fa27c0e416e42a8f7238","url":"_nuxt/CEU3XjLe.js"},{"revision":"7179b8c26af6b062512620de9ebba073","url":"_nuxt/CCsie1aF.js"},{"revision":"7318577b09da147f08fd28cb5ca5ca82","url":"_nuxt/BygsepWm.js"},{"revision":"d7ad41a3c82b34771bf59c37715a40d0","url":"_nuxt/BxIcN_GJ.js"},{"revision":"a46b66f97f8fc6d09a5cc46f89f49253","url":"_nuxt/BwElYIBC.js"},{"revision":"39a90ab141dadce5cedbde72c88e5f7f","url":"_nuxt/BpmeOoYr.js"},{"revision":"90ee31e5253675f2d08a85819ff98540","url":"_nuxt/BlgRJmUf.js"},{"revision":"1e42497f1d85025749cb7a961b125c32","url":"_nuxt/BgkcAIuj.js"},{"revision":"f92961decd25ce11a144d9a61a7f1c75","url":"_nuxt/BemgQmEo.js"},{"revision":"55ca5fefc31d398c5d58561e54ac5f0b","url":"_nuxt/Bdj4oAfB.js"},{"revision":"9df16bbce762b48a4aff8169de81c21c","url":"_nuxt/BdaZjB-E.js"},{"revision":"dcdbd9db3e508da9feda566293df8862","url":"_nuxt/BdS-7GxA.js"},{"revision":"39236bd97cb23b3a15f7d9983698d4f6","url":"_nuxt/BaAUMMOF.js"},{"revision":"420a1e0777dc02b189fee70043e1f0f5","url":"_nuxt/BNv6-fXC.js"},{"revision":"c5ed0485b2b5bc030532d7fdede99a04","url":"_nuxt/BLMWCqvf.js"},{"revision":"7e8f74c5ca087134f78813e03634e9bd","url":"_nuxt/BHN4eqV5.js"},{"revision":"1cc93bf5da45af05c0789106c9a08b2e","url":"_nuxt/BEWBZVif.js"},{"revision":"fa7c17af704485fd89897ba5ad941da0","url":"_nuxt/BAVq1UfT.js"},{"revision":"ad5fdc4e1994b0a5aafa3139a1b96522","url":"_nuxt/B87xKngc.js"},{"revision":"29abacdae7f6bb4a4304831159f25553","url":"_nuxt/AY2HSb97.js"},{"revision":"a7494925f5a33dfd3ebafeacfc3d7448","url":"_nuxt/7CqfITi-.js"},{"revision":"9270ff1895eb2ef8f5e278921f2168ab","url":"_nuxt/3AqZm-AW.js"},{"revision":"f0310ec6b91f9030970cf4a46792cbf6","url":"_nuxt/builds/latest.json"},{"revision":"8f23a3c8cf01a995aeddd6db956c3226","url":"_nuxt/builds/meta/085ed53c-9c8b-497e-8c6a-e895c0d29ed0.json"},{"revision":"36ceac81598c76443e176dc8142946c9","url":"500/index.html"},{"revision":"36ceac81598c76443e176dc8142946c9","url":"404/index.html"},{"revision":"deddce822e43fd3514e82f5cc81194cd","url":"200/index.html"}] || []);
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
