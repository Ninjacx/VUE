<template>
  <div class="details ">
    <mt-header title="产品详情">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
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
           规格：<!-- {{size[0].id?'':'暂无库存'}} -->
         </div>

         <ul>
           <li v-if="item.id" @click="selectSize(item)" :class="select_Size.thisSel&&select_Size.id==item.id?'select_Size':''" v-for="item in size">
             {{item.size_name}}
           </li>
         </ul>

       </div>
         <div class="TextRight marBottom marRight" style="font-size:0;height:.6rem;clear:both;">
             <span class="fs17">数量：</span>
             <input @click="is_add(false)" type="button" value="-" class="countButton" />
             <input @keyup="enterCount($event)"  maxlength="3"   type="text"  :value="selCount"  class="countButton2" />
             <input @click="is_add(true)"  type="button" value="+" class="countButton" />
         </div>
       <div class="margin02 commit_order">
         <mt-button  @click.native="goTo_order()" class="marRight" size="large" type="primary">确认</mt-button>
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
      detailPrice: {min_price: 0,max_price: 0},//
      select_Size: {id: '',thisSel: false}, //选中的标识
      size: [],// 初始化规格数据
      select: {count:'',id:'',uid:'',amount:0},// 选择的规格
      count: 1,
      selCount: 1, //购买的数量
      type: 0,  //0 购物车 1 订单
    }
  },
  mounted: function () {
      this.select.uid = JSON.parse(localStorage.getItem('USER_INFO')).id
      this.$$ajax.Newget(this.$api.GoodsDetails,{id: this.$route.query.id},(request) => {
      let Data = JSON.parse(request.res)
      if(Data != -1) {
        this.goodsInfo.Details = Data.details
        this.goodsInfo.goods_name = Data.title
        this.goodsInfo.price = Data.price
      }
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
   enterCount(event){
     this.selCount = event.srcElement.value
     this.select.count = event.srcElement.value
   },
   is_add(booler) {
     booler?this.selCount++:this.selCount--
     this.selCount<1?this.selCount=1:this.selCount
     this.select.count = this.selCount
   },
   selectSize(item) {

     this.select_Size.id = item.id
     this.select_Size.thisSel = true
     //
     // this.select = item;
     this.select.count = this.selCount  //购买、数量
     this.select.id = item.id  // 规格的id ---对应表t_goodssize_price 的id
  // select: {count:'',goods_id:'',id:'',price:'',size_id:'',size_name:''},// 选择的规格
     console.log(this.select)
     this.goodsInfo.price = item.price // 改变选择规格的价格
     this.count = item.count // 改变选择规格的价格
     // this.select.count = this.selCount
   },
   goTo_order(){
     // console.log(this.select);
     if(this.select.id == '') {
       this.$toast({message: '请选择商品',position: 'middle',duration: '1000'})
     }else {
       if(this.type){
         // 立即购买
         this.select.amount = this.select.count*this.goodsInfo.price
         this.$$ajax.Newget(this.$api.SetOrder, this.select, (request) => {
           if(request!=''&&request){
              this.$toast({message: '已提交订单',position: 'bottom',duration: '1800'})
              this.$router.push({'path':'/order',query: {id:request.insertId}});
           }
        })
       }else{
         // 购物车
           this.$$ajax.Newget(this.$api.SetCar, this.select, (request) => {
             if(request!=''&&request){
                  this.$toast({message: '加入购物车成功',position: 'bottom',duration: '1800'})
             }
           })
       }
        this.popupVisible = false
     }

     if(this.select > 0) {
       //   this.$$ajax.Newget(this.$api.GoodsDetails,{id: this.$route.query.id},(request) => {
       //   let Data = JSON.parse(request.res)
       //   console.log(Data)
       //   this.goodsInfo.Details = Data.details
       //   this.goodsInfo.goods_name = Data.title
       //   this.goodsInfo.price = Data.price
       // })
       // this.$router.push({'path':'/order'})

     }

   },go_order() {
     this.popupVisible = true
     this.type = 1
      // this.$router.push({'path':'/order'})
   },
   add_car() {
     this.popupVisible = true
     this.type = 0
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
.mint-toast{
  z-index: 3000;
}
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
  font-size: .2rem;
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
  height: 1rem;
  line-height: 1rem;
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
.mint-header{
  background-color: #70707f !important;
}
</style>
