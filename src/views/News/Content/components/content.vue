<script setup>
// 组件
// import Share from 'share.vue'

import { getNewDetailAPI } from "@/apis/news"
import { onMounted, ref } from "vue"
import { useRoute, onBeforeRouteUpdate } from "vue-router"   // 引入路由

const route = useRoute()                //调用路由

//获取数据
const NewDetail = ref([])
// const description = ref('')
const getNewDetail = async (id = route.params.id) => {
    const res = await getNewDetailAPI(id)
    NewDetail.value = res.data[0]
    document.title = NewDetail.value.name + '立迈胜NiMotion - "智能控制 驱动未来"！'
    // document.querySelector('meta[name="description"]')?.getAttribute('content') = NewDetail.value.description
    // const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
    // const Keywords = document.querySelector('meta[name="Keywords"]')?.getAttribute('content');

}

onMounted(() => getNewDetail())
</script>

<template>

    <!-- 主体 -->
    <div class="support-panel-detail">
        <div class="container">

            <div class="support-detail">
                <!-- 01.产品图文概述 -->
                <div class="article">
                    <div class="detail-title">
                        <h1>{{ NewDetail.name }}</h1>
                        <div class="info-box">
                            <span class="author" v-if="NewDetail.author">{{ NewDetail.author }}</span>
                            <span class="date">{{ NewDetail.update_time }}</span>
                        </div>
                    </div>
                    <div class="detail-content" v-html="NewDetail.content">
                    </div>
                    <div class="detail-footer">
                        <div class="article-tags" v-for="item in NewDetail.tag" :key="item.id">
                            <span>{{ item.tag }}</span>
                        </div>
                    </div>
                </div>
                <!-- 02.分享 -->
                <!-- <Share /> -->

            </div>

        </div>
    </div>

</template>

