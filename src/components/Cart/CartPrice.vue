<template>
    <div class="cart__price cartPrice" v-if="cost">
        <div class="cartPrice__desc">
            <p>
                <strong>
                    Total
                </strong>
            </p>
            <p>Inc. £{{ tax }} in taxes</p>
        </div>
        <div class="cartPrice__total">
            <p>£{{ cost }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cost: {
            required: true,
            type: Number
        },
        // Optional prop
        tax: {
            required: false,
            default: 0
        }
    }
}
</script>