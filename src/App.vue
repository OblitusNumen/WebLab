<template>
  <Header />
  <div class="content">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'App',
  components: { Footer, Header }
}
</script>

<style scoped>
.content {
  width: 100%;
  padding-top: 80px; /* Adjust this value based on your header's height */
}
</style>