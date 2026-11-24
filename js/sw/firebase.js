importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js",
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js"
);

/**
 * Firebase Cloud Messaging
 */
self.FirebaseManager = {
  init: function () {
    const Config = {
      FIREBASE_CONFIG: {
        apiKey: "AIzaSyDjh-kSamZSSOA1pEwMuCB1HZxiZBgCaVE",
        authDomain: "agenda-408113.firebaseapp.com",
        projectId: "agenda-408113",
        storageBucket: "agenda-408113.appspot.com",
        messagingSenderId: "865568496873",
        appId: "1:865568496873:web:66e24b202af5ba7f1b6478",
        measurementId: "G-KDP8RZ0Z19",
      },
    };
    firebase.initializeApp(Config.FIREBASE_CONFIG);
    const messaging = firebase.messaging();

    messaging.onBackgroundMessage(this.onBackgroundMessage);
    self.addEventListener("notificationclick", this.onNotificationClick);
  },

  onBackgroundMessage: function (payload) {
    try {
      const notification = payload.notification || {};
      const data = payload.data || {};
      const notificationTitle = notification.title || "Nova Notificação";
      const notificationOptions = {
        body: notification.body || "Você tem uma nova mensagem.",
        icon: notification.icon || "/favicon.ico",
        data: data,
      };
      self.registration.showNotification(
        notificationTitle,
        notificationOptions
      );
    } catch (error) {
      console.error(
        "[firebase] Erro ao exibir notificação em segundo plano:",
        error
      );
    }
  },

  onNotificationClick: function (event) {
    event.notification.close();
    const targetUrl = event.notification.data.url || "/";
    event.waitUntil(
      self.clients
        .matchAll({ type: "window", includeUncontrolled: true })
        .then((clientList) => {
          const urlToOpen = new URL(targetUrl, self.location.origin).href;
          const matchingClient = clientList.find((c) =>
            c.url.startsWith(urlToOpen)
          );
          return matchingClient
            ? matchingClient.focus()
            : self.clients.openWindow(urlToOpen);
        })
        .catch((err) => console.error("[firebase] Erro ao redirecionar:", err))
    );
  },
};
