<template>
  <main class="min-h-screen flex flex-col justify-center p-4">
   <div class=" flex  flex-col items-center">
     <!--Banner-->
      <div class="w-full h-[400px] bg-black ">
        <img src="" alt="">
      </div>
      <!--Produtos-->
      <div>
        <h1 class="text-center items-center font-bold py-10 text-4xl ">Produtos</h1>
      </div>
      <div class="grid  gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 ">
        <CardProduto  v-for="product in products" :key="product.title" :products="product" />
      </div>
      
    </div>
    <!--Botão-->
    <div class="flex justify-end items-center gap-4 p-4 mt-5">
        <button class="bg-black text-white rounded-lg w-10 hover:cursor-pointer" @click="prevPage"><</button>
        <button @click="nextPage" class="bg-black rounded-lg text-white w-10 hover:cursor-pointer">></button>
      </div>
   
  </main>

</template>


<script setup>
import axios from 'axios'
import { ref, onMounted } from "vue"
import CardProduto from '../components/CardProdutoComponent.vue'

const products = ref([])
const skip = ref(0)
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
};

const nextPage = () => {
  skip.value += limit
  fetchProduct();
};

const prevPage = () => {
  if (skip.value > 0) {
    skip.value -= limit
    fetchProduct();
  }
};

onMounted(fetchProduct);
</script>
