<script setup>
// 备份文件：产品列表页面
import { getProductListAPI } from "@/apis/product"
import { onMounted, ref } from "vue"
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router"   // 引入路由
import { useCategoryStore } from '@/stores/catagory'         // 使用pinia中产品导航列表

//使用pinia中的数据
const categoryStore = useCategoryStore()

//1.获取数据
const ProductList = ref([])             // 产品列表
const SelfData = ref({})                // 本身数据
const bannerList = ref([])              // banner数据列表
const route = useRoute()                //调用路由
const getProductList = async(id = route.params.id) => {
    const res = await getProductListAPI(id)
    SelfData.value = res.self_data[0]
    ProductList.value = res.data                // 产品列表数据
    dealData()
}

//2.处理数据
const dealData = () => {
    //banner
    bannerList.value = ProductList.value.map((item) => {
        return {"id": item.id, "banner": item.bannerurl}
    })
    // console.log(bannerList.value)
}

//钩子函数
onMounted(() => getProductList())

const router = useRouter()                                              // 调用路由方法
//导航守卫：路由参数变化接口重新发送
onBeforeRouteUpdate((to) => {
    // console.log('变化了')
    // console.log(to.fullPath);
    // getProductList(to.fullPath)
    // router.replace({path: to.fullPath})
})

</script>

<template>
    <!-- banner区域 -->
    <!-- <div class="banner-pro">
        <div class="">
            <img :src="bannerList.banner" alt="">
        </div>
    </div> -->
    <div class="Product-panel-banner">
        <el-carousel height="auto;" >
        <el-carousel-item v-for="item in bannerList" :key="item.id" >
            <!-- <RouterLink to="/"><img :src="item.image" :alt="item.title"></RouterLink> -->
            <div :style="`background-image: url(${item.banner})`" class="imgbox"></div>
        </el-carousel-item>
        </el-carousel>
    </div>
    <!-- 面包屑区域 -->
    <div class="nav-bread">
        <div class="container">
            <!-- <a href="/">首页</a> -->
            <div class="bread-box">
                <div class="bread-item">
                    <!-- <span> > </span> -->
                    <!-- <a href="">产品中心</a> -->
                    <RouterLink to="/">首页</RouterLink>
                </div>
                <div class="bread-item" v-if="SelfData.id != 1">
                    <span> > </span>
                    <!-- <a href="">产品中心</a> -->
                    <RouterLink to="/product/1/">产品中心</RouterLink>
                </div>
                <div class="bread-item">
                    <span> > </span>
                    <!-- <a href="">产品中心</a> -->
                    <RouterLink class="active" :to="`/product/${SelfData.id}`">{{ SelfData.name }}</RouterLink>
                </div>
            </div>

            <!-- <a href="">STM一体化步进电机</a>
            <span>></span>
            <a href="" class="active">STM28一体化步进电机</a> -->

        </div>
    </div>

    <!-- 产品主体 -->
    <div class="Product-panel">
        <div class="container">
            <div class="Product-display">
                <div class="Product-display-left">
                    <div class="Product-select">
                        <h2>产品中心</h2>
                        <div class="Product-select-btn">
                            <a href="" class="btn-line">产品选型</a>
                        </div>
                    </div>
                    <!-- 导航 -->
                    <!-- <div class="Product-nav-list">
                        <ul>
                            <li v-for="item in 4" :key="item.id"><a href="/product/con">智能控制器</a></li>
                            <li v-for="item in NavList" :key="item.id">
                                <RouterLink :to="`/product/list/${item.id}`" active-class="active">{{ item.name }}</RouterLink>
                            </li>
                            <li v-for="item in categoryStore.getSelectCategoryList" :key="item.id">
                                <RouterLink :to="`/product/${item.id}`" active-class="active">{{ item.name }}</RouterLink>
                            </li>
                        </ul>
                    </div> -->

                    <div class="Product-nav-list">
                        <el-collapse accordion>
                            <el-collapse-item v-for="item in categoryStore.getSelectCategoryList" :key="item.id" :name="item.id + 1">
                                <template #title>
                                    <RouterLink :to="`/product/${item.id}`">{{ item.name }}</RouterLink>
                                </template>
                                <div class="nav-item" v-for="i in item.category" :key="i.id">
                                    <RouterLink active-class="active" :to="`/product/list/${i.id}`">{{i.name}}</RouterLink>
                                </div>
                            </el-collapse-item>

                        </el-collapse>
                    </div>
                </div>

                <div class="Product-display-right">
                    <div class="item" v-for="item in ProductList" :key="item.id">
                        <div class="pic">
                            <div class="pic-box">
                                <!-- <img src="@/assets/uploads/STM28-15.png" alt=""> -->
                                <RouterLink :to="`/product/list/${item.id}`"><img :src="item.image" :alt="item.name"></RouterLink>
                                <!-- <img :src="item.default_image" :alt="item.name"> -->
                            </div>
                        </div>
                        <div class="detail">
                            <!-- <h4>STM28一体化步进电机</h4> -->
                            <RouterLink :to="`/product/list/${item.id}`"><h4>{{ item.name }}</h4></RouterLink>
                            <p>{{ item.content }}</p>
                            <!-- <a href="/product/detail" class="btn-face">查看更多</a> -->
                            <RouterLink :to="`/product/list/${item.id}`" class="btn-face">查看更多</RouterLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<style scoped lang='scss'>
