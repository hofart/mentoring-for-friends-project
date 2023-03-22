<script setup>
import BgGray from '../../assets/img/retangulo.svg'

defineProps({
  title: String,
  image: String,
})

const style = { bg: `url(${BgGray})` }
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="bg-purple flex items-center justify-center w-[115px] h-[115px]">
      <img :src="image" alt="Imagem" />
    </div>
    <div class="mt-5">
      <h2>{{ title }}</h2>
    </div>
  </div>
</template>

<style>
.bg-purple {
  background-image: v-bind('style.bg');
}
</style>