<script setup>
import { RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
// import bootstrap from 'bootstrap'


// 爱番番
var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?53d9ec2801b8e0cbb675cb52807323ca";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

// 必应
(function(w,d,t,r,u)
    {
        var f,n,i;
        w[u]=w[u]||[],f=function()
        {
            var o={ti:"97136583", enableAutoSpaTracking: true};
            o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
        },
        n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function()
        {
            var s=this.readyState;
            s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)
        },
        i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)
    })(window,document,"script","//bat.bing.com/bat.js","uetq");


</script>


<template>
  <!-- 一级路由出口组件 -->
  <RouterView />
</template>
