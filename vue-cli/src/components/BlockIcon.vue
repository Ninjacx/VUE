<template>
  <div class="Blockicon">
    <li :style="{width: widthAttr}">
      <i :class="['icon iconfont',icon]"></i>
      <span  v-if="count" class="vsuper">{{count}}</span>
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
    props:['title','icon','widthAttr','count']
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
  .vsuper{
    min-width:.3rem;
    border-radius:.1rem;
    color:white;
    background-color:#ff7606;
    vertical-align: super;
    font-size: .1rem;
    position: absolute;
  }
</style>
