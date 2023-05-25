import { defineStore } from 'pinia'

export const useForMedWork = defineStore('forMedWork', {
  state: () => ({
    dataForMed: []
  }),
  getters: {
    getDataMedWor() {
      return this.dataForMed
    }
  },
  actions: {
    async fetchDataMedWor() {
      const res = await fetch(import.meta.env.VITE_URL_API + '/api/for-med-workers?populate=*');
      const data = await res.json()
      this.dataForMed = data.data.map(el => el.attributes)
    }
  }
})