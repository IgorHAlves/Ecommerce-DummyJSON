<template>
    <main class="min-h-screen flex flex-col justify-center p-4">

        <!--Produtos-->
        <div>
            <h1 class="text-center items-center font-bold py-10 text-4xl ">Produtos</h1>
        </div>
        <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 ">
            <CardProduto v-for="product in products" :key="product.title" :products="product" />
        </div>



    </main>

</template>


<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import axios from 'axios'

const route = useRoute()
const categoria = ref(route.params.url) // isso pega o "laptops", por exemplo
const products = ref([])

const fetchProduct = async () => {
    try {
        const response = await axios.get(categoria.value)
        products.value = response.data.products
        console.log(products.value);

    } catch (error) {
        console.error('Erro ao buscar produtos:', error)
    }
}

onMounted(fetchProduct)

</script>
