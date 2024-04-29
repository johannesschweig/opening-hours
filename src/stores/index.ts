import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
  
  const expand = ref("")
  function setExpand(name: string) {
    expand.value = expand.value === name ? "" : name
  }

  return { expand, setExpand }
})
