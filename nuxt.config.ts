// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/supabase", "@pinia/nuxt"],
  css: ["~/assets/styles/index.scss"],
  supabase: {
    redirect: false,
  },
});
