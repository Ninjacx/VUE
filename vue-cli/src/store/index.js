import Vue from 'vue'
import Vuex from 'vuex'

// import common from './modules/common';
// import musicPlayer from './modules/musicPlayer';
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    name: '',
    userToken: '', // 登录用户的标识
    userInfo: {}, // 用户所有数据信息
    isBottomShow: true,
    borderTag: 1 // 底部导航栏
  },
  mutations: {
    setName (state, name) {
      state.name = name
    },
    Flagborder (state, borderTag) {
      state.borderTag = borderTag
    },
    isBottomShow (state, isBottomShow) {
      state.isBottomShow = isBottomShow
    },
    SuccessLogin (state, user) {
      state.userToken = user.token
      state.userInfo = user
    }
  }
})
