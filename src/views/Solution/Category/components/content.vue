<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { getSolutionChannelAPI } from "@/apis/solution"
import { onMounted, ref } from "vue"

//获取数据
const solutionList = ref([])
const getsolutionList = async() => {
    const res = await getSolutionChannelAPI()
    solutionList.value = res.data
    // document.title = ' 解决方案 - 立迈胜NiMotion - "智能控制 驱动未来"！'
}

onMounted(() => getsolutionList())
</script>

<template>

    <!-- 方案主体 -->
    <div class="Solution-panel">
        <div class="container">
            <div class="Solution-display">
                <el-card style="max-width: 32%" v-for="item in solutionList" :key="item.id">
                    <div class="picbox">
                        <RouterLink :to="`/solution/${item.id}`"><img :src="item.image" alt=""></RouterLink>
                    </div>
                    <div class="info-box">
                        <RouterLink :to="`/solution/${item.id}`"><h4>{{ item.name }}</h4></RouterLink>
                        <p>{{ item.content }}</p>
                        <!-- <a href="/solution/list" class="btn-face">查看更多</a> -->
                        <RouterLink :to="`/solution/${item.id}`" class="btn-face">Read more</RouterLink>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>

// 3.方案主体
.Solution-panel {
    margin-top: 20px;
    padding-bottom: 20px;
    width: 100vw;
    // background-color: rgba(0, 0, 0, 0.70);
  .Solution-display {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    // 3.1 重新定义el卡片
    ::v-deep(.el-card) {
        margin-bottom: 30px;
        .el-card__body {
            padding: 0;
            border: none;
        }
    }
    // 3.2 图片样式
    $picbox-height: 210px;
    .picbox {
        max-height: $picbox-height;
        overflow: hidden;
        img {
            height: 100%;
            // width: calc();
            transform: translateY(calc(-50% + $picbox-height/2));
        }
    }
    // 3.3 信息
    .info-box {
        padding: 20px 30px;
        h4 {
            color: #003abd;
            font-size: 20px;
            font-weight: 600;
        }
        p {
            margin-top: 20px;
            color: #1d1d1f;
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
}

</style>