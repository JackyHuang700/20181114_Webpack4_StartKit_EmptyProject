const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const DashboardPlugin = require('webpack-dashboard/plugin')
// 專門給 webpack-hot-middleware 用的
const webpackhotMiddleware = 'webpack-hot-middleware/client?reload=true'
const {
  commonInclude,
  commonExclude,
  modeDevelopment,
  devServerPort,
  devServerProxyTarget,
  htmlWebpackPluginSetting
} = require('./webpack.define.js')

module.exports = merge(common, {
  // 模式
  mode: modeDevelopment,
  cache: true,
  entry: getNewCommonEntry(common),
  output: {
    filename: '[name].bundle.js'
  },
  // 给定一个创建后超过 250kb 的资源， webpack 抛出一个错误或警告
  performance: {
    // hints: 'error'
    // hints: 'warning'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [commonInclude],
        exclude: [commonExclude],
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
        }, {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
        }, {
            loader: "sass-loader" // 将 Sass 编译成 CSS
        }]
      }
    ]
  },
  plugins: [
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // 當程式碼有錯誤時，不更新畫面，如果錯誤被修正才會hot reload
    // 這個可以選擇使用。
    // new webpack.NoErrorsPlugin()
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(modeDevelopment)
    }),
    // 这个插件的作用是在热加载时直接返回更新文件名，而不是文件的id。
    new webpack.NamedModulesPlugin(),
  ].concat(htmlWebpackPluginSetting(devServerPort)),
  // devtool: 'inline-source-map',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    // -- contentBase --
    // contentBase: [
    //   path.join(__dirname, "wwwroot")
    // ], //静态文件根目录
    // contentBase 這個要了解，要再加上
    // contentBase: [path.join(__dirname, 'wwwroot')],
    // contentBase: path.resolve(__dirname, 'wwwroot'),
    // contentBase: '/wwwroot/',
    // contentBase: '/wwwroot/webpackTest/',
    //  -- contentBase --
    // publicPath
    // publicPath: '/wwwroot/',
    // publicPath: '/wwwroot/webpackTest/',
    publicPath: common.output.publicPath,
    // proxy: {
    //   '*': {
    //     target: devServerProxyTarget,
    //     secure: false
    //   }
    // },
    // 当出现编译器错误或警告时，在浏览器中显示全屏覆盖层。默认禁用。如果你想要只显示编译器错误
    overlay: {
      warnings: true,
      errors: true
    },
    port: devServerPort,
    inline: true,
    hot: true,
    // 啟動熱替換
    hotOnly: true,
    open: true,
    host: 'localhost',
    // 服务器返回浏览器的时候是否启动gzip压缩
    compress: false, 
    // index: 'index.html'
    // openPage: '/different/page',
    // 告知服务器，观察 devServer.contentBase 下的文件。文件修改后，会触发一次完整的页面重载
    watchContentBase: true,
  },
  watch: true, // 开启监听文件更改，自动刷新
  watchOptions: {
      ignored: ['node_modules'], //忽略不用监听变更的目录
      aggregateTimeout: 500, //防止重复保存频繁重新编译,500毫米内重复保存不打包
      poll:1000 //每秒询问的文件变更的次数
  }
})

// 添加HMR伺服器
function getNewCommonEntry(common) {
  const { entry } = common
  const commonEntry = JSON.parse(JSON.stringify(entry))
  let newCommonEntry = {}
  for (let key in commonEntry) {
    let value = commonEntry[key]
    newCommonEntry[key] = [webpackhotMiddleware, value]
  }

  return newCommonEntry
}
