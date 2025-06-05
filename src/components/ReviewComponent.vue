<template>
    <div class="shadow-lg">
      <div class="bg-beige-100 p-2 text-black  w-92">
        <h1 class="text-left font-bold mt-2 underline"> {{ review.reviewerName }}</h1>
        <div class="flex">
        <h1 class="text-left font-bold mt-2">Nota:</h1> <h1 class="mt-2 ml-2">{{ review.rating }}</h1>
        </div>
        <div class="flex">
        <h1 class="text-left font-bold mt-2">Comentário: </h1> <h1 class="mt-2 ml-2">{{ review.comment }}</h1>
      </div></div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    review: Object
  })
  </script>