// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@vee-validate/nuxt",
    "@morev/vue-transitions/nuxt",
    "@nuxtjs/i18n",
    "@nuxtseo/module",
  ],

  tailwindcss: { exposeConfig: true },

  colorMode: { classSuffix: "" },

  typescript: { shim: false },

  imports: {
    imports: [
      {
        from: "tailwind-variants",
        name: "tv",
      },
      {
        from: "tailwind-variants",
        name: "VariantProps",
        type: true,
      },
      {
        from: "vue-sonner",
        name: "toast",
        as: "useSonner",
      },
    ],
  },

  build: { transpile: ["vue-sonner"] },

  i18n: {
    defaultLocale: "en",
    baseUrl: process.env.PUBLIC_URL || "http://localhost:3000",
    locales: [
      { code: "en", name: "English", iso: "en-US" },
      { code: "fr", name: "Français", iso: "fr-FR" },
    ],
    strategy: "prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
  },
  site: {
    url: process.env.PUBLIC_URL || "http://localhost:3000",
    name: "Settings Dashboard",
    description:
      "Another UI added to the One Day collection. This time, it's a settings dashboard.",
    defaultLocale: "en",
    identity: {
      type: "Person",
    },
    twitter: "@iAm_BayBreezy",
  },
});
