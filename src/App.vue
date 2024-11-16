<template>
  <!-- Bind the ref to the Header component instance -->
  <Header ref="headerRef"/>
  <div class="content">
    <router-view/>
  </div>
  <Footer/>
</template>

<script setup>
import {provide, ref} from 'vue';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

// Create a reference to the Header component
const headerRef = ref(null);

// Provide the headerRef so it can be injected into child components
provide('headerRef', headerRef);
</script>

<style scoped>
.content {
  width: 100%;
  padding-top: 80px; /* Adjust this value based on your header's height */
}
</style>