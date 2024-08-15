<script setup>
// 播放器

import { onMounted, ref, reactive } from "vue"
import { ElMessage } from "element-plus"          // 导入提示
import { getSupportVideosURLAPI } from "@/apis/videos"
import { useRoute } from "vue-router"   // 引入路由

// 1.获取url
const VideosUrl = ref({})
const route = useRoute()                //调用路由

const getVideosURL = async(url = route.params.url) => {
    const res = await getSupportVideosURLAPI(url)
    VideosUrl.value = res.data[0]
}

// 2.初始化
const options = reactive({
  width: "100%",                                    //播放器宽度
  height: "auto",                                   //播放器高度
  color: "#409eff",                                 //主题色
  title: "",                                        //视频名称

  // 视频源
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: true,                                   //自动播放
  muted: false,                                     //静音
  loop: false,                                      //循环播放
  mirror: false,                                    //镜像画面
  ligthOff: false,                                  //关灯模式
  volume: 0.3,                                      //默认音量大小
  control: true,                                    //是否显示控制
  controlBtns: [
    "audioTrack",
    "quality",
    "speedRate",
    "volume",
    "setting",
    "pip",
    "pageFullScreen",
    "fullScreen",
  ],                                                //显示所有按钮,
})

// 3.播放控制
const onPlay = (ev) => {
  console.log(ev,"播放")
}

const onPause = (ev) => {
  console.log(ev, "暂停");
}

const onplaying = () => {
      if (!options.muted) {
        console.log("已静音啦")
        ElMessage({type: 'warning', message: '浏览器已自动静音，请手动开启声音'})
      }
    }

// 4.钩子生命周期函数
onMounted(() => getVideosURL())

</script>

<template>

<div class="video-player">
    <vue3VideoPlay
        v-bind="options"
        @play="onPlay"
        @pause="onPause"
        @playing="onplaying"
        :src="VideosUrl.url"
        poster
        />
</div>

</template>

<style scoped lang='scss'>

// 1.1 视频容器
.video-player{
    // padding: 5px 5px;
    width: 100%; //定义宽度
    height: 100%;
    box-shadow: 0 0 8px var(--bpx-box-shadow, #e5e9ef);
    border-radius: 6px;
    // background-color: #bababa;
    video {
        padding: 2px;
        width: 100%;
        border-radius: 6px;
        overflow: hidden;
    }
}

@media (max-width: 1024px) {
    
    .product-panel-detail {
        // 01.产品图文概述
        .Product-detail {
            // height: 400px;
            // 1.1 图片卡片容器
            // 1.2 重新定义跑马灯css
            // 1.3 产品概述（右侧区域）
            .Product-info {
                margin-left: 18px;
                padding-left: 18px;
                h2 {
                    font-size: 26px;
                }
            }
        }
    }
}


@media (max-width: 960px) {
    
    .product-panel-detail {

        // 01.产品图文概述
        .Product-detail {
            // height: 400px;
            // 1.1 图片卡片容器
            // 1.2 重新定义跑马灯css
            // 1.3 产品概述（右侧区域）
            .Product-info {
                .description {
                    p {
                        margin-top: 10px;
                    }
                }
            }
        }

    }

}

@media (max-width: 768px) {
    .product-panel-detail {

        // 01.产品图文概述
        .Product-detail {
            display: flex;
            flex-direction: column;
            align-items: center;
            // height: 400px;

            // 1.1 图片卡片容器
            .card-bd{
                padding: 10px;
                width: 96%; //定义宽度
            }
            // 1.2 重新定义跑马灯css

            // 1.3 产品概述（右侧区域）
            .Product-info {
                margin-top: 16px;
                .description {
                    p {
                        margin-top: 0px;
                    }
                }
            }

        }

    }
}

@media (max-width: 575px) {

}

</style>