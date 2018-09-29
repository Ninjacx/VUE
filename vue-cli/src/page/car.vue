<template>
  <transition name="fade">
    <div id="car">
      <div class="CarTop">
        总共<span>{{count}}</span>件
      </div>
      <div class="bgWhite">
          <div class="borderBottom padLeft">
            <div style="display:table-cell;vertical-align:middle;" class=" padRight">
              <i @click="check({id:1, price:138.8, count:1},$event)" :class="['icon iconfont',IsCheckAll?'icon-gouxuan':'icon-gouxuan1']"></i>
            </div>
            <div style="display:table-cell;vertical-align:middle;" class=" padRight">
              <img src="http://img2.imgtn.bdimg.com/it/u=380612834,2294025216&amp;fm=27&amp;gp=0.jpg"  width="100px" class="load-img">
            </div>
            <div class="fs17" style="display:table-cell;vertical-align:middle">
              <div class="">
                 野人谷甩棍
              </div>
              <div class="">
                银色金刚版
              </div>
            </div>
            <div class="fs17" >
              <div class="TextRight marBottom marRight" style="font-size:0;height:.6rem">
                <span class="Price fs18 marRight">￥138.8</span>
                  <input @click="Add_Sub(1,false)" type="button" value="-" class="countButton" />
                  <input  @keyup="InputCount({id:1},$event)" type="text"  value="16"  class="countButton2" />
                  <input @click="Add_Sub(1,true)" type="button" value="+" class="countButton" />
              </div>
            </div>
        </div>
        <div class="borderBottom padLeft">
          <div style="display:table-cell;vertical-align:middle;" class=" padRight">
            <i @click="check({id:2,price:136.6},$event)" :class="['icon iconfont',IsCheckAll?'icon-gouxuan':'icon-gouxuan1']"></i>
          </div>
          <div style="display:table-cell;vertical-align:middle;" class=" padRight">
            <img src="http://img2.imgtn.bdimg.com/it/u=380612834,2294025216&amp;fm=27&amp;gp=0.jpg"  width="100px" class="load-img">
          </div>
          <div class="fs17" style="display:table-cell;vertical-align:middle">
            <div class="">
               野人谷甩棍
            </div>
            <div class="">
              黑色金刚版
            </div>
          </div>
            <div class="TextRight marBottom marRight" style="font-size:0;height:.6rem;">
              <span class="Price fs18 marRight">￥136.6  </span>
              <input type="button" value="-" class="countButton" />
              <input  @keyup="InputCount({id:2},$event)" type="text"  value="0"  class="countButton2" />
              <input type="button" value="+" class="countButton" />
            </div>
      </div>
      </div>
        <div class="Computed_Car bgWhite fs17">
            <div style="padding: 0 .2rem">
              <span>全选</span>
              <i @click="checkAll()" :class="['icon iconfont',IsCheckAll?'icon-gouxuan':'icon-gouxuan1']"></i>
               <span style="float:right;"><span class="marRight">合计：￥<span>{{Pay}}</span></span>
                  <mt-button size="small" type="primary">结算</mt-button>
               </span>
             </div>
        </div>
    </div>
</transition>
</template>

<script>

export default {
  name: 'car',
  data () {
    return {
      SleCount:[], //修改的数量
      SelectShop_Arr:[],
      AllShop:[],
      IsCheckAll:false, //是否全部选中
      count:0,//总件数
      PayMent:0, //付款金额
      // NowCount:{goodsID:0,Count:0}
    }
  },
  mounted: function () {
   this.$store.commit('Flagborder', '3')
   this.SleCount = [{id:1,count:16},{id:2,count:10}];//初始化把产品对应数量保存进去
 },
 computed: {
   Pay(){
     return this.PayMent;
   }
 }
 ,methods: {
    //单个产品选择
    check(obj,event){
      let arg = obj
      let gouxuan1 = 'icon iconfont icon-gouxuan1'
      let gouxuan = 'icon iconfont icon-gouxuan'
      let ThisClass = event.currentTarget.className;
      if(ThisClass == gouxuan1){
        this.PayMent += obj.price;
        event.currentTarget.className = gouxuan
        this.SelectShop_Arr.push(obj);
      }else{
        event.currentTarget.className = gouxuan1
        this.PayMent -= obj.price;
        // this.SelectShop_Arr.$remove();
        let resArr = this.SelectShop_Arr.filter((item,index)=>{
          return item.id != arg.id
        })
        this.SelectShop_Arr = resArr
      }
      console.log(JSON.stringify(this.SelectShop_Arr));
    },
    //全选
   checkAll(){
     this.IsCheckAll = !this.IsCheckAll;
     if(this.IsCheckAll){
      //  this.PayMent = 0;//ajax 所有此用户的订单，取出后算计总和
         //计算总价格
     }else{
       this.PayMent = 0;
     }
   }, InputCount(vid,event){
     for(let item of this.SleCount){
          if(item.id==vid.id){
            item.count = event.currentTarget.value
          }
      }
      console.log(JSON.stringify(this.SleCount));
   } ,
   //根据传入goodsid 获取数量
   SetGoodsID_GetCount(goodsID,is_Add = 0){
      let isAdd = is_Add?1:-1;
      alert(isAdd);
      for(let item of this.SleCount){
          if(item.id==goodsID){
            item.count = (parseFloat(item.count)+isAdd);
          }
      }
   },
   Add_Sub(id,isAdd){
     //增加
     console.log(this.SetGoodsID_GetCount(id,isAdd));
     console.log(JSON.stringify(this.SleCount));
   }
 }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
