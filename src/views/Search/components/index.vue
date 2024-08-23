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
//需注意请求超时问题 待优化
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

//3.点击搜索 & enter事件
const searchinput = ref('')     //搜索框iconvalue
const clicksearch = () => {
    router.replace({path: `/product/search/${searchinput.value}`})         // 跳转路由
    searchinput.value = ''
}



//二、准备条件对象 => 备用
//1.条件

const iconvalue = ref(null)
const categoryoptions = [
  {
    value: '使用说明书',
    label: '使用说明书',
    icon: 'icon-shiyongshuomingshu1',
  },
  {
    value: '通信手册',
    label: '通信手册',
    icon: 'icon-qianzhengicon',
  },
  {
    value: '2D图纸',
    label: '2D图纸',
    icon: 'icon-dtuzhi',
  },
  {
    value: '3D图纸',
    label: '3D图纸',
    icon: 'icon-dtuzhi1',
  },
  {
    value: '选型手册',
    label: '选型手册',
    icon: 'icon-chanpinshouce',
  },
  {
    value: '软件',
    label: '软件',
    icon: 'icon-ruanjiankaifabao',
  },
]



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
    <!-- banner区域 -->
    <div class="banner-pro">
        <div class="container">
            <!-- <img :src="bannerList.banner" alt=""> -->
            <div class="search-box">
                <div class="search">
                    <el-input
                        v-model="searchinput"
                        class="search-input"
                        placeholder="请输入关键词"
                        :prefix-icon="Search"
                        @keyup.enter="clicksearch"
                        />
                    <el-button type="primary" @click="clicksearch">search</el-button>
                </div>
            </div>

        </div>
    </div>

    <div class="search-panel">
        <div class="container">
            <div class="display-result">
                <h3>Search Results</h3>
            </div>
            <el-empty :image-size="200" description="No relevant content was found" v-if="isempty" />
        </div>
    </div>

    <!-- tab标签 -->
    <div class="search-tabs" v-if="!isempty" v-loading="loading">
        <div class="tabs">
            <el-tabs tab-position="left" class="tabs-item">
                <el-tab-pane>
                    <template #label>
                        <span class="tabs-label">product</span>
                    </template>
                    <div class="container">
                        <div class="search-result">
                            <h4>product</h4>
                            <!-- <el-empty :image-size="200" description="没有搜索到相关内容" v-if="isempty" /> -->
                            <div class="result-item" v-for="item in SearchResult" :key="item.id">
                                <RouterLink :to="`/product/detail/${item.id}`"><h5>{{ item.name }}</h5></RouterLink>
                                <!-- <h5>{{ item.name }}</h5> -->
                                <p>{{ item.description }}</p>
                            </div>
                            
                        </div>
                        
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
    <!-- 结果 -->
    <!-- <div class="search-panel">
        <div class="container">
            <div class="display-result">
                <h3>结果</h3>
                <div class="item-result" id="">
                  <el-card style="max-width: 100%" shadow="never">
                    <el-table :data="tableData" style="width: 100%" height="auto">
                        <el-table-column fixed prop="name" label="标题" width="" />
                        <el-table-column prop="type" label="类型" width="" />
                        <el-table-column prop="size" label="大小" width="" />
                        <el-table-column label="操作" width="">
                            <template #default="scope">
                                <a :href="scope.row.url" target="_blank" class="btn-face" rel="noopener noreferrer">下载</a>
                            </template>
                        </el-table-column>
                    </el-table>
                  </el-card>
                </div>
            </div>
        </div>
    </div> -->
</template>

<style scoped lang='scss'>
// banner
.banner-pro {
    width: 100vw;
    height: 300px;
    background: no-repeat center url(@/assets/images/search.jpg);
    .search-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 300px;
        .search {
            display: flex;
            align-items: center;
            // flex-wrap: wrap;
            // flex: 1;
            // justify-content: space-between;
            // margin: 20px 0;
            width: 40%;
            // min-width: 400px;
            .search-input {
                margin-right: 20px;
            }
        }
    }

}

// 结果-标题
.search-panel {
    padding: 10px 20px;
    background-color: #fff;
    width: 100vw;   //100视窗宽度

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

}

// tab标签
.search-tabs {
    background-color: #fff;
    // margin: 20px 0;
    padding: 10px 20px;

    .tabs {
        ::v-deep(.el-tabs) {
            .el-tabs__header {
                // margin-right: 20px;
            }
        }
        .tabs-label {
            font-size: 16px;
            font-weight: 500;
        }

        .search-result {
            // margin: 0 20px;
            h4 {
                font-size: 25px;
                font-weight: 500px;
            }
            .result-item {
                margin: 20px 10px;
                padding: 20px 0;
                border-bottom: 1px solid #c9c9c9;
                h5 {

                    font-size: 16px;
                    
                }
                p {
                    margin: 10px 0;
                    font-size: 13px;
                }
                &:hover {
                    h5 {
                        color: #003abd;
                    }
                }
            }
        }
    }
}

.search-panel {
    padding: 20px 0;
    background-color: #fff;
    width: 100vw;   //100视窗宽度

    //条件
    .display-require {
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // align-items: center;
        width: 100%;

        h2 {
            font-size: 32px;
            color: #003abd;
        }

        //2.表单
        .item-input {
            padding: 10px 10px;

            // 3.1 重新定义el卡片
            ::v-deep(.el-form) {
                margin-bottom: 30px;
                width: 100%;
                border: none;
                .el-card__body {
                    //padding: 0; //去掉内边距
                    border: none;
                }
                .el-form-item__content {
                    justify-content: center;
                }
            }
        }
    }

}

</style>