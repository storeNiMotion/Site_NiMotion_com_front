<script setup>
import { Search, CircleClose } from '@element-plus/icons-vue'
import { ElMessage } from "element-plus"
import { ref } from "vue"
// import { useCategoryStore } from '@/stores/catagory'         // 使用pinia中产品导航列表
import { useRouter } from "vue-router"            //调用路由

//使用pinia中的数据


//1.搜索业务
const router = useRouter()                      // 调用路由方法
const searchinput = ref('')                     //搜索框iconvalue
const clicksearch = () => {
    // router.replace({path: `/product/search/${searchinput.value}`})         // 跳转路由
    if (searchinput.value) {
        router.replace({path: `/product/search/${searchinput.value}`})         // 跳转路由
    } else {
        ElMessage({type: 'warning', message: 'Please enter keywords'})
    }
}

// 清除输入框内容
const clear = () => {
    searchinput.value = ''
}

</script>

<template>

    <div class="search">
        <div class="search-input">
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
            <el-button type="primary" @click="clicksearch">search</el-button>
        </div>
    </div>

</template>

<style scoped lang='scss'>

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


@media (max-width: 1200px) {


}

@media (max-width: 960px) {


}

@media (max-width: 768px) {

}

</style>