<script setup>

import { ElMessage } from "element-plus"
import { onMounted, ref } from "vue"
import { useRouter } from "vue-router"                              // 引入路由
import { getSolutionChannelAPI } from "@/apis/solution"
import { Search, CircleClose } from '@element-plus/icons-vue'

//获取数据
const solutionList = ref([])
const getsolutionList = async() => {
    const res = await getSolutionChannelAPI()
    solutionList.value = res.data
    console.log(solutionList.value)
    // document.title = ' 解决方案 - 立迈胜NiMotion - "智能控制 驱动未来"！'
}

//3.点击搜索 & enter事件
const router = useRouter()                                          // 调用路由方法
const searchinput = ref('')                                         //搜索框iconvalue
const clicksearch = () => {
    if (searchinput.value) {
        router.replace({path: `/solution/search/${searchinput.value}`})         // 跳转路由
    } else {
        ElMessage({type: 'warning', message: '请输入关键词'})
    }
}

// 清除输入框内容
const clear = () => {
    searchinput.value = ''
}

onMounted(() => getsolutionList())

</script>

<template>

    <div class="display-left">
        <div class="title">
            <h2>Industry Solutions</h2>
            <div class="search-box">
                <div class="search">
                    <el-input
                        v-model="searchinput"
                        class="input"
                        placeholder="Search"
                        
                        @keyup.enter="clicksearch"
                    >
                        <template #append >
                            <el-button :icon="Search" @click="clicksearch" />
                            <el-icon class="el-input__icon" v-if="searchinput" @click="clear"><CircleClose /></el-icon>
                        </template>
                    </el-input>
                </div>
            </div>
        </div>

        <div class="nav-list">
            <el-collapse accordion>
                <el-collapse-item v-for="item in solutionList" :key="item.id" :name="item.id + 1">
                    <template #title>
                        <RouterLink active-class="active" :to="`/solution/${item.id}`">{{ item.name }}</RouterLink>
                    </template>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<style scoped lang='scss'>

/* 左侧导航 */
.display-left {
    margin: 0 0px 0 15px;

    // 头部
    .title {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        width: 100%;
        height: 120px;
        h2 {
            padding: 0 16px;
            background-color: #003abd;
            height: 35px;
            font-size: 16px;
            color: #fff;
            line-height: 35px;
        }
        // 搜索
        .search-box {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            .search {
                display: flex;
                align-items: center;
                width: 100%;

                .input {
                    margin: 0 10px;
                    .el-input__icon {
                        position: absolute;
                        right: 55px;
                        padding:0 0 0 4px;
                        
                        font-size: 18px;
                        cursor: pointer;
                        background-color: #fff;
                    }
                }

            }
        }
    }

    //导航改写
    .nav-list {
        ::v-deep(.el-overlay) {
            position: absolute;
        }
        // 2.1 重新定义折叠面板el样式
        ::v-deep(.el-collapse) {
            .el-collapse-item {
                .el-collapse-item__header { 
                    margin-top: 5px;
                    font-size: 14px;
                    font-weight: 400;
                    a {
                        display: block;
                        padding: 0 15px;
                        width: 100%;
                        height: 100%;
                        text-align: left;
                    }
                    &:hover {
                        color: #fff;
                        background-color: #003abd;
                        a {
                            color: #fff;
                        }
                    }
                }

                // 2.1.3 内容区
                .el-collapse-item__wrap {
                    border: none;
                    .el-collapse-item__content {
                        padding-bottom: 0px;
                    }
                    .nav-item {
                        margin: 5px;
                        border: none;
                        color: #232323;
                        font-size: 14px;
                        font-weight: 400;
                        a {
                            display: block;
                            padding: 2px 20px;
                            width: 100%;
                            height: 100%;
                        }
                        &:hover {
                            color: #003abd;
                            a {
                                color: #003abd;
                                font-weight: 500;

                            }
                            .active {
                                color: #003abd;
                                font-weight: 600;
                            }
                        }
                    }
                }
            }

        }
    }

    // 2.1.2 激活状态
    .active {
        color: #003abd;
        a {
            color: #003abd;
        }
    }
}

@media (max-width: 1200px) {


}

@media (max-width: 960px) {

    .display-left{
        display: none;
    }

}

@media (max-width: 768px) {

}

</style>