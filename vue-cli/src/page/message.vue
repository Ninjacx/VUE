<template>
  <div class="message">
      <img width="100%" height="100%" src="../../static/images/building.jpg" alt="">
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

</style>
