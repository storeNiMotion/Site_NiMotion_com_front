<script setup>
// 规格参数 => 文字
import { watch, onMounted, ref } from "vue"

// 导入pinia
import { useContentStore } from '@/stores/content'

//使用pinia中的数据
const ContentSpecTxt = useContentStore()                // 实例化

// 2.处理数据

// 折叠面板
const activeNames = ref(['spec-SpecTxt'])     // 默认显示面板

// 2.3技术规格
const specHeadList = [
    {
        "key": "name",
        "label": "Specification",
        "fixed": false,
        "width": 180
    },
    {
        "key": "value",
        "label": "Content",
        "fixed": false,
        "width": ''
    },
]

// 4.钩子生命周期函数


</script>

<template>
  
    <!-- 产品主体 -->
    <div class="product-panel-SpecTxt">
        <div class="container">

            <!-- 02.产品规格 -->
            <div class="Product-spec">
                <el-collapse v-model="activeNames" @change="handleChange">

                    <el-collapse-item title="Technical specifications" name="spec-SpecTxt">
                        <!-- 这里使用文本域content -->
                        <!-- <div v-html="productDetail.content"></div> -->
                        <el-table class="specList" :data="ContentSpecTxt.specListData"  border="true" style="width: 100%" :height="{ 480: ContentSpecTxt.specListData.length > 8 }">
                            <el-table-column 
                                :fixed="item.fixed" 
                                :prop="item.key" 
                                :label="item.label" 
                                v-for="item in specHeadList" 
                                :key="item.id" 
                                :width="item.width"
                             />
                        </el-table>
                    </el-collapse-item>
                </el-collapse>
            </div>

        </div>
    </div>

</template>

<style scoped lang='scss'>

//产品内容
.product-panel-SpecTxt {
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
                        // margin: 10px 0;
                        // padding: 0 10px;
                        .el-table__header {
                            th {
                                .cell { //表头文字
                                    text-align: center; 
                                    font-weight: 500;
                                    // color: #333;
                                }
                            }
                        }
                        .el-table__body-wrapper {
                            tbody {
                                tr {
                                    td:first-child {
                                        .cell { //表内容文字
                                            display: flex;
                                            justify-content: center;
                                            // text-align: center;
                                            font-weight: 500;
                                        }
                                    }
                                }
                                .cell { //表内容文字
                                    display: flex;
                                    // justify-content: center;
                                    // text-align: center;
                                    font-weight: 500;
                                }
                            }
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
    .product-panel-SpecTxt {
        // 02.产品规格
        .Product-spec {
            // 2.1 重新定义折叠面板el样式
            ::v-deep(.el-collapse) {
                .el-collapse-item {
                    // 2.1.1 头部
                    .el-collapse-item__header { 
                        padding: 0 10px;
                        font-size: 16px;
                        font-weight: 650;
                    }
                    // 2.1.2 激活状态

                    // 2.1.3 内容区
                    .el-collapse-item__wrap {
                        border: none;
                        // 2.1.3.2 通用图片
                        .spec-img {
                            margin: 0 auto;
                            padding: 5px;
                            text-align: center;
                        }
                    }
                }

            }
        }

    }

}


@media (max-width: 575px) {

}

</style>