<template>
  <transition name="fade">
    <div id="ticket">
        暂无优惠券
    </div>
</transition>
</template>

<script>
export default {
  name: 'ticket',
  data () {
    return {
      ticketList:[], //优惠券列表
    }
  },
  mounted: function () {
   // this.$store.commit('Flagborder', '3')
   // if(localStorage.getItem('USER_INFO')!==null){
   //   this.uid = JSON.parse(localStorage.getItem('USER_INFO')).id
   // }
   // // this.SleCount = [{id:1,price:138.8,count:1},{id:2,price:136.6,count:1}];//初始化把产品对应数量保存进去
   //  // console.log(JSON.parse(localStorage.getItem('USER_INFO')))
   //  this.$$ajax.Newget(this.$api.carList,{uid:this.uid},(request)=>{
   //      let Data = JSON.parse(request.res)
   //      this.count = Data.length
   //      this.SleCount = Data
   //      this.CarList = Data
   //  })
   //  this.ChangePos()
 },
 computed: {
   //合计金额
   // Pay(){
   //   return this.PayMent
   // },
   // NowCounts(){
   //    return this.NowCount
   // }
 },
 methods: {

 }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iconfont{
  font-size: .35rem;
}
.Computed_Car {
  height: 1rem;
  line-height: 1rem;
  position: fixed;
  bottom: 1rem;
  width: 100%;
  border-bottom:1px solid #C6C6C6;
}
.Price{
  color:#FF3E23;
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
.countRight{
  margin-right: .3rem;
  font-size:0;
  height:.6rem
}
.carGoods-img{
  height: 1.5rem;
  width: auto;
  border-radius: .1rem;
  border: 2px solid #ccc;
  padding: 0;
}
</style>
