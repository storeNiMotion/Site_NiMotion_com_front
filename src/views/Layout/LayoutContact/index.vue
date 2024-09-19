<script setup>

import { computed, onMounted, defineProps, ref, watch } from 'vue'

import { Service, ChatDotRound, Top } from '@element-plus/icons-vue'


</script>

<template>

  <!-- 返回顶部 -->
  <div class="tools">
    <!-- help组件 -->
    <div class="help-tool">
      <!-- 电话 -->
      <el-popover
        placement="left-start"
        title="Hotline"
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

      <!-- 微信客服 -->
      <el-popover
        placement="left-start"
        title="WeChat Service"
        :width="auto"
        trigger="hover"
      >
        <template #reference>
          <div class="ChatDotRound">
              <a target="_blank" href="https://work.weixin.qq.com/kfid/kfc9d5c3834eaae18fc"><el-icon><ChatDotRound /></el-icon></a>
          </div>
        </template>
          <!-- 1.北京 -->
         <div>
          <el-popover
            placement="left-start"
            title="WeChat Service"
            :width="auto"
            trigger="hover"
          >
            <template #reference>
              <div class="ChatDotRound">
                  <a target="_blank" href="https://work.weixin.qq.com/kfid/kfc9d5c3834eaae18fc">【Beijing】</a>
              </div>
            </template>
            <el-image style="width: 100%;" src="https://www.nimotion.cn/static/images/general/qr_wechat_cnbeijing.webp" fit="contain" />
          </el-popover>
         </div>
          <!-- 2.南京 -->
          <div>
          <el-popover
            placement="left-start"
            title="WeChat Service"
            :width="auto"
            trigger="hover"
          >
            <template #reference>
              <div class="ChatDotRound">
                  <a target="_blank" href="https://work.weixin.qq.com/kfid/kfc9d5c3834eaae18fc">【Nanjing】</a>
              </div>
            </template>
            <el-image style="width: 100%;" src="https://www.nimotion.cn/static/images/general/qr_wechat_cnnanjing.webp" fit="contain" />
          </el-popover>
         </div>
          <!-- 3.深圳 -->
          <div>
          <el-popover
            placement="left-start"
            title="WeChat Service"
            :width="auto"
            trigger="hover"
          >
            <template #reference>
              <div class="ChatDotRound">
                  <a target="_blank" href="https://work.weixin.qq.com/kfid/kfc9d5c3834eaae18fc">【Shenzhen】</a>
              </div>
            </template>
            <el-image style="width: 100%;" src="https://www.nimotion.cn/static/images/general/qr_wechat_cnshenzhen.webp" fit="contain" />
          </el-popover>
         </div>
      </el-popover>
    </div>

    <!-- 返回组件 -->
    <div class="backtop-box">
      <el-popover
        placement="left-start"
        title=""
        content="Back to top"
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