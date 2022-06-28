export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'VTrounce',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Digital Marketing Agency',
      },
      { name: 'format-detection', content: 'telephone=yes' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'VTrounce, vtrounce, digital, service, marketing, website',
      },
      { hid: 'author', name: 'author', content: 'Nahez Sakharkar' },
      { hid: 'publisher', name: 'publisher', content: 'Nahez Sakharkar' },
      { hid: 'copyright', name: 'copyright', content: 'VTrounce' },
      { hid: 'audience', name: 'audience', content: 'Everyone' },
      { hid: 'robots', name: 'robots', content: 'index, follow' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/Typewriter.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          // import whole set
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
        ],
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
