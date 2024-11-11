<script setup>

import { computed, onMounted, defineProps, ref, watch } from 'vue'

import { Service, ChatDotRound, Top } from '@element-plus/icons-vue'


</script>

<template>

  <!-- 返回顶部 -->
  <div class="tools">
    <!-- 电话 -->
    <div class="WhatsAPP-tool pc">
      <el-popover
        placement="left-start"
        title="WhatsAPP"
        :width="auto"
        trigger="hover"
        content="+86 13813020826"
      >
        <template #reference>
          <div class="service">
              <a href="https://api.whatsapp.com/send?phone=%2B8613813020826" target="_blank"><img src="https://www.nimotion.cn/static/images/icon/icon_WhatsAPP.webp" alt="WhatsAPP"></a>
          </div>
        </template>
      </el-popover>
    </div>

    <!-- 微信客服 -->
    <!-- <div class="WeChat-tool pc">
      <el-popover
        placement="left-start"
        title="WeChat Service"
        :width="auto"
        trigger="hover"
        content="010-60213882"
      >
        <template #reference>
          <div class="ChatDotRound">
              <a target="_blank" href="https://work.weixin.qq.com/"><img src="https://www.nimotion.cn/static/images/icon/icon_wechat.png" alt=""></a>
          </div>
        </template>
           <div>
            <img src="https://www.nimotion.cn/static/images/icon/6c51b73f-bd13-4007-9a85-228c166658a8.jpg" alt="">
           </div>
      </el-popover>
    </div> -->

    <!-- 邮箱 -->
    <div class="WeChat-tool pc">
      <el-popover
        placement="left-start"
        title="E-mail:"
        :width="220"
        trigger="hover"
        content="nimotion-al@nimotion.com"
      >
        <template #reference>
          <div class="ChatDotRound">
              <a href="mailto:nimotion-al@nimotion.com"><img src="https://www.nimotion.cn/static/images/icon/icon_mail.webp" alt="mail"></a>
          </div>
        </template>

      </el-popover>
    </div>


    <!-- 移动端 -->
    <!-- 电话 -->
    <!-- <div class="WhatsAPP-tool mb">
      <el-popover
        placement="left-start"
        title="WhatsAPP"
        :width="auto"
        trigger="hover"
        content="+86 13813020826"
      >
        <template #reference>
          <div class="service">
              <a href="https://api.whatsapp.com/send?phone=%2B8613813020826" target="_blank"><img src="https://www.nimotion.cn/static/images/icon/icon_WhatsAPP.png" alt=""></a>
          </div>
        </template>
      </el-popover>
    </div> -->

    <!-- 微信客服 -->
    <!-- <div class="WeChat-tool mb">
      <el-popover
        placement="left-start"
        title="WeChat Service"
        :width="auto"
        trigger="hover"
        content="010-60213882"
      >
        <template #reference>
          <div class="ChatDotRound">
              <a target="_blank" href="https://work.weixin.qq.com/"><img src="https://www.nimotion.cn/static/images/icon/icon_wechat.png" alt=""></a>
          </div>
        </template>
           <div>
            <img src="https://www.nimotion.cn/static/images/icon/6c51b73f-bd13-4007-9a85-228c166658a8.jpg" alt="">
           </div>
      </el-popover>
    </div> -->

    <!-- 邮箱 -->
    <!-- <div class="WeChat-tool mb">
      <el-popover
        placement="left-start"
        title="E-mail:"
        :width="220"
        trigger="hover"
        content="nimotion-al@nimotion.com"
      >
        <template #reference>
          <div class="ChatDotRound">
              <a href="#"><img src="https://www.nimotion.cn/static/images/icon/icon_mail.png" alt=""></a>
          </div>
        </template>

      </el-popover>
    </div> -->

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


.tools {
  z-index: 9900;
  position: fixed;
  right: calc(100% - 100vw + 24px);
  bottom: 40%;
  width: 46px;
  height: 46px;
  .WhatsAPP-tool {
    padding: 5px;
    width: 46px;
    height: 46px;
    border-radius: 5px;
    box-shadow: 0 2px 14px 0 rgba(0, 0, 0, .08);
    background: #003abd;
    
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

  .WeChat-tool {
    margin-top: 5px;
    padding: 5px;
    width: 46px;
    height: 46px;
    background: #003abd;
    box-shadow: 0 2px 14px 0 rgba(0, 0, 0, .08);
    border-radius: 5px;
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
    .ChatDotRound {
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
    border-radius: 5px;
    width: 46px !important;
    height: 46px !important;
    right: calc(100% - 100vw + 24px) !important;
    bottom: calc(40% - 104px) !important;
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


@media (max-width: 1024px) {

}

@media (max-width: 960px) {

}

@media (max-width: 768px) {

}

</style>