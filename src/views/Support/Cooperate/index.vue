<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { messageAPI } from "@/apis/message"
import { ElMessage,  } from "element-plus"
import 'element-plus/theme-chalk/el-message.css'
import { ref, reactive } from "vue"

// 一、调用接口


</script>

<template>
    <!-- banner区域 -->
    <!-- <div class="banner-pro">
        <div class="">
            <img src="https://www.nimotion.cn/static/images/banner/07c9d82ce42fdb94.webp" alt="">
        </div>
    </div> -->
    <!-- 面包屑区域 -->
    <div class="nav-bread">
        <div class="container">
            <a href="">Home</a>
            <span>></span>
            <a href="/support">Support</a>
            <span>></span>
            <a href="">Cooperate</a>
        </div>
    </div>
    <!-- 主体 -->
    <div class="Contact-panel">
        <div class="container">
            <div class="display">
                <!-- 1.联系我们 -->
                <div class="item-us" id="item-us">
                  <el-card style="max-width: 100%" shadow="never">
                      <div class="info-item">

                          <div class="info-box">
                              <h4>业务开发中，敬请期待！</h4>
                          </div>
                      </div>
                  </el-card>
                </div>

            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>
// banner
.banner-pro {
    img {
        width: 100%;
    }
}
//面包屑
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

//内容主体
.Contact-panel {
    background-color: #fff;
    width: 100vw;   //100视窗宽度

    .display {
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // align-items: center;
        width: 100%;

        //1.联系我们
        .item-us {

            // 3.1 重新定义el卡片
            ::v-deep(.el-card) {
                margin-bottom: 30px;
                width: 100%;
                border: none;
                .el-card__body {
                    //padding: 0; //去掉内边距
                    border: none;
                }
            }

            // 3.2 自定义内容样式
            .info-item {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                width: 100%;

                // 3.2.3 信息box
                .info-box {
                    margin: 10px 10px;
                    // padding: 20px 0px;
                    h4 {
                        color: #141414;
                        font-size: 18px;
                        font-weight: 500;
                    }
                    $info-p: 13px;
                    p {
                        margin-top: 14px;
                        color: #1d1d1f;
                        font-size: $info-p;
                        // text-indent: (calc($info-p * 2));
                        line-height: (calc($info-p * 1));
                    }
                }
            }
        }

    }

}


</style>