<script setup>

import { solutionAPI } from "@/apis/home"
import { onMounted, ref } from "vue"

// 1.获取数据
const solutionList = ref([])
const caption = ref('')                 // 副标题
const content = ref('')                 // 摘要
const getsolutionList = async() => {
    const res = await solutionAPI()
    solutionList.value = res.data
    caption.value = res.headers[0].caption
    content.value = res.headers[0].content
    // dealData()
}

// 2.数据处理
//方法(1)根据id取前4个：数字自增i ; 方法(2)获取id,去重，排序，取前4个
const resultData = ref([])
const dealData = () => {    //方法(1)
    for (let i =1 ; i < 5 ; i++) {
        //筛选id并组成新数据
        // solutionList.value.filter((item) => item.SolutionItem.id === i)
        resultData.value.push(solutionList.value.filter((item) => item.SolutionItem.id === i))
    }
    // console.log(resultData.value)
}

//切换标签
const activeName = ref('first-0')
const handleClick = () => {

}

onMounted(() => getsolutionList())
</script>

<template>
    <!-- 分类区域 -->
    <div class="home-panel-sol">
        <div class="container">
            <el-tabs
                v-model="activeName"
                type="card"
                class="demo-tabs"
                @tab-click="handleClick"
            >
                <el-tab-pane v-for="(item,index) in solutionList.slice(0, 5)" :key="index" label="User" :name="`first-${index}`">
                    <template #label>
                        <span class="custom-tabs-label">
                            <!-- <el-icon><calendar /></el-icon> -->
                            <span class="iconfont " :class="item.icon" ></span>
                            <span>{{item.name}}</span>
                        </span>
                    </template>
                    <!-- 内容 -->
                    <div class="content">
                        <div class="item" v-for="(i,index) in item.SolutionList.slice(0, 5)" :key="index">
                            <ul>
                                <li class="pic">
                                    <RouterLink :to="`/solution/detail/${i.id}`"><img v-img-lazy="i.image" :alt="'NiMotion' + `${i.name}`"></RouterLink>
                                </li>
                                <li class="txt">
                                    <RouterLink :to="`/solution/detail/${i.id}`">
                                        <div class="info">
                                            <h4>{{ i.name }}</h4>
                                            <p>{{ i.description }}</p>
                                        </div>
                                    </RouterLink>
                                    <div class="button-detail">
                                        <RouterLink :to="`/solution/detail/${i.id}`">Read More<span> > </span></RouterLink>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </el-tab-pane>

                <el-tab-pane label="more" name="five">
                    <template #label>
                        <RouterLink to="/solution" target="_blank">
                            <span class="custom-tabs-label">
                                <!-- <el-icon><calendar /></el-icon> -->
                                <span class="iconfont icon-menu" ></span>
                                <span>More</span>
                            </span>
                        </RouterLink>

                    </template>
                    
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>

</template>


