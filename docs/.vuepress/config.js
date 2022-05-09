const plugins = require('./configs/plugin'); // 导入插件配置,自定义隐藏文章等
const head = require('./configs/head'); // 导入head配置,需要引入的html中head标签
const themeConfig = require('./configs/themeConfig'); // 导入head配置,需要引入的html中head标签

module.exports = {
    port: "8080",
    dest: "site",
    base: "/",

    // 是否开启默认预加载js
    shouldPrefetch: (file, type) => {
        return false;
    },
    // webpack 配置 https://vuepress.vuejs.org/zh/config/#chainwebpack
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            const dateTime = new Date().getTime();

            // 清除js版本号
            config.output.filename('assets/js/cg-[name].js?v=' + dateTime).end();
            config.output.chunkFilename('assets/js/cg-[name].js?v=' + dateTime).end();

            // 清除css版本号
            config.plugin('mini-css-extract-plugin').use(require('mini-css-extract-plugin'), [{
                filename: 'assets/css/[name].css?v=' + dateTime,
                chunkFilename: 'assets/css/[name].css?v=' + dateTime
            }]).end();

        }
    },
    markdown: {
        lineNumbers: true,
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        }
    },
    locales: {
        "/": {
            lang: "zh-CN",
            title: "阿秀的学习笔记",
            description: "这是阿秀从学校->职场多年计算机自学过程的记录型网站，包括但不限计算机基础知识（操作系统、计算机网络、数据结构与算法、数据库）、前端后端、校招&社招、互联网一线大厂中的工作体验等总结，坚持学习，持续成长！"
        }
    },
    head: head,
    plugins: plugins,
    themeConfig: themeConfig,
};


