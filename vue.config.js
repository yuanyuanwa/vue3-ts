const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	lintOnSave: false,
	devServer: {
    port: 8887,
    proxy: {
      '/test': {
        target: 'https://service-36x18f42-1253747424.gz.apigw.tencentcs.com/',
        pathRewrite: {
          '^/test': ''
        },
				logLevel:'debug',
        changeOrigin: true
      }
    }
  }
})
