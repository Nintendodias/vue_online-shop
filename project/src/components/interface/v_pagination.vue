<template>
	<ul class="catalog__pagination pagination">
		<li class="pagination__item">
			<a href="#" @click.prevent="changePage(page - 1)"
				class="pagination__link pagination__link--arrow" 
				:class="{'pagination__link--disabled': page === 1}"
				aria-label="Предыдущая страница"
			>
				<svg width="8" height="14" fill="currentColor">
					<use xlink:href="#icon-arrow-left"></use>
				</svg>
			</a>
		</li>

		<li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
			<a href="#" @click.prevent="changePage(pageNumber)" class="pagination__link" :class="{'pagination__link--current': pageNumber === page}">
				{{pageNumber}}
			</a>
		</li>

		<li class="pagination__item">
			<a href="#" @click.prevent="changePage(page + 1)" class="pagination__link pagination__link--arrow" :class="{'pagination__link--disabled': page === pages}" aria-label="Следующая страница">
				<svg width="8" height="14" fill="currentColor">
					<use xlink:href="#icon-arrow-right"></use>
				</svg>
			</a>
		</li>
	</ul>
</template>

<script>
export default {
  name: 'ProductPagination',
	props: ['page', 'count', 'perPage'],
	computed: {
		pages() {
			return Math.ceil(this.count / this.perPage) 
		},
	},
	methods: {
		changePage(page) {
			if (page <= 0 || page > this.pages) {
				return
			}
			this.$emit('update:page', page);
		}
	}
}
</script>
