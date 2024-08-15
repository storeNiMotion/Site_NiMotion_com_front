<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { solutionAPI } from "@/apis/home"
import { onMounted, ref } from "vue"
import { useTransition } from '@vueuse/core'

// 父级components
import Banner from '../components/banner.vue'
import Bread from '../components/bread.vue'
import navLeft from '../components/navLeft.vue'
// 子级components
import info from './components/info.vue'
import saleNum from './components/saleNum.vue'
import service from './components/service.vue'
import develop from './components/develop.vue'
import role from './components/role.vue'
import quality from './components/quality.vue'
import customs from './components/custom.vue'

//获取数据
const solutionList = ref([])

const getsolutionList = async () => {
  const res = await solutionAPI()
  solutionList.value = res.data

}

//切换标签customValue

onMounted(() => getsolutionList())
</script>

<template>
  <!-- banner区域 -->
  <Banner />

  <!-- 面包屑区域 -->
  <Bread />

  <!-- 主体 -->
  <div class="About-panel">
    <div class="container">
      <div class="About-display">
        <!-- nav-bread -->
        <navLeft />
        <!-- 右侧展示 -->
        <div class="About-display-right">
          <!-- 1.公司介绍 -->
          <info />
          <!-- 3.发展历程 -->
          <develop />
          <role />
          <customs />
          <!-- 2.客户服务展示 -->
          <saleNum />
          <service />
          
          <quality />

        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang='scss'>


//主题北荣
.About-panel {
  width: 100vw;
  margin-top: 20px;

  .About-display {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    width: 100%;

    //左侧
    .About-display-left {
      width: 20%;

      ::v-deep(.el-anchor) {
        --el-anchor-bg-color: ;

        .el-anchor__marker {
          // width: 100%;
          // height: 34px;
          background-color: #fff;
          border-radius: 0;
          // top: 0 !important;
        }

        .el-anchor__list {
          padding: 0;

          // background-color: #fff;
          .el-anchor__item {
            margin-bottom: 2px;
            height: 34px;
            background-color: #fff;

            a {
              display: block;
              width: 100%;
              height: 100%;
              padding: 0 26px;
              color: #000;
              font-size: 13px;
              line-height: 34px;
            }
          }
        }
      }
    }

    //右侧展示
    .About-display-right {
      flex: 1;
      margin: 0 20px;

      //1.公司介绍
      .item-us {
        h2 {
          padding: 10px;
          color: #003abd;
          font-size: 18px;
        }

        // 3.1 重新定义el卡片
        ::v-deep(.el-card) {
          margin-bottom: 30px;
          width: 100%;

          .el-card__body {
            //padding: 0; //去掉内边距
            border: none;
          }
        }

        // 3.2 自定义内容样式
        .News-item {
          display: flex;
          align-items: center;
          // 3.2 图片box
          $picbox-width: 35vw;

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

          // 3.2.3 信息box
          .info-box {
            margin: 0 0 0 20px;

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

      //2.实力展示
      .support-power {
        .power-container {
          display: flex;
          justify-content: space-between;
          padding: 0 10px;
          margin-bottom: 20px;

          .power-box {
            display: flex;

            .h2 {
              ::v-deep(.el-statistic) {
                span {
                  // font-size: 2rem;
                  font-size: 80px;
                  color: #003abd;
                }
              }
            }

            .info-power {
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-left: 10px;

              h4 {
                font-size: 20px;
                // font-size: .5rem;
                color: #003abd;
              }
            }
          }
        }
      }

      //3.荣誉介绍
      .item-honor {
        h2 {
          padding: 10px;
          color: #003abd;
          font-size: 18px;
        }

        // 3.1 重新定义el卡片
        ::v-deep(.el-card) {
          margin-bottom: 30px;
          width: 100%;

          .el-card__body {
            //padding: 0; //去掉内边距
            border: none;
          }
        }

        // 3.2 自定义内容样式
        .News-item {
          display: flex;
          // 3.2 图片box
          $picbox-height: 400px;

          .picbox {
            max-width: 100%;
            // max-height: $picbox-height;
            overflow: hidden;

            img {
              height: 100%;
              // width: calc();
              // transform: translateY(calc(-50% + $picbox-height/2));
            }
          }

          // 3.2.3 信息box
          .info-box {
            margin: 0 0 0 20px;
            // padding: 20px 0px;
            $info-p: 13px;

            p {
              margin-top: 8px;
              color: #1d1d1f;
              font-size: $info-p;
              text-indent: (calc($info-p * 2));
              line-height: (calc($info-p * 1.5));
            }
          }
        }
      }

      //3.产品理念
      .item-product {
        h2 {
          padding: 10px;
          color: #003abd;
          font-size: 18px;
        }

        // 3.1 重新定义el卡片
        ::v-deep(.el-card) {
          margin-bottom: 30px;
          width: 100%;

          .el-card__body {
            //padding: 0; //去掉内边距
            border: none;
          }
        }

        // 3.2 自定义内容样式
        .News-item {
          display: flex;
          // 3.2 图片box
          $picbox-height: 400px;

          .picbox {
            max-width: 100%;
            // max-height: $picbox-height;
            overflow: hidden;

            img {
              height: 100%;
              // width: calc();
              // transform: translateY(calc(-50% + $picbox-height/2));
            }
          }
        }
      }

      //3.企业照片
      .item-photo {
        h2 {
          padding: 10px;
          color: #003abd;
          font-size: 18px;
        }

        // 3.1 重新定义el卡片
        ::v-deep(.el-card) {
          margin-bottom: 30px;
          width: 100%;

          .el-card__body {
            //padding: 0; //去掉内边距
            border: none;
          }
        }

        // 3.2 自定义内容样式
        .News-item {
          display: flex;
          justify-content: space-between;
          // 3.2 图片box
          $picbox-height: 400px;

          .picbox {
            max-width: 32%;
            max-height: $picbox-height;
            overflow: hidden;

            img {
              // height: 100%;
              // width: calc();
              // transform: translateY(calc(-50% + $picbox-height/2));
            }
          }
        }
      }
    }

  }

}

//
@media (max-width: 1024px) {

  //主体
  .About-panel {

    .About-display {

      //左侧
      .About-display-left {
        display: none;
      }

      //右侧展示
      .About-display-right {
        flex: 1;
        margin-left: 20px;
        //1.公司介绍
        //2.实力展示
        //3.荣誉介绍
        //3.产品理念
        //3.企业照片

      }
    }
  }
}

@media (max-width: 960px) {

  //主体
  .About-panel {

    .About-display {

      //左侧
      .About-display-left {
        // display: none;
      }

      //右侧展示
      .About-display-right {
        flex: 1;
        margin-left: 20px;
        //1.公司介绍
        //2.实力展示
        //3.荣誉介绍
        //3.产品理念
        //3.企业照片

      }
    }
  }
}

@media (max-width: 768px) {


  //主体
  .About-panel {

    .About-display {

      //左侧
      .About-display-left {
        // display: none;
      }

      //右侧展示
      .About-display-right {

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

        //2.实力展示
        .support-power {
          .power-container {
            .power-box {
              .h2 {
                ::v-deep(.el-statistic) {
                  span {
                    font-size: 2rem;
                  }
                }
              }

              .info-power {
                margin-left: 10px;

                h4 {
                  font-size: .5rem;
                }
              }
            }
          }
        }

        //3.荣誉介绍
        //3.产品理念
        //3.企业照片

      }
    }
  }
}
</style>