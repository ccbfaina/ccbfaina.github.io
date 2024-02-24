import { EventEmitter } from "events";
const { spawn } = require("child_process");

export interface SystemRepository {
  reboot: () => Promise<void>;
  on(event: "rebooting", listener: () => void): void;
  on(event: "start", listener: (msg: string) => void): void;
}

export class SystemAppRepository
  extends EventEmitter
  implements SystemRepository
{
  async reboot() {
    this.emit("rebooting");
    const hr =
      "######################################################################";
    console.log(
      `\x1b[33m ${hr}\n\n⚡️ Reiniciando. Aguarde, por favor... ⚡️\n\n${hr}\x1b[0m`
    );
    setTimeout(() => {
      const processo = process;
      const newProcess = spawn(process.argv[0], processo.argv.slice(1), {
        stdio: "inherit",
      });
      newProcess.on("exit", (id: number) => {
        this.emit("start", `Aplicação reiniciada com código de saída ${id}`);
        processo.exit(id);
      });
    }, 2000);
  }
}
