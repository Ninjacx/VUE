<template>
  <div class="pay">
     <div class="bgWhite">
       <mt-header title="确认订单">
        <router-link to="/"  slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
  <!-- <mt-button icon="more" slot="right"></mt-button> -->
       </mt-header>
     </div>
     <div class="bgWhite marBottom padTop padBottom">
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
// import VBannerList from '@/components/BannerList'

import MenuList from '@/components/MenuList'
export default {
  name: 'index',
  data () {
    return {
      Url: [{url: "https://www.baidu.com/img/bd_logo1.png"},{url: "../../static/images/timg.jpg"}], // 轮播图
      Order_list: [],
      PayMent:1000
    }
  },

  mounted: function () {
    if(localStorage.getItem('USER_INFO')!==null){
      console.log(localStorage.getItem('USER_INFO'))
    }

    let uid = this.$store.state.userInfo.id
    let ourder_id = this.$route.query.id
    console.log(ourder_id)
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
    }
  },
  components: {
    MenuList
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
