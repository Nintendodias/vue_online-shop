<template>
	<ul class="catalog__list">
		<li class="catalog__item" v-for="product in products" :key="product.id">
      <ProductItem :product="product" />
		</li>
	</ul>
</template>

<script>
  import ProductItem from "./catalog_item";

	export default {
		name: 'ProductList',
    props: ['products'],
    components: {
      ProductItem
    }
	};
</script>

<style></style>
