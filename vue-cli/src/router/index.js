import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
/** start**/
import index from '@/page/index'
import message from '@/page/message'
import car from '@/page/car'
import user from '@/page/user'
/** end**/
/** goods**/
import details from '@/page/goods/details'
import order from '@/page/goods/order'
import login from '@/page/logo/login'
import register from '@/page/logo/register'
import logo from '@/page/logo/logo'
import store from '@/./store'
// import store from '@/store/index'
// 子路由

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/',
      title: '冰旗库',
      name: 'index',
      component: index
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/car',
      name: 'car',
      component: car,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/user',
      name: 'user',
      component: user,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/details',
      name: 'details',
      component: details,
      meta: {
        ChildPage: true
      }
    },
    {
      path: '/order',
      name: 'order',
      component: order,
      meta: {
        requireAuth: true,
        ChildPage: true
      }
    },
    {
      path: '/logo',
      name: 'logo',
      component: logo,
      children: [{
        path: '/login',
        name: '/login',
        default: login,
        component: login
      }, {
        path: '/register',
        name: '/register',
        component: register
      }],
      meta: {
        ChildPage: true
      }
      // props: { newsletterPopup: false }
    }
  ]
})
export default router

router.beforeEach((to, from, next) => {
  // 全局拦截器的
// 设置二级页面是否显示底部导航
  if (to.meta.ChildPage) {
    store.commit('isBottomShow', false)
  } else {
    store.commit('isBottomShow', true)
  }

  if (to.meta.requireAuth) { // 判断该  路由是否需要登录权限
    let USERINFO = localStorage.getItem('USER_INFO')
    if (USERINFO !== '' && USERINFO&& USERINFO !== null) { // 通过store获取当前的token是否存在
      store.commit('SuccessLogin', JSON.parse(USERINFO))
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath } //   将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})
