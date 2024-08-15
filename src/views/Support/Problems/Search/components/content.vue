<script setup>
// import { TabsPaneContext } from 'element-plus'
import { Search } from '@element-plus/icons-vue'

import { onMounted, ref } from "vue"
import { getSupportProblemSearchAPI } from "@/apis/support"
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router"            //调用路由

const route = useRoute()                //调用路由

//获取数据

const isempty = ref(false)          // 空状态
const loading = ref(true)
const supportList = ref([])

const getsupportList = async(key = route.params.key) => {
    loading.value = true
    const res = await getSupportProblemSearchAPI(key)
    supportList.value = res.data
    loading.value = false

    if (supportList.value.length) {
        isempty.value = false
        // console.log(isempty.value)
    }else{
        isempty.value = true
    }

}

//搜索

onMounted(() => getsupportList())
</script>

<template>

    <!-- 主体 -->
    <div class="Support-panel">
        <div class="container">
            <div class="Support-display" v-loading="loading">
                <el-card shadow="hover" style="max-width: 100%" v-for="item in supportList" :key="item.id">
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
            <el-empty :image-size="200" description="没有搜索到相关内容" v-if="isempty" />
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