<template>
  <div class="pay">
     <BackHeader title="确认订单"/>
     <Consignee/>
     <div v-for="item in Order_list" class="borderBottom padLeft bgWhite padding01">
       <div class="" style="display:table-cell;vertical-align:middle;">
         <div style="" class="padRight">
           <img src="http://img2.imgtn.bdimg.com/it/u=380612834,2294025216&amp;fm=27&amp;gp=0.jpg"  class="orderImg"/>
         </div>
         <div style="" class=" padRight">
         </div>
       </div>
       <div class="fs17 tbContent">
         <div class="">
           <span class="fs18">{{item.title}}</span>
           <span class="fs15 red">「{{item.size_name}}」</span>
         </div>
            <div class="fs18 TextRight marRight">
              x&nbsp{{item.count}}
            </div>
            <div class="fs15">
              产品金额 ：{{item.price}}
            </div>
       </div>
   </div>
     <MenuList style="margin-bottom:1.1rem !important" Menu="抵用卷" rightText="-500" @click.native="aaa()" />
     <div class="Computed_Pay bgWhite fs17">
         <div class="TextRight padRight">
            <span class="marRight">合计：<span class="priceColor">￥{{PayMent}}</span></span>
            <mt-button @click="PayMentAll()" size="small" type="primary">去支付</mt-button>
          </div>
     </div>
  </div>
</template>

<script>
import BackHeader from '@/components/BackHeader'
import Consignee from '@/components/Consignee'
import MenuList from '@/components/MenuList'
import { MessageBox } from 'mint-ui';
export default {
  name: 'index',
  data () {
    return {
      Url: [{url: "https://www.baidu.com/img/bd_logo1.png"},{url: "../../static/images/timg.jpg"}], // 轮播图
      Order_list: [],
      PayMent:1000,
      Consignee: {
        province: '',
        city: '',
        addr: '',
        name: '',
        phone: '',
      }
    }
  },
  mounted: function () {
    if(localStorage.getItem('USER_INFO')!==null){
      console.log(localStorage.getItem('USER_INFO'))
    }
    let ourder_id = this.$route.query.id
    this.$$ajax.Newget(this.$api.GetOrder,{id: ourder_id},(request) => {
      if(request.length){
        this.Order_list = request
        this.PayMent = request[0].amount
      }
    })

   // this.$store.commit('isBottomShow', false) //隐藏底部栏
   // this.$store.commit('Flagborder', '4')
  },
  methods: {
    aaa(){
      console.log(123123);
    },
    PayMentAll(){
      if(!this.PayMent){
        this.$toast('请选择订单');
        return false;
      }
      // MessageBox('', '您的订单金额请稍后手动输入：'+ this.PayMent+'<div>支付成功后请联系18121118073</div>');
      MessageBox.confirm('您的订单金额请稍后手动输入：'
      + this.PayMent+'<div>支付成功后请联系18121118073</div>',
      '由于网站暂未接入支付功能?').then(action => {
          window.location.href="HTTPS://QR.ALIPAY.COM/FKX08474JRPZW5UJDTC7AA";
      });
      //
    }
  },
  components: {
    MenuList,
    BackHeader,
    Consignee
  },
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
.Computed_Pay {
  height: 1rem;
  line-height: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-bottom:1px solid #C6C6C6;
}
.orderImg{
  height: 1.3rem;
  width: auto;
  border-radius: .1rem;
  border: 2px solid #ccc;
  padding: 0;
}
.tbContent{
  width:100%;
  display:table-cell;
  vertical-align: middle;
}
</style>
