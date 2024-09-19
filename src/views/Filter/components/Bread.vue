<script setup>


</script>
<template> 
    <!-- 面包屑区域 -->
    <div class="nav-bread">
        <div class="container">
            <div class="bread">
                <a href="">Home</a>
                <span> > </span>
                <RouterLink to="/product/product/">Product</RouterLink>
                <span> > </span>
                <RouterLink to="/product/filter/" class="active">Product Selection</RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>

//面包屑
.nav-bread {
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