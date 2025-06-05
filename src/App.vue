<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/NavbarComponent.vue'
import Footer from './components/FooterComponent.vue'
</script>

<template>
  <div class="flex flex-col ">
    <Navbar />
        <RouterView class="mt-20" />
  </div>
  
  <Footer/>
</template>
