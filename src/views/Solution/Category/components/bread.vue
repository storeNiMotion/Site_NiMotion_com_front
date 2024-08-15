<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'

</script>

<template>
    <!-- 面包屑区域 -->
    <div class="Solution-panel-nav-bread">
        <div class="container">
            <div class="nav-bread">
                <a href="">首页</a>
                <span> > </span>
                <a href="">解决方案</a>
            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>

// 2.面包屑
.nav-bread {
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