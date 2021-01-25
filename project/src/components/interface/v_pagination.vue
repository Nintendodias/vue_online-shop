<template>
	<ul class="catalog__pagination pagination">
		<li class="pagination__item">
			<a href="#" @click.prevent="prev"
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
			<a href="#" @click.prevent="paginate(pageNumber)" class="pagination__link" :class="{'pagination__link--current': pageNumber === page}">
				{{pageNumber}}
			</a>
		</li>

		<li class="pagination__item">
			<a href="#" @click.prevent="next" class="pagination__link pagination__link--arrow" :class="{'pagination__link--disabled': page === pages}" aria-label="Следующая страница">
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
		paginate(page) {
			this.changePage(page);
		},
		prev() {
			if (this.page - 1 <= 0) {
				return
			}
			this.changePage(this.page - 1);
		},
		next() {
			if (this.page >= this.pages) {
				return
			}
			this.changePage(this.page + 1);
		},
		changePage(page) {
			this.$emit('update:page', page);
		}
	}
}
</script>
