<template>
	<div class="container my-8 md:my-10">

		<div class="flex gap-3 mb-8">

			<El-Button
				title="Валюты"
				:active="visible === 'currencies'"
				@click="visible = 'currencies'"
			/>

			<El-Button
				title="Конвертер"
				:active="visible === 'converter'"
				@click="visible = 'converter'"
			/>

		</div>

		<SectionCurrencies
			v-if="visible === 'currencies'"
		/>

		<SectionConverter
			v-if="visible === 'converter'"
		/>

	</div>
</template>

<script setup>
import SectionCurrencies from './SectionCurrencies.vue';
import SectionConverter from './SectionConverter.vue';

import ElButton from './ElButton.vue';
import { ref } from 'vue';
// reactive

const visible = ref('currencies');

// const state = reactive({
// 	name: ''
// })

</script>

<style lang="scss">

</style>