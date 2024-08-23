<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { solutionAPI } from "@/apis/home"
import { onMounted, ref } from "vue"
import { useTransition } from '@vueuse/core'

//获取数据


//切换标签customValue


</script>

<template>
  <!-- banner区域 -->
  <div class="About-panel-banner">
    <div class="banner-pro">
      <div class="">
        <img src="http://www.nimotion.cn/static/images/banner/banner_aboute.webp" alt="">
      </div>
    </div>
  </div>

</template>

<style scoped lang='scss'>
// banner
.About-panel-banner {
  width: 100vw;

  .banner-pro {
    img {
      width: 100%;
    }
  }
}

//
@media (max-width: 1024px) {}

@media (max-width: 960px) {}

@media (max-width: 768px) {}
</style>