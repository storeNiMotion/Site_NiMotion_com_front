<script setup>

// 组件
import SearchInput from './components/searchInput.vue'
import ResProduct from './components/resProduct.vue'
import ResSolution from './components/resSolution.vue'
import ResTechnology from './components/resTechnology.vue'



</script>
<template> 
    <!-- 搜索框 -->
    <SearchInput />

    <!-- 结果 -->
    <div class="search-result">
        <div class="container">
            <!-- tab标签 -->
            <div class="search-tabs"  v-loading="loading">
                <div class="tabs">
                    <el-tabs tab-position="top" class="tabs-item">
                        <ResProduct />
                        <ResSolution />
                        <ResTechnology />
                    </el-tabs>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>

// 结果
.search-result {
    .search-tabs {
        background-color: #fff;
        margin: 20px 20px;
        padding: 20px 30px;

        .tabs {
            ::v-deep(.el-tabs) {
                .el-tabs__header {
                    // margin-right: 20px;
                }
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

}

</style>