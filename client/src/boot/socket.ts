import { boot } from 'quasar/wrappers';
import { Socket, io } from 'socket.io-client';
import { IApp, IEvento, app, updateApp } from 'src/app';
import { settings } from 'src/settings';
import { Notify } from 'quasar';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $socket: Socket;
  }
}

const config = {
  auth: {
    token: localStorage.getItem('token'),
  },
};

export let socket: Socket | null = null;
if (config.auth.token) {
  socket = io(window.location.origin, config);
}

export default boot(({ app }) => {
  if (socket) {
    app.config.globalProperties.$socket = socket;
  }
});

export async function saveApp(app: IApp) {
  const saved = new Promise<IApp>((resolve) => {
    socket?.emit('saveApp', app, (saved: IApp) => {
      resolve(saved);
    });
  });
  console.log('Salvar app: ', saved);
  Notify.create({
    type: 'positive',
    message: 'Salvo com sucesso!',
    position: 'top-right',
  });
}

export async function saveEventos(events: IEvento[]): Promise<IEvento[]> {
  const savedEvents = await Promise.all(
    events.map((event) => {
      return new Promise<IEvento>((resolve) => {
        socket?.emit('save', event, (savedEvent: IEvento) => {
          resolve(savedEvent);
        });
      });
    })
  );
  return savedEvents;
}

export async function removeEventos(events: IEvento[]): Promise<IEvento[]> {
  const removedEvents = await Promise.all(
    events.map((event) => {
      return new Promise<IEvento>((resolve) => {
        socket?.emit('remove', event, (removedEvent: IEvento) => {
          resolve(removedEvent);
        });
      });
    })
  );
  return removedEvents;
}

export async function reloadAPP() {
  socket?.emit('reload');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 10000);
  });
}

socket?.on('app', (application) => {
  console.log('Novo app recebido::', application);
  updateApp(JSON.parse(JSON.stringify(application)));
});

socket?.on('eventos', (eventos: IEvento[]) => {
  console.log('Eventos recebidos via socket: ', eventos);
  app.eventos.items = eventos;
  updateApp(app);
});

socket?.on('connect', () => {
  setTimeout(() => {
    if (!settings.connected)
      Notify.create({
        type: 'positive',
        message: 'Conectado como admin!',
        position: 'top-right',
      });
    settings.connected = true;
  }, 2000);
});

socket?.on('disconnect', () => {
  console.log('Desconectado do servidor socket!');
  if (settings.connected) {
    Notify.create({
      type: 'negative',
      message: 'Desconectado do servidor socket!',
      position: 'top-right',
    });
  }
  settings.connected = false;
});
