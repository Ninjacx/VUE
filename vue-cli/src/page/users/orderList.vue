<template>
  <div class="pay">
     <!-- <div>
       <mt-header fixed="true" :title="'订单列表'+ShowStat">
        <router-link to=""   slot="left">
          <mt-button @click.native="$router.go(-1)" icon="back"></mt-button>
        </router-link>
       </mt-header>
     </div> -->
     <BackHeader :title="'订单列表'+ShowStat" />
       <div @click="sel_Address()" class="bgWhite marBottom padTop padBottom headerTop">
         <table width="100%">
           <tr>
             <td width="23%" class="padLeft">收货人：</td>
             <td>章云</td>
             <td>18121118073</td>
           </tr>
           <tr>
             <td class="padLeft">收货地址：</td>
             <td width="55%">上海市闸北区芷江西路街道 西藏北路871号604</td>
           </tr>
         </table>
       </div>
     <div v-for="item in Order_list" class="borderBottom padLeft bgWhite padding01">
       <div class="fs18 margin01 marRight marBottom">
         <i v-if="status==1" @click="check(item,$event)" :class="['icon iconfont',IsCheckAll?'icon-gouxuan':'icon-gouxuanzhong']"></i>
         <span class="fs18 marLeft">{{Time(item.createtime)}}</span>
       </div>
       <div v-if="dd.order_id==item.id" v-for="dd in Order_Detail_list">
         <div class="" style="display:table-cell;vertical-align:middle;">
           <div style="" class="padRight">
             <img src="http://img2.imgtn.bdimg.com/it/u=380612834,2294025216&amp;fm=27&amp;gp=0.jpg"  class="orderImg"/>
           </div>
           <div style="" class=" padRight">
           </div>
         </div>
         <div class="fs17 tbContent">
             <div>
               <span class="fs18">{{dd.title}}</span>
               <span class="fs15 red">「{{dd.size_name}}」</span>
             </div>
             <div class="fs18 TextRight marRight">
                x&nbsp{{dd.count}}
             </div>
             <div class="fs15">
                产品金额：<span>￥{{dd.price}}</span>
             </div>
         </div>
       </div>
       <div class="fs17 marTop marBottom">
         订单总金额：
         <span class="priceColor">￥{{item.amount}}</span>
       </div>
   </div>
     <MenuList v-if="status==1" style="margin-bottom:1.1rem !important" Menu="抵用卷" rightText="-500" @click.native="ticket()" />
     <div v-if="status==1" class="Computed_Pay bgWhite fs17">
         <div class="TextRight padRight">
             <span class="fs18 floatLeft marLeft">
               <span class="">全选</span>
               <i @click="checkAll()" :class="['icon iconfont',IsCheckAll?'icon-gouxuan':'icon-gouxuanzhong']"></i>
             </span>
            <span class="marRight">合计：<span class="priceColor">￥{{PayMent}}</span></span>
            <mt-button @click="PayMentAll()" size="small" type="primary">去支付</mt-button>
          </div>
     </div>
  </div>
</template>

<script>
import BackHeader from '@/components/BackHeader'
import MenuList from '@/components/MenuList'
import { MessageBox } from 'mint-ui';

export default {
  name: 'index',
  data () {
    return {
      Order_list: [],
      Order_Detail_list: [],
      PayMent: 0,
      IsCheckAll: false,
      status: 1
    }
  },
  computed :{
    ShowStat (){
      let i = {1: '（待付款）',2: '（待发货）',3: '（已发货）',4: '（已确认）',5: '（待评价）'}
      return i[this.status]
    }
  },
  mounted: function () {
    let uid = ''
    if(localStorage.getItem('USER_INFO')!==null){
      uid = JSON.parse(localStorage.getItem('USER_INFO')).id
    }
    let status = this.$route.query.status
    this.status = status
    this.$$ajax.Newget(this.$api.GetOrderList,{uid: uid,status: status},(request) => {
      console.log(request.oList)
      this.Order_list = request.oList
      this.Order_Detail_list = request.oDetailList
    })
  },
  methods: {
    ticket(){
      console.log(123123);
    },
    sel_Address(){
       this.$router.push({'path':'/address'})
    },
    check(obj,event){
      let gouxuan1 = 'icon iconfont icon-gouxuanzhong'
      let gouxuan = 'icon iconfont icon-gouxuan'
      let ThisClass = event.currentTarget.className;
      console.log(ThisClass)
      if(ThisClass == gouxuan1){
        event.currentTarget.className = gouxuan
        this.PayMent += parseFloat(obj.amount)
      }else{
        event.currentTarget.className = gouxuan1
          this.PayMent -= parseFloat(obj.amount)
      }
    },
    checkAll(){
      let all = 0
      this.IsCheckAll = !this.IsCheckAll;
      if(this.IsCheckAll){
        this.Order_list.forEach(function(item,index){
          all+= parseFloat(item.amount)
        })
        this.PayMent = all
      }else{
        this.PayMent = 0;
      }
    },
    PayMentAll (){
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
    },
    Time (dataTime) {
      return this.$common.Time(dataTime)
    }
  },
  components: {
    MenuList,
    BackHeader
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
