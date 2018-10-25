<template>
  <div>
    <transition name="right" >
      <router-view :paths="path"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'index',
  mounted: function () {
      this.path = this.$router.currentRoute.query.redirect
      // console.log(this.$router.currentRoute.fullPath);
      console.log(this.path)
       this.$store.commit('isBottomShow', false) //隐藏底部栏
       this.$store.commit('Flagborder', '1')
       // console.log('NO15'+this.$store.state.isBottomShow)
  },
  data() {
      return {
        path: ''
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 进入后結果位置 */
.right-enter-active {
  /* transform:scale3d(1,1,1); */
  -webkit-transform: rotateY(0deg);
   transform: rotateY(0deg);
  transition: all 1s ease;
}
/* 进入开始的位置 */
.right-enter
/* .slide-fade-leave-active for below version 2.1.8 */ {
-webkit-transform: rotateY(90deg);
 transform: rotateY(90deg);
}
</style>
