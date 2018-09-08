<template>
    <div  class="BannerList">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in imgSrc">
          <img :src="item.url" style="width:100%;" />
        </mt-swipe-item>
      </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'BannerList',
  data () {
    return {
      images: [{url: 'https://www.baidu.com/img/bd_logo1.png'},{url: 'https://www.baidu.com/img/bd_logo1.png'}]
    }
  },
  props: ['imgSrc']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.BannerList{
  height:4.5rem;
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
