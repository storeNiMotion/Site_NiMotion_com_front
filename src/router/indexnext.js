// createRouter：创建router实例对象
// createWebHistory：创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import { ABout, Contact } from '.modules/about.js'                                      // 关于我们 & 联系我们
import { Download, DownloadID } from '.modules/download'                                // 下载中心 & 下载中心
import { Filter } from '.modules/filter'                                                // 产品选型
import { Home } from '.modules/home'                                                    // 主页
import { Login, Resigter, Forget } from '.modules/login'                                // 注册登录
import { NewsList, NewsDetail } from '.modules/news'                                    // 新闻
import { Products, ProductChannel, ProductsList, ControllerDetail, StepperDetail, DriverDetail, ScrewDetail } from '.modules/product'                                // 产品
import { ServoDetail, BrushlessDetail, TransmissionDetail, SoftwareDetail, RobotDetail, IODetail, ConverterDetail, CablesDetail, SolutionsDetail } from '.modules/product'   
import { Search, ProductSearch } from '.modules/search'                                    // 搜索
import { SolutionChannel, SolutionList, SolutionDetail } from '.modules/solution'            // 方案
import { TechChannel, ProblemList, ProblemDetail, VideoList, VideoDetail, AftersalesDetail, PactDetail, CooperateDetail } from '.modules/support'            // 技术支持

import Layout from '@/views/Layout/index.vue'
import error from '@/views/404.vue'

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
        Home,
        ProductSearch, Search,
        Products, ProductChannel, ProductsList,
        ControllerDetail, StepperDetail, DriverDetail, ScrewDetail, ServoDetail, BrushlessDetail, TransmissionDetail, SoftwareDetail, RobotDetail, IODetail, ConverterDetail, CablesDetail, SolutionsDetail,
        Filter,
        SolutionChannel, SolutionList, SolutionDetail,
        TechChannel, ProblemList, ProblemDetail, VideoList, VideoDetail, AftersalesDetail, PactDetail, CooperateDetail,

        Download, DownloadID,
        NewsList, NewsDetail,
        ABout, Contact
      ]
    },
    {
      path: '/resigter',                                          //注册
      component: Log,
      meta: { title: '' },
      children: [
        Login, Resigter, Forget
      ]
    },
    {
      path: '/404',                                          // 404
      component: error,
      
    }
  ]
})

export default router
