<template>
    <div class="summaryItem">
        <div class="summaryItem__titlePrice">
            <p class="summaryItem__title">{{ product.title }}</p>
            <p class="summaryItem__price">£{{ product.price }}</p>
        </div>
        <div class="summaryItem__variantRemove">
            <p class="summaryItem__variant">{{ product.variantTitle }}</p>
            <button @click="removeFromBasket" type="button" class="btn btn--small btn--light">Remove</button>
        </div>
    </div>
</template>

<script>
// Composables
import { updateBasket } from '@/composables/updateBasket'
export default {
    props: {
        product: {
            required: true,
            type: Object
        }
    },
    setup(props) {
        const { removeFromBasket } = updateBasket(props.product)
        return {
            removeFromBasket
        }
    }
}
</script>