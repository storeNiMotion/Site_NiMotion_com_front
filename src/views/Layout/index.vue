<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import Layoutfixed from './components/Layoutfixed.vue'
import LayoutPanel from './components/LayoutPanel.vue'
import { computed, onMounted, defineProps, ref, watch } from 'vue'

import { Service, ChatDotRound, Top } from '@element-plus/icons-vue'

//触发获取导航列表的action
import { useCategoryStore } from '@/stores/catagory'

const CategoryStore = useCategoryStore()
// 
onMounted(() => {
  CategoryStore.getCategory()       // 导航
  CategoryStore.getOneCategory()    // 一级导航
  CategoryStore.getSelectNav()      // 下拉产品导航
})

//导航守卫：路由参数变化接口重新发送
import { useRoute, useRouter, onBeforeRouteUpdate } from "vue-router"   // 引入路由
const router = useRouter()
//导航守卫：路由参数变化接口重新发送
onBeforeRouteUpdate((to) => {
    // console.log('变化了')
    // console.log(to.fullPath);
    // router.replace({path: to.fullPath})
})
</script>

<template>
  <Layoutfixed />
  <!-- <div class="nav-fix">
    <LayoutNav />
    <LayoutHeader />
  </div> -->
  <LayoutNav />
  <LayoutHeader />
  <!-- <div style="margin-top: 100px;"></div> -->
  <!-- 添加key,破坏复用机制 强制销毁重建 -->
  <RouterView :key="$route.fullPath" />
  <!-- <RouterView /> -->
  <LayoutFooter :key="$route.fullPath" />

  <!-- 返回顶部 -->
  <div class="tools">
    <!-- help组件 -->
    <div class="help-tool">
      <el-popover
        placement="left-start"
        title="咨询热线"
        :width="auto"
        trigger="hover"
        content="010-60213882"
      >
        <template #reference>
          <div class="service">
              <a href="/contact" target="_blank"><el-icon><Service /></el-icon></a>
            <!-- <span class="iconfont icon-fangzhi" style="font-size: 34px;"></span> -->
          </div>
        </template>
      </el-popover>

      <el-popover
        placement="left-start"
        title="微信客服"
        :width="300"
        trigger="hover"
      >
        <template #reference>
          <div class="ChatDotRound">
              <a target="_blank" href="https://work.weixin.qq.com/kfid/kfc9d5c3834eaae18fc"><el-icon><ChatDotRound /></el-icon></a>
          </div>
        </template>
        <el-image style="width: 100%;" src="https://www.nimotion.com/public_statics/css/nimotion/img/qr_wechataccount1.jpg" fit="contain" />
      </el-popover>
    </div>

    <!-- 返回组件 -->
    <div class="backtop-box">
      <el-popover
        placement="left-start"
        title=""
        content="返回顶部"
        :width="auto"
        trigger="hover"
      >
        <template #reference>
          <el-backtop :bottom="100">
            <div class="backtop">
              <a href=""><el-icon><Top /></el-icon></a>
            </div>
          </el-backtop>
        </template>
      </el-popover>
    </div>
  </div>

</template>

<style scoped lang='scss'>
// 固定导航
.nav-fix {
  position: fixed;
  z-index: 999;
}

//右下角返回顶部
.tools {
  z-index: 9900;
  .help-tool {
    position: fixed;
    right: calc(100% - 100vw + 24px);
    bottom: 30%;
    z-index: 9900;
    padding: 16px 5px;
    background: #fff;
    box-shadow: 0 2px 14px 0 rgba(0, 0, 0, .08);
    width: 46px;
    height: 97px;
    border-radius: 72px 72px 72px 72px;
    a {
      display: block;
      width: 100%;
      text-align: center;
      font-size: 24px;
      color: #666;
      &:hover {
        color: #003abd;
      }
    }
    .service {
      margin-bottom: 8px;
      width: 100%;
    }
  }
}
// 返回顶部
.backtop-box {
  ::v-deep(.el-backtop) {
    z-index: 9900;
    line-height: 46px;
    text-align: center;
    border-radius: 50%;
    width: 46px !important;
    height: 46px !important;
    right: calc(100% - 100vw + 24px) !important;
    bottom: calc(30% - 56px) !important;
    box-shadow: 0 2px 14px 0 rgba(0, 0, 0, .08);
    .backtop {
      text-align: center;
      // line-height: 40px;
      color: #003abd;
      a {
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 24px;
        color: #666;
        &:hover {
          color: #003abd;
        }
      }
    }
  }
  ::v-deep(.el-popover) {
    .el-popover__title {
      padding: 0;
    }
  }

}

</style>