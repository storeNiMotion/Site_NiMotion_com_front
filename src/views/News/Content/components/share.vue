<script setup>
// import { TabsPaneContext } from 'element-plus'
import { Calendar, Search } from '@element-plus/icons-vue'
import { getNewDetailAPI } from "@/apis/news"
import { onMounted, ref } from "vue"
import { useRoute, onBeforeRouteUpdate } from "vue-router"   // 引入路由
import router from '@/router/index'
const route = useRoute()                //调用路由

//获取数据
const NewDetail = ref([])

const getNewDetail = async (id = route.params.id) => {
    const res = await getNewDetailAPI(id)
    // console.log(router);
    NewDetail.value = res.data[0]
    document.title = NewDetail.value.name
    // console.log(document.title);

}

onMounted(() => getNewDetail())
</script>

<template>
    <!-- 02.分享 -->
    <div class="support-share">
        <div class="toolbar">
            <div class="share-box">
                <span>分享到：</span>
                <ul class="share-list">
                    <li>
                        <RouterLink to="">
                            <i class="iconfont icon-menu"></i>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink to="">
                            <i class="iconfont icon-menu"></i>
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>

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



@media (max-width: 1200px) {}

@media (max-width: 960px) {}

@media (max-width: 768px) {}
</style>