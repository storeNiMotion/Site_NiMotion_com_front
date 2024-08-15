// createRouter：创建router实例对象
// createWebHistory：创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'


import Log from '@/views/Log/index.vue'
import Login from '@/views/Login/index.vue'
import Resigter from '@/views/Resigter/index.vue'
import Forget from '@/views/Login/components/forget.vue'

import Layout from '@/views/Layout/index.vue'

import Home from '@/views/Home/index.vue'
import error from '@/views/404.vue'
import Search from '@/views/Search/index.vue'                                                     // 全局搜索

import Products from '@/views/Products/Category/index.vue'                                        // 产品
import ProductSearch from '@/views/Products/Search/index.vue'                                     // 产品搜索
import ProductChannel from '@/views/Products/List/index.vue'                                      // 产品列表
import ProductsList from '@/views/Products/Category/ProductsList.vue'                             // 产品分类列表

// import ProductsDetail from '@/views/Products/ProductsDetail.vue'
import ControllerDetail from '@/views/Products/Content/Controller/ControllerDetail.vue'           // 控制器详情页
import StepperDetail from '@/views/Products/Content/Stepper/StepperDetail.vue'                    // 步进电机详情页
import DriverDetail from '@/views/Products/Content/Driver/DriverDetail.vue'                       // 驱动器详情页
import ScrewDetail from '@/views/Products/Content/Screw/ScrewDetail.vue'                          // 丝杆电机详情页
import ServoDetail from '@/views/Products/Content/Servo/ServoDetail.vue'                          // 伺服电机详情页
import BrushlessDetail from '@/views/Products/Content/Brushless/BrushlessDetail.vue'              // 无刷电机详情页
import TransmissionDetail from '@/views/Products/Content/Transmission/TransmissionDetail.vue'     // 传动组件详情页
import SoftwareDetail from '@/views/Products/Content/Soft/SoftwareDetail.vue'                     // 工业软件详情页
import RobotDetail from '@/views/Products/Content/Robot/RobotDetail.vue'                          // 机器人详情页
import IODetail from '@/views/Products/Content/IO/IODetail.vue'                                   // IO模块详情页
import ConverterDetail from '@/views/Products/Content/Converter/ConverterDetail.vue'              // 转换器详情页
import CablesDetail from '@/views/Products/Content/Cable/CablesDetail.vue'                        // 线缆详情页
import SolutionsDetail from '@/views/Products/Content/Solutions/SolutionsDetail.vue'              // 定制方案详情页


// import Productsfilter from '@/views/Filter/index.vue'

import SolutionChannel from '@/views/Solution/Category/SolutionChannel.vue'                       // 方案 SolutionSearch
import SolutionList from '@/views/Solution/List/SolutionList.vue'
import SolutionDetail from '@/views/Solution/Content/SolutionDetail.vue'
import SolutionSearch from '@/views/Solution/Search/index.vue'                                    // 方案 搜索


import TechChannel from '@/views/Support/Category/index.vue'                                      // 技术支持
import ProblemList from '@/views/Support/Problems/List/index.vue'                                 // 技术支持问答列表
import ProblemSearch from '@/views/Support/Problems/Search/index.vue'                             // 技术支持问答搜索
import ProblemDetail from '@/views/Support/Problems/Content/index.vue'                            // 技术支持问答详情页
import VideoChannel from '@/views/Support/Videos/Category/index.vue'                              // 技术支持视频频道
import VideoList from '@/views/Support/Videos/List/index.vue'                                     // 技术支持视频列表
import VideoSearch from '@/views/Support/Videos/Search/index.vue'                                     // 技术支持视频搜索
import VideoDetail from '@/views/Support/Videos/Content/indexPush.vue'                                // 技术支持视频详情页
import VideoDetailList from '@/views/Support/Videos/Content/index.vue'                                // 技术支持视频详情页
import AftersalesDetail from '@/views/Support/Aftersales/index.vue'                               // 技术支持售后详情页
import PactDetail from '@/views/Support/Pact/index.vue'                                           // 技术支持合同详情页
import CooperateDetail from '@/views/Support/Cooperate/index.vue'                                 // 技术支持合作详情页

