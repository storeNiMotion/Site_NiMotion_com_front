<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { getSolutionListAPI } from "@/apis/solution"
import { onMounted, ref } from "vue"
import { useRoute, onBeforeRouteUpdate } from "vue-router"   // 引入路由

const route = useRoute()                //调用路由

//获取数据
const solutionList = ref([])
// const SelfData = ref({})                // 本身数据
const getsolutionList = async (id = route.params.id) => {
    const res = await getSolutionListAPI(id)
    solutionList.value = res.data
    // SelfData.value = res.category[0]
}

//切换标签


onMounted(() => getsolutionList())
</script>

<template>
    <!-- 方案主体 -->
    <div class="Solution-panel">
        <div class="container">
            <div class="Solution-display">
                <el-card style="max-width: 100%" v-for="item in solutionList" :key="item.id">
                    <div class="solution-item">
                        <div class="picbox">
                            <!-- <img v-img-lazy="item.default_image" alt=""> -->
                            <RouterLink :to="`/solution/detail/${item.id}`"><img v-img-lazy="item.default_image" alt="">
                            </RouterLink>
                        </div>
                        <div class="info-box">
                            <!-- <h4>{{ item.name }}</h4> -->
                            <RouterLink :to="`/solution/detail/${item.id}`">
                                <h4>{{ item.name }}</h4>
                            </RouterLink>
                            <p>{{ item.description }}</p>
                            <!-- <a href="/solution/list" class="btn-face">查看更多</a> -->
                            <div class="sol-more">
                                <!-- <a href="/solution/detail" class="btn-face">查看更多</a> -->
                                <RouterLink class="btn-face" :to="`/solution/detail/${item.id}`">查看详情</RouterLink>
                                <span class="date">{{ item.release_time }}</span>
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
.Solution-panel {
    margin-top: 20px;
    padding-bottom: 20px;
    width: 100vw;

    // background-color: rgba(0, 0, 0, 0.70);
    .Solution-display {
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;

        // 3.1 重新定义el卡片
        ::v-deep(.el-card) {
            margin-bottom: 30px;
            //padding: 0px 20px; //去掉内边距
            width: 100%;

            .el-card__body {
                padding: 0px 20px; //去掉内边距
                border: none;
            }
        }

        // 3.2 自定义内容样式
        .solution-item {
            display: flex;
            width: 100%;
            // 3.2 图片box
            $picbox-height: 280px;

            .picbox {
                display: flex;
                flex: 0 0 33%;
                justify-content: center;
                // width: 32%;
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
                display: flex;
                flex-direction: column;
                justify-content: center;
                // align-items: center;
                flex: 1;
                margin: 10px 0 0 20px;
                padding: 20px 0px;
                height: 100%;


                h4 {
                    color: #333;
                    font-size: 18px;
                    font-weight: 500;

                    &:hover {
                        color: #003abd;
                    }
                }

                p {
                    margin-top: 15px;
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
                    margin-top: 20px;
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
    .Solution-panel {
        .Solution-display {

            // 3.2 自定义内容样式
            .solution-item {
                flex-direction: column;

                .picbox {
                    flex: 0 0 1;
                    margin-top: 20px;
                    width: 100%;
                    max-width: 100%;
                }

                // 3.2.3 信息box
                .info-box {
                    margin: 0 5px;
                    margin-bottom: 10px;
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