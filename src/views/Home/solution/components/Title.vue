<script setup>

import { solutionAPI } from "@/apis/home"
import { onMounted, ref } from "vue"

// 1.获取数据
const caption = ref('')                 // 副标题
const content = ref('')                 // 摘要
const getsolutionList = async() => {
    const res = await solutionAPI()

    caption.value = res.headers[0].caption
    content.value = res.headers[0].content
    // dealData()
}

onMounted(() => getsolutionList())
</script>

<template>
    <!-- 标题描述区域 -->
    <div class="home-panel-sol">
        <div class="container">
            <div class="head">
                <!-- 主标题和副标题 -->
                <h3>{{ caption }}</h3>
                <p>{{ content }}</p>
            </div>
        </div>
    </div>

</template>


<style scoped lang='scss'>
.home-panel-sol {
    // width: 100vw;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.70);

    //标题样式
    .head {
        padding: 40px 0;
        // display: flex;
        // align-items: flex-end;
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
            padding-right: 10px;
            font-size: 16px;
            color: #cacaca;
            margin-left: 20px;
        }
    }

}


@media (max-width: 1024px) {

}

@media (max-width: 960px) {


}

@media (max-width: 768px) {

}

@media (max-width: 575px) {
    .home-panel-sol {

        //标题样式
        .head {
            padding: 30px 0;

            h3 {
                flex: 1;
                font-size: 25px;
                font-weight: normal;
                margin-left: 20px;
                height: 35px;
                line-height: 35px;
                color: #f2f2f2;
            }

            p {
                margin-top:10px;
                padding-right: 10px;
                font-size: 14px;
                color: #cacaca;
                margin-left: 20px;
            }
        }

    }
}
</style>