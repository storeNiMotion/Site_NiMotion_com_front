<!-- 吸顶导航 -->

<script setup>
//vueuse
import { useScroll } from '@vueuse/core'
import { useCategoryStore } from '@/stores/catagory';
import { onMounted, watch, ref } from "vue"
import { CloseBold } from '@element-plus/icons-vue'
import { useRouter } from "vue-router"            //调用路由 => “方法”
//
const { y } = useScroll(window)

//使用pinia中的数据
const categoryStore = useCategoryStore()

//手机抽屉
const table = ref(false)
const nav = ref(false)

// 获取滚动条
function getScrollbarWidth() {
    let oP = document.createElement('p')
    let styles = {
        width: '1000px',
        height: '1000px',
        overflowY: 'scroll'
    }
    let i = 0
    let scrollbarWidth = 0
    for (i in styles) {
        oP.style[i] = styles[i]
    }
    document.body.appendChild(oP)
    scrollbarWidth = oP.offsetWidth - oP.clientWidth
    oP.remove()
    return scrollbarWidth
}

// 阻止滚动
function stopScroll() {
  let mo = function(e){e.preventDefault()}
    let _width = getScrollbarWidth()
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = _width + 'px'
    document.addEventListener('touchmove', mo, false)
}

// 恢复滚动
function moveScroll() {
    let mo = function (e) {
        e.preventDefault()
        e.stopPropagation()
    }
    document.body.style.overflow = ''
    document.body.style.paddingRight = 0
    document.removeEventListener('touchmove', mo, true)
}

//点击事件
const clickNav = () => {
  table.value = !table.value
  nav.value = !nav.value
  stopScroll()
}

const clickNavClose = () => {
  table.value = !table.value
  nav.value = !nav.value
  moveScroll()
}

// 下拉导航
const isshow =ref(false)
const select = () => {
  // console.log('点击了');
  isshow.value = !isshow.value
  if (isshow.value) {
    stopScroll()
  } else {
    moveScroll()
  }
}

const clicked = () => {
  isshow.value = false      // 关闭导航
  moveScroll()              // 恢复滚动
}

// 三、搜索业务
//2. 点击事件 & enter事件
const inputSearch = ref('')       // 表单内容
const router = useRouter()                                              // 1.调用路由方法
const search = () => {
  // console.log(inputSearch.value)
  //router.replace({path: '/'})                                         // 2.跳转首页 用replace防止用户重复返回登录
  router.push({path: `/search/${inputSearch.value}`})
  inputSearch.value = ''                                                // 3.重置表单
}

//视口宽度
const screenWidth = ref(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)

const onResize=()=> {
  screenWidth.value = window.innerWidth;
}

