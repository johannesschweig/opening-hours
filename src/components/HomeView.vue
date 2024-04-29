<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { SHOPS } from '@/stores/shops'
import { ref, computed } from 'vue';
import ShopCard from '@/components/ShopCard.vue'
import { useStore } from '@/stores/index';

const store = useStore()


const expand = ref<string>("")

</script>

<template>
  <div id="wrapper">
    <h1>Opening hours</h1>
    <ShopCard
      v-for="shop in SHOPS"
      :shop="shop"
      :expand="store.expand === shop.name"
      />
  </div>
</template>

<style scoped>
  

  #wrapper {
    margin: 16px 8px;
  }

  h1 {
    font-size: 2rem;
  }

  
</style>