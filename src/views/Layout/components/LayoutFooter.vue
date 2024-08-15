<!-- 底部 -->
<script setup>
import { useCategoryStore } from '@/stores/catagory'

// 一、调用数据
//使用pinia中的数据
const categoryStore = useCategoryStore()

const icon = [
  {
    "value": "淘宝", 
    "imgsrc": "http://www.nimotion.cn/static/images/icon/icon_tao.webp",        // /src/assets/images/icon_tao.png
    "href": "https://nimotion-bj.taobao.com/search.htm?spm=a1z10.1-c-s.w5002-17849657215.1.5f9e26e2RqX4a8&search=y"
  },
  {
    "value": "1688", 
    "imgsrc": "http://www.nimotion.cn/static/images/icon/icon_a1.webp", 
    "href": "https://nimotion.1688.com/"
  },
  {
    "value": "Alibaba", 
    "imgsrc": "http://www.nimotion.cn/static/images/icon/icon_a2.webp", 
    "href": "https://nimotion.en.alibaba.com/?spm=a2700.icbuShop.0.0.2732773a6KCGWa"
  },
  {
    "value": "爱采购", 
    "imgsrc": "http://www.nimotion.cn/static/images/icon/icon_cai.webp", 
    "href": "https://b2b.baidu.com/shop?name=%E5%8C%97%E4%BA%AC%E7%AB%8B%E8%BF%88%E8%83%9C%E6%8E%A7%E5%88%B6%E6%8A%80%E6%9C%AF%E6%9C%89%E9%99%90%E8%B4%A3%E4%BB%BB%E5%85%AC%E5%8F%B8&xzhid=30577829&tpath=index&fid=67174400%2C1686911569688&pi=b2b.land....2102203120202990"
  },
  {
    "value": "B站", 
    "imgsrc": "http://www.nimotion.cn/static/images/icon/icon_bilibili.webp", 
    "href": "https://space.bilibili.com/2090164166"
  },
  {
    "value": "抖音", 
    "imgsrc": "http://www.nimotion.cn/static/images/icon/icon_douyin.webp", 
    "href": "https://www.douyin.com/user/MS4wLjABAAAAA9w4NrH07Bba-z_sIBmLpXPXsGj8MQFvhQD0PTHgZ_R3JLcyEmvPbRJHdYGTEsmX"
  },
  {
    "value": "知乎", 
    "imgsrc": "http://www.nimotion.cn/static/images/icon/icon_zhihu.webp", 
    "href": "https://www.zhihu.com/org/nimotion"
  },
  {
    "value": "CSDN", 
    "imgsrc": "http://www.nimotion.cn/static/images/icon/icon_csdn.webp", 
    "href": "https://blog.csdn.net/m0_46512607"
  },
]



</script>

<template>
    <footer class="app_footer">
      <div class="container">
        <div class="contact">
          <div class="footer-nav-one">
            <!-- 联系方式 -->
            <div class="service">
                <ul>
                  <li class="logo-image"><img src="../../../assets/images/横版白色透明-logo.png" alt=""></li>
                  <li class="tel">
                    <a href="">
                      <span class="iconfont icon-dianhua" style="margin-right: 4px;"></span><h4>服务热线</h4>
                    </a>
                    <h3>010-60213882</h3>
                  </li>
                  <li class="info">
                    <ul>
                      <li><h5>北京立迈胜控制技术有限责任公司</h5><p>Beijing NiMotion Control Technology Co.,Ltd.</p></li>
                      <li><h5>手 机：15652093730</h5></li>
                      <li><h5>邮 箱：nimotion@nimotion.com</h5></li>
                      <li><h5>网 址：www.nimotion.cn</h5></li>
                    </ul>
                  </li>
                </ul>
            </div>
            <!-- 导航区 -->
            <div class="navfooter">
              <dl v-for="item in categoryStore.getOneCategoryList" :key="item.id" >
                <dt >
                  <!-- <a href="http://" target="_blank" rel="noopener noreferrer">{{ item.name }}</a> -->
                  <RouterLink target="_blank" :to="`/${item.router}`">{{ item.name }}</RouterLink>
                </dt>
                <dd v-for="i in item.category" :key="i.id" v-if="item.name === '产品中心'">
                  <!-- <a href="#">{{ i.name }}</a> -->
                  <RouterLink  target="_blank" :to="`/${i.router}/${i.id}`"><span>{{ i.name }}</span></RouterLink>
                </dd>
                <dd v-for="i in item.category" v-else-if="item.name === '解决方案'">
                  <!-- <a href="#">{{ i.name }}</a> -->
                  <RouterLink target="_blank" :to="`/${i.router}/${i.id}`"><span>{{ i.name }}</span></RouterLink>
                </dd>
                <dd v-for="i in item.category" v-else>
                  <!-- <a href="#">{{ i.name }}</a> -->
                  <RouterLink target="_blank" :to="`/${i.router}`"><span>{{ i.name }}</span></RouterLink>
                </dd>
              </dl>
            </div>
          </div>

          <div class="footer-nav-two">
            <div class="QRcode">
              <ul>
                <li>
                  <div class="pic"><img src="../../../assets/images/img_wei.jpg" alt=""></div>
                  <p>微信公众号</p>
                </li>
                <li>
                  <div class="pic"><img src="../../../assets/images/img_video.jpg" alt=""></div>
                  <p>视频号</p>
                </li>
              </ul>
            </div>
            <div class="link">
              <ul class="fr-link">
                <li><span>友情链接: </span></li>
                
                <li><a href="http://www.nimotion.net/" target="_blank">南京立迈胜</a></li>
              </ul>
              <ul>
                <li><span>地 址: 北京市大兴区金星西路12号院3号楼</span></li>
              </ul>
              <!-- <li><span>地 址: 北京市大兴区金星西路12号院3号楼</span></li> -->
              <ul class="icon-link">
                <li v-for="item in icon" :key="item.id">
                  <!-- <RouterLink :to="item.href" target="_blank" rel="noopener noreferrer" >
                    <img :src="item.imgsrc" alt="">
                  </RouterLink> -->
                  <a :href="item.href" target="_blank" rel="noopener noreferrer"><img v-img-lazy="item.imgsrc" alt=""></a>
                </li>
              </ul>
            </div>
          </div>

          <!-- 版权 -->
          <div class="footer-nav-three">
            <div class="copyright">
              <p>CopyRight © 2024 NiMition立迈胜 版权所有</p>
              <a href="https://beian.mps.gov.cn/#/query/webSearch?code=32011602010374" rel="noreferrer" target="_blank"><img src="@/assets/images/icon_beian.png" alt="">京ICP备17039911号</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