<style scoped lang='scss'>
.home-panel-sol {
    // width: 100vw;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.70);
    // background-image: url(@/assets/images/sol_bg.png);

    // 1.el-tags样式重定义
    ::v-deep(.el-tabs) {
    padding: 0 15px;
    padding-bottom: 30px;
    width: 100%;
    height: 100%;   /* 去掉默认高度 */
    --el-tabs-header-height: 100%;

    //头部区header
    .el-tabs__header {
        border: none;   //去掉下划线
        margin-bottom: 30px;
        // width: 100%;
        .el-tabs__nav-scroll{
            // background-color: #fff;
            padding: 5px 0;
            // width: 100%;
        
            //标签区 
            .el-tabs__nav {
                //margin: 0 5px;      /* 使用rpx没有效果 */
                border-radius:0;    /* 去掉圆角 */
                border: none;   //去掉边框
                width: 100%;

                //标签item ：默认样式
                .el-tabs__item {
                    margin: 0 10px;
                    padding: 16px 0;
                    border: none;   //去掉边框
                    border-radius: 10px;
                    background-color: rgba($color: #fff, $alpha: .8);
                    width: 23%;
                    transition: all .5s;

                    .custom-tabs-label {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        padding: 0px 8px;
                        width: 100%;
                        font-size: 18px;
                        // border-radius: 10px;
                        .iconfont {
                            font-size: 34px;
                        }
                    }
                    a {
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                    /*悬浮样式*/
                    &:hover {
                        color: #fff;
                        // transform: translate3d(0, -3px, 0);
                        background-color: rgba($color: #003abd, $alpha: 1);
                        span {
                            transform: translate3d(0, -2px, 0);
                        }
                        a{
                            color: #fff;
                        }
                    }
                }
                /*标签item ：选中样式*/
                .el-tabs__item.is-active {
                    .custom-tabs-label {
                        color: #fff;
                    }
                    
                    background-color: rgba($color: #003abd, $alpha: 1);
                    span {
                        transform: translate3d(0, -2px, 0);
                    }
                }
            }
        }
    }
    //内容区content
    .el-tabs__content {
        margin-top: 8px;
    }
    }

    // 2.内容列表 图文
    .content {
        margin: 20px 10px;

        .item {
            width: 100%;
            margin-top: 15px;

            ul {
                display: flex;
                justify-content:space-between;
                align-items: center;

                .pic {
                    display: flex;
                    flex: 0 1 18%;
                    justify-content:left;
                    margin: 5px;
                    // padding: 5px 5px;
                    max-width: 18%;
                    border-radius: 10px;
                    overflow: hidden;
                    transition: all .3s;

                    img {
                        max-width: 100%;
                        height: auto;
                    }

                    &:hover {
                        transform: translate3d(0, -3px, 0);
                        // box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
                    }
                }

                .txt {
                    // flex: 0 1 65%;
                    flex: 1;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 15px 10px;
                    width: 100%;
                    max-height: 116px;
                    overflow: hidden;

                    .info {
                        // flex: 0 1 80%;
                        flex: 1;
                        padding: 10px;
                        h4 {
                            margin-bottom: 5px;
                            color: #f2f2f2;
                            font-size: 16px;
                        }

                        p {
                            color: #c6c4c4;
                            font-size: 12px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 3;
                            -webkit-box-orient: vertical;
                        }
                    }
                    &:hover {

                        h4 {
                            color: #fff;
                        }

                        p {
                            color: #dedede;
                        }
                    }
                    // 按钮：详情
                    .button-detail {
                        flex: 0 1 15%;
                        min-width: 150px;

                        a {
                            display: block;
                            /* margin: 4.6rem 5rem; */
                            padding: 6px 12px 6px 18px;
                            max-width: 90%;
                            /* height: 2.6rem;0034ae */
                            border-radius: 5px;
                            // background-color: #b2b2b2;
                            background-color: #0034ae;
                            text-align: center;
                            font-size: 12px;
                            // color: #fff;
                            color: #e7e7e7;
                            line-height: 26px;

                            &:hover {
                                background-color: #003abd;
                                color: #fff;
                            }
                        }

                    }
                }

            }
        }
    }
}


@media (max-width: 1024px) {
    .home-panel-sol {

        //el-tags样式
        ::v-deep(.el-tabs) {
            .el-tabs__header {
                .el-tabs__nav-scroll{
                    //标签区 
                    .el-tabs__nav {
                        //标签item ：默认样式
                        .el-tabs__item {
                            padding: 5px 0;
                            span {
                                font-size: 18px;
                            }
                        }
                    }
                }
            }
        }
    }

}

@media (max-width: 960px) {
    .home-panel-sol {
        // 1.el-tags样式
        ::v-deep(.el-tabs) {
            .el-tabs__header {
                .el-tabs__nav-scroll{
                    //标签区 
                    .el-tabs__nav {
                        //标签item ：默认样式
                        .el-tabs__item {

                            span {
                                font-size: 16px;
                                .iconfont {
                                    font-size: 24px;
                                }
                            }

                        }
                    }
                }
            }
        }
        // 2.内容列表 图文
        .content {
            .item {
                ul {
                    .pic {
                        flex: 0 1 35%;
                        max-width: 35%;
                    }
                    .txt {
                        flex-direction: column;
                        align-items: start;
                        max-height: 216px;

                        //按钮：详情
                        .button-detail {
                            margin-left: 10px;
                            min-width: 110px;
                            a {
                                padding: 2px 10px 2px 12px;
                                max-width: 80%;
                            }
                        }

                    }
                }
            }
        }
    }


}

@media (max-width: 768px) {
    .home-panel-sol {
        //el-tags样式
        ::v-deep(.el-tabs) {
            .el-tabs__header {
                .el-tabs__nav-scroll{
                    //标签区 
                    .el-tabs__nav {
                        //标签item ：默认样式
                        .el-tabs__item {

                            span {
                                font-size: 16px;
                                .iconfont {
                                    font-size: 24px;
                                }
                            }

                        }
                    }
                }
            }
        }
        // 2.内容列表 图文
        .content {
            .item {
                ul {
                    flex-direction: column;
                    // align-items: center;
                    margin-top: 10px;
                    .pic {
                        // flex: 1;
                        // flex: 0 1 35%;
                        justify-content:center;
                        max-width: 100%;
                        width: 100%;
                    }
                    .txt {
                        flex-direction: column;
                        align-items: start;
                        padding: 5px 0px;
                        max-height: 216px;
                        .info {
                            padding: 0px 10px;
                        }

                        //按钮：详情
                        .button-detail {
                            display: none;
                        }

                    }
                }
            }
        }
    }

}


@media (max-width: 575px) {
    .home-panel-sol {
        //el-tags样式
        ::v-deep(.el-tabs) {
            padding-bottom: 0px;
            .el-tabs__header {
                margin-bottom: 0px;
                .el-tabs__nav-scroll{
                    //标签区 
                    .el-tabs__nav {
                        //标签item ：默认样式
                        .el-tabs__item {
                            margin: 0 4px;
                            padding: 5px 0;
                            width: 24%;
                            .custom-tabs-label {
                                // font-size: 10px;
                                .iconfont {
                                    font-size: 22px;
                                }
                                span {
                                    // display: none;
                                    font-size: 12px;
                                }
                                span:last-child {
                                    display: none;
                                }
                            }
                            /*悬浮样式*/
                            &:hover {

                                span {
                                    transform: translate3d(0, 0, 0);
                                }
                            }
                        }
                        /*标签item ：选中样式*/
                        .el-tabs__item.is-active {
                            
                            // background-color: rgba($color: #003abd, $alpha: 1);
                            span {
                                transform: translate3d(0, 0, 0);
                            }
                        }
                    }
                }
            }
        }
        // 2.内容列表 图文
        .content {
            margin-top: 0;
            .item {
                ul {
                    .txt {
                        .info {

                            p {
                                display: none;
                            }
                        }

                    }
                }
            }
        }
    }

}
</style>