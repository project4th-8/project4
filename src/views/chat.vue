<template>
  <div class="chat">
    <div class="top">
      <div class="topImg" @click="tomessage"></div>
      <h4>{{hisname}}</h4>
      <div class="clear">清除历史</div>
    </div>
    <ul class="content">
      <li>
          <p>20:15</p>
         <div class="chatK">
            <div>

            </div>
          <img src="../assets/img/1.jpg" alt="">
         </div>
      </li>
      <li>
          <p>10:15</p>
         <div class="chatK">
            <div>

            </div>
          <img src="../assets/img/1.jpg" alt="">
         </div>
      </li>
    </ul>
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
  font-size: 16px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .top{
   border-bottom: 1px solid rgb(182,180,182);
    height: 6%;
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
      font-size: 16px;
      font-weight: 600;
      width: 65vw;
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
    .clear{
      width: 15vw;
      height:40px;
      line-height: 40px;
      text-align: center;
      margin-right: 2vw;
  
      font-size: 14px;

    }
    
  }
  .content{
     font-size: 14px;
    border-bottom: 1px solid rgb(182,180,182);
    height: 84%;
    width: 100%;
    li{
     
      height:80px ;
      width: 90vw;
      margin: 0 auto;
       margin-top: 15px;
      p{
        width: 100%;
        height: 20px;
        text-align: center;
        line-height: 20px;
      }
     .chatK{
       height: 60px;
       display: flex;
       justify-content:space-between;
       align-items: center;
        img{
        height: 40px;
        width: 40px;
        border-radius: 50%;

      }
        div{
          height: 40px;
          width: 85%;
          background: rgb(223, 215, 215);
          border-radius: 15px;
          border-top-right-radius: 80px;


        }
     }
    }
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