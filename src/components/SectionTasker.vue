<template v-if="todos?.length">
	<div
		class=""
	>
		<div class="flex justify-between items-end mb-8">

			<div>
				<div class="mb-1 text-firm-gray text-xs font-medium">Поиск по задачам</div>
				<ElInput
					placeholder="Поиск"
					class="w-[11.25rem]"
				/>
				<!-- v-model="state.name" -->
			</div>


			<div class="ml-4">
				<div class="mb-1 text-firm-gray text-xs font-medium">Статус</div>

				<ElSelect
					class=""
				/>

			</div>

		</div>

		<div class="font-semibold md:text-sm">

			<div
				v-for="(todo,todo_i) in todos"
				:key="`todo_${todo_i}`"
				class="flex items-center justify-between px-3 py-6 gap-4 border-b border-[#D7D7D7]"
			>

				<div v-if="todo.title">
					{{ todo.title }}
				</div>

				<div
					class="ml-auto"
					:class="{
						'text-green-500': todo.completed,
						'text-red-500': !todo.completed
					}"
				>
					{{ todo.completed ? 'Выполнена' : 'Не выполнена'}}
				</div>
			</div>

		</div>
	</div>
</template>

<script setup>

// defineProps([''])
import ElInput from './ElInput.vue';
import ElSelect from './ElSelect.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const todos = computed(() => {
  return store.state.todos
})

</script>