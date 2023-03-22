import { ref, onMounted, watchEffect } from "vue";
import { getProductList } from "../../api/products.api";

export function useProducts() {
  const products = ref([]);
  const isLoading = ref(false);

  async function loadProducts() {
    try {
      isLoading.value = true
      products.value = await getProductList()
    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false
    }
  }

  onMounted(() => loadProducts())

  return { isLoading, products, loadProducts };
}
