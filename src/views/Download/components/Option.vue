<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { downAPI, downloadAPI } from "@/apis/download"
import { ElMessage,  } from "element-plus"
// import { Delete } from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/el-message.css'
import { onMounted, ref } from "vue"
import { useUserStore } from '@/stores/user'    // 导入pinia
import { useRouter } from "vue-router"            //调用路由 => “方法”

const userStore = useUserStore()                // 实例化
const router = useRouter()                      // 调用路由方法

// 一、调用接口
const sendData = ref({
    category: '',
    type: '',
    keyword: ''
})

//需注意请求超时问题
const loading = ref(true)
//1.get请求获取前10条 => Done
const getdata = async() => {
    loading.value = true
    const resdata = await downAPI()
    tableData.value = resdata.data
    loading.value = false
}

//2.post请求 获取筛选对象 => Unfinished
const postdata = async() => {
    loading.value = true
    const result = await downloadAPI(sendData.value)
    tableData.value = result.data
    loading.value = false
    
}

//二、准备条件对象
//1.条件
const categoryvalue = ref('')   //类别下拉
const productvalue = ref('')    //产品类别下拉
const iconvalue = ref(null)
const categoryoptions = [
    {
        value: '',
        label: 'All',
    },
    {
        value: 'Instructions',
        label: 'User Manual',
        icon: 'icon-shiyongshuomingshu1',
    },
    {
        value: 'Communication',
        label: 'Communications Manual',
        icon: 'icon-qianzhengicon',
    },
    {
        value: '2D',
        label: '2D Drawings',
        icon: 'icon-dtuzhi',
    },
    {
        value: '3D',
        label: '3D Drawings',
        icon: 'icon-dtuzhi1',
    },
    {
        value: 'Selection',
        label: 'Selection Manual',
        icon: 'icon-chanpinshouce',
    },
    {
        value: 'Software',
        label: 'Software',
        icon: 'icon-ruanjiankaifabao',
    },
]

const productoptions = [
    {
        value: '',
        label: 'All',
    },
    {
        value: 'stepper',
        label: 'Integrated stepper motor',
    },
    {
        value: 'servo',
        label: 'Integrated servo motor',
    },
    {
        value: 'brushless',
        label: 'Integrated brushless motor',
    },
    {
        value: 'components',
        label: 'Motion components',
    },
    {
        value: 'control',
        label: 'Motion Controllers',
    },
]

//2.结果对象
const tableData = ref([])


//三、事件处理
//1.下拉1 文件类别
const categoryselect = () => {
    sendData.value.category = categoryvalue.value
    postdata()

}
const handleClearCategory = () => {
    sendData.value.category = ""
    // categoryvalue.value = ""
    postdata()
}

//2.下拉2 产品系列
const productselect = () => {
    sendData.value.type = productvalue.value
    postdata()
}
const handleClearProduct = () => {
    sendData.value.type = ""
    postdata()
}

//4.enter事件

//5.快捷条件点击
const clickselect = (value) => {
    sendData.value.category = value
    postdata()
}

// 6.用户登录判断
const login = () => {
    if (userStore.userInfo.token) {
        console.log('User logged in')
    } else {
        router.replace({path: '/login'})
        ElMessage({type: 'error', message: 'Please log in first'})        // 1.提示用户
    }
}

onMounted(() => {
    getdata()
    login()
})

