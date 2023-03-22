<script setup>
import { Button } from '../components'
import Shopping from '../../assets/img/shopping-bags.svg'
import Avatar from '../../assets/img/avatar.svg'
import Search from '../../assets/img/search.svg'
</script>

<template>
  <div class="bg-beige">
    <div class="container mx-auto">
      <div class="flex items-center justify-between  py-7 w-full">
        <nav class="flex items-center gap-5 text-purple-400 uppercase">
          <a href="#" class="">Home</a>
          <a href="#" class="">Categorias</a>
          <a href="#" class="">Ofertas</a>
        </nav>

        <div>
          <input class="rounded-full" type="text" placeholder="Buscar">
          <Button type="bg-white">
            <img :src="Search" alt="search">
          </Button>
        </div>

        <div class="flex items-center justify-between gap-5">
          <figure>
            <img :src="Shopping" alt="carrinho de compra">
          </figure>
          <figure>
            <img :src="Avatar" alt="usuário">
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>