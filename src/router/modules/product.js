// 产品.js
/**
 * @param  需要遍历的目录路径
 * @return  返回一个key为文件相对路径，value为对应文件模块导出的内容的对象集合
 */

export const Products = {
  path: '/product',
  component: import('@/views/Products/Category/index.vue'),
  name: '产品',
  meta: { title: '' }
}

export const ProductChannel = {
  path: '/product/list/:id',
  component: import('@/views/Products/Category/ProductChannel.vue'),
  name: '',
  meta: { title: '' }
}

export const ProductsList = {
  path: '/product/:id',
  component: import('@/views/Products/Category/ProductsList.vue'),
  name: '产品列表',
  meta: { title: '' }
}

export const ControllerDetail = {
  path: '/product/controller/detail/:id',
  component: import('@/views/Products/Content/Controller/ControllerDetail.vue'),
  name: '控制器',
  meta: { title: '' }
}

export const StepperDetail = {
  path: '/product/stepper/detail/:id',
  component: import('@/views/Products/Content/Stepper/StepperDetail.vue'),
  name: '步进电机',
  meta: { title: '' }
}

export const DriverDetail = {
  path: '/product/driver/detail/:id',
  component: import('@/views/Products/Content/Driver/DriverDetail.vue'),
  name: '驱动器',
  meta: { title: '' }
}

export const ScrewDetail = {
  path: '/product/screw/detail/:id',
  component: import('@/views/Products/Content/Screw/ScrewDetail.vue'),
  name: '丝杆电机',
  meta: { title: '' }
}

export const ServoDetail = {
  path: '/product/servo/detail/:id',
  component: import('@/views/Products/Content/Servo/ServoDetail.vue'),
  name: '伺服电机',
  meta: { title: '' }
}

export const BrushlessDetail = {
  path: '/product/brushless/detail/:id',
  component: import('@/views/Products/Content/Brushless/BrushlessDetail.vue'),
  name: '无刷电机',
  meta: { title: '' }
}

export const TransmissionDetail = {
  path: '/product/transmission/detail/:id',
  component: import('@/views/Products/Content/Transmission/TransmissionDetail.vue'),
  name: '传动组件',
  meta: { title: '' }
}

export const SoftwareDetail = {
  path: '/product/software/detail/:id',
  component: import('@/views/Products/Content/Soft/SoftwareDetail.vue'),
  name: '工业软件',
  meta: { title: '' }
}

export const RobotDetail = {
  path: '/product/robot/detail/:id',
  component: import('@/views/Products/Content/Robot/RobotDetail.vue'),
  name: '机器人',
  meta: { title: '' }
}

export const IODetail = {
  path: '/product/IO/detail/:id',
  component: import('@/views/Products/Content/IO/IODetail.vue'),
  name: 'IO模块',
  meta: { title: '' }
}

export const ConverterDetail = {
  path: '/product/converter/detail/:id',
  component: import('@/views/Products/Content/Converter/ConverterDetail.vue'),
  name: '转换器',
  meta: { title: '' }
}

export const CablesDetail = {
  path: '/product/cables/detail/:id',
  component: import('@/views/Products/Content/Cable/CablesDetail.vue'),
  name: '线缆',
  meta: { title: '' }
}

export const SolutionsDetail = {
  path: '/product/solutions/detail/:id',
  component: import('@/views/Products/Content/Solutions/SolutionsDetail.vue'),
  name: '定制方案',
  meta: { title: '' }
}