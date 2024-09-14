<script setup>


</script>
<template> 
    <!-- 面包屑区域 -->
    <div class="nav-bread">
        <div class="container">
            <div class="bread">
                <a href="">首页</a>
                <span> > </span>
                <RouterLink to="/product/product/">产品中心</RouterLink>
                <span> > </span>
                <RouterLink to="/product/filter/" class="active">产品选型</RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>

//面包屑
.nav-bread {
    // padding: 10px 0;
    // width: 100vw;
    // height: 36px;

    .bread {
        // height: 100%;
        width: 100%;
        padding: 0 20px;
        height: 36px;

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

}

//内容主体

</style>