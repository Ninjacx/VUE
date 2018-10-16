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
           <td width="20%">收货人：</td>
           <td>章云</td>
           <td>18121118073</td>
         </tr>
         <tr>
           <td>收货地址：</td>
           <td width="55%">上海市闸北区芷江西路街道 西藏北路871号604</td>
         </tr>
       </table>
     </div>



     <MenuList Menu="抵用卷" rightText="-500" @click.native="aaa()" />
     <div class="Computed_Pay bgWhite fs17">
         <div class="TextRight padRight">
            <span ><span class="marRight">合计：<span class="Price">￥ {{PayMent}}</span></span>
               <mt-button @click="PayMentAll()" size="small" type="primary">提交订单</mt-button>
            </span>
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
      Details: '',
      PayMent:1000
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
    aaa(){
      console.log(123123);
    }
  }
  ,
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
</style>
