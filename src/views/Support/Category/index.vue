<script setup>
// 服务支持分类页
// import { TabsPaneContext } from 'element-plus'
import { QuestionFilled } from '@element-plus/icons-vue'

import { onMounted, ref } from "vue"
import { getSupportChannelAPI } from "@/apis/support"

//获取数据
const supportList = ref([])
const supporSelfData = ref([])
const getsupportList = async() => {
    const res = await getSupportChannelAPI()
    supportList.value = res.data
    supporSelfData.value = res.category
}



onMounted(() => getsupportList())
</script>

<template>
    <!-- banner区域 -->
    <!-- <div class="banner-pro">
        <div class="">
            <img src="@/assets/uploads/banner1.png" alt="">
        </div>
    </div> -->
    <!-- 面包屑区域 -->
    <div class="Support-panel-nav-bread">
        <div class="container">
            <div class="nav-bread">
                <a href="">Home</a>
                <span> > </span>
                <a href="/support">Support</a>
            </div>
        </div>
    </div>
    <!-- 方案主体 -->
    <div class="Support-panel">
        <div class="container">
            <div class="Support-display">
                <el-card style="max-width: 32%" v-for="item in supportList" :key="item.id">
                    <!-- <div v-if="item.name === '教程视频'">
                        <div class="picbox">
                            <a href="https://www.nimotion.com/index.php?m=content&c=index&a=lists&catid=145" target="_blank" rel="noopener noreferrer">
                                <img :src="item.image" alt="">
                            </a>
                        </div>
                        <div class="info-box">
                            <a href="https://www.nimotion.com/index.php?m=content&c=index&a=lists&catid=145" target="_blank" rel="noopener noreferrer">
                                <h4>{{ item.name }}</h4>
                            </a>
                        </div>
                    </div> -->
                    <div>
                        <div class="picbox">
                            <RouterLink :to="item.router"><img :src="item.image" alt=""></RouterLink>
                        </div>
                        <div class="info-box">
                            <RouterLink :to="item.router">
                                <!-- <el-icon><QuestionFilled /></el-icon> -->
                                <h4>{{ item.name }}</h4>
                            </RouterLink>
                        </div>
                    </div>
                </el-card>

            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>
// 1.banner
.banner-pro {
    // height: 260px;
    // background-color: #F5F5F5;
    // background-image: url(../images/banner1.png);
    img {
        width: 100%;
    }
}
// 2.面包屑
.nav-bread {
    padding: 0 20px;
    height: 36px;
    // background-color: #f2f3f4;
    a {
        color: #1d1d1f;
        font-size: 12px;
        line-height: 36px;
        &:hover {
            color: #003abd;
        }
    }
}
// 3.主体
.Support-panel {
    // margin-top: 20px;
    padding-bottom: 20px;
    width: 100vw;
    // background-color: rgba(0, 0, 0, 0.70);
  .Support-display {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    // 3.1 重新定义el卡片
    ::v-deep(.el-card) {
        margin: 0 0 30px 0;
        // padding: 30px;
        width: 32%;
        .el-card__body {
            padding: 0;
            border: none;
        }
    }
    // 3.2 图片样式
    $picbox-height: 210px;
    .picbox {
        max-height: $picbox-height;
        overflow: hidden;
        img {
            height: 100%;
            // width: calc();
            transform: translateY(calc(-50% + $picbox-height/2));
        }
    }
    // 3.3 信息
    .info-box {
        display: flex;
        // flex-direction: column;
        justify-content: center;
        padding: 30px 30px;
        a {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 50px;
            &:hover {
                color: #003abd !important;
                h4 {
                    color: #003abd;
                }
            }
        }
        h4 {
            margin-top: 10px;
            color: #444444;
            font-size: 26px;
            font-weight: 500;
        }
    }
  }
}

</style>