<template>
  <div class="message">
      <i style="position:absolute;top:40%;width:100%;display:block;color:#2CA0D6;font-size:1.5rem;" class="icon iconfont icon-kongbai">
        <span class="fs18">暂无消息</span>
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
  mounted: function () {
   this.$store.commit('Flagborder', '2')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .message{
    text-align: center;
  }
</style>