</template>
<style scoped lang='scss'>
  .app_footer {
    // width: 100vw;
    width: 100%;
    overflow: hidden;
    background-color: #1d1d1d;
    padding-top: 20px;

    .contact {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      padding: 20px 40px;
      // border-bottom: 1px solid rgba(255,255,255,.45);
      // 01.
      .footer-nav-one {
        display: flex;
        justify-content: space-between;
        align-items: start;
        padding-bottom: 40px;
        // margin-bottom: 20px;
        border-bottom: 1px solid rgba(255,255,255,.45);
      }
      .service{
        flex:0 0 25%;
        color:#fff;
        ul{
          display: flex;
          flex-direction: column;
          li {
            margin-bottom: 10px;
            &:last-child {
              margin-bottom: 0;
            }
          }
          .logo-image {
            width: 150px;
            margin-bottom: 10px;
            img{
              width: 100%;
            }
          }
          .tel {
            padding-bottom: 10px;
            margin-bottom: 10px;
            a {
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 15px;
              text-align: center;
              padding: 4px 0;
              width: 132px;
              // height: 30px;
              color: #e7e7e7;
              border-radius: 6px;
              background-color: #0034ae;
              
              h4{
                font-size: 15px;
                line-height: 30px;                        
              }
              &:hover {
                color: #fff;
                background-color: #003abd;
              }
            }
            h3 {
              margin-top: 10px;
              font-size: 26px;
              font-weight: 800;
            }
          }
          .info{
            ul{
              li{
                padding: 4px 0;
                // margin: 5px 0;
                h5{
                  display: block;
                  font-size: 14px;
                }
                p{
                  margin-top: 4px;
                  font-size: 12px;
                  // margin-bottom: 5px;
                }
              }
            }
          }
        }
      }
      .navfooter{
        display: flex;
        flex:1;
        padding-top: 20px;
        margin-left: 20px;
        color: #fff;
        dl{
          display: flex;
          flex-direction: column;
          flex:1;
          margin: 0 10px;
          overflow: hidden;
          dt{
            margin-bottom: 20px;
            a {
              font-size: 16px;
              font-weight: 500;
              color: #efefef;
            }
            &:hover {
              color: #fff;
            }
          }
          dd{
            margin-bottom: 2px;
            padding: 2px 0;
            font-size: 14px;
            font-weight: 400;
            a{
              color: rgba(232, 232, 232, 0.811);
            }
            &:hover {
              color: #efefef;
            }
          }
        }
      }
      // 02.链接 外部
      .footer-nav-two {
        padding: 40px 0;
        display: flex;
        align-items: end;
        .QRcode{
          flex:0 0 25%;
          ul{
            display: flex;
            justify-content:left;
            li:first-child {
              margin-right: 16px;
            }
            .pic{
              width: 90px;
              height: 90px;
              margin-bottom: 4px;
            }
            p{
              font-size: 12px;
              text-align: center;
              color: rgba(255,255,255,.75);
            }
          }
        }
        // 友链+图标
        .link{
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          padding-left: 20px;
          font-size: 13px;
          color: rgba(255,255,255,.75);
          ul {
            padding: 5px 0;
          }
          .fr-link{
            display: flex;
            color: rgba(255,255,255,.75);
            font-size: 13px;
            li{
              margin-right: 4px;
            }
            a{
             color: rgba(255,255,255,.75);
            }
            a:hover{
              color: #fff;
            }
            // flex-direction: column;
          }
          .icon-link{ //图标
            display: flex;
            margin-top: 10px;
            li{
              margin-right: 4px;
              img {
                width: 30px;
              }
            }
          }
        }
      }
      // 03.版权信息
      .footer-nav-three {
        .copyright {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px 0;
          text-align: center;
          font-size: 14px;
          color: #999;
          p {
            line-height: 1;
            // margin-bottom: 10px;
          }
          a {
            display: flex;
            justify-content: center;
            align-items: center;
            color: #999;
            line-height: 1;
            padding: 0 10px;
            border-right: 1px solid #999;
            img {
              width: 18px;
              margin-right: 5px;
            }
      
            &:last-child {
              border-right: none;
            }
            &:hover {
              color: #b4b4b4;
            }
          }
        }
      }

    }
  }

@media (max-width: 1024px) {
  .app_footer {
    .contact {
      .footer-nav-one {
        .service{
          display: none;
        }
      }
    }
  }
}

@media (max-width: 960px) {

}

@media (max-width: 768px) {
  .app_footer {
    padding-top: 0px;

    .contact {
      // 01.
      .footer-nav-one {
        display: none;
      }
      // 02.链接 外部
      .footer-nav-two {
        display: none;
      }
      // 03.版权信息
      .footer-nav-three {
        .copyright {
          a {
            display: none;
          }
        }
      }
    }
  }
}
  </style>