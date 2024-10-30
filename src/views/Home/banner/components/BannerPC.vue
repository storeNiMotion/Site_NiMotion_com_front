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
    <el-carousel :height="heightbox" interval="300000" trigger="click" indicator-position="outside" loop="false">
      <el-carousel-item v-for="item in bannerList" :key="item.id" >
        <RouterLink :to="item.href"><img v-img-lazy="item.image" :alt="item.title" ></RouterLink>
        <!-- <div :style="`background-image: url(${item.image})`" class="imgbox"></div> -->
         <!-- 图片信息 -->
         <!-- <div class="info container">
          <div class="title">
            <h2>{{ item.name }}</h2>
            <p></p>
          </div>
          <div class="contact">
            <div class="header-contact">
              <RouterLink to="/contact" class="btn-face">Contact Us</RouterLink>
            </div>
          </div>
         </div> -->
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
      background-position: top;
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
  .info {
    position: absolute;
    // float: left;
    top: 20px;
    left: 20px;
    // bottom: 50px;
    margin: 50px;
    padding: 20px 120px;
    // width: 100%;
    // height: 100%;
    max-width: 1000px;
    .title {
      h2 {
        color: #fff;
        font-size: 32px;
      }
    }
    .contact {
      margin-top: 50px;
      // 2.3联系我们
      .header-contact {

        .btn-face {
          display: flex;
          // margin:0 15px 0 40px;
          width: 185px;
          height: 45px;
          border: 1px solid #003abd;
          border-radius: 5px;
          background-color: #003abd;
          font-size: 18px;
          color: #fff;
          text-align: center;
          align-items: center;
          justify-content: center;
          line-height: 26px;
          &:hover {
              background-color: #0131a1;
              // color: #fff;
          }
        }
      }
    }
  }
}

@media (max-width: 1024px) {

}

@media (max-width: 575px) {
  .home-banner {
    display: none;
  }
}
</style>