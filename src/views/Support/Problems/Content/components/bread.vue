<script setup>
// import { TabsPaneContext } from 'element-plus'
import { Calendar, Search } from '@element-plus/icons-vue'
import { getSupportProblemsDetailAPI } from "@/apis/support"
import { computed, onMounted, ref } from "vue"
import { useRoute, onBeforeRouteUpdate } from "vue-router"   // 引入路由

const route = useRoute()                //调用路由
// 1.获取数据
const supportProblemsDetail = ref({})
const supportProblemsList = ref({})
const getsupportProblemsDetail = async(id = route.params.id) => {
    const res = await getSupportProblemsDetailAPI(id)
    supportProblemsDetail.value = res.data[0].name
    supportProblemsList.value = res.category[0]
    document.title = supportProblemsDetail.value.name + ' - 立迈胜NiMotion - "智能控制 驱动未来"！'

}

const shortText = computed(() => {
  if (supportProblemsDetail.value.length > 80) {
    return supportProblemsDetail.value.slice(0, 80) + '...';
  }
  return supportProblemsDetail.value
})


onMounted(() => getsupportProblemsDetail())
</script>

<template>
    <!-- 面包屑 -->
    <div class="nav-bread">
        <div class="container">
            <div class="bread">
                <div class="bread-box">
                    <div class="bread-item">
                        <RouterLink to="/">Home</RouterLink>
                    </div>
                    
                    <div class="bread-item">
                        <span>&nbsp; > &nbsp;</span>
                        <RouterLink to="/support/">Support</RouterLink>
                    </div>
                    <div class="bread-item">
                        <span>&nbsp; > &nbsp;</span>
                        <RouterLink :to="`/${supportProblemsList.router}`">{{ supportProblemsList.name }}</RouterLink>
                    </div>
                    <div class="bread-item">
                        <span>&nbsp; > &nbsp;</span>
                        <span class="active">{{ shortText }}</span>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>
//面包屑
.nav-bread {
    margin-top: 10px;
    padding: 15px 0;
    width: 100vw;
    // height: 36px;
    .bread {
        display: flex;
        justify-content: center;
        // padding-right: 20px;
        padding: 0 10px;
        .bread-box {
            display: flex;
            width: 880px;
            height: 100%;
            overflow: hidden;
            .bread-item {
                display: flex;
                // flex: 1;
                align-items: center;
                // max-width: 600px;
                height: 100%;
                overflow: hidden;
            }
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