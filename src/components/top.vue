<template>
  <div class="top">
    <div class="top-list">
    <input type="text">
    </div>
      <hello></hello>
  </div>
</template>

<script>
import hello from './hello'
export default {
  name:'top',
  components:{
    hello
  }
}
</script>
<style lang="less" scoped>
 .top {
   height: 64px;
   background: #5f5e5e;
   font-size: 24px;
 }
  .top-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
 
  }

</style>