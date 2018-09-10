<template>
  <div>
    <mt-header title="请注册">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    </div>
    <div class="marTop padding02">
      <mt-button size="large" @click.native="login" type="primary">注册</mt-button>
    </div>
    <div class="TextRight padding02 fs16">
      <mt-badge size="normal">
        <router-link to="/login" >
            登录
        </router-link>
      </mt-badge>
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
      phone: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('注册');
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
</style>
