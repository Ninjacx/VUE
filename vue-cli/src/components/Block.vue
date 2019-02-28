<template>
  <div class="Block">
    <li :style="{width: widthAttr}">
      <img :src="url" />
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
    props:['title','url','widthAttr']
    ,
    mounted:function(){
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Block li img{
     width: 100%;
     height: 1.3rem;
     padding: .05rem;
  }
  .Block li{
    font-size: .2rem;
    float: left;
    box-sizing: border-box;
    margin: 0;
    text-align: center;
  }
</style>
