import { TextDecoder } from "util";

export function decodeBase64(base64Content: string): string {
  if (!base64Content) return "";
  const decodedData: string = atob(base64Content);
  const bytes: Uint8Array = new Uint8Array(decodedData.length);
  for (let i = 0; i < decodedData.length; i++) {
    bytes[i] = decodedData.charCodeAt(i);
  }
  const textDecoder: TextDecoder = new TextDecoder("utf-8");
  const fileContent: string = textDecoder.decode(bytes);
  return fileContent;
}

export class GitHubRepository {
  constructor(
    private owner: string,
    private repo: string,
    private token: string
  ) {
    this.owner = owner;
    this.repo = repo;
    this.token = token;
  }

  private async sendGitHubRequest(path: string, method = "GET", data?: string) {
    try {
      const url = `https://api.github.com/repos/${this.owner}/${this.repo}${path}`;
      const headers = {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${this.token}`,
        "X-GitHub-Api-Version": "2022-11-28",
      };

      const options: RequestInit = { method, headers };
      if (data) {
        options.body = data;
      }

      return await fetch(url, options);
    } catch (error) {
      throw "Erro ao buscar dados no servidor GITHUB";
    }
  }

  async getContentData(filePath: string) {
    try {
      const response = await this.sendGitHubRequest(`/contents/${filePath}`);
      if (!response.ok) {
        throw new Error(
          `Falha ao obter o conteúdo do arquivo JSON: ${response.status} ${response.statusText}`
        );
      }

      const data: any = await response.json();
      if (!data.content)
        throw new Error(
          `Falha ao obter o conteúdo do arquivo JSON: ${response.status} ${response.statusText}`
        );
      return {
        content: decodeBase64(data.content),
        sha: data.sha,
      };
    } catch (error) {
      error;
    }
  }

  async commitFile(
    filePath: string,
    newContent: string,
    message = "Atualizando"
  ) {
    try {
      const contentData = await this.getContentData(filePath);
      if (contentData) {
        const { content, sha } = contentData;
        if (content === newContent) {
          console.log("O conteúdo é idêntico, nenhum commit necessário.");
          return;
        }

        const updatedContent = btoa(unescape(encodeURIComponent(newContent)));
        const commitData = { message, content: updatedContent, sha };
        const response = await this.sendGitHubRequest(
          `/contents/${filePath}`,
          "PUT",
          JSON.stringify(commitData)
        );

        if (!response.ok) {
          throw new Error(
            `Falha ao realizar o commit do arquivo JSON: ${response.status} ${response.statusText}`
          );
        }
        return response;
      }
    } catch (error) {
      const msg = `Erro ao realizar o commit: ${error} `;
      console.info(msg);
      throw msg;
    }
  }
}
