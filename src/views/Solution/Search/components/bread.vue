<script setup>
import { onMounted, ref } from "vue"
import { useCategoryStore } from '@/stores/catagory'         // 使用pinia中产品导航列表
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router"            //调用路由


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
                    <div class="bread-item">
                        <span> > </span>
                        <RouterLink to="/solution/">Solution</RouterLink>
                    </div>
                    <div class="bread-item">
                        <span> > </span>
                        <RouterLink class="active" to="/solution/search/">Search</RouterLink>
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
        padding: 0 15px;
        .bread-box {
            display: flex;
            // margin-left: 30px;
        }
        // 搜索

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