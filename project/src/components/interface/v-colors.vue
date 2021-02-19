<template>
	<ul class="colors">
		<li class="colors__item" v-for="color in colorArray" :key="color.id">
			<label class="colors__label">
				<input
					class="colors__radio sr-only"
					type="radio"
					name="color"
					v-model="sendColor"
					:value="color.id"
				/>
				<span class="colors__value" :style="{ backgroundColor: color.encoding }"></span>
			</label>
		</li>
	</ul>
</template>
<script>
//у сеттера идет привязка к значению value у input, потому value в сетторе приходит сразу color.id
	export default {
		name: 'productColors',
		props: ['colorArray', 'currentColor'],
		data() {
			return {
				selectedColor: 'none',
			};
		},
		computed: {
			sendColor: {
				get() {
					return this.selectedColor;
				},
				set(value) {
					this.$emit('update:currentColor', value);
				},
			},
		},
	};
</script>
