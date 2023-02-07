import { defineStore } from 'pinia'

export const useBasketStore = defineStore('basket', {
    state: () => ({
        productsInBasket: []
    }),
    getters: {
        getProductsInBasket: (state) => state.productsInBasket,
    },
    actions: {
        async addProductToBasket(product) {
            this.productsInBasket.push(product)
        },
        async removeProductFromBasket(product) {
            const index = this.productsInBasket.indexOf(product);
            if (index > -1) {
                this.productsInBasket.splice(index, 1);
            }
        },
    },
})