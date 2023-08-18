<template>
  <div id="app">
    <Navbar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar/PortfolioNavbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  }
};
</script>

<style src="./App.scss" lang="scss" />
