const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import 'ui/scss/index.scss';`,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}
