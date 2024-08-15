<script setup>

// 资料下载

import { watch, onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router"   // 引入路由
import { ElMessage,  } from "element-plus"

import { useUserStore } from '@/stores/user'    // 导入pinia
import { useContentStore } from '@/stores/content'

//使用pinia中的数据
const ContentDownfile = useContentStore()                // 实例化
const userStore = useUserStore()                // 实例化
const router = useRouter()                      // 调用路由方法

// 0.用户登录
const loadfile = () => {
    ElMessage({type: 'error', message: '请先登录'})        // 1.提示用户
}


// 2.处理数据

// 折叠面板
// const activeNames = ref(['spec-1'])     // 默认显示面板


// 2.3 资料下载
const relatedFileHeadList = [
    {
        "key": "name",
        "label": "文件名称",
        "fixed": true,
        "width": 480
    },
    {
        "key": "category",
        "label": "类别",
        "fixed": false,
        "width": ''
    },
    {
        "key": "type",
        "label": "类型",
        "fixed": false,
        "width": ''
    },
    {
        "key": "update_time",
        "label": "更新时间",
        "fixed": false,
        "width": ''
    },
]


// 4.钩子生命周期函数


</script>

<template>
    <div class="product-panel-Downfile">
        <div class="container">
            <div class="Product-spec">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="相关资料下载" name="spec-5">
                        <el-table :data="ContentDownfile.productDetail.related_file" style="width: 100%" height="auto" v-loading="loading" element-loading-text="Loading...">
                            <el-table-column :prop="item.key" :label="item.label" v-for="item in relatedFileHeadList" :key="item.id" :width="item.width" />
                            <el-table-column label="操作" width="">
                                <template #default="scope">
                                    <a :href="scope.row.url" target="_blank" class="btn-face" rel="noopener noreferrer" v-if="userStore.userInfo.token">下载</a>
                                    <span class="btn-face" @click="loadfile" v-else>下载</span>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>
//产品内容
.product-panel-Downfile {
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
                                    .btn-face {             // 按钮
                                        display: block;
                                        // margin:0 15px 0 40px;
                                        padding: 0 5px;
                                        width: 40px;
                                        // height: 26px;
                                        border: 1px solid #003abd;
                                        border-radius: 8px;
                                        cursor: pointer;
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
    .product-panel-Downfile {
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