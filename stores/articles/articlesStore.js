import { defineStore } from 'pinia'

export const useArticlesStore = defineStore('articlesStore', {
  state: () => ({
    scroll: null,
    isFullShow: false,
    dataCard: [],
    dataCardMedia: []
  }),
  getters: {
    geDataCardMedia() {
      if (!this.isFullShow) {
        if(this.scroll) {
          window.scrollTo(0, this.scroll)
        }
        return this.dataCardMedia.filter((_, i) => i < 4)
      } else {
        this.scroll = window.scrollY
        return this.dataCardMedia
      }
    },
    getDataCard() {
      return this.dataCard
    }
  },
  actions: {
    setIsFullShow() {
      this.isFullShow = !this.isFullShow
    },
    async fetchDataCardMedia() {
      const data = await fetch(import.meta.env.VITE_URL_API + '/api/articles-medias?populate=*')
      const res = await data.json()
      this.dataCardMedia = res.data.map(el => el.attributes)
    },
    async fetchDataCard() {
      const data = await fetch(import.meta.env.VITE_URL_API + '/api/programs?populate=*')
      const res = await data.json()
      this.dataCard = res.data.map(el => el.attributes)
    }
  }
})