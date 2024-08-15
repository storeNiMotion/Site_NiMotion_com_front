<script setup>

import { getSolutionListAPI } from "@/apis/solution"
import { onMounted, ref } from "vue"

import Bread from './components/bread.vue'
import SearchInput from './components/searchInput.vue'
import Content from './components/content.vue'



//获取数据

</script>

<template>
    <!-- banner区域 -->

    <!-- 面包屑区域 -->
    <Bread />
    <SearchInput />
    <!-- 方案主体 -->
    <Content />
    
</template>

<style scoped lang='scss'>


@media (max-width: 768px) {

}

</style>