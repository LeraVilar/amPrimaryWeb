
export const useReviewsSlider = defineStore('reviewsSlider', {
  state: () => ({
    dataReviewsSlider: [],
  }),
  getters: {
    getReviewsSlider() {
      return this.dataReviewsSlider
    }
  },
  actions: {
    async fetchDataReviewsSlider(value) {
      const filterData = value ? `filters[typeReviews][$eq]=${value}&` : ''
      // console.log(import.meta.env.VITE_URL_API + `/api/reviews-sliders?&${filterData}pagination[limit]=-1`);
      const res = await fetch(import.meta.env.VITE_URL_API + `/api/reviews-sliders?&${filterData}pagination[limit]=-1`);
      const data = await res.json()
      this.dataReviewsSlider = data.data.map(el => el.attributes)
    },
  }
})