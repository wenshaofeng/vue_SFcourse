const path = require('path')

const resolve = dir => path.join(__dirname, dir)

// 定义BASE_URL常量，我们分两种情况，当前是在开发环境还是要打包编译
// 如果当前是开发环境（procution），那这种情况下我们的路径设置为了 /admin/ 如果不是，路径为 /
const BASE_URL = process.env.NODE_ENV === 'procution' ? '/admin/' : '/'
// 在上面一个 / (斜线) 代表你的项目是要指定在域名的根目录下，如果你的项目要指定在 iview-admin 下，那么你就需要这样写（'/admin/'）


module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  devServer: { // 跨域配置
    proxy: 'http://localhost:4000'
  }
}
