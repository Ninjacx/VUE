import Vue from 'vue'
import Vuex from 'vuex'

// import common from './modules/common';
// import musicPlayer from './modules/musicPlayer';
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    name: '',
    borderTag: 1
  },
  mutations: {
    setName (state, name) {
      state.name = name
    },
    Flagborder (arr, index) {
      arr.borderTag = index
    }
  }
})
