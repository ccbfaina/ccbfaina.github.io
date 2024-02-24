import { reactive } from 'vue';

export interface IEvento {
  id: number | undefined;
  list: string;
  title: string;
  locale: string;
  desc: string;
  date: Date;
  end?: Date | undefined;
  gid?: string | undefined;
  updated?: Date | undefined;
  recurring?: string | undefined;
  maps?: string | undefined;
}

export interface ICalendars {
  id: string;
  summary: string;
  description: string;
  timeZone: string;
  hidden: boolean;
  selected: boolean;
  valid: boolean;
  sharedUsers: string[];
}

export interface ISecret {
  type: string;
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri: string;
  token_uri: string;
  auth_provider_x509_cert_url: string;
  client_x509_cert_url: string;
  universe_domain: string;
}

export interface IApp {
  id: string;
  git: { token: string };
  system: {
    port: number;
    token: string;
    rebooting: boolean;
    save: boolean;
  };
  google: {
    secret: ISecret;
    reloading: boolean;
    calendars: ICalendars[];
    shared: string[];
    tz: string;
  };
  eventos: {
    intervaloDias: number;
    items: IEvento[];
    titles: string[];
    locales: string[];
    desc: string[];
  };
}

export const app = reactive<IApp>({
  id: 'app',
  git: { token: '' },
  system: {
    port: 3000,
    token: '',
    rebooting: false,
    save: true,
  },
  google: {
    secret: {
      type: '',
      project_id: '',
      private_key_id: '',
      private_key: '',
      client_email: '',
      client_id: '',
      auth_uri: '',
      token_uri: '',
      auth_provider_x509_cert_url: '',
      client_x509_cert_url: '',
      universe_domain: '',
    },
    reloading: false,
    calendars: [],
    shared: [],
    tz: 'America/Sao_Paulo',
  },
  eventos: {
    intervaloDias: 100,
    items: [],
    titles: [],
    locales: [],
    desc: [],
  },
});

function mapEvento(e: IEvento): IEvento {
  const {
    id,
    list = '',
    title = '',
    locale = '',
    desc = '',
    date,
    end = e.date,
    updated,
    gid,
    maps,
    recurring,
  } = e;
  return {
    id,
    list,
    title,
    locale,
    desc,
    date: new Date(date),
    end: new Date(end),
    updated: updated ? new Date(updated) : undefined,
    gid,
    maps,
    recurring,
  };
}

export function mergeObjects<T>(target: T, source: T): T {
  for (const key in source) {
    if (
      typeof source[key] === 'object' &&
      source[key] !== null &&
      !Array.isArray(source[key])
    ) {
      target[key] = mergeObjects(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target as T;
}

export function updateApp(newApp: Partial<IApp>): void {
  mergeObjects(app, newApp) as IApp;
  app.eventos.items = app.eventos.items.map(mapEvento);
}
