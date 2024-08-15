<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { messageAPI } from "@/apis/message"
import { ElMessage, } from "element-plus"
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
        { required: true, message: '不能为空', trigger: 'blur' }
    ],
    phone: [
        { required: true, message: '不能为空', trigger: 'blur' },
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
                '请检查信息，是否确认提交',
                '是否提交',
                {
                    confirmButtonText: '确认',
                    cancelButtonText: '取消',
                    type: 'warning',
                    center: true,
                    beforeClose: (action, instance, done) => {
                        if (action === 'confirm') {
                            console.log('点击确认')
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
                        message: '提交成功',

                    })
                })
                .catch(() => {
                    ElMessage({
                        type: 'info',
                        message: '已取消',
                    })
                })
        }
    })
}

</script>

<template>
    <!-- banner区域 -->
    <div class="banner-pro">
        <div class="">
            <img src="https://www.nimotion.cn/static/images/banner/07c9d82ce42fdb94.webp" alt="">
        </div>
    </div>
    <!-- 面包屑区域 -->
    <div class="nav-bread">
        <div class="container">
            <a href="">首页</a>
            <span>></span>
            <a href="">联系我们</a>
        </div>
    </div>
    <!-- 主体 -->
    <div class="Contact-panel">
        <div class="container">
            <div class="display">
                <!-- 1.联系我们 -->
                <div class="item-us" id="item-us">
                    <el-card style="max-width: 100%" shadow="never">
                        <div class="info-item">

                            <div class="info-box">
                                <h4>北京立迈胜控制技术有限责任公司</h4>
                                <p>地 址： 北京市大兴区金星路12号院3号楼</p>
                                <p>电 话： 010-60213882</p>
                                <p>董经理： 18600669435</p>
                                <p>闫经理： 15652093735</p>
                                <p>邮 箱： nimotion@nimotion.com</p>
                            </div>
                            <div class="info-box">
                                <h4>南京立迈胜机器人有限公司</h4>
                                <p>地 址： 南京市六合区虎跃东路8号科创园B6栋</p>
                                <p>电 话： 025-57569916</p>
                                <p>欧经理： 18994060133</p>
                                <!-- <p>闫经理： 15652093735</p> -->
                                <p>邮 箱： salesNJ@nimotion.com</p>
                            </div>
                            <div class="info-box">
                                <h4>立迈胜深圳办事处</h4>
                                <p>地 址： 深圳市南山区留仙大道4019号15栋403室</p>
                                <!-- <p>电 话： 010-60213882</p> -->
                                <p>许经理： 19926697610</p>
                                <p>高经理： 13302955158</p>

                            </div>
                        </div>
                    </el-card>
                </div>
                <!-- 2.表单 -->
                <div class="item-input" id="item-us">
                    <el-form ref="formRef" :rules="rules" label-width="auto" :model="ruleForm" class="demo-ruleForm"
                        :size="formSize" status-icon>
                        <el-form-item label="公司名称">
                            <el-input v-model="ruleForm.company" />
                        </el-form-item>
                        <el-form-item prop="name" label="姓名">
                            <el-input v-model="ruleForm.name" />
                        </el-form-item>
                        <el-form-item prop="phone" label="电话">
                            <el-input v-model="ruleForm.phone" />
                        </el-form-item>
                        <el-form-item label="邮箱">
                            <el-input v-model="ruleForm.email" />
                        </el-form-item>

                        <el-form-item label="详细内容">
                            <el-input v-model="ruleForm.content" type="textarea" />
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit" style="">提交</el-button>
                            <!-- <el-button>取消</el-button> -->
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped lang='scss'>
// banner
.banner-pro {
    img {
        width: 100%;
    }
}

//面包屑
.nav-bread {
    padding: 0 20px;
    height: 36px;

    a {
        color: #1d1d1f;
        font-size: 12px;
        line-height: 36px;

        &:hover {
            color: #003abd;
        }
    }
}

//内容主体
.Contact-panel {
    background-color: #fff;
    width: 100vw; //100视窗宽度

    .display {
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // align-items: center;
        width: 100%;

        //1.联系我们
        .item-us {

            // 3.1 重新定义el卡片
            ::v-deep(.el-card) {
                margin-bottom: 30px;
                width: 100%;
                border: none;

                .el-card__body {
                    //padding: 0; //去掉内边距
                    border: none;
                }
            }

            // 3.2 自定义内容样式
            .info-item {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                width: 100%;

                // 3.2.3 信息box
                .info-box {
                    margin: 10px 10px;

                    // padding: 20px 0px;
                    h4 {
                        color: #141414;
                        font-size: 18px;
                        font-weight: 500;
                    }

                    $info-p: 13px;

                    p {
                        margin-top: 14px;
                        color: #1d1d1f;
                        font-size: $info-p;
                        // text-indent: (calc($info-p * 2));
                        line-height: (calc($info-p * 1));
                    }
                }
            }
        }

        //2.表单
        .item-input {
            padding: 0 20px;

            // 3.1 重新定义el卡片
            ::v-deep(.el-form) {
                margin-bottom: 30px;
                width: 100%;
                border: none;

                .el-card__body {
                    //padding: 0; //去掉内边距
                    border: none;
                }

                .el-form-item__content {
                    justify-content: center;
                }
            }
        }
    }

}
</style>