<script setup>
// import { TabsPaneContext } from 'element-plus'
// import { Calendar } from '@element-plus/icons-vue'


</script>

<template>
    <!-- banner区域 -->

    <div class="banner-pro">
        <!-- <div class="">
            <img src="https://www.nimotion.cn/static/images/banner/banner_filter.webp" alt="">
        </div> -->
        <div class="input">
          <div class="button">
            <!-- <a href="https://www.nimotion.cn/product/filter" target="_blank" rel="noopener noreferrer">Quick product selection</a> -->
            <RouterLink to="/product/filter" target="_blank">Quick Product Selection</RouterLink>
            <!-- <a href="http://" target="_blank" rel="noopener noreferrer"></a> -->
            <span class="des">You can quickly find the products you want according to your needs: you can filter by flange size, rated voltage, communication method, etc.</span>
          </div>
          <!-- <span class="des">可根据需求快速找到您想要的产品：可筛选如法兰尺寸、额定电压、通信方式等</span> -->
        </div>
    </div>    

</template>

<style scoped lang='scss'>
// banner
.banner-pro {
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 260px;
  background-image: url(https://www.nimotion.cn/static/images/banner/banner_filter.webp);
  background-position: top center;
  background-size: 100%;
  background-repeat: no-repeat;
  .input {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: #fff;
    .button {
      position: absolute;
      padding: 0 18px;
      width: 100%;
      // max-width: 900px;
      // height: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      a {
        display: block;
        margin-bottom: 20px;
        padding: 10px 20px;
        width: 280px;
        height: 100%;
        border-radius: 20px;
        font-size: 18px;
        color: #060942;
        text-align: center;
        background-color: #fff;
        &:hover {
            background-color: #409eff;
            color: #fff;
        }
      }
      
    }
    .des {
      // position: absolute;
      font-size: 14px;
    }
  }
}


@media (max-width: 1400px) {
  .banner-pro {
    height: 200px;
  }

}

@media (max-width: 1200px) {
  .banner-pro {
    height: 180px;
    .input {

      .button {
        a {
          padding: 8px 20px;
          // border-radius: 20px;
          font-size: 16px;

        }
      }
    }
  }

}

@media (max-width: 960px) {
  .banner-pro {
    height: 150px;
  }

}

@media (max-width: 768px) {
  .banner-pro {
    height: 120px;
    .input {
      .button {
        a {
          margin-bottom: 10px;
          padding: 8px 10px;
          border-radius: 20px;
          font-size: 15px;

          }
        }
      }
  }
}


@media (max-width: 640px) {
  .banner-pro {
    height: 100px;
    .input {
      .button {
        a {
          margin-bottom: 10px;
          padding: 5px 5px;
          border-radius: 10px;
          font-size: 14px;
          width: 140px;
          }
        }
        .des {
          display: none;
        }
      }
  }
}

</style>