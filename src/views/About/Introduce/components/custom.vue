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
            <h2>Industry Value</h2>
            <p>
                Help the industrial automation industry upgrade and realize the localization transformation of high-tech.
            </p>
        </div>
        <div class="picbox">
          <div class="picbox_wrap">
            <div class="item">
                <div class="flex_wrap">
                    <span class="iconfont icon-tishi11"  ></span>
                    <div>
                        <h3>Innovation</h3>
                        <p>Continue to increase R&D investment, promote independent innovation, and promote localization transformation</p>
                    </div>
                </div>
                <div class="flex_wrap">
                    <span class="iconfont icon-zhuanyedui"  ></span>
                    <div>
                        <h3>major</h3>
                        <p>Provide professional motion control platform to help industrial automation equipment intelligent upgrade services: adhering to user-oriented service</p>
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
                        <h3>idea</h3>
                        <p>Provide comprehensive support and solutions</p>
                    </div>
                </div>
                <div class="flex_wrap">
                    <span class="iconfont icon-hezuoguanxi"  ></span>
                    <div>
                        <h3>cooperate</h3>
                        <p>Committed to jointly open up a new chapter in the field of industrial automation with various companies</p>
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