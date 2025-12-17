
/**
 * Objeto self.Logger para logs e tratamento de erros
 */
self.Logger = {
  log: (...args) => console.log("[SW]", ...args),
  handleError: (context, err) => {
    console.error(`[SW] ${context}:`, err);
    self.Client.send("error", `${context}: ${err.message}`);
  },
};
