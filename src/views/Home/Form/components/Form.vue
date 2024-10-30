<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { messageAPI } from "@/apis/message"
import { ElMessage, ElMessageBox } from "element-plus"
import 'element-plus/theme-chalk/el-message.css'
import { ref, reactive } from "vue"

// 一、调用接口
const getmessage = async () => {
    const res = await messageAPI(ruleForm.value)
    console.log(res)
    // res.value = ruleForm.value
}

//二、表单校验
//1.准备表单对象
const ruleForm = ref({
    company: '',
    name: '',
    phone: '',
    email: '',
    content: ''
})

//2.准备规则对象
const rules = reactive({
    name: [
        { required: true, message: 'Cannot be empty', trigger: 'blur' }
    ],
    email: [
        { required: true, message: 'Cannot be empty', trigger: 'blur' },
    ],
    
    content: [
        { required: true, message: 'Cannot be empty', trigger: 'blur' },
    ]

})
//3.获取form实例做统一校验
const formRef = ref(null)
const onSubmit = async () => {
    // 解构用户名和密码
    // const {name, phone, mail, desc } = ruleForm.value
    console.log(ruleForm.value)
    // 调用实例
    await formRef.value.validate((valid) => {
        //valid:所有表单都通过校验 才为true
        // console.log(valid)
        //以valid作为判断条件 如果通过执行
        if (valid) {

            //  console.log('submit!')
            //  1.提示用户
            //  ElMessage({type: 'success', message: '登录成功'})
            ElMessageBox.confirm(
                'Please check the information and confirm submission',
                'Submit',
                {
                    confirmButtonText: 'Yes',
                    cancelButtonText: 'Cancel',
                    type: 'warning',
                    center: true,
                    beforeClose: (action, instance, done) => {
                        if (action === 'confirm') {
                            console.log('Click Yes')
                            getmessage(),   //调用接口提交数据
                                done()
                        } else {
                            done()
                        }
                    }

                }
            )
                .then(() => {

                    ElMessage({
                        type: 'success',
                        message: 'Submit successfully',

                    })
                })
                .catch(() => {
                    ElMessage({
                        type: 'info',
                        message: 'Cancelled',
                    })
                })
        }
    })
}

</script>

<template>

    <!-- 主体 -->
    <div class="Contact-panel">
        <div class="container">
            <div class="display">
                <!-- 1.左侧表单描述 -->
                <div class="item-info" id="item-us">
                    <div class="title">
                        <h3>Get in Touch Now</h3>
                    </div>
                    <p>
                        NiMotion team has been working in the field of industrial automation for many years, focusing on technology and rich experience in product development and industry application. The team is committed to developing smart, delicate and efficient automation intelligent products to provide users with professional motion control platform and automation solutions.
                    </p>
                </div>
                <!-- 2.表单 -->
                <div class="item-input" id="item-us">
                    <div class="form-box">
                        <div class="title">
                            <h3>QUICK ENQUIRY</h3>
                            <p>Need a Consultation? Contact Us</p>
                        </div>
                        <el-form ref="formRef" 
                            :rules="rules" 
                            label-width="auto" 
                            :model="ruleForm" 
                            class="demo-ruleForm"
                            :size="formSize" status-icon>

                            <div class="name">
                                <el-form-item prop="name" >
                                    <el-input 
                                    v-model="ruleForm.name"
                                    placeholder="*Name"
                                    />
                                </el-form-item>
                                <el-form-item >
                                    <el-input 
                                    v-model="ruleForm.phone" 
                                    placeholder="Phone/WhatsApp/WeChat"
                                    />
                                </el-form-item>
                            </div>
                            <el-form-item prop="email" >
                                <el-input 
                                v-model="ruleForm.email" 
                                placeholder="*E-mail"
                                />
                            </el-form-item>

                            <el-form-item >
                                <el-input 
                                v-model="ruleForm.company" 
                                placeholder="Company"
                                />
                            </el-form-item>
                            <el-form-item prop="content">
                                <el-input 
                                v-model="ruleForm.content" 
                                type="textarea" 
                                :rows="3"
                                :autosize="{ minRows: 4 }"
                                placeholder="*Describe your specific request"
                                />
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="onSubmit" style="">SEND</el-button>
                                <!-- <el-button>取消</el-button> -->
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>

