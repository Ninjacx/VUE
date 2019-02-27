<template>
  <div @click="ToAddress()" class="bgWhite marBottom padTop padBottom headerTop">
    <table width="100%">
      <tr>
        <td width="23%" class="padLeft">收货人：</td>
        <td>{{Consignee.name}}</td>
        <td>{{Consignee.phone}}</td>
      </tr>
      <tr>
        <td class="padLeft">收货地址：</td>
        <td colspan="2">{{Consignee.province}}{{Consignee.city}}{{Consignee.addr}}</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
      Consignee: {
        province: '',
        city: '',
        addr: '',
        name: '',
        phone: '',
      }
    }
  },
  methods: {
    ToAddress(){
      // <router-link :to="{ name: '', params: {} }"></router-link> address
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
    this.$$ajax.Newget('users'+this.$api.GetConsignee,{uid: uid},(request) => {
      console.log(request)
      this.Consignee = request[0]
      console.log(this.Consignee)
    })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
