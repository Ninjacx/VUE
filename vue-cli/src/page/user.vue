<template>
    <div>
      <div class="bgWhite">
        <div class="userIMG padRight">
          <img src="../../static/images/timg.jpg" height="60px" width="60px" />
        </div>
        <div class="fs17 user" style="">
          <div class="">
             ID:bqk01
          </div>
          <div class="">
            神气的魔术
          </div>
        </div>
      </div>
      <div class="marTop ulOuter marBottom padBottom" >
        <div class="fsTitle padLeft03 padTop">
          <span>我的订单</span>
        </div>
        <ul class="nav bgWhite">
            <BlockIcon :icon="item.icon" widthAttr="20%" v-for="item in MenuList" :title="item.title" ></BlockIcon>
        </ul>
      </div>
      <div>
        <MenuList Menu="我的收货地址" />
        <MenuList Menu="我的优惠券" />
        <MenuList Menu="联系我们" />
        <MenuList Menu="问题反馈" />
      </div>
      <div class="back_Account" @click="back_Account()">
        <mt-button size="large" type="primary">退出当前账号</mt-button>
      </div>
     <!-- {{msg}}
     <button type="button" @click="getParams()" name="button">getParams</button>
      <mt-button type="default">default</mt-button>
      <mt-button type="primary">primary</mt-button>
      <mt-button type="danger">danger</mt-button> -->

  </div>
</template>

<script>
import BlockIcon from '@/components/BlockIcon'
import MenuList from '@/components/MenuList'
export default {
    name: 'user',
    data () {
      return {
        msg: '',
        page:0, // 当前加载的页数
        RecommendList: [],
        moreArrList: [],// 上拉刷新
        MenuList: [{title:'待付款',icon:'icon-daifukuandingdan'},{title:'已付款',icon:'icon-yifukuan'},{title:'待发货',icon:'icon-daifahuo'},{title:'已发货',icon:'icon-yifahuo'},{title:'待评价',icon:'icon-daipingjia'}],
        topStatus: '',
        allLoaded:false
      }
    },
    watch: {
        '$route'(to, from){
          //在这里重新刷新一下
          console.log(this.$route);
          console.log(this.$route.params.bb);
          this.getParams();
        }
      },
    mounted: function () {
     this.$store.commit('Flagborder', '4')
     console.log(this.$route);
     console.log(this.$route.params.bb);
   },
   methods:{
     getParams(){
       console.log(this.$route);
       console.log(this.$route.params.bb);
     },
     back_Account(){
       this.$store.commit('SuccessLogin', '','');
         this.$toast({
           message: '退出成功',
           position: 'middle',
           duration: 1000
         })
          this.$router.push('/');
       console.log('back_Account');
     }
   },
   components:{
     BlockIcon,
     MenuList
   }
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
.user{
  display:table-cell;
  vertical-align:middle;
}
.userIMG{
  display:table-cell;
  border-radius: 50%;
}
.nav{
    padding:.2rem;
    box-sizing:border-box;
    width: 100%;
    margin: 0;
    display: table;
  }
.ulOuter{
  background:white;
}
.back_Account{
  margin-top: .5rem;
}
</style>
