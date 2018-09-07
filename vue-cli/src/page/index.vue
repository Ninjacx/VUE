<template>
  <div class="">
   <VBannerList :imgSrc="Url"></VBannerList>
   <div>
     <ul class="nav">
         <blocks v-for="item in ClassifyList" :title="item.classify_name" :url="item.classify_img"></blocks>
     </ul>
   </div>
   <!-- <img src="../../static/images/timg.jpg" width="100%" /> -->
   <!-- 子路由 -->
   <!-- <div class="aaa">
     <div class="list-group">
        <router-link to="/cc?id=10&bb=aaa">Go to cc</router-link>
        <router-link to="/cc2">Go to cc2</router-link>
        <router-view></router-view>
     </div>
   </div>-->
   <ul>
     <li v-for="item in list">
       {{item.description}}
     </li>
   </ul>
    <!--<div @click="getStroe()">
          click
    </div> -->

  </div>
</template>
<script>
import { Loading } from 'element-ui'
import VBannerList from '@/components/BannerList'
import blocks from '@/components/Block'
/**api***/
import axios from '@/utils/http'
import api from '@/utils/api'

import Axios from 'axios'
// const axios = require('axios')
// require('promise/polyfill-done')

// const jsonp = require('jsonp')

export default {
  name: 'index',
  data () {
    return {
      msg: '',
      list:[],
      Url:[{url:"https://www.baidu.com/img/bd_logo1.png"},{url:"../../static/images/timg.jpg"}], // 轮播图
      ClassifyList:[]
    }
  },
  methods: {
    getStroe () {
      let loadingInstance = Loading.service({fullscreen: false})
      this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
        loadingInstance.close() ;
      });
      // console.log(this.$store)
      this.$store.commit('setName', 'sky')
      console.log(this.$store.state.name)
    }
    // ,
    // swiperleft: function () {
    //   this.$router.push({'path':'/queuehistory'});
    // },
    // swiperright: function () {
    //   this.$router.push({'path':'/home'});
    // },
    // touchMove(e){
    //   console.log(e.target.clientHeight);//
    //   // e.target.clientHeigh = window.Ele;
    // },
    // touchstart(e){
    //   console.log(333);
    // }
  },
  components: {
    VBannerList,
    blocks
  },
  mounted: function () {
    let loadingInstance = Loading.service({fullscreen: false})
    this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
      loadingInstance.close() ;
    });
    console.log(this.$store.state.isBottomShow);
      axios.Newget('/changeRecommend',{},(request)=>{
        this.list = JSON.parse(request.res);
    });

    /*
      类别
    */
    axios.Newget(api.GetClassify,{},(request)=>{
      this.ClassifyList = JSON.parse(request.res)
    });
    // console.log(res);
    return this.$store.commit('Flagborder', '1')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Arrlist{
  text-align: left;
  font-size: .35rem;
}
.nav{
  display: inline-block;
  width: 100%;
  margin: 0;
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
