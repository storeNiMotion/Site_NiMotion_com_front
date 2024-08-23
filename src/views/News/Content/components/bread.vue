<script setup>

import { getNewDetailAPI } from "@/apis/news"
import { onMounted, ref } from "vue"
import { useRoute, onBeforeRouteUpdate } from "vue-router"   // 引入路由
import router from '@/router/index'
const route = useRoute()                //调用路由

//获取数据
const NewDetail = ref([])

const getNewDetail = async (id = route.params.id) => {
    const res = await getNewDetailAPI(id)
    // console.log(router);
    NewDetail.value = res.data[0]
    document.title = NewDetail.value.name
    // console.log(document.title);

}

onMounted(() => getNewDetail())
</script>

<template>
    <!-- 面包屑 -->
    <div class="nav-bread">
        <div class="container">
            <div class="bread">
                <div class="bread-box">
                    <div class="bread-item">
                        <RouterLink to="/">Home</RouterLink>
                    </div>
                    <div class="bread-item">
                        <span> > </span>
                        <RouterLink to="/news/">News</RouterLink>
                    </div>

                    <div class="bread-item">
                        <span> > </span>
                        <!-- <RouterLink class="active" :to="`/news/detail/${NewDetail.id}`">{{ NewDetail.name }}</RouterLink> -->
                        <span class="active"> {{ NewDetail.name }} </span>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>
//面包屑
.nav-bread {
    padding: 15px 0;
    width: 100vw;
    // height: 36px;
    .bread {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        // padding-right: 20px;
        height: 100%;
        .bread-box {
            display: flex;
            // margin-left: 30px;
            height: 100%;
            .bread-item {
                display: flex;
                align-items: center;
                height: 100%;
            }
        }


    }

    a {
        color: #1d1d1f;
        font-size: 12px;
        // line-height: 36px;
        &:hover {
            color: #003abd;
        }
    }
    .active {
        color: #003abd;
    }
}


@media (max-width: 1200px) {


}

@media (max-width: 960px) {
    //面包屑
    .nav-bread {
        display: none;
    }

}

@media (max-width: 768px) {

}
</style>