<template>
  <div class="details bgWhite">
     <div class="bgWhite"><VBannerList :imgSrc="Url"></VBannerList></div>
     <div class="fs17">
        <span class="tit">快递：</span>包邮<span class="marLeft tit">总销量：</span>862 <span class="tit">发货地：</span>上海
     </div>
     <div class="buy">
        <!-- 客服咨询 使用websocket-->
        <mt-button class="marRight" size="small" type="primary">加入购物车</mt-button>
        <mt-button @click.native="go_order()" class="marRight" size="small" type="danger">立即购买</mt-button>
     </div>
     <div class="TextCenter fsTitle">
       商品详情
     </div>
     <div v-html="Details"></div>
  </div>
</template>

<script>
import VBannerList from '@/components/BannerList'
export default {
  name: 'index',
  data () {
    return {
      Url: [{url: "https://www.baidu.com/img/bd_logo1.png"},{url: "../../static/images/timg.jpg"}], // 轮播图
      Details: ''
    }
  },
  mounted: function () {
    this.$$ajax.Newget(this.$api.GoodsDetails,{id: 1},(request) => {
      let Data = JSON.parse(request.res)
      this.Details = Data.details
    })

   // this.$store.commit('isBottomShow', false) //隐藏底部栏
   // this.$store.commit('Flagborder', '4')
 },
 methods: {
   go_order() {
     // console.log(123)
      this.$router.push({'path':'/order'});
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
h1, h2 {
  font-weight: normal;
}

/* ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
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
</style>
