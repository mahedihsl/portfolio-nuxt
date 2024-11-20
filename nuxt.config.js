export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static", // Static site generation

  colorMode: {
    classSuffix: "",
  },

  // Global page headers
  head: {
    title: "Stoman Portfolio",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  // Global CSS
  css: ["~/assets/app.css"],

  // Plugins to run before rendering page
  plugins: [
    // "~/plugins/back-to-top.js"
  ],

  // Auto import components
  components: true,

  // Modules for dev and build (recommended)
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],

  // Modules
  modules: [],

  // Build Configuration
  build: {
    // Set the build directory to 'dist'
    publicPath: "/dist/", // Optional if you want to serve assets from a specific path
  },

  // Static site generation settings
  generate: {
    dir: "dist", // Set the output directory for the generated static files
  },
};
