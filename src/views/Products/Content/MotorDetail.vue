<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { getProductDetailAPI } from "@/apis/product"   //导入API
import { watch, onMounted, ref } from "vue"
import { useRoute } from "vue-router"   // 引入路由

// 1.获取数据
const productDetail = ref([])   //总数据

const route = useRoute()    //调用路由
const getProductDetail = async() => {
    // console.log(route.params.id)
    const res = await getProductDetailAPI(route.params.id)
    productDetail.value = res.data[0]
    // console.log(productDetail.value);
    dealData()
    // console.log(tableData.value)

}

// 2.处理数据

const productImages = ref([])       // 2.1)图片列表
//折叠面板
const activeNames = ref(['spec-1'])
const numberHeadList = ref([])      // 2.2)型号列表
const numberHeadListKey = ref([])   //型号表头
const item = ref()
const tableData = ref([])           //型号数据

// const specList = ref([])        //规格列表
const relatedroductList = ref([])       // 2.3)相关产品列表
const num = ref(4)                      //每屏显示数量
const page = ref(1)                     //展示屏数
const dealData = () => {
    // 1.图集
    productImages.value = productDetail.value.images
    // 2.型号列表
    numberHeadList.value = productDetail.value.product_number
    // 2.1构造行数据
    // numberHeadListKey.value = numberHeadList.value[0].product_spec.map((item) => item.name)
    // 2.2构造列数据
    for (let k=0; k < numberHeadList.value.length; k++){
        item.value = numberHeadList.value[k].product_spec.map(ele => {
            return JSON.stringify(ele.name) + ':' + JSON.stringify(ele.value)
        }).join(',')
        item.value = '{' + item.value + '}'
        tableData.value.push(JSON.parse(item.value))
    }
    // 3.规格列表
    // specList.value = productDetail.value.product_spec
    // 4.相关产品
    relatedroductList.value = productDetail.value.related_pro
    console.log(relatedroductList.value);
}
// 弃用
// const dealData = () => {
//     // 1.图集
//     productImages.value = productDetail.value.images
//     numberHeadList.value = productDetail.value.number[0].number
//     // 2.构造行数据
//     for (let k in numberHeadList.value[0]){
//         if (numberHeadList.value[0][k]) {
//             numberHeadListKey.value.push({"key": k, "value": numberHeadList.value[0][k]})
//         }
        
//     }
//     // tableData.value = productDetail.value.number
//     // 3.构造列数据
//     productDetail.value.number.forEach(element => {
//         if (element.name !== "header") {
//             tableData.value.push(element.number[0])
//         }
        
