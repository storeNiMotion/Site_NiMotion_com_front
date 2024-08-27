<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { getInfoAboutAPI } from "@/apis/about"
import { onMounted, ref } from "vue"
import { useTransition } from '@vueuse/core'

const InfoAbout = ref([])

const getInfoAbout = async () => {
  const res = await getInfoAboutAPI()
  InfoAbout.value = res.data[0]
// console.log(InfoAbout.value);
}



onMounted(() => getInfoAbout())


</script>

<template>
  <!-- banner区域 -->
  <div class="About-panel-banner">
    <div class="banner-pro">
      <div class="">
        <img :src="InfoAbout.banner_url" alt="">
      </div>
    </div>
  </div>

</template>

<style scoped lang='scss'>
// banner
.About-panel-banner {
  width: 100vw;

  .banner-pro {
    img {
      width: 100%;
    }
  }
}

//
@media (max-width: 1024px) {}

@media (max-width: 960px) {}

@media (max-width: 768px) {}
</style>