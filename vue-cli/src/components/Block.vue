<template>
  <div class="Block">
    <li>
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
      images:[{url:'https://www.baidu.com/img/bd_logo1.png'},{url:'https://www.baidu.com/img/bd_logo1.png'}],
      }
  },
  props:['title','url']
  ,
  mounted:function(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .Block li img{
     width: 1.8rem;
     height: 1.3rem;
  }
  .Block li{
    font-size: .2rem;
    width: 25%;
    float: left;
    box-sizing: border-box;
    margin: 0;
  }
</style>
