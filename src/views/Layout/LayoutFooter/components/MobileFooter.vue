<!-- 导航 -->
<script setup>
import { onMounted, watch, ref } from "vue"

import { useCategoryStore } from '@/stores/catagory'

// 一、调用数据
//使用pinia中的数据
const categoryStore = useCategoryStore()


</script>

<template>

  <!-- 3.手机端导航 -->
  <div class="nav-right" >
    <el-collapse v-model="activeNames" @change="handleChange" accordion>
      <el-collapse-item :title="item.name" :name="`spec-${item.id}`" v-for="item in categoryStore.getOneCategoryList" :key="item.id">
        <div class="nav-item" v-for="i in item.category" :key="i.id" v-if="item.name === 'Products'">
            <!-- <RouterLink :to="`/product/list/${i.id}`">{{i.name}}</RouterLink> -->
            <RouterLink :to="`/${i.router}/${i.id}`">{{i.name}}</RouterLink>
          </div>
          <div class="nav-item" v-for="i in item.category" v-else-if="item.name === 'Solutions'">
            <!-- <RouterLink :to="`/product/list/${i.id}`">{{i.name}}</RouterLink> -->
            <RouterLink :to="`/${i.router}/${i.id}`">{{i.name}}</RouterLink>
          </div>
          <div class="nav-item" v-for="i in item.category" v-else>
            <!-- <RouterLink :to="`/product/list/${i.id}`">{{i.name}}</RouterLink> -->
            <RouterLink :to="`/${i.router}`">{{i.name}}</RouterLink>
          </div>
      </el-collapse-item>
    </el-collapse>
  </div>

</template>

<style scoped lang='scss'>

// 手机导航呼出
.nav-right {
  display: none;
  // position: absolute;
  // z-index: 999;
  margin-bottom: 15px;
  width: 100%;
  // height: 500px;
  ::v-deep(.el-overlay) {
    // position: absolute;
  }
  // 2.1 重新定义折叠面板el样式
  ::v-deep(.el-collapse) {
    border: none; // 去掉边框
    .el-collapse-item {
      background-color: #1d1d1d;
      // 2.1.1 头部
      .el-collapse-item__header { 
          margin-top: 5px;
          padding: 0 15px;
          background-color:#1d1d1d;
          //border: none;
          font-size: 16px;
          font-weight: 500;
          color: #e7e7e7;
          &:hover {
              // background-color: #b5c6ee;
              color: #fff;
          }
      }
      // 2.1.2 激活状态
      .is-active {
          // background-color: #b5c6ee;
          color: #fff;
      }
      // 2.1.3 内容区
      .el-collapse-item__wrap {
        background-color:#1d1d1d;
          // border: none;
          //导航内容
          .nav-item {
            margin-top: 5px;
            padding: 2px 20px;
            // border: none;
            // border-bottom: #e7e7e7 solid 1px;
            color: #e7e7e7;
            font-size: 14px;
            font-weight: 400;
            a {
              color: #e7e7e7;
            }
            &:hover {
                // background-color: #b5c6ee;
                color: #fff;
                a {
                  color: #fff;
                }
            }
          }
          // 2.1.3.2 通用图片
          .spec-img {
              margin: 0 auto;
              padding: 0 20px;
              text-align: center;
          }
      }
    }

    }
    &.show {
        display: block;
    }
}

@media (max-width: 1200px) {

  .nav-right {
    display: none;
  }
}

@media (max-width: 960px) {


}

@media (max-width: 768px) {
  .nav-right {
    display: block;
  }

}

</style>