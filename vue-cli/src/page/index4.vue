<template>
  <div class="hello">
    <div style="height:300px">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in images">
        <img :src="item.url" style="width:100%;" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
     <!-- {{msg}}
     <button type="button" @click="getParams()" name="button">getParams</button>
      <mt-button type="default">default</mt-button>
      <mt-button type="primary">primary</mt-button>
      <mt-button type="danger">danger</mt-button> -->

  </div>
</template>

<script>
export default {
    name: 'index4',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    watch: {
        '$route'(to, from){
          //在这里重新刷新一下
          console.log(this.$route);
          console.log(this.$route.params.bb);
          this.getParams();
        }
      },
    mounted: function () {
     this.$store.commit('Flagborder', '4')
     console.log(this.$route);
     console.log(this.$route.params.bb);
   },
   methods:{
     getParams(){
       console.log(this.$route);
       console.log(this.$route.params.bb);
     }
   }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
