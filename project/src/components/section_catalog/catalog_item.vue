<template>
	<div>
		<a class="catalog__pic" href="#">
			<img :src="product.img" :alt="product.name" />
		</a>

		<h3 class="catalog__title">
			<a href="#">
				{{ product.name }} 
			</a>
		</h3>

		<span class="catalog__price"> {{ product.price }}₽ </span>

		<ul class="colors colors--black">
			<li class="colors__item">
				<label class="colors__label">
					<input class="colors__radio sr-only" type="radio" value="blue" v-model="color" />
					<span class="colors__value" style="background-color: #73B6EA;"> </span>
				</label>
			</li>
			<li class="colors__item">
				<label class="colors__label">
					<input class="colors__radio sr-only" type="radio" value="green" v-model="color" />
					<span class="colors__value" style="background-color: #8BE000;"> </span>
				</label>
			</li>
			<li class="colors__item">
				<label class="colors__label">
					<input class="colors__radio sr-only" type="radio" value="black" v-model="color" />
					<span class="colors__value" style="background-color: #222;"> </span>
				</label>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'ProductItem',
	   props: ['product'],
	   data() {
	     return {
	       color: '#73B6EA'
	     };
	   }
	};
</script>