</script>
<template> 
    <!-- 面包屑区域 -->

    <!-- 条件1 -->
    <div class="download-panel">
        <div class="container">
            <div class="display-require">
                <h2>Download</h2>
                <!-- 2.表单 -->
                <!-- <div class="item-input" id="">
                    <ul>
                        <li class="input">
                            <span>Document Type</span>
                            <el-select
                                v-model="categoryvalue"
                                placeholder="All"
                                :empty-values="[null, undefined]"
                                :value-on-clear="null"
                                clearable
                                @change="categoryselect"
                                @clear="handleClearCategory"
                            >
                                <el-option
                                v-for="item in categoryoptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                />
                            </el-select> 
                        </li>
                        <li class="input">
                            <span>Product range</span>
                            <el-select
                                v-model="productvalue"
                                :empty-values="[null, undefined]"
                                :value-on-clear="null"
                                clearable
                                placeholder="All"
                                @change="productselect"
                                @clear="handleClearProduct"
                            >
                                <el-option
                                v-for="item in productoptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                />
                            </el-select> 
                        </li>

                    </ul>

                </div> -->
            </div>
        </div>
    </div>
    <!-- 条件2 -->
    <div class="download-panel2">
        <div class="container">
            <div class="display-require">
                <div class="item-btn" id=""
                v-for="item in categoryoptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                >
                <div  class="btn-face" @click="clickselect(item.value)">
                    <i class="iconfont " :class="item.icon"></i>
                    <!-- <el-icon><Delete /></el-icon> -->
                    <span ref="iconvalue"> {{item.label}} </span>
                </div>

                </div>
            </div>
        </div>
    </div>
    <!-- 结果 -->
    <div class="download-panel">
        <div class="container">
            <div class="display-result">
                <h3>Result</h3>
                <div class="item-result" id="">
                  <el-card style="max-width: 100%" shadow="never">
                    <el-table :data="tableData" style="width: 100%" height="auto" v-loading="loading" element-loading-text="Loading...">
                        <el-table-column prop="product" label="Product range" width="" />
                        <el-table-column prop="name" label="Title" width="" />
                        <el-table-column prop="type" label="Type" width="" />

                        <el-table-column label="Operate" width="">
                            <template #default="scope">
                                <a :href="scope.row.url" target="_blank" class="btn-face" rel="noopener noreferrer">download</a>

                            </template>
                        </el-table-column>
                    </el-table>
                  </el-card>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang='scss'>

//内容主体
// 条件1
.download-panel {
    padding: 20px 0;
    background-color: #fff;
    width: 100vw;   //100视窗宽度

    //条件
    .display-require {
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // align-items: center;
        width: 100%;

        h2 {
            font-size: 32px;
            color: #003abd;
        }

        //2.表单
        .item-input {
            padding: 10px 10px;

            ul {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                align-items: end;
                width: 100%;

                .input {
                    display: flex;
                    flex-direction: column;
                    width: 45%;

                    span {
                        margin: 10px 0;
                        font-size: 15px;
                    }
                }
            }

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
// 条件2
.download-panel2 {
    padding: 20px 0;
    // background-color: #fff;
    width: 100vw;   //100视窗宽度
    //条件
    .display-require {
        padding: 0 10px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        // align-items: center;
        width: 100%;
        //2.那妞
        .item-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            margin:15px 15px;
            width: 100%;
            max-width: 255px;
            height: 80px;
            border: 1px solid #003abd;
            border-radius: 10px;
            background-color: #fff;
            font-size: 20px;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            .btn-face {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 15px;
                color: #003abd;
                width: 100%;
                height: 100%;
                cursor: pointer;
                i { //图标
                    margin-right: 15px;
                    font-size: 25px;
                }
            }
            &:hover {
                background-color: #003abd;
                .btn-face {
                    color: #fff;
                }
            }
        }
    }

}
// 结果
.download-panel {
    padding: 20px 0;
    background-color: #fff;
    width: 100vw;   //100视窗宽度

    //条件
    .display-result {
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;

        h3 {
            font-size: 28px;
            color: #282828;
        }

        //2.表
        .item-result {
            margin-top: 20px;
            padding: 10px 10px;

            // 3.1 重新定义el卡片
            ::v-deep(.el-card) {
                border: none;
                .el-card__body {
                    padding: 0; //去掉内边距
                    border: none;
                    // 2.1.3.1 重新定义表格el
                    .el-table {
                        .el-table__header {
                            th {
                                border-bottom: 2px solid #ebeef5;
                                .cell { //表头文字
                                    text-align: center; 
                                    font-size: 15px;
                                    font-weight: 500;
                                    
                                }
                            }
                        }
                        .el-table__body-wrapper {
                            tbody {
                                .cell { //表内容文字
                                    display: flex;
                                    justify-content: center;
                                    text-align: center;
                                    font-weight: 500;
                                    .btn-face {
                                        display: block;
                                        padding: 0 12px;
                                        // width: 40px;
                                        border: 1px solid #003abd;
                                        border-radius: 8px;
                                        font-size: 12px;
                                        color: #003abd;
                                        text-align: center;
                                        line-height: 26px;
                                        &:hover {
                                            background-color: #003abd;
                                            color: #fff;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

            }

        }
    }

}
</style>