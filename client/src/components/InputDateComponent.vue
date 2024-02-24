<template>
  <div class="row q-mt-sm">
    <q-input class="col" filled v-model="data.date">
      <template v-slot:prepend>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
            <q-date
              mask="DD/MM/YYYY HH:mm"
              v-model="data.date"
              :locale="locale"
              minimal
            >
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Fechar" color="black" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue';

const props = defineProps<{
  modelValue: Date;
}>();

const emit = defineEmits<{
  update: [value: Date];
}>();

const data = reactive({
  date: '',
});

data.date = props.modelValue
  .toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    hour12: false,
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
  .replace(',', '');

const locale = {
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
};

watch(
  () => data.date,
  () => {
    if (data.date) {
      const date = data.date.replace(/(\d+)\/(\d+)\/(\d+) (.*)/, '$3-$2-$1 $4');
      emit('update', new Date(date));
    }
  }
);
</script>
