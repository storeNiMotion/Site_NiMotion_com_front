<script setup>
import { getBannerMBAPI } from '@/apis/home'
import { onMounted, onBeforeUnmount, ref } from 'vue'

const bannerList = ref([])  //数据列表

// 1.获取数据
const getBannerMB = async() => {
    const res = await getBannerMBAPI()
    bannerList.value = res.data
    // heightbox.value = `${screenWidth.value * 1287 / 3800}px`
    console.log(bannerList.value);
    
}

// 2.自适应高度
const screenWidth = ref(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)
const heightbox = ref(screenWidth.value * 1472 / 1200)


const imgScale = ref('scale(1)')
const dataScreenRef = ref(null)



// 3.监听窗口变化
const onResize=()=> {
  screenWidth.value = window.innerWidth
  heightbox.value = `${screenWidth.value * 1472 / 1200}px`

}


onMounted(() => {
  onResize()
  //监听窗口变化
  // console.log(dataScreenRef.value);
  window.addEventListener("resize", onResize)

})
onMounted(()=>getBannerMB())


onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
});


</script>

<template>
  <div class="home-banner" ref="dataScreenRef">
    <el-carousel :height="heightbox" interval="3000" trigger="click" indicator-position="outside" loop="false">
      <el-carousel-item v-for="item in bannerList" :key="item.id" >
        <RouterLink :to="item.href"><img v-img-lazy="item.image" :alt="item.name" ></RouterLink>
        <!-- <div :style="`background-image: url(${item.image})`" class="imgbox"></div> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang='scss'>
.home-banner {
  display: none;
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

@media (max-width: 575px) {
.home-banner {
  display: block;
}
}
</style>