const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭语法检查
  //开启代理服务器(方式一)
  /* devServer: {
    proxy: 'http://localhost:5000'
  } */
  //开启代理服务器(方式二)
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/api':''},//在5000服务器上把代理服务器传给的/api替换为空，确保路径正确
        ws: true, //用于支持websocket
        changeOrigin: true
      },
      
    }
  }
})