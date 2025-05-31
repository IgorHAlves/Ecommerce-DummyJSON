<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/NavbarComponent.vue'
import Footer from './components/FooterComponent.vue'
</script>

<template>
  <div class="flex bg-white flex-col ">
    <Navbar />
        <RouterView />
  </div>
  
  <Footer/>
</template>
