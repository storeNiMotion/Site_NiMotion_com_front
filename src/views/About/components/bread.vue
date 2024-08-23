<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { solutionAPI } from "@/apis/home"
import { onMounted, ref } from "vue"
import { useTransition } from '@vueuse/core'

//获取数据



</script>

<template>

  <!-- 面包屑区域 -->
  <div class="About-panel-nav">
    <div class="container">
      <div class="nav-bread">
        <a href="">Home</a>
        <span>></span>
        <a href="">about Us</a>
      </div>
    </div>
  </div>

</template>

<style scoped lang='scss'>
//面包屑
.About-panel-nav {
  .nav-bread {
    padding: 0 20px;
    height: 36px;

    a {
      color: #1d1d1f;
      font-size: 12px;
      line-height: 36px;

      &:hover {
        color: #003abd;
      }
    }
  }
}

//
@media (max-width: 1024px) {}

@media (max-width: 960px) {}

@media (max-width: 768px) {}
</style>