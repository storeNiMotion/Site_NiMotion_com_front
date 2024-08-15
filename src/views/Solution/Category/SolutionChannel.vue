<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { getSolutionChannelAPI } from "@/apis/solution"
import { onMounted, ref } from "vue"

import Bread from './components/breadSearch.vue'
// import SearchInput from './components/searchInput.vue'
import Content from './components/content.vue'

//获取数据

</script>

<template>
    <!-- banner区域 -->
    <!-- 面包屑区域 -->
    <Bread />

    <!-- 方案主体 -->
    <Content />
</template>

<style scoped lang='scss'>


</style>