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

  <!-- nav-bread -->
  <div class="About-display-left">
    <ul>
      <li><RouterLink to="/about">Company Introduction</RouterLink></li>
      <li><RouterLink to="/culture">Cultural Concept</RouterLink></li>
      <li><RouterLink to="/honor">Corporate Honors</RouterLink></li>
      <li><RouterLink to="/styles">Corporate Style</RouterLink></li>
      <li><RouterLink to="/factory">Factory appearance</RouterLink></li>
    </ul>
    

    <!-- <el-anchor>
      <el-anchor-link href="/about">
        企业介绍
      </el-anchor-link>
      <el-anchor-link href="/culture">
        文化理念
      </el-anchor-link>
      <el-anchor-link href="/honor">
        企业荣誉
      </el-anchor-link>
      <el-anchor-link href="/styles">
        企业风采
      </el-anchor-link>
      <el-anchor-link href="/factory">
        厂房厂貌
      </el-anchor-link>
    </el-anchor> -->
  </div>

</template>

<style scoped lang='scss'>
//左侧
.About-display-left {
  width: 20%;
  a {
    display:block;
    padding:0 26px;
    height: 34px;
    color: #000;
    font-size: 13px;
    line-height: 34px;
    background-color:#fff;
    
  }
  a:nth-child(-n+2) {
    margin-top:4px;
  }
  // 激活状态
  .router-link-active {
    background-color:#003abd;
    color:#fff;
  }

  //忽略
  // ::v-deep(.el-anchor) {
  //   --el-anchor-bg-color: ;

  //   .el-anchor__marker {
  //     background-color: #fff;
  //     border-radius: 0;

  //   }

  //   .el-anchor__list {
  //     padding: 0;

  //     .el-anchor__item {
  //       margin-bottom: 2px;
  //       height: 34px;
  //       background-color: #fff;

  //       a {
  //         display: block;
  //         width: 100%;
  //         height: 100%;
  //         padding: 0 26px;
  //         color: #000;
  //         font-size: 13px;
  //         line-height: 34px;
  //       }
  //     }
  //   }
  // }
}

@media (max-width: 1024px) {

  .About-display-left {
    display: none;
  }
}

@media (max-width: 960px) {}

@media (max-width: 768px) {}
</style>