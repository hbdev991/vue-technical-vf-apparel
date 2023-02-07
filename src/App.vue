<template>
  <Transition>
    <Loading v-if="loading"/> <!-- Show this if waiting on API call -->
  </Transition>
  <Transition>
    <Alert v-if="alertStatus" :message="alertMessage" /> <!-- Show this if alert required -->
  </Transition>
  <PageHeader />  
  <Banner :src="require('@/assets/images/bg.jpg')" :alt="'Banner image'" /> 
  <PageMain />
</template>

<script>
// General Components
import Loading from '@/components/General/Loading.vue'
import Alert from '@/components/General/Alert.vue'

// Components
import Banner from './components/Banner/Banner.vue'

// Layout Components
import PageHeader from './components/Layout/PageHeader.vue'
import PageMain from './components/Layout/PageMain.vue'

// Composables
import { getLoading } from '@/composables/loading'
import { getAlert } from '@/composables/alert'

export default {
  setup() {
    const { loading } = getLoading()
    const { alertStatus, alertMessage } = getAlert()
    return {
      loading,
      alertStatus,
      alertMessage
    }
  },
  components: {
    PageHeader,
    PageMain,
    Banner,
    Loading,
    Alert
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/modules/transitions.scss";
@import "@/assets/scss/main.scss";
</style>