<template>
  <router-link :to="`/product/${products.id}`" class="block">
    <div class="bg-gray-50 border-2 border-black p-2 text-black hover:shadow-lg cursor-pointer w-92">
      <img class="flex justify-center w-full " :src="products.images[0]" :alt="products.title" />
      <h1 class="text-left font-bold mt-2">{{ products.title }}</h1>
      <p class="text-left">R$ {{ products.price }}</p>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  products: Object
})
</script>