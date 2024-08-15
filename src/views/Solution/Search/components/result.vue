<script setup>


import { ElMessage, } from "element-plus"
import 'element-plus/theme-chalk/el-message.css'
import { onMounted, ref } from "vue"

import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router"            //调用路由
import { solutionSearchAPI } from "@/apis/search"       // 导入搜索接口


const router = useRouter()                      // 调用路由方法

// 空状态

const isempty = ref(false)

// 一、调用接口
//需注意请求超时问题 待优化
const loading = ref(true)

//1.获取数据 通过路由传入关键词
// 搜索结果列表

const SearchResult_sol = ref([])
const route = useRoute()                        //调用路由
const getSolutionSearch = async (key = route.params.key) => {
    loading.value = true
    const res = await solutionSearchAPI(key)
    SearchResult_sol.value = res.data
    loading.value = false

    if (SearchResult_sol.value.length) {
        isempty.value = false
        // console.log(isempty.value)
    } else {
        isempty.value = true
    }
}


//三、事件处理


//导航守卫：路由参数变化接口重新发送
onBeforeRouteUpdate((to) => {
    // console.log('变化了')
    getSolutionSearch(to.params.key)
})

onMounted(() => {
    getSolutionSearch()
})

</script>
<template>

    <!-- 结果 -->
    <div class="search-result">
        <div class="container">
            <!-- tab标签 -->
            <div class="search-tabs" v-loading="loading">
                <div class="tabs">
                    <el-tabs tab-position="top" class="tabs-item">

                        <el-tab-pane>
                            <template #label>
                                <span class="tabs-label">方案</span>
                            </template>
                            <div class="">
                                <div class="result">
                                    <div class="result-item" v-for="item in SearchResult_sol" :key="item.id">

                                        <div class="pic">
                                            <div class="pic-box">
                                                <RouterLink :to="`/solution/detail/${item.id}`"><img
                                                        v-img-lazy="item.default_image" :alt="item.name"></RouterLink>
                                            </div>
                                        </div>
                                        <div class="detail">
                                            <RouterLink :to="`/solution/detail/${item.id}`">
                                                <h4>{{ item.name }}</h4>
                                            </RouterLink>
                                            <p v-html="item.description"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <el-empty :image-size="200" description="没有搜索到相关内容" v-if="isempty" />
                        </el-tab-pane>
                    </el-tabs>

                </div>
            </div>

        </div>
    </div>

</template>

<style scoped lang='scss'>
// 搜索框
.search-input {
    width: 100vw;

    .search-box {
        display: flex;
        padding: 40px 10px 25px;
        width: 100%;

        .search {
            display: flex;
            align-items: center;
            width: 60%;
            min-width: 680px;

            .input {
                margin-right: 20px;
                height: 50px;
            }

            .button-search {
                width: 100px;
                height: 44px;
            }
        }
    }

}

// 结果
.search-result {
    .search-tabs {
        background-color: #fff;
        margin: 20px 20px;
        padding: 20px 30px;

        .tabs {
            ::v-deep(.el-tabs) {
                .el-tabs__header {
                    // margin-right: 20px;
                }
            }

            .tabs-label {
                font-size: 16px;
                font-weight: 600;
                // color: #333;
            }

            .result {

                // margin: 0 20px;
                h4 {
                    font-size: 25px;
                    font-weight: 500px;
                }

                .result-item {
                    display: flex;
                    padding: 20px 0px;
                    border-bottom: 1px solid #c9c9c9;

                    .pic {
                        max-width: 240px;
                        max-height: 200px;
                        border-radius: 5px;
                        overflow: hidden;

                        .pic-box {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 100%;
                            height: 100%;

                            img {
                                width: 100%;
                                transition: all .3s;
                            }
                        }

                        &:hover {
                            img {
                                transform: scale(1.1);
                            }
                        }
                    }

                    .detail {
                        flex: 1;
                        margin-left: 10px;
                        padding: 10px;
                        background-color: #fff;

                        h4 {
                            color: #404040;
                            font-size: 18px;
                            font-weight: 400;
                        }

                        p {
                            margin-top: 5px;
                            font-size: 14px;
                        }
                    }

                    &:hover {
                        .detail {
                            h4 {
                                color: #003abd;
                            }
                        }

                    }
                }

                .result-item:last-child {
                    border-bottom: none;
                }
            }
        }
    }
}


@media (max-width: 1200px) {}

@media (max-width: 960px) {

    // result
    .search-result {
        .search-tabs {
            .tabs {
                .result {
                    .result-item {

                        .detail {

                            p {
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                            }
                        }

                    }
                }
            }
        }
    }

}

@media (max-width: 768px) {

    // 搜索框
    .search-input {
        width: 100vw;
        margin: 0 10px;

        .search-box {
            display: flex;
            padding: 40px 10px 25px;
            width: 100%;

            .search {
                display: flex;
                align-items: center;
                width: 100%;
                min-width: 100%;

                .input {
                    margin-right: 20px;
                    height: 50px;
                }

                .button-search {
                    margin-right: 30px;
                    width: 100px;
                    height: 44px;
                }
            }
        }

    }

    // result
    .search-result {
        .search-tabs {
            .tabs {
                .result {
                    .result-item {

                        .detail {

                            p {
                                display: none;
                            }
                        }

                    }
                }
            }
        }
    }
}
</style>