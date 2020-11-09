const baseConfig = require('./webpack.config.base')
const webpack = require('webpack')

module.exports = {
  ...baseConfig,
  devServer: {
    hot: true,
    watchContentBase: false,
    host: '0.0.0.0',
    port: 8080,
  },
  devtool: 'eval-source-map',
  plugins: [...baseConfig.plugins, new webpack.HotModuleReplacementPlugin()],
}
