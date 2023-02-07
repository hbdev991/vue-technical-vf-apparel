import { computed } from "vue";
import { useBasketStore } from '@/stores/basket'

export function updateBasket(product) {
    const basketStore = useBasketStore();
    let allProductsInBasket = computed(() => basketStore.getProductsInBasket) // get all basket items
    let isInBasket = computed(() => allProductsInBasket.value.indexOf(product) !== -1) // check if item is already in basket
    const addToBasket = () => {
        if (!isInBasket.value) basketStore.addProductToBasket(product)
    }
    const removeFromBasket = () => {
        basketStore.removeProductFromBasket(product)
    }

    return {
        isInBasket,
        addToBasket,
        removeFromBasket,
        allProductsInBasket
    }
}
