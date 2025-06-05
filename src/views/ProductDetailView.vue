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
        <h1 class="text-2xl font-bold underline ">{{ product.title }}</h1>
        <h2 class="text-xs mb-10 mt-1">{{ product.sku }}</h2>

        <h1 class="font-bold text-lg">Descrição:</h1>
        <p class="mt-2">{{ product.description }}</p>

          <p v-if="product.dimensions && product.dimensions.width" class=" flex mt-3 ">
           <p class="font-bold ">Largura:</p>  <p class="px-1">{{ product.dimensions.width }} cm</p>
          </p>
          <p v-if="product.dimensions && product.dimensions.height" class=" flex mt-2 ">
            <p class="font-bold ">Altura:</p> <p class="px-1">{{ product.dimensions.height }} cm</p>
          </p>

        <p class="text-lg mt-6 font-bold "><p class="bg-yellow-500 w-12 rounded-lg text-[14px]">{{ product.discountPercentage }}%</p>R$ {{ product.price }}</p>
        
         <p class="mt-3">Total disponivel:  {{ product.stock }} </p>
        <button class="bg-black text-white p-4 w-50 mt-10 hover:underline hover:cursor-pointer">Adicionar ao carrinho</button>     
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

    // const dimensions = await Promise.all(
    //     product.then(response => response.data))

    // console.log(dimensions.width);
    
  }


  onMounted(fetchProductDetail)

</script>