//内容主体
.Contact-panel {
    background-color: #000000b3;
    background-image: url(https://www.nimotion.com/static/images/banner/form_bg_com.webp);
    width: 100vw; //100视窗宽度

    .display {
        padding: 60px 20px;
        display: flex;
        // flex-direction: column;
        justify-content: center;
        // flex-wrap: wrap;
        // align-items: center;
        width: 100%;

        //1.左侧信息
        .item-info {
            display: flex;
            flex-direction: column;
            margin-right: 20px;
            padding: 50px;
            width: 46%;
            .title {
                h3 {
                    color: #fff;
                    position: relative;
                    font-family: "formFont" !important;
                    font-size: 40px;
                    font-weight: 500;
                    margin-bottom: 55px;
                    padding-bottom: 30px;
                }
                h3:before {
                    content: "";
                    width: 145px;
                    height: 1px;
                    background: #fff;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                }
                h3:after {
                    content: "";
                    width: 24px;
                    height: 3px;
                    background: #DA251C;
                    position: absolute;
                    left: 0;
                    bottom: -1px;
                }

            }
            p {
                color: #fff;
                font-size: 18px;
                line-height: 1.8;
            }
        }

        //2.表单
        .item-input {
            flex: 1;
            // margin: 0 10px;
            padding: 20px;
            // border: 2px solid #fff;
            .form-box {
                border: 2px solid #fff;
                padding: 40px 40px;
            }
            .title {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 20px 0 40px;
                color: #fff;
                h3 {
                    font-family: "formFont" !important;
                    font-size: 32px;
                    font-weight: 600;
                }
                p {
                    font-size: 16px;
                }
            }
            // 3.1 重新定义el卡片
            ::v-deep(.el-form) {
                margin-bottom: 30px;
                width: 100%;
                border: none;
                .name {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
                    .el-form-item {
                        width: 49%;
                    }
                }
                .el-card__body {
                    //padding: 0; //去掉内边距
                    border: none;
                }
                .el-form-item {
                    margin-bottom: 30px;
                    // height: 50px;
                    input {
                        height: 40px;
                    }
                }
                .el-form-item__content {
                    justify-content: center;
                    button {
                        width: 100%;
                        height: 50px;
                        font-size: 18px;
                        
                    }
                }
            }
        }
    }

}

@media (max-width: 1200px) {
    .Contact-panel {

        .display {
            flex-direction: column;

            //1.左侧信息
            .item-info {
                padding: 50px;
                width: 100%;
            }
            //2.表单
            .item-input {
                margin: 0 10px;
                width: 100%;
            }
        }

    }
}

@media (max-width: 1024px) {

}

@media (max-width: 960px) {

}

@media (max-width: 768px) {
    .Contact-panel {

.display {
    flex-direction: column;

        //1.左侧信息
        .item-info {
            padding: 20px;
            width: 100%;
        }
        //2.表单
        .item-input {
            flex: 1;
            padding: 10px 20px 10px 0;

            .form-box {
                border: 2px solid #fff;
                padding: 20px 20px;
            }

            // 3.1 重新定义el卡片
            ::v-deep(.el-form) {
                margin-bottom: 30px;
                width: 100%;
                border: none;
                .name {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    width: 100%;
                    .el-form-item {
                        width: 100%;
                    }
                }
                .el-card__body {
                    //padding: 0; //去掉内边距
                    border: none;
                }
                .el-form-item {
                    margin-bottom: 30px;
                    // height: 50px;
                    input {
                        height: 40px;
                    }
                }
                .el-form-item__content {
                    justify-content: center;
                    button {
                        width: 100%;
                        height: 50px;
                        font-size: 18px;
                        
                    }
                }
            }
        }
    }

    }

}



</style>