<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { getInfoAboutAPI } from "@/apis/about"
import { onMounted, ref } from "vue"
import { useTransition } from '@vueuse/core'

//获取数据
const InfoAbout = ref([])

const getInfoAbout = async () => {
  const res = await getInfoAboutAPI()
  InfoAbout.value = res.data[0]
// console.log(InfoAbout.value);
}

//切换标签customValue

onMounted(() => getInfoAbout())

</script>

<template>

  <div class="item-us" id="item-us">
    
    <h2>{{ InfoAbout.caption }}</h2>
    <div class="info-item">
      
        <el-scrollbar max-height="300px" style="padding: 0 10px;">
          <div v-html="InfoAbout.content" class="info-box">
          </div>
        </el-scrollbar>
        <div class="picbox">
          <img src="https://www.nimotion.com/public_uploadfile/2023/0609/20230609105457854.jpg" alt="">
        </div>
      </div>
  </div>

</template>

<style scoped lang='scss'>
//1.公司介绍
.item-us {
  margin: 0 10px 20px 0;
  h2 {
    font-size: 35px;
    text-transform: uppercase; //大写
    color: #000;
    // line-height: 40px;
    margin: 0 0 28px 0;
  }


  // 3.2 自定义内容样式
  .info-item {
    display: flex;
    align-items: center;
    // 3.2 图片box
    $picbox-width: 35vw;

    .picbox {
      margin: 0 10px;
      padding: 10px 0;
      max-width: $picbox-width;
      // max-height: $picbox-height;
      overflow: hidden;

      img {
        width: 100%;
        height: auto;
      }
    }

    // 3.2.3 信息box
    
    ::v-deep(.info-box) {
      // margin: 0 0 0 20px;

      // padding: 20px 0px;
      h4 {
        color: #003abd;
        font-size: 20px;
        font-weight: 600;
        text-align: center;
      }

      $info-p: 13px;

      p {
        margin-top: 14px;
        color: #1d1d1f;
        font-size: $info-p;
        text-indent: (calc($info-p * 2));
        line-height: (calc($info-p * 1.5));
      }
    }
  }
}

//
@media (max-width: 1024px) {}

@media (max-width: 960px) {}

@media (max-width: 768px) {

  //1.公司介绍
  .item-us {

    // 3.2 自定义内容样式
    .News-item {
      // display: flex;
      // align-items: center;
      flex-direction: column;
      // 3.2 图片box
      $picbox-width: 100%;

      .picbox {
        padding: 10px 0;
        max-width: $picbox-width;
        // max-height: $picbox-height;
        overflow: hidden;

        img {
          width: 100%;
          height: auto;
          // width: calc();
          // transform: translateY(calc(-50% + $picbox-height/2));
        }
      }
    }
  }
}
</style>