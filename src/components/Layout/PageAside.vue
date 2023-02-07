<template>
    <aside>
        <!-- if on larger application this could be injected via a slot if it was to contain different components dependent on page or route -->
        <Cart />
    </aside>
</template>

<script>
// Components
import Cart from '@/components/Cart/Cart'

export default {
  components: {
    Cart,
  }
}
</script>