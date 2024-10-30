<script setup>

import 'element-plus/theme-chalk/el-message.css'
import { ref, reactive } from "vue"

const icon_data = [
  {
    "value": "WhatsApp", 
    "imgsrc": "http://www.nimotion.com/static/images/icon/icon_WhatsAPP_en.png", 
    "href": "http://wa.me/16262035767",
    "content": "+1(626)203-5767"
  },
  {
    "value": "Phone", 
    "imgsrc": "http://www.nimotion.cn/static/images/icon/icon_ph.png",
    "href": "tel:+1(626)203-5767",
    "content": "+1(626)203-5767"
  },

  {
    "value": "Email", 
    "imgsrc": "http://www.nimotion.cn/static/images/icon/icon_mail_en.png",
    "href": "mailto:nimotion-al@nimotion.com",
    "content": "nimotion-al@nimotion.com"
  },
  {
    "value": "Address", 
    "imgsrc": "http://www.nimotion.cn/static/images/icon/icon_home.png", 
    "href": "#",
    "content": "Building 3, No. 12, Jinxing Road, Daxing District, Beijing,China"
  },

]

</script>

<template>
    <!-- 主体 -->
    <div class="Contact-panel">
        <div class="container">
            <div class="display">
                <!-- 1.联系我们 -->
                <div class="item-us" id="item-us">
                    <el-card style="max-width: 100%" shadow="never">
                        <div class="info-item">
                            <div class="info-box" v-for="item in icon_data" :key="item.id">
                                <a :href="item.href" target="_blank" rel="noopener noreferrer">
                                    <img :src="item.imgsrc" alt="">
                                </a>
                                <div class="info">
                                    <h4>{{ item.value }}</h4>
                                    <p><a :href="item.href" target="_blank" rel="noopener noreferrer">{{ item.content }}</a></p>
                                </div>
                            </div>
                        </div>
                    </el-card>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>
//内容主体
.Contact-panel {
    background-color: #fff;
    width: 100vw;
    .display {
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        .item-us {
            // 3.1 重新定义el卡片
            ::v-deep(.el-card) {
                margin: 30px 0;
                width: 100%;
                border: none;

                .el-card__body {
                    //padding: 0; //去掉内边距
                    border: none;
                }
            }
            // 3.2 自定义内容样式
            .info-item {
                display: flex;
                justify-content: space-between;
                // flex-wrap: wrap;
                padding: 0 20px;
                width: 100%;
                // 3.2.3 信息box
                .info-box {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 10px 10px;
                    width: 25%;
                    a {
                        display: block;
                        img {
                            width: 120px;
                        }
                    }
                    .info {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        h4 {
                            margin-top: 20px;
                            color: #141414;
                            font-size: 18px;
                            font-weight: 600;
                        }

                        p {
                            margin-top: 14px;
                            color: #1d1d1f;
                            font-size: 13px;
                            line-height: 1.8;
                            text-align: center;
                        }
                    }

                }
            }
        }

    }

}

@media (max-width: 1024px) {
    
}

@media (max-width: 960px) {
    
}

@media (max-width: 768px) {
    .Contact-panel {
        .display {
            .item-us {
                // 3.2 自定义内容样式
                .info-item {
                    flex-wrap: wrap;

                    // 3.2.3 信息box
                    .info-box {
                        flex-direction: row;
                        margin: 10px 10px;
                        width: 100%;
                        a {
                            width: 100px;
                        }
                        .info {
                            flex: 1;
                            align-items: start;
                            margin-left: 20px;
                            // width: 100%;
                            h4 {
                                margin-top: 4px;
                            }
                            p {
                                // width: 100%;
                                text-align: left;
                                a {
                                    display: block;
                                    width: 100%;
                                }
                            }
                        }
                    }
                }
            }

        }

    }
}

@media (max-width: 575px) {

}
</style>