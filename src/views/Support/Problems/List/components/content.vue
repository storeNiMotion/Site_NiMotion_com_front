<script setup>
import { onMounted, ref } from "vue"
import { getSupportProblemsListAPI } from "@/apis/support"


// 获取数据
const supportProblemsList = ref([])
const pages = ref(1)                            // 页码
const pageSizes = ref(20)                       // 每页条数
const total = ref(0)                            // 总数

const getsupportList = async(page=pages.value, pageSize=pageSizes.value) => {
    const res = await getSupportProblemsListAPI(page, pageSize)
    supportProblemsList.value = res.data
    total.value = res.totalCnt
}

// 页码跳转
const prev = (number) => {
    pages.value = number
    getsupportList()
}

const next = (number) => {
    pages.value = number
    getsupportList()
}

const change = (number) => {
    pages.value = number
    getsupportList()
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
                        </div>
                    </div>
                </el-card>
            </div>
            <el-pagination 
                background 
                layout="prev, pager, next" 
                :total="total" 
                :pager-count="11" 
                :page-size="pageSizes" 
                hide-on-single-page="true"
                @prev-click="prev"
                @next-click="next"
                @change="change"
                class="pagination"
             />
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

  // 页码
  .pagination {
    display: flex;
    justify-content: center;
  }
}

</style>