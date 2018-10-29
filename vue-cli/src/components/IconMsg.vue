<template>
  <div class="message">
      <i style="position:absolute;top:40%;width:100%;display:block;color:#2CA0D6;font-size:1.5rem;" :class="'icon iconfont '+ IconClass">
        <div><span class="fs18 iconMSG">{{icon_Msg}}</span></div>
      </i>
  </div>
</template>

<script>
export default {
  name: 'message',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props:['icon_Msg','IconClass']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .message{
    text-align: center;
  }
  .iconMSG{
    vertical-align: text-top;
  }
</style>
