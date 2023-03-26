
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes:'57x57', type: 'image/x-icon', href: '/images/favicon/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes:'60x60', type: 'image/x-icon', href: '/images/favicon/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes:'72x72', type: 'image/x-icon', href: '/images/favicon/apple-icon-72x72.png' },
      { rel: 'icon', sizes:'32x32', type: 'image/png', href: '/images/favicon/favicon-32x32.png' },
      { rel: 'icon', sizes:'16x16', type: 'image/png', href: '/images/favicon/favicon-16x16.png' },
      { rel: "stylesheet", href: "/css/bootstrap.min.css" },
      { rel: "stylesheet", href: "/css/animate.css" },
      { rel: "stylesheet", href: "/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "/fonts/spartan-mb/stylesheet.css" },
      { rel: "stylesheet", href: "/plugins/lums-icon/style.css" },
      { rel: "stylesheet", href: "/plugins/mediabox/mediabox.min.css" },
      { rel: "stylesheet", href: "/plugins/mediabox/mediabox.min.css" },
      { rel: "stylesheet", href: "/css/style.css" },
      { rel: "stylesheet", href: "/css/responsive.css" }
    ],

    script: [
      { src: "/assets/plugins/mediabox/mediabox.min.js", body: true },
      { src: "/assets/plugins/accordion/accordion.min.js", body: true },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#a461e5', height: '4px' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
