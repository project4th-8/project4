<template>
  <div>
    <p>个人详情页</p>
    得到名字：{{name}}
    <hr>
    <p>并且可以通过{{userid}}查询用户基本信息</p>
    </div>
</template>
<script>
export default {
  name:"geren",
  data(){
    return{
      name:'',
      userid:''
    }
  },
  created(){
    this.name=sessionStorage.getItem('name');
    sessionStorage.removeItem('name');
    this.name=this.$route.query.username;
    this.userid=this.$route.query.userid;
  }
}
</script>
<style lang="less" scoped>

</style>