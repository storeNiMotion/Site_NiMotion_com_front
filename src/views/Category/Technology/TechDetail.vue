<script setup>
// import { TabsPaneContext } from 'element-plus'
import { Calendar, Search } from '@element-plus/icons-vue'
import { solutionAPI } from "@/apis/home"
import { onMounted, ref } from "vue"


//获取数据
const solutionList = ref([])
const caption = ref('')
const content = ref('')
const getsolutionList = async() => {
    const res = await solutionAPI()
    solutionList.value = res.data
    caption.value = res.category[0].caption
    content.value = res.category[0].content
}

//折叠面板
const activeNames = ref(['spec-1'])
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'No. 189, Grove St, Los Angeles',
    city:'',
    address:'',
    zip:''
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'No. 189, Grove St, Los Angeles',
    city:'',
    address:'',
    zip:''
  }
]

onMounted(() => getsolutionList())
</script>

<template>
    <!-- 面包屑 -->
    <div class="support-panel-nav-bread">
        <div class="container">
            <div class="nav-bread">
                <a href="">首页</a>
                <span>></span>
                <a href="">技术支持</a>
                <span>></span>
                <a href="">STM一体化步进电机</a>
                <span>></span>
                <a href="" class="active">STM28一体化步进电机</a>
            </div>
        </div>
    </div>
    <!-- 主体 -->
    <div class="support-panel-detail">
        <div class="container">
            
            <div class="support-detail">
                <!-- 01.产品图文概述 -->
                <div class="article">
                    <div class="detail-title">
                        <h1>【科普知识】伺服电机中的内置制动器</h1>
                        <div class="info-box">
                            <span class="date">2023-12-5</span>
                        </div>
                    </div>
                    <div class="detail-content">
                        <p>在工业自动化和机器人技术快速发展的今天，伺服电机作为核心驱动元件，其性能与功能直接影响整个系统的运行效率与稳定性。 
                            作者：立迈胜NiMotion https://www.bilibili.com/read/cv34763823/ 出处：bilibili</p>
                    </div>
                    <div class="detail-footer">
                        <div class="article-tags">
                            22
                        </div>
                    </div>
                </div>
                <!-- 02.分享 -->
                <div class="support-share">
                    <div class="toolbar">
                        <div class="share-box">
                            <span>分享到：</span>
                            <ul class="share-list">
                                <li>
                                    <RouterLink  to="">
                                        <!-- <el-icon ><Search /></el-icon> -->
                                        <i class="iconfont icon-menu" ></i>
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink  to="">
                                        <!-- <el-icon ><Search /></el-icon> -->
                                        <i class="iconfont icon-menu" ></i>
                                    </RouterLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 03.相关 -->
            <!-- <div class="Product-related">
                <h2>相关产品</h2>
                <el-carousel indicator-position="outside" arrow="always" trigger="click" :autoplay="false" loop="false" 
                class="card-bd" height="340px" @change="slideChange">
                    <el-carousel-item class="card-item" v-for="item in 2" :key="item.id">
                        <el-card class="card" shadow="hover" v-for="item in 4" :key="item.id">
                            <RouterLink to="/">
                                <img
                                src="https://www.nimotion.com/public_uploadfile/2023/1127/STM28-7.jpg"
                                style="width: 100%; height: auto;"
                                />
                            </RouterLink>
                            <template #footer>
                                <RouterLink to="/">标题</RouterLink>
                            </template>
                        </el-card>
                    </el-carousel-item>
                </el-carousel>
            </div> -->
        </div>
    </div>

</template>

<style scoped lang='scss'>
//面包屑
.nav-bread {
    margin: 0 auto;
    // padding: 0 20px;
    max-width: 900px;
    height: 46px;
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

//内容
.support-panel-detail {
    // background-color: #fff;
    padding-bottom: 30px;
    // 01.图文内容
    .support-detail {
        margin: 0 auto;
        padding: 40px;
        max-width: 900px;
        height: 600px;
        background-color: #fff;
        // border-bottom: 1px solid #e5e9ef;

        // 01.图文
        .article {
            border-bottom: 1px solid #e5e9ef;
            margin-bottom: 20px;
            // 1.1 标题区
            .detail-title {
                padding: 0px 80px;
                h1 {
                    margin-bottom: 16px;
                    // padding: 0px 80px;
                    //width: 46%; //定义宽度
                    min-height: 39px;
                    font-size: 28px;
                    font-weight: 600;
                }
                .info-box {
                    margin-bottom: 20px;
                    color: #999;
                    font-size: 13px;
                }
            }
            // 1.2 内容区
            .detail-content {
                margin-bottom: 50px;
                padding: 0px 80px;
            }
            // 1.3 
            .detail-footer {
                padding: 0 80px;
                margin-bottom: 39px;
            }
        }
        // 02.分享
        .support-share {
            // padding: 0 40px;
            // background-color: #fff;
            width: 100%;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -ms-flex-align: center;
            align-items: center;
            font-size: 14px;
            color: #505050;
            .share-box {
                display: flex;
                justify-content: center;
                align-items: center;
                ul {
                    display: flex;
                    li {
                        background-color: #505050;
                        border-radius: 50%;
                        margin: 0 5px;
                        width: 30px;
                        height: 30px;
                        a {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            width: 100%;
                            height: 100%;
                            text-align: center;
                            color: #e5e9ef;
                            i {
                                font-size: 18px;
                            }
                        }
                        &:hover {
                            background-color: #003abd;
                        }
                    }
                }

            }
        }
    }

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