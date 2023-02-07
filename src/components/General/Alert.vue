<template>
    <div :class="`alert alert--${type}`">
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    props: {
        message: {
            required: false,
            type: String,
            default: 'Something went wrong - please try again.'
        },
        type: {
            required: false,
            type: String,
            default: 'error'
        }
    },
}
</script>

<style lang="scss">
@import '@/assets/scss/components/alert.scss';
</style>