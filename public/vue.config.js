module.exports = {
    //配置跨域
    proxy: {
        '/api': {
            target: 'https://vuets-api.herokuapp.com/api/',
            changeOrigin: true,
            pathRewrite: {
                '/api': ''
            }
        }
    }
}