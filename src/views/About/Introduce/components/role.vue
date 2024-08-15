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
            <h2>角色定位</h2>
            <p>
                专业的运动控制平台、自动化解决方案提供商。
            </p>
            <p>
                立迈胜是提供一体化电机、控制设备、运动模组、机器人等运动控制产品及服务的一站式采购服务平台。
            </p>
            <!-- <p>目前公司业务涉及医疗自动化、半导体制造、移动机器人、现代物流、智能仓储、新能源、新零售、智能制造</p> -->
        </div>
        <div class="picbox">
          <div class="picbox_wrap">
            <div class="item">
                <div class="flex_wrap">
                    <div>
                        <span class="iconfont icon-tubiao_-"  ></span>
                        <h3>医疗设备</h3>
                        <p>立迈胜为医疗应用开发了各种各样的运动控制解决方案。从电动轮椅到手术机器人等复杂的自动化医疗设备，都能提供针对特定应用需求而设计的一体化电动解决方案。</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="flex_wrap">
                    <div>
                        <span class="iconfont icon-scooter_traffic_line"  ></span>
                        <h3>现代运输</h3>
                        <p>立迈胜一体化电机在主要物流运输市场有丰富的运动控制经验，集成了各种用于负载功能的电机，其性能、精度、可靠性和定制能力均有出色的表现。</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="flex_wrap">
                    <div>
                        <span class="iconfont icon-zhinengzhizao"  ></span>
                        <h3>智能制造</h3>
                        <p>立迈胜一体化电机在主要物流运输市场有丰富的运动控制经验，集成了各种用于负载功能的电机，其性能、精度、可靠性和定制能力均有出色的表现。</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="flex_wrap">
                    <div>
                        <span class="iconfont icon-baozhuang"  ></span>
                        <h3>包装印刷</h3>
                        <p>立迈胜一体化电机主要用于食品、医药、化工等行业和植物种子的物料自动包装机应用中具有出色表现，能自动完成计量、充料、制袋、封合、切断、输送、打印生产批号、增加易切口、无料示警、搅拌等功能。</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="flex_wrap">
                    <div>
                        <span class="iconfont icon-cailiaoyunengyuan"  ></span>
                        <h3>新能源</h3>
                        <p>针对精密松式络筒机的工艺特点，立迈胜在自身多年一体化电机和运动控制技术积累的基础上，在国内开发出高速精密松式络筒机电气控制方案。整个方案具有良好的性价比，大大提升了国产松式络筒机的自动化水平，主要技术指标达到了国际同类设备的水平。</p>
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