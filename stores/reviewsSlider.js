import { defineStore } from 'pinia'

export const useReviewsSlider = defineStore('reviewsSlider', {
  state: () => ({
    dataReviewsSlider: [],
    typeReviews: ''
  }),
  getters: {
    getReviewsSlider() {
      if (!this.typeReviews) {
        return this.dataReviewsSlider
      } else {
        return this.dataReviewsSlider.filter(el => el.typeReviews === this.typeReviews)
      }
      
    }
  },
  actions: {
    async fetchDataReviewsSlider() {
      const res = await fetch(import.meta.env.VITE_URL_API + '/api/reviews-sliders');
      const data = await res.json()
      this.dataReviewsSlider = data.data.map(el => el.attributes)
    },

    filterReviews(type = '') {
      this.typeReviews = type
    }
  }
})