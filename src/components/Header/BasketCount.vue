<template>
    <div class="basketCount" v-if="noItemsInBasket">
        £{{ costOfItemsInBasket }}
        <span class="totalBubble">
            {{ noItemsInBasket }}
        </span>
    </div>
</template>

<script>
// consumables
import { getBasketInfo } from '@/composables/basketInfo'
export default {
    setup() {
        const { noItemsInBasket, costOfItemsInBasket } = getBasketInfo()
        return {
            noItemsInBasket,
            costOfItemsInBasket
        }
    },
}
</script>