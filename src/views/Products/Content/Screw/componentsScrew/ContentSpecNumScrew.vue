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
        "label": "Model",
        "fixed": true,
        "width": 180
    },
    {
        "key": "bus",
        "label": "Bus",
        "fixed": false,
        "width": 160
    },
    {
        "key": "Rated_voltage",
        "label": "Rated_voltage(VDC)",
        "fixed": false
    },
    {
        "key": "Screw_diameter",
        "label": "Screw_diameter(mm)",
        "fixed": false
    },
    {
        "key": "thrust",
        "label": "Thrust(N)",
        "fixed": false
    },
    {
        "key": "load",
        "label": "Load(N)",
        "fixed": false
    },
    {
        "key": "Thread_lead",
        "label": "Thread_lead(mm)",
        "fixed": false
    },
    {
        "key": "Step_Length",
        "label": "Step_Length@1.8°(mm)",
        "fixed": false
    },
    {
        "key": "Self_locking_force",
        "label": "Self_locking_force(N)",
        "fixed": false
    },
    {
        "key": "encoder",
        "label": "Encoder",
        "fixed": false
    },
    {
        "key": "torque",
        "label": "Torque(N·m)",
        "fixed": false
    },
    {
        "key": "Brake",
        "label": "Brake",
        "fixed": false
    },
    {
        "key": "length",
        "label": "Length(mm)",
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

                    <el-collapse-item title="Model Specifications" name="SpecNum">
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