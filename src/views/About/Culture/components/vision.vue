<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { solutionAPI } from "@/apis/home"
import { onMounted, ref } from "vue"
import { useTransition } from '@vueuse/core'

//获取数据

</script>

<template>

  <div class="item-vision">
    <div class="vision">
        <div class="info-box">
            <h2>Corporate Vision</h2>
            <p>
              Make machines more intelligent and better serve all mankind.
            </p>
            <p>
              In today's era of rapid technological development, smart devices have become an indispensable part of human life.
            </p>
            <p>
              As people pursue convenience and efficiency, their requirements for machines are getting higher and higher. Limaisheng will adhere to this corporate vision, continue to innovate, and forge ahead.
            </p>
        </div>
        <div class="picbox">
            <img src="https://www.nimotion.cn/static/images/compony/vision.webp" alt="">
        </div>
      </div>
  </div>

</template>

<style scoped lang='scss'>
//1.公司介绍
.item-vision {
  margin: 0px 10px 20px 0;
  .vision {
    .info-box {
    //   margin: 0 0 0 20px;
      padding: 0 0 10px 0;
      $info-p: 13px;
      h2 {
        font-size: 35px;
        text-transform: uppercase;
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