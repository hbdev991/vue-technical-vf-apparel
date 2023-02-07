import { computed } from "vue";
import { useBasketStore } from '@/stores/basket'

export function getBasketInfo() {
    const basketStore = useBasketStore();
    let productsInBasket = computed(() => basketStore.getProductsInBasket) // is there products in basket
    let noItemsInBasket = computed(() => productsInBasket.value.length) // how many items are in the basket
    
    let costOfItemsInBasket = computed(() => {
        // check array isn't empty first
        if (productsInBasket.value.length) {
            // Reducer to sum all components in basket by price
            return productsInBasket.value.reduce((total, product) => parseInt(product.price) + total, 0)
        }
        return 0
    })

    return {
      productsInBasket,
      noItemsInBasket,  
      costOfItemsInBasket,
    }
}
