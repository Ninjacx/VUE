<template>
  <div class="Block">
    <li><i class="el-icon-info"></i><div>{{title}}</div></li>
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
  props:['title']
  ,
  mounted:function(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .Block li i{
    font-size: 30px;
  }
  .Block li{
    font-size: .2rem;
    width: 25%;
    float: left;
    box-sizing: border-box;
    margin: 0;
  }
</style>
