<template>
  <main class="min-h-screen">
    <h1>Teste</h1>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2">
        <CardProduto
          v-for="product in products"
          :key="product.title"
          :products="product"/>
    </div>
  </main>
 
</template>


<!--<script setup>
  import CardProduto from '../components/CardProdutoComponent.vue'
</script>-->