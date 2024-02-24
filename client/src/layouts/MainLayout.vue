<template>
  <q-layout view="lHh Lpr lFf">
    <header>
      <q-btn class="title" to="/" outline>CONGREGAÇÃO CRISTÃ NO BRASIL</q-btn>
    </header>
    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  text-align: center;
}

.title {
  font-size: 1.6rem;
}

.q-btn--outline:before {
  border: 0px;
}
</style>
