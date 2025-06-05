<template>
  <footer class="bg-black text-white mt-20 px-6 py-10 md:px-16">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Sobre -->
      <div>
        <h3 class="font-bold text-lg mb-4">Sobre</h3>
        <p class="text-sm text-gray-300">
          Este projeto é um ecommerce fictício utilizando a API do dummyjson. Foi desenvolvido com Vue.js e Tailwind CSS.
        </p>
      </div>

      <!-- Contato -->
      <div>
        <h3 class="font-bold text-lg mb-4">Contato</h3>
        <ul class="text-sm text-gray-300 space-y-2">
          <li>Email: igor.h.alves.ads@gmail.com ou R4f4santoss@gmail.com</li>
          <li>Telefone: (14) 99608-1679 ou (14) 99729-3107</li>
          <li>Endereço: Av. Higino Muzi Filho, 1001 - Mirante, Marília - SP, 17525-902</li>
        </ul>
      </div>
    </div>

    <div class="text-center text-gray-400 text-xs mt-10">
      &copy; {{ new Date().getFullYear() }} Ecommerce Fictício. Todos os direitos reservados.
    </div>
  </footer>
</template>

<script setup>
// Nenhuma lógica extra necessária no footer
</script>
