<script setup>


</script>
<template> 
    <!-- 面包屑区域 -->
    <div class="nav-bread">
        <div class="container">
            <div class="bread">
                <a href="/">Home</a>
                <span> > </span>
                <a href="/download">Download Center</a>
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>

//面包屑
.nav-bread {
    margin-top: 10px;
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