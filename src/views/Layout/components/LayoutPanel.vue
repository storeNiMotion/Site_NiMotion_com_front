<script setup>
//导航面板 - 静态
//获取所有导航数据



defineProps({
    //主标题
    title: {
        type: String
    },
    //描述
    subTitle: {
        type: String
    }
})


</script>


<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
         <!-- 主标题和副标题 -->
         <h3>{{ title }}</h3>
         <p>{{ subTitle }}</p>
      </div>
      <!-- 主体内容区域 -->
      <slot />
    </div>
  </div>

  <el-popover
    placement="top-start"
    title="Title"
    :width="200"
    trigger="hover"
    content="this is content, this is content, this is content"
  >
    <template #reference>
      <el-button class="m-2">Hover to activate</el-button>
    </template>
  </el-popover>
</template>

<style scoped lang='scss'>
.home-panel {
  background-color: #fff;

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
    }

    p {
        margin-top:10px;
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
  }
}
</style>