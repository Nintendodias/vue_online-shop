<template>
	<section class="catalog">
		<ProductList :products="productsArr" />
		<ProductPagination :page.sync="page" :count="countProducts" :per-page="productsPerPage" />
	</section>
</template> 

<script>
	import ProductList from './section_catalog/catalog_list.vue';
	import ProductPagination from './interface/v_pagination';
	import products from "../data/products";


	export default {
		name: 'section_catalog',
		props: ['priceMin', 'priceMax', 'categoryId', 'filterColor'],
		components: {
			ProductList,
			ProductPagination,
		},
		data() {
			return {
				page: 1,
				productsPerPage: 6,
			};
		},
		computed: {
			filteredProducts() {
				let filteredProducts = products;

				if (this.priceMin > 0) {
					filteredProducts = filteredProducts.filter(
						(product) => product.price >= this.priceMin,
					);
				}

				if (this.priceMax > 0) {
					filteredProducts = filteredProducts.filter(
						(product) => product.price <= this.priceMax,
					);
				}

				if (this.categoryId) {
					filteredProducts = filteredProducts.filter(
						(product) => product.categoryId === this.categoryId,
					);
				}

				if (this.filterColor !== 'none') {
					filteredProducts = filteredProducts.filter((product) => product.colors.some(color => this.filterColor === color));
				}
				return filteredProducts
			},
			productsArr() {
				//offset нужен для перелистывания страниц. Меняется только 1 параметр, выбираются следующие эл-ты массива
				const offset = (this.page - 1) * this.productsPerPage;

				return this.filteredProducts.slice(offset, offset + this.productsPerPage);
			},
			countProducts() {
				return this.filteredProducts.length;
			},
		},
	};
</script>

<style scoped lang="scss">
	.catalog {
	}
</style>
