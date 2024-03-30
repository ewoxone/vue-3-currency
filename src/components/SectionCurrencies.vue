<template>
	<div
		class=""
	>
		<div class="flex justify-between items-end mb-8">

			<ElInput
				placeholder="Search"
				class="w-[11.25rem]"
			/>
			<!-- v-model="state.name" -->

			<div class="ml-4">
				<div class="mb-1 text-firm-gray text-xs font-medium">Currency</div>

				<ElSelect
					class=""
				/>

			</div>

		</div>

		<div class="font-semibold md:text-sm">

			<div class="flex items-center justify-between px-3 py-6 gap-4 border-b border-[#D7D7D7]">
				<div>USD</div>
				<div>100 руб</div>
			</div>

			<div class="flex items-center justify-between px-3 py-6 gap-4 border-b border-[#D7D7D7]">
				<div>USD</div>
				<div>100 руб</div>
			</div>

			<div class="flex items-center justify-between px-3 py-6 gap-4 border-b border-[#D7D7D7]">
				<div>USD</div>
				<div>100 руб</div>
			</div>

			<div class="flex items-center justify-between px-3 py-6 gap-4 border-b border-[#D7D7D7]">
				<div>USD</div>
				<div>100 руб</div>
			</div>

		</div>
	</div>
</template>

<script setup>

// defineProps([''])
import ElInput from './ElInput.vue';
import ElSelect from './ElSelect.vue';

</script>