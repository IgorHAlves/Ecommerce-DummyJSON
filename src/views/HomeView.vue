<template>
  <main class="min-h-screen">
    <h1>Teste</h1>
    <div class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        <CardProduto
          v-for="product in products"
          :key="product.title"
          :products="product"/>
    </div>
  </main>
 
</template>


<script setup>
  import axios from 'axios'
  import { ref, onMounted } from "vue"
  import CardProduto from '../components/CardProdutoComponent.vue'

  const products = ref([])
  const skip = ref (0)
  const limit = 20

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products?skip=${skip.value}&limit=${limit}`)
      const results = response.data.products;
      products.value = results

      console.log(products.value);

    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  } 

  onMounted(fetchProduct);
</script>
