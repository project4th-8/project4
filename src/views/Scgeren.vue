<template>
  <div>
    <p>个人详情页</p>
    {{name}}</div>
</template>
<script>
export default {
  name:"geren",
  data(){
    return{
      name:''
    }
  },
  created(){
    this.name=sessionStorage.getItem('name');
    sessionStorage.removeItem('name');
  }
}
</script>
<style lang="less" scoped>

</style>