import { defineStore } from 'pinia'

export const useGuidesStore = defineStore('guidesStore', {
  state: () => ({
    dataGuides: []
  }),
  getters: {
    getDataGuides() {
      return this.dataGuides
    }
  },
  actions: {
    async fetchDataGuides() {
      const res = await fetch(import.meta.env.VITE_URL_API + '/api/guides?populate=deep');
      const data = await res.json()
      this.dataGuides = data.data.map(el => el.attributes)
    }
  }
})