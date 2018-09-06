<template>
  <div class="footer">
      <ul>
        <router-link to="/">
          <li :class="{line:borderTag==1}">首页</li>
        </router-link>
        <router-link to="/index2">
          <li :class="{line:borderTag==2}">投资目录</li>
        </router-link>
        <router-link to="/index3">
          <li :class="{line:borderTag==3}">我的亿亿</li>
        </router-link>
        <router-link to="/index4">
          <li :class="{line:borderTag==4}">更多</li>
        </router-link>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  computed: {
    borderTag(){
      return this.$store.state.borderTag
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.line{
  border-bottom: 1px solid;
}
h1, h2 {
  font-weight: normal;
}
ul {
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

  /* margin: 0 10px; */
}
a {
  color: #42b983;
}
</style>
