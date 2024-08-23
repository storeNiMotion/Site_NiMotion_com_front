
<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'

import { ElMessage,  } from "element-plus"
import 'element-plus/theme-chalk/el-message.css'
import { onMounted, ref } from "vue"
// import { useUserStore } from '@/stores/user'    // 导入pinia
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router"            //调用路由
import { allsearchAPI } from "@/apis/search"       // 导入搜索接口

// const userStore = useUserStore()                // 实例化
const router = useRouter()                      // 调用路由方法

// 空状态
const isempty1 = ref(false)


// 一、调用接口
//需注意请求超时问题 待优化
const loading = ref(true)

//1.获取数据 通过路由传入关键词
// 搜索结果列表
const SearchResult_pro = ref([])

const route = useRoute()                        //调用路由
const getAllSearchResult = async(key = route.params.key) => {
    loading.value = true
    const res = await allsearchAPI(key)
    SearchResult_pro.value = res.pro_data

    loading.value = false

    if (SearchResult_pro.value.length) {
        isempty1.value = false
        // console.log(isempty.value)
    }else{
        isempty1.value = true
    }

}

//三、事件处理


//导航守卫：路由参数变化接口重新发送
onBeforeRouteUpdate((to) => {
    // console.log('变化了')
    getAllSearchResult(to.params.key)
})

onMounted(() => {
    getAllSearchResult()
})

</script>
<template> 

    <!-- 结果 -->
    <el-tab-pane>
        <template #label>
            <span class="tabs-label">product</span>
        </template>
        <div class="">
            <div class="result">
                <div class="result-item" v-for="item in SearchResult_pro" :key="item.id">

                    <div class="pic">
                        <div class="pic-box">
                            <RouterLink :to="`/product/${item.router}/detail/${item.id}`"><img v-img-lazy="item.default_image" :alt="item.name"></RouterLink>
                        </div>
                    </div>
                    <div class="detail">
                        <RouterLink :to="`/product/${item.router}/detail/${item.id}`"><h4>{{ item.name }}</h4></RouterLink>
                        <p v-html="item.description"></p>
                    </div>
                </div>
            </div>
        </div>
        <el-empty :image-size="200" description="No relevant content was found" v-if="isempty1" />
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
        border-bottom:none;
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