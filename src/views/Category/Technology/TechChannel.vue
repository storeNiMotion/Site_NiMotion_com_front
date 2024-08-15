<script setup>
// import { TabsPaneContext } from 'element-plus'
import { QuestionFilled } from '@element-plus/icons-vue'
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

onMounted(() => getsolutionList())
</script>

<template>
    <!-- banner区域 -->
    <!-- <div class="banner-pro">
        <div class="">
            <img src="@/assets/uploads/banner1.png" alt="">
        </div>
    </div> -->
    <!-- 面包屑区域 -->
    <div class="Support-panel-nav-bread">
        <div class="container">
            <div class="nav-bread">
                <a href="">首页</a>
                <span> > </span>
                <a href="/support">服务支持</a>
            </div>
        </div>
    </div>
    <!-- 方案主体 -->
    <div class="Support-panel">
        <div class="container">
            <div class="Support-display">
                <el-card style="max-width: 32%" v-for="item in 4" :key="item.id">
                    <div class="info-box">
                        <RouterLink to="/support/list">
                            <el-icon><QuestionFilled /></el-icon>
                            <h4>技术问答</h4>
                        </RouterLink>
                        
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
// 3.主体
.Support-panel {
    margin-top: 20px;
    padding-bottom: 20px;
    // background-color: rgba(0, 0, 0, 0.70);
  .Support-display {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    // 3.1 重新定义el卡片
    ::v-deep(.el-card) {
        margin-bottom: 30px;
        width: 30%;
        .el-card__body {
            padding: 0;
            border: none;
        }
    }
    // 3.3 信息
    .info-box {
        display: flex;
        // flex-direction: column;
        justify-content: center;
        padding: 30px 30px;
        a {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 50px;
            &:hover {
                color: #003abd !important;
                h4 {
                    color: #003abd;
                }
            }
        }
        h4 {
            margin-top: 10px;
            color: #444444;
            font-size: 26px;
            font-weight: 500;
        }
    }
  }
}

</style>