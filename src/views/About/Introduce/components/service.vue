<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { solutionAPI } from "@/apis/home"
import { onMounted, ref } from "vue"
import { useTransition } from '@vueuse/core'

//获取数据

</script>

<template>

  <div class="item-role" id="item-us">
    <div class="role">
        <div class="info-box">
            <!-- <h2>角色定位</h2> -->
            <p>
                面对广泛而多样化的工业自动化设备客户，立迈胜业务涉及医疗、半导体制造、移动机器人、现代物流、智能仓储、智能制造等领域，公司产品远销全球13个国家，已为全国2000余家企业提供了专业的服务，深受各行各业客户的信赖和好评。
            </p>
        </div>
        <div class="picbox">
            <img src="https://www.nimotion.cn/static/images/compony/0403a7ac112dc3bd.webp" alt="">
        </div>
      </div>
  </div>

</template>

<style scoped lang='scss'>
//1.公司介绍
.item-role {
  margin: 20px 10px 20px 0;
  .role {
    .info-box {
    //   margin: 0 0 0 20px;
      padding: 10px 0;
      $info-p: 13px;
      h2 {
        font-size: 25px;
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
  .role {
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