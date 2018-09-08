<template>
  <div>
    <mt-cell title="请登录">
      <a  href="#/" class="page-back router-link-active"><i data-v-6451e43c="" class="mintui mintui-back"></i></a>
    </mt-cell>
    <div class="">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    </div>
    <div class="marTop padding02">
      <mt-button size="large" @click.native="login" type="primary">登录</mt-button>
    </div>
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
      email: '',
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
a {
  color: #42b983;
}
</style>
