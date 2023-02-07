<template>
    <div class="dropdownList">
        <select @change="emitEvent($event)">
            <option value="" disabled selected>{{ placeholder }}</option>
            <option 
            v-for="(option, index) in options"
            :key="index"
            :value="option.value"
            >{{ option.title }}</option>
        </select>
    </div>
</template>

<script>
export default {
    emits: ['dropdownChange'],
    props: {
        placeholder: {
            required: true,
            type: String
        },
        options: {
            required: true,
            type: Array
        }
    },
    setup(props, ctx) {
        // Emit events being used here to let the parent decide the functionality
        function emitEvent(event) {
            ctx.emit('dropdownChange', event)
        }
        return {
            emitEvent
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/scss/base/base.scss"; // Base Variables
@import "@/assets/scss/components/dropdown_list.scss";
</style>