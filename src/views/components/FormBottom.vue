<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { messageAPI } from "@/apis/message"
import { ElMessage } from "element-plus"
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

                <!-- 2.表单 -->
                <div class="item-input" id="item-us">
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

</template>

<style scoped lang='scss'>

//内容主体
.Contact-panel {
    // margin-top: 30px;
    background-color: #000000b3;
    background-image: url(https://www.nimotion.com/static/images/banner/form_bg_com.webp);
    width: 100vw; //100视窗宽度

    .display {
        // padding: 40px 10px;
        display: flex;
        // flex-direction: column;
        justify-content: center;
        // align-items: center;
        width: 100%;

        //1.左侧信息

        //2.表单
        .item-input {
            flex: 1;
            padding: 40px 40px;
            // border: 2px solid #fff;
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
</style>