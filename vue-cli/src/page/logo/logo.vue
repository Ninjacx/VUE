<template>
  <div>
    <transition name="right" >
      <router-view></router-view>
    </transition>
    <!-- <transition name="fade" mode="out-in"> -->
      <!-- <img src="./assets/logo.png"> -->

    <!-- </transition> -->

    <!-- <div class="TextRight padding02 fs16">
      <mt-badge size="normal">
        <router-link to="/register" >
            注册
        </router-link>
      </mt-badge>
    </div> -->
    <!-- <router-link to="/login">login</router-link>
    <router-link to="/register">register</router-link> -->
  </div>
</template>

<script>
import { Loading } from 'element-ui'
import VBannerList from '@/components/BannerList'

export default {
  name: 'index',
  data () {
    return {
      msg: '',
      isBottomShow: 'false',
      username: '',
      phone: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('登录');
    }
  },
  components: {
    VBannerList
  },
  mounted: function () {

       this.$store.commit('isBottomShow', false) //隐藏底部栏
       this.$store.commit('Flagborder', '1')
         console.log(this.$store.state.isBottomShow)
     //return
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 进入后結果位置 */
.right-enter-active {
  /* transform:scale3d(1,1,1); */
  -webkit-transform: rotateY(0deg);
   transform: rotateY(0deg);
  transition: all 1s ease;
}
/* 进入开始的位置 */
.right-enter
/* .slide-fade-leave-active for below version 2.1.8 */ {
-webkit-transform: rotateY(90deg);
 transform: rotateY(90deg);
}
.is_none{
  display: none;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
