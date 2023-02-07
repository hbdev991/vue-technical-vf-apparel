<template>
    <main class="main">
      <!--
        This could be extended to have the sidebar optional via a prop
        and the child components added as slots to make it more scalable.
      -->
      <div class="container mainContent mainContent--sidebar">
          <ProductList />
          <PageAside />
      </div>
    </main>
</template>

<script>
// Components
import ProductList from '@/components/Products/ProductList'
import PageAside from '@/components/Layout/PageAside.vue'

export default {
  components: {
    ProductList,
    PageAside
  }
}
</script>