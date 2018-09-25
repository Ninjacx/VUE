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
                 <li>
                     <div class="padding-outline">
                       <img src="http://img3.imgtn.bdimg.com/it/u=3192178595,1770656906&amp;fm=27&amp;gp=0.jpg" width="100%">
                     </div>
                  </li>
               </div>
          </ul>
        </div>
      </div>

   <!-- Recommend -->
    <div class="bgwhite displayBlock">
    	<div>
    		<div class="fsTitle">
    			「精品推荐」
    			<span style="position: relative;right: 10px;" @click="changeRecommend()">
    				换一批
    			</span>
    		</div>
    	</div>
    	<div>
    		<ul>
    			<li v-for="item in RecommendList" style="width:50%;float:left;text-align:center">
    				<a class="mui-navigate-center">
    					<div class="padding-outline">
    						<img :src="item.url" class="load-recommend" style="height:120px;" width="100%">
    					</div>
    					<div>
    						{{item.title}}
    					</div>
    				</a>
    			</li>
    		</ul>
    	</div>
    </div>

    <!-- more -->
    <!-- moreArrList -->
      <div class="marTop TextLeft">
    	<table v-for="item in moreArrList" width="100%" class="bgWhite" style="border-bottom:1px solid #ccc;">
    		<tbody>
    			<tr>
    				<td rowspan="2" style="width: 40%;">
    					<img style="width:100%" :src="item.url">
    				</td>
    				<td>
    					<div style="font-weight: bold;" class="fs16">
    						{{ item.title }}
    					</div>
    					<div style="color: rgb(160, 160, 160); margin-top: 0.4rem;" class="fs14">
    						{{item.description}}
    					</div>
    				</td>
    			</tr>
    			<tr>
    				<td style="vertical-align: bottom;  padding-bottom: 0.2rem;">
    					<div style="color:#FD2A39">
    						<span>
    							￥
    						</span>
    						<span>
    							{{item.price}}
    						</span>
    						<del style="margin-left: 0.39rem; color: rgb(172, 172, 172);" >
    							市场价：￥{{item.big_price}}
    						</del>
    					</div>
    				</td>
    			</tr>
    		</tbody>
    	</table>
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
/**api***/
import { Toast } from 'mint-ui';
export default {
  name: 'index',
  data () {
    return {
      msg: '',
      page:0, // 当前加载的页数
      RecommendList: [],
      moreArrList: [],// 下拉数据
      Url: [{url:"https://www.baidu.com/img/bd_logo1.png"},{url:"../../static/images/timg.jpg"}], // 轮播图
      ClassifyList: [],
      topStatus: '',
      allLoaded:false
    }
  },
  methods: {
    handleTopChange(status) {
        this.topStatus = status;
      },
    getRecommend(){
        this.$$ajax.Newget(this.$api.changeRecommend,{},(request)=>{
          this.RecommendList = JSON.parse(request.res);
      });
    },
    // 首页下拉加载更多
    moreList(){
      let page = this.page
      this.$$ajax.Newget(this.$api.getGoodsList,{goods_id:page},(request)=>{
        let Data = JSON.parse(request.res)
        if(!Data.length){
          Toast('木有啦！')
          this.allLoaded = true;
          this.$refs.loadmore.onBottomLoaded()
          return false;
        }
        for (var i = 0; i < Data.length; i++){
          this.moreArrList.push(Data[i])
        }
        this.page = page+5
      this.$refs.loadmore.onBottomLoaded()
    });
    },
    getStroe () {
      // let loadingInstance = Loading.service({fullscreen: false})
      // this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
      //   loadingInstance.close() ;
      // });
      this.$store.commit('setName', 'sky')
    },
    changeRecommend(){
      this.getRecommend();
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
    let indexOuter = document.getElementById('Index_outer');
    indexOuter.style.height= window.innerHeight+'px'
   // end
    // let loadingInstance = Loading.service({fullscreen: true})
    // this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
    //   loadingInstance.close() ;
    // });

    this.getRecommend();

    /*
      类别
    */
    this.$$ajax.Newget(this.$api.GetClassify,{},(request)=>{
      this.ClassifyList = JSON.parse(request.res)
    });
    return this.$store.commit('Flagborder', '1')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
