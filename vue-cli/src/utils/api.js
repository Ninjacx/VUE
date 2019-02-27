/*
  定义接口名字
*/

export default {
  regist: '/regist',
  login: '/login',
  getList: '/getList',
  GetClassify: '/GetClassify', // 类别
  getGoodsList: '/getGoodsList', // 产品列表
  changeRecommend: '/changeRecommend', // 随机产品
  weekSpecial: '/weekSpecial',
  carList: '/car/List',
  GoodsDetails: '/GoodsDetails',
  getSize: '/getSize', // 获取当前传入产品id 所有的规格
  SetCar: '/car/SetCar', // 加入购物车
  SetOrder: '/SetOrder', // 提交订单
  GetOrder: '/GetOrder', // 获取用户订单
  GetOrderList: '/GetOrderList', // 获取用户订单列表
  GetAddressList: '/GetAddressList', // 获取用户地址列表
  GetConsignee: '/GetConsignee' // 获取用户地址列表
}
