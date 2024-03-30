<template>
<div class="section-converter">
	<div>
		<div class="section-converter__descr">
			From
		</div>

		<div class="flex gap-2">
			<ElInput
				placeholder="Value"
				class="section-converter__input"
			/>

			<ElSelect
				class=""
			/>
		</div>
	</div>

	<div>
		<div class="section-converter__descr">
			To
		</div>

		<div class="flex gap-2">
			<ElInput
				placeholder="Value"
				class="section-converter__input"
			/>

			<ElSelect
				class=""
			/>
		</div>
	</div>
</div>
</template>

<script setup>

// defineProps([''])
import ElInput from './ElInput.vue';
import ElSelect from './ElSelect.vue';

</script>

<style lang="scss">
.section-converter{
	@apply flex flex-col md:flex-row gap-8 md:items-end mb-8;
	&__descr{
		@apply mb-1 text-[#484848] text-xs font-medium;
	}
	&__input{
		@apply grow md:grow-0 md:w-[120px];
	}
}
</style>