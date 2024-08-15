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
            <h2>客户价值</h2>
            <p>
                打造全产品线一站式采购及服务、助力企业智能升级。
            </p>
        </div>
        <div class="picbox">
          <div class="picbox_wrap">
            <div class="item">
                <div class="flex_wrap">
                    <div>
                        <span class="iconfont icon-icon"  ></span>
                        <h3>高智能</h3>
                        <p>专注智能自适应研发，实现产品自诊断，提高易用性</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="flex_wrap">
                    <div>
                        <span class="iconfont icon-xingneng"  ></span>
                        <h3>高性能</h3>
                        <p>高响应，高精度，适应3C行业要求超越行业标准，引领未来</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="flex_wrap">
                    <div>
                        <span class="iconfont icon-shujujicheng"  ></span>
                        <h3>高集成</h3>
                        <p>驱控一体，机电一体，显控一体，更小体积，更强功能</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="flex_wrap">
                    <div>
                        <span class="iconfont icon-chengbenguanli"  ></span>
                        <h3>低成本</h3>
                        <p>为用户节省成本，降低用户使用门槛</p>
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
  margin: 80px 10px 20px 0;
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
            // text-indent: (calc($info-p * 2));
            // line-height: (calc($info-p * 1.5));
        }
    }
  }

  // 3.2 自定义内容样式
  .role {
    $picbox-width: 35vw;

    .picbox {
        
        max-width: 100%;
        height: 440px;
        .picbox_wrap {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            width: 100%;

            .item {
                
                padding: 5%;
                width: 50%;

                .flex_wrap {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    div {
                        display: flex;
                        flex-direction: column;
                        padding: 0 10px;
                        // color: #fff;
                        span {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            font-size: 28px;

                        }
                        h3 {
                            text-align: center;
                            font-size: 20px;
                            font-weight: 700;
                            line-height: 20px;
                            max-width: 212px;
                            margin: 0 auto;
                            margin-bottom: 15px;
                        }
                        p {
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                        }
                    }

                }

            }
            .item:nth-child(1) {
                border-right: .2px #8a8888 solid;
                border-bottom: .2px #8a8888 solid;
            }
            .item:nth-child(2) {
                // border-right: 1px #000 solid;
                border-bottom: .2px #8a8888 solid;
            }
            .item:nth-child(3) {
                border-right: .2px #8a8888 solid;
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