import { defineStore } from 'pinia'

export const useSliderComand = defineStore('sliderComand', {
  state: () => ({
    dataSliderComand: []
  }),
  getters: {
    getSliderComand() {
      return this.dataSliderComand
    }
  },
  actions: {
    async fetchDataSliderComand() {
      const res = await fetch(import.meta.env.VITE_URL_API + '/api/slider-comands?populate=*');
      const data = await res.json()
      this.dataSliderComand = data.data.map(el => el.attributes)
    }
  }
})