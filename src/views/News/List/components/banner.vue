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
    <!-- banner区域 -->
    <!-- <div class="banner-pro">
        <div class="">
            <img src="@/assets/uploads/banner1.png" alt="">
        </div>
    </div> -->

</template>

<style scoped lang='scss'>
// 1.banner
.banner-pro {
    // height: 260px;
    // background-color: #F5F5F5;
    // background-image: url(../images/banner1.png);
    img {
        width: 100%;
    }
}



@media (max-width: 1200px) {


}

@media (max-width: 960px) {


}

@media (max-width: 768px) {

}



</style>