import Constants from './data/Constants'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'The Abyss',
    titleTemplate: '%s - Neko Of The Abyss',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          Constants.description,
      },
      { hid: 'theme-color', name: 'theme-color', content: Constants.Theme },

      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'discord rpg, lala, nodejs, web designer, web developer, nett, kuroneko, discord, kurosama, kuro-sama, kuro neko, kuroneko sama, kuroneko-sama, discord bot, neko of the abyss',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./assets/transition.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  generate: {
    fallback: true,
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      sizes: [16, 32, 64, 120, 144, 152, 192, 384, 512],
    },
    manifest: {
      lang: 'en',
      name: Constants.Name,
      short_name: 'NOTA',
      description: Constants.Description,
      background_color: Constants.Background,
      theme_color: Constants.Theme,
    },
    meta: {
      lang: 'en',
      name: Constants.Name,
      short_name: 'NOTA',
      description: Constants.Description,
      background_color: Constants.Background,
      theme_color: Constants.Theme,
      appleStatusBarStyle: 'black',
      author: Constants.Author,
      twitterCard: 'summary_large_image',
      twitterAuthor: '@retraigo',
      twitterSite: '@nekoofdaabyss',
      ogHost: 'https://nekooftheabyss.xyz',
      ogUrl: 'https://nekooftheabyss.xyz',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
