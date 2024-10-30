<script setup>
import BreadNav from './componentsScrew/ContentBreadNav.vue'
import Overview from './componentsScrew/ContentOverview.vue'
import Structure from './componentsScrew/ContentStructure.vue'
import SpecNumScrew from './componentsScrew/ContentSpecNumScrew.vue'
import SpecTxt from './componentsScrew/ContentSpecTxt.vue'
import Draw from './componentsScrew/ContentDraw.vue'
import Curve from './componentsScrew/ContentCurve.vue'
import CableConnection from './componentsScrew/ContentConnection.vue'
import Downfile from './componentsScrew/ContentDownfile.vue'
import Relate from './componentsScrew/ContentRelate.vue'
import FormBottom from '../../../components/FormBottom.vue'
import { watch, onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router"   // 引入路由

// 导入pinia
import { useContentStore } from '@/stores/content'

//使用pinia中的数据
const ContentStore = useContentStore()                // 实例化

const route = useRoute()    //调用路由


// 4.钩子生命周期函数
onMounted(() => {
    ContentStore.getProductScrewDetail(route.params.id)
})


</script>

<template>
    <!-- 面包屑区域 -->
    <BreadNav />
    <!-- 产品主体 -->
    <div class="product-panel-detail">
        <Overview />
        <Structure />
        <SpecNumScrew />
        <SpecTxt />
        <Draw />
        <Curve />
        <CableConnection />
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