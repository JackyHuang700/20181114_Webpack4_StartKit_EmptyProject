module.exports = {
  commonInclude: /(ClientApp)/,
  commonExclude: /(node_modules|bower_components)/,
  modeProduction: 'production',
  modeDevelopment: 'development',
  devServerProxyTarget: 'https://localhost:44376/',
  devServerPort: 8080,
  expressDevServerPort: 3000,
  osCpusLength: require('os').cpus().length,
}
