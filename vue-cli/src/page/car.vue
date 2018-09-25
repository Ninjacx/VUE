<template>
  <transition name="fade">
    <div id="car">
      <!-- <i class="icon iconfont icon-gouxuan"></i> -->
      <div class="CarTop">
        总共<span>{{count}}</span>件
      </div>
      <div class="bgWhite">
          <div class="borderBottom">
            <div style="display:table-cell;vertical-align:middle;" class=" padRight">
              <i @click="check({id:1},$event)" :class="['icon iconfont',IsCheckAll?'icon-gouxuan':'icon-gouxuan1']"></i>
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
        </div>
        <div class="borderBottom">
          <div style="display:table-cell;vertical-align:middle;" class=" padRight">
            <i @click="check({id:2},$event)" :class="['icon iconfont',IsCheckAll?'icon-gouxuan':'icon-gouxuan1']"></i>
          </div>
          <div style="display:table-cell" class=" padRight">
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
         </div>
      </div>
        <div class="Computed_Car bgWhite fs17">
            <div>
              <span>全选</span>
              <i @click="checkAll()" :class="['icon iconfont',IsCheckAll?'icon-gouxuan':'icon-gouxuan1']"></i>
               <span style="float:right;"><span>合计：￥<span>0</span></span>
                  <span>结算</span>
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
      SelectShopID_Arr:[],
      IsCheckAll:false,
      count:0
    }
  },
  mounted: function () {
   this.$store.commit('Flagborder', '3')
 },
 methods: {
    //单个产品选择
    check(obj,event){
      let ThisClass = event.currentTarget.className;
      if(ThisClass =='icon iconfont icon-gouxuan1'){
        event.currentTarget.className = 'icon iconfont icon-gouxuan'
      }else{
        event.currentTarget.className = 'icon iconfont icon-gouxuan1'
      }
      // console.log(event.currentTarget.className = 'icon iconfont icon-gouxuan1');
      // event.currentTarget.setAttribute('class','icon iconfont icon-gouxuan1')
      // this.shop_ID = obj.id
      // if(obj.id==this.shop_ID){
      //     this.IsCheck = !this.IsCheck;
      // }

      // console.log(obj);

    },
    //全选
   checkAll(){
     this.IsCheckAll = !this.IsCheckAll;
     if(this.IsCheckAll){
       //计算总价格
     }
   }
 }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #car>.CarTop {
    /* height: 1rem; */
    /* background: -webkit-linear-gradient(left, #26A2FF , white);
    background: -o-linear-gradient(right, #26A2FF, white);
    background: -moz-linear-gradient(right, #26A2FF, white);
    background: linear-gradient(to right, #26A2FF , white);  */
 }
.Computed_Car {
  height: 1rem;
  line-height: 1rem;
  position: fixed;
  bottom: 1rem;
  width: 100%;
  border-bottom:1px solid #C6C6C6;
}
</style>
