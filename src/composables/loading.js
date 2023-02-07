import { computed } from "vue";
import { useGeneralStore } from '@/stores/general'

export function getLoading() {
    const generalStore = useGeneralStore();
    const loading = computed(() => {
      return generalStore.getLoading;
    });
    return {
      loading
    }
}
