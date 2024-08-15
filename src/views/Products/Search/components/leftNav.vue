<script setup>

import { useCategoryStore } from '@/stores/catagory'         // 使用pinia中产品导航列表
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router"   // 引入路由

//使用pinia中的数据
const categoryStore = useCategoryStore()


const router = useRouter()                                              // 调用路由方法
//导航守卫：路由参数变化接口重新发送
onBeforeRouteUpdate((to) => {
    console.log(to);
    // getSearchResult(to.params.key)
})

</script>

<template>

    <div class="Product-display-left">
        <div class="Product-select">
            <h2>产品中心</h2>
            <div class="Product-select-btn">
                <a href="" class="btn-line">产品选型</a>
            </div>
        </div>

        <div class="Product-nav-list">
            <el-collapse accordion>
                <el-collapse-item v-for="item in categoryStore.getSelectCategoryList" :key="item.id" :name="item.id + 1">
                    <template #title>
                        <RouterLink :to="`/product/${item.id}`">{{ item.name }}</RouterLink>
                    </template>
                    <div class="nav-item" v-for="i in item.category" :key="i.id">
                        <RouterLink active-class="active" :to="`/product/list/${i.id}`">{{i.name}}</RouterLink>
                    </div>
                </el-collapse-item>

            </el-collapse>
        </div>
    </div>

</template>

<style scoped lang='scss'>

/* 产品左侧导航 */
.Product-display-left {
    margin-right: 20px;
    // width: 300px;
    width: 24%;
    //产品中心-按钮
    .Product-select {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        height: 120px;
        h2 {
            padding: 0 26px;
            background-color: #003abd;
            height: 35px;
            font-size: 18px;
            color: #fff;
            line-height: 35px;
        }
        .Product-select-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            /* padding-left: 8.2rem; */
            a {
                display: block;
                width: 100px;
                height: 34px;
                font-size: 15px;
                color: #003abd;
                text-align: center;
                line-height: 34px;
                border: 1px solid #003abd;
                border-radius: 10px;
            }
        }
    }

    //导航改写
    .Product-nav-list {
        // position: absolute;
        // width: 100%;
        // height: 100%;
        ::v-deep(.el-overlay) {
            position: absolute;
        }
        // 2.1 重新定义折叠面板el样式
        ::v-deep(.el-collapse) {
            //border: none; // 去掉边框
            .el-collapse-item {
                // 2.1.1 头部
                .el-collapse-item__header { 
                    margin-top: 5px;
                    font-size: 14px;
                    font-weight: 400;
                    a {
                        display: block;
                        padding: 0 15px;
                        width: 100%;
                        height: 100%;
                        text-align: left;

                    }
                    &:hover {
                        color: #fff;
                        background-color: #003abd;
                        a {
                            color: #fff;
                        }
                    }
                }
                // 2.1.2 激活状态
                .is-active {
                    color: #fff;
                    background-color: #003abd;
                    a {
                        color: #fff;
                    }
                }
                // 2.1.3 内容区
                .el-collapse-item__wrap {
                    border: none;
                    //导航内容1px solid #a8a8a8
                    .el-collapse-item__content {
                        padding-bottom: 0px;
                    }
                    .nav-item {
                        margin: 5px;
                        border: none;
                        color: #232323;
                        font-size: 14px;
                        font-weight: 400;
                        a {
                            display: block;
                            padding: 2px 20px;
                            width: 100%;
                            height: 100%;
                        }
                        &:hover {
                            color: #003abd;
                            a {
                                color: #003abd;
                                // font-size: 15px;
                                font-weight: 500;
                                // border-bottom: 1px solid #a8a8a8;
                            }
                            .active {
                                color: #003abd;
                                font-weight: 600;
                            }
                        }
                    }
                }
            }

        }
    }
}

@media (max-width: 1200px) {


}

@media (max-width: 960px) {
    //面包屑
    .nav-bread {
        display: none;
    }
    .Product-panel {

        .Product-display {
            /* 产品左侧导航 */
            .Product-display-left {
                display: none;
            }
            /* 产品右侧列表 */

        }

    }

}

@media (max-width: 768px) {

}

</style>