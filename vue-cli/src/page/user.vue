<template>
    <div>
        <div class="bgWhite">
          <div class="userIMG padRight">
            <img src="/static/images/user-icon.png" class="userIcon" />
            <!-- <i class="icon iconfont icon-shengji"></i> -->
          </div>
          <div class="fs17 user" style="">
            <div class="">
               ID:
            </div>
            <div class="">
              {{NickName}}
            </div>
          </div>
        </div>

      <div class="marTop ulOuter marBottom padBottom" >
        <div class="fsTitle padLeft03 padTop">
          <span>我的订单</span>
        </div>
        <ul class="nav bgWhite">
            <BlockIcon @click.native="orderStatus(item.status)" :count="item.count" :icon="item.icon" widthAttr="20%" v-for="item in MenuList" :title="item.title" />
        </ul>
      </div>
      <div>
        <MenuList Menu="我的收货地址" />
        <MenuList @click.native="ticket()" Menu="我的优惠券" />
        <MenuList Menu="联系我们" />
        <MenuList Menu="问题反馈" />
        <!-- <a href="tel:10010">拨打10010</a> -->
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
          MenuList: [{status: 1,title:'待付款',icon:'icon-daifukuandingdan',count :3},
          // {status: 2,title:'已付款',icon:'icon-yifukuan1',count :0},
          {status: 2,title:'待发货',icon:'icon-daifahuo',count :0},
          {status: 3,title:'已发货',icon:'icon-yifahuo',count :0},
          {status: 4,title:'已确认',icon:'icon-dingdanqueren',count :0},
          {status: 5,title:'待评价',icon:'icon-flower',count :0}],
          topStatus: '',
          allLoaded:false
        }
      },
      mounted: function () {
       this.$store.commit('Flagborder', '4')
     },
     methods: {
       orderStatus(status=1) {
         this.$router.push({'path':'/orderList',query:{status: status}})
       },
       ticket() {
         this.$router.push({'path':'/ticket'})
       },
       back_Account() {
         this.$store.commit('SuccessLogin', '');
         localStorage.removeItem('USER_INFO');
         // localStorage.getItem('USER_INFO')
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
     },
     computed: {
       NickName(){
          return this.$store.state.userInfo.nick_name
       }
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
.userIcon{
  height: 60px;
  width: 60px;
}

</style>
