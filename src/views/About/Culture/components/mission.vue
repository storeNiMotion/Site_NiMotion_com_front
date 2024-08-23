<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { solutionAPI } from "@/apis/home"
import { onMounted, ref } from "vue"
import { useTransition } from '@vueuse/core'

//获取数据

</script>

<template>

  <div class="item-mission">
    <div class="mission">
        <div class="info-box">
            <h2>Corporate Mission</h2>
            <p>
              Provide users with professional motion control platforms and automation solutions.
            </p>
            <p>
              The NiMotion team has been working in the field of industrial automation for many years. It is a professional, young and innovative team with rich experience in product development and industry applications. The team is committed to developing smart, refined and efficient automated intelligent products to provide users with professional motion control platforms and automation solutions.
            </p>
        </div>
        <div class="picbox">
            <img src="https://www.nimotion.cn/static/images/compony/mission.webp" alt="">
        </div>
      </div>
  </div>

</template>

<style scoped lang='scss'>
//1.公司介绍
.item-mission {
  margin: 80px 10px 20px 0;
  .mission {
    .info-box {
    //   margin: 0 0 0 20px;
      padding: 0 0 10px 0;
      $info-p: 13px;
      h2 {
        font-size: 35px;
        color: #000;
        line-height: 40px;
        margin: 0 0 28px 0;
        }
        p {
            margin-top: 6px;
            color: #1d1d1f;
            font-size: $info-p;
        }
    }
  }

  // 3.2 自定义内容样式
  .vision {
    $picbox-width: 35vw;

    .picbox {
        max-width: 100%;
        // height: 440px;

    }
  }
}

//
@media (max-width: 1024px) {}

@media (max-width: 960px) {}

@media (max-width: 768px) {


}
</style>