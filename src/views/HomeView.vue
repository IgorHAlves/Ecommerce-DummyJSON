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


<script>
  import axios from 'axios'
  import CardProduto from '../components/CardProdutoComponent.vue'
  import{ref, onMounted} from "vue"

  const products = ref([])
  const offset = ref (0)
  const limit = 20

  const fetch = async () => {
    const response = await axios.get(`'https://dummyjson.com/products?offset${offset.value}&limit${limit.value}'`)
    const results = response.data.products
    console.log(products.value);  
  } 
</script>
