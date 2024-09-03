<script setup>
// 登录页面

import Vcode from "vue3-puzzle-vcode"
import { ref, onMounted } from 'vue'
import { ElMessage } from "element-plus"          // 导入提示
import 'element-plus/theme-chalk/el-message.css'  // 导入提示样式 这个更精确 防止影响其他组件
import { useRouter } from "vue-router"            //调用路由 => “方法”
import { useUserStore } from "@/stores/user"      // 导入pinia
import { loginAPI, isresigterAPI, isUsenameResigterAPI } from "@/apis/user"
import httpInstance from "@/utils/http";
import { getCodeAPI } from "@/apis/code"

const userStore = useUserStore()                  //声明调用接口
const activeName = ref('first')                   //默认账号密码登录

const user_Name = ref({})
const postUserName = async({username})=> {               // 2.定义获取接口数据的action函数   => 用户名是否存在
        const res = await isUsenameResigterAPI({username})
        user_Name.value = res
}

const userPhone = ref({})
const getUserPhone = async({phone})=> {               // 2.定义获取接口数据的action函数   => 手机号是否存在
        const res = await isresigterAPI({phone})
        userPhone.value = res
}


//一、账号密码登录
//1.准备表单对象
const form = ref({
  username:"",
  password:"",
  code:"",
  agree:true
})

// 2.准备规则对象
const rules1 = {
  username: [
    { required: true, message: 'Cannot be empty', trigger:'blur' },
    { min: 2, max: 15, message: 'Between 2 and 15 characters', trigger: 'blur' },

  ],
  password: [
    { required: true, message: 'Cannot be empty', trigger: 'blur' },
    { min: 6, max: 15, message: '6~15 digits', trigger: 'blur' },
    { pattern: /^\S{6,15}/, message: 'Cannot contain spaces', trigger: 'blur' },
    { pattern: /^(?=.*\d)(?=.*[A-Za-z]).{5,17}$/, message: 'Two combinations of letters and numbers', trigger: 'blur' }
  ],
  code: [
    { required: true, message: 'Cannot be empty', trigger: 'blur' }
  ],
  agree: [
    {
      validator: (rule, value, callback) => {
        
        if (value) {                    //自定义校验逻辑
          callback()
        } else {
          callback(new Error('Please check'))
        }
      }
    }
  ]
}

// 3.获取form实例做统一校验
const formRef = ref(null)
const router = useRouter()                                              // 调用路由方法

// 4.点击登录事件
const doLogin = () => {
  
  const {username, password, code} = form.value                         // 解构用户名和密码
  
  formRef.value.validate(async (valid)=>{                               //调用实例
    //valid:所有表单都通过校验 才为true
    // console.log(valid)
    //以valid作为判断条件 如果通过执行
    if (valid) {
      await userStore.getUserInfo({username, password, code})           //todo login 调用接口 传入username, password
      ElMessage({type: 'success', message: '登录成功'})                  // 1.提示用户
      router.replace({path: '/'})                                       // 2.跳转首页 用replace防止用户重复返回登录
    }
  })
}

// 5.图形验证码
const verificationCodeurl = ref()
const Code = async()=> {                                                // 2.定义获取接口数据的action函数   => 发送
        const res = await getCodeAPI()
        verificationCodeurl.value = res
}

const clickcode = () => {
  //刷新验证码
  // console.log('点击');
  Code()
}


// 钩子函数
onMounted(()=>Code())
</script>


<template>
  <div class="login-section">
    <div class="container">
      <div class="account-box">
        <!-- 账号登录 -->
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="Account Login" name="first">

            <div class="form">
              <el-form ref="formRef" :model="form"  :rules="rules1" label-position="right"
                status-icon>
                
                <el-form-item prop="username">
                  <el-tooltip content="More than 2 characters" placement="top">
                    <el-input placeholder="Enter Username" v-model="form.username" />
                  </el-tooltip>
                  
                </el-form-item>
                <el-form-item prop="password" style="margin-top: 40px;">
                  <el-tooltip content="Letter/number combination" placement="top">
                    <el-input placeholder="请Enter password" v-model="form.password" />
                  </el-tooltip>
                </el-form-item>
                <!-- 图形验证码 -->
                <el-form-item prop="code" style="margin-top: 40px;">
                    <el-input placeholder="enter confirmation code" v-model="form.code" />
                    <div class="code"  @click="clickcode">
                      <img :src="`data:image/png;base64,${verificationCodeurl}`" alt="Verification Code">
                      <!-- <img :src="verificationCodeurl" alt=""> -->
                      <span class="tooltiptext">refresh</span>
                    </div>
                </el-form-item>

                <el-button size="large" class="subBtn" @click="doLogin">Log in</el-button>
                <el-form-item  prop="agree" label-width="22px">
                  <el-checkbox  size="large" v-model="form.agree">
                    I agree to the Privacy Policy and Terms of Service
                  </el-checkbox>
                </el-form-item>
                
              </el-form>
            </div>

          </el-tab-pane>

          <!-- 短信登录  -->
          <!-- <el-tab-pane label="短信登录" name="second">
            <div class="form">
              <el-form ref="formRef2" :model="form2"  :rules="rules2" label-position="right"
                status-icon>
                <el-form-item prop="phone" >
                  <el-input placeholder="请输入手机号" v-model="form2.phone" />
                </el-form-item>
                <div class="verification">
                  <el-form-item prop="code" style="margin-top: 20px;width: 100%;">
                    <el-input placeholder="验证码" v-model="form2.code" />
                  </el-form-item>
                  <div>
                    <el-button type="primary" @click="sendcode" :disabled="isSendingCode || countdown > 0" class="send">
                      {{ countdown > 0 ? `重新发送(${countdown})` : '发送验证码' }}
                    </el-button>
                  </div>
                </div>
                <Vcode
                  :show="isShow"
                  @success="success"
                  @close="close"
                  @fail="fail"
                  :imgs="[img1, img2, img3, img4, img5, img6, img7, img8]"
                  >
                </Vcode>
                <el-button size="large" class="subBtn" @click="doLogin2"  @keyup.enter="doLogin2">Click to log in</el-button>
                <el-form-item  prop="agree" label-width="22px">
                  <el-checkbox  size="large" v-model="form.agree">
                    I agree to the Privacy Policy and Terms of Service
                  </el-checkbox>
                </el-form-item>
                
              </el-form>
            </div>

          </el-tab-pane> -->
        </el-tabs>

        <nav>
          <div>
            <span>No account?</span>
            <RouterLink to="/resigter">register</RouterLink>
          </div>
          <div>
            <!-- <span>没有账户 ？</span> -->
            <RouterLink to="/forget">forget the password</RouterLink>
          </div>
        </nav>

      </div>

    </div>

  </div>

