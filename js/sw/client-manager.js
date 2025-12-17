
self.Client = {
  _messageCallbacks: {},

  /**
   * Funções de Comunicação (Broadcast)
   * @param {*} type
   * @param {*} message
   * @param {*} data
   */
  send: (type, message, data = null) => {
    // Função auxiliar para serializar, evitando serialização dupla se já for string
    const safeStringify = (value) => {
      if (typeof value === "string") {
        // Tenta parsear para verificar se já é JSON válido
        try {
          JSON.parse(value);
          return value; // Já é um JSON string, retorna como está
        } catch (e) {
          // Não é um JSON string válido, stringifica como uma string literal
          return JSON.stringify(value);
        }
      }
      return JSON.stringify(value);
    };

    self.clients.matchAll().then((clients) =>
      clients.forEach((c) =>
        c.postMessage({
          type,
          message: safeStringify(message), // Usa a função auxiliar
          data: safeStringify(data), // Usa a função auxiliar
        })
      )
    );
  },

  /**
   * Registra um callback para um tipo de mensagem específico.
   * @param {string} type - O tipo da mensagem a ser ouvida.
   * @param {Function} callback - A função a ser executada quando a mensagem for recebida.
   *                              Callback will receive (payload, eventSource)
   */
  receive: function (type, callback) {
    this._messageCallbacks[type] = callback;
  },
  init() {
    self.addEventListener("message", async (e) => {
      const { id, type, payload } = e.data;
      let result;
      try {
        // Deserializa o payload recebido do cliente
        const parsedPayload =
          typeof payload === "string" ? JSON.parse(payload) : payload;
        const callback = self.Client._messageCallbacks[type];
        if (callback) {
          // Pass e.source to the callback for direct response if needed
          result = await callback(parsedPayload, e.source);
        } else {
          result = { error: `Tipo de comando desconhecido: ${type}` };
        }
      } catch (err) {
        console.error(`[RelatorioSW] Erro ao processar comando ${type}:`, err);
        result = { error: err.message || "Erro interno do Service Worker." };
      }
      if (e.source && id) {
        // Only respond if there's an ID (request-response)
        // Serializa o resultado antes de enviar de volta ao cliente
        e.source.postMessage({ id, result: JSON.stringify(result) });
      }
    });
  },
};
