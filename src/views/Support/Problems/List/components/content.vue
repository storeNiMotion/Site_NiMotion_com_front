<script setup>
// import { TabsPaneContext } from 'element-plus'
import { Search } from '@element-plus/icons-vue'

import { onMounted, ref } from "vue"
import { getSupportProblemsListAPI } from "@/apis/support"
// import { useRoute, onBeforeRouteUpdate } from "vue-router"   // 引入路由

// const route = useRoute()                //调用路由
//获取数据
const supportProblemsList = ref([])
// const supportProblemstSelfData = ref({})

const getsupportList = async() => {
    const res = await getSupportProblemsListAPI()
    supportProblemsList.value = res.data
    // supportProblemstSelfData.value = res.category[0]
}


onMounted(() => getsupportList())
</script>

<template>

    <!-- 主体 -->
    <div class="Support-panel">
        <div class="container">
            <div class="Support-display">
                <el-card shadow="hover" style="max-width: 100%" v-for="item in supportProblemsList" :key="item.id">
                    <div class="Support-item">
                        <div class="info-box">
                            <RouterLink :to="`/support/problems/detail/${item.id}`">
                                <h4>{{ item.name }}</h4>
                                <span class="date">{{ item.release_time }}</span>
                            </RouterLink>
                            <!-- <h4>【知识问答】一体化电机</h4>
                            <span class="date">2023-12-5</span> -->
                        </div>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>

// 4.主体
.Support-panel {
    margin-top: 20px;
    padding-bottom: 20px;

  .Support-display {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;

    // 3.1 重新定义el卡片
    ::v-deep(.el-card) {
        margin-bottom: 14px;
        width: 100%;

        .el-card__body {
            //padding: 0; //去掉内边距
            border: none;

            // 3.1.1 自定义内容样式
            .Support-item {
                display: flex;

                // 3.2.3 信息box
                .info-box {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    a {
                        display: flex;
                        justify-content: space-between;
                        width: 100%;
                    }
                    h4 {
                        color: #5f5f5f;
                        font-size: 16px;
                        font-weight: 400;
                    }

                    .date {
                        color: #5f5f5f;
                        font-size: 14px;
                        text-align: center;
                    }
                }
            }
        }
        &:hover {
            h4 {
                color: #003abd !important;
            }
            .date {
                color: #003abd !important;
            }
        }
    }

  }
}

</style>