<template>
  <div class="searchAll">
    <p>
      <span></span>
    </p>
  </div>
</template>
<script>
export default {
  name:"searchAll",
  data(){
    return{
     userId:'',
     myname:'' 
    }
  },
  created(){
   
  }
}
</script>
<style lang="less" scoped>
.searchAll{
  height: 100%;
  width: 100vw;
  ul{
    margin-top:50px;
    li{
      height: 60px;
      line-height: 60px;
      width: 90vw;
      margin: 0 auto;
      text-indent: 1em;
    }
  }
}
</style>