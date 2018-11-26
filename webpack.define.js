module.exports = {
  commonInclude: /(ClientApp)/,
  commonExclude: /(node_modules|bower_components)/,
  modeProduction: 'production',
  modeDevelopment: 'development',
  devProxyPort: 44376,
  devServerProxyTarget: `http://localhost:${this.devProxyPort}/`,
  devServerPort: 8080,
  expressDevServerPort: 3000,
  osCpusLength: require('os').cpus().length,
}
