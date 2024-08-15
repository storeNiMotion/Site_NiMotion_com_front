<script setup>

// 组件
import Bread from './components/bread.vue'
import SearchInput from './components/searchInput.vue'
import Result from './components/result.vue'

import { onMounted, ref } from "vue"
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router"   // 引入路由
import { useCategoryStore } from '@/stores/catagory'         // 使用pinia中产品导航列表

//使用pinia中的数据
const categoryStore = useCategoryStore()

//1.获取数据
const route = useRoute()                //调用路由
const id =ref(1)

//钩子函数
onMounted(() => {
    // console.log(route.params);
    // categoryStore.getProductList(id.value = route.params.id)
})

const router = useRouter()                                              // 调用路由方法
//导航守卫：路由参数变化接口重新发送
onBeforeRouteUpdate((to) => {
    // console.log(to);
    // getSearchResult(to.params.key)
})

</script>

<template>
    <!-- banner区域 -->

    <!-- 面包屑区域 -->
    <Bread />
    <!-- 搜索栏 -->
    <SearchInput />
    <!-- 结果 -->
    <Result />

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

        }

    }

}

@media (max-width: 768px) {
    .Product-panel {

        .Product-display {
            /* 产品左侧导航 */

            /* 产品右侧列表 */
            .Product-display-right {

                .item {

                    .pic {
                        display: none;
                    }
                    .detail {
                        margin-right: 30px;
                    }

                }

            }
        }

    }
}


</style>