<template>
 <div>
  <div id="Index_outer">
    <!-- 上拉刷新 :top-method="moreList"，下拉加载 -->
    <mt-loadmore   bottomLoadingText="\(^o^)/  加载中…"  bottomPullText="o(￣ε￣*)  拉住我啦" bottomDropText="o(￣ε￣*)  放开我啦" :bottom-method="moreList" :bottom-all-loaded="allLoaded" ref="loadmore">
    <!-- banner -->
    <div class="bgWhite"><VBannerList :imgSrc="Url"></VBannerList></div>
    <!-- classify -->
   <div class="marTop ulOuter marBottom padBottom" >
     <ul class="nav bgWhite">
         <blocks widthAttr="25%" v-for="item in ClassifyList" :title="item.classify_name" :url="item.classify_img"></blocks>
     </ul>
   </div>
   <!-- week -->
   <div class="bgWhite weekly">
       <div class="fsTitle padding02">「每周特价产品」</div>
     <div>
       <ul>
           <li v-for="item in weekSpecial" style="text-align:center;width:33.3%;float:left">
             <router-link :to="'/details?id='+item.id">
               <div class="padding-outline">
                 <img :src="item.url"  width="100%">
               </div>
               <div class="">
                 {{item.title}}
               </div>
             </router-link>
             </li>
          </ul>
        </div>
      </div>
   <!-- Recommend -->
    <div class="displayBlock">
    		<div class="fsTitle marTop bgWhite">
    			「精品推荐」
    			<span style="position: relative;right: 10px;" @click="changeRecommend()">
    				换一批
    			</span>
    		</div>
    	<div>
    		<ul>
    			<li v-for="item in RecommendList" class="RecommendList">
            <router-link :to="'/details?id='+item.id">
    				<a class="mui-navigate-center">
    					<div class="padding-outline">
    						<img :src="item.url" class="load-recommend" height="120px" width="100%">
    					</div>
    					<div>
    						{{item.title}}
    					</div>
    				</a>
          </router-link>
    			</li>
    		</ul>
    	</div>
    </div>
    <!-- more -->
    <!-- moreArrList -->
      <div class="marTop TextLeft">
       <div v-for="item in moreArrList">
         <router-link :to="'/details?id='+item.id">
          	 <table  width="100%" class="bgWhite" style="border-bottom:1px solid #ccc;">
          		<tbody>
          			<tr>
          				<td rowspan="2" style="width: 40%;">
          					<img style="width:100%" :src="item.url">
          				</td>
          				<td>
          					<div style="font-weight: bold;" class="fs16">{{ item.title }}</div>
          					<div style="color: rgb(160, 160, 160); margin-top: 0.4rem;" class="fs14">
          						{{item.description}}
          					</div>
          				</td>
          			</tr>
          			<tr>
          				<td style="vertical-align: bottom;  padding-bottom: 0.2rem;">
          					<div style="color:#FD2A39">
          						<span>￥</span>
          						<span>{{item.price}}</span>
          						<del style="margin-left: 0.39rem; color: rgb(172, 172, 172);">市场价：￥{{item.big_price}}</del>
          					</div>
          				</td>
          			</tr>
          		</tbody>
          	 </table>
          </router-link>
        </div>
    </div>
  <div class="bgWhite" v-if="allLoaded"><span class="look">⊙﹏⊙‖∣木有啦！</span></div>
</mt-loadmore>
   <!-- 子路由 -->
   <!-- <div class="aaa">
     <div class="list-group">
        <router-link to="/cc?id=10&bb=aaa">Go to cc</router-link>
        <router-link to="/cc2">Go to cc2</router-link>
        <router-view></router-view>
     </div>
   </div>-->
   <!-- <ul>
     <li v-for="item in RecommendList">
       {{item.description}}
     </li>
   </ul> -->
    <!--<div @click="getStroe()">
          click
    </div> -->
   </div>
  </div>
</template>
<script>
// import { Loading } from 'element-ui'
import VBannerList from '@/components/BannerList'
import blocks from '@/components/Block'
// api
export default {
  name: 'index',
  data () {
    return {
      msg: '',
      page:0, // 当前加载的页数
      RecommendList: [],
      moreArrList: [], // 下拉数据
      Url: [{url: "https://www.baidu.com/img/bd_logo1.png"}, {url: "../../static/images/timg.jpg"}], // 轮播图
      ClassifyList: [],
      topStatus: '',
      allLoaded: false,
      weekSpecial: [] // 每周特价的3个产品
    }
  },
  methods: {
    handleTopChange (status) {
      this.topStatus = status
    },
    getRecommend () {
        this.$$ajax.Newget(this.$api.changeRecommend, {}, (request) => {
        this.RecommendList = JSON.parse(request.res)
      })
    },
    getWeekSpecial () {
        this.$$ajax.Newget(this.$api.weekSpecial, {}, (request) => {
        this.weekSpecial = JSON.parse(request)
      })
    },
    // 首页下拉加载更多
    moreList () {
      let page = this.page
      this.$$ajax.Newget(this.$api.getGoodsList, {goods_id: page}, (request) => {
        let Data = JSON.parse(request.res)
        if (!Data.length) {
          this.$toast({message: '木有啦!'})
          this.allLoaded = true
          this.$refs.loadmore.onBottomLoaded()
          return false
        }
        for (var i = 0; i < Data.length; i++) {
          this.moreArrList.push(Data[i])
        }
        this.page = page + 5
        this.$refs.loadmore.onBottomLoaded()
     })
    },
    getStroe () {
      // let loadingInstance = Loading.service({fullscreen: false})
      // this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
      //   loadingInstance.close() ;
      // });
      this.$store.commit('setName', 'sky')
    },
    changeRecommend () {
      this.getRecommend()
    }
    // ,
    // swiperleft: function () {
    //   this.$router.push({'path':'/queuehistory'});
    // },
    // swiperright: function () {
    //   this.$router.push({'path':'/home'});
    // },
    // touchMove(e){
    //   // e.target.clientHeigh = window.Ele;
    // },
    // touchstart(e){
    // }
  },
  components: {
    VBannerList,
    blocks
  },
  mounted: function () {
    // 适配下拉加载start
    let indexOuter = document.getElementById('Index_outer')
    indexOuter.style.height = window.innerHeight + 'px'
    // end
    // let loadingInstance = Loading.service({fullscreen: true})
    // this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
    //   loadingInstance.close() ;
    // });
    this.getWeekSpecial()
    this.getRecommend()
    // 类别
    this.$$ajax.Newget(this.$api.GetClassify, {}, (request) => {
      this.ClassifyList = JSON.parse(request.res)
    })
    return this.$store.commit('Flagborder', '1')
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.RecommendList{
  width:50%;
  float:left;
  text-align:center;
}
.mint-loadmore{
  margin-bottom:1.1rem;
}
.ulOuter{
  background:white;
  min-height: 2rem;
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
  width: 100%;
  margin: 0;
}

li {
  background: white !important;
}
a {
  color: #42b983;
}
#Index_outer{
    text-align: center;
    -webkit-overflow-scrolling: touch;
    overflow:auto;
    box-sizing:border-box;
}
</style>
