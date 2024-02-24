import * as fs from "fs";
import * as path from "path";

export function log(...args: any[]) {
  const logDirectory = "log";

  if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
  }

  const logFilePath = path.join(
    logDirectory,
    `${new Date().toISOString().replace(/T.*/, "")}.log`
  );

  fs.appendFile(
    logFilePath,
    `${args.join(" | ")}\n`,
    (err: NodeJS.ErrnoException | null) => {
      if (err) {
        console.error("Erro ao adicionar log ao arquivo:", err);
        return;
      }
      console.log("Log: ", ...args);
    }
  );
}
