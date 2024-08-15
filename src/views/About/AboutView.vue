<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { solutionAPI } from "@/apis/home"
import { onMounted, ref } from "vue"
import { useTransition } from '@vueuse/core'

//获取数据
const solutionList = ref([])
const caption = ref('')
const content = ref('')
const getsolutionList = async() => {
    const res = await solutionAPI()
    solutionList.value = res.data
    caption.value = res.category[0].caption
    content.value = res.category[0].content
}

//切换标签customValue
const source = ref(0)
const custom = ref(0)
const project = ref(0)
const outputValue = useTransition(source, {
  duration: 800,
})
const customValue = useTransition(custom, {
  duration: 800,
})
const proValue = useTransition(project, {
  duration: 800,
})
source.value = 27
custom.value = 2000
project.value = 5000

onMounted(() => getsolutionList())
</script>

<template>
    <!-- banner区域 -->
    <div class="About-panel-banner">
      <div class="banner-pro">
          <div class="">
              <img src="https://www.nimotion.com/public_uploadfile/2023/0609/20230609100950101.jpg" alt="">
          </div>
      </div>  
    </div>
  
    <!-- 面包屑区域 -->
    <div class="About-panel-nav">
      <div class="nav-bread">
          <div class="container">
              <a href="">首页</a>
              <span>></span>
              <a href="">关于我们</a>
          </div>
      </div>
    </div>

    <!-- 主体 -->
    <div class="About-panel">
        <div class="container">
            <div class="About-display">
              <!-- nav-bread -->
              <div class="About-display-left">
                <el-anchor>
                  <el-anchor-link href="#item-us">
                    公司介绍
                  </el-anchor-link>
                  <el-anchor-link href="#item-product">
                    产品理念
                  </el-anchor-link>
                  <el-anchor-link href="#item-honor">
                    荣誉资质
                  </el-anchor-link>
                  <el-anchor-link href="#item-photo">
                    企业风采
                  </el-anchor-link>
                </el-anchor>
              </div>
              <!-- 右侧展示 -->
              <div class="About-display-right">
                <!-- 1.公司介绍 -->
                <div class="item-us" id="item-us">
                  <!-- <h2>公司介绍</h2> -->
                  <el-card style="max-width: 100%" >

                    <div class="News-item">
                          <div class="picbox">
                              <img src="https://www.nimotion.com/public_uploadfile/2023/0609/20230609105457854.jpg" alt="">
                          </div>
                          <el-scrollbar max-height="300px" style="padding: 0 10px;">
                            <div class="info-box">
                                <h4>关于我们</h4>
                                <p>北京立迈胜控制技术有限责任公司（简称“立迈胜”）创立于2015年，是一家专业从事运动控制系统以及相关辅助产品研发、生产、销售和服务的国家高新技术企业，总部位于北京市大兴区。旗下产品有智能控制器、一体化步进电机、一体化伺服电机、一体化无刷电机、减速机、电缸等运动模组、工业机器人等；通过IS09001质量管理体系认证、德国TUV的CE认证，是业界品控严格与产品线齐全的制造体系厂商之一。立迈胜对所有产成品实行全检制度，保证了产品品质的稳定和可靠。企业发展至今，荣获北京“专精特新”中小企业、国家高新技术企业、知识产权试点单位等资质以及诸多专利证书。</p>
                                <p>NiMotion立迈胜团队在工业自动化领域耕耘多年，专注技术高度，研发人员占比超过公司总人数的40%，是一支专业、年轻、创新的团队，具有丰富的产品开发和行业应用经验，团队致力于开发灵巧、精制、高效的自动化智能产品，为用户提供专业的运动控制平台和自动化解决方案。</p>
                                <p>目前公司业务涉及医疗自动化、半导体制造、移动机器人、现代物流、智能仓储、新能源、新零售、智能制造等领域；业务覆盖全球13个国家，为全国2000余家企业提供了专业的服务。</p>
                            </div>
                          </el-scrollbar>

                      </div>
                  </el-card>
                </div>
                <!-- 2.实力展示 -->
                <div class="support-power">
                    <div class="power-container">
                        <div class="power-box">
                            <div class="h2">
                              <el-statistic :value="outputValue" />
                            </div>
                            <div class="info-power">
                                <h4>个国家销售</h4>
                            </div>
                        </div>
                        <div class="power-box">
                            <div class="h2">
                              <el-statistic :value="customValue" />
                            </div>
                            <div class="info-power">
                                <h4>+核心客户</h4>
                            </div>
                        </div>
                        <div class="power-box">
                            <div class="h2">
                              <el-statistic :value="proValue" />
                            </div>
                            <div class="info-power">
                                <h4>+合作项目</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 3.产品理念 -->
                <div class="item-product" id="item-product">
                  <el-card style="max-width: 100%" >
                      <div class="News-item">
                          <div class="picbox">
                              <img src="https://www.nimotion.com/public_uploadfile/2023/0609/20230609115502482.png" alt="">
                          </div>
                      </div>
                  </el-card>
                </div>
                <!-- 3.荣誉介绍 -->
                <div class="item-honor" id="item-honor">
                  <el-card style="max-width: 100%" >
                      <div class="News-item">
                          <div class="picbox">
                              <img src="https://www.nimotion.com/public_uploadfile/2024/0206/20240206105813630.jpg" alt="">
                          </div>
                          <div class="picbox">
                              <img src="https://www.nimotion.com/public_uploadfile/2023/0609/20230609115543320.png" alt="">
                          </div>
                      </div>
                  </el-card>
                </div>
                <!-- 4.企业照片 -->
                <div class="item-photo" id="item-photo">
                  <el-card style="max-width: 100%" >
                      <div class="News-item">
                          <div class="picbox">
                              <img src="https://www.nimotion.cn/static/images/compony/com03.webp" alt="">
                          </div>
                          <div class="picbox">
                              <img src="https://www.nimotion.cn/static/images/compony/com02.webp" alt="">
                          </div>
                          <div class="picbox">
                              <img src="https://www.nimotion.cn/static/images/compony/com04.webp" alt="">
                          </div>
                      </div>
                  </el-card>
                </div>

              </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>
// banner
.About-panel-banner {
  width: 100vw;

  .banner-pro {
      img {
          width: 100%;
      }
  }
}

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
      margin:0 20px;
      //1.公司介绍
      .item-us {
        h2 {
          padding:10px;
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
                    text-align:center;
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
                ::v-deep(.el-statistic){
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
          padding:10px;
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
          padding:10px;
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
          padding:10px;
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
      margin-left:20px;
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
    margin-left:20px;
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
                ::v-deep(.el-statistic){
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