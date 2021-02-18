<template>
	<div id="app">
		<!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
		<!-- <router-view /> -->

    <!--не нужно для router-->
    <!-- тег component позволяет отображать компоненты динамически -->
		<component :is="currentPageComponent" :page-params="currentPageParams" />
    <!-- end -->
	</div>
</template>

<script>
//не нужно для router
	import pageHome from '@/views/page_home';
  import pageProduct from '@/views/page_product';
  import pageNotFound from '@/views/page_notFound';
	import eventBus from '@/eventBus';

  const routes = {
    main: 'pageHome',
    product: 'pageProduct',
  }
	export default {
		components: {
			pageHome,
      pageProduct,
      pageNotFound
    },
    data() {
      return {
        currentPage: 'main',
        currentPageParams: {}
      }
    },
    methods: {
      goToPage(pageName, pageParams) {
        this.currentPage = pageName;
        this.currentPageParams = pageParams || {};
      }
    },
    computed: {
      currentPageComponent() {
        return routes[this.currentPage] || 'pageNotFound'
      }
    },
    created() {
      //Добавляем новый обработчик в шину
      //Первый аргумент - название события, которое мы хотим отловить
      //Второй аргумент - функци, которая сработает при положительном отлавливании
      eventBus.$on('goToPage', (pageName, pageParams) => this.goToPage(pageName, pageParams))
    }
  };
//end
</script>
<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
 