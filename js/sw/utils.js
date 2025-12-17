/**
 * Funções Utilitárias
 */
self.Utils = {
  ptBRFormatters: {
    date: new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
    }),
    time: new Intl.DateTimeFormat("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    weekday: new Intl.DateTimeFormat("pt-BR", { weekday: "short" }),
  },

  normalizeString: function (str = "") {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();
  },
  setBrasiliaTime(date, hours, minutes, seconds, ms) {
    if (isNaN(date.getTime())) return;
    date.setUTCHours(hours + 3, minutes, seconds, ms);
  },
  delay: (ms) => new Promise((res) => setTimeout(res, ms)),
  mapRow(headers, row) {
    let obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index];
    });
    return obj;
  },
};