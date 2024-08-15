<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'
import { solutionAPI } from "@/apis/home"
import { onMounted, ref } from "vue"
import { useTransition } from '@vueuse/core'

//获取数据
const tableData = [
  {
    date: '2023-04',
    content: '荣获北京“专精特新”企业认证',
  },
  {
    date: '2023-03',
    content: 'SCARA机器人上市发布',
  },
  {
    date: '2022-06',
    content: 'DELTA机器人上市发布',
  },
  {
    date: '2021',
    content: '立迈胜深圳办事处正式成立',
  },
  {
    date: '2020-01',
    content: '获得“知识产权试点单位”称号',
  },
  {
    date: '2019',
    content: '电机矩阵系统上市发布',
  },
  {
    date: '2018-05',
    content: '获得中关村高新技术企业认证',
  },
  {
    date: '2018',
    content: '国内首创EtherCAT通信一体化伺服电机',
  },
  {
    date: '2017-12',
    content: '立迈胜南京分公司正式成立',
  },
  {
    date: '2017-08',
    content: '获得“NiMotion” 注册商标',
  },
  {
    date: '2017',
    content: '立迈胜登录北京新四板市场',
  },
  {
    date: '2017-07',
    content: '获得国家高新技术企业认定',
  },
  {
    date: '2015-11',
    content: '立迈胜公司注册成立',
  },
]
const id = ref(0)
const dis = ref(false)
const handleEdit = (index) => {
  id.value = index
}

</script>

<template>

  <div class="item-process" id="item-delop">

    <h2>发展历程</h2>
    <div class="process">
        <div class="timebox">
          <el-scrollbar height="300px">
            <!-- <div class="time"><i class="line"></i><span>2023</span></div> -->

            <el-timeline>
              <el-timeline-item v-for="(activity, index) in tableData" :key="index" >
                <div class="info-box" >
                  <span class="time">{{ activity.date }}</span>
                  <span class="info">{{ activity.content }}</span>
                </div>
              </el-timeline-item>
            </el-timeline>

          </el-scrollbar>

        </div>

      </div>
  </div>

</template>

<style scoped lang='scss'>
//1.发展历程
.item-process {
  margin: 80px 0;
  padding: 50px 0 50px 15px;
  background: rgba($color: #000, $alpha: 0.5);
  background: #b3b3b3 url(https://www.nimotion.cn/static/images/compony/process.webp) no-repeat bottom;
  
  h2 {
    font-size: 33px;
    color: #000;
    line-height: 40px;
    margin: 0 0 28px 0;
  }

  //
  ::v-deep(.el-timeline) {
      margin: 10px 0;
      padding: 20px 10px;
      .el-timeline-item {
        padding-bottom: 40px;
        .el-timeline-item__tail {
          border-left: 2px solid #003abd;
        }
        .el-timeline-item__node {
          background-color: #003abd;
        }
        .el-timeline-item__wrapper {
          .el-timeline-item__content {
            cursor: pointer;
            font-size: 16px;
          }
        }
      }
      .el-timeline-item:focus {
        color: #003abd;
        .el-timeline-item__content {
            color: #003abd;
            font-size: 16px;
          }
      }
    }

  // 3.2 自定义内容样式
  .process {
    display: flex;
    position: relative;
    padding: 0 50px;
    height: 100%;
    $picbox-width: 20vw;

    .timebox {
      padding: 10px 10px;
      width: 100%;
      max-height: 240px;
      overflow: hidden;

      // 3.2.3 信息box
      .info-box {
        flex: 1;
        display: flex;
        margin: 0 0 0 10px;
        .time {
          width: 80px;
        }
        .info {
          margin-left: 25px;
        }


      }

    }


  }
}

@media (max-width: 1024px) {}

@media (max-width: 960px) {}

@media (max-width: 768px) {

  //1.发展历程
  .item-us {

    // 3.2 自定义内容样式
    .News-item {
      flex-direction: column;
      // 3.2 图片box
      $picbox-width: 100%;

      .picbox {
        padding: 10px 0;
        max-width: $picbox-width;
        overflow: hidden;

        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}
</style>