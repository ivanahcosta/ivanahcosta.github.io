// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@hypernym/nuxt-gsap",
  ],
  googleFonts: {
    families: {
      "IBM+Plex+Sans": [500, 700],
    },
  },
  gsap: {
    composables: true,
    extraPlugins: {
      scrollTrigger: true,
    },
  },
  devtools: { enabled: false },
});
