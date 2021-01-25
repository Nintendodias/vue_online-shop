<template>
	<main class="content container">
		<div class="content__top content__top--catalog">
			<h1 class="content__title">
				Каталог
			</h1>
			<span class="content__info">
				152 товара
			</span>
		</div>

		<div class="content__catalog">
			<section_filter :priceMin.sync="filterPriceMin" :priceMax.sync="filterPriceMax" :categoryId.sync="filterCategoryId"/>
			<section_catalog :priceMin="filterPriceMin" :priceMax="filterPriceMax" :categoryId="filterCategoryId" />
		</div>
	</main>
</template>

<script>
	// @ is an alias to /src
	import section_catalog from '@/components/section_catalog.vue';
  import section_filter from '@/components/section_filter.vue';

	export default {
    name: 'page_main',
    data() {
      return {
        filterPriceMin: 0,
				filterPriceMax: 0,
				filterCategoryId: 0
      };
    },
		components: {
      section_catalog,
      section_filter
    },
	};
</script>
