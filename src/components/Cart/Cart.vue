<template>
    <div class="cart">
        <CartTitle :noOfItems="noItemsInBasket" />
        <div class="cart__summary">
            <CartSummaryItem
            v-for="product in productsInBasket"
            :key="product.id"
            :product="product" />
        </div>
        <CartPrice :cost="costOfItemsInBasket" />
    </div>
</template>

<script>
import CartTitle from './CartTitle.vue'
import CartSummaryItem from './CartSummaryItem.vue'
import CartPrice from './CartPrice.vue'

// Consumables
import { getBasketInfo } from '@/composables/basketInfo'
export default {
    setup() {
        const { productsInBasket, noItemsInBasket, costOfItemsInBasket } = getBasketInfo()
        return {
            productsInBasket,
            noItemsInBasket,
            costOfItemsInBasket,
        }
    },
    components: {
        CartTitle,
        CartSummaryItem,
        CartPrice
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/base/base.scss"; // Base Variables
@import "@/assets/scss/components/cart.scss";
</style>

