import { defineStore } from 'pinia'

export const useUsefulStore = defineStore('usefulStore', {
  state: () => ({
    index: 0,
    dataUseful: []
  }),
  actions: {
    setIndex(num) {
      this.index = num
    },

    async fetchUsefulData() {
      const res = await fetch(import.meta.env.VITE_URL_API + '/api/useful-medias?populate=*')
      const data = await res.json()
      this.dataUseful = data.data.map(el => el.attributes)
    },
  },
  getters: {
    getUsefulData() {
      return this.dataUseful
    }
  }
})