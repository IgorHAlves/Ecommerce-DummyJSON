<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold">{{ product.title }}</h1>
    <img 
      v-if="product.images && product.images.length" 
      :src="product.images[0]" 
      alt="Imagem Produto" 
      class="w-full max-w-md rounded-lg"
    />

    <p class="text-lg mt-4">R$ {{ product.price }}</p>
    <p class="mt-2">{{ product.description }}</p>
  </div>
</template>

<script setup>
  import axios from 'axios'
  import {useRoute} from 'vue-router'
  import {ref, onMounted} from 'vue'

  const route = useRoute()
  const product = ref({})

  const fetchProduct = async() => {
    const id = route.params.id
    const response = await axios.get(`https://dummyjson.com/products/${id}`)
    const results = response.data
    product.value = results
  }
  onMounted(fetchProduct)

</script>