<style scoped lang='scss'>
//内容
.support-panel-detail {
    padding-bottom: 30px;
    width: 100vw;

    // 01.图文内容
    .support-detail {
        display: flex;
        justify-content: center;
        margin: 0 auto;


        // 01.图文
        .article {
            border-bottom: 1px solid #e5e9ef;
            margin-bottom: 20px;
            padding-top: 40px;
            max-width: 880px;
            background-color: #fff;
            // 1.1 标题区
            .detail-title {
                margin-bottom: 20px;
                padding: 0px 40px;
                border-bottom: 1px solid #e5e9ef;

                h1 {
                    margin-bottom: 16px;
                    // min-height: 39px;
                    font-size: 28px;
                    font-weight: 600;
                    font-family: Helvetica, Verdana, Arial, sans-serif, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif, SimHei, SimSun;
                }

                .info-box {
                    margin-bottom: 20px;
                    color: #999;
                    font-size: 13px;

                    span {
                        margin-right: 10px;
                    }
                }
            }

            // 1.2 内容区 穿透
            :deep(.detail-content) {
                margin-bottom: 50px;
                padding: 0px 40px;
                font-family:Helvetica, Verdana, Arial, sans-serif, PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, sans-serif, SimHei, SimSun;

                blockquote {
                    color: #6d757a;
                    padding-left: 25px;
                    position: relative;

                    p {
                        margin-bottom: 14px;
                    }
                }

                blockquote:before {
                    content: "";
                    width: 20px;
                    height: 19px;
                    display: block;
                    position: absolute;
                    top: 4px;
                    left: 0;
                    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmCAYAAAC29NkdAAAAAXNSR0IArs4c6QAABH9JREFUWAntmF1oVEcUx7M3m/gR2xqRFZE0C8kmeZD6rSFSFOqTllKkIBaLfRDRUhAV8UFpaUHBJ78FoeiD2NKCFRX7CSJVUNEHpT7kkwSCkSaSxCC7ye4m6+/c3lnmTu6ud+/Ni5CBu3POmXP+858zMzt3bqTMZ2lra/sQ15088xsaGjZGIpGcz9CibuCudnCBbfgI3IweENUVL7mjo2P9xMTEiVwut0S1Y9uMfEXpQer29vY1YApus4rHth35B6VLXZBgZ2dnLJvNnh0fH/9MDxAZwpuoAhHs7u6em06nT0LsC56Igf0xuoug6WD7t7a2foBwg+d92+D8kP7fEU8zFX8iT+htfuSurq5EJpMR3EbD/zZ4p8C9Tj2ut00iSJo3kKGrOM1RjgQ9YbT7mpqabilbqTXLopnZ+I24ai22zbKs/RC7qdlcoosgC7aJ1vuQeU+8ICYb4RgAh82RSbvfwnKpgdwjcGMqBrxz4O6lTiubV51fg7I2xsbGruOkyKUY3ZZEIiFTErj09vbOSiaT1zRyGXC/hNyPfkDzBFm4BwhIOEFpADdD7g8/IMV8IPcVWMvER2YBeRvkfikWo7dZovT3988hcLfWcJD1FpocmBVg7lW4EDwKrm9yEmdncHBwcAeyvXgBGamurnZtddVBqTUbbiskFzlxaab2TKkYdgYJ+lQFAngxFou9UnrIOo/LwH+ur6/vLxXPkkVMcP7fPBqNTkn2GKjFs14Roo9AuBaLuAWgGQIEyAtG+VSBhqn5a1lKvFo2o2y4+0HwopBboQXeEVk2zfDwcE15eXmV1iZHXJJ19Kyuru6lbveS8V2u7PTxgMGn+/r6Zo+Ojtagv6PapMY3VVlZ2VdbWzuk20WO0mEcB9tO4DyOuYdsmpViUHa70fnBluMP/REdHuLv4m+9TZfBiisd3xnE3B0ZGVmrbGadSqXK8HmM/fvGxkY5yewi6yTuyFKt47HJaTaXiH+EZxVE/wLwPEeYvTxcTv8rcWXDv5mnIDnNbyl+v5KkywMDA3aWZRfXKodSa8B2QvQbrziyFhgXvM+HhoaOCa4QfFeEoAWSB9gQi8147PaRadr96sTvArdFpniW36ACfhW8N35ttpHBULjwivCCsUcyGArIIdZiEkSf6WEr1dRiMdLQQGAsMHuegpkpA2OBTLE67sw+fOtgyEuBWULjAlgxFSAmsSnVpwmGTed0BqczGDYDYePfijWYDTtKTpKMieFlM3186Fk56v7z4VjUhZNk0mXIy1YUxKNRuMlRF+iuoOMBdE/XRfaymT5v0oUbb/zWKcDkG0zQkiX+nBns2AIvH+Ek3CzuFf8AfsHsoAT9OBhyl3AVx3bcZSxNuSDc7F3MXXg/jPMXFb84xFyqqqr6tpC/tIlPofZCduEinKTd9flNPlVwx5AOzQ+MJta/XEkPc9eVr2FvLFysPuHt+AiOk64GRrB8L/yOzP2k7C6CytjT07MQwEW8yrvetiGVxKc3yCcMweaOId8Ha8CeLboqZCsF9rN4PP5c2VT9Gs7q2UbFWjOcAAAAAElFTkSuQmCC);
                    background-size: 100% 100%;
                }

                h2 {
                    margin: 20px 0;
                    font-size: 20px !important;
                    font-weight: 600 !important;
                }

                h3 {
                    margin: 20px 0;
                    font-size: 18px !important;
                    font-weight: 600 !important;
                }

                p {
                    margin: 10px 0;
                    font-size: 16px;
                    line-height: 26px;
                    // cursor: text;

                    a {
                        padding: 0 0 2px;
                        border-bottom: 1px dashed #003abd;
                        color: #333 !important;
                        &:hover {
                            color: #003abd !important;
                            font-weight: 500;
                        }
                    }
                }

                img {
                    margin: 0 auto;
                    max-width: 100% !important;
                    text-align: center !important;
                }
            }

            // 1.3 
            .detail-footer {
                padding: 0 80px;
                margin-bottom: 39px;
            }
        }

        // 02.分享
    }

}

@media (max-width: 1200px) {}

@media (max-width: 960px) {}

@media (max-width: 768px) {
    .support-panel-detail {
        margin: 10px;
        .support-detail {
            margin: 0;
            padding: 10px 0;
            // 01.图文
            .article {
                // 1.1 标题区
                .detail-title {
                    padding: 0px 10px;
                    h1 {
                        margin-bottom: 2px;
                        font-size: 20px;
                    }
                    .info-box {
                        margin-bottom: 10px;
                    }
                }
                // 1.2 内容区
                :deep(.detail-content) {
                    margin-bottom: 10px;
                    padding: 0px 15px;

                    blockquote {
                        padding-left: 20px;

                        p {
                            margin-bottom: 12px;
                        }
                    }

                    blockquote:before {
                        content: "";
                        width: 15px;
                        height: 15px;
                    }

                    h2 {
                        margin: 10px 0 8px;
                        font-size: 20px !important;
                        font-weight: 800 !important;
                    }

                    h3 {
                        margin: 10px 0 5px;
                        font-size: 16px !important;
                        font-weight: 800 !important;
                    }

                    p {
                        margin: 5px 0;
                        font-size: 14px;
                        line-height: 26px;

                    }

                    img {
                        margin: 0 auto;
                        max-width: 100% !important;
                        text-align: center !important;
                    }
                }

                // 1.3 
                .detail-footer {
                    display: flex;
                    padding: 0 80px;
                    margin-bottom: 39px;
                }
            }

        }

    }
}
</style>