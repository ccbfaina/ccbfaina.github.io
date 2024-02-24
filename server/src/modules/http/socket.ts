import { Server, Socket } from "socket.io";
import { IApp, IEvento, updateApp } from "../../app";
import { GoogleCalendarManager } from "../google/Agenda";
import { sortEvento } from "../evento/sortEvetos";
import { watch } from "vue";

enum APP {
  APP = "app",
  APP_SAVE = "saveApp",
  CONNECT = "connection",
  MESSAGE = "message",
  ERROR = "error",
  EVENTOS = "eventos",
  SAVE = "save",
  REMOVE = "remove",
  RELOAD = "reload",
}

const calendar = GoogleCalendarManager.getInstance();

export function setupSocketIO(io: Server, app: IApp): void {
  io.on(APP.CONNECT, async (socket: Socket) => {
    const { token } = socket.handshake.auth;

    try {
      // Verifica se o token é válido
      if (token !== app.system.token) {
        throw new Error("Cliente com token inválido!");
      }

      socket.emit(APP.MESSAGE, "Conectado");
      socket.emit(APP.APP, app);
      socket.emit(APP.EVENTOS, app.eventos.items);

      // Monitora alterações na propriedade 'updated' de 'app.google'
      watch(
        () => app.google.reloading,
        () => {
          if (!app.google.reloading) {
            setTimeout(() => {
              io.emit(APP.EVENTOS, app.eventos.items);
            }, 2000);
          }
        }
      );

      // Define os ouvintes de eventos
      defineEventListeners(socket, app, io);

      console.log("Cliente conectado:", socket.id);
    } catch (error) {
      const msg = `Erro Socket.IO:: ${error}`;
      io.emit(APP.ERROR, { msg });
      socket.disconnect();
    }
  });
}

async function defineEventListeners(
  socket: Socket,
  app: IApp,
  io: Server
): Promise<void> {
  // Ouvinte para o evento de salvar um evento
  socket.on(
    APP.SAVE,
    async (evento: any, callback: (evento: IEvento) => void) => {
      try {
        const savedEvent = await handleEventSave(app, io, evento);
        callback(savedEvent);
      } catch (error) {
        const msg = `Erro ao salvar evento: ${error}`;
        io.emit(APP.ERROR, { msg });
      }
    }
  );

  // Ouvinte para o evento de remover um evento
  socket.on(
    APP.REMOVE,
    async (evento: any, callback: (evento: IEvento) => void) => {
      try {
        const removedEvent = await handleEventRemove(app, io, evento);
        callback(removedEvent);
      } catch (error) {
        const msg = `Erro ao remove evento: ${error}`;
        io.emit(APP.ERROR, { msg });
      }
    }
  );

  // Ouvinte para o evento de recarregar
  socket.on(APP.RELOAD, async () => {
    try {
      await handleReload(app, io);
    } catch (error) {
      const msg = `Erro ao recarregar app: ${error}`;
      io.emit(APP.ERROR, { msg });
    }
  });

  // Ouvinte salvar app
  socket.on(
    APP.APP_SAVE,
    async (newApp: IApp, callback: (app: IApp) => void) => {
      try {
        updateApp(newApp);
        app.system.save = true;
        callback(app);
        io.emit(APP.APP, app);
      } catch (error) {
        const msg = `Erro ao remove evento: ${error}`;
        io.emit(APP.ERROR, { msg });
      }
    }
  );
}

async function handleEventSave(
  app: IApp,
  io: Server,
  evento: IEvento
): Promise<IEvento> {
  evento = await calendar.updateOrCreateEvent(evento);
  updateEventInApp(app, evento);
  io.emit(APP.EVENTOS, app.eventos.items);
  console.log(`Evento salvo no google: `, evento);
  return evento;
}

async function handleEventRemove(
  app: IApp,
  io: Server,
  evento: IEvento
): Promise<IEvento> {
  try {
    await calendar.deleteEvent(evento);
    app.system.save = true;
  } catch (error) {
    console.log("Evento não existe no google!");
  }
  removeEventFromApp(app, evento);
  io.emit(APP.EVENTOS, app.eventos.items);
  console.log("Evento removido no google: ", evento);
  return evento;
}

async function handleReload(app: IApp, io: Server): Promise<void> {
  app.google.reloading = true;
  app.system.save = true;
}

function updateEventInApp(app: IApp, evento: IEvento): void {
  removeEventFromApp(app, evento);
  app.eventos.items.push(evento);
  if (evento.recurring) {
    app.google.reloading = true;
    app.system.save = true;
  }
  sortEvento(app);
}

function removeEventFromApp(app: IApp, evento: IEvento): void {
  app.eventos.items = app.eventos.items.filter((e) => e.gid !== evento.gid);
}
