<template>
	<aside class="filter">
		<h2 class="filter__title">Фильтры</h2>

		<form class="filter__form form" action="#" method="get" @submit.prevent="submit">
			<fieldset class="form__block">
				<legend class="form__legend">Цена</legend>
				<label class="form__label form__label--price">
					<input class="form__input" type="text" name="min-price" v-model.number='currentPriceMin' value="0" />
					<span class="form__value">От</span>
				</label>
				<label class="form__label form__label--price">
					<input class="form__input" type="text" name="max-price" v-model.number='currentPriceMax' value="12345" />
					<span class="form__value">До</span>
				</label>
			</fieldset>

			<fieldset class="form__block">
				<legend class="form__legend">Категория</legend>
				<label class="form__label form__label--select">
					<select class="form__select" type="text" name="category" v-model.number='currentCategoryId'>
						<option value="0">Все категории</option>
						<option :value="category.id" v-for="category in categories" :key="category.id">{{
							category.title
						}}</option>
					</select>
				</label>
			</fieldset>

			<fieldset class="form__block">
				<legend class="form__legend">Цвет</legend> 
				<productColors :colorArray="colors" :currentColor.sync="currentColor" />
			</fieldset>

			<fieldset class="form__block">
				<legend class="form__legend">Объемб в ГБ</legend>
				<ul class="check-list">
					<li class="check-list__item">
						<label class="check-list__label">
							<input
								class="check-list__check sr-only"
								type="checkbox"
								name="volume"
								value="8"
								checked=""
							/>
							<span class="check-list__desc">
								8
								<span>(313)</span>
							</span>
						</label>
					</li>
					<li class="check-list__item">
						<label class="check-list__label">
							<input class="check-list__check sr-only" type="checkbox" name="volume" value="16" />
							<span class="check-list__desc">
								16
								<span>(461)</span>
							</span>
						</label>
					</li>
					<li class="check-list__item">
						<label class="check-list__label">
							<input class="check-list__check sr-only" type="checkbox" name="volume" value="32" />
							<span class="check-list__desc">
								32
								<span>(313)</span>
							</span>
						</label>
					</li>
					<li class="check-list__item">
						<label class="check-list__label">
							<input class="check-list__check sr-only" type="checkbox" name="volume" value="64" />
							<span class="check-list__desc">
								64
								<span>(313)</span>
							</span>
						</label>
					</li>
					<li class="check-list__item">
						<label class="check-list__label">
							<input class="check-list__check sr-only" type="checkbox" name="volume" value="128" />
							<span class="check-list__desc">
								128
								<span>(313)</span>
							</span>
						</label>
					</li>
					<li class="check-list__item">
						<label class="check-list__label">
							<input class="check-list__check sr-only" type="checkbox" name="volume" value="264" />
							<span class="check-list__desc">
								264
								<span>(313)</span>
							</span>
						</label>
					</li>
				</ul>
			</fieldset>

			<button class="filter__submit button button--primery" type="submit">
				Применить
			</button>
			<button class="filter__reset button button--second" @click="reset" type="button">
				Сбросить
			</button>
		</form>
	</aside>
</template>

<script>
  import categories from '../data/categories';
	import colors from '../data/colors';
	import productColors from './interface/v-colors';

	export default {
		name: 'section_filter',
    props: ['priceMin', 'priceMax', 'categoryId', 'filterColor'],
    data() {
      return {
        currentPriceMin: 0,
        currentPriceMax: 0,
        currentCategoryId: 0,
        currentColor: 'none'
      };
		},
		components: {
			productColors
		},
		computed: {
      // currentPriceMin: {
      //   //Вызывается в v-model у input с минимальной ценой v-model="currentPriceMin"
      //   //Решает проблему ошибки Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.
      //   get() {
      //     //вызывается для получения значения
      //     return this.priceMin;
      //   },
      //   set(value) {
      //     //вызывается, когда ктото пытается изменять вычисляемое свойство напрямую
      //     this.$emit('update: priceMin', value);
      //   }
      // },
			categories() {
				return categories; 
      },
      colors() {
				return colors;
			},
    },
    //наблюдатель или watcher - следит за свойством или параметром и как только значение свойства меняется, вызывается определенная функция
    //ключ - название наблюдаемого свойства
    //значение - функция, которая выполнится при изменении начения свойства
    watch: {
      priceMin(value) {
        this.currentPriceMin = value;
      },
      priceMax(value) {
        this.currentPriceMax = value;
      },
      categoryId(value) {
        this.currentCategoryId = value;
      },
      filterColor(value) {
        this.currentColor = value;
      },
    },
    methods: {
      submit() {
        this.$emit('update:priceMin', this.currentPriceMin);
        this.$emit('update:priceMax', this.currentPriceMax);
        this.$emit('update:categoryId', this.currentCategoryId);
        this.$emit('update:filterColor', this.currentColor);
      },
      reset() {
        this.$emit('update:priceMin', 0);
        this.$emit('update:priceMax', 0);
        this.$emit('update:categoryId', 0);
        this.$emit('update:filterColor', 'none');
      }
    }
	};
</script>
