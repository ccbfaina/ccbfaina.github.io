import { IApp } from "../../app";

export function sortEvento(app: IApp) {
  const titles = app.eventos.titles;
  app.eventos.items.sort((a, b) => {
    const titleA = titles.indexOf(a.title?.toUpperCase() || "");
    const titleB = titles.indexOf(b.title?.toUpperCase() || "");

    if (titleA !== titleB) {
      return titleA - titleB;
    }

    if (b.date && a.date && b.date.getTime() !== a.date.getTime()) {
      return a.date.getTime() - b.date.getTime();
    }

    if (a.locale && b.locale) {
      return a.locale.localeCompare(b.locale);
    }

    return 0;
  });
  return app;
}
