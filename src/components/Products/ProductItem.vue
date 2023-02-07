<template>
    <div class="product">
        <div class="product__image">
            <img :src="product.src" alt="" />
        </div>
        <div class="product__titlePrice productTitlePrice">
            <div class="productTitlePrice__title">
                {{ product.title }}
            </div>
            <div v-if="product.price" class="productTitlePrice__price">
                £{{  product.price }}
            </div>
        </div>
        <div class="product__productActions">
            <button @click="addToBasket" type="button" class="btn btn--primary" :disabled="isInBasket">Add to cart</button>
            <button type="button" class="btn btn--light">Quick view</button>
        </div>
    </div>
</template>

<script>
// Composables
import { updateBasket } from '@/composables/updateBasket'
export default {
    setup(props) {
        const { isInBasket, addToBasket} = updateBasket(props.product)
        return {
            addToBasket,
            isInBasket
        }
    },
    props: {
        product: {
            required: true,
            type: Object
        }
    }, 
}
</script>

<style lang="scss">
@import "@/assets/scss/base/base.scss"; // Base Variables
@import "@/assets/scss/components/product/product.scss";
</style>