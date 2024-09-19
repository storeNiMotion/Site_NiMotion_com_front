<script setup>

import { getSolutionListAPI } from "@/apis/solution"
import { onMounted, ref } from "vue"
import { useRoute, onBeforeRouteUpdate } from "vue-router"   // 引入路由

const route = useRoute()                //调用路由

// 获取数据
// const solutionList = ref([])
const SelfData = ref({})                // 本身数据
const getsolutionList = async (id = route.params.id) => {
    const res = await getSolutionListAPI(id)
    // solutionList.value = res.data
    SelfData.value = res.category[0]
    document.title = SelfData.value.name + ' - NiMotion - Professional motion control service platform'
}

onMounted(() => getsolutionList())
</script>

<template>

    <div class="Solution-panel-nav-bread">
        <div class="container">
            <div class="nav-bread">
                <a href="">Home</a>
                <span> > </span>
                <a href="/solution/">Solution</a>
                <span> > </span>
                <!-- <a href="">{{ SelfData.name }}</a> -->
                <RouterLink :to="`/solution/${SelfData.id}`">{{ SelfData.name }}</RouterLink>
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

    a {
        color: #1d1d1f;
        font-size: 12px;
        line-height: 36px;

        &:hover {
            color: #003abd;
        }
    }
}


@media (max-width: 768px) {}
</style>