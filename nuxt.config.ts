// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Blurhash demo',
      meta: [{ name: 'description', content: 'Blurhash demo' }],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  modules: [
    '@nuxtjs/tailwindcss',
  ],
})
