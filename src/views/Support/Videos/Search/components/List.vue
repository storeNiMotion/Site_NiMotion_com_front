<script setup>
import { onMounted, ref } from "vue"
import { useRoute, onBeforeRouteUpdate } from "vue-router"   // 引入路由
import { getSupportVideoSearchAPI } from "@/apis/videos"

const route = useRoute()                //调用路由
const VideosResult = ref([])             // 数据列表
const getSupportVideoSearch = async(key = route.params.key) => {
    const res = await getSupportVideoSearchAPI(key)
    VideosResult.value = res.data
}

onMounted(() => getSupportVideoSearch())
</script>

<template>

<div class="Video-panel">
    <div class="container">
        <div class="Video-display">
            <div class="item"  v-for="item in VideosResult" :key="item.id">
                <div class="pic-box">
                    <RouterLink :to="`/video/detail/${item.id}/`">
                        <img v-img-lazy="item.default_image" :alt="item.name">
                    </RouterLink>
                </div>
                <RouterLink class="title" :to="`/video/detail/${item.id}/`"><h4>{{ item.name }}</h4></RouterLink>
                <div class="info">
                    <span class="tag">{{ item.tag }}</span>
                    <span> · </span>
                    <span class="time">{{ item.release_time }}</span>
                </div>
                
            </div>
            
        </div>

    </div>
</div>

</template>

<style scoped lang='scss'>

.Video-panel {
    margin: 20px 10px;
    width: 100vw;
    .Video-display {
        display: flex;
        flex: 1;
        flex-wrap: wrap; 
        margin-bottom: 20px;
        padding: 0 10px;
        width: 100%;
        .item {
            display: flex;
            flex-direction: column;
            flex: 0 0 24%;
            flex-wrap: wrap; 
            padding: 0 10px 20px;
            overflow: hidden;
            .pic-box {
                // border: .5px solid #555;
                border-radius: 5px;
                overflow: hidden;
                
                img {
                    width: 100%;
                    transition: all .3s;
                }
                &:hover {
                    img {
                        transform: scale(1.1);
                    }
                    
                }
            }
            .title {
                display: block;
                padding: 5px 0px;
                width: 100%;
                h4 {
                    margin-top: 5px;
                    width: 100%;
                    overflow: hidden;
                    color: #3a3a3a;
                    font-size: 14px;
                    font-weight: 550;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;

                }
                &:hover {
                    h4 {
                        color: #003abd;
                    }
                    
                }
            }
            .info {
                padding: 5px 0px;
                color: #808080;
                font-size: 13px;
            }

        }
    }
}

@media (max-width: 1024px) {
    .Video-panel {
        .Video-display {
            .item {
                flex: 0 0 32%;
            }
        }
    }

}

@media (max-width: 960px) {

}

@media (max-width: 768px) {
    .Video-panel {
        .Video-display {
            .item {
                flex: 0 0 49%;
            }
        }
    }
}

</style>