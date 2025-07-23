// Carrega os scripts do Firebase para Service Worker
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyDjh-kSamZSSOA1pEwMuCB1HZxiZBgCaVE",
  authDomain: "agenda-408113.firebaseapp.com",
  projectId: "agenda-408113",
  storageBucket: "agenda-408113.appspot.com",
  messagingSenderId: "865568496873",
  appId: "1:865568496873:web:66e24b202af5ba7f1b6478",
  measurementId: "G-KDP8RZ0Z19", 
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Este listener é acionado quando uma mensagem FCM é recebida
messaging.onBackgroundMessage((payload) => {
  try {
    console.log('[firebase-messaging-sw.js] Mensagem em segundo plano recebida:', payload);

    // Garante que notification e data existam
    const notification = payload.notification || {};
    const data = payload.data || {};

    const notificationTitle = notification.title || 'Nova Notificação';
    const notificationOptions = {
      body: notification.body || 'Você tem uma nova mensagem.',
      icon: notification.icon || '/favicon.ico',
      data: data, 
    };
    // Exibe a notificação ao usuário
    self.registration.showNotification(notificationTitle, notificationOptions);
  } catch (error) {
    console.error('[firebase-messaging-sw.js] Erro ao exibir notificação:', error);
  }
});

// --- Manipulação de Cliques na Notificação ---
self.addEventListener('notificationclick', (event) => {
  console.log('[firebase-messaging-sw.js] Notificação clicada:', event);

  event.notification.close();

  // Garante que data exista e obtenha a URL de redirecionamento
  const data = event.notification.data || {};
  const targetUrl = data.url || '/'; 

  // Abre a URL em uma nova aba ou foca uma aba existente se já estiver aberta
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        // Usa startsWith para garantir que a URL base seja considerada
        if (client.url.startsWith(self.location.origin + targetUrl) && 'focus' in client) {
          return client.focus(); // Foca a aba existente
        }
      }
      // Se a aba não estiver aberta, abre uma nova
      return self.clients.openWindow(targetUrl);
    }).catch((err) => {
      console.error('[firebase-messaging-sw.js] Erro ao redirecionar:', err);
    })
  );
});

// --- Eventos do Service Worker ---
// Opcional: Listener para o evento 'install' do Service Worker
self.addEventListener('install', () => {
  console.log('[firebase-messaging-sw.js] Service Worker instalado.');
  self.skipWaiting(); 
});

// Opcional: Listener para o evento 'activate' do Service Worker
self.addEventListener('activate', (event) => {
  console.log('[firebase-messaging-sw.js] Service Worker ativado.');
  event.waitUntil(self.clients.claim()); 
});