//     })
//     // 4.相关产品
//     relatedroductList.value = productDetail.value.related
//     if (relatedroductList.value.length % num.value) {
//         page.value = parseInt(relatedroductList.value.length / num.value) + 1
//     } else {
//         page.value = relatedroductList.value.length / num.value
//     }
// }

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
  
    <!-- 面包屑区域 -->
    <div class="product-panel-nav-bread">
        <div class="container">
            <div class="nav-bread">
                <!-- <a href="">首页</a> -->
                <RouterLink to="/">首页</RouterLink>
                <span> > </span>
                <!-- <a href="">产品中心</a> -->
                <RouterLink to="/product">产品中心</RouterLink>
                <span> > </span>
                <!-- <a href="">STM一体化步进电机</a> -->
                <RouterLink :to="`/product/list/${ productDetail.category }`">{{ productDetail.category_name }}</RouterLink>
                <span> > </span>
                <!-- <a href="" class="active">STM28一体化步进电机</a> -->
                <span>{{ productDetail.name }}</span>
            </div>
        </div>
    </div>
    <!-- 产品主体 -->
    <div class="product-panel-detail">
        <div class="container">
            <!-- 01.产品图文概述 -->
            <div class="Product-detail">
                <!-- 产品图片 -->
                <el-carousel trigger="click"  :autoplay="false" loop="false" class="card-bd" >
                    <el-carousel-item class="card-item" v-for="item in productImages" :key="item.id">
                        <el-card class="card" shadow="hover" >
                            <img
                                :src="item.image"
                                style="width: 100%"
                                />
                        </el-card>
                        <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
                    </el-carousel-item>
                </el-carousel>
                <!-- 产品概述 -->
                <div class="Product-info">
                    <h2>{{ productDetail.name }}</h2>
                    <!-- <h3>一体化步进电机</h3> -->
                    <div class="description">
                        <div v-html="productDetail.description" style="margin-top: 20px;color: #454545;font-size: 14px;"></div>
                        <!-- <textarea name="" id=""></textarea> -->
                    </div>
                    <a href="https://affim.baidu.com/unique_30577829/chat?siteId=15043094&userId=30577829&siteToken=8b9903f017898a80ab853887d15b9743" class="btn-face" target="_blank">立即咨询</a>
                    <!-- <div class="btn-face">立即咨询</div> -->
                </div>
            </div>
            <!-- 02.产品规格 -->
            <div class="Product-spec">
                <el-collapse v-model="activeNames" @change="handleChange">
                    <el-collapse-item title="型号规格" name="spec-1">
                        <el-table :data="tableData" style="width: 100%" height="auto">
                            <el-table-column :prop="item" :label="item" v-for="item in numberHeadListKey" :key="item.id" />
                                <!-- <template #default="obj">
                                    {{ obj.row }}
                                </template> -->
                            <!-- </el-table-column> -->
                            
                        </el-table>
                    </el-collapse-item>
                    <el-collapse-item title="技术规格" name="spec-2">
                        <!-- 这里使用文本域content -->
                        <div v-html="productDetail.content"></div>
                        <!-- <el-table :data="tableData" style="width: 100%" height="auto">
                            <el-table-column fixed prop="date" label="型号" width="" />
                            <el-table-column prop="name" label="额定电压" width="" />
                            <el-table-column prop="state" label="额定电流" width="" />
                            <el-table-column prop="city" label="保持力矩" width="" />
                            <el-table-column prop="address" label="步距角" width="" />
                            <el-table-column prop="zip" label="相数" width="" />
                        </el-table> -->
                    </el-collapse-item>
                    <el-collapse-item title="外形尺寸" name="spec-3">
                        <div class="spec-img">
                            <img
                                :src="productDetail.drawing_image"
                                style="width: 100%"
                                />
                        </div>
                    </el-collapse-item>
                    <el-collapse-item title="矩频曲线" name="spec-4">
                        <div class="spec-img">
                            <img
                            :src="productDetail.curve_image"
                                style="width: 100%"
                                />
                        </div>
                    </el-collapse-item>
                    </el-collapse>
            </div>
            <!-- 03.相关产品 暂去掉-->
            <div class="Product-related">
                <h2>相关产品</h2>
                <el-carousel indicator-position="outside" arrow="always" trigger="click" :autoplay="false" loop="false" 
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
//面包屑
.nav-bread {
    width: 100vw;
    padding: 0 20px;
    height: 36px;
    // background-color: #f2f3f4;
    a {
        color: #1d1d1f;
        font-size: 12px;
        line-height: 36px;
        &:hover {
            color: #003abd;
        }
    }
}
//产品内容
.product-panel-detail {
    width: 100vw;
    background-color: #fff;
    padding-bottom: 30px;
    // 01.产品图文概述
    .Product-detail {
        display: flex;
        justify-content: space-between;
        padding: 40px 10px;
        height: 600px;

        // 1.1 图片卡片容器
        .card-bd{
            padding: 0px 5px;
            width: 46%; //定义宽度
        }
        // 1.2 重新定义跑马灯css
        ::v-deep(.el-carousel) {
            // height: 100%;
            // 1.2.1 图片区
            .el-carousel__container{
                width: 100%;
                // height: 360px;
                height: 100%;
                .el-carousel__item {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex: 1;
                    justify-content: space-between;
                    margin:0 5px;
                    .el-card {
                        width: 100%;
                        height: auto;
                        .el-card__body {
                            padding: 0;
                        }
                    }
                }
            }
            // 1.2.2 指示器
            .el-carousel__indicators {
                margin-bottom: 15px;    // 距离底部高度
                .el-carousel__indicator {
                    .el-carousel__button {
                        transition: all .3s;
                        margin: 0 2px;              // 默认间距宽度
                        background-color:#B4B4B5; // 默认颜色
                        width: 20px;                // 默认宽度
                    }
                }
                .is-active {
                    .el-carousel__button {
                        background-color:#003abd; // 激活颜色
                        width: 30px;                // 激活宽度
                    }
                }
            }
        }

        // 1.3 产品概述（右侧区域）
        .Product-info {
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: center;
            margin-left: 28px;
            padding-left: 28px;
            h2 {
                color: #003abd;
                font-size: 32px;
            }
            h3 {
                margin-top: 15px;
                color: #454545;
                font-size: 16px;
            }
            .description {
                margin: 10px 0;
                p {
                    margin-top: 30px;
                    color: #454545;
                    font-size: 14px;
                }
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
    }
    // 02.产品规格
    .Product-spec {
        // margin-bottom: 10px;
        padding: 0 15px;
        // 2.1 重新定义折叠面板el样式
        ::v-deep .el-collapse {
            border: none; // 去掉边框
            .el-collapse-item {
                // 2.1.1 头部
                .el-collapse-item__header { 
                    margin-top: 5px;
                    padding: 0 30px;
                    background-color:#f2f3f4;
                    border: none;
                    font-weight: 600;
                    &:hover {
                        background-color: #b5c6ee;
                        color: #003abd;
                    }
                }
                // 2.1.2 激活状态
                .is-active {
                    background-color: #b5c6ee;
                    color: #003abd;
                }
                // 2.1.3 内容区
                .el-collapse-item__wrap {
                    border: none;
                    // 2.1.3.1 重新定义表格el
                    .el-table {
                        .el-table__header {
                            th {
                                .cell { //表头文字
                                    text-align: center; 
                                    font-weight: 500;
                                }
                            }
                        }
                        .el-table__body-wrapper {
                            tbody {
                                .cell { //表内容文字
                                    text-align: center;
                                    font-weight: 500;
                                }
                            }
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
    // 03.相关产品 暂去掉
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
            .el-carousel__container {
                // height: 320px;
                height: auto;
                .el-carousel__item {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex: 1;
                    justify-content: space-between;
                    margin:0 5px;
                    .el-card {
                        width: 24%;
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


</style>