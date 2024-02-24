<template>
  <div class="q-pa-md">
    <q-dialog v-model="dialog" position="top" v-if="data.selected">
      <q-card>
        <q-card-section>
          <div class="popup">
            <form autocomplete="off" @submit.prevent="save">
              <input-date-component
                v-model="data.selected.date"
                @update="data.selected.date = $event"
              />

              <suggestion-component
                label="Agenda"
                :list="
                  app.google.calendars
                    .map((e) => e.summary)
                    .filter((e) => e)
                    .sort()
                "
                v-model="data.selected.list"
                @update="data.selected.list = $event.toUpperCase()"
              />

              <suggestion-component
                label="Titulo"
                :list="app.eventos.titles"
                v-model="data.selected.title"
                @update="data.selected.title = $event.toUpperCase()"
              />

              <suggestion-component
                label="Local"
                :list="app.eventos.locales"
                v-model="data.selected.locale"
                @update="data.selected.locale = $event.toUpperCase()"
              />

              <suggestion-description-component
                label="Descrição"
                :list="app.eventos.desc"
                v-model="data.selected.desc"
                @update="data.selected.desc = $event.toUpperCase()"
              />

              <q-expansion-item
                class="q-mt-md expansion"
                expand-separator
                icon="settings_suggest"
                label="Outras opções"
              >
                <q-input v-model="data.rrule" label="Recorrência" />
                <small
                  >{{ data.msg.recurring }} {{ data.selected.recurring }}</small
                >
              </q-expansion-item>

              <div class="q-gutter-sm text-center">
                <q-btn
                  v-if="data.selected.gid"
                  :loading="data.loadingRemove"
                  @click="remove"
                  color="negative"
                  style="width: 200px"
                  icon="delete"
                >
                  Remover
                  <template v-slot:loading>
                    <q-spinner-hourglass class="on-left" />
                    Removendo...
                  </template>
                </q-btn>
                <q-btn
                  :loading="data.loadingSave"
                  color="green"
                  type="submit"
                  style="width: 200px"
                  icon="save"
                >
                  Salvar
                  <template v-slot:loading>
                    <q-spinner-hourglass class="on-left" />
                    Salvando...
                  </template>
                </q-btn>
              </div>
              <div class="q-gutter-sm q-mt-sm text-center">
                <q-btn
                  @click="cancel"
                  color="blue-grey-6"
                  label="Cancelar"
                  icon="cancel"
                  style="width: 200px"
                />
                <q-btn
                  v-if="data.selected?.gid"
                  :href="`https://calendar.google.com/calendar/r/eventedit/${data.selected?.maps}`"
                  target="_blank"
                  color="deep-orange-6"
                  label="Agenda"
                  icon="calendar_month"
                  style="width: 200px"
                />
              </div>
              <div class="q-gutter-sm q-mt-sm text-center">
                <q-btn
                  v-if="data.selected.gid"
                  @click="duplicar"
                  color="blue-9"
                  label="Duplicar"
                  icon="content_copy"
                  style="width: 200px"
                />
              </div>
            </form>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import { IEvento, app } from 'src/app';
import { settings } from 'src/settings';
import { computed, onMounted, onUnmounted, reactive, watch } from 'vue';
import SuggestionComponent from '../components/SuggestionComponent.vue';
import SuggestionDescriptionComponent from './SuggestionDescriptionComponent.vue';
import InputDateComponent from './InputDateComponent.vue';
import * as socket from 'src/boot/socket';

const dialog = computed(() => !!settings.selected);
const data = reactive({
  date: '',
  msg: {
    recurring: '',
  },
  loadingSave: false,
  loadingRemove: false,
  selected: null as IEvento | null,
  rrule: '',
});

watch(
  () => settings.selected,
  () => {
    if (settings.selected) {
      data.selected = Object.assign({}, settings.selected);
      if (!data.selected.list) {
        data.selected.list = localStorage.getItem('defaultList') || '';
      }
    }
  }
);

function cancel() {
  settings.selected = null;
}

async function save() {
  try {
    if (data.selected) {
      data.loadingSave = true;
      data.selected.end = new Date(data.selected.date);
      data.selected.end.setHours(data.selected.date.getHours() + 2, 0, 0, 0);
      localStorage.setItem('defaultList', data.selected?.list || '');
      const result = await socket.saveEventos([data.selected]);
      console.log('Result salvar item: ', result);
      if (result.length) settings.selected = null;
    }
  } catch (error) {
    console.error('Erro ao salvar:: ', error);
  }
  data.loadingSave = false;
}

async function remove() {
  try {
    if (data.selected) {
      data.loadingRemove = true;
      const result = await socket.removeEventos([data.selected]);
      if (result.length) settings.selected = null;
    }
  } catch (error) {
    console.error('Result erro ao salvar:: ', error);
  }
  data.loadingRemove = false;
}

function duplicar() {
  if (data.selected) {
    console.log('Evento duplicado!!!');
    data.selected.gid = '';
    data.selected.maps = '';
    data.selected.recurring = '';
  }
}

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    settings.selected = null;
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});

watch(() => data.selected?.date, updateExpression);
watch(() => data.rrule, updateExpression);
function updateExpression() {
  data.msg.recurring = '';
  const regex = /^(\d+)([DSMA])$/;
  if (data.selected) {
    data.rrule = data.rrule?.toUpperCase() || '';
    const match = data.rrule.match(regex);

    if (!match || match.length < 3) {
      data.msg.recurring =
        'Expressão de recorrência inválida. Use o formato: [número][D para dias, S para semanas, M para meses, A para anos]';
      return;
    }

    const intervalStr = match[1];
    const frequency = match[2];
    const interval = parseInt(intervalStr, 10);

    if (interval <= 0) {
      data.msg.recurring = 'O intervalo deve ser maior que zero.';
      return;
    }

    const ruleMap: Record<string, string> = {
      D: 'DAILY',
      S: 'WEEKLY',
      M: 'MONTHLY',
      A: 'YEARLY',
    };

    const freq = ruleMap[frequency];

    if (!freq) {
      data.msg.recurring =
        'Tipo de recorrência inválido. Use D para dias, S para semanas, M para meses, A para anos.';
      return;
    }

    const days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    const dayOfWeek = new Date(data.selected.date).getDay();
    const dayOfWeekString = days[dayOfWeek];

    switch (freq) {
      case 'WEEKLY':
        data.selected.recurring = `RRULE:FREQ=${freq};INTERVAL=${interval};BYDAY=${dayOfWeekString}`;
        break;
      case 'MONTHLY':
        const dayOfMonth =
          Math.floor(
            (new Date(data.selected.date.toISOString()).getDate() - 1) / 7
          ) + 1;
        console.log('Date::: ', freq, data.selected.date, dayOfMonth);
        data.selected.recurring = `RRULE:FREQ=${freq};INTERVAL=${interval};BYDAY=${dayOfMonth}${dayOfWeekString}`;
        break;
      default:
        data.selected.recurring = `RRULE:FREQ=${freq};INTERVAL=${interval}`;
        break;
    }
  }
}
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  width: 90%;
  background-color: white;
  padding: 20px;
  border: 1px solid #535353;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  max-height: 100%;
  overflow-y: scroll;
}

.page {
  background-color: transparent;
  width: 98vw;
  height: 99vh;
  position: fixed;
  top: 0;
  left: 0;
}

.expansion {
  color: #474747;
}
</style>
