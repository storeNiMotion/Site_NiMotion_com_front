<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'

import { ElMessage,  } from "element-plus"
import 'element-plus/theme-chalk/el-message.css'
import { onMounted, ref } from "vue"
// import { useUserStore } from '@/stores/user'    // 导入pinia
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router"            //调用路由
import { searchAPI } from "@/apis/search"       // 导入搜索接口

// const userStore = useUserStore()                // 实例化
const router = useRouter()                      // 调用路由方法

// 空状态
const isempty = ref(false)
// 一、调用接口
//需注意请求超时问题
const loading = ref(true)
//1.获取数据 通过路由传入关键词
const SearchResult = ref([])                    // 搜索结果列表
const route = useRoute()                        //调用路由
const getSearchResult = async(key = route.params.key) => {
    loading.value = true
    const res = await searchAPI(key)
    SearchResult.value = res.data                // 搜索结果数据
    loading.value = false
    if (SearchResult.value.length) {
        isempty.value = false
        // console.log(isempty.value)
    }else{
        isempty.value = true
    }
}

//三、事件处理


//导航守卫：路由参数变化接口重新发送
onBeforeRouteUpdate((to) => {
    // console.log('变化了')
    getSearchResult(to.params.key)
})

onMounted(() => {
    getSearchResult()
})

</script>
<template> 
    <div class="search-box">

        <div class="search-panel">
            
            <div class="head">
                <div class="display-result">
                    <h3>Search Results</h3>
                </div>
                <el-empty :image-size="200" description="No relevant content was found" v-if="isempty" />
            </div>

            <div class="search-result"  v-if="!isempty" v-loading="loading">
                <div class="result-item" v-for="item in SearchResult" :key="item.id">

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
    </div>

</template>

<style scoped lang='scss'>
.search-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;

}

// 结果
.search-panel {
    // margin-top: 20px;
    padding: 10px 20px;
    background-color: #fff;
    // 标题
    .display-result {
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        // border-bottom: 1px solid #9f9f9f;
        h3 {
            padding: 20px 0;
            font-size: 28px;
            color: #282828;
            border-bottom: 1px solid #9f9f9f;
        }
    }
    .search-result {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        .result-item {
            display: flex;
            padding: 20px 0px;
            border-bottom: 1px solid #c9c9c9;
            .pic {
                width: 140px;
                height: 88px;
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

}

@media (max-width: 1200px) {

}

@media (max-width: 960px) {
// 结果
.search-panel {
    .search-result {
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

}

@media (max-width: 768px) {
// 结果
.search-panel {
    .search-result {
        .result-item {
            .detail {

                p {

                    -webkit-line-clamp: 2;

                }
            }

        }
    }

}
}

</style>