<template>
  <div class="print-hide calendar">
    <q-btn icon="event" dense round color="dark">
      <q-popup-proxy cover transition-show="scale" transition-hide="scale">
        <q-date
          v-model="data.range"
          minimal
          mask="DD/MM/YYYY"
          :events="data.events"
          :locale="data.locale"
        >
        </q-date>
      </q-popup-proxy>
    </q-btn>
  </div>
</template>

<script lang="ts" setup>
import { IEvento } from 'src/app';
import { reactive, watch } from 'vue';

const props = defineProps<{
  search: string;
  events: IEvento[];
}>();
const emit = defineEmits(['update']);

const data = reactive({
  range: '',
  events: [] as string[],
  locale: {
    days: 'Domingo_Segunda_Terça_Quarta_Quinta_Sexta_Sábado'.split('_'),
    daysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    months:
      'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split(
        '_'
      ),
    monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    firstDayOfWeek: 0,
    format24h: true,
    pluralDay: 'dias',
  },
});

updateEvents();
watch(() => props.events, updateEvents);
function updateEvents() {
  data.events = [
    ...new Set(
      props.events
        .map(
          (e) => e.date?.toISOString().split('T')[0].replace(/-/g, '/') || ''
        )
        .filter((e) => e)
    ),
  ];
}

watch(
  () => data.range,
  () => {
    if (data.range) {
      emit(
        'update',
        `${props.search.replace(/\d+\/\d+\/\d+/gi, '').trim()} ${data.range}`
      );
    } else {
      emit('update', props.search.replace(/\d+\/\d+\/\d+/gi, '').trim());
    }
  }
);
</script>

<style lang="scss">
.calendar {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
