const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const {
  osCpusLength,
  commonInclude,
  commonExclude,
  modeProduction,
} = require('./webpack.define.js')
const common = require('./webpack.common.js')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
// 请只在生产环境下使用 CSS 提取，这将便于你在开发环境下进行热重载。
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

// console.log(`bbbbbbbbbbbb: ${process.env.NODE_ENV}`)

module.exports = merge(common, {
  // 模式
  mode: modeProduction,
  output: {
    filename: '[name].bundle.[hash:8].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [commonInclude],
        exclude: [commonExclude],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')("last 100 versions") /*在这里添加*/]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(modeProduction)
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      parallel: osCpusLength - 1,
      cache: true,
      // include: /\/includes/,
      // exclude: /\/excludes/,
      uglifyOptions: {
        ie8: true,
        compress: {
          drop_console: true, // 删除所有的 `console` 语句，可以兼容ie浏览器
          reduce_vars: true // 提取出出现多次但是没有定义成变量去引用的静态值
        }
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      // filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    }),
    // 用于优化css文件
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessorOptions: {
        // 避免 cssnano 重新计算 z-index
        safe: true,
        // cssnano 集成了autoprefixer的功能
        // 会使用到autoprefixer进行无关前缀的清理
        // 关闭autoprefixer功能
        // 使用postcss的autoprefixer功能
        // autoprefixer: { disable: true }, // 这里是个大坑，稍后会提到
        mergeLonghand: false,
        discardComments: {
          removeAll: true // 移除注释
        }
      },
      canPrint: true
    }),
    // 提升作用域，加快code在瀏覽器的速度
    new webpack.optimize.ModuleConcatenationPlugin(),
    // 在编译出现错误时，使用 NoEmitOnErrorsPlugin 来跳过输出阶段。这样可以确保输出资源不会包含错误。对于所有资源，统计资料(stat)的 emitted 标识都是 false
    new webpack.NoEmitOnErrorsPlugin()
  ]
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       // sourceMap: true,
  //       // parallel: os.cpus().length  - 1,
  //       // cache: true
  //     })
  //   ]
  // }
})
