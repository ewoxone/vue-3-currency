<script setup>
import { onMounted, onUnmounted, reactive, computed, ref } from "vue";

const state = reactive({
	currentSlide: 0,
	items: [
		{
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quis minus eum perspiciatis, distinctio esse alias ex, illum maxime ut odit architecto, fuga cumque excepturi tempore? Neque corporis quibusdam voluptatum!',
			src: 'https://placehold.co/500x500/gray/white'
		},
		{
			text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ab placeat dicta, quod voluptate et ea debitis in, temporibus at, pariatur maxime animi dolorem! Quam consequuntur architecto quo saepe eius!',
			src: 'https://placehold.co/500x500/gray/white'
		},
		{
			text: 'Sequi ab voluptatibus est, possimus ullam dicta. Tenetur, veniam numquam, tempore nam omnis necessitatibus magnam quas aliquid praesentium aliquam temporibus labore possimus fugit reprehenderit maxime eaque. Hic quia quaerat facilis!',
			src: 'https://placehold.co/500x500/gray/white'
		},
		{
			text: 'Tempora error in tenetur dolorem doloremque aliquid rem, labore eligendi veritatis aperiam illo aspernatur et dolores nam voluptas. Culpa optio sint adipisci et quidem deleniti quae facere similique blanditiis corporis?',
			src: 'https://placehold.co/500x500/gray/white'
		},
		{
			text: 'Vitae, mollitia eum. Illum doloremque est debitis odio quas suscipit quaerat atque expedita. Possimus ratione eos beatae id numquam dignissimos, asperiores vitae velit doloremque a laudantium quidem eligendi ad? Sint!',
			src: 'https://placehold.co/500x500/gray/white'
		}
	]
})

const images = ref(null);

// const imagesHeight = computed(() => {
// 	return images.value?.[0].offsetHeight
// })

function getCurrentSlide() {

	if (!images.value) return;

	images.value.forEach((image,image_i) => {

		if (image.getBoundingClientRect().top < document.documentElement.clientHeight / 2) {
			state.currentSlide = image_i;
		}

	});
}

onMounted(() => {
	getCurrentSlide();

	// console.log(imagesHeight.value);

	window.addEventListener('scroll', getCurrentSlide, {passive: true});
});

onUnmounted(() => {
	window.removeEventListener('scroll', getCurrentSlide, {passive: true});
});
</script>

<template>
	<div v-if="state.items?.length" class="flex">
		<div class="relative grow mr-10">
			<div
				class="sticky top-10 flex flex-col justify-center"
			>{{ imagesHeight }}
				<template
					v-for="(item,item_i) in state.items"
					:key="`item_${item_i}`"
				>
					<div v-show="item.text && item_i === state.currentSlide">
						{{ item.text }}
					</div>
				</template>
			</div>
		</div>

		<div class="w-5/12 shrink-0">
			<img
				v-for="(item,item_i) in state.items"
				:key="`item_img_${item_i}`"
				:src="item.src"
				ref="images"
				alt=""
				class="max-w-full mt-5 first:mt-0"
			>
		</div>

		<div class="relative w-2.5 ml-5 shrink-0">
			<div
				class="sticky top-10 flex flex-col justify-center gap-2"
			>
				<div
					v-for="(item,item_i) in state.items"
					:key="`item_toggle_${item_i}`"
					class="h-2.5 leading-none rounded-full bg-gray-500"
					:class="{
						'!bg-orange-500': item_i === state.currentSlide
					}"
				/>
			</div>
		</div>
	</div>
</template>

<style></style>
