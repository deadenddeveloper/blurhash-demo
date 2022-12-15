import tailwindForms from '@tailwindcss/forms'

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
    '@vueuse/nuxt',
  ],

  tailwindcss: {
    // @ts-ignore
    config: {
      plugins: [tailwindForms],
    },
  }
})
