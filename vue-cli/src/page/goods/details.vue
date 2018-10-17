<template>
  <div class="details ">
     <div class="bgWhite"><VBannerList :imgSrc="Url"></VBannerList></div>
     <!-- <div class="fs17">
        <span class="tit">快递：</span>包邮<span class="marLeft tit">总销量：</span>862 <span class="tit">发货地：</span>上海
     </div> -->
     <div class="">
       <img src="" alt="">
     </div>
     <div class=" bgWhite padding02">
       <div class=" fs17 padBottom">
         {{goodsInfo.goods_name}}
       </div>
       <div class=" priceColor padBottom">
         <span>￥</span><span class="fs17">{{detailPrice.min_price}}</span>
       </div>
       <div class="padBottom">
         运费 ：包邮
       </div>
     </div>

     <div class="buy padding02">
        <!-- 客服咨询 使用websocket-->
        <mt-button @click.native="add_car()" class="marRight" size="small" type="primary">加入购物车</mt-button>
        <mt-button @click.native="go_order()" class="marRight" size="small" type="danger">立即购买</mt-button>
     </div>
   <div class="bgWhite marTop02">
     <div class="TextCenter fsTitle ">
       商品详情
     </div>
     <div  v-html="goodsInfo.Details"></div>
 </div>
     <mt-popup class="size"  v-model="popupVisible"  position="bottom">
       <div>
         <div class="margin02 fs18">
           {{goodsInfo.goods_name}}
         </div>
         <div class="margin02 priceColor">
           <span>￥</span><span class="fs20">{{goodsInfo.price}}</span>
         </div>
         <div class="marLeft fs17">
           数量：{{count}}
         </div>
         <div class="marLeft fs17">
           规格：
         </div>
         <ul>
           <li @click="selectSize(item)" :class="select_Size.thisSel&&select_Size.id==item.id?'select_Size':''" v-for="item in size">
             {{item.size_name}}
           </li>
         </ul>

       </div>
         <div class="TextRight marBottom marRight" style="font-size:0;height:.6rem;clear:both;">
             <input  type="button" value="-" class="countButton" />
             <input  maxlength="3"   type="text"  value="2"  class="countButton2" />
             <input  type="button" value="+" class="countButton" />
         </div>
       <div class="margin02 commit_order">
         <mt-button  @click.native="add_car()" class="marRight" size="large" type="primary">确认</mt-button>
       </div>
     </mt-popup>
  </div>
</template>

<script>
import VBannerList from '@/components/BannerList'
export default {
  name: 'index',
  data () {
    return {
      Url: [{url: "https://www.baidu.com/img/bd_logo1.png"},{url: "../../static/images/timg.jpg"}], // 轮播图
      goodsInfo: {Details: '',price: 0,goods_name: ''},
      popupVisible: false,
      detailPrice:{min_price: 0,max_price: 0},//
      select_Size : {id: '',thisSel: false}, //选中的标识
      size: [],// 初始化规格数据
      select: [],// 选择的规格
      count: 1,
      type:0  //0 购物车 1 订单
    }
  },
  mounted: function () {
      this.$$ajax.Newget(this.$api.GoodsDetails,{id: this.$route.query.id},(request) => {
      let Data = JSON.parse(request.res)
      console.log(Data)
      this.goodsInfo.Details = Data.details
      this.goodsInfo.goods_name = Data.title
      this.goodsInfo.price = Data.price
    })
    this.$$ajax.Newget(this.$api.getSize,{id: this.$route.query.id},(request) => {
    let Data = JSON.parse(request.res)
    this.size = Data
    // console.log(this.size)
  })
   // this.$store.commit('isBottomShow', false) //隐藏底部栏
   // this.$store.commit('Flagborder', '4')
 },
 methods: {
   selectSize(item) {
     this.select_Size.id = item.id
     this.select_Size.thisSel = true
     //
     this.select = item
     this.goodsInfo.price = item.price // 改变选择规格的价格
     this.count = item.count // 改变选择规格的价格
     // this.select.price = item.price
     console.log(this.select)
   },
   go_order() {
     if(this.select.length > 0) {
       this.$router.push({'path':'/order'})
     }else{
       this.popupVisible = true
     }
      // this.$router.push({'path':'/order'})
   },
   add_car() {
     this.popupVisible = true
   }
 }
 ,
  components: {
    VBannerList
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
} */
.select_Size{
  background: #ccc;
}
ul{
  /* width: 100%; */
}
ul>li {
  margin: .2rem;
  width: 25%;
  float: left;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #D0D0D0;
  /* color: #389BFE;  */
  padding: .1rem;
  /* margin: .3rem; */
  font-size: .3rem;
  box-sizing: border-box;
}
.buy {
  margin: 0 !important;
  list-style-type: none;
  padding: 0;
  position: fixed;
  width: 100%;
  bottom: 0;
  text-align: right;
  background: white;
}
.details > img{
  width: 100% !important;
  height: 100px !important;
}
.tit{
  color: #FF8C02;
}
.size{
  width:100%;
  min-height:5rem;
}
.commit_order{
  clear: both;
  text-align: right;
}

.countButton{
  height: .6rem;
  width: .6rem
}
.countButton2{
  text-align: center;
  box-sizing: border-box;
  height: .6rem;
  width: 1rem
}
</style>
