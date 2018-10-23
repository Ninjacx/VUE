<template>
  <div>
    <mt-header title="请注册">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div>
      <mt-field label="昵称" placeholder="请输入昵称" type="text" v-model="data.nickname"></mt-field>
      <mt-field label="手机号" :attr="{ maxlength: 11 }" placeholder="请输入手机号" type="tel" v-model="data.phone"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="data.password"></mt-field>
    </div>
    <div class="marTop padding02">
      <mt-button size="large" @click.native="regist" type="primary">注册</mt-button>
    </div>
    <div class="TextRight padding02 fs16 ">
      <mt-badge size="normal">
        <router-link class="colorWhite" :to="'/login?redirect='+paths">
            登录
        </router-link>
      </mt-badge>
    </div>
  </div>
</template>

<script>
// import { Loading } from 'element-ui'
import VBannerList from '@/components/BannerList'

export default {
  name: 'index',
  data () {
    return {
      data: {
        // username: '',
        nickname: '',
        phone: '',
        password: ''
      },
      isBottomShow: 'false'
    }
  },
  props:['paths']
  ,
  methods: {
    regist () {
      var t = this
      let api = this.$api
      // 验证
      if(this.rule()){
        this.$$ajax.post(api.regist,this.data,function(result){
          if(result==-1){
            t.$toast({message: '账号已被注册！',duration: '1000'})
            return false
          }else{
            if(result){
              localStorage.setItem('USER_INFO',JSON.stringify(result[0]))
              t.$router.push({'path':t.paths})
              t.$toast({message: '注册成功',duration: '1000'})
            }else{
              t.$router.push({'path':'/'})
            }
          }
        })
      }
    },
    rule (){
      let IntType = /^[1][3,4,5,7,8][0-9]{9}$/

      if(!this.data.phone){
          this.$toast({message: '请填写手机',duration: '1000'})
          return false
      }
      if(!IntType.test(this.data.phone)){
        this.$toast({message: '请填写正确的手机号',duration: '1000'})
        return false
      }
      if(!this.data.password){
          this.$toast({message: '请填写密码',duration: '1000'})
          return false
      }
      if(this.data.password.length<6){
          this.$toast({message: '密码不能小于6位',duration: '1000'})
          return false
      }
      return 1
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
