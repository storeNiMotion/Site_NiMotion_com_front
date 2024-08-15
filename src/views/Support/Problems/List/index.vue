<script setup>
// import { TabsPaneContext } from 'element-plus'
import { Search } from '@element-plus/icons-vue'

import { onMounted, ref } from "vue"

// import { useRoute, onBeforeRouteUpdate } from "vue-router"   // 引入路由

import Bread from './components/bread.vue'
import SearchInput from './components/searchInput.vue'
import Content from './components/content.vue'


</script>

<template>

    <!-- 面包屑区域 -->
    <Bread />
    <!-- 搜索区域 -->
    <SearchInput />
    <!-- 主体 -->
    <Content />
</template>

<style scoped lang='scss'>

</style>