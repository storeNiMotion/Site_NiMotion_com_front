<script setup>
//忘记密码页面
import { ref } from 'vue'
// import { loginAPI } from "@/apis/user"
// import 'element-plus/es/components/message/style/css'
import { ElMessage } from "element-plus"
import 'element-plus/theme-chalk/el-message.css'
import { useRouter } from "vue-router"                      //调用方法

import { useUserStore } from "@/stores/user"                // 导入pinia
import { loginAPI, isresigterAPI, isUsenameResigterAPI, sendCodeAPI } from "@/apis/user"       // 导入登录接口
//import { sendCodeAPI } from "@/apis/sendsms"                // 导入发短信接口

const userStore = useUserStore()

const userPhone = ref({})
const getUserPhone = async({phone})=> {               // 2.定义获取接口数据的action函数   => 手机号是否存在
        const res = await isresigterAPI({phone})
        userPhone.value = res
}

const user_Name = ref({})
const postUserName = async({username})=> {               // 2.定义获取接口数据的action函数   => 用户名是否存在
        const res = await isUsenameResigterAPI({username})
        user_Name.value = res
}

const send_code = ref({})
const postCode = async({phone})=> {               // 2.定义获取接口数据的action函数   => 发送短信
        const res = await sendCodeAPI({phone})
        send_code.value = res
}

const sendCode = async({phone})=> {               // 2.定义获取接口数据的action函数   => 登录
        const res = await sendCodeAPI({phone})
        userPhone.value = res
    }

//表单校验
//1.准备表单对象
const form = ref({
  password:"",
  phone: "",
  code: "",
  agree:true
})

//2.准备规则对象
const rules = {
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, max: 15, message: '密码长度为 6~15 位', trigger: 'blur' },
    { pattern: /^\S/, message: '密码不能包含空格', trigger: 'blur' },
    { pattern: /^(?=.*\d)(?=.*[A-Za-z]).{5,17}$/, message: '请至少输入字母数字两种组合', trigger: 'blur' }
  ],
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: /^\S/, message: '密码不能包含空格', trigger: 'blur' },
    { pattern: /^(1)\d{10}$/, message: '请输入 11 位手机号码', trigger: 'blur' },
    // {
    //   validator: (rule, value, callback) => {
    //     getUserPhone(form.value)
    //     if (userPhone.value.code == 200) {
    //       callback()
    //     } else {
    //       callback(new Error('手机号已注册'))
    //     }
    //   }
    // }
  ],
  // code: [
  //   { required: true, message: '请输入验证码', trigger: 'blur' },
  //   { pattern: /^\S/, message: '验证码不能包含空格', trigger: 'blur' },
  //   { pattern: /^\d{6}$/, message: '请输入6位验证码', trigger: 'blur' }
  // ],

  agree: [
    {
      validator: (rule, value, callback) => {
        //自定义校验逻辑
        if (value) {
          callback()
        } else {
          callback(new Error('请勾选'))
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
  const { password, phone, code} = form.value
  //调用实例
  formRef.value.validate(async (valid)=>{
    //valid:所有表单都通过校验 才为true
    console.log(valid)
    //以valid作为判断条件 如果通过执行
    if (valid) {
      //todo login
      await userStore.forgetUserInfo({ password, phone, code})  // 提交注册信息 状态200才会成功
      //1.提示用户
      ElMessage({type: 'success', message: '注册成功'})
      
      router.replace({path: '/'})                       //2.跳转首页
    }
  })
}

//发送验证
const isSendingCode = ref(false)
const countdown = ref(0)
const phoneref = ref(null)
const sendcode = () => {

  console.log('发送验证码')
  console.log(formRef.value)
  //调用实例
  formRef.value.validate(async (valid)=>{
  //valid:所有表单都通过校验 才为true
  console.log(valid)
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
          <a href="javascript:;">密码重置</a>
            <div>
              <span>已有账户 ？</span>
              <RouterLink to="/login">登录</RouterLink>
            </div>
        </nav>

        <div class="account-box">
          <div class="form">
            <el-form ref="formRef" :model="form"  :rules="rules" label-position="right" label-width="80px"
              status-icon>
              <el-form-item prop="phone" label="手机号">
                <el-tooltip content="请输入11位手机号码" placement="top">
                  <el-input ref="phoneref" placeholder="请输入手机号" v-model="form.phone" />
                </el-tooltip>
                
              </el-form-item >
              <el-form-item prop="password" label="密码">
                <el-tooltip content="字母/数字组合且最少6个字符以上" placement="top">
                  <el-input placeholder="请输入新密码" v-model="form.password" />
                </el-tooltip>
                
              </el-form-item >

              <div class="verification">
                    <el-form-item prop="code" label="验证" style="margin-top: 20px;width: 100%;">
                      <el-input placeholder="验证码" v-model="form.code" />
                      
                    </el-form-item>
                    <div>
                      <el-button type="primary" @click="sendcode" :disabled="isSendingCode || countdown > 0" class="send">
                        {{ countdown > 0 ? `重新发送(${countdown})` : '发送验证码' }}
                      </el-button>
                      <!-- <a href="" class="send" @click="sendcode" >发送验证码</a> -->
                    </div>
                    
                  </div>
              <el-form-item  prop="agree" label-width="22px">
                <el-checkbox  size="large" v-model="form.agree">
                  我已同意隐私条款和服务条款
                </el-checkbox>
              </el-form-item>
              <el-button size="large" class="subBtn" @click="doLogin">重置密码</el-button>
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