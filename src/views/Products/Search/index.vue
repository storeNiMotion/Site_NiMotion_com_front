<script setup>

import BreadNav from './components/bread.vue'
import LeftNav from './components/leftNav.vue'
import List from './components/searchResult.vue'


</script>

<template>
    <!-- banner区域 -->

    <!-- 面包屑区域 -->
    <BreadNav />

    <!-- 产品主体 -->
    <div class="Product-panel">
        <div class="container">
            <div class="Product-display">
                <LeftNav />
                <List />
            </div>

        </div>
    </div>

</template>

<style scoped lang='scss'>

.Product-panel {
    margin: 20px 10px;
    width: 100vw;

  .Product-display {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    /* 产品左侧导航 */

    /* 产品右侧列表 */

  }

}

@media (max-width: 1200px) {

}

@media (max-width: 960px) {


}

@media (max-width: 768px) {

}


</style>