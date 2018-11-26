const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const {
  devProxyPort
} = require('../webpack.define.js')

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/posts', (req, res) => {
  res.jsonp(req.query)
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {

  res.header('X-Hello', 'World')

  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }

  if (false) {
    if (isAuthorized(req)) {
      // add your authorization logic here
      next() // continue to JSON Server router
    } else {
      res.sendStatus(401)
    }
  }

  // Continue to JSON Server router
  next()
})

// add rewrite rules
// Add this before server.use(router)
server.use(jsonServer.rewriter({
  "/api/": "/",
  "/api/posts": "/posts",
  "/api/posts/:id": "/posts/:id"
}))

// Use default router
server.use(router)
server.listen(devProxyPort, () => {
  console.log('JSON Server is running')
})

// "jsonServer": "json-server --watch ./JsonServer/db.json --middlewares ./JsonServer/index.js --config ./JsonServer/json-server.json"
