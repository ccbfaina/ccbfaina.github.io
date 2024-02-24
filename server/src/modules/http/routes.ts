import { Express, Request, Response, NextFunction } from "express";
import express from "express";
import path from "path";
import { IApp, IEvento } from "../../app";
import { GoogleCalendarManager } from "../google/Agenda";

const AUTH_TOKEN = "123";

function authenticate(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization;
  if (!token || token !== `Bearer ${AUTH_TOKEN}`) {
    console.log("Token inválido!");
    return res.status(401).json({ message: "Não autorizado" });
  }
  next();
}

export function setupRoutes(appExpress: Express, app: IApp): void {
  const calendar = GoogleCalendarManager.getInstance();

  const messages = {
    successSettings: "Configurações alteradas com sucesso!",
    invalidToken: "Token anterior inválido!",
  };

  appExpress.use("/admin", express.static(path.resolve(__dirname, "admin")));

  appExpress.use(
    "/",
    express.static(path.resolve(__dirname, "../../../../client/dist/pwa"))
  );

  appExpress.use("/api", authenticate);
  appExpress.get("/api/data", (req: Request, res: Response) => {
    res.status(200).json({
      token: !!app.system.token,
      shared: app.google.shared,
    });
  });

  appExpress.post("/api/save/event", async (req: Request, res: Response) => {
    const event = req.body;
    const result = {
      msg: "ok",
      values: [] as IEvento[],
    };
    try {
      let value = <IEvento>{
        ...event,
        ...{
          date: new Date(event.date),
          end: new Date(event.end),
          updated: new Date(event.updated),
        },
      };
      console.log("Evento para salvar: ", value, event);
      if (value.gid) {
        result.values.push(await calendar.updateEventGoogle(value));
      } else {
        result.values.push(await calendar.createEventGoogle(value));
      }
    } catch (error) {
      result.msg = `${error}`;
    }
    res.json(result);
  });

  appExpress.post(
    "/api/settings",
    async (req: Request, res: Response, next: NextFunction) => {
      let reboot = false;
      const payload = {
        message: "",
        data: "",
      };

      const { oldToken, token, secret, shared } = req.body;

      try {
        if (app.system.token === oldToken) {
          app.system.token = token;

          if (secret) {
            app.google.secret = secret;
            reboot = true;
          }

          if (shared) {
            app.google.shared = `${shared}`
              .split(",")
              .filter((e) => e.match(/@/))
              .map((e) => e.trim());
          }

          payload.message = messages.successSettings;
        } else {
          payload.message = messages.invalidToken;
        }
        res.status(200).json(payload);
        if (reboot) app.system.rebooting = true;
      } catch (error) {
        next(error);
      }
    }
  );

  appExpress.get("/api/", (req: Request, res: Response) => {
    res.json({ mensagem: "Resposta do endpoint /api" });
  });
}
