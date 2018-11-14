const express = require('express')
const proxy = require('http-proxy-middleware')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const DashboardPlugin = require('webpack-dashboard/plugin')
const { 
  devServerProxyTarget,
  expressDevServerPort,
 } = require("./webpack.define.js")
const app = express()
const config = require('./webpack.dev.js')
const compiler = webpack(config)

compiler.apply(new DashboardPlugin())

app.use(express.static(__dirname + '/wwwroot/'))

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  // 複寫 webpack 設定
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    // 控制台不显示信息（只有警告和错误）默认：false
    // noInfo: true,
    stats: {
      colors: true
    },
    // 当出现编译器错误或警告时，在浏览器中显示全屏覆盖层。默认禁用。如果你想要只显示编译器错误
    overlay: { 
      warnings: true, 
      errors: true 
     }, 
  })
)

app.use(webpackHotMiddleware(compiler, {
  // path: "/__webpack_hmr",
}))

// app.use(
//   '/',
//   proxy({
//     target: devServerProxyTarget,
//     secure: false
//   })
// )

// Serve the files on port 3000.
app.listen(expressDevServerPort, err => {
  if (err) {
    console.error(error)
  } else {
    console.info(
      '==> ?  Listening on port %s. Open up http://localhost:%s/ in your browser.',
      expressDevServerPort,
      expressDevServerPort
    )
  }
  // console.log('Example app listening on port 3000!\n')
})


