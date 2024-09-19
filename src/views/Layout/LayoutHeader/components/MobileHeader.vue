<!-- 导航 -->
<script setup>
import { onMounted, watch, ref } from "vue"
import { CloseBold } from '@element-plus/icons-vue'
// import { CloseBold } from 'element-plus'
import { ElMessage } from "element-plus"
import { useCategoryStore } from '@/stores/catagory'
import { Search } from '@element-plus/icons-vue'
import { searchAPI } from "@/apis/search"       // 导入搜索接口
import { useRouter } from "vue-router"            //调用路由 => “方法”

// 一、调用数据
//使用pinia中的数据
const categoryStore = useCategoryStore()
// console.log(categoryStore.getSelectCategoryList.value);
//二、手机抽屉导航
const table = ref(false)
// 1.阻止滚动
function stopScroll() {
    let mo = function (e) {
        e.preventDefault()
        // e.stopPropagation()
    }
    // let _width = this.getScrollbarWidth()
    document.body.style.overflow = 'hidden'
    // document.body.style.paddingRight = _width + 'px'
    document.addEventListener('touchmove', mo, false)
}

// 2.恢复滚动
function moveScroll() {
    let mo = function (e) {
        e.preventDefault()
        // e.stopPropagation()
    }
    document.body.style.overflow = ''
    // document.body.style.paddingRight = 0
    document.removeEventListener('touchmove', mo, true)
}

// 3.点击事件
// 展开
const clickNav = () => {
  table.value = !table.value
  stopScroll()
}

// 关闭
const clickNavClose = () => {
  table.value = !table.value
  moveScroll()
}


// 4.侦听视口宽度
const screenWidth = ref(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)

const onResize=()=> {
  screenWidth.value = window.innerWidth;

}


// 无、钩子生命周期函数

onMounted(() => {
  //监听窗口变化
  // onresize()
  window.addEventListener("resize", onResize)
})

//监听窗口事件
watch(() => screenWidth.value, (val) => {
  // screenWidth.value = val
  // console.log(val)
  isshow.value = false  // 关闭下拉
  if (val > 768) {
    table.value = false //关闭侧滑导航
    moveScroll()        //恢复滚动
  }
})

</script>

<template>

<!-- 3.导航按钮 -->
<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg"
    aria-controls="navbarOffcanvasLg">
    <!-- 点击关闭 -->
    <el-button text @click="clickNavClose" v-if="table">
    <el-icon :size="20">
        <CloseBold />
    </el-icon>
    </el-button>
    <!-- 点击菜单 -->
    <el-button text @click="clickNav" v-else>
    <i class="iconfont icon-menu" style="font-size: 28px;"></i>
    </el-button>
</button>

<!-- 3.语言切换按钮 -->
<el-dropdown class="lan" trigger="click" @visible-change="dropdown">

    <el-button text >
      <i class="iconfont icon-duoyuyan" style="font-size: 24px;text-align: center;"><arrow-down /></i>

    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
          <el-dropdown-item><a href="https://www.nimotion.cn">ZH</a></el-dropdown-item>
          <el-dropdown-item><a href="https://www.nimotion.com">EN</a></el-dropdown-item>
      </el-dropdown-menu>
    </template>
</el-dropdown>



  <!-- 3.手机端导航 -->
  <div class="nav-right" :class="{ show: table }" @click="clickNavClose">
    <el-drawer
      v-model="table"
      direction="rtl"
      :with-header="false"
      :show-close="false"
      size="70%"
    >
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
    </el-drawer>
  </div>

</template>

<style scoped lang='scss'>

// 3.手机端
.navbar-toggler{
    display: none;
    position: absolute;
    z-index: 999;
    top: 20px;
    right: 10px;
    margin-bottom: 8px;
    padding-right: 10px;
    // z-index: 999;
    border: 0;
    background-color: #fff;
}

// 语言
.lan{
    display: none;
    position: absolute;
    z-index: 999;
    top: 20px;
    right: 60px;
    margin-right: 20px;
    margin-bottom: 8px;
    // padding-right: 10px;
    // z-index: 999;
    border: 0;
    background-color: #fff;
}

// 手机导航呼出
.nav-right {
  display: none;
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 100vh;
  ::v-deep(.el-overlay) {
    position: absolute;
  }
  // 2.1 重新定义折叠面板el样式
  ::v-deep(.el-collapse) {
    border: none; // 去掉边框
    .el-collapse-item {
      // 2.1.1 头部
      .el-collapse-item__header { 
          margin-top: 5px;
          padding: 0 15px;
          // background-color:#f2f3f4;
          //border: none;
          font-size: 16px;
          font-weight: 500;
          &:hover {
              // background-color: #b5c6ee;
              color: #003abd;
          }
      }
      // 2.1.2 激活状态
      .is-active {
          // background-color: #b5c6ee;
          color: #003abd;
      }
      // 2.1.3 内容区
      .el-collapse-item__wrap {
          border: none;
          //导航内容
          .nav-item {
            margin-top: 5px;
            padding: 0 20px;
            border: none;
            color: #232323;
            font-size: 14px;
            font-weight: 400;
            &:hover {
                // background-color: #b5c6ee;
                color: #003abd;
                a {
                  color: #003abd;
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

  .nav-right {
    display: none;
  }
}

@media (max-width: 768px) {
    // 3.手机端
    .navbar-toggler {
        display: block;
    }
    .lan {
        display: block;
    }
}

</style>