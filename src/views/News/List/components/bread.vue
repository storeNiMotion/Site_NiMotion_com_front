<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { getNewsListAPI } from "@/apis/news"
import { onMounted, ref } from "vue"


//获取数据
const NewsList = ref([])

const getNewsList = async() => {
    const res = await getNewsListAPI()
    NewsList.value = res.data

}

//切换标签
const activeName = ref('first')
const handleClick = () => {
//   console.log(33)
}

onMounted(() => getNewsList())
</script>

<template>

    <!-- 面包屑区域 -->
    <div class="Solution-panel-nav-bread">
        <div class="container">
            <div class="nav-bread">
                <a href="">Home</a>
                <span> > </span>
                <a href="/news">News</a>
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



@media (max-width: 1200px) {


}

@media (max-width: 960px) {


}

@media (max-width: 768px) {

}



</style>