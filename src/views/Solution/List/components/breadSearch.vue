<script setup>
import { onMounted, ref } from "vue"
import { getSolutionListAPI } from "@/apis/solution"
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router"            //调用路由

const route = useRoute()                //调用路由

// 获取数据
// const solutionList = ref([])
const SelfData = ref({})                // 本身数据
const getsolutionList = async(id = route.params.id) => {
    const res = await getSolutionListAPI(id)
    // solutionList.value = res.data
    SelfData.value = res.category[0]
}


//1.搜索业务
const router = useRouter()                      // 调用路由方法
const searchinput = ref('')                     //搜索框iconvalue
const clicksearch = () => {
    router.replace({path: `/solution/search/${searchinput.value}`})         // 跳转路由
    searchinput.value = ''
}


onMounted(() => getsolutionList())

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
                    <div class="bread-item" >
                        <span> > </span>
                        
                        <RouterLink to="/solution/">Solution</RouterLink>
                    </div>
                    <div class="bread-item">
                        <span> > </span>
                        <RouterLink :to="`/solution/list/${SelfData.id}`">{{ SelfData.name }}</RouterLink>
                    </div>
                </div>
                <div class="search">
                    <div class="search-input">
                        <el-input
                            v-model="searchinput"
                            class="input"
                            placeholder="Keyword"
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