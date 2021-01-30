<template>
	<ul class="colors">
		<li class="colors__item" v-for="color in colorArray" :key="color.id">
			<label class="colors__label">
				<input
					class="colors__radio sr-only"
					type="radio"
					name="color"
					@click="selectedColor = color.id, sendColor()"
					:value="color.id"
				/>
				<span class="colors__value" :style="{backgroundColor: color.encoding}"></span>
			</label>
		</li>
	</ul>
</template>
<script>

	export default {
    name: 'productColors',
    props: ['colorArray', 'currentColor'],
    data() {
      return {
        selectedColor: 'none'
      }
    },
    watch: {
      currentColor(value) {
        this.selectedColor = value;
      },
    },
    methods: {
      sendColor() {
        this.$emit('update:currentColor', this.selectedColor);
      }
    },
	};
</script>
