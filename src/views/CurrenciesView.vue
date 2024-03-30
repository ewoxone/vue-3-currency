<script setup lang="ts">
  import SectionCurrencies from '@/components/SectionCurrencies.vue';
  import { useStore } from 'vuex';
  const store = useStore();
</script>

<template>
  <SectionCurrencies />
  <button type="button" @click="store.commit('increment')">asdads</button>
</template>
