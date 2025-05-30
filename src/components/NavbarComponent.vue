<template>
    <nav class="bg-black text-white flex justify-between mt-5 h-15">
        <!-- Logo -->
        <h1 class="flex ml-10 items-center hover:underline hover:cursor-pointer">Ecommerce</h1>

        <!-- Barra de pesquisa -->
        <div class="flex items-center">
            <input type="text" class=" w-120 bg-white text-black h-10 rounded pl-2 focus:outline-none"
                placeholder="Pesquise o produto">
        </div>
        <!-- Navegação -->
        <ul class="flex gap-15 mr-10 items-center">
            <li class="hover:underline hover:cursor-pointer">Produtos</li>
            <li class="hover:underline hover:cursor-pointer">Categorias</li>
            <li class="hover:underline hover:cursor-pointer">Carrinho</li>
        </ul>
    </nav>
</template>