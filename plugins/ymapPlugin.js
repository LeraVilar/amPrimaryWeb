import plugin from 'vue-yandex-maps'
import { defineNuxtPlugin } from 'nuxt/app'

const settings = {
  apiKey: import.meta.env.VITE_YANDEX_API_KEY,
  lang: 'ru_RU',
  enterprise: false,
  version: '2.1'
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(plugin, settings)
})