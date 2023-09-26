export default defineNuxtConfig({
  plugins: [
    { src: '~/plugins/ymapPlugin.js', mode: 'client' }
  ],
  modules: [
    '@nuxt/image-edge',
    [
      'yandex-metrika-module-nuxt3',
      {
        id: '95034429',
        webvisor: true,
        // consoleLog: true,
        // clickmap: true,
        // useCDN: false,
        // trackLinks: true,
        // accurateTrackBounce: true,
      }
    ],
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
  },
  runtimeConfig: {
    public: {
      gtm: {
        id: 'GTM-MPR69XNG',
        queryParams: {
          gtm_auth: 'AB7cDEf3GHIjkl-MnOP8qr',
          gtm_preview: 'env-4',
          gtm_cookies_win: 'x',
        },
        defer: false,
        compatibility: false,
        nonce: '2726c7f26c',
        enabled: true,
        debug: true,
        loadScript: true,
        enableRouterSync: true,
        ignoredViews: ['homepage'],
        trackOnNextTick: false,
        devtools: true,
      }
    }
  }
});
