import express, { Express, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import http from "http";
import { Server } from "socket.io";
import { setupRoutes } from "./routes";
import { setupSocketIO } from "./socket";
import { IApp } from "../../app";
import { watchEffect } from "vue";

export async function startHTTP(app: IApp) {
  console.log("MODULO: HTTP");
  const port = app.system?.port || "3000";
  const appExpress: Express = express();
  const server: http.Server = http.createServer(appExpress);
  const io: Server = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  appExpress.use(bodyParser.json());
  appExpress.use(
    (err: Error, req: Request, res: Response, next: NextFunction) => {
      console.error(err.stack);
      res.status(500).send("Algo deu errado!");
    }
  );

  await setupRoutes(appExpress, app);
  await setupSocketIO(io, app);

  server.listen(port, () => {
    const hr =
      "######################################################################";
    console.log(`\x1b[32m\n${hr}\n\n🌟 Socket.IO na porta ${port}! 🌟\x1b[0m`);
    console.log(
      `\x1b[32m🚀 Acesse o painel administrativo http://localhost:${port}/admin/ 🚀\n\n${hr}\x1b[0m`
    );
  });

  watchEffect(() => {
    if (app?.system?.rebooting) {
      server.close();
      console.log("Porta do servidor HTTP fechada! Reiniciando o servidor");
    }
  });
}
