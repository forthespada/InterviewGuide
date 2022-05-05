<template>
  <section style="border-top: 2px solid #eaecef;padding-top:1rem;margin-top:2rem;">
    <div>
<!--      todo 暂时隐去阅读量-->
<!--      &lt;!&ndash; id 将作为查询条件 &ndash;&gt;-->
<!--      <span class="leancloud-visitors"-->
<!--            data-flag-title="Your Article Title">-->
<!--        <em class="post-meta-item-text">阅读:</em>-->
<!--        <i class="leancloud-visitors-count"></i>-->
<!--      </span>-->
    </div>
<!--    <h3>-->
<!--      <a href="javascript:;"></a>-->
<!--      评 论：-->
<!--    </h3>-->
    <div id="vcomments"></div>
  </section>
</template>

<script>
export default {
  name: 'Valine',
  // mounted: function () {
  //   // require window
  //   const Valine = require('valine');
  //   if (typeof window !== 'undefined') {
  //     document.getElementsByClassName('leancloud-visitors')[0].id
  //         = window.location.pathname
  //     this.window = window
  //     window.AV = require('leancloud-storage')
  //   }
  //
  //   new Valine({
  //     el: '#vcomments',
  //     appId: 'nNMH3kaQtRtp4A0IG0WG2WaL-gzGzoHsz',// your appId
  //     appKey: 'Bl2VxN04wqG4lqhGOuhs8TsV', // your appKey
  //     notify: false,
  //     verify: false,
  //     path: window.location.pathname,
  //     visitor: true,
  //     avatar: 'mm',
  //     placeholder: '欢迎留言与我分享您的想法...',
  //   });
  // },
  data() {
    return {
      avatarList: [
          "",
          "mp",
          "identicon",
          "monsterid",
          "wavatar",
          "retro",
          "robohash",
          "hide"
      ]
    }
  },
  mounted: function () {
    // require window
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
    }
    this.valine = new Valine()
    this.initValine()
  },
  watch: {
    $route (to, from) {
      if (from.path !== to.path) {
        this.initValine()
      }
    }
  },
  methods: {
    initValine () {
        // const Valine = require('valine');
        // if (typeof window !== 'undefined') {
        //   document.getElementsByClassName('leancloud-visitors')[0].id
        //       = window.location.pathname
        //   this.window = window
        //   window.AV = require('leancloud-storage')
        // }

      // vuepress打包后变成的HTML不知为什么吞掉此处的绑定`:id="countId"`
      let avatar = this.avatarList[Math.round(Math.random()* this.avatarList.length)]
      console.log(">>document.getElementsByClassName('leancloud-visitors')", document.getElementsByClassName('leancloud-visitors'))
      document.getElementsByClassName('leancloud-visitors')[0].id = location.origin + location.pathname
      this.valine.init({
            el: '#vcomments',
            appId: 'nNMH3kaQtRtp4A0IG0WG2WaL-gzGzoHsz',// your appId
            appKey: 'Bl2VxN04wqG4lqhGOuhs8TsV', // your appKey
            notify: false,
            verify: false,
            path: window.location.pathname,
            visitor: true,
            avatar: avatar,
            placeholder: '日拱一卒，功不唐捐...'
                // '欢迎留言与我分享您的想法...',
      });
    },

  }
}
</script>
