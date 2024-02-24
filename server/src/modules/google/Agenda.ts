import { calendar_v3, google } from "googleapis";
import { GoogleAuth } from "google-auth-library";
import { ICalendars, IEvento, ISecret } from "../../app";

export class GoogleCalendarManager {
  private static instance: GoogleCalendarManager | null = null;
  private auth: GoogleAuth | null = null;
  private calendar: calendar_v3.Calendar | undefined;
  public calendars: ICalendars[];

  private constructor() {
    this.calendars = [];
  }

  public static getInstance(): GoogleCalendarManager {
    if (!GoogleCalendarManager.instance) {
      GoogleCalendarManager.instance = new GoogleCalendarManager();
    }
    return GoogleCalendarManager.instance;
  }

  public reAuth(credentials: ISecret) {
    try {
      this.auth = new google.auth.GoogleAuth({
        credentials: credentials,
        scopes: ["https://www.googleapis.com/auth/calendar"],
      });
      this.calendar = google.calendar({
        version: "v3",
        auth: this.auth,
      });
    } catch (error) {
      throw "Credenciais de acesso para Google APIs inválidas!";
    }
  }

  public async managerCalendars(calendars: ICalendars[]) {
    this.calendars = calendars;
    await this.updateCalendars();
  }

  private async updateCalendars() {
    if (!this.calendar) throw "Não logado no GoogleApis!";
    const calendars: ICalendars[] = [];
    for (const cal of this.calendars) {
      try {
        const { data } = await this.calendar.calendars.get({
          calendarId: cal.id,
        });
        calendars.push({
          id: data.id || "",
          summary: data.summary || "",
          description: data.description || "",
          timeZone: data.timeZone || "",
          hidden: false,
          selected: false,
          valid: true,
          sharedUsers: [],
        });
      } catch (error) {
        calendars.push(cal);
      }
    }
    this.calendars = calendars;
    return this.calendars;
  }

  public async shareCalendar(calendarId: string, emails: string[]) {
    if (!this.calendar) throw "Não logado no GoogleApis!";
    for (const email of emails) {
      if (email.trim() && email.match(/@/)) {
        await this.calendar.acl.insert({
          calendarId,
          requestBody: {
            role: "owner",
            scope: {
              type: "user",
              value: email,
            },
          },
        });
      }
    }
    console.log(`Agenda criada e compartilhada com sucesso!`);
    console.log(`ID da Agenda: ${calendarId}`);
  }

  public async createCalendar(agenda: ICalendars) {
    if (!this.calendar) throw "Não logado no GoogleApis!";
    const calendarDetails: calendar_v3.Schema$Calendar = {
      summary: agenda.summary,
      description: agenda.description,
      timeZone: "America/Sao_Paulo",
    };

    const createdCalendar = await this.calendar.calendars.insert({
      requestBody: calendarDetails,
    });

    const calendarId = createdCalendar.data.id;
    if (!calendarId) {
      console.log("Agenda não criada!!!!");
      return;
    }
    return calendarId;
  }

  public async deleteCalendar(calendarId: string) {
    if (!this.calendar) throw "Não logado no GoogleApis!";
    await this.calendar.calendars.delete({
      calendarId,
    });

    console.log(`Agenda excluída com sucesso!`);
  }

  private async getIDAgenda(event: IEvento) {
    let calendarId = this.calendars.find((e) => e.summary === event.list)?.id;
    // if (!calendarId) {
    //   calendarId =
    //     (await this.createCalendar({
    //       id: "",
    //       summary: event.list,
    //       description: `Agenda criada automaticamente para gerenciar ${event.list}`,
    //       hidden: true,
    //       selected: true,
    //       sharedUsers: ["marco.aq7@gmail.com"],
    //       timeZone: "America/Sao_Paulo",
    //     })) || "";
    // }
    return calendarId;
  }

  public async updateOrCreateEvent(event: IEvento) {
    if (event.gid) {
      event = await this.updateEventGoogle(event);
    } else {
      event = await this.createEventGoogle(event);
    }
    return event;
  }

