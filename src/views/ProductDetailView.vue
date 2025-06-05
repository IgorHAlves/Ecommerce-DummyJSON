<template>
  <div class="flex flex-col items-center justify-center min-h-screen text-center">
    <div class=" p-10 rounded-lg">

      <div class="flex items-center justify-center space-x-12">
      <img 
        v-if="product.images && product.images.length" 
        :src="product.images[0]" 
        alt="Imagem Produto" 
        class="bg-gray-100 flex w-[600px] h-[600px]"
      />
      <div class="flex flex-col flex-justify text-left w-[700px] ml-6 ">
        <h1 class="text-2xl font-bold underline mb-10">{{ product.title }}</h1>

        <h1 class="font-bold text-lg">Descrição:</h1>
        <p class="mt-2">{{ product.description }}</p>
        <p class="text-lg mt-4 font-bold">R$ {{ product.price }}</p>
        <!-- <p class="text-lg mt-4 font-bold">R$ {{ product.dimensions.width }}</p> -->
        <button class="bg-black text-white p-4 w-50 mt-10">Adicionar ao carrinho</button>     
      </div>
    </div>
    <div class="mt-20"> 
        <ReviewComponent 
        v-for="review in product.reviews"
         :key="review.reviewName" 
         :review="review" 
         /></div>
    </div>
    
 
  </div>
</template>

<script setup>
  import axios from 'axios'
  import {useRoute} from 'vue-router'
  import {ref, onMounted} from 'vue'
  import ReviewComponent from '../components/ReviewComponent.vue'

  const route = useRoute()
  const product = ref({})

  
  const fetchProductDetail = async() => {
    const id = route.params.id
    const response = await axios.get(`https://dummyjson.com/products/${id}`)
    const results = response.data
    product.value = results

    const dimensions = await Promise.all(
        product.then(response => response.data))

    console.log(dimensions.width);
    
  }


  onMounted(fetchProductDetail)

</script>

