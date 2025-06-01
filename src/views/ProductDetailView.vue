<template>
   <template>
  <div class="p-4">
    <h1 class="text-2xl font-bold">{{ products.title }}</h1>
    <img 
      v-if="products.images && products.images.length" 
      :src="products.images[0]" 
      alt="Imagem do Produto" 
      class="w-full max-w-md rounded-lg"
    />

    <p class="text-lg mt-4">Preço: R$ {{ products.price }}</p>
    <p class="mt-2">{{ products.description }}</p>
  </div>
</template>
</template>