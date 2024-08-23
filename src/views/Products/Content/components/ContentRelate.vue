<script setup>
// 相关产品

import { getProductDetailAPI } from "@/apis/product"   //导入API
import { watch, onMounted, ref } from "vue"
import { useRoute, useRouter } from "vue-router"   // 引入路由


// 1.获取数据
const productDetail = ref([])   //总数据
const route = useRoute()    //调用路由
const getProductDetail = async() => {
    const res = await getProductDetailAPI(route.params.id)
    productDetail.value = res.data[0]
    dealData()

}

// 2.处理数据

const relatedroductList = ref([])       // 2.3)相关产品列表

const num = ref(4)                      // 每屏显示数量
const page = ref(1)                     // 展示屏数
const dealData = () => {

    // 4.相关产品
    relatedroductList.value = productDetail.value.related_pro
    // 5.计算相关产品展示数量
    if (relatedroductList.value.length % num.value) {
        page.value = parseInt(relatedroductList.value.length / num.value) + 1
    } else {
        page.value = relatedroductList.value.length / num.value
    }

}

// 3.侦听视口宽度
const screenWidth = ref(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)

const onResize=()=> {
  screenWidth.value = window.innerWidth;

}

//视口宽度判断
const widthCurrent = () => {
    if (screenWidth.value < 575) {
        num.value = 1
    }else if (screenWidth.value < 768 ) {
        num.value = 2
    } else {
        num.value = 4
    }
}

// 4.钩子生命周期函数
onMounted(() => {
  //监听窗口变化
  window.onresize = () => {
    window.addEventListener("resize", onResize)
  }
})
onMounted(() => widthCurrent())
onMounted(() => getProductDetail())

//监听窗口事件
watch(() => screenWidth.value, (val) => {
  if (val < 575) {
    num.value = 1
  }else if (val < 768 ){
    num.value = 2
  } else {
  }
})

</script>

<template>
    <div class="product-panel-Relate">
        <div class="container">
            <!-- 03.相关产品 -->
            <div class="Product-related">
                <h2>Related Products</h2>
                <el-carousel indicator-position="none" arrow="always" trigger="click" :autoplay="false" loop="false" 
                class="card-bd" height="340px" @change="slideChange">
                    <el-carousel-item class="card-item" v-for="(item, index) in page" :key="item.id">
                        <el-card class="card" shadow="hover" v-for="i in relatedroductList.slice(index * num , (index + 1) * num )" :key="i.id">
                            <RouterLink :to="`/product/${i.router}/detail/${i.id}`">
                                <img
                                    :src="i.default_image"
                                    style="width: 100%; height: auto;"
                                />
                            </RouterLink>
                            <template #footer>
                                <RouterLink :to="`/detail/${i.id}`">{{ i.name }}</RouterLink>
                            </template>
                        </el-card>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>

//产品内容
.product-panel-Relate {
    width: 100vw;
    background-color: #fff;
    // padding-bottom: 30px;

    // 03.相关产品
    .Product-related {
        padding: 20px 15px;
        h2 {
            margin: 10px 0;
            color: #003abd;
            font-size: 32px;
        }
        .card-bd{
            padding: 0 5px;
        }
        // 3.1 重新定义跑马灯css
        ::v-deep(.el-carousel) {
            // 3.1.1 主体内容
            .el-carousel__arrow {       //左右按钮
                background-color: #e4e4e4;
                border-radius: 4px;

                &:hover {
                    background-color: #003abc;
                }
            }
            .el-carousel__container {
                // height: 320px;
                height: auto;
                .el-carousel__item {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex: 1;
                    // justify-content: space-between;
                    margin:0 5px;
                    .el-card {
                        width: 25%;
                        padding: 0 5px;
                        // margin-right: 1%;
                        height: fit-content;
                        border: none; // 去掉边框
                        .el-card__body {
                            padding: 0;
                            a {
                                display: block;
                                height: 100%;
                            }
                            h3 {
                                position: absolute;
                                // top: 290px;
                                // margin: 10px;
                                padding: 5px;
                                transform: translateY(-100%);
                                width: 100%;
                                background-color: #fff;
                            }
                            img {
                                display: block;
                                height: 100%;
                                opacity: 1;
                                transition: all 0.3s;
                            }
                        }
                        .el-card__footer {
                            position: absolute;
                            display: block;
                            // margin-bottom: 2px;
                            padding: 8px 4px;
                            height: 40px;
                            border: none;
                            a {
                                font-size: 14px;
                            }
                        }
                        &:hover {
                            img {
                                transform: scale(1.05);
                            }
                            a {
                                color: #003abd !important;
                            }
                        }
                    }
                }
            }
            // 3.1.2 左右箭头
            .el-carousel__arrow {
                top: 40%;
            }
            // 3.1.3 指示器#B4B4B5
            .el-carousel__indicators {
                margin-top: 20px;
                .el-carousel__indicator {
                    .el-carousel__button {
                        background-color:#B4B4B5;
                        width: 20px;
                    }

                }
                .is-active {
                    .el-carousel__button {
                        background-color:#003abd;
                        width: 30px;
                    }
                }
            }
        }

    }
}


@media (max-width: 960px) {


}

@media (max-width: 768px) {
    .product-panel-detail {

        // 03.相关产品
        .Product-related {

        // 3.1 重新定义跑马灯css
        ::v-deep(.el-carousel) {
            // 3.1.1 主体内容
            .el-carousel__container {
                .el-carousel__item {
                    .el-card {
                        width: 48%;


                    }
                }
            }

        }

    }
    }
}


@media (max-width: 575px) {
    .product-panel-detail {

        // 02.产品规格

        // 03.相关产品 暂去掉
        .Product-related {

        // 3.1 重新定义跑马灯css
        ::v-deep(.el-carousel) {
            // 3.1.1 主体内容
            .el-carousel__container {
                .el-carousel__item {
                    .el-card {
                        width: 100%;


                    }
                }
            }

        }

    }
    }
}

</style>