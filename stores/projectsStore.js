import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projectsStore', {
  state: () => ({
    dataProjects: []
  }),
  getters: {
    getProjects() {
      return this.dataProjects
    }
  },
  actions: {
    async fetchDataProjects() {
      const res = await fetch(import.meta.env.VITE_URL_API + '/api/projects?populate=deep');
      const data = await res.json()
      this.dataProjects = data.data.map(el => el.attributes)
    }
  }
})