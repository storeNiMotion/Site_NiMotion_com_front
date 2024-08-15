<script setup>
// 备份文件：产品频道页面
import { getProductSKUListAPI } from "@/apis/product"
import { onMounted, ref } from "vue"
import { useRoute, onBeforeRouteUpdate } from "vue-router"   // 引入路由
import { useCategoryStore } from '@/stores/catagory'         // 使用pinia中产品导航列表

//使用pinia中的数据
const categoryStore = useCategoryStore()

//1.获取数据
const SKUList = ref([])             //产品数据列表
const SelfData = ref({})                // 本身数据
const bannerList = ref([])      //banner数据列表
const route = useRoute()                //调用路由
const getProductSKUList = async(id = route.params.id) => {
    const res = await getProductSKUListAPI(id)
    SelfData.value = res.category[0]
    SKUList.value = res.data                // 产品列表数据
    dealData()
}

//2.数据处理
const dealData = () => {
    // 1.banner 
    bannerList.value = SKUList.value.map((item) => {
        return {"id": item.id, "banner": item.banner}
    })
    // console.log(bannerList.value)
}


//3.banner自适应高度

const imgheight = ref(650)  //banner高度 `height:${imgheight}px` style="height: 650px"
// const height = imgheight.value + "px"
const heightbox = ref()

const onResize=()=> {
  imgheight.value = window.innerWidth * 1287 / 3800
  heightbox.value = `${imgheight.value}px`

}


//4.钩子函数
//导航守卫：路由参数变化接口重新发送
onBeforeRouteUpdate((to) => {
    // console.log('变化了')
    getProductSKUList(to.params.id)
})

onMounted(() => {
  onResize()
  //监听窗口变化
  window.onresize = () => {
    // console.log(screenWidth.value)
    window.addEventListener("resize", onResize)
  }
})

onMounted(() => getProductSKUList())
</script>

<template>
    <!-- banner区域 -->
    <!-- <div class="Product-panel-banner" v-if="bannerList">
        <el-carousel height="auto;" >
        <el-carousel-item v-for="item in bannerList" :key="item.id" >
            <div :style="`background-image: url(${item.banner})`" class="imgbox"></div>
        </el-carousel-item>
        </el-carousel>
    </div> -->

    <!-- <div class="banner-pro">
        <div class="">
            <img src="@/assets/uploads/banner1.png" alt="">
        </div>
    </div>     -->

    <!-- 面包屑区域 -->
    <div class="nav-bread">
        <div class="container">
            <div class="bread-box">
                <div class="bread-item">
                    <!-- <span> > </span> -->
                    <!-- <a href="">产品中心</a> -->
                    <RouterLink to="/">首页</RouterLink>
                </div>
                <div class="bread-item">
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
                    <!-- <div class="Product-nav-list">
                        <ul>
                            <a href="http://" target="_blank" rel="noopener noreferrer"></a>
                            <li v-for="item in categoryStore.getSelectCategoryList" :key="item.id">
                                <RouterLink :to="`/product/${item.id}`">{{ item.name }}</RouterLink>
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
                    <div class="item">
                        <div class="pic-item" v-for="item in SKUList" :key="item.id">
                            <div class="pic-box">
                                <RouterLink :to="`/product/${item.router}/detail/${item.id}`"><img :src="item.default_image" :alt="item.name"></RouterLink>
                                <!-- <img src="@/assets/uploads/STM28-15.png" alt=""> -->
                            </div>
                            <RouterLink :to="`/product/${item.router}/detail/${item.id}`"><h4>{{ item.name }}</h4></RouterLink>
                            <!-- <h4>STM28一体化步进电机</h4> -->
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<style scoped lang='scss'>
// banner
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
    //标题样式
    .head {
        padding: 40px 0;

        h3 {
        flex: 1;
        font-size: 32px;
        font-weight: normal;
        margin-left: 20px;
        height: 35px;
        line-height: 35px;
        color: #f2f2f2;
        }

        p {
            margin-top:10px;
            font-size: 16px;
            color: #cacaca;
            margin-left: 20px;
        }
    }

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
                }
            }
        }
        /* 左侧导航列表 */
        // .Product-nav-list {
        //     margin-top: 16px;
        //     li {
        //         margin-bottom: 2px;
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

        .item {
            display: flex;
            flex:1;
            flex-wrap: wrap; 
            // flex: 0 0 33%;
            margin-bottom: 20px;
            // height: 190px;
            // border: 1px solid #000;
            .pic-item {
                // margin: 0 10px 20px;
                padding: 0 10px 20px;
                flex: 0 0 32%;
                overflow: hidden;
                .pic-box {
                    /* margin-bottom: 1.5rem; */
                    // flex: 0 0 40%;
                    border: .5px solid #555;
                    
                    img {
                        width: 100%;
                    }
                }
                h4 {
                    padding: 0 15px;
                    width: 100%;
                    height: 30px;
                    overflow: hidden;
                    color: #fff;
                    font-size: 13px;
                    font-weight: 600;
                    line-height: 30px;
                    background-color: #003abd;
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
            .Product-display-right {

                .item {
                    margin-right: 20px;
                    .pic-item {
                        flex: 0 0 50%;

                    }
                }

            }
        }

    }

}

@media (max-width: 768px) {

}

</style>