<template>
  <div class="hello">
     <div class="bgWhite"><VBannerList :imgSrc="Url"></VBannerList></div>
     <div class="">
       快递：包邮 总销量： 发货地：上海
     </div>
     <div class="buy">
        <!-- 客服咨询 使用websocket-->
        <mt-button size="small" type="primary">加入购物车</mt-button>
        <mt-button size="small" type="danger">立即购买</mt-button>
     </div>

  </div>
</template>

<script>
import VBannerList from '@/components/BannerList'
export default {
  name: 'index',
  data () {
    return {
      Url: [{url: "https://www.baidu.com/img/bd_logo1.png"},{url: "../../static/images/timg.jpg"}], // 轮播图
    }
  },
  mounted: function () {
   // this.$store.commit('isBottomShow', false) //隐藏底部栏
   // this.$store.commit('Flagborder', '4')
  },
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
</style>
