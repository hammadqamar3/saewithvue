// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  

module.exports = {
    configureWebpack: {
      externals: {
        Vue: "vue"
      },
      // plugins: [
      //   new BundleAnalyzerPlugin()
      //   ]
    }
  };