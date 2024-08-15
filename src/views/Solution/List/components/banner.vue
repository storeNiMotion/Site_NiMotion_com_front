<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { getSolutionListAPI } from "@/apis/solution"
import { onMounted, ref } from "vue"
import { useRoute, onBeforeRouteUpdate } from "vue-router"   // 引入路由

const route = useRoute()                //调用路由

//获取数据
const solutionList = ref([])
const SelfData = ref({})                // 本身数据
const getsolutionList = async(id = route.params.id) => {
    const res = await getSolutionListAPI(id)
    solutionList.value = res.data
    SelfData.value = res.category[0]
}

//切换标签
const activeName = ref('first')
const handleClick = () => {
  console.log(33)
}

onMounted(() => getsolutionList())
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
    img {
        width: 100%;
    }
}


@media (max-width: 768px) {

}

</style>