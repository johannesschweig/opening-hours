<script setup lang="ts">
import { useRoute } from 'vue-router'
import { SHOPS, type Shop } from '@/stores/shops'
import { getStatus, getCurrentWeekDay } from '@/utils';

const route = useRoute()
const path = route.path
const shopName = route.path.replace('/detail/', '')

const shop: Shop = SHOPS.filter(s => s.name === shopName)[0]

const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

function getWeekday(num: number) {
  return weekday[num]
}
</script>

<template>
  <div>
    <RouterLink to="/">
      <div class="text-3xl mb-3 hover:bg-white focus:bg-white hover:text-black focus:text-black">{{ `< ${shop.name}` }}</div>
    </RouterLink>
    <span class="float-right" :style="getStatus(shop.openingHours).style">
      {{ getStatus(shop.openingHours).message }}
    </span>
  </div>
  <div class="mb-3">
    <div v-for="(day, index) in shop.openingHours" :style="{ 'opacity': index === getCurrentWeekDay() ? 1 : 0.5 }">
      {{ getWeekday(index) }} {{ day }}
    </div>
  </div>
  <a class="text-gray-500" :href="shop.link">Website</a>
</template>
