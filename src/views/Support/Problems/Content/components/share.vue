<script setup>
// import { TabsPaneContext } from 'element-plus'
import { Calendar, Search } from '@element-plus/icons-vue'
import { getSolutionDetailAPI } from "@/apis/solution"
import { onMounted, ref } from "vue"
import { useRoute, onBeforeRouteUpdate } from "vue-router"   // 引入路由

const route = useRoute()                //调用路由
// 1.获取数据
const solutionDetail = ref([])

const getsolutionDetail = async(id = route.params.id) => {
    const res = await getSolutionDetailAPI(id)
    solutionDetail.value = res.data[0]
    // document.title = solutionDetail.value.name + ' - 立迈胜NiMotion - "智能控制 驱动未来"！'
    // console.log(solutionDetail.value);
}

// 2.分享
const shareUrl =location.href
const isOverlayVisible=ref(false)
// 分享到QQ
const shareToQQ= function() {
  window.open(
      `https://connect.qq.com/widget/shareqq/index.html?url=${shareUrl}&title=${sysInfo}&source=${shareUrl}&desc=${sysInfo}&pics=`)
}

// 分享到微信：控制鼠标移入移出的页面是否出现
const toggleOverlay=function () {
  isOverlayVisible.value = true
}
const outggleOverlay = () => {
  isOverlayVisible.value = false
}

// 分享到微博
const shareToMicroblog = function () {
  //跳转地址
  window.open(
      `https://service.weibo.com/share/share.php?url=${ 
      shareUrl
      }&title=${ 
      sysInfo}`
  );
}

// 分享到qq空间
const shareToQQRom = function () {
  //跳转地址
  window.open(
      `https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${ 
      shareUrl
      }&title=${ 
      sysInfo 
      }&summary=${ 
      sysInfo}`
  );
}


onMounted(() => getsolutionDetail())
</script>

<template>
    <!-- 02.分享 -->
    <div class="support-share">
        <div class="toolbar">
            <div class="share-box">
                <span>分享到：</span>
                <ul class="share-list">
                    <li>
                        <RouterLink  to="">
                            <i class="iconfont icon-menu" ></i>
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink  to="">
                            <i class="iconfont icon-menu" ></i>
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
</style>