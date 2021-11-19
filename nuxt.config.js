export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Amedia_client",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@/assets/style/style.scss"],
    styleResources: {
        scss: ["@/assets/style/*.scss"],
    },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{ src: "@/plugins/vue-slick-carousel.js", ssr: false },
    "@/plugins/vuelidate.js",
  ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
    fontawesome: {
        component: "fa",
        icons: {
            solid: true,
            brands: true,
        },
    },
    i18n: {
        locales: [{
                code: "uz",
                file: "uz.js",
            },
            {
                code: "ru",
                file: "ru.js",
            },
        ],
        lazy: true,
        langDir: "lang/",
        strategy: "prefix_except_default",
        defaultLocale: "ru",
    },
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: ["@nuxtjs/fontawesome"],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        // https://go.nuxtjs.dev/pwa
        "@nuxtjs/pwa",
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: "en",
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};