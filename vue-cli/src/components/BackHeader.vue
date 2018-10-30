<template>
  <div class="BackHeader">
      <mt-header  :title="title">
       <router-link to=""   slot="left">
         <mt-button @click.native="$router.go(-1)" icon="back"></mt-button>
       </router-link>
      </mt-header>
  </div>
</template>

<script>
  export default {
    name: 'BackHeader',
    props:['title']
  }
</script>
<style scoped>
  .BackHeader{
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
  }
</style>
