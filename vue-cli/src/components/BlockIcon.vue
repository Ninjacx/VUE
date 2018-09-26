<template>
  <div class="Blockicon">
    <li :style="{width: widthAttr}">
      <i :class="['icon iconfont',icon]"></i>
      <div class="fs16 marTop">{{title}}</div>
    </li>
  </div>
</template>

<script>
  export default {
    name: 'BannerList',
    data () {
      return {
        list: [1,2,3,4,5,6,7,8],
        }
    },
    props:['title','icon','widthAttr']
    ,
    mounted:function(){
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Blockicon li i{
     width: 100%;
     height: 1.3rem;
  }
  .Blockicon li{
    font-size: .5rem;
    float: left;
    box-sizing: border-box;
    margin: 0;
    text-align: center;
  }
</style>
