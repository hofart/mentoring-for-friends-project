<script setup></script>

<template>
  <div class="container mx-auto">
    <div class="">
      <div class="text-line relative">
        <h1
          class="bg-white relative w-40 mx-auto text-center text-purple-400 uppercase pb-[84px]"
        >
          Ofertas
        </h1>
      </div>
    </div>

    <div class="gap-[40px] grid grid-cols-4 grid-rows-1"></div>
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
