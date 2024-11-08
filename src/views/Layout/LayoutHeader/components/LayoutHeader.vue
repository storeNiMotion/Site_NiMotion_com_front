<!-- 导航 -->
<script setup>
import { onMounted, watch, ref } from "vue"
import { ElMessage } from "element-plus"
import { useCategoryStore } from '@/stores/catagory'
import { useRouter } from "vue-router"            //调用路由 => “方法”

// 一、调用数据
//使用pinia中的数据
const categoryStore = useCategoryStore()

//二、手机抽屉导航
const table = ref(false)
// 1.阻止滚动
function stopScroll() {
    let mo = function (e) {
        e.preventDefault()
    }
    document.body.style.overflow = 'hidden'
    document.addEventListener('touchmove', mo, false)
}

// 2.恢复滚动
function moveScroll() {
    let mo = function (e) {
        e.preventDefault()
    }
    document.body.style.overflow = ''
    document.removeEventListener('touchmove', mo, true)
}

// 下拉导航
const isshow =ref(false)
const select = () => {
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

// 4.侦听视口宽度
const screenWidth = ref(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth)
const onResize=()=> {
  screenWidth.value = window.innerWidth;
}

// 三、搜索业务

//1.点击事件 => 搜索框变化 待优化
const inputSearch = ref('')       // 表单内容
const ishidden = ref(false)
const searchclick = () => {
}

//2. 点击事件 & enter事件
const router = useRouter()                                              // 1.调用路由方法
const search = () => {
  // 非空跳转
  if (inputSearch.value) {
    router.push({path: `/search/${inputSearch.value}`})
    inputSearch.value = ''                                                // 3.重置表单
  } else {
    // 提示输入关键词
    ElMessage({type: 'warning', message: 'Please enter keywords'})
  }
}

// 无、钩子生命周期函数
onMounted(() => {
  //监听窗口变化
  // onresize()
  window.addEventListener("resize", onResize)
})

//监听窗口事件
watch(() => screenWidth.value, (val) => {
  isshow.value = false  // 关闭下拉
  if (val > 768) {
    table.value = false //关闭侧滑导航
    moveScroll()        //恢复滚动
  }
})

</script>

<template>
  <header class='app-header'>
    <div class="container">
      <div class="header" :class="{ show: ishidden }">
        <!-- 1.logo -->
        <div class="header-logo">
          <div class="logo">
            <RouterLink to="/"><img src="@/assets/images/logo.png" alt="LOGO of NiMotion"></RouterLink>
          </div>
        </div>
        <!-- 2.导航 -->
        <div class="header-right">
          <!-- 2.1nav -->
          <div class="header-nav" :class="{ show: ishidden }">

            <ul class="nav">
              <li class="home"  @click="select">
                <RouterLink to="/product/">Products</RouterLink>
              </li>
              <li class="home" @click="clicked">
                <RouterLink to="/solution">Solutions</RouterLink>
              </li>
              <li class="home" @click="clicked">
                <RouterLink to="/support">Service</RouterLink>
              </li>
              <li class="home" @click="clicked">
                <RouterLink to="/news">News</RouterLink>
              </li>
              <li class="home" @click="clicked">
                <RouterLink to="/download">Downloads</RouterLink>
              </li>
              <li class="home" @click="clicked">
                <RouterLink to="/about">About Us</RouterLink>
              </li>
            </ul>
          </div>
          <!-- 2.2搜索 -->
          <div class="header-search" @click="searchclick">
            <div class="search">
              <i class="iconfont icon-search" @click="search"></i>
              <input type="text" v-model="inputSearch" placeholder="Search"  @keyup.enter="search" :class="{ show: ishidden }">
            </div>
          </div>
          <!-- 2.3联系我们 -->
          <div class="header-contact">
            <RouterLink to="/contact" class="btn-face">Contact Us</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- 下拉导航`/product/list/${item.id}` -->
  <div class="dropdown" :class="{ show: isshow }" @click="clicked"></div>

  <div class="select-nav" :class="{ show: isshow }">
    <div class="container">
      <div class="nav-area">
        <dl class="" v-for="item in categoryStore.getSelectCategoryList" :key="item.id">
          <dt @click="clicked">
            <RouterLink :to="`/product/${item.id}`">{{ item.name }}</RouterLink>
          </dt>
          <dd v-for="i in item.category" :key="i.id" @click="clicked">
            <RouterLink :to="`/product/list/${i.id}`"><span>{{ i.name }}</span></RouterLink>
          </dd>
        </dl>
      </div>

    </div>
  </div>


</template>

<style scoped lang='scss'>

.app-header {
  // position: fixed;
  position: relative;
  z-index: 999;
  width: 100vw; //100%宽度
  overflow: hidden;
  background: #fff;
  border-bottom: 1px solid rgba(0,0,0,.08);
  box-shadow: 0 4px 10px 0 rgba(0,0,0,.08), 0 1px 4px 0 rgba(0,0,0,.04);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 10px;
    width: 100%;
    &.show {
      align-items: center;
    }
    // 1.logo
    .header-logo {
      width: 140px;
      transition: all 0.3s;
      .logo {
        width: 100%;
        a {
          display: block;
          width: 100%;
          img {
            width: 100%;
          }
        }
      }
    }

    // 2.right
    .header-right {
      display: flex;
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
            text-transform: uppercase;
        
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
        &.show {
          display: none;
        }
      }
      // 2.2搜索
      .header-search {
        flex: 1;
        .search {
          display: flex;
          flex: 1;
          width: 100%;
          height: 32px;
          position: relative;
          border-bottom: 1px solid #e7e7e7;
          line-height: 32px;

          .icon-search { //图标
            font-size: 18px;
            margin-left: 5px;
            cursor: pointer;
          }

          input {
            width: 90%;
            padding-left: 5px;
            color: #666;
          }

        }
        // 触发搜索
        .show {
            width: 100%;
        }
      }
      // 2.3联系我们
      .header-contact {

        .btn-face {
          display: block;
          margin:0 15px 0 40px;
          width: 80px;
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

  }

}

// 下拉导航
// 遮罩层
.dropdown {
  position: absolute;
  z-index: 1;
  display: none;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.4);
  opacity: 0.8;
  &.show {
    display: block;
  }
}
.select-nav {
  position: absolute;
  z-index: 2;
  padding: 30px;
  width: 100vw; //100%宽度
  height: 46vh;
  max-height: 800px;
  // overflow: hidden;
  overflow-y: scroll;
  background: #ffffff;
  border-bottom: 1px solid rgba(0,0,0,.08);
  box-shadow: 0 4px 10px 0 rgba(0,0,0,.08), 0 1px 4px 0 rgba(0,0,0,.04);
  top: 100px;
  $heighty: calc(100% + 200px);
  transform: translateY(-100%);
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
    width: 100%;
    height: 100%;
    // overflow: scroll;
    max-height: 650px;

    dl {
      margin: 18px 14px;
      // margin: 18px 40px;
      margin-bottom: 25px;
      // width: 31%;
      dt {
        font-size: 16px;
        font-weight: 800;
        margin-bottom: 16px;
        a {
          font-size: 16px;
          font-weight: 600;
        }
        &:hover {
          a {
            color: #003abd;
          }
          
        }
      }
      dd {
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

        width: 120px;

      }
      // 2.right
      .header-right {
        // 2.1nav
        .header-nav {
          display: none;
        }
      }

    }
  }

}

</style>