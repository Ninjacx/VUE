<template>
  <div :class="[{is_Show:!is_BotterShow},'footer']">
      <ul>
        <router-link to="/">
          <li><span :class="{fonts:borderTag==1}">首页</span><div :class="{line:borderTag==1}"></div></li>
        </router-link>
        <router-link to="/message">
          <li><span :class="{fonts:borderTag==2}">运动消息</span><div :class="{line:borderTag==2}"></div></li>
        </router-link>
        <router-link to="/car">
          <li><span :class="{fonts:borderTag==3}">购物车</span><div :class="{line:borderTag==3}"></div></li>
        </router-link>
        <router-link to="/user">
          <li @click="go_index4()"><span :class="{fonts:borderTag==4}">我的</span><div :class="{line:borderTag==4}"></div></li>
        </router-link>
      </ul>
  </div>
</template>
<script>
import router from './../router'
  export default {
    name: 'Footer',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        isBottom :true
      }
    },methods: {
      go_index4(){
        let uid = 156
        // router.push({ path: `/index4?id=${uid}` }) // -> /user/123
        // router.push({ path: '/index4', params: { id:uid,bb:'bbb' }})
        this.$router.push({name:'index4',params:{id:uid,bb:'bbb'}});//类似post传参
      }
    }
    ,computed: {
      borderTag(){
        return this.$store.state.borderTag
      },
      is_BotterShow(){
        return this.$store.state.isBottomShow
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.is_Show{
  display: none;
}
.fonts{
  font-weight: bold;
  color: green;
}
.line{
  font-weight: bold;
  color: green;
  animation: bts 1s;
  height:1.5px;
  background-color:green;
  transform: scaleX(.6);
  margin: 10px;
}
@keyframes bts {
    from{
      transform: scaleX(0);
    }
    to{
      transform: scaleX(.6);
    }
}
h1, h2 {
  font-weight: normal;
}
.footer >ul{
  background: white;
  margin: 0 !important;
  list-style-type: none;
  padding: 0;
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 1rem;
}
ul li {
    display: inline-block;
    float: left;
    width: 25%;
    font-size: .3rem;
    background: white;
    padding-top: .2rem;
}
a {
  color: black;
  text-align: center;
}
</style>
