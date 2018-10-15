<template>
  <div class="Menu bgWhite padding02 marBottom">
      <div class="fs16">{{Menu}} <span class="floatRight"><span class="padRight num fs17">{{rightText}}</span><span class="mint-button-icon rightIcon"><i class="mintui mintui-back"></i></span></span></div>
  </div>
</template>

<script>
export default {
  name: 'MenuList',
  props:['Menu','rightText'],
  mounted:function(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rightIcon{
  transform:rotate(180deg);
  vertical-align:text-bottom;
  /* float: right; */
}
  .Block li{
    font-size: .2rem;
    float: left;
    box-sizing: border-box;
    margin: 0;
    text-align: center;
  }
  .num{
    color: red;
  }
</style>