onMounted(() => {
  //监听窗口变化
  window.onresize = () => {
    // console.log(screenWidth.value)
    window.addEventListener("resize", onResize)
  }
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
  <div class="app-header-sticky" :class="{ show: y > 80 }">
    <header class='app-header'>
    <div class="container">
      <div class="header">
        <!-- 1.logo -->
        <div class="header-logo">
          <div class="logo">
            <RouterLink to="/"><img src="@/assets/images/logo.png" alt=""></RouterLink>
          </div>
        </div>
        <!-- 2.导航 -->
        <div class="header-right">
          <!-- 2.1nav -->
          <div class="header-nav">
            <!-- <ul class="nav">
              <li class="home" v-for="item in categoryStore.getCategoryList" :key="item.id">
                <RouterLink :to="`/${item.router}`">{{ item.name }}</RouterLink>
              </li>
            </ul> -->
            <ul class="nav">
              <li class="home"  @click="select">
                <RouterLink to="/product/">Product</RouterLink>
                <!-- <RouterLink>产品中心</RouterLink> -->
              </li>
              <li class="home" >
                <RouterLink to="/solution">Solution</RouterLink>
              </li>
              <li class="home" >
                <RouterLink to="/support">Service</RouterLink>
              </li>
              <li class="home" >
                <RouterLink to="/news">News</RouterLink>
              </li>
              <li class="home" >
                <RouterLink to="/download">Download</RouterLink>
              </li>
              <li class="home" >
                <RouterLink to="/about">About</RouterLink>
              </li>
            </ul>
          </div>
          <!-- 2.2搜索 -->
          <div class="header-search">
            <div class="search">
              <i class="iconfont icon-search" @click="search"></i>
              <input type="text" placeholder="Search" @keyup.enter="search" v-model="inputSearch">
            </div>
          </div>
          <!-- 2.3联系我们 -->
          <div class="header-contact">
            <RouterLink to="/contact" class="btn-face">Contact Us</RouterLink>
          </div>
        </div>
        <!-- 3.手机端导航 -->
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg"
          aria-controls="navbarOffcanvasLg">
          <el-button text @click="clickNavClose" v-if="table">
            <el-icon :size="20">
              <CloseBold />
            </el-icon>
          </el-button>
          <el-button text @click="clickNav" v-else>
            <i class="iconfont icon-menu" style="font-size: 28px;"></i>
          </el-button>
        </button>

      </div>
    </div>
  </header>


  <!-- 下拉导航`/product/list/${item.id}` -->
  <!-- :class="{ show: isshow }" -->
  <div class="dropdown" :class="{ show: isshow }" @click="clicked"></div>

  <div class="select-nav" :class="{ show: isshow }">
    <div class="container">
      <div class="nav-area">
        <dl class="" v-for="item in categoryStore.getSelectCategoryList" :key="item.id">
          <dt @click="clicked">
            <!-- <a href="http://" target="_blank" rel="noopener noreferrer">{{ item.name }}</a> -->
            <RouterLink :to="`/product/${item.id}`">{{ item.name }}</RouterLink>
          </dt>
          <dd v-for="i in item.category" :key="i.id" @click="clicked">
            <!-- <a href="#" ><span>{{ i.name }}</span></a> -->
            <RouterLink :to="`/product/list/${i.id}`"><span>{{ i.name }}</span></RouterLink>
          </dd>
        </dl>
      </div>

    </div>
  </div>


  <!-- 3.手机端导航 -->
  <div class="nav-right" :class="{ show: nav }">
    <el-drawer
      v-model="table"
      direction="rtl"
      :with-header="false"
      :show-close="false"
      :lockScroll="false"
      size="70%"
    >
    <el-collapse v-model="activeNames" @change="handleChange" accordion>
      <el-collapse-item :title="item.name" :name="`spec-${item.id}`" v-for="item in categoryStore.getOneCategoryList" :key="item.id">
          <div class="nav-item" v-for="i in item.category" :key="i.id" v-if="item.name === '产品中心'">
            <!-- <RouterLink :to="`/product/list/${i.id}`">{{i.name}}</RouterLink> -->
            <RouterLink :to="`/${i.router}/${i.id}`">{{i.name}}</RouterLink>
          </div>
          <div class="nav-item" v-for="i in item.category" v-else-if="item.name === '解决方案'">
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
</div>

</template>


<style scoped lang='scss'>
.app-header-sticky {
  display: none;
  width: 100%;
  // height: 100px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  // background-color: #fff;
  // border-bottom: 1px solid #e4e4e4;
  // 此处为关键样式!!!
  // 状态一：往上平移自身高度 + 完全透明
  transform: translateY(-100%);
  opacity: 0;

  // 状态二：移除平移 + 完全不透明
  &.show {
    display: block;
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

}

.app-header {
  // width: 100vw; //100%宽度
  width: 100%; //100%宽度
  background: #fff;
  border-bottom: 1px solid rgba(0,0,0,.08);
  box-shadow: 0 4px 10px 0 rgba(0,0,0,.08), 0 1px 4px 0 rgba(0,0,0,.04);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 10px;
    width: 100%;

    // 1.logo
    .header-logo {
      // max-width: 14%;
      width: 140px;
      transition: all 0.3s;
      .logo {
        width: 100%;
        a {
          display: block;
          width: 100%;
          // text-indent: -9999px;
          // background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
          img {
            width: 100%;
          }
        }
      }
    }

    // 2.right
    .header-right {
      display: flex;
      // flex: 1;
      // 2.1nav
      .header-nav {
        max-width: 820px;
        margin-bottom: 8px;
        padding: 0 40px 10px;
        .nav {
          display: flex;
          position: relative;
          z-index: 998;
        
          li {
            margin-right: 40px;
            text-align: center;
        
            a {
              font-size: 16px;
              line-height: 32px;
              height: 32px;
              display: inline-block;
        
              &:hover {
                // color: $xtxColor;
                border-bottom: 2px solid $themeColor;
                color: #003abd;
              }
            }
        
            .active {
              color: $xtxColor;
              border-bottom: 1px solid $xtxColor;
            }
          }
        }
      }
      // 2.2搜索
      .header-search {
        flex: 1;
        .search {
          display: flex;
          // width: 170px;
          width: 100%;
          height: 32px;
          position: relative;
          border-bottom: 1px solid #e7e7e7;
          line-height: 32px;

          .icon-search {
            font-size: 18px;
            margin-left: 5px;
            cursor: pointer;
          }

          input {
            // width: 140px;
            width: 90%;
            padding-left: 5px;
            color: #666;
          }
        }
      }
      // 2.3联系我们
      .header-contact {

        .btn-face {
          display: block;
          margin:0 15px 0 40px;
          width: 80px;
          // height: 26px;
          border: 1px solid #003abd;
          border-radius: 8px;
          background-color: #003abd;
          font-size: 12px;
          color: #fff;
          text-align: center;
          line-height: 26px;
          &:hover {
              background-color: #0131a1;
              // color: #fff;
          }
        }
      }
    }

    // 3.手机端
    .navbar-toggler{
      display: none;
      margin-bottom: 8px;
      padding-right: 10px;
      // z-index: 999;
      border: 0;
      background-color: #fff;
    }
  }

}


// 下拉导航
// 遮罩层
.dropdown {
  display: none;
  width: 100vw;
  // width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.4);
  opacity: .8;
  &.show {
    display: block;
    // transition: all 0.3s linear;
    // top: 100px;
    // transform: none;
    // opacity: 0;
  }
}
.select-nav {
  // display: none;
  position: absolute;
  z-index: 99;
  padding: 30px;
  width: 100vw;
  height: 60vh;
  max-height: 800px;
  overflow: hidden;
  background: #ffffff;
  border-bottom: 1px solid rgba(0,0,0,.08);
  box-shadow: 0 4px 10px 0 rgba(0,0,0,.08), 0 1px 4px 0 rgba(0,0,0,.04);
  top: 80px;
  $heighty: calc(100% + 200px);
  transform: translateY(-110%);
  opacity: 0;

  // 状态二：移除平移 + 完全不透明
  &.show {
    display: block;
    transition: all 0.3s linear;
    // top: 100px;
    transform: none;
    opacity: 1;
  }
  .nav-area {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%;
    // height: 800px;
    max-height: 650px;

    dl {
      // display: flex;
      margin: 18px 40px;
      margin-bottom: 25px;
      // height: 100%;
      dt {
        font-size: 16px;
        font-weight: 800;
        margin-bottom: 16px;
        a {
          font-size: 16px;
          font-weight: 600;
          // font-family: Alibaba-PuHuiTi-Medium;
        }
        &:hover {
          a {
            color: #003abd;
          }
          
        }
      }
      dd {
        // margin: 8px 0;
        margin-left: 5px;
        padding: 8px 0;
        font-size: 15px;
        color: #525252;
        border-left: 1px solid #ebebeb;
        span {
          margin-left: 12px;
        }
        &:hover {
          a {
            span {
              padding: 5px 0;
              border-bottom: 1px solid #2d2d2d;
            }
          }
        }
      }
    }

  }


}




//手机导航呼出
.nav-right {
  // position: fixed;
  display: none;
  position: absolute;
  // top: 100px;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;	// 隐藏x轴滚动条
  overflow-y: hidden;
  &.show {
    display: block;
  }
  ::v-deep(.el-overlay) {
    // position: fixed;
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
}

@media (max-width: 1200px) {
  .app-header {
    .header {
      // 2.right
      .header-right {
        .header-nav {
          padding: 0 20px 10px;
          .nav {
            li {
              margin-right: 20px;
            }
          }
        }
        .header-search {
          .search {

          }
        }
        // 2.3联系我们
        .header-contact {
          display: none;
        }
      }
    }
  }
}

@media (max-width: 960px) {
  .app-header {
    .header {
      // 2.right
      .header-right {
        .header-nav {
          padding: 0 20px 10px;
          .nav {
            li {
              margin-right: 20px;
            }
          }
        }
        // 2.2搜索
        .header-search {
          display: none;
        }
      }
    }
  }
}


@media (max-width: 768px) {
  .app-header {
    .header {
      .header-logo {
        // max-width: 14%;
        width: 120px;
        // transition: all 0.3s;
      }
      // 2.right
      .header-right {
        // 2.1nav
        .header-nav {
          display: none;
        }
      }
      // 3.手机端
      .navbar-toggler{
        display: block;
      }
    }
  }
}

</style>