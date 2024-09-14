<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'

import { ElMessage,  } from "element-plus"
import { Delete } from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/el-message.css'
import { onMounted, ref } from "vue"
import { useFilterProductStore } from '@/stores/filter'    // 导入pinia
import { useRouter } from "vue-router"            //调用路由 => “方法”

const FilterProduct = useFilterProductStore()                // 实例化
const router = useRouter()                      // 调用路由方法

// 结果总数
const Num = ref(0)
Num.value = FilterProduct.getFilterProductList.length

//需注意请求超时问题
const loading = ref(true)
//1.get请求获取前10条 => Done


//2.结果对象
const tableData = ref([])
tableData.value = FilterProduct.getFilterProductList

onMounted(() => {
    // getdata()
    // FilterProduct.getFilterProduct(sendData.value)
})

</script>
<template> 
    <!-- 结果 -->
    <div class="download-panel">
        <div class="container">
            <div class="display-result">
                <h3> {{ Num }}条结果</h3>
                <div class="item-result" id="">
                  <el-card style="max-width: 100%" shadow="never">
                    <el-table :data="tableData" style="width: 100%" height="auto"  >
                        <el-table-column fixed prop="number" label="型号" width="" />
                        <el-table-column prop="bus" label="通信" width="" />
                        <el-table-column prop="Rated_voltage" label="电压" width="" />
                        <!-- <el-table-column prop="action" label="操作" width="" /> -->
                        <el-table-column label="操作" width="">
                            <template #default="scope">
                                <a :href="scope.row.url" target="_blank" class="btn-face" rel="noopener noreferrer">下载</a>
                            </template>
                        </el-table-column>
                    </el-table>
                  </el-card>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>

// 结果
.download-panel {
    padding: 20px 0;
    background-color: #fff;
    width: 100vw;   //100视窗宽度

    //条件
    .display-result {
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;

        h3 {
            font-size: 28px;
            color: #282828;
        }

        //2.表
        .item-result {
            margin-top: 20px;
            padding: 10px 10px;

            // 3.1 重新定义el卡片
            ::v-deep(.el-card) {
                border: none;
                .el-card__body {
                    padding: 0; //去掉内边距
                    border: none;
                    // 2.1.3.1 重新定义表格el
                    .el-table {
                        .el-table__header {
                            th {
                                border-bottom: 2px solid #ebeef5;
                                .cell { //表头文字
                                    text-align: center; 
                                    font-size: 15px;
                                    font-weight: 500;
                                    
                                }
                            }
                        }
                        .el-table__body-wrapper {
                            tbody {
                                .cell { //表内容文字
                                    display: flex;
                                    justify-content: center;
                                    text-align: center;
                                    font-weight: 500;
                                    .btn-face {
                                        display: block;
                                        // margin:0 15px 0 40px;
                                        padding: 0 5px;
                                        width: 40px;
                                        // height: 26px;
                                        border: 1px solid #003abd;
                                        border-radius: 8px;
                                        // background-color: #003abd;
                                        font-size: 12px;
                                        color: #003abd;
                                        text-align: center;
                                        line-height: 26px;
                                        &:hover {
                                            background-color: #003abd;
                                            color: #fff;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

            }

        }
    }

}
</style>