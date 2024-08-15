<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue"
import { getSupportVideosDetailAPI } from "@/apis/videos"
import { useRoute, onBeforeRouteUpdate } from "vue-router"   // 引入路由

const route = useRoute()                //调用路由
const VideosDetail = ref({})             //产品数据列表
const getVideosDetail = async(id = route.params.id) => {
    const res = await getSupportVideosDetailAPI(id)
    VideosDetail.value = res.data[0]                // 产品列表数据
}

const activeNames = ref(['Info'])     // 默认显示面板


// 3.监听窗口变化
const screenWidth = ref(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)

const onResize=()=> {
  screenWidth.value = window.innerWidth
  
  if (window.innerWidth < 1024) {
    activeNames.value = ''
  } else {
    activeNames.value = ['Info']
  }

}

onMounted(() => {
  onResize()
  //监听窗口变化
  window.addEventListener("resize", onResize)

})

onMounted(() => getVideosDetail())

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})

</script>

<template>

    <!-- 产品主体 -->
    <div class="video-panel-info">
        <div class="container">
            <!-- 02.产品规格 -->
            <div class="info">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="内容简介" name="Info">
                        <div v-html="VideosDetail.content" class="content"></div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>
//产品内容
.video-panel-info {
    width: 100%;
    .info {
        margin: 10px 0;
        // 2.1 重新定义折叠面板el样式
        ::v-deep(.el-collapse) {
            border: none; // 去掉边框
            .el-collapse-item {
                // 2.1.1 头部
                .el-collapse-item__header {
                    margin-top: 5px;
                    padding: 0 20px;
                    background-color: #f2f3f4;
                    border: none;
                    font-weight: 600;

                    &:hover {
                        background-color: #b5c6ee;
                        color: #003abd;
                    }
                }

                // 2.1.2 激活状态
                .is-active {
                    // background-color: #b5c6ee;
                    color: #003abd;
                }

                // 2.1.3 内容区
                .el-collapse-item__wrap {
                    border: none;

                    // 2.1.3.1 重新定义表格el
                    .content {
                        padding: 10px;

                        table,
                        th,
                        td {
                            border: 1px solid #000;
                            border-collapse: collapse;
                        }
                    }

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

@media (max-width: 960px) {}

@media (max-width: 768px) {}


@media (max-width: 575px) {}
</style>