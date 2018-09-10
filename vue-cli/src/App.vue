<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <!-- <img src="./assets/logo.png"> -->
        <router-view></router-view>
    </transition>
      <VFoot></VFoot>
  </div>
</template>
<script>
import VFoot from '@/components/Footer'

export default {
  name: 'App',
  components: {
    VFoot
  },
  data(){
    return {
      // isBottonShow:true
    }
  },
  mounted:function(){
    new function (){
        var _self = this;
        _self.width = 750;//设置默认最大宽度
        _self.fontSize = 100;//默认字体大小
        _self.widthProportion = function(){var p = (document.body&&document.body.clientWidth||document.getElementsByTagName("html")[0].offsetWidth)/_self.width;return p>1?1:p;};
        _self.changePage = function(){
            document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+_self.widthProportion()*_self.fontSize+"px !important");
        }
        _self.changePage();
        window.addEventListener('resize',function(){_self.changePage();},false);
    };
  }
}
</script>
<style>
  @import  '../static/css/app';
</style>
