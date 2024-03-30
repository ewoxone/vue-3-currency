<script setup lang="ts">
import { RouterView } from 'vue-router'
import ElNavButton from '@/components/ElNavButton.vue';
</script>

<template>
  <header>
    <div class="container">
      <nav class="flex gap-3 pt-10">
        <El-Nav-Button
          title="Валюты"
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
