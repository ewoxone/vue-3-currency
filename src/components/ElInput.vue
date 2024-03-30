<script setup>

defineProps(['placeholder']);

const modelValue = defineModel();

</script>

<template>
	<input
		type="text"
		class="c-input form-input"
		:placeholder="placeholder"
		v-model="modelValue"
	>
</template>

<style lang="scss">

	.c-input.form-input{
		@apply
			block text-xs text-black shadow-firm border-none rounded-lg
			focus:border-black focus:ring-transparent placeholder:text-firm-gray
			px-3 py-2.5
		;
	}

</style>