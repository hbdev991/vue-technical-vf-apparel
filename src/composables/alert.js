import { computed } from "vue";
import { useGeneralStore } from '@/stores/general'

export function getAlert() {
    const generalStore = useGeneralStore();
    let alertStatus = computed(() => generalStore.getAlert)
    let alertMessage = computed(() => generalStore.getAlertMessage)
    return {
        alertStatus,
        alertMessage
    }
}