<template>
  <div class="messageB">    
    <div class="cai">
      <div><router-link to="/messageB">系统通知</router-link></div>
     <div><router-link to="/forwardNotification">转发通知</router-link></div>
     <div><router-link to="/followNotification">关注提醒</router-link></div>
    </div>
     <div>
      <router-view/>
    </div>
  </div>
</template>
<script>

export default {
   name:"messageB",
   data(){
     return{

     }
   },
   created(){
   }
}
</script>
<style lang="less" scoped>
.messageB{
  .cai{
    width: 100vw;
    height: 40px;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    div{
      height: 40px;
      width: 33vw;
      display: flex;
      justify-content: center;
      align-items: center;
      a{
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(88, 85, 85);
        &.router-link-exact-active {
          color: black;
          font-weight: 500;
          font-size: 16px;
          box-shadow: 0 5px 3px rgb(226, 215, 215);
        }
      
      }
      }
    
  }
}

</style>