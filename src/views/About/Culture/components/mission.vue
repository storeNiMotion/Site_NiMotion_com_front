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
            <h2>企业使命</h2>
            <p>
              为用户提供专业的运动控制平台和自动化解决方案。
            </p>
            <p>
              NiMotion团队在工业自动化领域耕耘多年，是一支专业、年轻、创新的团队，具有丰富的产品开发和行业应用经验，团队致力于开发灵巧、精制、高效的自动化智能产品，为用户提供专业的运动控制平台和自动化解决方案。
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