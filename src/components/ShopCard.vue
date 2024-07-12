<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { type Shop } from '@/stores/shops'
import { getStatus } from '@/utils';

const props = defineProps<{
  shop: Shop,
}>()

const route = `/detail/${props.shop.name}`
</script>

<template>
  <RouterLink :to='route' class="p-4 border border-gray-500 hover:bg-gray-200 focus:bg-gray-200 hover:text-black focus:text-black">
    <div class="">
      <span class="text-lg">{{ shop.name }}</span>
      <span class="float-right" :style="getStatus(shop.openingHours).style">
        {{ getStatus(shop.openingHours).message }}
      </span>
    </div>
  </RouterLink>
</template>