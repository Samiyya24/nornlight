// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "vue3-carousel-nuxt"],
  carousel: {
    prefix: "MyPrefix",
  },
  devtools: { enabled: false },
});
