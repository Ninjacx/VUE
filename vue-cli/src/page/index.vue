<template>
  <div class="">
   <VBannerList></VBannerList>
   <div>
     <ul class="nav">
         <!-- <li><i class="el-icon-info"></i><div>邀请好友</div></li>
         <li><i class="el-icon-info"></i><div>亿亿公益</div></li>
         <li><i class="el-icon-info"></i><div>公司资质</div></li>
         <li><i class="el-icon-info"></i><div>信息披露</div></li> -->
         <blocks :title="'邀请好友'"></blocks>
         <blocks :title="'亿亿公益'"></blocks>
         <blocks :title="'公司资质'"></blocks>
         <blocks :title="'信息披露'"></blocks>
     </ul>
   </div>
   <div class="Arrlist">
      <div>{{msg}}</div>
   </div>
   <div class="aaa">
     <div class="list-group">
        <router-link to="/cc?id=10&bb=aaa">Go to cc</router-link>
        <router-link to="/cc2">Go to cc2</router-link>
        <router-view></router-view>
     </div>
   </div>
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

const jsonp = require('jsonp')

export default {
  name: 'index',
  data () {
    return {
      msg: '',
      list:[]
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
  },
  components: {
    VBannerList,
    blocks
  },
  mounted: function () {
    console.log(api.api.getList)
      axios.Newget('/changeRecommend',{},(request)=>{
        this.list = JSON.parse(request.res);
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
