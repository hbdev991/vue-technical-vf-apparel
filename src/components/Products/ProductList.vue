<template>
      <div class="products">
        <div class="products__filter">
          <DropdownList
            :placeholder="'Filter products'"
            :options="filterOptions"
            @dropdown-change="filterProducts" />
        </div>
        <div class="products__list productList">
        <ProductItem 
            v-for="(product, index) in products"
            :key="index"
            :product="product" />
        </div>
      </div>
</template>

<script>
// Components
import ProductItem from './ProductItem'
import DropdownList from '@/components/DropdownList/DropdownList'

// Composables
import { getProducts } from '@/composables/products'

// Stores
import { useProductsStore } from '@/stores/products'

export default {
  
  setup() {
    const { products, filterProducts } = getProducts()
    const productStore = useProductsStore();

    const filterOptions = productStore.getFilterOptions

    return {
      products,
      filterProducts,
      filterOptions
    }
  },
  components: {
    DropdownList,
    ProductItem
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/base/base.scss"; // Base Variables
@import "@/assets/scss/components/product/products.scss";
@import "@/assets/scss/components/product/product_list.scss";
</style>