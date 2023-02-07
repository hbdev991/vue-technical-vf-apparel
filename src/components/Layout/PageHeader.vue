<template>
    <header class="pageHeader">
        <div class="container pageHeader__wrapper">
            <div class="pageHeader__logo">
                <Logo :src="require('@/assets/images/logo.png')" :alt="'VF Apparel'" />
            </div> 
            <div class="pageHeader__basketCount">
                <BasketCount />
            </div>
        </div>
    </header>
</template>

<script>
import Logo from '@/components/Header/Logo.vue'
import BasketCount from '@/components/Header/BasketCount.vue'
export default {
    components: {
        Logo,
        BasketCount
    }
}
</script>