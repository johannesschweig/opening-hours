<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { TYPE, SHOPS, type Shop } from '@/stores/shops'
import { ref, computed } from 'vue';
import ShopCard from '@/components/ShopCard.vue'
import { useStore } from '@/stores/index';

const store = useStore()


const expand = ref<string>("")

</script>

<template>
  <div id="wrapper">
    <h1>Opening hours</h1>
    <h2>Bakery</h2>
    <div class="grid">
      <ShopCard v-for="shop in SHOPS.filter((s: Shop) => s.type === TYPE.BAKERY)" :shop="shop"
        :expand="store.expand === shop.name" />
    </div>
    <h2>Groceries</h2>
    <div class="grid">
      <ShopCard v-for="shop in SHOPS.filter((s: Shop) => s.type === TYPE.GROCERIES)" :shop="shop"
        :expand="store.expand === shop.name" />
    </div>
    <h2>Rest</h2>
    <div class="grid">
      <ShopCard v-for="shop in SHOPS.filter((s: Shop) => s.type === TYPE.REST)" :shop="shop"
        :expand="store.expand === shop.name" />
    </div>
  </div>
</template>

<style scoped>
#wrapper {
  margin: 16px 8px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

h1,
h2 {
  font-weight: normal;
  opacity: .9;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}
</style>