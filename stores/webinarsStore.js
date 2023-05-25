import { defineStore } from 'pinia'

export const useWebinarsStore = defineStore('webinarsStore', {
  state: () => ({
    dataWebinars: []
  }),
  actions: {
      async fetchDataWebinars() {
        const data = await fetch(import.meta.env.VITE_URL_API + '/api/webinars?populate=*');
        const res = await data.json();
        this.dataWebinars = res.data;
      }
  },
  getters: {
    getDataWebinars(state) {
      return state.dataWebinars
    },
  }
})