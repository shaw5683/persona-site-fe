module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'fe',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['@nuxtjs/axios', 'element-ui'],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: [{
    src: '@plugins/element-ui'
  }, {
    src: '@plugins/axios'
  }],
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'reset-css/reset.css',
    '@assets/style/common.css'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    proxy: true,
    retry: {
      retries: 3
    }
  },
  proxy: {
    '/api': {
      target: 'http://localhost:3001',
      pathRewrite: {
        '^/api': '/'
      }
    }
  }
};
