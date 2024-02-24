import { watchEffect } from "vue";
import { IApp } from "../../app";
import { GitHubRepository } from "./GitHubRepository";

export async function startGIT(app: IApp) {
  if (!app.git.token) return;
  console.log("MODULO: Git iniciado!");

  const githubRepo = new GitHubRepository(
    "ccbfaina",
    "ccbfaina.github.io",
    app.git.token
  );

  watchEffect(() => {
    app.eventos.items.map((e) => [e.gid, e.desc, e.list, e.locale, e.title]);
    updateDataToGitHub();
  });

  async function updateDataToGitHub() {
    if (app.system.save) {
      const res = await githubRepo.getContentData("data/data.json");
      if (res?.content) {
        const events = app.eventos.items;
        setTimeout(async () => {
          console.log("Eventos atualizados no git: ", events.length);
          // if (events.length) {
          //   const result = await githubRepo.commitFile(
          //     "data/data.json",
          //     JSON.stringify(events)
          //   );
          //   if (result && result.ok) {
          //     console.log(
          //       `Dados atualizados (${events.length}) no Git com status ${result.status}`
          //     );
          //   }
          // }
        }, 3000);
      }
    }
  }
}