import Download from '@/views/Download/DownChannel.vue'                                           // 下载中心

import NewsList from '@/views/News/List/index.vue'                                                // 新闻
import NewsDetail from '@/views/News/Content/index.vue'

import Contact from '@/views/About/ContactView.vue'
import About from '@/views/About/Introduce/AboutView.vue'                                         // 关于我们
import Culture from '@/views/About/Culture/index.vue'                                             // 关于我们-文化
import Honor from '@/views/About/Honor/index.vue'                                                 // 关于我们-荣誉
import Style from '@/views/About/Style/index.vue'                                                 // 关于我们-风采
import Factory from '@/views/About/Factory/index.vue'                                             // 关于我们-厂房

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
    {
      path: '/',
      name: '',
      component: Layout,
      meta: { title: '' },
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: '/product/search/:key',                           // 产品搜索
          component: ProductSearch
        },
        {
          path: '/search/:key',                                   // 全局搜索
          component: Search
        },
        {
          meta: { title: 'Product' },
          path: '/product',                                       // 产品中心ProductsList
          component: Products
        },
        {
          meta: { title: 'Product Category List' },
          path: '/product/:id',                                   // 产品分类列表
          component: ProductsList
        },
        {
          meta: { title: 'Product List' },
          path: '/product/list/:id',
          component: ProductChannel
        },
        //产品内容页
        // {
        //   path: '/product/detail/:id',
        //   component: ProductsDetail
        // },
        {
          meta: { title: 'Smart Controller Details' },
          path: '/product/controller/detail/:id',                 // 控制器详情页
          component: ControllerDetail
        },
        {
          meta: { title: 'Integrated stepper motor details' },
          path: '/product/stepper/detail/:id',                    // 步进电机详情页
          component: StepperDetail
        },
        {
          meta: { title: 'Bus Driver Details' },
          path: '/product/driver/detail/:id',                    // 驱动器详情页
          component: DriverDetail
        },
        {
          meta: { title: 'Integrated lead screw motor details' },
          path: '/product/screw/detail/:id',                      // 丝杆电机详情页
          component: ScrewDetail
        },
        {
          meta: { title: 'Integrated servo motor details' },
          path: '/product/servo/detail/:id',                     // 伺服电机详情页
          component: ServoDetail
        },
        {
          meta: { title: 'Integrated brushless motor details' },
          path: '/product/brushless/detail/:id',                 // 无刷电机详情页
          component: BrushlessDetail
        },
        {
          meta: { title: 'Sports module details' },
          path: '/product/transmission/detail/:id',              // 传动组件详情页
          component: TransmissionDetail
        },
        {
          meta: { title: 'Industrial Software Details' },
          path: '/product/software/detail/:id',                  // 工业软件详情页
          component: SoftwareDetail
        },
        {
          meta: { title: 'Robot Details' },
          path: '/product/robot/detail/:id',                     // 机器人详情页
          component: RobotDetail
        },
        {
          meta: { title: 'IO module details' },
          path: '/product/IO/detail/:id',                        // IO模块详情页
          component: IODetail
        },
        {
          meta: { title: 'Converter Details' },
          path: '/product/converter/detail/:id',                 // 转换器详情页
          component: ConverterDetail
        },
        {
          meta: { title: 'Cable Details' },
          path: '/product/cables/detail/:id',                    // 线缆详情页
          component: CablesDetail
        },
        {
          meta: { title: 'Product customization solutions' },
          path: '/product/solutions/detail/:id',                 // 定制方案详情页
          component: SolutionsDetail
        },
        // {
        //   path: '/product/filter',                            // 产品选型
        //   component: Productsfilter
        // },
        {
          //path: '/solution',  // 解决方案
          meta: { title: '解决方案分类' },
          path: '/solution',                                     // 解决方案https://www.nimotion.com/list/127.html
          component: SolutionChannel
        },
        {
          path: '/solution/:id',
          meta: { title: '解决方案列表' },
          component: SolutionList
        },
        {
          meta: { title: '解决方案详情' },
          path: '/solution/detail/:id',
          component: SolutionDetail
        },
        {
          meta: { title: '解决方案搜索结果' },
          path: '/solution/search/:key',                          // 解决方案搜索
          component: SolutionSearch
        },
        {
          //path: '/support',  //技术支持
          meta: { title: '服务支持' },
          path: '/support',                                       // 技术支持
          component: TechChannel
        },
        // {
        //   path: '/problems/:id',                               // 技术支持问答列表
        //   component: ProblemList
        // },
        {
          meta: { title: '技术知识' },
          path: '/problems',                                      // 技术支持问答列表
          component: ProblemList
        },
        {
          meta: { title: '技术知识搜索' },
          path: '/problems/search/:key',                          // 技术支持问答 搜索
          component: ProblemSearch
        },
        {
          meta: { title: '技术知识详情' },
          path: '/support/problems/detail/:id',                   // 技术支持问答 详情
          component: ProblemDetail
        },
        {
          meta: { title: '视频教程' },
          path: '/video',                                         // 技术支持视频 列表
          component: VideoChannel
        },
        {
          meta: { title: '视频教程' },
          path: '/video/:id',                                     // 技术支持视频 列表
          component: VideoList
        },
        {
          meta: { title: '视频教程搜索' },
          path: '/video/search/:key',                             // 技术支持视频 搜索
          component: VideoSearch
        },
        {
          path: '/video/detail/:id',                              // 技术支持视频详情
          component: VideoDetail
        },
        {
          path: '/video/detail/:id/:url',                         // 技术支持视频详情
          component: VideoDetailList
        },
        {
          meta: { title: '技术支持售后条款' },
          path: '/aftersales',                                   // 技术支持售后
          component: AftersalesDetail
        },
        {
          meta: { title: '技术支持在线合同' },
          path: '/pact',                                         // 技术支持在线合同
          component: PactDetail
        },
        {
          meta: { title: '商务合作' },
          path: '/cooperate',                                    // 技术支持合作
          // component: CooperateDetail
          component: Contact
        },
        // {
        //   path: '/support/detail',
        //   component: TechDetail
        // },
        {
          
          path: '/download',                                        // 下载
          meta: { title: '下载中心' },
          component: Download
        },
        {
          path: '/download/:id',                                     // 下载
          component: Download
        },
        {
          //path: '/news',                                          // 新闻
          meta: { title: '新闻资讯' },
          path: '/news',                                            // 新闻https://www.nimotion.com/news/12_1.html
          component: NewsList
        },
        {
          path: '/news/detail/:id',
          meta: { title: '内容详情' },
          component: NewsDetail
        },
        {
          meta: { title: '关于我们' },
          path: '/about',                                         // 关于我们
          component: About
        },
        {
          meta: { title: '企业文化' },
          path: '/culture',                                         // 关于我们-文化
          component: Culture
        },
        {
          meta: { title: '荣誉资质' },
          path: '/honor',                                         // 关于我们-荣誉
          component: Honor
        },
        {
          meta: { title: '企业风采' },
          path: '/styles',                                         //关于我们-风采
          component: Style
        },
        {
          meta: { title: '公司环境' },
          path: '/factory',                                         // 关于我们-厂房
          component: Factory
        },
        {
          path: '/contact',
          component: Contact
        }
      ]
    },
    {
      path: '/resigter',                                          // 注册
      component: Log,
      meta: { title: '' },
      children: [
        {
          path: '/login',                                         // 登录
          component: Login
        },
        {
          path: '',
          component: Resigter
        },
        {
          path: '/forget',
          component: Forget
        }
      ]
    },
    {
      path: '/404',                                          // 404
      component: error,

    }
  ]
})

export default router
