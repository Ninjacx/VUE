<template>
  <transition name="fade">
    <div id="car">
      <div class="CarTop fsTitle">
        总共<span>{{count}}</span>件
      </div>
      <div class="bgWhite">
          <div v-for="item in CarList" class="borderBottom padLeft">
            <div style="display:table-cell;vertical-align:middle;" class="padRight">
              <i @click="check(item,$event)" :class="['icon iconfont',IsCheckAll?'icon-gouxuan':'icon-gouxuan1']"></i>
            </div>
            <div style="display:table-cell;vertical-align:middle;" class=" padRight">
              <img src="http://img2.imgtn.bdimg.com/it/u=380612834,2294025216&amp;fm=27&amp;gp=0.jpg"  class="user-img">
            </div>
            <div class="fs17" style="display:table-cell;vertical-align:middle">
              <div>
                 {{item.title}}
              </div>
              <div class="">
                {{item.description}}
              </div>
            </div>
            <div class="fs17" >
              <div class="TextRight marBottom marRight" style="font-size:0;height:.6rem">
                <span class="Price fs18 marRight">￥{{item.price}}</span>
                  <input @click="Add_Sub(item.id,false,item.price)" type="button" value="-" class="countButton" />
                  <input maxlength="3"  @keyup="InputCount({id:item.id},$event)" type="text"  :value="SelCount(item.id)"  class="countButton2" />
                  <input @click="Add_Sub(item.id,true,item.price)" type="button" value="+" class="countButton" />
              </div>
            </div>
        </div>
          <!-- <div class="borderBottom padLeft">
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
                <input @click="Add_Sub(2,false,138.8)" type="button" value="-" class="countButton" />
                <input maxlength="3"  @keyup="InputCount({id:2},$event)" type="text"  :value="SelCount(2)"  class="countButton2" />
                <input @click="Add_Sub(2,true,138.8)" type="button" value="+" class="countButton" />
              </div>
        </div> -->
      </div>
        <div class="Computed_Car bgWhite fs17">
            <div style="padding: 0 .2rem">
              <span class="fs18">全选</span>
              <i @click="checkAll()" :class="['icon iconfont',IsCheckAll?'icon-gouxuan':'icon-gouxuan1']"></i>
               <span style="float:right;"><span class="marRight">合计：<span class="Price">￥ {{Pay}}</span></span>
                  <mt-button @click="PayMentAll()" size="small" type="primary">结算</mt-button>
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
      CarList:[],  //未用到
      IsCheckAll:false, //是否全部选中
      count:0,//总件数
      PayMent:0, //付款金额
      NowCount:{} // 点击加减号动态添加input
    }
  },
  mounted: function () {
   this.$store.commit('Flagborder', '3')
   // this.SleCount = [{id:1,price:138.8,count:1},{id:2,price:136.6,count:1}];//初始化把产品对应数量保存进去
    console.log(this.$store.state.userInfo)
    this.$$ajax.Newget(this.$api.carList,{uid:this.$store.state.userInfo.id},(request)=>{
        let Data = JSON.parse(request.res)
        this.count = Data.length
        this.SleCount = Data
        this.CarList = Data
    });
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
        // this.PayMent += resPrice;
        event.currentTarget.className = gouxuan
        this.SelectShop_Arr.push(goodInfo);
        this.total();
      }else{
        event.currentTarget.className = gouxuan1
        // this.PayMent -= this.SelCount(obj.id)*obj.price;
        let resArr = this.SelectShop_Arr.filter((item,index)=>{
          return item.id != arg.id
        })
        this.SelectShop_Arr = resArr
        this.total();
      }
      console.log(JSON.stringify(this.SelectShop_Arr));
    },
    //全选
   checkAll(){
     this.IsCheckAll = !this.IsCheckAll;
     if(this.IsCheckAll){
         this.SelectShop_Arr = this.SleCount
         this.total();
     }else{
       this.SelectShop_Arr = [];//清空选择的商品
       this.PayMent = 0;
     }
   }, InputCount(vid,event){
     let str = event.currentTarget.value;
      let IntType = /[^0-9]*$/
      let rep = str.replace(IntType, "");
      event.currentTarget.value = rep
     // console.log(this.$data.NowCount);
      for(let item of this.SleCount){
          if(item.id==vid.id){
            item.count = event.currentTarget.value
          }
      }
      if(this.isSelGoods(vid.id)){
        for(let item of this.SelectShop_Arr){
            if(item.id == vid.id){
               item.count = event.currentTarget.value
            }
        }
        //循环所有
        this.total();
      }
   } ,
   //根据传入goodsid 获取数量
   SetGoodsID_GetCount(goodsID,is_Add = 0){
      let isAdd = is_Add?1:-1;
      // alert(isAdd);
      for(let item of this.SleCount){
          if(item.id==goodsID){
            item.count = (parseInt(item.count)+isAdd)<0?0:(parseInt(item.count)+isAdd)
            console.log(item.count);
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
       this.total();
     }
     // console.log(this.isSelGoods(id));
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
   },//计算所有选中的总金额
   total(){
         let Pay = 0
         for(let item of this.SelectShop_Arr){
             Pay += item.price*item.count
         }
         this.PayMent = parseFloat(Pay).toFixed(1)%1==0?parseInt(Pay):parseFloat(Pay).toFixed(1);
   },// 结算
   PayMentAll (){
     if (this.PayMent == 0){
        this.$toast({message: '请选择需要购买的产品'})
     }else{
       console.log(this.SelectShop_Arr)
       
       //提交到订单接口
     }
   }
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
.user-img{
  height: 100px;
  width: auto;
}
</style>
