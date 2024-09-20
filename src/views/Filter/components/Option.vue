<script setup>

import { filterProductAPI } from "@/apis/product"
import { CircleClose } from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/el-message.css'
import { onMounted, ref } from "vue"


// 一、调用接口

// 1.产品列表数据
const Num = ref(0)                  // 总数
const getFilterProductList = ref([])                   // 结果对象
// 获取列表数据方法action
const getFilterProduct = async({series, Rated_voltage, bus, encoder, Brake, size}) => {
    const res = await filterProductAPI({series, Rated_voltage, bus, encoder, Brake, size})
    getFilterProductList.value = res.data
    Num.value = getFilterProductList.value.length
}

//一、准备条件对象
//1.条件
const categoryvalue = ref('')                               //类别下拉
const productoptionVoltage = ref('')                        //选项-电压
const productoptionBus = ref('')                            //选项-通信
const productoptionLoop = ref('')                           //选项-开闭环
const productoptionBrake = ref('')                          //选项-制动器
const productoptionFlange = ref('')                          //选项-法兰

// 1.1产品类别
const categoryoptions = [
    {
        value: '',
        label: 'All',
    },
    {
        value: 'integrated servo',
        label: 'Integrated servo motor',
    },
    {
        value: 'integrated brushless',
        label: 'Integrated brushless motor',
    },
    // {
    //     value: '步进伺服',
    //     label: '一体化步进伺服电机',
    // },
    {
        value: 'integrated stepper',
        label: 'Tntegrated stepper motor',
    },
]
// 1.2电压Voltage
const optionVoltage = [
    {
        value: '',
        label: 'All',
    },
    {
        value: '24',
        label: '24V',
    },
    {
        value: '48',
        label: '48V',
    },
]
// 1.3开闭环Loop
const optioLoop = [
    {
        value: '',
        label: 'All',
        },
    {
        value: 'Yes',
        label: 'Yes',
    },
    {
        value: 'No',
        label: 'No',
    },
]

// 1.4制动器Brake
const optionBrake = [
    {
        value: '',
        label: 'All',
        },
    {
        value: 'Yes',
        label: 'Yes',
    },
    {
        value: 'No',
        label: 'No',
    },
]
// 1.5通信
const optionBus = [
    {
        value: '',
        label: 'All',
    },
    {
        value: 'CANopen',
        label: 'CANopen',
    },
    {
        value: 'CAN',
        label: 'CAN Customization',
    },
    {
        value: 'EtherCAT',
        label: 'EtherCAT',
    },
    {
        value: 'RS485',
        label: 'RS485',
    },
    {
        value: 'pulse',
        label: 'Pulse',
    },
    {
        value: 'RS232',
        label: 'RS232',
    },
]
// 1.6法兰
const optionFlange = [
    {
        value: '',
        label: 'All',
        },
    {
        value: '28',
        label: '28mm',
    },
    {
        value: '35',
        label: '35mm',
    },
    {
        value: '42',
        label: '42mm',
    },
    {
        value: '57',
        label: '57mm',
    },
    {
        value: '86',
        label: '86mm',
    },
    {
        value: '40',
        label: '40mm(Servo)',
    },
    {
        value: '60',
        label: '60mm(Servo)',
    },
    {
        value: '80',
        label: '80mm(Servo)',
    },
]

//二、事件处理
//1.下拉 - 产品类别
const categoryselect = () => {
    sendData.value.series = categoryvalue.value
    postdata()
}
const handleClearCategory = () => {
    sendData.value.series = ""
    // categoryvalue.value = ""
    postdata()
}

//2.下拉 - 法兰
const Flangeselect = () => {
    sendData.value.size = productoptionFlange.value
    postdata()
}
const handleClearFlange = () => {
    sendData.value.size = ""
    // productoptionFlange.value = ""
    postdata()
}

//3.下拉 - 电压
const Voltageselect = () => {
    sendData.value.Rated_voltage = productoptionVoltage.value
    postdata()
}
const handleClearVoltage = () => {
    sendData.value.Rated_voltage = ""
    // productoptionVoltage.value = ""
    postdata()
}

//4.下拉 - 通信
const busselect = () => {
    sendData.value.bus = productoptionBus.value
    postdata()
}
const handleClearBus = () => {
    sendData.value.bus = ""
    // productoptionBus.value = ""
    postdata()
}

//5.下拉 - 闭环
const encoderselect = () => {
    sendData.value.encoder = productoptionLoop.value
    postdata()
}
const handleClearEncoder = () => {
    sendData.value.encoder = ""
    // productoptionLoop.value = ""
    postdata()
}

