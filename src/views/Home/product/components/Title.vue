<script setup>

import { comproductAPI } from "@/apis/home"
import { onMounted, watch, ref } from "vue"

//1.获取数据和数据处理
const caption = ref('')         //副标题
const content = ref('')         //摘要描述

const getcomproductList = async () => {
    const res = await comproductAPI()
    caption.value = res.headers[0].caption
    content.value = res.headers[0].content
}


// 3.钩子生命周期函数
onMounted(() => getcomproductList())

</script>

<template>
    <!-- 产品描述区域 -->
    <div class="home-panel">
        <div class="container">
            <div class="head">
                <!-- 主标题和副标题 -->
                <h3>{{ caption }}</h3>
                <div class="content">
                    <p>{{ content }}</p>
                </div>
                
            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>
.home-panel {
    // width: 100vw;
    padding: 0 20px;
    width: 100%;
    background-color: #fff;

    .head {
        padding: 40px 0;

        h3 {
            flex: 1;
            font-size: 32px;
            font-weight: normal;
            height: 35px;
            line-height: 35px;
        }
        .content {
            padding: 10px 0;
            p {
                // padding: 10px 0;
                height: fit-content;
                font-size: 16px;
                color: #999;
                color: #333;
            }
        }

    }
}



@media (max-width: 1400px) {


}

@media (max-width: 1200px) {


}

@media (max-width: 1024px) {

    .home-panel {

        .head {
            .content {
                p {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                }
            }

        }
    }
}

@media (max-width: 960px) {


}

@media (max-width: 768px) {

    .home-panel {

        .head {
            .content {
                p {
                    -webkit-line-clamp: 3;
                }
            }

        }
    }

}

@media (max-width: 575px) {
    .home-panel {

        .head {

            h3 {
                font-size: 25px;
            }
            .content {
                p {
                    font-size: 15px;
                }
            }

        }
    }

}
</style>