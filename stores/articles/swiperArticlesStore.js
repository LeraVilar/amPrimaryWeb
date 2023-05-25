import { defineStore } from 'pinia'

export const useSwiperArticlesStore = defineStore('swiperArticlesStore ', {
  state: () => ({
    dataSwiper: []
  }),
  getters: {
    getIsOpen() {
      return this.isOpen
    },
    getDataSlider() {
      return this.dataSwiper
    }
  },
  actions: {
    setIsOpen() {
      this.isOpen = !this.isOpen
    },

    async fetchSliderData() {
      const res = await fetch(import.meta.env.VITE_URL_API + '/api/slider-articles?populate=*')
      const data = await res.json()
      this.dataSwiper = data.data.map(el => el.attributes)
    }
  }
})