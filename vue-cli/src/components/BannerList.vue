<template>
  <div class="BannerList">
    <!-- 轮播图 -->
    <!-- <div class="">
      <el-carousel :interval="4000" type="card" height="200px">
         <el-carousel-item v-for="item in list" :key="item">
           <h3>{{ item }}</h3>
         </el-carousel-item>
       </el-carousel>
    </div> -->
    <div style="height:300px">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in images">
          <img :src="item.url" style="width:100%;" />
        </mt-swipe-item>
      </mt-swipe>
  </div>
  </div>
</template>

<script>
export default {
  name: 'BannerList',
  data () {
    return {
      list: [1,2,3,4,5,6,7,8],
      images:[{url:'https://www.baidu.com/img/bd_logo1.png'},{url:'https://www.baidu.com/img/bd_logo1.png'}]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* 轮播 */
.mint-swipe-indicator.is-active{
    background: red !important;
}
.mint-swipe-indicator{
  opacity: .5!important;
}
.el-carousel__item h3 {
   color: #475669;
   font-size: 14px;
   opacity: 0.75;
   line-height: 200px;
   margin: 0;
 }

 .el-carousel__item:nth-child(2n) {
   background-color: #99a9bf;
 }

 .el-carousel__item:nth-child(2n+1) {
   background-color: #d3dce6;
 }
</style>
