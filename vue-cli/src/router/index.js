import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/page/index'
import index2 from '@/page/index2'
import index3 from '@/page/index3'
import index4 from '@/page/index4'
// 子路由
import cc from '@/components/childs'
import cc2 from '@/components/childs2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
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
      path: '/index2',
      name: 'index2',
      component: index2
    },
    {
      path: '/index3',
      name: 'index3',
      component: index3
    },
    {
      path: '/index4',
      name: 'index4',
      component: index4
    }
  ]
})
