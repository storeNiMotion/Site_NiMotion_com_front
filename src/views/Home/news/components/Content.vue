<script setup>

import { newsAPI } from "@/apis/home"
import { onMounted, watch, ref } from "vue"

//获取数据
const newsList = ref([])

const num = ref(3)              //每屏显示数量 暂搁置


const getnewsList = async() => {
    const res = await newsAPI()
    newsList.value = res.data
}

// 2.数据处理


// 3.侦听视口宽度
const screenWidth = ref(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)

const onResize=()=> {
  screenWidth.value = window.innerWidth;

}

//视口宽度判断
const widthCurrent = () => {
    if (screenWidth.value < 575) {
        num.value = 1
        getnewsList()
    }else if (screenWidth.value < 960 ) {
        num.value = 2
        getnewsList()
    } else {
        num.value = 3
        getnewsList()
    }
}

// 4.钩子生命周期函数
// onMounted(() => {
//   //监听窗口变化
//   window.onresize = () => {
//     window.addEventListener("resize", onResize)
//   }
// })

//4.1数据调用 开始就调
onMounted(() => getnewsList())
// onMounted(() => widthCurrent())

//4.2监听窗口事件
// watch(() => screenWidth.value, (val) => {
//   if (val < 960) {
//     num.value = 2
//     getnewsList()
//   }else if (val < 575 ){
//     num.value = 1
//     getnewsList()
//   } else {
//     getnewsList()
//   }
// })

</script>

<template>
    <div class="home-panel-news-content">
        <div class="container">

            <!-- 新闻内容区域 -->
            <div class="news-bd">
                <ul class="row">
                    <li class="col-lg-4 col-md-12 col-sm-12" v-for="item in newsList.slice(0, 3)" :key="item.id">
                        <RouterLink :to="`/news/detail/${item.id}`">
                            <div class="pic">
                                <img v-img-lazy="item.default_image" :alt="item.name">
                                <!-- <img src="" style="width: 100%"/> -->
                                <div class="cover">
                                    <div class="info">
                                        <!-- <span>{{ item.tag[0].tag }}</span> -->
                                        <i> | </i>
                                        <span>{{ item.update_time }}</span>
                                    </div>
                                    <h4>{{ item.name }}</h4>
                                </div>
                            </div>
                        </RouterLink>
                    </li>
                </ul>
                <div class="more">
                    <RouterLink to="/news" class="more"><el-button type="primary" round>Read More</el-button></RouterLink>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.home-panel-news-content {
    // width: 100vw;
    width: 100%;
    background-color: #fff;
    padding-bottom: 40px;

    //内容区
    .news-bd {
        padding: 0 20px;
        width: 100%;
        ul {
            display: flex;
            justify-content: space-between;
            li {
                width: 32%;
                // transition: all 0.8s;
                a {
                    display: block;
                    // min-height: 382px;
                    height: 100%;
                    overflow: hidden;
                    background-color: #F2F3F4;
                    .pic {
                        position: relative;
                        width: 100%;
                        height: auto;
                        background-color: #f2f3f4;

                        img {
                            max-width: 100%;
                            height: auto;
                        }
                        .cover {
                            padding: 30px;
                            position: relative;
                            top: 0;
                            height: auto;
                            background-color: #F2F3F4;
                            transition: all .3s;
                            .info {
                                margin-bottom: 15px;
                                font-size: 16px;
                                color: #57595C;
                                letter-spacing: .7px;
                                // font-weight: 600;
                            }
                            h4 {
                                margin-top: 10px;
                                // font-size: 14px;
                                font-size: 16px;
                                font-weight: 500;
                            }
                        }
                    }
                    &:hover {
                        color: #003abd !important;
                        .cover {
                            top: -10px;
                            // height: calc(+10px);
                            // color: #003abd;
                            div {
                                color: #003abd;
                            }
                        }
                    }
                }

            }
        }

        // 更多
        .more {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }
    }
}

@media (max-width: 768px) {
    .home-panel-news-content {
        //内容区
        .news-bd {

            ul {
                flex-direction: column;
                align-items: center;
                li {
                    margin-top: 20px;
                    width: 100%;
                }
            }
        }
    }
}

@media (max-width: 575px) {
    .home-panel-news-content {
        //内容区
        .news-bd {
            // padding: 0 20px;
            ul {
                flex-direction: column;
                align-items: center;
                li {
                    // margin-top: 20px;
                    // width: 100%;
                    a {
                        .pic {
                            .cover {
                                padding: 10px 20px 20px;
                                .info {
                                    display: none;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

</style>