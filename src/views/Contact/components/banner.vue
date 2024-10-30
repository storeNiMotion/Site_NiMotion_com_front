<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { messageAPI } from "@/apis/message"
import { ElMessage, } from "element-plus"
import 'element-plus/theme-chalk/el-message.css'
import { ref, reactive } from "vue"


</script>

<template>
    <!-- banner区域 -->
    <div class="banner-pro">
        <div class="">
            <img src="https://www.nimotion.cn/static/images/banner/Contact Us.webp" alt="">
        </div>
    </div>

</template>

<style scoped lang='scss'>
// banner
.banner-pro {
    img {
        width: 100%;
    }
}


</style>