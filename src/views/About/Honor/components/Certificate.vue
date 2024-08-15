<script setup>

</script>

<template>

  <!-- 3.荣誉介绍 -->
  <div class="item-honor" id="item-honor">
    <el-card style="max-width: 100%" >
        <div class="News-item">
            <div class="picbox">
                <img src="https://www.nimotion.cn/static/images/compony/Certificate.webp" alt="">
            </div>
        </div>
    </el-card>
  </div>

</template>

<style scoped lang='scss'>

//3.荣誉介绍
.item-honor {
  h2 {
    padding:10px;
    color: #003abd;
    font-size: 18px;
  }
  // 3.1 重新定义el卡片
  ::v-deep(.el-card) {
      margin-bottom: 30px;
      width: 100%;
      .el-card__body {
          padding: 0; //去掉内边距
          border: none;
      }
  }
  // 3.2 自定义内容样式
  .News-item {
      display: flex;
      // 3.2 图片box
      $picbox-height: 400px;
      .picbox {
          max-width: 100%;
          overflow: hidden;
          img {
              height: 100%;
          }
      }
      // 3.2.3 信息box
      .info-box {
          margin: 0 0 0 20px;
          // padding: 20px 0px;
          $info-p: 13px;
          p {
              margin-top: 8px;
              color: #1d1d1f;
              font-size: $info-p;
              text-indent: (calc($info-p * 2));
              line-height: (calc($info-p * 1.5));
          }
      }
  }
}

//
@media (max-width: 1024px) {


}

@media (max-width: 960px) {


}

@media (max-width: 768px) {


}

</style>