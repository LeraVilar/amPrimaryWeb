import { defineStore } from 'pinia'

export const usePopupStore = defineStore('popupStore', {
  state: () => ({
    isOpen: false
  }),
  getters: {
    getIsOpen() {
      return this.isOpen
    }
  },
  actions: {
    setIsOpen() {
      this.isOpen = !this.isOpen
    }
  }
})