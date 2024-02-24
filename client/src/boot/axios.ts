import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';
import { IEvento, app, updateApp } from 'src/app';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

const config = {
  baseURL: window.location.origin,
};
export const api = axios.create(config);

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export async function saveEventos(updated: IEvento[]): Promise<IEvento[]> {
  for (const event of updated) {
    const result = await axios.post('/api/save/event', event);
    console.log('Resultado salvar: ', event, result);
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve('');
      }, 3000);
    });
  }
  return updated;
}

export async function loadEventsAxios(): Promise<IEvento[]> {
  try {
    const cacheName = 'eventDataCache';
    const url = '/data/data.json';
    const cacheResponse = await caches.match(url);

    if (cacheResponse) {
      console.log('Carregando dados do cache do PWA...');
      try {
        const app = await cacheResponse.json();
        updateApp(app);
      } catch (error) {
        console.error('Falha ao carregar cache: ', error);
      }
    }
    const latestUrl = `${url}?v=${new Date().toISOString().replace(/\D/g, '')}`;
    const { status, statusText, data: app } = await api.get(latestUrl);
    if (status === 200) {
      updateApp(app);
      const cache = await caches.open(cacheName);
      await cache.put(url, new Response(JSON.stringify(app)));
    } else {
      console.error('Erro ao carregar dados do servidor:', statusText);
    }
  } catch (error) {
    console.error('Erro ao carregar os dados:', error);
  }
  return app.eventos.items;
}

loadEventsAxios();
