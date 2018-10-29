<template>
  <div class="ticket" >
    
      <div>
        <i class="icon iconfont icon-kongbai"></i>
      </div>
      <div>
        <span style="vertical-align:text-top" class="fs18">暂无消息</span>
      </div>
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
  mounted: function () {
   this.$store.commit('Flagborder', '2')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ticket{
    text-align:center;
    position:absolute;
    top:40%;
    width:100%;
    display:block;
    color:#2CA0D6;
    font-size:1.5rem;
  }
</style>
