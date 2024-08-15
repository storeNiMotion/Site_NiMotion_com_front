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
            <h2>企业愿景</h2>
            <p>
              让机器更有灵性，更好地为全人类服务。
            </p>
            <p>
              在当今科技高速发展的时代，智能设备已经成为人类生活中不可或缺的一部分。
            </p>
            <p>
              随着人们对于便利和效率的追求，对于机器的要求也越来越高，立迈胜将秉承这一企业愿景，不断创新，开拓进取。
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