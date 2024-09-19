<script setup>

import LayoutNav from './LayoutNav/index.vue'
import LayoutHeader from './LayoutHeader/index.vue'
import LayoutFooter from './LayoutFooter/index.vue'
import LayoutContact from './LayoutContact/index.vue'

import { onMounted } from 'vue'


//触发获取导航列表的action
import { useCategoryStore } from '@/stores/catagory'

const CategoryStore = useCategoryStore()
// 
onMounted(() => {
  CategoryStore.getCategory()       // 导航
  CategoryStore.getOneCategory()    // 一级导航
  CategoryStore.getSelectNav()      // 下拉产品导航
})


</script>

<template>
  <div class="nav">
    <LayoutNav />
    <LayoutHeader />
  </div>


  <!-- 添加key,破坏复用机制 强制销毁重建 -->
  <div class="content">
    <RouterView :key="$route.fullPath" />
  </div>
  
  <!-- <RouterView /> -->
  <LayoutFooter :key="$route.fullPath" />
  <LayoutContact />

</template>

<style scoped lang='scss'>
.nav {
  position: fixed;
  z-index: 999;
}

.content {
  padding-top: 100px;
}


@media (max-width: 768px) {
  .content {
    padding-top: 62px;
  }
}


</style>