<script setup>
// 登录页面

// import { loginAPI } from "@/apis/user"
// import 'element-plus/es/components/message/style/css'
// import type { TabsPaneContext } from 'element-plus'
// import { TabsPaneContext } from 'element-plus'

import Vcode from "vue3-puzzle-vcode"
import { ref, onMounted } from 'vue'
import { ElMessage } from "element-plus"          // 导入提示
import 'element-plus/theme-chalk/el-message.css'  // 导入提示样式 这个更精确 防止影响其他组件
import { useRouter } from "vue-router"            //调用路由 => “方法”
import { useUserStore } from "@/stores/user"      // 导入pinia
import { loginAPI, isresigterAPI, isUsenameResigterAPI, sendCodeAPI } from "@/apis/user"
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

const send_code = ref({})
const postCode = async({phone})=> {               // 2.定义获取接口数据的action函数   => 发送短信
        const res = await sendCodeAPI({phone})
        send_code.value = res
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
    { required: true, message: '用户名不能为空', trigger:'blur' },
    { min: 2, max: 15, message: '用户名在 2~15 个字符之内', trigger: 'blur' },
    // {
    //   validator: (rule, value, callback) => {
    //     postUserName(form.value)
    //     console.log(user_Name.value);
    //     console.log(value);
    //     if (user_Name.value.code === 400) {
    //       callback()
    //     } else {
    //       callback(new Error('用户名不存在'))
    //     }
    //   }
    // }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, max: 15, message: '密码长度为 6~15 位', trigger: 'blur' },
    { pattern: /^\S{6,15}/, message: '密码不能包含空格', trigger: 'blur' },
    { pattern: /^(?=.*\d)(?=.*[A-Za-z]).{5,17}$/, message: '请至少输入字母数字两种组合', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '不能为空', trigger: 'blur' }
  ],
  agree: [
    {
      validator: (rule, value, callback) => {
        
        if (value) {                    //自定义校验逻辑
          callback()
        } else {
          callback(new Error('请勾选'))
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

// 二、短信登录
//1.准备表单对象
const form2 = ref({
  phone:"",
  code:"",
  agree:true
})

// 2.准备规则对象
const rules2 = {
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: /^\S/, message: '密码不能包含空格', trigger: 'blur' },
    { pattern: /^(1)\d{10}$/, message: '请输入 11 位手机号码', trigger: 'blur' },
  ],
  agree: [
    {
      validator: (rule, value, callback) => {
        
        if (value) {                    //自定义校验逻辑
          callback()
        } else {
          callback(new Error('请勾选'))
        }
      }
    }
  ]
}

// 3.获取form实例做统一校验
const formRef2 = ref(null)
const router2 = useRouter()                                    // 调用路由方法
//调用实例
const verify = () => {
  formRef2.value.validate(async (valid)=>{
  //valid:所有表单都通过校验 才为true
  // console.log(valid)
  //以valid作为判断条件 如果通过执行
  if (valid) {
    //todo login
    postCode(form2.value)  // 提交信息
    //1.提示用户
    //ElMessage({type: 'success', message: '登录成功'})
    
    //router.replace({path: '/'})                       //2.跳转首页
    isSendingCode.value = true                          // disabled 属性置为真  禁用点击
    countdown.value = 60                                // 设置倒计时时间，这里假设为10秒
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

// 4.滑动验证码
const isShow = ref(false)
import img1 from "@/assets/codeimgs/img1.jpg"
import img2 from "@/assets/codeimgs/img2.jpg"
import img3 from "@/assets/codeimgs/img3.jpg"
import img4 from "@/assets/codeimgs/img4.jpg"
import img5 from "@/assets/codeimgs/img5.jpg"
import img6 from "@/assets/codeimgs/img6.jpg"
import img7 from "@/assets/codeimgs/img7.jpg"
import img8 from "@/assets/codeimgs/img8.jpg"
const codebackgroundimgs = ref([])
codebackgroundimgs.value = [
  "@/assets/codeimgs/img1.jpg",
  "@/assets/codeimgs/img2.jpg",
  "@/assets/codeimgs/img3.jpg",
  "@/assets/codeimgs/img4.jpg",
  "@/assets/codeimgs/img5.jpg",
  "@/assets/codeimgs/img6.jpg",
  "@/assets/codeimgs/img7.jpg",
  "@/assets/codeimgs/img8.jpg",
]
const success = () => {
  isShow.value = false
  verify()
}

const close = () => {
  isShow.value = false
}

const fail = () => {
  console.log('验证失败')
}
// 4.发送短信验证
const isSendingCode = ref(false)
const countdown = ref(0)

const sendcode = () => {
  //调用验证码
  isShow.value = true                                   //展现验证码模态框


}

// 4.点击登录事件
const doLogin2 = () => {
  
  const {phone, code} = form2.value                     // 解构用户名和密码
  
  formRef2.value.validate(async (valid)=>{                     //调用实例
    //valid:所有表单都通过校验 才为true
    // console.log(valid)
    //以valid作为判断条件 如果通过执行
    if (valid) {
      await userStore.getSmsUserInfo({phone, code})       //todo login 调用接口 传入username, password
      ElMessage({type: 'success', message: '登录成功'})        // 1.提示用户
      router2.replace({path: '/'})                             // 2.跳转首页 用replace防止用户重复返回登录
    }
  })
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
          <el-tab-pane label="账号登录" name="first">

            <div class="form">
              <el-form ref="formRef" :model="form"  :rules="rules1" label-position="right"
                status-icon>
                
                <el-form-item prop="username">
                  <el-tooltip content="用户名在2个字符以上,且不能为纯数字" placement="top">
                    <el-input placeholder="请输入用户名或手机号" v-model="form.username" />
                  </el-tooltip>
                  
                </el-form-item>
                <el-form-item prop="password" style="margin-top: 40px;">
                  <el-tooltip content="字母/数字组合且最少6个字符以上" placement="top">
                    <el-input placeholder="请输入密码" v-model="form.password" />
                  </el-tooltip>
                </el-form-item>
                <!-- 图形验证码 -->
                <el-form-item prop="code" style="margin-top: 40px;">
                    <el-input placeholder="请输入验证码" v-model="form.code" />
                    <div class="code"  @click="clickcode">
                      <img :src="`data:image/png;base64,${verificationCodeurl}`" alt="验证码">
                      <!-- <img :src="verificationCodeurl" alt=""> -->
                      <span class="tooltiptext">点击刷新</span>
                    </div>
                </el-form-item>

                <el-button size="large" class="subBtn" @click="doLogin">点击登录</el-button>
                <el-form-item  prop="agree" label-width="22px">
                  <el-checkbox  size="large" v-model="form.agree">
                    我已同意隐私条款和服务条款
                  </el-checkbox>
                </el-form-item>
                
              </el-form>
            </div>

          </el-tab-pane>

          <!-- 短信登录  -->
          <el-tab-pane label="短信登录" name="second">
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
                    <!-- <a href="" class="send" @click="sendcode" >发送验证码</a> -->
                  </div>
                  <!-- <div>
                      <a href="" class="send">点击发送验证码</a>
                    </div> -->
                  
                </div>
                <!-- <Vcode :show="isShow" @success="success" @close="close" />:imgs="codebackgroundimgs" -->
                <Vcode
                  :show="isShow"
                  @success="success"
                  @close="close"
                  @fail="fail"
                  :imgs="[img1, img2, img3, img4, img5, img6, img7, img8]"
                  >
                </Vcode>
                <el-button size="large" class="subBtn" @click="doLogin2"  @keyup.enter="doLogin2">点击登录</el-button>
                <el-form-item  prop="agree" label-width="22px">
                  <el-checkbox  size="large" v-model="form.agree">
                    我已同意隐私条款和服务条款
                  </el-checkbox>
                </el-form-item>
                
              </el-form>
            </div>

          </el-tab-pane>
        </el-tabs>

        <nav>
          <div>
            <span>没有账户 ？</span>
            <RouterLink to="/resigter">注册</RouterLink>
          </div>
          <div>
            <!-- <span>没有账户 ？</span> -->
            <RouterLink to="/forget">忘记密码</RouterLink>
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