// export default ({router}) => {
//     /**
//      * 路由切换事件处理
//      */
//     router.beforeEach((to, from, next) => {
//         //触发百度的pv统计
//         if (typeof _hmt != "undefined") {
//             if (to.path) {
//                 _hmt.push(["_trackPageview", to.fullPath]);
//             }
//         }
//         // continue
//         next();
//     });
// };

// docs/.vuepress/enhanceApp.js
// 使用异步函数也是可以的
export default ({
                    Vue, // VuePress 正在使用的 Vue 构造函数
                    options, // 附加到根实例的一些选项
                    router, // 当前应用的路由实例
                    siteData, // 站点元数据
                    isServer, // 当前应用配置是处于 服务端渲染 或 客户端
                }) => {
    Vue.mixin({
        mounted() {
            // import('./components/hideArticle');

            // const container = document.querySelector('.theme-default-content');
            // if (!container) return;
            // container.setAttribute('id', 'container');
            //
            // window.btw = new BTWPlugin(); // 注意btw需要是个全局变量,把const去掉
            // window.btw.init({
            //     id: 'container',
            //     blogId: '25333-1652006180841-612',
            //     name: '拓跋阿秀',
            //     qrcode: 'https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205081835500.png',
            //     keyword: '验证码',
            // });

            // const container = document.querySelector('.theme-default-content');
            // if (container) {
            //     container.setAttribute('id', 'container');
            // };
            //
            //
            // // const container2 = document.querySelector('.content__default');
            // // if (container2) {
            // //     container2.setAttribute('id', 'container');
            // // }
            //
            //
            // window.btw = new BTWPlugin(); // 注意btw需要是个全局变量,把const去掉
            // window.btw.init({
            //     id: 'container',
            //     blogId: '25333-1652006180841-612',
            //     name: '拓跋阿秀',
            //     qrcode: 'https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205081835500.png',
            //     keyword: '验证码',
            // });


        },

        watch: {
            $route (to, from) {
                if (from.path !== to.path && this.hideCondition(to.path.toString())) {

                    const container = document.querySelector('.theme-default-content');
                    if (container) {
                        container.setAttribute('id', 'container');
                        // 显示40%内容
                        container.style.height='30%'
                    }

                    window.btw = new BTWPlugin(); // 注意btw需要是个全局变量,把const去掉
                    window.btw.init({
                        id: 'container',
                        blogId: '25333-1652006180841-612',
                        name: '拓跋阿秀',
                        qrcode: 'https://axiu-image-bed.oss-cn-shanghai.aliyuncs.com/img/202205081835500.png',
                        keyword: '验证码',
                    });
                }
            }
        },
        methods: {
            hideCondition(toUrl) {
                return toUrl.startsWith("/notes/03-hunting_job/")
            }
        }
    });
    /**
     * 路由切换事件处理
     */
    router.beforeEach((to, from, next) => {
        //触发百度的pv统计
        if (typeof _hmt != "undefined") {
            if (to.path) {
                _hmt.push(["_trackPageview", to.fullPath]);
            }
        }
        // continue
        next();
    });
};
