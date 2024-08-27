<script setup>
// import { TabsPaneContext } from 'element-plus'
import { Calendar, Search } from '@element-plus/icons-vue'
import { getAftersalesDetailAPI } from "@/apis/support"
import { onMounted, ref } from "vue"
import { useRoute, onBeforeRouteUpdate } from "vue-router"   // 引入路由

// 1.获取数据
const AftersalesDetail = ref({})

const getAftersalesDetail = async () => {
    const res = await getAftersalesDetailAPI()
    AftersalesDetail.value = res.data[0]

}


onMounted(() => getAftersalesDetail())
</script>

<template>
    <!-- banner区域 -->
    <div class="banner-pro">
        <div class="">
            <img :src="AftersalesDetail.banner_url" alt="">
        </div>
    </div>
    <!-- 面包屑 -->
    <div class="support-panel-nav-bread">
        <div class="container">
            <div class="nav-bread">
                <a href="">Home</a>
                <span> > </span>
                <a href="/support/">Support</a>
                <span> > </span>
                <span>{{ AftersalesDetail.name }}</span>
            </div>
        </div>
    </div>
    <!-- 主体 -->
    <div class="support-panel-detail">
        <div class="container">

            <div class="support-detail">
                <!-- 01.产品图文概述 -->
                <div class="article">
                    <div class="detail-title">
                        <h1>{{ AftersalesDetail.caption }}</h1>

                    </div>
                    <div class="detail-content" v-html="AftersalesDetail.content">
                    </div>

                </div>

            </div>

        </div>
    </div>

</template>

<style scoped lang='scss'>
// 1.banner
.banner-pro {

    img {
        width: 100%;
    }
}

//面包屑
.nav-bread {
    margin: 0 auto;
    padding: 0 15px;
    // max-width: 900px;
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

//内容
.support-panel-detail {
    background-color: #fff;
    padding-bottom: 30px;
    width: 100vw;

    // 01.图文内容
    .support-detail {
        margin: 0 auto;
        padding: 40px 10px;
        // max-width: 900px;
        // height: 600px;
        background-color: #fff;
        // border-bottom: 1px solid #e5e9ef;

        // 01.图文
        .article {
            border-bottom: 1px solid #e5e9ef;
            margin-bottom: 20px;

            // 1.1 标题区
            .detail-title {

                h1 {
                    margin-bottom: 16px;
                    // padding: 0px 80px;
                    //width: 46%; //定义宽度
                    min-height: 39px;
                    font-size: 28px;
                    font-weight: 600;
                }
            }

            // 1.2 内容区
            :deep(.detail-content) {
                margin-bottom: 50px;
                font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif, SimHei, SimSun;

                h2 {
                    margin: 20px 0;
                    font-size: 20px !important;
                    font-weight: 600 !important;
                }

                h3 {
                    margin: 20px 0;
                    font-size: 16px !important;
                    font-weight: 500 !important;
                    text-indent: 1em;
                }

                p {
                    margin: 10px 0;
                    font-size: 14px;
                    cursor: text;
                    text-indent: 2em;
                }
            }

            // 1.3 
            .detail-footer {
                display: flex;
                padding: 0 80px;
                margin-bottom: 39px;

            }
        }

    }

}
</style>