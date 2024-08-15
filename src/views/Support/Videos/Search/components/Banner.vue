<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { getProductSKUListAPI } from "@/apis/product"
import { onMounted, ref } from "vue"
import { useRoute, onBeforeRouteUpdate } from "vue-router"   // 引入路由
import { useCategoryStore } from '@/stores/catagory'         // 使用pinia中产品导航列表

//使用pinia中的数据
const categoryStore = useCategoryStore()

//1.获取数据
const SKUList = ref([])             //产品数据列表
const SelfData = ref({})                // 本身数据
const bannerList = ref([])      //banner数据列表
const route = useRoute()                //调用路由
const getProductSKUList = async(id = route.params.id) => {
    const res = await getProductSKUListAPI(id)
    SelfData.value = res.category[0]
    SKUList.value = res.data                // 产品列表数据
    dealData()
}

//2.数据处理
const dealData = () => {
    // 1.banner 
    bannerList.value = SKUList.value.map((item) => {
        return {"id": item.id, "banner": item.banner}
    })
    // console.log(bannerList.value)
}


//3.banner自适应高度

const imgheight = ref(650)  //banner高度 `height:${imgheight}px` style="height: 650px"
// const height = imgheight.value + "px"
const heightbox = ref()

const onResize=()=> {
  imgheight.value = window.innerWidth * 1287 / 3800
  heightbox.value = `${imgheight.value}px`

}


//4.钩子函数
//导航守卫：路由参数变化接口重新发送
onBeforeRouteUpdate((to) => {
    // console.log('变化了')
    getProductSKUList(to.params.id)
})

onMounted(() => {
  onResize()
  //监听窗口变化
  window.onresize = () => {
    // console.log(screenWidth.value)
    window.addEventListener("resize", onResize)
  }
})

onMounted(() => getProductSKUList())
</script>

<template>
    <!-- banner区域 -->
    <div class="Product-panel-banner" v-if="bannerList">
        <el-carousel height="auto;" >
        <el-carousel-item v-for="item in bannerList" :key="item.id" >
            <div :style="`background-image: url(${item.banner})`" class="imgbox"></div>
        </el-carousel-item>
        </el-carousel>
    </div>

    <div class="banner-pro">
        <div class="">
            <img src="@/assets/uploads/banner1.png" alt="">
        </div>
    </div>    

</template>

<style scoped lang='scss'>
// banner
.Product-panel-banner {
  width: 100vw;
  ::v-deep(.el-carousel__container) {
    height: v-bind(heightbox) ;

    .imgbox {
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: 100% 120%;
      background-repeat: no-repeat;
      
    }
  }
}

@media (max-width: 1200px) {


}

@media (max-width: 960px) {


}

@media (max-width: 768px) {

}

</style>