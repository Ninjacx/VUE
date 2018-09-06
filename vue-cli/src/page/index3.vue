<template>
  <transition name="fade">
  <div class="index3">
    <mt-datetime-picker
   ref="picker"
   type="time"
   v-model="pickerValue">
 </mt-datetime-picker>
  </div>
</transition>
</template>

<script>

export default {
  name: 'index3',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pickerValue:''
    }
  },
  mounted: function () {
   this.$store.commit('Flagborder', '3')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.fade-enter-active {
  transition: all .3s ease-in-out;
}
.fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-active {
  transform: translateY(50px);
  opacity: 0;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
