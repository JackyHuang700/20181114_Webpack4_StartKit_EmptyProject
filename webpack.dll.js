const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const commonPath = 'wwwroot/vendor'
const commonName = '[name]_[hash]'
const { 
  modeDevelopment,
 } = require("./webpack.define.js")

// 獨立第三方套件，不再重複編譯
module.exports = {
  mode: modeDevelopment,
  entry: {
    vendor: [
      'lodash',
      '@babel/polyfill',
  ]
  },
  output: {
    path: path.resolve(__dirname, commonPath),
    filename: 'dll.[name].js',
    // 這兩個命名一定要一樣
    library: commonName
  },
  plugins: [
    new CleanWebpackPlugin([commonPath]),
    new webpack.DllPlugin({
      path: path.join(__dirname, commonPath, '[name].manifest.json'),
      // 這兩個命名一定要一樣
      name: commonName
    })
  ]
}

// 需要再專案內引用
// <script src="~/vendor/dll.vendor.js"></script>
