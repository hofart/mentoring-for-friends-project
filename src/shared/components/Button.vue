<script setup>
const props = defineProps({
  type: {
    type: String
  }
})
</script>

<template>
  <button :class="type">
    <slot />
  </button>
</template>