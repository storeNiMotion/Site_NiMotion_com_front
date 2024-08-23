<script setup>

import { getNewsListAPI } from "@/apis/news"
import { onMounted, ref } from "vue"


//获取数据
const NewsList = ref([])

const getNewsList = async () => {
    const res = await getNewsListAPI()
    NewsList.value = res.data
    console.log(NewsList.value);
    document.title = ' 公司新闻 - 立迈胜NiMotion - "智能控制 驱动未来"！'
}

onMounted(() => getNewsList())
</script>

<template>
    <!-- 新闻主体 -->
    <div class="News-panel">
        <div class="container">
            <div class="News-display">
                <el-card style="max-width: 100%" v-for="item in NewsList" :key="item.id">
                    <div class="News-item">
                        <div class="picbox">
                            <!-- <img :src="item.default_image" alt=""> -->
                            <RouterLink :to="`/news/detail/${item.id}`"><img v-img-lazy="item.default_image" alt="">
                            </RouterLink>
                        </div>
                        <div class="info-box">
                            <!-- <h4>{{ item.name }}</h4> -->
                            <RouterLink :to="`/news/detail/${item.id}`">
                                <h4>{{ item.name }}</h4>
                            </RouterLink>
                            <p>{{ item.description }}</p>
                            <!-- <a href="/solution/list" class="btn-face">查看更多</a> -->
                            <div class="sol-more">
                                <!-- <a href="/news/detail" class="btn-face">查看详情</a> -->
                                <RouterLink class="btn-face" :to="`/news/detail/${item.id}`">Details</RouterLink>
                                <span class="date">{{ item.update_time }}</span>
                            </div>
                        </div>

                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>
// 3.方案主体
.News-panel {
    margin-top: 20px;
    padding-bottom: 20px;
    width: 100vw;

    // background-color: rgba(0, 0, 0, 0.70);
    .News-display {
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;

        // 3.1 重新定义el卡片
        ::v-deep(.el-card) {
            margin-bottom: 30px;
            width: 100%;

            .el-card__body {
                //padding: 0; //去掉内边距
                border: none;
            }
        }

        // 3.2 自定义内容样式
        .News-item {
            display: flex;
            width: 100%;
            // 3.2 图片box
            $picbox-height: 280px;

            .picbox {
                display: flex;
                flex: 0 0 33%;
                // width: 35%;
                max-width: $picbox-height;
                height: 180px;

                overflow: hidden;

                a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                }

                img {
                    width: 100%;
                    transition: all .3s;
                }

                &:hover {
                    img {
                        transform: scale(1.05);
                    }
                }
            }

            // 3.2.3 信息box
            .info-box {
                flex: 1;
                margin: 0 0 0 20px;
                padding: 20px 0px;

                h4 {
                    color: #333;
                    font-size: 18px;
                    font-weight: 500;

                    &:hover {
                        color: #003abd;
                    }
                }

                p {
                    margin-top: 20px;
                    color: #1d1d1f;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }

                .sol-more {
                    display: flex;
                    justify-content: space-between;
                    align-items: end;

                    .date {
                        // margin-top: 25px;
                        // margin-right: 12px;
                        padding-right: 10px;
                        color: #5f5f5f;
                        font-size: 14px;
                        text-align: center;
                    }
                }

                .btn-face {
                    display: block;
                    margin-top: 30px;
                    width: 80px;
                    height: 26px;
                    border: 1px solid #003abd;
                    border-radius: 5px;
                    font-size: 12px;
                    color: #003abd;
                    text-align: center;
                    line-height: 26px;

                    &:hover {
                        background-color: #003abd;
                        color: #fff;
                    }
                }
            }
        }
    }
}




@media (max-width: 1200px) {}

@media (max-width: 960px) {}

@media (max-width: 768px) {

    // 3.方案主体
    .News-panel {
        .News-display {

            // 3.2 自定义内容样式
            .News-item {
                flex-direction: column;

                .picbox {
                    flex: 0 0 1;
                    max-width: 100%;
                }

                // 3.2.3 信息box
                .info-box {
                    margin: 0 5px;
                    padding: 10px 0px;

                    h4 {
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                    }
                }
            }
        }
    }
}
</style>