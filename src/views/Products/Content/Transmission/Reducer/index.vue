<script setup>
import BreadNav from '../../components/ContentBreadNav.vue'
import Overview from '../../components/ContentOverview.vue'

// import SpecImg from '../../components/ContentSpecImg.vue'
import Info from './components/ContentInfo.vue'     // 介绍
import DrawImgs from './components/DrawImgs.vue'    // 图纸
import FormBottom from '../../../../components/FormBottom.vue'
import Downfile from '../../components/ContentDownfile.vue'
import Relate from '../../components/ContentRelate.vue'

import { watch, onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router"   // 引入路由

// 导入pinia
import { useContentStore } from '@/stores/content'

//使用pinia中的数据
const ContentStore = useContentStore()                // 实例化

const route = useRoute()    //调用路由


// 4.钩子生命周期函数
onMounted(() => {
    ContentStore.getProductDetail(route.params.id)
})


</script>

<template>
    <!-- 面包屑区域 -->
    <BreadNav />
    <!-- 产品主体 -->
    <div class="product-panel-detail">
        <Overview />

        <Info />
        <DrawImgs />

        <Downfile />
        
        <Relate />
        <FormBottom />
    </div>


</template>

<style scoped lang='scss'>
.product-panel-detail {
    width: 100vw;
    background-color: #fff;
    // padding-bottom: 30px;

}


@media (max-width: 960px) {
    
}

@media (max-width: 768px) {

}

@media (max-width: 575px) {

}

</style>