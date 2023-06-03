<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import DonutOrder from './components/DonutOrder.vue'
import DonutConfig from './components/DonutConfig.vue';

</script>

<template>
  <div class="app">

    <DonutOrder />
    <DonutConfig />

  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
