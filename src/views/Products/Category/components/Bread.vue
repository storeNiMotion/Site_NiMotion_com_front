<script setup>
import Search from './Search.vue'                 // 搜索


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
                    <!-- v-if="categoryStoreBread.SelfData.id != 1" -->
                    <div class="bread-item">
                        <span> > </span>
                        <RouterLink class="active" to="/product/">Product</RouterLink>
                    </div>
                </div>
                
                <!-- 搜索 -->
                <Search />
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