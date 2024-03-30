<template v-if="title">

	<RouterLink
		class="el-button"
		:to="{ name: page }"
	>{{ title }}</RouterLink>

</template>

<script setup>
import { RouterLink } from 'vue-router'
defineProps(['title','page'])
</script>

<style lang="scss">

	.el-button{
		@apply py-2.5 px-3 text-sm font-medium shadow-firm inline-block align-top text-center select-none
			rounded-lg transition cursor-pointer
		;
		&.router-link-active{
			@apply bg-firm-orange text-white;
		}
		&:not(.router-link-active) {
			@apply hover:bg-firm-orange hover:text-white;
		}
	}

</style>
