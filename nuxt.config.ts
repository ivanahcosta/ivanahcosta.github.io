// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-icon",
    "@hypernym/nuxt-gsap",
  ],
  colorMode: {
    preference: "dark",
    classPrefix: "",
    classSuffix: "",
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 700], 
    },
  },
  image: {
    dir: "public/images",
  },
  gsap: {
    composables: true,
    extraPlugins: {
      scrollTrigger: true,
    },
  },
  css: ["~/assets/css/main.css"],
  devtools: { enabled: false },
});
