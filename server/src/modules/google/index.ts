import { watchEffect } from "vue";
import { IApp } from "../../app";
import { GoogleCalendarManager } from "./Agenda";
import { sortEvento } from "../evento/sortEvetos";

const calendar = GoogleCalendarManager.getInstance();

async function sleep(time: number) {
  return new Promise((res) => setTimeout(res, time));
}

export async function startGOOGLE(app: IApp) {
  if (!app.google.secret.client_email) return;
  console.log("MODULO: Google Agenda...");
  try {
    await sleep(1000);
    let dateFirst = new Date(new Date().getTime() - 60 * 60 * 1000);
    let dateLast = new Date(
      new Date().getTime() + app.eventos.intervaloDias * 24 * 60 * 60 * 1000
    );

    calendar.reAuth(app.google.secret);
    await calendar.managerCalendars(app.google.calendars);
    app.google.calendars = calendar.calendars;

    let googleEvents = await calendar.getEventGoogle(dateFirst, dateLast);

    async function googleSync() {
      console.log("Buscando atualizações no google...");
      dateFirst = new Date(new Date().getTime() - 60 * 60 * 1000);
      dateLast = new Date(
        new Date().getTime() + app.eventos.intervaloDias * 24 * 60 * 60 * 1000
      );
      const eventos = app.eventos.items;

      googleEvents = await calendar.getEventGoogle(dateFirst, dateLast);

      app.eventos.items = googleEvents
        .map((googleEvent) => {
          const item = eventos.find((e) => e.gid === googleEvent.gid);
          if (item) {
            googleEvent.id = item.id;
          }
          return googleEvent;
        })
        .filter((e) => e.gid);
      sortEvento(app);
      app.system.save = true;
    }

    googleSync();

    // Verificar se deverá atualizar
    watchEffect(async () => {
      if (app.google.reloading) {
        console.log("AppGoogleUpdate...");
        await googleSync();
        app.google.reloading = false;
      }
    });
  } catch (error) {
    console.log("Erro ao iniciar o Google Agenda: ", error);
  }
}
