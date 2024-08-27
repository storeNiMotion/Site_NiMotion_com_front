<script setup>

import { onMounted, ref } from "vue"
import { useCategoryStore } from '@/stores/catagory'         // 使用pinia中产品导航列表
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router"            //调用路由

//使用pinia中的数据
const categoryStoreBread = useCategoryStore()

//1.搜索业务
const router = useRouter()                      // 调用路由方法
const searchinput = ref('')                     //搜索框iconvalue
const clicksearch = () => {
    router.replace({path: `/product/search/${searchinput.value}`})         // 跳转路由
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
                        <RouterLink to="/">Home</RouterLink>
                    </div>
                    <!-- v-if="categoryStoreBread.SelfData.id != 1" -->
                    <div class="bread-item">
                        <span> > </span>
                        <RouterLink to="/product/1/">Products</RouterLink>
                    </div>
                    <div class="bread-item">
                        <span> > </span>
                        <RouterLink class="active" :to="`/product/${categoryStoreBread.SelfData.id}`">{{ categoryStoreBread.SelfData.name }}</RouterLink>
                    </div>
                </div>
                <div class="search">
                    <div class="search-input">
                        <el-input
                            v-model="searchinput"
                            class="input"
                            placeholder="Keywords"
                            :prefix-icon="Search"
                            @keyup.enter="clicksearch"
                            />
                        <el-button type="primary" @click="clicksearch">Search</el-button>
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