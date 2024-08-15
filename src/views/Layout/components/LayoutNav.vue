<!-- 顶部 -->


<script setup>
import { useUserStore } from '@/stores/user'    // 导入pinia
import { useRouter } from "vue-router"            //调用路由 => “方法”
import { ArrowDown } from '@element-plus/icons-vue'
import { onMounted, ref } from "vue"

const userStore = useUserStore()                // 实例化
const router = useRouter()                      // 调用路由方法
// console.log(userStore.userInfo);
// 点击登出事件
const confirm = () => {
  userStore.clearUseInfo()                      //清除用户信息 触发
  router.back
}

const isclick = ref(false)
const dropdown = (ce) => {
  // console.log(ce);
  isclick.value = ce
  // console.log(dropdown.value)
}
</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <!-- 多模板渲染 区分登录与非登录 -->
        <!-- 是否有token -->
        <template v-if="userStore.userInfo.token">
          <li><a href="#">为用户提供专业的运动控制平台和自动化解决方案</a></li>
          <li><a href="javascript:;"><i class="iconfont icon-user"></i>{{ userStore.userInfo.data.username }}</a></li>
          <li>
            <el-popconfirm @confirm="confirm" title="确认退出吗?" confirm-button-text="确认" cancel-button-text="取消">
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li>
            <!-- <a href="#">
              ZH<span class="iconfont">&#xe627;</span>
            </a> -->
            <el-dropdown trigger="click" @visible-change="dropdown">
              <span class="el-dropdown-link">
                ZH
                <el-icon class="el-icon--right" :class="{ isclick: isclick }">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item><a href="https://www.nimotion.cn">ZH</a></el-dropdown-item>
                  <el-dropdown-item><a href="https://www.nimotion.com/index.php?siteid=2">EN</a></el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </li>
        </template>
        <template v-else>
          <li><a href="#">为用户提供专业的运动控制平台和自动化解决方案</a></li>
          <li><a href="javascript:;" class="login" @click="$router.push('/login')">请先登录</a></li>
          <li><a href="javascript:;" @click="$router.push('/resigter')">免费注册</a></li>
          <li>
            <!-- <a href="https://www.nimotion.com/index.php?siteid=2">
              ZH<span class="iconfont">&#xe627;</span>
            </a> -->
            <el-dropdown trigger="click" @visible-change="dropdown">
              <span class="el-dropdown-link">
                ZH
                <el-icon class="el-icon--right" :class="{ isclick: isclick }">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item><a href="https://www.nimotion.cn">ZH</a></el-dropdown-item>
                  <el-dropdown-item><a href="https://www.nimotion.com/index.php?siteid=2">EN</a></el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>


<style scoped lang="scss">
.app-topnav {
  position: relative;
  z-index: 999;
  // width: 100vw;
  width: 100%;
  background: $themeColor;

  ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 4px 0;
    height: 30px;

    li {
      display: flex;
      align-items: center;

      a {
        padding: 10px;
        color: $vtwhitemute;
        line-height: 30px;
        display: inline-block;
        font-size: 12px;

        i {
          font-size: 12px;
          margin-right: 2px;
        }

        &:hover {
          color: $vtwhite;
        }
      }

      .el-dropdown-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        padding: 0 10px;
        color: #fff;
        font-size: 12px;

        .isclick {
          transform: rotate(180deg);
        }
      }
    }
  }
}

@media (max-width: 992px) {
  .app-topnav {
    // display: block;
    padding-right: 20px;

  }

}

@media (max-width: 768px) {
  .app-topnav {
    display: none;
  }
}

@media (max-width: 576px) {
  .app-topnav {
    display: none;
  }
}

@media (max-width: 575px) {
  .app-topnav {
    display: none;
  }

}
</style>