<template>
  <div>
    <mt-header title="请登录">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
      <mt-field  label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <!-- <mt-field label="验证码" v-model="captcha">
        <img src="http://localhost:9000/public/images/p_erwm.png" height="45px" width="100px">
      </mt-field> -->
    </div>
    <div class="marTop padding02">
      <mt-button size="large" @click.native="login" type="primary">登录</mt-button>
    </div>
    <div class="TextRight padding02 fs16">
      <mt-badge size="normal">
        <router-link to="/register">
            注册
        </router-link>
      </mt-badge>
    </div>
    <!-- 您还没有登录哦！ -->
  </div>
</template>

<script>
// import { Loading } from 'element-ui'
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
      let t = this;
      let userArgs = {account:this.phone,password:this.password};

      let api = this.$api

      this.$$ajax.post(api.login,userArgs,function(result){
          if(result.res != -1){
            let userInfo = JSON.parse(result.res);
            //登录成功保存用户的Token 和用户信息
            // console.log(userInfo)

            // t.$store.commit('SuccessLogin', userInfo)
            // console.log(t.$store.state.userToken)
            localStorage.setItem('USER_INFO',JSON.stringify(userInfo))
            // console.log(localStorage.getItem('USER_INFO',userInfo))
            // console.log(t.$store.state.userToken)
            // console.log(t.$store.state.userInfo)
            //登录成功显示footer
            t.$store.commit('isBottomShow', true)
            //跳转之前点击进来的页面
            t.$router.replace({
              path: t.$router.currentRoute.query.redirect,
              query: {redirect: t.$router.currentRoute.fullPath}
            })
          }else{
            t.$toast({
              message: '账号或密码错误',
              position: 'middle',
              duration: 1000
            })
          }
      });
    }
  },
  components: {
    VBannerList
  },
  mounted: function () {

       this.$store.commit('isBottomShow', false) //隐藏底部栏
       this.$store.commit('Flagborder', '1')
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
</style>
