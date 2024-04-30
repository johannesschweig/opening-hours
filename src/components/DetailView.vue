<script setup lang="ts">
import { useRoute } from 'vue-router'
import { SHOPS, type Shop } from '@/stores/shops'
import { computed } from 'vue';

const route = useRoute()
const path = route.path
const shopName = route.path.replace('/detail/', '')

const shop : Shop = SHOPS.filter(s => s.name === shopName)[0]

const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


function getWeekday(num: number) {
  return weekday[num]
}

function getStatus(openingHours: string[]) {
  // find correct day
  // check if current time in opening hours
  let day = openingHours[getCurrentWeekDay.value]
  if (day) {
    let open = day.substring(0, 5)
    let closed = day.substring(6, 11)
    // find current time
    const now = new Date()
    let time = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes()}`

    if (time < open) {
      let openDate = new Date(now.getFullYear(), now.getUTCMonth(), now.getUTCDate(), parseInt(open.substring(0, 3)), parseInt(open.substring(4, 6)))
      let diffMin = Math.round((openDate - now) / 1000 / 60)
      let diffHours = Math.round(diffMin / 60)
      let diff = diffHours > 0 ? `opens in ${diffHours} h` : `opens in ${diffMin} min`
      console.log(diffMin)
      return {
        message: diff,
        style: {
          color: "yellow"
        }
      }
    } else if (time > closed) {
      return {
        message: "already closed",
        style: {
          color: "orangered"
        }
      }
    } else {
      // TODO open for another 1 hour max
      return {
        message: "open",
        style: {
          color: "lightgreen"
        }
      }
    }
  } else {
    return {
      message: "closed",
      style: {
        color: "red"
      }
    }
  }
}

const getCurrentWeekDay = computed((): number => {
  let date = new Date()//"2023-05-07")
  return [6, 0, 1, 2, 3, 4, 5][date.getDay()]; // shift from sunday to monday
})



</script>

<template>
  <div :class="['shop']">
    <div class="shopName">
      <RouterLink to="/"><h1>{{ `< ${shop.name}` }}</h1></RouterLink>
      <span class="status" :style="getStatus(shop.openingHours).style">
        {{ getStatus(shop.openingHours).message }}
      </span>
    </div>
    <div class="hours">
      <div v-for="(day, index) in shop.openingHours" :style="{ 'opacity': index === getCurrentWeekDay ? 1 : 0.5 }">
        {{ getWeekday(index) }} {{ day }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.shopName .status {
  float: right;
  font-size: 1rem;
}

.hours {
  margin-top: 16px;
}

.hours div {
  line-height: 24px;
}
</style>