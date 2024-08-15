<script setup>
import { Search, CircleClose } from '@element-plus/icons-vue'
import { onMounted, ref } from "vue"
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router"            //调用路由

const route = useRoute()                //调用路由

// 获取数据

//1.搜索业务
const router = useRouter()                      // 调用路由方法
const searchinput = ref('')                     //搜索框iconvalue
const clicksearch = () => {
    router.replace({path: `/solution/search/${searchinput.value}`})         // 跳转路由
    // searchinput.value = ''
}

// 清除输入框内容
const clear = () => {
    searchinput.value = ''
}


</script>

<template>
    <!-- 面包屑区域 -->
    <div class="nav-bread">
        <div class="container">
            <div class="bread">
                <div class="bread-box">
                    <div class="bread-item">
                        <RouterLink to="/">首页</RouterLink>
                    </div>
                    <div class="bread-item" >
                        <span> > </span>
                        
                        <RouterLink to="/solution/">解决方案</RouterLink>
                    </div>
                </div>
                <div class="search">
                    <div class="search-input">
                        <el-input
                            v-model="searchinput"
                            class="input"
                            placeholder="请输入关键词"
                            :prefix-icon="Search"
                            @keyup.enter="clicksearch"
                            >
                            <template #suffix >
                                <el-icon class="el-input__icon" v-if="searchinput" @click="clear"><CircleClose /></el-icon>
                            </template>
                        </el-input>
                        <el-button type="primary" @click="clicksearch">搜索</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>

//面包屑
.nav-bread {
    padding: 10px 0;
    width: 100vw;
    height: 36px;
    .bread {
        display: flex;
        justify-content: space-between;
        padding-right: 20px;
        .bread-box {
            display: flex;
            margin-left: 30px;
        }
        // 搜索
        .search {
            flex: 1;
            display: flex;
            justify-content: end;
            align-items: center;
            // width: 30%;
            .search-input {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 30%;
                // min-width: 400px;
                .input {
                    margin-right: 20px;
                    .el-input__icon {
                        font-size: 20px;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    a {
        color: #1d1d1f;
        font-size: 12px;
        line-height: 36px;
        &:hover {
            color: #003abd;
        }
    }
    .active {
        color: #003abd;
    }
}


@media (max-width: 1200px) {


}

@media (max-width: 960px) {
    //面包屑
    .nav-bread {
        display: none;
    }

}

@media (max-width: 768px) {

}

</style>