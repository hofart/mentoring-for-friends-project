<script setup>
import { BoxProduct } from "../../../../shared/components";
import { useProducts } from "./useProducts";

const { isLoading, products } = useProducts();
</script>

<template>
  <div class="container mx-auto">
    <div class="pt-[95px]">
      <div class="text-line relative">
        <h1
          class="bg-white relative w-40 mx-auto text-center text-purple-400 uppercase pb-[84px]"
        >
          Categorias
        </h1>
      </div>
    </div>

    <div v-if="isLoading">
      <h1>carregando produtos ...</h1>
    </div>

    <div v-else class="gap-[40px] grid grid-cols-6 grid-rows-2">
      <BoxProduct
        v-for="product in products"
        :title="product.title"
        :image="product.image"
      />
    </div>
  </div>
</template>

<style scoped>
.text-line::before {
  content: "";
  width: 100%;
  height: 1px;
  background-color: var(--bg-gold);
  position: absolute;
  margin-top: 11.5px;
}
</style>
