<template>
    <div class="banner">
        <img :src="src" :alt="alt" />
    </div>
</template>

<script>
export default {
    props: {
        src: {
            required: true,
            type: String,
        },
        alt: {
            required: true,
            type: String
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/components/banner.scss";
</style>