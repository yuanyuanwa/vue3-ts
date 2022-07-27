const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const apiMocker = require('webpack-api-mocker')

module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false,
	devServer: {
    port: 8887,
    proxy: {
      '/testApi': {
        target: 'https://service-36x18f42-1253747424.gz.apigw.tencentcs.com/',
        pathRewrite: {
          '^/testApi': ''
        },
				logLevel:'debug',
        changeOrigin: true
      }
    }
  }
})
