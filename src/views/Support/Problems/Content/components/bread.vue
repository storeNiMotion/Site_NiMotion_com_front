<script setup>
// import { TabsPaneContext } from 'element-plus'
import { Calendar, Search } from '@element-plus/icons-vue'
import { getSupportProblemsDetailAPI } from "@/apis/support"
import { onMounted, ref } from "vue"
import { useRoute, onBeforeRouteUpdate } from "vue-router"   // 引入路由

const route = useRoute()                //调用路由
// 1.获取数据
const supportProblemsDetail = ref({})
const supportProblemsList = ref({})
const getsupportProblemsDetail = async(id = route.params.id) => {
    const res = await getSupportProblemsDetailAPI(id)
    supportProblemsDetail.value = res.data[0]
    supportProblemsList.value = res.category[0]
    document.title = supportProblemsDetail.value.name + ' - 立迈胜NiMotion - "智能控制 驱动未来"！'

}


onMounted(() => getsupportProblemsDetail())
</script>

<template>
    <!-- 面包屑 -->
    <div class="nav-bread">
        <div class="container">
            <div class="bread">
                <div class="bread-box">
                    <div class="bread-item">
                        <RouterLink to="/">首页</RouterLink>
                    </div>
                    
                    <div class="bread-item">
                        <span> > </span>
                        <RouterLink to="/support/">服务支持</RouterLink>
                    </div>
                    <div class="bread-item">
                        <span> > </span>
                        <RouterLink :to="`/${supportProblemsList.router}`">{{ supportProblemsList.name }}</RouterLink>
                    </div>
                    <div class="bread-item">
                        <span> > </span>
                        <span class="active">{{ supportProblemsDetail.name }}</span>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>
//面包屑
.nav-bread {
    padding: 15px 0;
    width: 100vw;
    // height: 36px;
    .bread {
        display: flex;
        justify-content: space-between;
        padding-right: 20px;
        padding: 0 10px;
        .bread-box {
            display: flex;
            // margin-left: 30px;
        }

    }

    a {
        color: #1d1d1f;
        font-size: 12px;
        // line-height: 36px;
        &:hover {
            color: #003abd;
        }
    }
    .active {
        color: #003abd;
    }
}


@media (max-width: 1200px) {


}

@media (max-width: 960px) {
    //面包屑
    .nav-bread {
        display: none;
    }

}

@media (max-width: 768px) {

}

</style>