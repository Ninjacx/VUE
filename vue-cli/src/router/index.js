import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/page/index'
import message from '@/page/message'
import car from '@/page/car'
import user from '@/page/user'
import login from '@/page/logo/login'
import store from '@/./store'
// import store from '@/store/index'
// 子路由
import cc from '@/components/childs'
import cc2 from '@/components/childs2'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/',
      name: 'index',
      component: index,
      children: [{
        path: '/cc',
        name: '/cc',
        default: cc,
        helper: cc,
        component: cc
      }, {
        path: '/cc2',
        name: '/cc2',
        default: cc,
        helper: cc,
        component: cc2
      }]
      // ,
      // props: { newsletterPopup: false }
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
      component: user
    }, {
      path: '/login',
      name: '/login',
      component: login
    }
  ]
})
export default router

router.beforeEach((to, from, next) => {
  // console.info(22, window.location.href)
  // console.info(to,from,next)
  // 对路由变化作出响应...
  // console.log(router,to)
  // console.log(router,to.query, from)
  // console.log(to,$.param( to.query ),window.location.href)
  // 全局拦截器的
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (store.state.userToken) { // 通过store获取当前的token是否存在
      next()
    } else {
      next({
        path: 'login',
        query: { redirect: to.fullPath } //   将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    // 不需要验证登录显示底部导航栏 底部导航栏 true为显示
    store.commit('isBottomShow', true)
    next()
  }
})
