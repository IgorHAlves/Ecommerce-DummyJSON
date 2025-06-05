<template>
  <div class="fixed w-full">
    <div class="bg-blue-50 text-center font-bold">Bem vindo ao dummyjson</div>
    <nav class="bg-black text-white flex justify-between h-15 px-10 py-4">
      <!-- Logo -->
      <router-link to="/">
        <h1 class="flex items-center hover:underline hover:cursor-pointer">
          Ecommerce
        </h1>
      </router-link>

      <!-- Barra de pesquisa -->
      <div class="flex items-center">
        <input
          type="text"
          class="w-120 bg-white text-black h-10 rounded pl-2 focus:outline-none"
          placeholder="Pesquise o produto"
          @input="onInput" 
          :value="searchStore.term"
        />
      </div>

      <!-- Navegação -->
      <ul class="flex gap-10 items-center relative">
        <router-link to="/">
          <li class="hover:underline hover:cursor-pointer">Produtos</li>
        </router-link>

        <!-- Dropdown de categorias -->
        <li class="relative" ref="dropdownRef">
          <button
            @click="toggleDropdown"
            class="hover:underline hover:cursor-pointer flex items-center gap-1"
          >
            Categorias
            <svg
              :class="{ 'rotate-180': showDropdown }"
              class="w-4 h-4 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          <ul
            v-if="showDropdown"
            class="absolute top-full left-0 mt-2 bg-white text-black w-40 shadow-lg rounded z-50 max-h-60 overflow-y-auto"
          >
            <li
              v-for="category in categories"
              :key="category"
              class="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              @click="selecionarCategoria(category)"
            >
              {{ category.name }}
            </li>
          </ul>
        </li>

        <li class="hover:underline hover:cursor-pointer">Carrinho</li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useSearchStore } from '../stores/SearchStore'

const searchStore = useSearchStore()
const onInput = (event) => {
  searchStore.setTerm(event.target.value)
}
const showDropdown = ref(false);
const categories = ref([]);
const dropdownRef = ref(null);
const router = useRouter();

const fetchCategory = async () => {
  try {
    const response = await axios.get(
      "https://dummyjson.com/products/categories"
    );
    categories.value = response.data;
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
  }
};

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}

function selecionarCategoria(category) {
  console.log("Categoria selecionada:", category.name);
  const url = category.url;
  console.log(url);

  showDropdown.value = false;
  router.push({ name: "ProductCategoryView", params: { slug: category.slug } });
}

function handleClickOutside(event) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    showDropdown.value = false;
  }
}

onMounted(() => {
  fetchCategory();
  document.addEventListener("click", handleClickOutside);
});
</script>
