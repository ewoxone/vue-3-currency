<script setup lang="ts">
  import SectionConverter from '@/components/SectionConverter.vue';
  import { useStore } from 'vuex';
  const store = useStore();
  console.log(store)
</script>

<template>
  <SectionConverter />
</template>

<style lang="scss">

</style>
