<script setup>
// 规格型号

import { watch, onMounted, ref } from "vue"

// 导入pinia
import { useContentStore } from '@/stores/content'

//使用pinia中的数据
const ContentSpecNum = useContentStore()                // 实例化

// 2.处理数据

// 折叠面板
const activeNames = ref(['SpecNum'])     // 默认显示面板
// 2.2 型号规格
const numberHeadList = [                // 型号表头
    {
        "key": "number",
        "label": "型号",
        "fixed": true,
        "width": 180
    },
    {
        "key": "bus",
        "label": "通信",
        "fixed": false,
        "width": 160
    },
    {
        "key": "Rated_voltage",
        "label": "额定电压(VDC)",
        "fixed": false
    },
    {
        "key": "Screw_diameter",
        "label": "丝杆直径(mm)",
        "fixed": false
    },
    {
        "key": "thrust",
        "label": "推力(N)",
        "fixed": false
    },
    {
        "key": "load",
        "label": "负载(N)",
        "fixed": false
    },
    {
        "key": "Thread_lead",
        "label": "螺纹导程(mm)",
        "fixed": false
    },
    {
        "key": "Step_Length",
        "label": "步长@1.8°(mm)",
        "fixed": false
    },
    {
        "key": "Self_locking_force",
        "label": "自锁力(N)",
        "fixed": false
    },
    {
        "key": "encoder",
        "label": "集成编码器",
        "fixed": false
    },
    {
        "key": "torque",
        "label": "保持力矩(N·m)",
        "fixed": false
    },
    {
        "key": "Brake",
        "label": "制动器",
        "fixed": false
    },
    {
        "key": "length",
        "label": "机身长度(mm)",
        "fixed": false
    },

]


// 4.钩子生命周期函数

</script>

<template>
  
    <!-- 产品主体 -->
    <div class="product-panel-SpecNum">
        <div class="container">

            <!-- 02.产品规格 -->
            <div class="Product-spec">
                <el-collapse v-model="activeNames" @change="handleChange">

                    <el-collapse-item title="型号规格" name="SpecNum">
                        <el-table :data="ContentSpecNum.numberScrewSpecData" border="true" style="width: 100%" >
                            <el-table-column 
                            :fixed="item.fixed" 
                            :prop="item.key" 
                            :label="item.label" 
                            v-for="item in numberHeadList" 
                            :key="item.id" 
                            :width="item.width"
                            />
                        </el-table>
                        <!-- 备注 -->
                        <div class="note"><p>{{ ContentSpecNum.productScrewDetail.note }}</p></div>
                    </el-collapse-item>

                </el-collapse>
            </div>

        </div>
    </div>

</template>

<style scoped lang='scss'>

//产品内容
.product-panel-SpecNum {
    width: 100vw;
    background-color: #fff;
    // padding-bottom: 30px;

    // 02.产品规格
    .Product-spec {
        // margin-bottom: 10px;
        padding: 0 15px;
        // 2.1 重新定义折叠面板el样式
        ::v-deep .el-collapse {
            border: none; // 去掉边框
            .el-collapse-item {
                // 2.1.1 头部
                .el-collapse-item__header { 
                    margin-top: 5px;
                    padding: 0 30px;
                    background-color:#f2f3f4;
                    border: none;
                    font-weight: 600;
                    &:hover {
                        background-color: #b5c6ee;
                        color: #003abd;
                    }
                }
                // 2.1.2 激活状态
                .is-active {
                    background-color: #b5c6ee;
                    color: #003abd;
                }
                // 2.1.3 内容区
                .el-collapse-item__wrap {
                    border: none;
                    padding: 10px;
                    // 2.1.3.1 重新定义表格el
                    .el-table {
                        .el-table__header {
                            th {
                                .cell { //表头文字
                                    text-align: center; 
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
                                }
                            }
                        }
                    }
                    //备注信息
                    .note {
                        position: relative;
                        top: 0px;
                        margin-top: 6px;
                        padding: 0 14px;
                        // margin: 10px 0;
                        p {
                            color: #333;
                            font-size: 12px;
                        }
                    }

                    // 2.1.3.3 技术规格
                    .specList {
                        .el-table__body-wrapper {
                            tbody {
                                .cell { //表内容文字
                                    text-align: left;
                                    font-weight: 500;
                                }
                            }
                        }
                    }
                }
            }

        }
    }

}


@media (max-width: 960px) {

}

@media (max-width: 768px) {

}


@media (max-width: 575px) {
}

</style>