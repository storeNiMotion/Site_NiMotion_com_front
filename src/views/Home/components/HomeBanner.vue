<script setup>
import { getBannerAPI } from '@/apis/home'
import { onMounted, onBeforeUnmount, ref } from 'vue'

const bannerList = ref([])  //数据列表

// 1.获取数据
const getBanner = async() => {
    const res = await getBannerAPI()
    bannerList.value = res.data
    // heightbox.value = `${screenWidth.value * 1287 / 3800}px`
}

// 2.自适应高度
const screenWidth = ref(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)
const heightbox = ref(screenWidth.value * 1287 / 3800)
const imgheight = ref(650)  //banner高度 `height:${imgheight}px` style="height: 650px"
// const height = imgheight.value + "px"

const imgScale = ref('scale(1)')
const dataScreenRef = ref(null)


const getScale = () => {
  let ww = 1900 / window.innerWidth
  let wt = 1200 / window.innerWidth
  // let wh = window.innerHeight / h;
  if (window.innerWidth < 768) {
    return wt
  } else if (window.innerWidth < 1920) {
    return ww
  } else {
    return 1
  }
  // return window.innerWidth < 1920 ? ww : 1
}
// console.log(getScale())

// 3.监听窗口变化
const onResize=()=> {
  screenWidth.value = window.innerWidth
  heightbox.value = `${screenWidth.value * 1287 / 3800}px`
  if (window.innerWidth < 1920) {
    imgScale.value = `scale(${Math.sqrt(getScale())}) `
  }
}


onMounted(() => {
  onResize()
  //监听窗口变化
  // console.log(dataScreenRef.value);
  window.addEventListener("resize", onResize)

})
onMounted(()=>getBanner())


onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
});


</script>

<template>
  <div class="home-banner" ref="dataScreenRef">
    <el-carousel :height="heightbox" interval="500000" trigger="click" indicator-position="outside" loop="false">
      <el-carousel-item v-for="item in bannerList" :key="item.id" >
        <RouterLink :to="item.href"><img v-img-lazy="item.image" :alt="item.title" ></RouterLink>
        <!-- <div :style="`background-image: url(${item.image})`" class="imgbox"></div> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang='scss'>
.home-banner {
  width: 100%;
  // width: 100vw;
  background-color: #fff;

  ::v-deep(.el-carousel__container) {
    // height: 650px;
    height: v-bind(heightbox) ;

    .imgbox {
      width: 100%;
      height: 100%;
      background-position: center;
      // background-size: v-bind(percent);
      background-size: 100%;
      background-repeat: no-repeat;
      
    }
  }

  img {
    width: 100%;
    // height: 100%;
    // height: 650px;
    transform: v-bind(imgScale);
  }
}

@media (max-width: 1024px) {

}
</style>