<template>
    <div class="text-white">
        <img class="h-40" src="products.images" alt="products.title">
        <h1 class="text-left font-bold">{{ products.title }}</h1>
        <p class="text-left">{{products.price}}</p>
    </div>
  </template>

  <script setup>
defineProps({
    products: Object
})
</script>