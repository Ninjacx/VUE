// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import Element from 'element-ui'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import axios from '@/utils/http'
import api from '@/utils/api'
// 公共方法
import common from '@/utils/common'
// import resource from './resource'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// element-ui
// import 'element-ui/lib/theme-chalk/index.css'
// var VueTouch = require('vue-touch')
// Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(MintUI)
// Vue.use(Element, { size: 'small', zIndex: 3000 })

Vue.prototype.$$ajax = axios
Vue.prototype.$api = api
Vue.prototype.$common = common

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // resource,
  store,
  components: {App},
  template: '<App/>'
})