// banner
// .banner-pro {
//     img {
//         width: 100%;
//     }
// }

.Product-panel-banner {
  width: 100vw;
  ::v-deep .el-carousel__container {
    height: v-bind(heightbox) ;

    .imgbox {
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: 100% 120%;
      background-repeat: no-repeat;
      
    }
  }
}

//面包屑
.nav-bread {
    padding: 10px 0;
    height: 36px;
    // background-color: #f2f3f4;
    .bread-box {
        display: flex;
        margin-left: 30px;
    }
    a {
        color: #1d1d1f;
        font-size: 12px;
        line-height: 36px;
        &:hover {
            color: #003abd;
        }
    }
    .active {
        color: #003abd;
    }
}

.Product-panel {
    margin: 20px 10px;
    width: 100vw;

  .Product-display {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    /* 产品左侧导航 */
    .Product-display-left {
        margin-right: 20px;
        // width: 300px;
        width: 24%;
        //产品中心-按钮
        .Product-select {
            display: flex;
            flex-direction: column;
            background-color: #fff;
            height: 120px;
            h2 {
                padding: 0 26px;
                background-color: #003abd;
                height: 35px;
                font-size: 18px;
                color: #fff;
                line-height: 35px;
            }
            .Product-select-btn {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                /* padding-left: 8.2rem; */
                a {
                    display: block;
                    width: 100px;
                    height: 34px;
                    // margin-top: 28px;
                    // margin-left: 80px;
                    font-size: 15px;
                    color: #003abd;
                    text-align: center;
                    line-height: 34px;
                    border: 1px solid #003abd;
                    border-radius: 10px;
                    &:hover {
                        background-color: #003abd;
                        color: #fff;
                    }
                }
            }
        }
        /* 左侧导航列表 */
        // .Product-nav-list {
        //     margin-top: 16px;
        //     li {
        //         margin-bottom: 5px;
        //         // width: 270px;
        //         height: 34px;
        //         background-color: #fff;
        //         a {
        //             display: block;
        //             width: 100%;
        //             height: 100%;
        //             padding: 0 26px;
        //             color: #000;
        //             font-size: 13px;
        //             line-height: 34px;
        //         }
        //         .active {
        //             color: #fff;
        //             background-color: #003abd;
        //         }
        //     }
        // }
        //导航改写
        .Product-nav-list {
            // position: absolute;
            // width: 100%;
            // height: 100%;
            ::v-deep(.el-overlay) {
                position: absolute;
            }
            // 2.1 重新定义折叠面板el样式
            ::v-deep(.el-collapse) {
                //border: none; // 去掉边框
                .el-collapse-item {
                    // 2.1.1 头部
                    .el-collapse-item__header { 
                        margin-top: 5px;
                        font-size: 14px;
                        font-weight: 400;
                        a {
                            display: block;
                            padding: 0 15px;
                            width: 100%;
                            height: 100%;
                            text-align: left;

                        }
                        &:hover {
                            color: #fff;
                            background-color: #003abd;
                            a {
                                color: #fff;
                            }
                        }
                    }
                    // 2.1.2 激活状态
                    .is-active {
                        color: #fff;
                        background-color: #003abd;
                        a {
                            color: #fff;
                        }
                    }
                    // 2.1.3 内容区
                    .el-collapse-item__wrap {
                        border: none;
                        //导航内容1px solid #a8a8a8
                        .el-collapse-item__content {
                            padding-bottom: 0px;
                        }
                        .nav-item {
                            margin: 5px;
                            border: none;
                            color: #232323;
                            font-size: 14px;
                            font-weight: 400;
                            a {
                                display: block;
                                padding: 2px 20px;
                                width: 100%;
                                height: 100%;
                            }
                            &:hover {
                                color: #003abd;
                                a {
                                    color: #003abd;
                                    // font-size: 15px;
                                    font-weight: 500;
                                    // border-bottom: 1px solid #a8a8a8;
                                }
                                .active {
                                    color: #003abd;
                                    font-weight: 600;
                                }
                            }
                        }
                    }
                }

            }
        }
    }
    /* 产品右侧列表 */
    .Product-display-right {
        display: flex;
        flex: 1;
        // width: 74%;
        flex-direction: column;
        width: 100%;
        .item {
            display: flex;
            flex:1;
            // flex: 0 0 33%;
            justify-content: space-between;
            margin-bottom: 20px;
            padding: 0 10px;
            width: 100%;
            max-height: 240px;
            // max-height: 190px;
            // border: 1px solid #000;
            .pic {
                // margin-bottom: 20px;
                // flex: 0 0 32%;
                width: 50%;
                max-width: 240px;
                // box-shadow: 0 8px 8px 0 rgba(0,0,0,.08), 0 30px 20px 0 rgba(0,0,0,.04);
                // max-height: 240px;
                .pic-box {
                    /* margin-bottom: 1.5rem; */
                    // flex: 0 0 40%;
                    width: 100%;
                    height: 100%;
                    background-color: #fff;
                    // border: .5px solid #555;
                    
                    img {
                        // width: 100%;
                        height: 100%;
                    }
                }
            }
            .detail {
                flex: 1;
                margin: 0 15px;
                padding: 30px;
                width: 100%;
                // height: 100%;
                background-color: #fff;
                h4 {
                    color: #003abd;
                    font-size: 18px;
                    font-weight: 600;
                }
                p {
                    margin-top: 15px;
                    font-size: 14px;
                }
                .btn-face {
                    display: block;
                    margin-top: 30px;
                    width: 80px;
                    height: 26px;
                    border: 1px solid #003abd;
                    border-radius: 5px;
                    font-size: 12px;
                    color: #003abd;
                    text-align: center;
                    line-height: 26px;
                    &:hover {
                        background-color: #003abd;
                        color: #fff;
                    }
                }
            }
            &:hover {
                .pic {
                    box-shadow: 0 8px 8px 0 rgba(0,0,0,.08), 0 30px 20px 0 rgba(0,0,0,.04);
                }
                .detail {
                    // cursor: pointer;
                    box-shadow: 0 8px 8px 0 rgba(0,0,0,.08), 0 30px 20px 0 rgba(0,0,0,.04);
                }
                
            }
        }

    }

  }


}


@media (max-width: 1200px) {


}

@media (max-width: 960px) {
    //面包屑
    .nav-bread {
        display: none;
    }
    .Product-panel {

        .Product-display {
            /* 产品左侧导航 */
            .Product-display-left {
                display: none;
            }
            /* 产品右侧列表 */

        }

    }

}

@media (max-width: 768px) {
    .Product-panel {

        .Product-display {
            /* 产品左侧导航 */

            /* 产品右侧列表 */
            .Product-display-right {

                .item {

                    .pic {
                        display: none;
                    }
                    .detail {
                        margin-right: 30px;
                    }

                }

            }
        }

    }
}


</style>