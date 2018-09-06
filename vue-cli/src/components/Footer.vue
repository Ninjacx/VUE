<template>
  <div class="footer">
      <ul>
        <router-link to="/">
          <li><span :class="{fonts:borderTag==1}">首页</span><div :class="{line:borderTag==1}"></div></li>
        </router-link>
        <router-link to="/index2">
          <li><span :class="{fonts:borderTag==2}">投资目录</span><div :class="{line:borderTag==2}"></div></li>
        </router-link>
        <router-link to="/index3">
          <li><span :class="{fonts:borderTag==3}">我的亿亿</span><div :class="{line:borderTag==3}"></div></li>
        </router-link>
        <!-- <router-link to="/index4"> -->
          <li @click="go_index4()"><span :class="{fonts:borderTag==4}">更多</span><div :class="{line:borderTag==4}"></div></li>
        <!-- </router-link> -->
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
      }
    },
    methods:{
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
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
ul{
  background: white;
  margin: 0 !important;
  list-style-type: none;
  padding: 0;
  position: fixed;
  width: 100%;
  bottom: 0;
}
li {
    display: inline-block;
    float: left;
    width: 25%;
    font-size: .3rem;
    background: white;
}
a {
  color: black;
}
</style>
