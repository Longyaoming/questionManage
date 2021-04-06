module.exports = {
    publicPath: './', // 基本路径
    outputDir: 'dist', // 输出文件目录
    assetsDir: 'static',


    // 反向代理
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
        // 配置跨域
        '/api': {
            target: 'https://vuets-api.herokuapp.com/api/',
            ws: true,
            changOrigin: true,
            pathRewrite: {
            '^/api': ''
            }
        }
        },
        before: app => {}
    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {// 为生产环境修改配置...
          config.mode = 'production';
          config["performance"] = {//打包文件大小配置
            "maxEntrypointSize": 10000000,
            "maxAssetSize": 30000000
          }
        }
      }
}