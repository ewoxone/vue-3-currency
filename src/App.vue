<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useStore } from 'vuex';

import ElNavButton from '@/components/ElNavButton.vue';

const store = useStore();

onMounted(() => {
 store.dispatch("fetchTodos")
})
</script>

<template>
  <header>
    <div class="container">
      <nav class="flex gap-3 pt-10">

        <El-Nav-Button
          title="Модальные окна"
          page="modals"
        />

        <El-Nav-Button
          title="Табы"
          page="tabs"
        />

        <El-Nav-Button
          title="Таскер (В разработке)"
          page="tasker"
        />

        <El-Nav-Button
          title="Конвертер (В разработке)"
          page="converter"
        />

      </nav>
    </div>
  </header>

  <main class="my-8 md:my-10">
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<style>

</style>
