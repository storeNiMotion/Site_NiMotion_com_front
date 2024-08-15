<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { solutionAPI } from "@/apis/home"
import { onMounted, ref } from "vue"
import { useTransition } from '@vueuse/core'

//获取数据

</script>

<template>

  <div class="item-us" id="item-us">
    
    <h2>公司介绍</h2>
    <div class="info-item">
      
        <el-scrollbar max-height="300px" style="padding: 0 10px;">
          <div class="info-box">
            <!-- <h2>关于我们</h2> -->
            <p>
              北京立迈胜控制技术有限责任公司（简称“立迈胜”）创立于2015年，是一家专业从事运动控制系统以及相关辅助产品研发、生产、销售和服务的国家高新技术企业，总部位于北京市大兴区。旗下产品有智能控制器、一体化步进电机、一体化伺服电机、一体化无刷电机、减速机、电缸等运动模组、工业机器人等；通过IS09001质量管理体系认证、德国TUV的CE认证，是业界品控严格与产品线齐全的制造体系厂商之一。立迈胜对所有产成品实行全检制度，保证了产品品质的稳定和可靠。企业发展至今，荣获北京“专精特新”中小企业、国家高新技术企业、知识产权试点单位等资质以及诸多专利证书。
            </p>
            <p>
              NiMotion立迈胜团队在工业自动化领域耕耘多年，专注技术高度，研发人员占比超过公司总人数的40%，是一支专业、年轻、创新的团队，具有丰富的产品开发和行业应用经验，团队致力于开发灵巧、精制、高效的自动化智能产品，为用户提供专业的运动控制平台和自动化解决方案。
            </p>
            <p>目前公司业务涉及医疗自动化、半导体制造、移动机器人、现代物流、智能仓储、新能源、新零售、智能制造等领域；业务覆盖全球17个国家，为全国2000余家企业提供了专业的服务。</p>
          </div>
        </el-scrollbar>
        <div class="picbox">
          <img src="https://www.nimotion.com/public_uploadfile/2023/0609/20230609105457854.jpg" alt="">
        </div>
      </div>
  </div>

</template>

<style scoped lang='scss'>
//1.公司介绍
.item-us {
  margin: 0 10px 20px 0;
  h2 {
    font-size: 35px;
    color: #000;
    // line-height: 40px;
    margin: 0 0 28px 0;
  }


  // 3.2 自定义内容样式
  .info-item {
    display: flex;
    align-items: center;
    // 3.2 图片box
    $picbox-width: 35vw;

    .picbox {
      margin: 0 10px;
      padding: 10px 0;
      max-width: $picbox-width;
      // max-height: $picbox-height;
      overflow: hidden;

      img {
        width: 100%;
        height: auto;
      }
    }

    // 3.2.3 信息box
    .info-box {
      // margin: 0 0 0 20px;

      // padding: 20px 0px;
      h4 {
        color: #003abd;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
      }

      $info-p: 13px;

      p {
        margin-top: 14px;
        color: #1d1d1f;
        font-size: $info-p;
        text-indent: (calc($info-p * 2));
        line-height: (calc($info-p * 1.5));
      }
    }
  }
}

//
@media (max-width: 1024px) {}

@media (max-width: 960px) {}

@media (max-width: 768px) {

  //1.公司介绍
  .item-us {

    // 3.2 自定义内容样式
    .News-item {
      // display: flex;
      // align-items: center;
      flex-direction: column;
      // 3.2 图片box
      $picbox-width: 100%;

      .picbox {
        padding: 10px 0;
        max-width: $picbox-width;
        // max-height: $picbox-height;
        overflow: hidden;

        img {
          width: 100%;
          height: auto;
          // width: calc();
          // transform: translateY(calc(-50% + $picbox-height/2));
        }
      }
    }
  }
}
</style>