<template>
  <div class="message">
    <div class="top">
      <router-link class="tt" to="/message">消息</router-link>  |
      <router-link class="tt" to="/messageB">公告</router-link>
      
      
    </div>
    <div>
      <router-view/>
    </div>
    
  </div>
</template>
<script>

export default {
name:"message",
  
}
</script>

<style lang="less" scoped>
.message{
  
  .top{
    height: 40px;
    font-size: 18px;
    line-height: 40px;
    text-align: center;
    border-bottom:1px solid rgb(150, 148, 148);
    .tt{
      margin: 0 10vw;
      color: rgb(88, 85, 85);
      &.router-link-exact-active {
          color:black;
          font-weight: 900
        } 
    }
   
      

  }
}
</style>