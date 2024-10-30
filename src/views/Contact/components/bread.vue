<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { messageAPI } from "@/apis/message"
import { ElMessage, } from "element-plus"
import 'element-plus/theme-chalk/el-message.css'
import { ref, reactive } from "vue"


</script>

<template>

    <!-- 面包屑区域 -->
    <div class="nav-bread">
        <div class="container">
            <a href="">Home</a>
            <span>></span>
            <a href="">Contact Us</a>
        </div>
    </div>

</template>

<style scoped lang='scss'>


//面包屑
.nav-bread {
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
}

</style>