</template>

<style scoped lang='scss'>

.login-section {
  background: url('@/assets/images/login-bg.webp') no-repeat center / cover;
  padding: 40px 0;
  // height: 800px;
  width: 100vw;
  height: 100%;
  // position: relative;login-section
  .container {
    display: flex;
    justify-content: end;
  }
  .account-box {
    margin-right: 20vw;
    width: 400px;
    background: #fff;
    // position: absolute;
    left: 50%;
    top: 60px;
    transform: translate3d(100px, 0, 0);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    
    // el表单
    ::v-deep(.el-form) {
      padding-top: 40px;

      .el-form-item {
        margin-top: 0px;
        .el-form-item__content {
          flex-wrap: nowrap;
          align-items: center;
          .code {
            position: relative;
            margin-left: 10px;
            width: 150px;
            height: 30px;
            cursor: pointer;
            .tooltiptext {
              display: flex;
              align-items: center;
              // flex: ;
              visibility: hidden;
              // width: 80px;
              height: 20px;
              background-color: rgba(251, 252, 226, 1);
              font-size: 11px;
              color: #3b3b3b;
              text-align: center;
              padding: 2px;
              border-radius: 2px;
            
              /* 位置 */
              position: absolute;
              z-index: 1;
              top: 120%;
              left: 10%;
              // margin-left: 60px;
            }
            &:hover {
              .tooltiptext {
                visibility: visible;
              }
              
            }
          }
        }

      }
    }

    nav {
      font-size: 14px;
      height: 40px;
      margin: 20px 0;
      // border-bottom: 1px solid #f5f5f5;
      display: flex;
      justify-content: space-between;
      padding: 0 40px;
      text-align: right;
      align-items: center;

      a {
        flex: 1;
        line-height: 1;
        display: inline-block;
        font-size: 20px;
        font-weight: 600;
        position: relative;
        text-align: left;
      }

      div {
        display: flex;
        align-items: center;
        a {
          font-size: 14px;
          color: $xtxColor;
          font-weight: 400;
        }
      }
    }
  }
}


.demo-tabs {
  padding: 20px;
  border-bottom: 1px solid #f5f5f5;
  font-size: large;

  .el-tab-pane {
    font-size: 20px;
  }

}


.account-box {



  .verification {
    display: flex;
    justify-content: space-around;
    align-items: center;
    

    .send {
      display: block;
      margin: 0 10px;
      font-size: 14px;
      width: 100px;
    }
  }


  .toggle {
    padding: 15px 40px;
    text-align: right;

    a {
      color: $xtxColor;

      i {
        font-size: 14px;
      }
    }
  }

  .form {
    padding: 0 20px 20px 20px;

    &-item {
      margin-bottom: 28px;

      .input {
        position: relative;
        height: 36px;

        >i {
          width: 34px;
          height: 34px;
          background: #cfcdcd;
          color: #fff;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 18px;
        }

        input {
          padding-left: 44px;
          border: 1px solid #cfcdcd;
          height: 36px;
          line-height: 36px;
          width: 100%;

          &.error {
            border-color: $priceColor;
          }

          &.active,
          &:focus {
            border-color: $xtxColor;
          }
        }

        .code {
          position: absolute;
          right: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
          background: #f5f5f5;
          color: #666;
          width: 90px;
          height: 34px;
          cursor: pointer;
        }
      }

      >.error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        color: $priceColor;

        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }

    .agree {
      a {
        color: #069;
      }
    }

    .btn {
      display: block;
      width: 100%;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      background: $xtxColor;

      &.disabled {
        background: #cfcdcd;
      }
    }
  }

  .action {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .url {
      a {
        color: #999;
        margin-left: 10px;
      }
    }
  }
}

.subBtn {
  margin-top: 20px;
  background: $xtxColor;
  width: 100%;
  color: #fff;
}

//图形验证码
.code {
  width: 100px;
  height: 30px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>