  public async updateEventGoogle(event: IEvento) {
    if (!this.calendar) throw "Não logado no GoogleApis!";
    const calendarId = await this.getIDAgenda(event);
    event.date = new Date(event.date);
    event.end = new Date(event.end || event.date);
    event.updated = new Date();
    const { data } = await this.calendar.events.update({
      calendarId,
      eventId: String(event.gid),
      requestBody: {
        summary: event.title,
        location: event.locale,
        description: event.desc,
        end: { dateTime: event.end?.toISOString() },
        start: { dateTime: event.date?.toISOString() },
      },
    });
    return this.toPDO(data);
  }

  public async createEventGoogle(event: IEvento) {
    if (!this.calendar) throw "Não logado no GoogleApis!";
    const calendarId = await this.getIDAgenda(event);
    event.date = new Date(event.date);
    event.end = new Date(event.end || event.date);
    event.updated = new Date();
    const start = event.date?.toISOString();
    const end = event.end?.toISOString() || start;

    const payload: calendar_v3.Params$Resource$Events$Insert = {
      calendarId,
      requestBody: {
        summary: event.title,
        location: event.locale,
        description: event.desc,
        start: {
          dateTime: start,
          timeZone: "America/Sao_Paulo",
        },
        end: {
          dateTime: end,
          timeZone: "America/Sao_Paulo",
        },
      },
    };

    if (
      event.recurring &&
      payload.requestBody &&
      event.recurring?.trim() !== ""
    ) {
      payload.requestBody.recurrence = [];
      payload.requestBody?.recurrence?.push(event.recurring);
      console.log("Evento com recorrência: ", event, payload);
    }

    const { data } = await this.calendar.events.insert(payload);
    return this.toPDO(data);
  }

  public async deleteEvent(event: IEvento) {
    if (!this.calendar) throw "Não logado no GoogleApis!";
    const calendarId = await this.getIDAgenda(event);
    await this.calendar.events.delete({
      calendarId,
      eventId: String(event.gid),
    });
    return event;
  }

  public async getEventGoogle(
    dateFirst: Date,
    dateLast: Date,
    updatedMin?: Date
  ) {
    if (!this.calendar) throw "Não logado no GoogleApis!";
    if (!this.calendars.length) throw "Nenhum calendário adicionado!";
    const googleEvents: IEvento[] = [];

    dateFirst.setHours(0, 0, 0, 0);
    dateLast.setDate(dateLast.getDate() + 1);
    dateLast.setHours(0, 0, 0, 0);

    for (const calendar of this.calendars) {
      try {
        const response = await this.calendar.events.list({
          calendarId: calendar.id,
          timeMin: dateFirst.toISOString(),
          timeMax: dateLast.toISOString(),
          singleEvents: true,
          updatedMin: updatedMin?.toISOString(),
        });

        response.data.items?.map(this.toPDO).map((e) => {
          e.list = calendar.summary;
          googleEvents.push(e);
        });
      } catch (error) {
        console.log(
          `Erro ao procurar eventos no calendário ${calendar.summary}. \nVerifique o GoogleServiceAccount ou ID da agenda`
        );
      }
    }
    return googleEvents;
  }

  private toPDO(e: calendar_v3.Schema$Event): IEvento {
    function parseDateTime(
      dateTime: string | null | undefined
    ): Date | undefined {
      return dateTime ? new Date(dateTime) : undefined;
    }
    return <IEvento>{
      id: 0,
      list: e.organizer?.displayName,
      title: e.summary,
      locale: e.location,
      desc: e.description,
      date: parseDateTime(e.start?.dateTime ?? e.start?.date),
      end: parseDateTime(e.end?.dateTime ?? e.start?.date),
      updated: e.updated ? new Date(e.updated) : undefined,
      gid: e.id,
      maps: e.htmlLink?.replace(/.*eid=/, ""),
      recurring: `${!!e.recurringEventId}`,
    };
  }
}
