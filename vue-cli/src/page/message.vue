<template>
  <div class="message">
    <IconMsg IconColor="#0097E0" icon_Msg="暂无消息" IconClass="icon-kongbai" />
  </div>
</template>

<script>
import IconMsg from '@/components/IconMsg'
export default {
  name: 'message',
  mounted: function () {
   this.$store.commit('Flagborder', '2')
 },
 components:{
   IconMsg
 }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .message{
    text-align: center;
  }
</style>