//6.下拉 - 刹车
const Brakeselect = () => {
    sendData.value.Brake = productoptionBrake.value
    postdata()
}
const handleClearBrake = () => {
    sendData.value.Brake = ""
    // productoptionBrake.value = ""
    postdata()
}

// 7.重置resetForm
const resetForm = () => {
    getFilterProduct(ruleFormRef.value)
    categoryvalue.value = ""
    productoptionFlange.value = ""
    productoptionVoltage.value = ""
    productoptionBus.value = ""
    productoptionLoop.value = ""
    productoptionBrake.value = ""
    // postdata()
}

// 三.结果对象
//1.准备表单对象series, Rated_voltage, bus, encoder, Brake
const sendData = ref({
    series: "",
    Rated_voltage: "",
    bus: "",
    encoder: "",
    Brake: "",
    size: ""
})
//2.重置
const ruleFormRef = ref({
    series: "",
    Rated_voltage: "",
    bus: "",
    encoder: "",
    Brake: "",
    size: ""
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

//2.执行post请求 
const postdata = async() => {
    // loading.value = true    // 请求超时处理
    getFilterProduct(sendData.value)

    
}


onMounted(() => {

    postdata()
})

</script>
<template> 

    <!-- 条件 -->
    <div class="option-panel">
        <div class="container">
            <div class="display-require">
                <div class="title">
                    <h2>Product Selection</h2>
                    <div class="reset">
                        <el-button color="#626aef" :dark="isDark" @click="resetForm">
                            Reset
                            <el-icon class="el-icon--right"><CircleClose /></el-icon>
                        </el-button>
                    </div>
                </div>
                
                <!-- 2.表单filterable -->
                <div class="item-input" id="">
                    <div class="category">
                        <div class="input">
                            <span>Product Categories</span>
                            <el-select
                            v-model="categoryvalue"
                            :empty-values="[null, undefined]"
                            :value-on-clear="null"
                            clearable
                            placeholder="category"
                            class="inp"
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
                        </div>
                    </div>
                    <ul class="option">
                        <li class="input">
                            <span>Flange size</span>
                            <el-select
                                v-model="productoptionFlange"
                                :empty-values="[null, undefined]"
                                :value-on-clear="null"
                                clearable
                                placeholder="All"
                                @clear="handleClearFlange"
                                @change="Flangeselect"
                            >
                                <el-option
                                v-for="item in optionFlange"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                />
                            </el-select> 
                        </li>
                        <li class="input">
                            <span>Rated voltage</span>
                            <el-select
                                v-model="productoptionVoltage"
                                :empty-values="[null, undefined]"
                                :value-on-clear="null"
                                clearable
                                placeholder="All"
                                @clear="handleClearVoltage"
                                @change="Voltageselect"
                            >
                                <el-option
                                v-for="item in optionVoltage"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                />
                            </el-select> 
                        </li>
                        <li class="input">
                            <span>Bus</span>
                            <el-select
                                v-model="productoptionBus"
                                :empty-values="[null, undefined]"
                                :value-on-clear="null"
                                clearable
                                placeholder="All"
                                @clear="handleClearBus"
                                @change="busselect"
                            >
                                <el-option
                                v-for="item in optionBus"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                />
                            </el-select> 
                        </li>
                        <li class="input">
                            <span>Brake (holding brake)</span>
                            <el-select
                                v-model="productoptionBrake"
                                :empty-values="[null, undefined]"
                                :value-on-clear="null"
                                clearable
                                placeholder="All"
                                @clear="handleClearBrake"
                                @change="Brakeselect"
                            >
                                <el-option
                                v-for="item in optionBrake"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                />
                            </el-select> 
                        </li>
                        <li class="input">
                            <span>Integrated encoder</span>
                            <el-select
                                v-model="productoptionLoop"
                                :empty-values="[null, undefined]"
                                :value-on-clear="null"
                                clearable
                                placeholder="All"
                                @clear="handleClearEncoder"
                                @change="encoderselect"
                            >
                                <el-option
                                v-for="item in optioLoop"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                />
                            </el-select> 
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- 2.型号说明 -->
    <div class="explain-panel">
        <div class="container">
            <div class="illustrate">
                <p>*Model description: STM*A/B (closed loop); STM-M (step servo series); STMP/PMMP (waterproof series); PSM*D (multi-turn encoder); -B (brake type), -S (with STO function), -LP (aviation plug interface)</p>
            </div>
        </div>
    </div>
    <!-- 结果 -->
    <div class="result-panel">
        <div class="container">
            <div class="display-result">
                
                <h3> <span>{{ Num }}</span> results</h3>
                <div class="item-result" id="">
                  <el-card style="max-width: 100%" shadow="never">
                    <el-table :data="getFilterProductList" style="width: 100%" height="600"  >
                        <el-table-column fixed prop="number" label="Model" width="" />
                        <el-table-column prop="bus" label="Bus" width="260" />
                        <el-table-column prop="Rated_voltage" label="Rated voltage(V)" width="" />
                        <el-table-column prop="Rated_speed" label="Rated speed(rpm)" width="" />
                        <el-table-column prop="Rated_power" label="Rated power(W)" width="" />
                        <el-table-column prop="Hold_torque" label="Holding torque(N·m)" width="" />
                        <el-table-column prop="torque" label="Rated torque(N·m)" width="" />

                        <el-table-column prop="encoder" label="Encoder" width="" />
                        <el-table-column prop="Brake" label="Brakes" width="" />

                        <el-table-column label="More" width="" fixed="right">
                            <template #default="scope">

                                <RouterLink :to="`/product/${scope.row.category[0]?.router}/detail/${scope.row.category[0]?.id}`" target="_blank" class="btn-face">

                                    <span class="iconfont icon-you" ></span>
                                </RouterLink>
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
// 1.条件
.option-panel {
    padding: 20px 0;
    // margin: 0 10px;
    background-color: #fff;
    width: 100vw;   //100视窗宽度

    //条件
    .display-require {
        margin: 0 10px;
        padding: 30px 40px 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // align-items: center;
        width: 100%;
        background-color: #e9ebec;
        .title {
            display: flex;
            justify-content: space-between;
                h2 {
                font-size: 22px;
                color: #003abd;
            }
        }

        //2.表单
        .item-input {
            padding: 10px 0px;
            .category {
                margin-top: 10px;
                margin-bottom: 30px;
                .input {
                    display: flex;
                    flex-direction: column;
                    margin-right: 20px;
                    width: 31%;
                    height: 36px;
                    span {
                        margin: 10px 0;
                        font-size: 15px;
                    }
                    .inp {
                        // background-color: #003abd;
                        cursor: pointer;
                    }
                }
            }

            ul {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                // align-items: end;
                margin-top: 50px;
                width: 100%;

                .input {
                    // padding: 0 10px;
                    display: flex;
                    flex-direction: column;
                    margin-right: 20px;
                    margin-top: 10px;
                    width: 31%;
                    // cursor: pointer;
                    // min-width: 300px;

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

// 2.型号说明
.explain-panel {
    padding: 20px 0;
    background-color: #fff;
    width: 100vw;   //100视窗宽度
    .illustrate {
        padding: 0 10px;
    }
}

// 3.结果
.result-panel {
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
                                        display: flex;
                                        justify-content: center;
                                        align-items: center;
                                        padding: 3px 4px;
                                        // width: 30px;
                                        // height: 26px;
                                        border: 1px solid #003abd;
                                        border-radius: 4px;
                                        font-size: 12px;
                                        font-weight: 500;
                                        color: #003abd;
                                        // text-align: center;
                                        // line-height: 26px;
                                        .el-icon--right {
                                            // display: flex;
                                            justify-content: center;
                                            align-items: center;
                                            // font-weight: 800;
                                        }
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


@media (max-width: 1200px) {


}

@media (max-width: 960px) {
// 条件
.option-panel {
    .display-require {
        //2.表单
        .item-input {
            .category {
                .input {
                    width: 28%;
                }
            }
            ul {
                justify-content: space-between;
                .input {
                    width: 28%;
                }
            }

            // 3.1 重新定义el卡片

        }
    }

}

}

@media (max-width: 768px) {
// 条件
.option-panel {

.display-require {

    //2.表单
    .item-input {

        .category {

            .input {
                width: 45%;
            }
        }

        ul {
            justify-content: space-between;

            .input {
                width: 45%;

            }
        }

    }
}

}
}

@media (max-width: 485px) {
// 条件
.option-panel {

.display-require {
    // margin: 0 10px;
    padding: 30px 40px 30px 20px;
    //2.表单
    .item-input {
        .category {
            .input {
                width: 100%;
            }
        }

        ul {
            margin-top: 40px;
            .input {
                margin-right: 0px;
                width: 100%;

            }
        }

        // 3.1 重新定义el卡片

    }
}

}
}

</style>