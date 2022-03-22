module.exports = {
  publicPath: './',
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  // devServer: {
  //   // 跨域
  //   proxy: {
  //     '^/api': {
  //       // 目标路径
  //       target: 'http://localhost:5000/',
  //       changeOrigin: true,
  //       ws:true,
  //       // 重写路径
  //       pathRewrite: {
  //         '^api': ''
  //       }
  //     }
  //   }
  // }
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000/',//接口的前缀
        ws:true,//代理websocked
        changeOrigin:true,//虚拟的站点需要更管origin
        pathRewrite:{
          '^/api':''//重写路径
        }
      }
    }
  }
};
