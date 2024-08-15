<script setup>

// 接线图

// 导入pinia
import { useContentStore } from '@/stores/content'

//使用pinia中的数据
const ContentWiring = ref('')

const getContentWiring = () => {
    const res = useContentStore()                // 实例化
    ContentWiring.value = res.productScrewDetail.wiring
}

const handleChange = () => {
    getContentWiring()
}

// 4.钩子生命周期函数

</script>

<template>
    <!-- 产品主体 -->
    <div class="product-panel-connection">
        <div class="container">
            <!-- 02.产品规格 -->
            <div class="Product-spec">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="接线示意图" name="spec-6">
                        <div class="spec-img">
                            <img
                                :src="ContentWiring"
                                style="width: 100%"
                             />
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>

//产品内容
.product-panel-connection {
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
                    // 2.1.3.2 通用图片
                    .spec-img {
                        margin: 0 auto;
                        padding: 0 20px;
                        text-align: center;
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