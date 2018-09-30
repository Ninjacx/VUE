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
                  <input @click="Add_Sub(1,false,138.8)" type="button" value="-" class="countButton" />
                  <!-- NowCounts.id==1?NowCounts.Count:16 -->
                  <input maxlength="3"  @keyup="InputCount({id:1},$event)" type="text"  :value="SelCount(1)"  class="countButton2" />
                  <input @click="Add_Sub(1,true,138.8)" type="button" value="+" class="countButton" />
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
              <input @click="Add_Sub(2,false,136.6)" type="button" value="-" class="countButton" />
              <input   @keyup="InputCount({id:2},$event)" type="text"  :value="NowCounts.goodsID==2?NowCounts.Count:SelCount(2)"  class="countButton2" />
              <input  @click="Add_Sub(2,true,136.6)" type="button" value="+" class="countButton" />
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
      SleCount:[], //商品的数量集合
      SelectShop_Arr:[], //所有选中的商品数据0
      // AllShop:[],  //未用到
      IsCheckAll:false, //是否全部选中
      count:0,//总件数
      PayMent:0, //付款金额
      NowCount:{} // 点击加减号动态添加input
    }
  },
  mounted: function () {
   this.$store.commit('Flagborder', '3')
   this.SleCount = [{id:1,price:138.8,count:1},{id:2,price:136.6,count:1}];//初始化把产品对应数量保存进去
 },
 computed: {
   //合计金额
   Pay(){
     return this.PayMent;
   },
   NowCounts(){
      return this.NowCount;
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
        // obj.price
        let resPrice = this.SelCount(obj.id)*obj.price
        let goodInfo = {id:obj.id,price:obj.price,count:this.SelCount(obj.id)}
        // console.log(goodInfo);
        this.PayMent += resPrice;
        event.currentTarget.className = gouxuan

        this.SelectShop_Arr.push(goodInfo);
      }else{
        event.currentTarget.className = gouxuan1
        this.PayMent -= this.SelCount(obj.id)*obj.price;
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
        // console.log();
        let Pay = 0
        for(let item of this.SleCount){
            Pay += item.price*item.count
        }
         this.SelectShop_Arr = this.SleCount
         this.PayMent = Pay;
     }else{
       this.SelectShop_Arr = [];//清空选择的商品
       this.PayMent = 0;
     }
   }, InputCount(vid,event){
     // console.log(this.$data.NowCount);
     for(let item of this.SleCount){
          if(item.id==vid.id){
            item.count = event.currentTarget.value
          }
      }
       // this.SelectShop_Arr = this.SleCount
      // console.log(JSON.stringify(this.SleCount));
      // this.SelCount(vid.id); //更新新数量


      if(this.isSelGoods(vid.id)){
        //循环所有
        let Pay = 0
        for(let item of this.SelectShop_Arr){
            Pay += item.price*item.count
        }
         this.PayMent = Pay;
      }

   } ,
   //根据传入goodsid 获取数量
   SetGoodsID_GetCount(goodsID,is_Add = 0){
      let isAdd = is_Add?1:-1;
      // alert(isAdd);
      for(let item of this.SleCount){
          if(item.id==goodsID){
            item.count = (parseFloat(item.count)+isAdd)
            return item.count;
          }
      }
   },
   Add_Sub(id,isAdd,price){
     //增加 goodsID:0,Count:0
     this.NowCount = {goodsID:id,Count:this.SetGoodsID_GetCount(id,isAdd,price)};
     let is_SelGoods = this.isSelGoods(id);

     for(let item of this.SelectShop_Arr){
         if(item.id==id){
           item.count = this.NowCount.Count
         }
     }
     console.log(JSON.stringify(this.SelectShop_Arr));
     // 计算总计
     if(is_SelGoods){
       let Pay = 0
       for(let item of this.SelectShop_Arr){
           Pay += item.price*item.count
       }
        this.PayMent = Pay;
     }
     // console.log(this.isSelGoods(id));
     // this.PayMent += price;
     // console.log(this.SelCount(id));
     // console.log(this.NowCounts.goodsID);
     // console.log(this.NowCounts.Count);
     // console.log(this.SetGoodsID_GetCount(id,isAdd));
     // console.log(JSON.stringify(this.SleCount));
   },
   //查询实际选择的数量
   SelCount(goodsID){
     for(let item of this.SleCount){
         if(item.id==goodsID){
           return item.count;
         }
     }
   },//判断此商品是否勾选中
   isSelGoods(Goods_id){
     for(let item of this.SelectShop_Arr){
           if(item.id == Goods_id){
             return 1;
           }
      }
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
