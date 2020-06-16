const withPlugins = require('next-compose-plugins')
const withFonts = require('next-fonts')
const withImages = require('next-images')

const PATH = require('./path')

module.exports = withPlugins([withFonts, withImages], {
  target: 'serverless',
  webpack: (config) => {
    config.resolve.alias['@'] = PATH.source

    return config
  }
})
