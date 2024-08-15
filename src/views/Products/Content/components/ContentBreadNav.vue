<script setup>

// 次导航

import { watch, onMounted, ref } from "vue"
import { useContentStore } from '@/stores/content'

//使用pinia中的数据
const ContentBread = useContentStore()                // 实例化

</script>

<template>
    <!-- 面包屑区域 -->
    <div class="product-panel-nav-bread">
        <div class="container">
            <div class="nav-bread">
                <RouterLink to="/">首页</RouterLink>
                <span> > </span>
                <RouterLink to="/product/1">产品中心</RouterLink>
                <span> > </span>
                <RouterLink :to="`/product/list/${ ContentBread.productDetail.category }`">{{ ContentBread.productDetail.category_name }}</RouterLink>
                <span> > </span>
                <span class="active">{{ ContentBread.productDetail.name }}</span>
            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>
//面包屑
.nav-bread {
    width: 100vw;
    padding: 0 20px;
    height: 36px;
    // background-color: #f2f3f4;
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

@media (max-width: 960px) {
    //面包屑
    .nav-bread {
        display: none;
    }

}

@media (max-width: 768px) {

}


@media (max-width: 575px) {

}

</style>