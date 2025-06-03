<template>
  <!--Produtos-->
  <div>
    <h1 class="text-center items-center font-bold py-10 text-4xl">
      {{ category }}
    </h1>
  </div>
  <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
    <CardProduto
      v-for="product in products"
      :key="product.title"
      :products="product"
    />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import CardProduto from "../components/CardProdutoComponent.vue";

const route = useRoute();
const category = ref(route.params.slug);

const products = ref([]);
const fetchProduct = async () => {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${category.value}`
    );
    products.value = response.data.products;
    console.log(products.value);
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
  }
};

watch(
  () => route.params.slug,
  (newSlug) => {
    category.value = newSlug;
    fetchProduct();
  }
);

onMounted(fetchProduct);
</script>
