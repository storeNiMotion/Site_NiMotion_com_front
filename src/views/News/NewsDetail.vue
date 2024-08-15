<script setup>
// import { TabsPaneContext } from 'element-plus'
import { Calendar, Search } from '@element-plus/icons-vue'
import { getNewDetailAPI } from "@/apis/news"
import { onMounted, ref } from "vue"
import { useRoute, onBeforeRouteUpdate } from "vue-router"   // 引入路由
import router from '@/router/index'
const route = useRoute()                //调用路由

//获取数据
const NewDetail = ref([])

const getNewDetail = async (id = route.params.id) => {
    const res = await getNewDetailAPI(id)
    // console.log(router);
    NewDetail.value = res.data[0]
    document.title = NewDetail.value.name
    // console.log(document.title);

}

onMounted(() => getNewDetail())
</script>

<template>
    <!-- 面包屑 -->
    <div class="news-panel-nav-bread">
        <div class="container">
            <div class="nav-bread">
                <a href="">首页</a>
                <span>></span>
                <a href="">公司新闻</a>
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
                        <h1>{{ NewDetail.name }}</h1>
                        <div class="info-box">
                            <span class="date">{{ NewDetail.update_time }}</span>
                        </div>
                    </div>
                    <div class="detail-content" v-html="NewDetail.content">
                    </div>
                    <div class="detail-footer">
                        <div class="article-tags" v-for="item in NewDetail.tag" :key="item.id">
                            <span>{{ item.tag }}</span>
                        </div>
                    </div>
                </div>
                <!-- 02.分享 -->
                <!-- <div class="support-share">
                    <div class="toolbar">
                        <div class="share-box">
                            <span>分享到：</span>
                            <ul class="share-list">
                                <li>
                                    <RouterLink to="">
                                        <i class="iconfont icon-menu"></i>
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink to="">
                                        <i class="iconfont icon-menu"></i>
                                    </RouterLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> -->
            </div>

        </div>
    </div>

</template>

<style scoped lang='scss'>
//面包屑
.news-panel-nav-bread {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
    // padding: 0 10px;
    width: 100vw;
    height: 36px;

    .nav-bread {
        margin: 0 auto;
        padding: 0 10px;
        // max-width: 900px;

        // height: 46px;

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
}


//内容
.support-panel-detail {
    // background-color: #fff;
    padding-bottom: 30px;
    width: 100vw;

    // 01.图文内容
    .support-detail {
        margin: 0 auto;
        padding: 40px;
        background-color: #fff;
        // border-bottom: 1px solid #e5e9ef;

        // 01.图文
        .article {
            border-bottom: 1px solid #e5e9ef;
            margin-bottom: 20px;

            // 1.1 标题区
            .detail-title {
                padding: 0px 40px;

                h1 {
                    margin-bottom: 16px;
                    min-height: 39px;
                    font-size: 28px;
                    font-weight: 600;
                }

                .info-box {
                    margin-bottom: 20px;
                    color: #999;
                    font-size: 13px;
                }
            }

            // 1.2 内容区 穿透
            :deep(.detail-content) {
                margin-bottom: 50px;
                padding: 0px 40px;
                font-family: -apple-system, SF UI Text, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif, SimHei, SimSun;

                h2 {
                    margin: 20px 0;
                    font-size: 20px !important;
                    font-weight: 600 !important;
                }

                h3 {
                    margin: 20px 0;
                    font-size: 16px !important;
                    font-weight: 600 !important;
                }

                p {
                    margin: 10px 0;
                    font-size: 14px;
                    cursor: text;
                }
            }

            // 1.3 
            .detail-footer {
                padding: 0 80px;
                margin-bottom: 39px;
            }
        }

        // 02.分享
        .support-share {
            // padding: 0 40px;
            // background-color: #fff;
            width: 100%;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -ms-flex-align: center;
            align-items: center;
            font-size: 14px;
            color: #505050;

            .share-box {
                display: flex;
                justify-content: center;
                align-items: center;

                ul {
                    display: flex;

                    li {
                        background-color: #505050;
                        border-radius: 50%;
                        margin: 0 5px;
                        width: 30px;
                        height: 30px;

                        a {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            width: 100%;
                            height: 100%;
                            text-align: center;
                            color: #e5e9ef;

                            i {
                                font-size: 18px;
                            }
                        }

                        &:hover {
                            background-color: #003abd;
                        }
                    }
                }

            }
        }
    }

    // 03.相关产品
    .Product-related {
        padding: 20px 15px;

        h2 {
            margin: 10px 0;
            color: #003abd;
            font-size: 32px;
        }

        .card-bd {
            padding: 0 5px;
        }

        // 3.1 重新定义跑马灯css
        ::v-deep(.el-carousel) {

            // 3.1.1 主体内容
            .el-carousel__container {
                // height: 320px;
                height: auto;

                .el-carousel__item {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex: 1;
                    justify-content: space-between;
                    margin: 0 5px;

                    .el-card {
                        width: 24%;
                        height: fit-content;
                        border: none; // 去掉边框

                        .el-card__body {
                            padding: 0;

                            a {
                                display: block;
                                height: 100%;
                            }

                            h3 {
                                position: absolute;
                                // top: 290px;
                                // margin: 10px;
                                padding: 5px;
                                transform: translateY(-100%);
                                width: 100%;
                                background-color: #fff;
                            }

                            img {
                                display: block;
                                height: 100%;
                                opacity: 1;
                                transition: all 0.3s;
                            }
                        }

                        .el-card__footer {
                            position: absolute;
                            display: block;
                            // margin-bottom: 2px;
                            padding: 8px 4px;
                            height: 40px;
                            border: none;

                            a {
                                font-size: 14px;
                            }
                        }

                        &:hover {
                            img {
                                transform: scale(1.05);
                            }

                            a {
                                color: #003abd !important;
                            }
                        }
                    }
                }
            }

            // 3.1.2 左右箭头
            .el-carousel__arrow {
                top: 40%;
            }

            // 3.1.3 指示器#B4B4B5
            .el-carousel__indicators {
                margin-top: 20px;

                .el-carousel__indicator {
                    .el-carousel__button {
                        background-color: #B4B4B5;
                        width: 20px;
                    }

                }

                .is-active {
                    .el-carousel__button {
                        background-color: #003abd;
                        width: 30px;
                    }
                }
            }
        }

    }

}





@media (max-width: 1200px) {}

@media (max-width: 960px) {}

@media (max-width: 768px) {}
</style>