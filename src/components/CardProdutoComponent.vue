<template>
    <div class="bg-gray-50 border-2 border-black p-2 text-black gap-4 ">
        <img class="h-80" :src="products.images[0]" :alt="products.title">
        <h1 class="text-left font-bold">{{ products.title }}</h1>
        <p class="text-left">{{products.price}}</p>
    </div>
  </template>

  <script setup>
defineProps({
    products: Object
})
</script>