<template>
  <div class="message">
      <i :style="'font-size:.6rem;color:'+IconColor+';width:100px;transition:ease 1s;position: absolute;left:'+posLeft+'px;top:'+posTop+'px'" @click="noGoods($event)" :class="'icon iconfont '+ IconClass">
        <div><span class="fs17 iconMSG">{{icon_Msg}}</span></div>
      </i>
  </div>
</template>

<script>
export default {
  name: 'message',
  mounted :function(){
    this.ChangePos()
  },
  data () {
    return {
      posLeft:0,
      posTop:0,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props:['icon_Msg','IconClass','IconColor'],
  methods :{
    noGoods(){
      this.ChangePos()
    },
    ChangePos() {
      let W_height = window.screen.height*Math.random()-document.getElementsByTagName("html")[0].style.fontSize.replace('px','')*2
      let W_height2 = W_height<0?0:W_height
      let W_width = window.screen.width*Math.random()-100
      let W_width2 = W_width<0?0:W_width
      this.posLeft = W_width2
      this.posTop = W_height2
    }
  }
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
