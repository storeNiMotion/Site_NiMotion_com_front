<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { solutionAPI } from "@/apis/home"
import { onMounted, ref } from "vue"
import { useTransition } from '@vueuse/core'

//获取数据

</script>

<template>

  <div class="item-principles">
    <div class="principles">
        <div class="info-box">
            <h2>工作方针</h2>
        </div>
        <div class="picbox">
          <div class="picbox_wrap">
            <div class="item">
                <div class="flex_wrap">
                    <div>
                        <span class="iconfont icon-hezuoguanxi"  ></span>
                        <h3>用户至上</h3>
                        <p>User First</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="flex_wrap">
                    <div>
                        <span class="iconfont icon-kejichuangxin"  ></span>
                        <h3>不断创新</h3>
                        <p>Innovation</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="flex_wrap">
                    <div>
                        <span class="iconfont icon-xingneng1"  ></span>
                        <h3>追求卓越</h3>
                        <p>Pursuit of Excellence</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="flex_wrap">
                    <div>
                        <span class="iconfont icon-linian"  ></span>
                        <h3>精益求精</h3>
                        <p>Strive for excellence</p>
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
.item-principles {
  margin: 80px 10px 20px 0;
  .principles {
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
  .principles {
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
                margin: 10px;
                padding: 5%;
                width: 45%;
                background-color: #fff;

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
                            text-align: center;
                            overflow: hidden;
                            font-size: 16px;
                        }
                    }

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


}
</style>