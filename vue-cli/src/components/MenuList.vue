<template>
  <div class="Menu bgWhite padding02 marBottom">
      <div class="fs16">{{Menu}}<span class="mint-button-icon rightIcon"><i class="mintui mintui-back"></i></span></div>
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
  props:['Menu'],
  mounted:function(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rightIcon{
  transform:rotate(180deg);
  vertical-align:text-bottom;
  float: right;
}
  .Block li{
    font-size: .2rem;
    float: left;
    box-sizing: border-box;
    margin: 0;
    text-align: center;
  }
</style>
