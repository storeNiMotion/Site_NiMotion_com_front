<script setup>

</script>

<template>

  <!-- 3.荣誉介绍 -->
  <div class="item-factory">
    <el-card style="max-width: 100%" >
        <div class="factory-item">
            <div class="picbox">
                <img src="https://www.nimotion.cn/static/images/compony/41739343a9c06ef0.webp" alt="">
            </div>
            <div class="picbox">
                <img src="https://www.nimotion.cn/static/images/compony/5535c24b208d31ec.webp" alt="">
            </div>
            <div class="picbox">
                <img src="https://www.nimotion.cn/static/images/compony/6543f7501b1c0d2b.webp" alt="">
            </div>
            <div class="picbox">
                <img src="https://www.nimotion.cn/static/images/compony/c944a6686d996ab3.webp" alt="">
            </div>
            <div class="picbox">
                <img src="https://www.nimotion.cn/static/images/compony/eeb1f61b0d4e9282.webp" alt="">
            </div>
        </div>
    </el-card>
  </div>

</template>

<style scoped lang='scss'>

//3.荣誉介绍
.item-factory {

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
  .factory-item {
      display: flex;
      flex-wrap:wrap;
      // 3.2 图片box
      .picbox {
          max-width: 50%;
          overflow: hidden;
          img {
              width:100%;
              height: 100%;
          }
      }
      .picbox:nth-child(-n+2) {
        width:50%;
      }
      .picbox:nth-child(n+3) {
        width:33.33%;
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