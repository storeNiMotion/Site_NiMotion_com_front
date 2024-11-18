<script setup>

import { getNewDetailAPI } from "@/apis/news"
import { computed, onMounted, ref } from "vue"
import { useRoute, onBeforeRouteUpdate } from "vue-router"   // 引入路由
import router from '@/router/index'
import { useHead } from '@unhead/vue'               // SEO
const route = useRoute()                //调用路由

//获取数据
const NewDetail = ref([])

const getNewDetail = async (id = route.params.id) => {
    const res = await getNewDetailAPI(id)
    // console.log(router);
    NewDetail.value = res.data[0].name
    // document.title = NewDetail.value.name
    // console.log(document.title);
    useHead({
        title: NewDetail.value.name + ' - NiMotion - Professional motion control service platform',
        meta: [
            {
            name: 'description',
            content: NewDetail.value.description,
            }, {
            name: 'keywords',
            content: NewDetail.value.keywords,
            },
        ],
    })
}


const shortText = computed(() => {
  if (NewDetail.value.length > 120) {
    return NewDetail.value.slice(0, 120) + '...';
  }
  return NewDetail.value
})


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
                        <span>&nbsp; > &nbsp;</span>
                        <RouterLink to="/news/">News</RouterLink>
                    </div>

                    <div class="bread-item">
                        <span>&nbsp; > &nbsp;</span>
                        <!-- <RouterLink class="active" :to="`/news/detail/${NewDetail.id}`">{{ NewDetail.name }}</RouterLink> -->
                        <span class="active"> {{ shortText }} </span>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>
//面包屑
.nav-bread {
    margin-top: 10px;
    padding: 15px 0;
    width: 100vw;
    .bread {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
        width: 100%;
        height: 100%;
        .bread-box {
            display: flex;
            width: 880px;
            height: 100%;
            overflow: hidden;
            .bread-item {
                display: flex;
                // flex: 1;
                align-items: center;
                // max-width: 600px;
                height: 100%;
                overflow: hidden;
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