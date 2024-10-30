<script setup>
import HomeBanner from './banner/index.vue'
import HomeNews from './news/index.vue'
import HomeProduct from './product/index.vue'
import HomeSolution from './solution/index.vue'
import HomeForm from './Form/index.vue'

import { computed, onMounted, defineProps, ref, watch } from 'vue'
import { useRoute, onBeforeRouteUpdate } from "vue-router"   // 引入路由

//导航守卫：路由参数变化接口重新发送
onBeforeRouteUpdate((to) => {
    console.log('变化了')
    console.log(to);
    // getProductList(to.params.id)
})
</script>

<template>

    <HomeBanner />
      <!-- <RouterView :key="$route.fullPath" /> -->
    <HomeProduct />

    <HomeSolution />

    <HomeNews />

    <HomeForm />
<!-- 测试插槽面板 -->
<!-- <HomePanel title="产品推荐" subTitle="">

</HomePanel> -->

</template>


<style scoped lang='scss'>
.container {
    // position: relative;
    margin: 0 auto;
    max-width: 100%;
    // height: 650PX;
//   width: 1240px;



}
</style>