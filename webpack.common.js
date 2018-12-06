const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// happypack
const HappyPack = require('happypack')
const {
  osCpusLength,
  commonInclude,
  commonExclude,
  // devServer 用這個
  devServerPort,
  // expressDevServer 用這個
  expressDevServerPort
} = require('./webpack.define.js')

// console.log(`aaaaaaaaaaaaaaaaaa: ${process.env.NODE_ENV}`)

module.exports = {
  entry: {
    index: './ClientApp/js/index.js',
    index2: './ClientApp/js/index2.js'
    // index3: './ClientApp/js/index.ts'
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'wwwroot/webpackTest'),
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [commonInclude],
        exclude: [commonExclude],
        use: {
          loader: 'happypack/loader?id=babelJs'
          // options: {
          // presets: ['@babel/preset-env']
          // }
        }
      },
      // 注意2：虽然html-webpack-plugin会默认解析ejs语法，但我测试的时候无法解析导入的侧栏、头部、底部的模板
      {
        test: /\.ejs$/,
        use: 'ejs-compiled-loader'
      },
      {
        // 使用 ts-loader 时，设置 happyPackMode: true / transpileOnly: true
        test: /\.tsx?$/,
        include: [commonInclude],
        exclude: [commonExclude],
        use: ['ts-loader']
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        include: [commonInclude],
        exclude: [commonExclude],
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: [commonInclude],
        exclude: [commonExclude],
        use: ['file-loader']
      },
      {
        test: /\.(csv|tsv)$/,
        include: [commonInclude],
        exclude: [commonExclude],
        use: ['csv-loader']
      },

      {
        test: /\.xml$/,
        include: [commonInclude],
        exclude: [commonExclude],
        use: ['xml-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['wwwroot/webpackTest']),
    new HappyPack({
      id: 'babelJs',
      threadPool: HappyPack.ThreadPool({ size: osCpusLength }),
      loaders: [
        {
          loader: 'babel-loader',
          query: {
            // optional: 'runtime',
            cacheDirectory: true
          }
          // options: {
          //   presets: ['@babel/preset-env']
          // }
        }
      ]
    }),
    // new HtmlWebpackPlugin({
    //   inject: false,
    //   template: path.resolve(__dirname, 'ClientApp/indexTemplate.html'),
    //   filename: path.resolve(__dirname, 'index.html'),
    //   chunks: ['index'],
    //   // 跳過那些模塊
    //   // excludeChunks: [],
    //   HtmlWebpackPluginOverride: true,
    //   // hash:true,//防止缓存
    //   outputFile: {
    //     vendor: 'wwwroot/vendor/dll.vendor.js',
    //     isProd: false,
    //     port: devServerPort
    //   },
    //   minify: true,
    //   // 啟用手動排序
    //   chunksSortMode: 'manual',
    //   // 跟著HtmlWebpackHarddiskPlugin套件
    //   alwaysWriteToDisk: true
    // }),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'ClientApp/ejs/index_2/index_2.ejs'),
    //   filename: path.resolve(__dirname, 'index_2.html'),
    //   chunks: ['index'],
    //   HtmlWebpackPluginOverride: true,
    //   // hash:true,//防止缓存
    //   outputFile: {
    //     vendor: 'wwwroot/vendor/dll.vendor.js',
    //     isProd: false,
    //     port: devServerPort
    //   },
    //   minify: true,
    //   // 啟用手動排序
    //   chunksSortMode: 'manual',
    //   // 跟著HtmlWebpackHarddiskPlugin套件
    //   alwaysWriteToDisk: true
    // }),
    // //強制"HtmlWebpackPlugin"進行編譯成實體檔案
    // new HtmlWebpackHarddiskPlugin(),
    new webpack.DllReferencePlugin({
      manifest: require('./wwwroot/vendor/vendor.manifest.json')
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, `ClientApp/cpoyVendor/aa/testa.js`),
        to: path.resolve(__dirname, `wwwroot/cpoyVendor`),
        toType: 'dir'
      },
      {
        from: path.resolve(__dirname, `ClientApp/cpoyVendor/bb/testb.js`),
        to: path.resolve(__dirname, `wwwroot/cpoyVendor`),
        toType: 'dir'
      },
      {
        from: path.resolve(__dirname, `ClientApp/cpoyVendor/`),
        to: path.resolve(__dirname, `wwwroot/cpoyVendor/cpoyVendorTwo`),
        toType: 'dir'
      }
    ])
    // new webpack.ProvidePlugin({
    //   _: 'lodash' //所有页面都会引入 _ 这个变量，不用再import引入
    //   $: "jquery",
    //   jQuery: "jquery"
    // })
  ],
  stats: {
    // `webpack --colors` 等同于
    colors: true
  }
}
