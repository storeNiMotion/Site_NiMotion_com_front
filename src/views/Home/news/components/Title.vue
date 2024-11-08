<script setup>

import { newsAPI } from "@/apis/home"
import { onMounted, watch, ref } from "vue"

//获取数据

const caption = ref('')
const content = ref('')

const getnewsList = async() => {
    const res = await newsAPI()
    caption.value = res.headers[0].caption
    content.value = res.headers[0].content

}

// 4.钩子生命周期函数

//4.1数据调用 开始就调
onMounted(() => getnewsList())
// onMounted(() => widthCurrent())

</script>

<template>
    <div class="home-panel-news">
        <div class="container">
            <!-- 新闻描述区域 -->
            <div class="head">
                <div class="left">
                    <h3>{{ caption }}</h3>
                    <p>{{ content }}</p>
                </div>
                <!-- 右侧更多按钮 -->
                <!-- <div class="right">
                    <RouterLink to="/news" class="more">View All<span class="iconfont icon-arrow-right-bold"></span></RouterLink>
                </div> -->
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>
.home-panel-news {
    // width: 100vw;
    width: 100%;
    background-color: #fff;
    // padding-bottom: 40px;
    .head {
        padding: 40px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
        flex: 1;
        font-size: 32px;
        font-weight: normal;
        // margin-left: 20px;
        height: 35px;
        line-height: 35px;
        }
        p {
            margin-top:10px;
            font-size: 16px;
            color: #999;
            // margin-left: 20px;
        }
        .more{
            margin-right: 15px;
            color: #A1A1A1;
            font-size: 14px;
            &:hover {
                color: #003abd;
            }
        }
    }

}

@media (max-width: 768px) {
  .home-panel-news {
    .head {
      padding: 40px 15px 20px;

    }
  }
}

@media (max-width: 575px) {
  .home-panel-news {
    .head {
      padding: 40px 15px 0px;
      h3 {
        font-size: 25px;
      }
    }
  }
}

</style>