import fs from "fs";
import path from "path";
import { IApp } from "../../app";
import { watch, watchEffect } from "vue";

const PATH_CONFIG = path.join(__dirname, "../../../../config/config.json");
const PATH_DATA = path.join(__dirname, "../../../../config/data.json");
const PATH_DATA2 = path.join(
  __dirname,
  "../../../../client/dist/pwa/data/data.json"
);

async function saveDataToFile(path: string, values: string) {
  await fs.promises.writeFile(path, values);
}

async function readDataFromFile(path: string, values: string) {
  if (fs.existsSync(path)) {
    return JSON.parse(await fs.promises.readFile(path, "utf-8"));
  } else {
    console.log(`Criando arquivo de configuração ${path}...`);
    await saveDataToFile(path, values);
  }
}

export async function startSTORE(app: IApp) {
  console.log("MODULO: Storage");
  try {
    const data = await readDataFromFile(
      PATH_CONFIG,
      JSON.stringify(app, null, 2)
    );
    if (data) {
      app.git = data.git;
      app.google = data.google;
      app.system = data.system;
      app.eventos = data.eventos;
      app.eventos.items = app.eventos.items.map((event: any) => ({
        ...event,
        date: new Date(event.date),
        end: new Date(event.end),
        updated: new Date(event.updated),
      }));
    }

    watchEffect(async () => {
      if (app.system.save) {
        try {
          console.log("Salvando lista...");
          await saveDataToFile(PATH_CONFIG, JSON.stringify(app, null, 2));

          const data = JSON.parse(JSON.stringify(app));
          delete data.google.secret;
          delete data.git.token;
          delete data.system.token;
          delete data.system.rebooting;
          delete data.system.save;
          delete data.system.path;
          delete data.system.shared;
          await saveDataToFile(PATH_DATA, JSON.stringify(data, null, 2));
          await saveDataToFile(PATH_DATA2, JSON.stringify(data, null, 2));
          app.system.save = false;
        } catch (error) {
          console.log("LocalStore: Erro ao salvar aquivo: ", error);
        }
      }
    });
  } catch (error) {
    console.log(`Erro ao acessar arquivo:`, PATH_CONFIG);
  }
}
