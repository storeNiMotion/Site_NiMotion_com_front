<script setup>
// import { TabsPaneContext } from 'element-plus'
import { Search, CircleClose } from '@element-plus/icons-vue'

import { onMounted, ref } from "vue"
import { getSupportProblemsListAPI } from "@/apis/support"
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router"   // 引入路由


// const route = useRoute()                //调用路由
//获取数据


//三、事件处理
// 1.输入框内容回显
const route = useRoute()                     //调用路由
const display = () => {
    searchinput.value = route.params.key
}

//3.点击搜索 & enter事件
const router = useRouter()                      // 调用路由方法

const searchinput = ref('')     //搜索框iconvalue
const clicksearch = () => {
    router.replace({path: `/search/${searchinput.value}`})         // 跳转路由
    // searchinput.value = ''
}

// 清除输入框内容
const clear = () => {
    searchinput.value = ''
}

onMounted(() => display())
</script>

<template>

    <!-- 搜索区域 -->
    <div class="search-input">
        <div class="container">
            <div class="search-box">
                <div class="search">
                    <el-input
                        v-model="searchinput"
                        class="input"
                        placeholder="Keywords"
                        :prefix-icon="Search"
                        @keyup.enter="clicksearch"
                    >
                        <template #suffix >
                            <el-icon class="el-input__icon" v-if="searchinput" @click="clear"><CircleClose /></el-icon>
                        </template>
                    </el-input>
                    <el-button class="button-search" type="primary" @click="clicksearch">search</el-button>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>

// 2.搜索区
.search-input {
    // margin-top: 20px;
    width: 100vw;
    .search-box {
        display: flex;
        padding: 20px 10px;
        width: 100%;
        .search {
            display: flex;
            align-items: center;
            width: 60%;
            min-width: 680px;
            .input {
                margin-right: 20px;
                height: 50px;
                .el-input__icon {
                    font-size: 20px;
                    cursor: pointer;
                }
            }
            .button-search {
                width: 100px;
                height: 44px;
            }
        }
    }
}

@media (max-width: 1200px) {


}

@media (max-width: 960px) {
    // result


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
 
}

</style>