<script setup>
//忘记密码页面
import { ref } from 'vue'
// import { loginAPI } from "@/apis/user"
// import 'element-plus/es/components/message/style/css'
import { ElMessage } from "element-plus"
import 'element-plus/theme-chalk/el-message.css'
import { useRouter } from "vue-router"                      //调用方法

import { useUserStore } from "@/stores/user"                // 导入pinia
import { sendCodeAPI } from "@/apis/user"       // 导入登录接口
//import { sendCodeAPI } from "@/apis/sendsms"                // 导入发短信接口

const userStore = useUserStore()

const send_code = ref({})
const postCode = async({email})=> {               // 2.定义获取接口数据的action函数   => 发送短信
        const res = await sendCodeAPI({email})
        send_code.value = res
}

//表单校验
//1.准备表单对象
const form = ref({
  password:"",
  email: "",
  code: "",
  agree:true
})

//2.准备规则对象
const rules = {
  password: [
    { required: true, message: 'Cannot be empty', trigger: 'blur' },
    { min: 6, max: 15, message: '6~15 digits', trigger: 'blur' },
    { pattern: /^\S/, message: 'Cannot contain spaces', trigger: 'blur' },
    { pattern: /^(?=.*\d)(?=.*[A-Za-z]).{5,17}$/, message: 'Alphanumeric combination', trigger: 'blur' }
  ],
  email: [
    { required: true, message: 'Enter your email address', trigger: 'blur' },
    { pattern: /^\S/, message: 'Cannot contain spaces', trigger: 'blur' },
    // { pattern: /^(1)\d{10}$/, message: '请输入 11 位手机号码', trigger: 'blur' },

  ],

  agree: [
    {
      validator: (rule, value, callback) => {
        //自定义校验逻辑
        if (value) {
          callback()
        } else {
          callback(new Error('Please check'))
        }
      }
    }
  ]
}
//3.获取form实例做统一校验
const formRef = ref(null)
const router = useRouter()

// 点击事件
//注册
const doLogin = () => {
  // 解构用户名和密码
  const { password, email, code} = form.value
  //调用实例
  formRef.value.validate(async (valid)=>{
    //valid:所有表单都通过校验 才为true
    console.log(valid)
    //以valid作为判断条件 如果通过执行
    if (valid) {
      //todo login
      await userStore.forgetUserInfo({ password, email, code})  // 提交注册信息 状态200才会成功
      //1.提示用户
      ElMessage({type: 'success', message: 'Reset Successfully'})
      
      router.replace({path: '/'})                       //2.跳转首页
    }
  })
}

//发送验证
const isSendingCode = ref(false)
const countdown = ref(0)
const phoneref = ref(null)
const sendcode = () => {

  //调用实例
  formRef.value.validate(async (valid)=>{
  //valid:所有表单都通过校验 才为true
  //以valid作为判断条件 如果通过执行
  if (valid) {
    //todo login
    postCode(form.value)  // 提交信息
    //1.提示用户
    //ElMessage({type: 'success', message: '登录成功'})
    //router.replace({path: '/'})                       //2.跳转首页
    isSendingCode.value = true                          // disabled 属性置为真  禁用点击
    countdown.value = 5                                // 设置倒计时时间，这里假设为10秒
    const countdownInterval = setInterval(() => {       // 倒计时效果
      countdown.value --
      if (countdown.value <= 0) {
        clearInterval(countdownInterval)
        isSendingCode.value = false                     // disabled 属性置为假  恢复点击
      }
    }, 1000)
  }
  })
}



</script>

<template>
  <div class="login-section">
    <div class="container">
      <div class="register">
        <nav>
          <a href="javascript:;">Password Reset</a>
            <div>
              <span>Already have an account?</span>
              <RouterLink to="/login">Log in</RouterLink>
            </div>
        </nav>

        <div class="account-box">
          <div class="form">
            <el-form ref="formRef" :model="form"  :rules="rules" label-position="right" label-width="80px"
              status-icon>
              <el-form-item prop="email" label="Email">
                <el-tooltip content="Enter your email address" placement="top">
                  <el-input ref="phoneref" placeholder="Enter your email address" v-model="form.email" />
                </el-tooltip>
                
              </el-form-item >
              <el-form-item prop="password" label="Password">
                <el-tooltip content="Alphanumeric combination of more than 6 characters" placement="top">
                  <el-input placeholder="Enter new password" v-model="form.password" />
                </el-tooltip>
                
              </el-form-item >

              <div class="verification">
                    <el-form-item prop="code" label="Verify" style="margin-top: 20px;width: 100%;">
                      <el-input placeholder="Verification Code" v-model="form.code" />
                      
                    </el-form-item>
                    <div>
                      <el-button type="primary" @click="sendcode" :disabled="isSendingCode || countdown > 0" class="send">
                        {{ countdown > 0 ? `Resend(${countdown})` : 'Send' }}
                      </el-button>
                      <!-- <a href="" class="send" @click="sendcode" >发送验证码</a> -->
                    </div>
                    
                  </div>
              <el-form-item  prop="agree" label-width="22px">
                <el-checkbox  size="large" v-model="form.agree">
                  I agree to the Privacy Policy and Terms of Service
                </el-checkbox>
              </el-form-item>
              <el-button size="large" class="subBtn" @click="doLogin">Reset Password</el-button>
            </el-form>
          </div>
        </div>
      </div>

    </div>

  </div>

</template>

<style scoped lang='scss'>

.login-section {
  background: url('@/assets/images/login-bg.png') no-repeat center / cover;
  padding: 40px 0;
  // height: 800px;
  width: 100vw;
  height: 100%;
  // position: relative;login-section
  .container {
    display: flex;
    justify-content: end;
  }
  .register {
    margin-right: 20vw;
    width: 400px;
    background: #fff;
    // position: absolute;
    left: 50%;
    top: 60px;
    transform: translate3d(100px, 0, 0);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

    nav {
      font-size: 14px;
      height: 100px;
      margin-bottom: 20px;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
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



.account-box {

  .el-form {
    padding-top: 0px;

    .el-form-item{
      margin-top: 40px;
    }
  }

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
  background: $xtxColor;
  width: 100%;
  color: #fff;
}
</style>