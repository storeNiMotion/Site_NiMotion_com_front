<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { messageAPI } from "@/apis/message"
import { ElMessage,ElMessageBox } from "element-plus"
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
                    dialogFormVisible.value = false
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


// 按钮

const dialogFormVisible = ref(false)


</script>

<template>
    <!-- <div class="btn-face">consult</div> -->
    <el-button type="primary" @click="dialogFormVisible = true">
        Request a Quote
    </el-button>
    <!-- 主体 -->
    <el-dialog 
    v-model="dialogFormVisible" 
    title="Leave Your Message:" 
    width="600" 
    top="25vh" 
    align-center
    append-to-body="true"
    modal-class="overlay" 
    style="padding: 40px;background-color: #f6f6f6;">
        <template #header="{ titleId }">
            <div class="my-header">
                <h4 :id="titleId" class="titleClass">Contact Us</h4>
                <div class="pClass">
                    <p>Ready to find out the right  control product for your application?</p>
                    <p>We are happy to help you with the next step.</p>
                </div>
            </div>
        </template>
        

        <el-form ref="formRef" 
        :rules="rules" 
        label-width="auto" 
        :model="ruleForm" 
        class="ruleForm"
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
            <div class="name">
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
            </div>

            <el-form-item prop="content">
                <el-input 
                v-model="ruleForm.content" 
                type="textarea" 
                :rows="3"
                :autosize="{ minRows: 4 }"
                placeholder="*Describe your specific request"
                />
            </el-form-item>

        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <!-- <el-button @click="dialogFormVisible = false">Cancel</el-button> -->
                <el-button type="primary" @click="onSubmit">
                Send
                </el-button>
            </div>
        </template>
    </el-dialog>

</template>

<style scoped lang='scss'>
// 遮罩
.el-overlay {
    background-color: rgba(0, 0, 0, 0.8) !important;
}

// 标题
.titleClass {
    margin: 20px 0;
    font-family: "formFont" !important;
    font-size: 38px;
    font-family: 600;
}
// 描述
.pClass {
    margin-bottom: 20px;
    font-size: 16px;
    color: #555;
    p {
        line-height: 1.8;
    }
}

.el-dialog {
    padding: 0 20px;
    .el-overlay {
        background-color: var(--el-overlay-color-light) !important;
    }
    .el-dialog__header {
        .el-dialog__title {
            padding: 20px 0;
            
            p {
                font-size: 18px;
            }
        }
    }
    
}

// 表单
.name {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .el-form-item {
        width: 49%;
    }
}

.ruleForm {
    .el-card__body {
        //padding: 0; //去掉内边距
        border: none;
    }
    .el-form-item {
        margin-bottom: 25px;
    }
    .el-form-item__content {
        justify-content: center;
    }
}

button {
    width: 100%;
    height: 40px;
}
// 3.1 重新定义el卡片
::v-deep(.el-dialog__body) {
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
        margin-bottom: 25px;
    }
    .el-form-item__content {
        justify-content: center;
    }
}

</style>