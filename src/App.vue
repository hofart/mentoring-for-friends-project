<script setup>
import TopHeader from "./shared/layout/TopHeader.vue";
import Header from "./shared/layout/Header.vue";
</script>

<template>
  <TopHeader />
  <Header />
  <div>
    <router-view />
  </div>
</template>
