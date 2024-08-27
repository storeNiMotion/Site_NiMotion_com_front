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
            <h2>Role Positioning</h2>
            <p>
                Professional motion control platform and automation solution provider.
            </p>
            <p>
                Limax is a one-stop purchasing service platform that provides integrated motors, control equipment, motion modules, robots and other motion control products and services.
            </p>
            <!-- <p>目前公司业务涉及医疗自动化、半导体制造、移动机器人、现代物流、智能仓储、新能源、新零售、智能制造</p> -->
        </div>
        <div class="picbox">
          <div class="picbox_wrap">
            <div class="item">
                <div class="flex_wrap">
                    <div>
                        <span class="iconfont icon-tubiao_-"  ></span>
                        <h3>Medical Devices</h3>
                        <p>Limax has developed a wide range of motion control solutions for medical applications. From electric wheelchairs to complex automated medical equipment such as surgical robots, we can provide integrated electric solutions designed for specific application needs.</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="flex_wrap">
                    <div>
                        <span class="iconfont icon-scooter_traffic_line"  ></span>
                        <h3>Modern transportation</h3>
                        <p>Limax integrated motors have extensive experience in motion control in major logistics and transportation markets, integrating a variety of motors for load functions with outstanding performance, precision, reliability and customization capabilities.</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="flex_wrap">
                    <div>
                        <span class="iconfont icon-zhinengzhizao"  ></span>
                        <h3>Smart Manufacturing</h3>
                        <p>Limax integrated motors have extensive experience in motion control in major logistics and transportation markets, integrating a variety of motors for load functions with outstanding performance, precision, reliability and customization capabilities.</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="flex_wrap">
                    <div>
                        <span class="iconfont icon-baozhuang"  ></span>
                        <h3>Packaging and printing</h3>
                        <p>Limax integrated motors are mainly used in food, medicine, chemical and other industries and plant seed material automatic packaging machine applications, and have outstanding performance. They can automatically complete metering, filling, bag making, sealing, cutting, conveying, printing production batch numbers, adding easy-to-cut edges, no-material warning, stirring and other functions.</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="flex_wrap">
                    <div>
                        <span class="iconfont icon-cailiaoyunengyuan"  ></span>
                        <h3>New Energy Sources</h3>
                        <p>In view of the process characteristics of precision loose-type winders, Limaisheng has developed a high-speed precision loose-type winder electrical control solution in China based on its own years of integrated motor and motion control technology accumulation. The entire solution has a good cost-effectiveness, greatly improving the automation level of domestic loose-type winders, and the main technical indicators have reached the level of similar international equipment.</p>
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
.item-role {
  margin: 80px 10px 20px 0;
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
            // text-indent: (calc($info-p * 2));
            // line-height: (calc($info-p * 1.5));
        }
    }
  }

  // 3.2 自定义内容样式
  .role {
    $picbox-width: 35vw;

    .picbox {
        // margin: 0 10px;
        //   padding: 10px 0;
        background: #b3b3b3 url(https://www.nimotion.cn/static/images/compony/develop_bg.jpg) no-repeat 50%;
        background-size: 100% 100%;
        max-width: 100%;
        height: 440px;
        .picbox_wrap {
            width: 100%;
            height: 440px;
            .item {
                width: 20% !important;
                height: 440px;
                border-right: 1px solid hsla(0, 0%, 100%, .18);
                float: left;

                .flex_wrap {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    div {
                        display: flex;
                        flex-direction: column;
                        padding: 0 10px;
                        color: #fff;
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
                &:hover {
                    background: rgba($color: rgb(0, 153, 252), $alpha: .65);
                        
                }
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