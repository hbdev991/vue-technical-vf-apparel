import { computed, onMounted } from "vue";
import { useProductsStore } from '@/stores/products'
import { useGeneralStore } from '@/stores/general'

export function getProducts() {
    const productsStore = useProductsStore();
    const generalStore = useGeneralStore()

    const products = computed(() => {
      return productsStore.getProducts;
    });


    // Filter products based on dropdown value
    const filterProducts = async (event) => {
      let value = event.target.value
      generalStore.showLoader() // show loader
      await productsStore.filterProducts(value)
      
      // Hide loader and add 300ms for animation effect to not jarr the user
      setTimeout(() => generalStore.hideLoader(), 300) 
    }

    // On mount lifecycle hook get products
    onMounted(async () => {
      await productsStore.updateProducts();
    });

    return {
      products,
      filterProducts
    }
}