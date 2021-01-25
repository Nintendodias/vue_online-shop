<template>
	<section class="catalog">
		
		<ProductList :products="products" />
		<ProductPagination :page.sync="page" :count="countProducts" :per-page="productsPerPage" />
	</section>
</template>

<script>
	import ProductList from "./section_catalog/catalog_list.vue";
	import ProductPagination from "./interface/v_pagination"
	import products from "../data/products";

	export default {
		name: 'section_catalog',
		components: {
			ProductList,
			ProductPagination
		},
		data() {
			return {
				page: 1,
				productsPerPage: 6,
			}
		},
		computed: {
			products() {
				//offset нужен для перелистывания страниц. Меняется только 1 параметр, выбираются следующие эл-ты массива
				const offset = (this.page - 1) * this.productsPerPage;
				return products.slice(offset, offset + this.productsPerPage);
			},
			countProducts() {
				return products.length;
			}
		}
	};
</script>

<style scoped lang="scss">
	.catalog {
	}
</style>
