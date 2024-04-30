<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { type Shop } from '@/stores/shops'
import { getStatus } from '@/utils';

const props = defineProps<{
  shop: Shop,
}>()

const route = `/detail/${props.shop.name}`

const getCurrentWeekDay = computed((): number => {
  let date = new Date()//"2023-05-07")
  return [6, 0, 1, 2, 3, 4, 5][date.getDay()]; // shift from sunday to monday
})

</script>

<template>
  <RouterLink :to='route' class="p-4 border border-gray-500">
    <div class="">
      <span class="text-lg">{{ shop.name }}</span>
      <span class="float-right" :style="getStatus(shop.openingHours).style">
        {{ getStatus(shop.openingHours).message }}
      </span>
    </div>
  </RouterLink>
</template>