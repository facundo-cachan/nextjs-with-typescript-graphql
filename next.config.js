const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const config = {
  reactStrictMode: true,
  compress: true,
  env: {
    GOOGLE_CLIENT_ID: '',
    GOOGLE_CLIENT_SECRET: '',
    FACEBOOK_CLIENT_ID: '',
    FACEBOOK_CLIENT_SECRET: '',
  },
  eslint: {
    dirs: ['pages', 'component', 'utils'],
  },
  images: {
    disableStaticImages: true,
    domains: [String(process.env.NEXT_PUBLIC_URL)],
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      use: [options.defaultLoaders.babel, { loader: 'graphql-let/loader' }],
    })

    config.module.rules.push({
      test: /\.graphqls$/,
      exclude: /node_modules/,
      use: ['graphql-let/schema/loader'],
    })

    config.module.rules.push({
      test: /\.ya?ml$/,
      type: 'json',
      use: 'yaml-loader',
    })

    return config
  },
}

if (process.env.NODE_ENV === 'production') {
  module.exports = withPWA({
    pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true,
      runtimeCaching,
      disable: false,
    },
    ...config,
  })
} else {
  module.exports = module.exports = withBundleAnalyzer(config)
}
