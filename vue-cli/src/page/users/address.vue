<template>
  <div class="address">
     <BackHeader title="收货人地址" />
     <div class="headerTop"></div>
     <div v-for="item in Address_list" class="borderBottom padLeft bgWhite ">
       <div class="bgWhite marBottom padTop padBottom ">
         <table width="100%">
           <tr>
             <td width="23%" class="padLeft">收货人：</td>
             <td>{{item.name}}</td>
             <td>{{item.phone}}</td>
           </tr>
           <tr>
             <td class="padLeft">收货地址：</td>
             <td width="55%">{{item.province}} {{item.city}} {{item.addr}}</td>
           </tr>
         </table>
       </div>
     </div>

  </div>
</template>

<script>
import BackHeader from '@/components/BackHeader'
export default {
  name: 'index',
  data () {
    return {
      Address_list: [],
    }
  },
  computed :{
  },
  mounted: function () {
    let uid = ''
    if(localStorage.getItem('USER_INFO')!==null){
      uid = JSON.parse(localStorage.getItem('USER_INFO')).id
      console.log(uid);
    }
    let status = this.$route.query.status
    this.status = status
    this.$$ajax.Newget('users'+this.$api.GetAddressList,{uid: uid},(request) => {
      console.log(request)
      this.Address_list = request.result
    })
  },
  methods: {
    ticket(){
      console.log(123123);
    },
  },
  components: {
    BackHeader
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
