<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { solutionAPI } from "@/apis/home"
import { onMounted, ref } from "vue"
import { useTransition } from '@vueuse/core'

//获取数据

</script>

<template>

  <div class="item-quality" id="item-us">
    <div class="role">
        <div class="info-box">
            <h2>行业价值</h2>
            <p>
                助力工业自动化行业升级、实现高新技术国产化转型。
            </p>
        </div>
        <div class="picbox">
          <div class="picbox_wrap">
            <div class="item">
                <div class="flex_wrap">
                    <span class="iconfont icon-tishi11"  ></span>
                    <div>
                        <h3>创新</h3>
                        <p>不断加大研发投入，推动自主创新，推动实现国产化转型</p>
                    </div>
                </div>
                <div class="flex_wrap">
                    <span class="iconfont icon-zhuanyedui"  ></span>
                    <div>
                        <h3>专业</h3>
                        <p>提供专业的运动控制平台，助力工业自动化设备智能升级服务：秉承用户至上的服务</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="https://www.nimotion.cn/static/images/compony/164528311ef81815.webp" alt="">
            </div>
            <div class="item">
                <img src="https://www.nimotion.cn/static/images/compony/467038042a4442c5.webp" alt="">
            </div>
            <div class="item">
                <div class="flex_wrap">
                    <span class="iconfont icon-linian"  ></span>
                    <div>
                        <h3>理念</h3>
                        <p>提供提供全方位的支持与解决方案</p>
                    </div>
                </div>
                <div class="flex_wrap">
                    <span class="iconfont icon-hezuoguanxi"  ></span>
                    <div>
                        <h3>合作</h3>
                        <p>致力与各个企业共同开拓工业自动化领域新篇章</p>
                    </div>
                </div>
            </div>


          </div>
        </div>
      </div>
  </div>

</template>

<style scoped lang='scss'>
//1.公司介绍
.item-quality {
  margin: 40px 10px 20px 0;
  .role {
    .info-box {
    //   margin: 0 0 0 20px;
      padding: 10px 0;
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
  .role {
    $picbox-width: 35vw;

    .picbox {
        
        max-width: 100%;
        // height: 440px;
        .picbox_wrap {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            span {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: 38px;

            }

            .item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 50%;
                background-color: #fff;

                .flex_wrap {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px 20px 0 30px;
                    width: 100%;
                    // height: 100%;
                    div {
                        display: flex;
                        justify-content: start;
                        flex-direction: column;
                        align-items: start;
                        padding: 0 0 0 20px;
                        width: 100%;
                        // color: #fff;

                        h3 {
                            display: contents;
                            // text-align: left;
                            font-size: 18px;
                            font-weight: 500;
                            line-height: 20px;
                            max-width: 212px;
                            margin: 0 auto;
                            margin-bottom: 15px;
                        }
                        p {
                            margin-top: 10px;
                            text-align: left;
                            overflow: hidden;
                            // max-width: 60%;

                        }
                    }

                }

            }
            .item:nth-child(1) {
                // border-right: .2px #8a8888 solid;
                // border-bottom: .2px #8a8888 solid;
            }
            .item:nth-child(2) {
                // border-right: 1px #000 solid;
                // border-bottom: .2px #8a8888 solid;
            }
            .item:nth-child(3) {
                // border-right: .2px #8a8888 solid;
                // border-bottom: 1px #000 solid;
            }
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