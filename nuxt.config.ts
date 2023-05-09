export default defineNuxtConfig({
  plugins: [
    { src: '~/plugins/ymapPlugin.js', mode: 'client' }
  ],
  modules: [
    '@nuxt/image-edge',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
  css: [
    '@/assets/scss/_base.scss',
    '@/assets/scss/_fonts.scss'
  ],
  vite: {
    logLevel: "info",
    optimizeDeps: {
      include: [
        'vue',
        'vue-yandex-maps'
      ]
    }
  }
});
