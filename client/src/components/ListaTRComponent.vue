<template>
  <tr>
    <td :style="isValidDate(event.date) ? '' : 'display: none;'">
      <b> {{ dia(event.date) }}/{{ mes(event.date) }}</b>
    </td>
    <td :style="isValidDate(event.date) ? '' : 'display: none;'">
      {{ diaSemana(event.date) }}
    </td>
    <td
      :style="event.date && event.date.getHours() > 5 ? '' : 'display: none;'"
    >
      {{ hora(event.date) }}
    </td>
    <td>
      {{ event.locale }}
      <img
        class="print-hide"
        style="width: 10px"
        src="/img/repeticao.png"
        alt="Item se repete"
      />
    </td>
    <td
      :style="event.desc ? '' : 'display: none;'"
      v-html="event.desc.replace(/(;\n|\n)/gi, '</br>')"
    ></td>
  </tr>
</template>

<script setup lang="ts">
import { IEvento } from 'src/app';

const prop = defineProps<{ event: IEvento }>();
const event = prop.event;

function diaSemana(date?: Date) {
  if (!date) return '';
  const semana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  return semana[date.getDay()] || '';
}

function dia(date?: Date) {
  if (!date) return '';
  return String(date.getDate() || '').padStart(2, '0');
}
function mes(date?: Date) {
  if (!date) return '';
  return String(date.getMonth() + 1 || '').padStart(2, '0');
}

function hora(date?: Date) {
  if (!date) return '';
  const hours = String(date.getHours() || '').padStart(2, '0');
  const min = String(date.getMinutes() || '').padStart(2, '0');
  return `${hours}:${min}`;
}

function isValidDate(date: Date | undefined) {
  try {
    return !!date?.getHours();
  } catch (e) {
    e;
  }
}
</script>

<style>
tr:nth-child(even) {
  background-color: #f2f2f2;
}

td:nth-child(1),
td:nth-child(2),
td:nth-child(3) {
  width: 0px;
}
</style>
