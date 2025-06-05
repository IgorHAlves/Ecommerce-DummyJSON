<template>
    <div class="shadow-lg">
      <div class="bg-beige-100 p-2 text-black  w-92">
        <h1 class="text-left font-bold mt-2">Nota: {{ review.rating }}</h1>
        <h1 class="text-left font-bold mt-2">Comment: {{ review.comment }}</h1>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    review: Object
  })
  </script>