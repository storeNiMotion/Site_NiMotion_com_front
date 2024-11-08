<script setup>
import { getSolutionDetailAPI } from "@/apis/solution"
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"   // 引入路由

const route = useRoute()                //调用路由
// 1.获取数据
const solutionDetail = ref([])

const getsolutionDetail = async (id = route.params.id) => {
    const res = await getSolutionDetailAPI(id)
    solutionDetail.value = res.data[0]
    document.title = solutionDetail.value.name + ' - 立迈胜NiMotion - "智能控制 驱动未来"！'
}

onMounted(() => getsolutionDetail())
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
                        <RouterLink to="/solution/">Solution</RouterLink>
                    </div>
                    <div class="bread-item">
                        <span> > </span>
                        <RouterLink :to="`/solution/${solutionDetail.category}`">{{ solutionDetail.category_name }}
                        </RouterLink>
                    </div>
                    <div class="bread-item">
                        <span> > </span>
                        <RouterLink class="active" :to="`/solution/detail/${solutionDetail.id}`">{{ solutionDetail.name
                            }}</RouterLink>
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
        justify-content: space-between;
        padding-right: 20px;
        padding: 0 10px;

        .bread-box {
            display: flex;
        }

    }

    a {
        color: #1d1d1f;
        font-size: 12px;

        &:hover {
            color: #003abd;
        }
    }

    .active {
        color: #003abd;
    }
}


@media (max-width: 1200px) {}

@media (max-width: 960px) {
    .nav-bread {
        display: none;
    }

}

@media (max-width: 768px) {}
</style>