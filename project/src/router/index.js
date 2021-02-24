import Vue from "vue";
import VueRouter from "vue-router";
import page_main from "@/views/page_home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "page_main",
    component: page_main
  },
  {
    path: "/product/:id",
    name: "page_product",
    component: () =>
      import("@/views/page_product.vue")
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import("@/views/page_notFound.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
