<script setup>
// import { TabsPaneContext } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
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

//切换标签
const activeName = ref('first')
const handleClick = () => {
  console.log(33)
}

//搜索
const input3 = ref('')
const select = ref('')
onMounted(() => getsolutionList())
</script>

<template>
    <!-- banner区域 -->
    <!-- <div class="banner-pro">
        <div class="">
            <img src="@/assets/uploads/banner1.png" alt="">
        </div>
    </div>     -->
    <!-- 面包屑区域 -->
    <div class="Support-panel-nav-bread">
        <div class="container">
            <div class="nav-bread">
                <a href="">首页</a>
                <span> > </span>
                <a href="">技术支持</a>
                <span> > </span>
                <a href="">STM一体化步进电机</a>
                <span> > </span>
                <a href="" class="active">STM28一体化步进电机</a>
            </div>
        </div>
    </div>
    <!-- 搜索区域 -->
    <div class="Support-panel-search">
        <div class="container">
            <div class="support-search">
                <el-input
                v-model="input3"
                style="max-width: 600px"
                placeholder="Please input"
                class="input-with-select"
                >
                    <template #prepend>
                        <el-button :icon="Search" />
                    </template>
                    <template #append>
                        <el-select v-model="select" placeholder="Select" style="width: 115px">
                        <el-option label="Restaurant" value="1" />
                        <el-option label="Order No." value="2" />
                        <el-option label="Tel" value="3" />
                        </el-select>
                    </template>
                </el-input>
            </div>
        </div>
    </div>
    <!-- 主体 -->
    <div class="Support-panel">
        <div class="container">
            <div class="Support-display">
                <el-card shadow="hover" style="max-width: 100%" v-for="item in 4" :key="item.id">
                    <div class="Support-item">
                        <div class="info-box">
                            <RouterLink to="/support/detail">
                                <h4>【知识问答】一体化电机</h4>
                                <span class="date">2023-12-5</span>
                            </RouterLink>
                            <!-- <h4>【知识问答】一体化电机</h4>
                            <span class="date">2023-12-5</span> -->
                        </div>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>
// 1.banner
.banner-pro {
    // height: 260px;
    // background-color: #F5F5F5;
    // background-image: url(../images/banner1.png);
    img {
        width: 100%;
    }
}
// 2.面包屑
.nav-bread {
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
// 2.搜索区
.Support-panel-search {
    margin-top: 20px;
    .support-search {
        padding: 0 20px;
    }
}
.nav-bread {
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
// 4.主体
.Support-panel {
    margin-top: 20px;
    padding-bottom: 20px;

  .Support-display {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;

    // 3.1 重新定义el卡片
    ::v-deep(.el-card) {
        margin-bottom: 14px;
        width: 100%;

        .el-card__body {
            //padding: 0; //去掉内边距
            border: none;

            // 3.1.1 自定义内容样式
            .Support-item {
                display: flex;

                // 3.2.3 信息box
                .info-box {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    a {
                        display: flex;
                        justify-content: space-between;
                        width: 100%;
                    }
                    h4 {
                        color: #5f5f5f;
                        font-size: 16px;
                        font-weight: 400;
                    }

                    .date {
                        color: #5f5f5f;
                        font-size: 14px;
                        text-align: center;
                    }
                }
            }
        }
        &:hover {
            h4 {
                color: #003abd !important;
            }
            .date {
                color: #003abd !important;
            }
        }
    }

  }
}

</style>