<template>
	<div> 
		<a class="catalog__pic" href="#" @click.prevent="goToPage('product', {id: product.id})">
			<img :src="product.img" :alt="product.name" />
		</a>

		<h3 class="catalog__title">
			<a href="#">
				{{ product.name }}
			</a>
		</h3>

		<span class="catalog__price"> {{ product.price | numberFormat }}₽ </span>

		<productColors :colorArray="this.formedItemColorArray" :currentColor.sync="currentColor" />
	</div>
</template>

<script>
	import productColors from '../interface/v-colors';
	import colors from '../../data/colors';
	import goToPage from '@/helpers/goToPage';
	import numberFormat from '@/helpers/numberFormat';
	//надо создать условия для клика в карточках
	//для этого создать событие 

	export default {
		name: 'ProductItem',
		props: ['product', 'index'],
		components: {
			productColors
		},
		data() {
			return {
				currentItemIndex: this.product.colors,
				currentColor: 'none'
			}
		},
		watch: {
			currentColor: function(value) {
				this.currentColor = value;
				this.changeCard()
			}
		},
		filters: {
			//Чтото, что нужно отформатировать
			numberFormat
		},
		methods: {
			goToPage,
			changeCard() {
				console.log('Скоро я буду менять цвета карточек')
				console.log(this.currentColor)
			},
		},
		computed: {
			colors() {
				return colors
			},
			formedItemColorArray() {
				return colors.filter(color => this.currentItemIndex.some(item => item == color.id));
			},
		}
	};
</script>
