<template>
  <div class="">
   <VBannerList></VBannerList>
    <div @click="getStroe()">
          click
    </div>
  </div>
</template>

<script>
import { Loading } from 'element-ui'
import VBannerList from '@/components/BannerList'

export default {
  name: 'index',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    getStroe () {
      let loadingInstance = Loading.service({fullscreen: false})
      this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
        loadingInstance.close() ;
      });
      // console.log(this.$store)
      this.$store.commit('setName', 'sky')
      console.log(this.$store.state.name)
    }
  },
  components: {
    VBannerList
  },
  mounted: function () {
    return this.$store.commit('Flagborder', '1')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


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
