<script setup lang="ts">
import { TYPE, SHOPS, type Shop } from '@/stores/shops'
import ShopCard from '@/components/ShopCard.vue'
import { capitalizeFirstLetter } from "@/utils"
</script>

<template>
  <div>
    <div class="text-3xl mb-3">Opening hours</div>
    <div class="mt-4" v-for="type in [TYPE.BAKERY, TYPE.GROCERIES, TYPE.REST]">
      <div class="text-2xl mb-2">{{ capitalizeFirstLetter(type) }}</div>
      <div class="grid grid-cols-2 gap-2">
        <ShopCard v-for="shop in SHOPS.filter((s: Shop) => s.type === type)" :shop="shop"></ShopCard>
      </div>
    </div>
  </div>
</template>