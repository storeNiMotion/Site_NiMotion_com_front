<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { solutionAPI } from "@/apis/home"
import { onMounted, ref } from "vue"
import { useTransition } from '@vueuse/core'

//获取数据

</script>

<template>
  <div class="item-values">
    <div class="values">
        <div class="info-box">
            <h2>企业价值观</h2>
        </div>
        <div class="picbox">
          <div class="picbox_wrap">
            <div class="item">
                <div class="flex_wrap">
                    <div>
                        <span class="iconfont icon-zhuanyedui"  ></span>
                        <h3>专业、高效、诚信</h3>
                        <p>Professional, efficient and honest</p>
                    </div>
                </div>
                <div class="line"></div>
            </div>
            <div class="item">
                <div class="flex_wrap">
                    <div>
                        <span class="iconfont icon-kejichuangxin"  ></span>
                        <h3>敬业、创新、成长</h3>
                        <p>Dedication, innovation and growth</p>
                    </div>
                </div>
                <div class="line"></div>
            </div>
            <div class="item">
                <div class="flex_wrap">
                    <div>
                        <span class="iconfont icon-hezuoguanxi"  ></span>
                        <h3>求实、合作、共赢</h3>
                        <p>Realism, cooperation and win-win</p>
                    </div>
                </div>
                <div class="line"></div>
            </div>

          </div>
        </div>
      </div>
  </div>

</template>

<style scoped lang='scss'>
//1.公司介绍
.item-values {
  margin: 80px 10px 20px 0;
  .values {
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
  .values {
    $picbox-width: 35vw;

    .picbox {

        background: #b3b3b3 url(https://www.nimotion.cn/static/images/compony/values.webp) no-repeat 50%;
        background-size: 100% 100%;
        max-width: 100%;
        height: 300px;
        .picbox_wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            width: 100%;
            height: 100%;
            .item {
                position: relative;
                width: 30% !important;
                height: 70%;
                background-color: rgba($color:#eeeeee, $alpha: .85);
                border-radius: 10px;


                .flex_wrap {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 10px;
                    height: 100%;
                    div {
                        display: flex;
                        flex-direction: column;
                        padding: 0 10px;
                        color: #333;
                        span {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            font-size: 38px;

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
                            color: #747474;
                            text-align: center;
                            font-size: 16px;
                        }
                    }

                }
                .line {
                    position: absolute;
                    bottom: 0;
                    width: 0;
                    height: 10px;
                    transition: all .3s;
                    background-color: #003abd;
                    opacity: 0;
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;
                    overflow: hidden;
                }
                &:hover {
                    background-color: #eeeeee;
                    .line {
                        width: 100%;
                        opacity: 1;
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