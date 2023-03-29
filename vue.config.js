const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const apiMocker = require('webpack-api-mocker')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('i18n', resolve('vue-i18n/dist/vue-i18n.cjs.js'))
  },
  devServer: {
    port: 8887,
    proxy: {
      '/testApi': {
        target: 'https://service-36x18f42-1253747424.gz.apigw.tencentcs.com/',
        pathRewrite: {
          '^/testApi': ''
        },
        logLevel: 'debug',
        changeOrigin: true
      },
      '/localApi': {
        target: 'http://localhost:3001/',
        pathRewrite: {
          '^/localApi': ''
        },
        logLevel: 'debug',
        changeOrigin: true
      }
    }
  }
})
