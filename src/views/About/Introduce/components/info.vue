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
    
    <h2>Company Introduction</h2>
    <div class="info-item">
      
        <el-scrollbar max-height="300px" style="padding: 0 10px;">
          <div class="info-box">
            <!-- <h2>关于我们</h2> -->
            <p>
              Beijing Limaisheng Control Technology Co., Ltd. ("Limaisheng") was founded in 2015. It is a national high-tech enterprise specializing in the research and development, production, sales and service of motion control systems and related auxiliary products. Its headquarters is located in Daxing District, Beijing. Its products include intelligent controllers, integrated stepper motors, integrated servo motors, integrated brushless motors, reducers, electric cylinders and other motion modules, industrial robots, etc.; it has passed the IS09001 quality management system certification and the German TUV CE certification. It is one of the manufacturers with strict quality control and a complete product line in the industry. Limaisheng implements a full inspection system for all finished products to ensure the stability and reliability of product quality. Since its development, the company has won the qualifications of Beijing's "Specialized, Special and New" small and medium-sized enterprises, national high-tech enterprises, intellectual property pilot units, and many patent certificates.
            </p>
            <p>
              The NiMotion team has been working in the field of industrial automation for many years, focusing on technical heights. R&D personnel account for more than 40% of the company's total number of employees. It is a professional, young and innovative team with rich experience in product development and industry applications. The team is committed to developing smart, refined and efficient automated intelligent products, providing users with professional motion control platforms and automation solutions.
            </p>
            <p>Currently, the company's business involves medical automation, semiconductor manufacturing, mobile robots, modern logistics, smart warehousing, new energy, new retail, smart manufacturing and other fields; its business covers 17 countries around the world and has provided professional services to more than 2,000 companies across the country.</p>
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