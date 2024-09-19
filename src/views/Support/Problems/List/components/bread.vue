<script setup>

</script>

<template>

    <!-- 面包屑区域 -->
    <div class="Support-panel-nav-bread">
        <div class="container">
            <div class="nav-bread">
                <a href="">Home</a>
                <span> > </span>
                <a href="/support">Support</a>
                <span> > </span>
                <a href="/problems" class="active">Technical FAQ</a>
            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>

// 2.面包屑
.nav-bread {
    margin-top: 10px;
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
}

</style>