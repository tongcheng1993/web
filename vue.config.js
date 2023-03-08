module.exports = {
    productionSourceMap:false,
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'vuex': 'Vuex',
            'vue-router': 'VueRouter',
            'axios': 'axios',
            'element-ui':'ELEMENT',
            'nprogress': 'NProgress',
            'wangeditor': 'wangEditor',
            'vue-baidu-map': 'VueBaiduMap',
            "sockjs-client": "SockJS",
            "stompjs": "Stomp",
            "phaser": "Phaser",
            'echarts': 'echarts',
        },
    },
    devServer:{
        // 设置主机地址
        host: 'localhost',
        // 设置默认端口
        port: 9992,
        // 设置代理
        proxy: {
            '/api': {
                // 目标 API 地址
                // 开发环境
                target: 'http://192.168.84.150:9092/',
                // 如果要代理 webSockets
                ws: true,
                // 设置跨域
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        disableHostCheck: true
    },
}