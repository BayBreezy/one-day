const title = "eTag UI";
const description =
  "This is how I would improve the UI for the eTag Topup website/app. It can be found here: https://atopup.h2k-jio.com/";
const url = process.env.PUBLIC_URL;

export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: { typedPages: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      title,
      titleTemplate: `%s | ${title}`,
      link: [{ rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },

      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js",
          defer: true,
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.min.js",
          defer: true,
        },
      ],
    },
  },

  site: {
    name: title,
    description,
    url,
    twitter: "@iAm_BayBreezy",
    defaultLocale: "en",
    identity: { type: "Person" },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@vee-validate/nuxt",
    "@morev/vue-transitions/nuxt",
    "nuxt-lenis",
    "nuxt-simple-robots",
    "nuxt-simple-sitemap",
    "@kevinmarrec/nuxt-pwa",
  ],

  pwa: {
    meta: {
      name: title,
      description,
      theme_color: "#f97015",
      lang: "en",
      author: "Behon Baker",
    },
    manifest: {
      name: title,
      short_name: title,
      description,
      theme_color: "#f97015",
      lang: "en",
    },
    icon: {
      fileName: "logo.svg",
    },
  },

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

  build: {
    transpile: ["vue-sonner"],
  },
});
