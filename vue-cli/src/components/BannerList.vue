<template>
    <div  class="BannerList">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in imgSrc">
          <img :src="item.url" class="wh"/>
        </mt-swipe-item>
      </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'BannerList',
  props: ['imgSrc']
}
</script>
<style scoped>
.BannerList{
  height:4.5rem;
}
.wh{
  width: 100%;
  height: 100%;
}
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
