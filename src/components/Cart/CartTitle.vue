<template>
    <div class="cart__title">
        <h3>{{ noOfItems ? 'Cart' : 'Your cart is empty' }}</h3>
        <span class="totalBubble" v-if="noOfItems">
            {{ noOfItems }}
        </span>
    </div>
</template>

<script>
export default {
    props: {
        noOfItems: {
            required: true,
            type: Number
        }
    }
}
</script>