<script setup>

import { getActivityListAPI } from "@/apis/about"
import { onMounted, ref } from "vue"


//获取数据

const ActivityList = ref([])

const getActivityList = async () => {
  const res = await getActivityListAPI()
  res.data.map((item) => {
    const name = item.name
    const images = []
    item.images.map((i)=>{
        images.push(i.image)
    })
    ActivityList.value.push({'name':name, 'images':images})
  })
//   console.log(ActivityList.value);

}

onMounted(() => getActivityList())
</script>

<template>

  <div class="item-activity">
    
    <!-- <h2>公司介绍</h2> -->
    <div class="info-item" >
        <div class="picbox" v-for="item in ActivityList" :key="item.id">
          <el-image
            :src="item.images[0]"
            :zoom-rate="1.2"
            :max-scale="7"
            :min-scale="0.2"
            :preview-src-list="item.images"
            :initial-index="0"
            fit="cover"
            />
          <p>{{ item.name }}</p>
        </div>

      </div>
  </div>

</template>

<style scoped lang='scss'>

.item-activity {
  margin: 0 10px 20px 0;

  // 3.2 自定义内容样式
  .info-item {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    // 3.2 图片box
    .picbox {
      margin: 0 10px;
      padding: 10px 0;
      width: 30%;
      // max-height: $picbox-height;
      overflow: hidden;

      img {
        width: 100%;
        height: auto;
      }
      .el-image {
        width: 100%;
        height:180px;
        overflow:hidden;
      }
      p {
        margin-top: 6px;
        color: #1d1d1f;
        font-size: 14px;

      }
    }


  }
}

//
@media (max-width: 1024px) {}

@media (max-width: 960px) {}

@media (max-width: 768px) {

}
</style>