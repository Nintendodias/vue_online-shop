import Vue from 'vue';
import Vuex from 'vuex';
import products from '@/data/products';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cartProducts: [{ productId: 1, amount: 2 }],
    },
    //функции, позволяющие менять состояния хранилища
    mutations: {
        addProductToCart(state, { productId, amount }) {
            //2 параметра - 1. объект состояния хранилища 2. информация, передающуюся при вызове этой мутации

            const item = state.cartProducts.find(
                (item) => item.productId === productId,
            );

            if (item) {
                item.amount += amount;
            } else {
                state.cartProducts.push({ productId, amount });
            }
        },
    },
    getters: {
        //функция, которая вычисляет какое либо значение и кэширует результат
        cartDetailProducts(state) {
            return state.cartProducts.map((item) => {
                return {
                    ...item,
                    product: products.find(
                        (product) => product.id === item.productId,
                    ),
                };
            });
        },
        cartTotalPrice(state, getters) {
            return getters.cartDetailProducts.reduce(
                (acc, item) => item.product.price * item.amount + acc,
                0,
            );
        },
    },
});
