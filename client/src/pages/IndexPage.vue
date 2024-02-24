<template>
  <div class="flex">
    <input type="text" name="search" id="search" />
  </div>
  <template v-for="grupo in grupos" :key="grupo">
    <h2 class="text-center">{{ grupo }}</h2>
    <div class="flex icons">
      <template
        v-for="value in settings.links.filter((e) => e.grupo === grupo)"
        :key="value.title"
      >
        <q-btn
          :href="value.href"
          :target="value.href.startsWith('http') ? '_blank' : ''"
        >
          <div>{{ value.title }}</div>
        </q-btn>
      </template>
    </div>
  </template>

  <q-btn
    class="config"
    key="btn_size_dense_round_sm"
    round
    dense
    color="dark"
    size="md"
    icon="settings"
    to="/config"
  />
</template>

<script lang="ts" setup>
import { settings } from 'src/settings';
import { computed } from 'vue';

const grupos = computed(() => {
  const values = settings.links.map((e) => e.grupo);
  return [...new Set(values)];
});
</script>

<style scoped lang="scss">
.icons {
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    border: 2px solid #d4d9e2;
    min-width: 168px;

    img {
      width: 60px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}

input#search {
  align-items: center;
  border-radius: 5px;
  border: 2px solid #d4d9e2;
  display: none;
  margin: 5px;
  padding: 10px;
  position: absolute;
  top: 9px;
  width: 330px;
}

.config {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
