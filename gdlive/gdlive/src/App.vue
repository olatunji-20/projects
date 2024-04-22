<template>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
* {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
#app {
  font-family: "Jacquard 24", system-ui;
  font-weight: 800;
  font-style: normal;
}


</style>
