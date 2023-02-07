import { defineStore } from 'pinia'
import { useGeneralStore } from './general'

// Helpers
import { parseProductData } from '@/helpers/parseProductData'

// Api
import { getProducts } from '@/api/products'

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [],
        productsInBasket: [],
        filterOptions: [
            {title: 'Title A-Z', value: 'title-a-z'},
            {title: 'Title Z-A', value: 'title-z-a'},
            {title: 'Highest Price', value: 'price-descending'},
            {title: 'Lowest Price', value: 'price-ascending'},
        ]
    }),
    getters: {
        getProducts: (state) => state.products,
        getProductsInBasket: (state) => state.productsInBasket,
        getFilterOptions: (state) => state.filterOptions,
    },
    actions: {
        // Get products request to API that accepts query paramaters to be passed
        async updateProducts(query = {}) {
            const generalActions = useGeneralStore()
            try {
                generalActions.showLoader() // Show loader as API request kicks off
                const data = await getProducts('', query).then(res => res.data.products)
                this.products = await parseProductData(data)
            } catch (error) {
                // Show alert if error is thrown
                generalActions.showAlert('Something went wrong - Please try again.')
            } finally {
                setTimeout(() => {
                    generalActions.hideLoader() // Hide loader with a 300ms delay for aesthetic purposes
                }, 300)
                generalActions.hideAlert()
            }
        },
        async filterProducts(filterType) {
            // Switch statement to sort based on selected query
            switch(filterType) {
                case 'title-a-z':
                    this.products = this.products.sort((a, b) => a.title.localeCompare(b.title));
                    return
                case 'title-z-a':
                    this.products = this.products.sort((a, b) => b.title.localeCompare(a.title));
                    return
                case 'price-descending':
                    this.products = this.products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
                    return
                case 'price-ascending':
                    this.products = this.products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
                    return
            } 
        }
    },
})