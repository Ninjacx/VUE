// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Element from 'element-ui'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// import resource from './resource'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// element-ui
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(MintUI)
Vue.use(Element, { size: 'small', zIndex: 3000 })

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
