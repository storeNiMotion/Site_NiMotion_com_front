
<script setup>


import { onMounted, ref } from "vue"

import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router"            //调用路由
import { getSupportProblemSearchAPI } from "@/apis/support"       // 导入搜索接口


// 空状态
const isempty3 = ref(false)


// 一、调用接口

const loading = ref(true)

//1.获取数据 通过路由传入关键词
// 搜索结果列表
const ProblemSearchResult = ref([])

const route = useRoute()                        //调用路由
const getSupportProblemSearchResult = async(key = route.params.key) => {
    loading.value = true
    const res = await getSupportProblemSearchAPI(key)
    ProblemSearchResult.value = res.data

    loading.value = false

    if (ProblemSearchResult.value.length) {
        isempty3.value = false
        // console.log(isempty.value)
    }else{
        isempty3.value = true
    }

}

//三、事件处理


//导航守卫：路由参数变化接口重新发送
onBeforeRouteUpdate((to) => {
    // console.log('变化了')
    getSupportProblemSearchResult(to.params.key)
})

onMounted(() => {
    getSupportProblemSearchResult()
})

</script>
<template> 

    <!-- 结果 -->
    <el-tab-pane>
        <template #label>
            <span class="tabs-label">问答</span>
        </template>
        <div class="">
            <div class="result">
                <div class="result-item" v-for="item in ProblemSearchResult" :key="item.id">

                    <div class="detail">
                        <RouterLink :to="`/support/problems/detail/${item.id}`"><h4>{{ item.name }}</h4></RouterLink>
                        <!-- <p v-html="item.description"></p> -->
                    </div>
                </div>
            </div>
        </div>
        <el-empty :image-size="200" description="没有搜索到相关内容" v-if="isempty3" />
    </el-tab-pane>

</template>

<style scoped lang='scss'>

// 结果

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
}

@media (max-width: 1200px) {


}

@media (max-width: 960px) {
    // result
    .result {
        .result-item {

            .detail {

                p {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                }
            }

        }
    }

}

@media (max-width: 768px) {

    // result
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

</style>