import { defineStore } from 'pinia'

export const useGeneralStore = defineStore('general', {
    state: () => ({
        loading: false,
        alert: false,
        alertMessage: ''
    }),
    getters: {
        getLoading: (state) => state.loading,
        getAlert: (state) => state.alert,
        getAlertMessage: (state) => state.alertMessage,
    },
    actions: {
        async showLoader() {
            this.loading = true
        },
        async hideLoader() {
            this.loading = false
        },
        async showAlert(msg = '') {
            this.alert = true
            this.alertMessage = msg
        },
        async hideAlert() {
            setTimeout(() =>  this.alert = false, 3000) // Hide after 3 seconds
        }
    },
})