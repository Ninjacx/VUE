<template>
  <div class="">
    <!-- banner -->
    <div class="bgWhite"><VBannerList :imgSrc="Url"></VBannerList></div>
    <!-- classify -->
   <div class="marTop ulOuter marBottom" >
     <ul class="nav bgWhite">
         <blocks v-for="item in ClassifyList" :title="item.classify_name" :url="item.classify_img"></blocks>
     </ul>
   </div>
   <!-- week -->
   <div class="bgWhite weekly">
     <div>
       <div class="fsTitle">每周特价产品</div>
     </div>
     <div>
       <div class="">
       <div style="width:33.3%;float:left">
         <li style="text-align:center">
           <div class="padding-outline">
             <img src="http://img2.imgtn.bdimg.com/it/u=380612834,2294025216&amp;fm=27&amp;gp=0.jpg"  width="100%" class="load-img">
           </div>
           </li>
         </div>
           <div style="width:33.3%;float:left">
             <li >
               <div class="padding-outline"><img src="http://img3.imgtn.bdimg.com/it/u=1444690523,4165695038&amp;fm=27&amp;gp=0.jpg" width="100%">
             </div>
             </li>
           </div>
             <div style="width:33.3%;float:left">
               <li >
                   <div class="padding-outline">
                     <img src="http://img3.imgtn.bdimg.com/it/u=3192178595,1770656906&amp;fm=27&amp;gp=0.jpg" width="100%">
                   </div>
                 </li>
              </div>
          </div>
        </div>
      </div>
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
.ulOuter{
  overflow:hidden;
  background:white;
}
.weekly{
  display: table-cell;
}
.Arrlist{
  text-align: left;
  font-size: .35rem;
}
.nav{
  padding:.2rem;
  box-sizing:border-box;
  ovflow:hidden;
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
