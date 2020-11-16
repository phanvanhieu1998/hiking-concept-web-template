<template>
  <div id="app">
    <Home></Home>
    
  </div>
</template>

<script>
import Home from "./pages/Home.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Home,
  },
};
</script>

<style>
.app {
  width: 100;
}
</style>
