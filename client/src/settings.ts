import { reactive, watch } from 'vue';
import { IEvento } from './app';
import { api } from './boot/axios';

interface MenuItem {
  title: string;
  href: string;
  icon: string;
  grupo: string;
}

export const settings = reactive({
  url: window.location.host,
  shared: navigator.share,
  connected: false,
  loading: false,
  admin: true,
  links: [] as MenuItem[],
  selected: null as IEvento | null,
  createEvent() {
    settings.selected = {
      id: undefined,
      list: '',
      title: '',
      locale: '',
      desc: '',
      date: new Date(),
      end: new Date(),
      gid: '',
      updated: new Date(),
      recurring: '',
      maps: '',
    };
    settings.selected.date.setHours(19, 0, 0, 0);
  },
});

watch(
  () => settings.selected,
  () => {
    if (!settings.connected) {
      settings.selected = null;
    }
  }
);

async function init() {
  try {
    const { data } = await api.get('data/links.json');
    settings.links = data.values;
  } catch (error) {
    console.error('Erro ao carregar os dados:', error);
  }
}

init();
