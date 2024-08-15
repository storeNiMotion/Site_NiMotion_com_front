<script setup>
import HomePanel from './HomePanel.vue'
import { comproductAPI } from "@/apis/home"
import { onMounted, watch, ref } from "vue"
import { useRoute, onBeforeRouteUpdate } from "vue-router"   // 引入路由

//1.获取数据和数据处理
const comproductList = ref([])  //列表产品
const caption = ref('')         //副标题
const content = ref('')         //摘要描述
const num = ref(4)              //每屏显示数量
const page = ref(1)             //展示屏数
const getcomproductList = async () => {
    const res = await comproductAPI()
    comproductList.value = res.data
    caption.value = res.headers[0].caption
    content.value = res.headers[0].content
    if (comproductList.value.length % num.value) {
        page.value = parseInt(comproductList.value.length / num.value) + 1
    } else {
        page.value = comproductList.value.length / num.value
    }
    // console.log(page.value)
}

// 2.侦听视口宽度
const heightbox = ref('300px')
const screenWidth = ref(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)

const onResize = () => {
    screenWidth.value = window.innerWidth
    widthCurrent()

}

//视口宽度判断
const widthCurrent = () => {
    if (screenWidth.value < 575) {
        num.value = 1
        heightbox.value = `${window.innerWidth}px`
        getcomproductList()
    } else if (screenWidth.value < 768) {
        num.value = 2
        heightbox.value = `${window.innerWidth / 2}px`
        getcomproductList()
    } else if (screenWidth.value < 1200) {
        num.value = 4
        heightbox.value = `${window.innerWidth / 4}px`
        getcomproductList()
    } else {
        num.value = 4
        heightbox.value = `320px`
        getcomproductList()
    }
}

// 3.钩子生命周期函数
onMounted(() => {
    //监听窗口变化
    window.addEventListener("resize", onResize)
})

//3.1数据调用
// onMounted(() => getcomproductList())
onMounted(() => widthCurrent())



//导航守卫：路由参数变化接口重新发送
onBeforeRouteUpdate((to) => {
    // console.log('变化了')
    // getProductList(to.params.id)
})
</script>

<template>
    <!-- 产品描述区域 -->
    <div class="home-panel">
        <div class="container">
            <div class="head">
                <!-- 主标题和副标题 -->
                <h3>{{ caption }}</h3>
                <p>{{ content }}</p>
            </div>
        </div>
    </div>

    <div class="home-panel-pro">
        <div class="container">
            <div class="product-com">
                <el-carousel indicator-position="none" :autoplay="false" loop="false" class="card-bd">
                    <el-carousel-item class="card-item" v-for="(item, index) in page" :key="item.id">

                        <div class="card" v-for="i in comproductList.slice(index * num, (index + 1) * num)"
                            :key="i.id">
                            <div v-if="i.name === '传动组件'">
                                <RouterLink :to="`/product/${i.id}`" target="_blank" >
                                    <div class="pic-box">
                                        <img v-img-lazy="i.image" style="width: 100%" />
                                    </div>
                                    <h3>{{ i.name }}</h3>
                                </RouterLink>
                            </div>
                            <div v-else-if="i.name === '智能控制器'">
                                <RouterLink :to="`/product/${i.id}`" target="_blank" >
                                    <div class="pic-box">
                                        <img v-img-lazy="i.image" style="width: 100%" />
                                    </div>
                                    <h3>{{ i.name }}</h3>
                                </RouterLink>
                            </div>
                            <div v-else>
                                <RouterLink :to="`/product/list/${i.id}`" target="_blank" >
                                    <div class="pic-box">
                                        <img v-img-lazy="i.image" style="width: 100%" />
                                    </div>
                                    <h3>{{ i.name }}</h3>
                                </RouterLink>
                            </div>

                        </div>
                        <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>
.home-panel {
    // width: 100vw;
    width: 100%;
    background-color: #fff;

    .head {
        padding: 40px 0;
        // display: flex;
        // align-items: flex-end;

        h3 {
            flex: 1;
            font-size: 32px;
            font-weight: normal;
            margin-left: 20px;
            height: 35px;
            line-height: 35px;
        }

        p {
            margin-top: 10px;
            margin-right: 20px;
            padding: 10px 0;
            padding-right: 10px;
            font-size: 16px;
            color: #999;
            margin-left: 20px;
        }
    }
}

// 产品
.home-panel-pro {
    // width: 100vw;
    width: 100%;
    background-color: #fff;

    .product-com {
        ::v-deep(.el-carousel) {
            padding-bottom: 40px;

            .el-carousel__arrow {
                //左右按钮
                background-color: #e4e4e4;
                border-radius: 4px;

                &:hover {
                    background-color: #003abc;
                }
            }

            .el-carousel__container {
                //内容
                position: static;
                height: v-bind(heightbox);

                .el-carousel__item {
                    padding: 0 44px;
                    display: flex;

                    .card {
                        // overflow: hidden;
                        padding: 0 10px;

                        // box-shadow: 10px 14px 32px -2px rgba(0, 0, 0, 0.2);
                        a {
                            display: block;
                        }
                        .pic-box {
                            overflow: hidden;
                            margin-bottom: 10px;

                        }

                        img {
                            margin-bottom: 5px;
                            transition: all .3s;
                        }

                        h3 {
                            position: absolute;
                            z-index: 99;
                            padding: 0 5px;
                        }

                        &:hover {
                            img {
                                transform: scale(1.1);
                            }

                            h3 {
                                color: #003abc;
                            }

                        }
                    }

                }
            }

            .el-carousel__arrow {
                top: 40%;
            }
        }
    }

}



@media (max-width: 1400px) {

    // 产品
    .home-panel-pro {
        .product-com {
            ::v-deep(.el-carousel) {
                padding-bottom: 40px;

                .el-carousel__container {
                    // height: 460px;
                }
            }
        }
    }
}

@media (max-width: 1200px) {

    // 产品
    .home-panel-pro {
        .product-com {
            ::v-deep(.el-carousel) {
                padding-bottom: 40px;

                .el-carousel__container {
                    // height: 430px;
                }
            }
        }
    }
}

@media (max-width: 1024px) {

    // 产品
    .home-panel-pro {
        .product-com {
            ::v-deep(.el-carousel) {
                padding-bottom: 40px;

                .el-carousel__container {
                    // height: 400px;
                }
            }
        }
    }
}

@media (max-width: 960px) {

    // 产品
    .home-panel-pro {
        .product-com {
            ::v-deep(.el-carousel) {
                padding-bottom: 20px;

                .el-carousel__container {
                    // height: 360px;
                }
            }
        }
    }
}

@media (max-width: 768px) {

    // 产品
    .home-panel-pro {
        .product-com {
            ::v-deep(.el-carousel) {
                padding-bottom: 20px;

                .el-carousel__container {

                    // height: 500px;
                    .el-carousel__item {
                        // display: flex;
                    }
                }
            }
        }
    }
}

@media (max-width: 575px) {

    // 产品
    .home-panel-pro {
        .product-com {
            ::v-deep(.el-carousel) {
                padding-bottom: 20px;

                .el-carousel__container {

                    // height: 500px;
                    .el-carousel__item {
                        // display: flex;
                    }
                }
            }
        }
    }
}
</style>