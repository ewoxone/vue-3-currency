<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useStore } from 'vuex';

import ElNavButton from '@/components/ElNavButton.vue';

const store = useStore();
// console.log(store)

onMounted(() => {
 store.dispatch("fetchProducts")
//  console.log(store.todos);
})



</script>

<template>
  <header>
    <div class="container">
      <nav class="flex gap-3 pt-10">
        <El-Nav-Button
          title="Задачи"
          page="currencies"
        />

        <El-Nav-Button
          title="Конвертер"
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
