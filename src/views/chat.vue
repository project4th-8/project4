<template>
  <div class="chat">
    <div class="top">
      <div class="topImg" @click="tomessage"></div>
      <h4>{{hisname}}</h4>
      <div class="clear">清除历史</div>
    </div>
    <div class="content">
    <ul>
      <li>

      </li>
    </ul>
    </div>
    <div class="button">
    <div class="wet">
      
     </div>
     <input type="text" placeholder="请输入聊天内容">
     <img src="../assets/img/send.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
    name: 'chat',
    data () {
      return {
        hisname:""
      }
    },
    created(){
       this.getParams();
       var i=sessionStorage.getItem("to");
       sessionStorage.removeItem('to');
      this.hisname = i;

    },
    methods: {
      getParams () {
        // 取到路由带过来的参数 
        var routerParams = this.$route.params.hisname
         // 将数据放在当前组件的数据内
        this.hisname = routerParams

      },
      tomessage(){
        this.$router.replace('/message')
      }
    },
    watch:{
      '$route': 'getParams'
    }
}
</script>
<style lang="less" scoped>
.chat{
  ul li{
    list-style: none;
  }
  height: 100vh;
  width: 100vw;
  font-size: 10px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .top{
   border-bottom: 1px solid rgb(182,180,182);
    height: 8%;
    width: 100%;
   display: flex;
   
    align-items: center; 
     justify-content: space-between;
    .topImg{
      width: 20px ;
      height: 20px;
      margin-left: 5vw;
      background:url(../assets/img/exit.png) no-repeat center;
      background-size: cover;
    }
    h4{
      font-size: 10px;
      font-weight: 600;
      width: 65vw;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
    .clear{
      width: 15vw;
      height:30px;
      line-height: 30px;
      text-align: center;
      margin-right: 2vw;
  
      font-size: 12px;

    }
    
  }
  .content{

    border-bottom: 1px solid rgb(182,180,182);
    height: 82%;
    width: 100%
  }
  .button{
    background: rgb(211, 207, 207);
    height: 10%;
    width: 100%;
    z-index: 1000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .wet{
      width: 20px ;
      height: 20px;
    }
    input{
      height: 30px;
     width: 80vw;
      line-height: 30px;
      text-indent: 2em;
      border: none;
    }
    img{
      height: 20px;
      width: 20px;
    }
  }
}
</style>