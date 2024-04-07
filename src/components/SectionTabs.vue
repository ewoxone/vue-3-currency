<template>
<div v-if="state.tabs?.length">
	<div class="flex gap-5 border-b-2">
		<div
			v-for="(tab,tab_i) in state.tabs"
			:key="`tab_${tab_i}`"
			class="border-2 p-4 -mb-[1px] font-semibold cursor-pointer select-none"
			:class="{
				'bg-red-500 text-white': tab_i === state.currentIndex,
				'hover:bg-red-300': tab_i !== state.currentIndex
			}"
			@click="state.currentIndex = tab_i"
		>{{ tab.title }}</div>
	</div>

	<template
		v-for="(tab_content,tab_content_i) in state.tabs"
		:key="`tab_content_${tab_content_i}`"
	>
		<div
			v-if="tab_content_i === state.currentIndex"
			class="mt-4"
		>{{ tab_content.content }}</div>
	</template>

</div>
</template>

<script setup>
	import { reactive } from "vue";

	const state = reactive({
		currentIndex: 0,
		tabs: [
			{
				title: 'Таб 1',
				content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe sapiente ex laborum sunt veniam ullam delectus ut optio dolor suscipit, debitis esse numquam dicta aspernatur aliquam earum odit nulla necessitatibus.'
			},
			{
				title: 'Таб 2',
				content: 'Lorem, ipsum.'
			},
			{
				title: 'Таб 3',
				content: 'Lorem ipsum dolor sit amet.'
			},
			{
				title: 'Таб 4',
				content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero sed nobis facilis quam similique cupiditate eos id, inventore ipsam voluptates.'
			}
		]
	});
</script>

<style lang="scss">

</style>