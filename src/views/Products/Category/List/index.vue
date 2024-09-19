<script setup>
import Banner from '../components/Banner.vue'                  // banner
import Bread from './components/Bread.vue'
import LeftNav from '../components/LeftNav.vue'
import Content from './components/Item.vue'

import { onMounted, ref } from "vue"
import { useRoute, onBeforeRouteUpdate } from "vue-router"   // 引入路由
import { useCategoryStore } from '@/stores/catagory'         // 使用pinia中产品导航列表

//使用pinia中的数据
const categoryStore = useCategoryStore()

const route = useRoute()                //调用路由

const id =ref()
//4.钩子函数
//导航守卫：路由参数变化接口重新发送
onBeforeRouteUpdate((to) => {
    // console.log('变化了')
    categoryStore.getProductSKUList(to.params.id)
})

onMounted(() => {
    categoryStore.getProductSKUList(id.value = route.params.id)

})


</script>

<template>
    <Banner />
    <!-- 面包屑区域 -->
    <Bread />
    <!-- 产品主体 -->
    <div class="Product-panel">
        <div class="container">
            <div class="Product-display">
                <LeftNav />
                <Content />
            </div>

        </div>
    </div>

</template>

<style scoped lang='scss'>

.Product-panel {
    margin: 20px 10px;
    width: 100vw;

  .Product-display {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    //标题样式
    .head {
        padding: 40px 0;

        h3 {
        flex: 1;
        font-size: 32px;
        font-weight: normal;
        margin-left: 20px;
        height: 35px;
        line-height: 35px;
        color: #f2f2f2;
        }

        p {
            margin-top:10px;
            font-size: 16px;
            color: #cacaca;
            margin-left: 20px;
        }
    }

    /* 产品左侧导航 */

    /* 产品右侧列表 */


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
            .Product-display-right {

                .item {
                    margin-right: 20px;
                    .pic-item {
                        flex: 0 0 50%;

                    }
                }

            }
        }

    }

}

@media (max-width: 768px) {

}

</style>