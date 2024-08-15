<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { downAPI, downloadAPI } from "@/apis/download"
import { ElMessage,  } from "element-plus"
import { Delete } from '@element-plus/icons-vue'
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
    // console.log(resdata)
    tableData.value = resdata.data
    loading.value = false
    // console.log(resdata.data)
    // res.value = ruleForm.value
}

//2.post请求 获取筛选对象 => Unfinished
const postdata = async() => {
    loading.value = true
    const result = await downloadAPI(sendData.value)
    tableData.value = result.data
    loading.value = false
    // console.log(res)
    // if (result) {
    //     tableData.value = result.data
    // } else {
    //     getdata()
    // }
    
}

//二、准备条件对象
//1.条件
const categoryvalue = ref('')   //类别下拉
const productvalue = ref('')    //产品类别下拉
const searchinput = ref('')     //搜索框iconvalue
const iconvalue = ref(null)
const categoryoptions = [
  {
    value: '使用说明书',
    label: '使用说明书',
    icon: 'icon-shiyongshuomingshu1',
  },
  {
    value: '通信手册',
    label: '通信手册',
    icon: 'icon-qianzhengicon',
  },
  {
    value: '2D图纸',
    label: '2D图纸',
    icon: 'icon-dtuzhi',
  },
  {
    value: '3D图纸',
    label: '3D图纸',
    icon: 'icon-dtuzhi1',
  },
  {
    value: '选型手册',
    label: '选型手册',
    icon: 'icon-chanpinshouce',
  },
  {
    value: '软件',
    label: '软件',
    icon: 'icon-ruanjiankaifabao',
  },
]

const productoptions = [
  {
    value: 'STM系列一体化步进电机',
    label: 'STM系列一体步进电机',
  },
  {
    value: 'PMM系列一体化伺服电机',
    label: 'PMM系列一体伺服电机',
  },
  {
    value: 'BLM系列一体化无刷电机',
    label: 'BLM系列一体无刷电机',
  },
  {
    value: '运动组件',
    label: '运动组件',
  },
  {
    value: '运动控制器',
    label: '运动控制器',
  },
]

//2.结果对象
const tableData = ref([])
// const tableData = [
//   {
//     name: 'yitihua点击',
//     type: 'Tom',
//     size: '16MB',
//     url:'https://www.motorpowerco.com/media/1exfphlb/motion-control-product-10-2023-2.pdf',
//   }
// ]

//三、事件处理
//1.下拉1
const categoryselect = () => {
    // console.log(postdata.value.category)
    sendData.value.category = categoryvalue.value
    // console.log(sendData.value)
    postdata()

}
//2.下拉2
const productselect = () => {
    sendData.value.type = productvalue.value
    // console.log(sendData.value)
    postdata()
}
//3.搜索
const clicksearch = () => {
    sendData.value.keyword = searchinput.value
    // console.log(sendData.value)
    postdata()
}
//4.enter事件

//5.快捷条件点击
const clickselect = (value) => {
    sendData.value.category = value
    // console.log(value)
    postdata()
}

// 6.用户登录判断
const login = () => {
    if (userStore.userInfo.token) {
        console.log('用户已登录')
    } else {
        router.replace({path: '/login'})
        ElMessage({type: 'error', message: '请先登录'})        // 1.提示用户
    }
}

onMounted(() => {
    getdata()
    login()
})

</script>
<template> 
    <!-- 面包屑区域 -->
    <div class="nav-bread">
        <div class="container">
            <a href="">首页</a>
            <span> > </span>
            <a href="">下载中心</a>
        </div>
    </div>
    <!-- 条件1 -->
    <div class="download-panel">
        <div class="container">
            <div class="display-require">
                <h2>下载</h2>
                <!-- 2.表单 -->
                <div class="item-input" id="">
                    <ul>
                        <li class="input">
                            <span>类别</span>
                            <el-select
                                v-model="categoryvalue"
                                filterable
                                placeholder="全部"
                                
                                @change="categoryselect"

                            >
                                <!-- <el-option label="全部" value="" /> -->
                                <el-option
                                v-for="item in categoryoptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                />
                            </el-select> 
                        </li>
                        <li class="input">
                            <span>产品</span>
                            <el-select
                                v-model="productvalue"
                                filterable
                                placeholder="全部"
                                @change="productselect"

                            >
                                <el-option
                                v-for="item in productoptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                />
                            </el-select> 
                        </li>
                        <li class="search">
                            <el-input
                                v-model="searchinput"
                                class="search-input"
                                placeholder="请输入关键词"
                                :prefix-icon="Search"
                                />
                            <el-button type="primary" @click="clicksearch">搜索</el-button>
                        </li>
                    </ul>

                </div>
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
                <!-- <template :default="item">
                    
                </template> -->

                </div>
            </div>
        </div>
    </div>
    <!-- 结果 -->
    <div class="download-panel">
        <div class="container">
            <div class="display-result">
                <h3>结果</h3>
                <div class="item-result" id="">
                  <el-card style="max-width: 100%" shadow="never">
                    <el-table :data="tableData" style="width: 100%" height="auto" v-loading="loading" element-loading-text="Loading...">
                        <el-table-column fixed prop="name" label="标题" width="" />
                        <el-table-column prop="type" label="类型" width="" />
                        <el-table-column prop="size" label="大小" width="" />
                        <!-- <el-table-column prop="action" label="操作" width="" /> -->
                        <el-table-column label="操作" width="">
                            <template #default="scope">
                                <a :href="scope.row.url" target="_blank" class="btn-face" rel="noopener noreferrer">下载</a>
                                <!-- <RouterLink :to="scope.row.url">下载</RouterLink> -->
                                <!-- <el-button link type="primary" size="small" :src="scope.row.url">下载</el-button> -->
                                <!-- <el-button link type="primary" size="small">Edit</el-button> -->
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
                    // padding: 0 10px;
                    display: flex;
                    flex-direction: column;
                    margin-right: 20px;
                    // margin: 6px 0 0 0;
                    width: 22%;
                    // min-width: 300px;

                    span {
                        margin: 10px 0;
                        font-size: 15px;
                    }
                }
                .search {
                    display: flex;
                    // flex-wrap: wrap;
                    flex: 1;
                    justify-content: space-between;
                    // margin: 20px 0;
                    width: 40%;
                    // min-width: 400px;
                    .search-input {
                        margin-right: 20px;
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
            margin:30px 15px;
            width: 100%;
            max-width: 255px;
            height: 80px;
            border: 1px solid #003abd;
            border-radius: 10px;
            background-color: #fff;
            font-size: 20px;
            // text-align: center;
            // line-height: 26px;
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
                                        // margin:0 15px 0 40px;
                                        padding: 0 5px;
                                        width: 40px;
                                        // height: 26px;
                                        border: 1px solid #003abd;
                                        border-radius: 8px;
                                        // background-color: #003abd;
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