<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { solutionAPI } from "@/apis/home"
import { onMounted, ref } from "vue"
import { useTransition } from '@vueuse/core'

//获取数据


//切换标签customValue
const source = ref(0)
const custom = ref(0)
const project = ref(0)
const outputValue = useTransition(source, {
  duration: 800,
})
const customValue = useTransition(custom, {
  duration: 800,
})
const proValue = useTransition(project, {
  duration: 800,
})
source.value = 27
custom.value = 2000
project.value = 5000


</script>

<template>
  <!-- 2.实力展示 -->
  <div class="support-power">
    <h2>Customer Service</h2>
    <div class="power-container">
      <div class="power-box">
        <div class="h2">
          <el-statistic :value="outputValue" />
        </div>
        <div class="info-power">
          <h4>Sales in countries</h4>
        </div>
      </div>
      <div class="power-box">
        <div class="h2">
          <el-statistic :value="customValue" />
        </div>
        <div class="info-power">
          <h4>+Core customers</h4>
        </div>
      </div>
      <div class="power-box">
        <div class="h2">
          <el-statistic :value="proValue" />
        </div>
        <div class="info-power">
          <h4>+Collaborative Projects</h4>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang='scss'>
//2.实力展示
.support-power {
  h2 {
  font-size: 35px;
  text-transform: uppercase;
  color: #000;
  line-height: 40px;
  margin: 0 0 28px 0;
  }
  margin: 80px 0 0px 0;
  .power-container {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    margin-bottom: 20px;

    .power-box {
      display: flex;

      .h2 {
        ::v-deep(.el-statistic) {
          span {
            // font-size: 2rem;
            font-size: 80px;
            color: #003abd;
          }
        }
      }

      .info-power {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 10px;

        h4 {
          font-size: 20px;
          // font-size: .5rem;
          color: #003abd;
        }
      }
    }
  }
}

//
@media (max-width: 1024px) {}

@media (max-width: 960px) {}

@media (max-width: 768px) {

  //2.实力展示
  .support-power {
    .power-container {
      .power-box {
        .h2 {
          ::v-deep(.el-statistic) {
            span {
              font-size: 2rem;
            }
          }
        }

        .info-power {
          margin-left: 10px;

          h4 {
            font-size: .5rem;
          }
        }
      }
    }
  }
}
</style>