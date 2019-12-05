<template>
  <div class="forwardNotification">
    <ul>
      <li v-for="(item,index) in flists" :key="index">
        <div class="title">
          <img src="../assets/img/1.jpg" alt="">
          <p><router-link to="">{{item.optionUser.userNickname}}</router-link> 转发了</p>
          <span>{{item.adviceTime}}</span>
        </div>
        <div class="content">
          <h4>{{item.dynamic.dynamicTitle}}</h4>
          <div>
            {{item.dynamic.dynamicContent}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:"forwardNotification",
  data(){
    return{
      flists:[]
    }
  },
 created(){
    this.axios.post("/findAllAdvice")
    .then(res=>{
      console.log(res.data.data)
      // for(var i =0;i<res.data.data.length;i++){
        this.flists = res.data.data.filter(function(item){
        return item.datestate == 3 
        });
        console.log(this.flists)
    })
  }
}
</script>
<style lang="less" scoped>
.forwardNotification{
   ul li{
    list-style: none;
    font-size: 16px;
  }
  ul{
    margin-top: 15px;
    width: 100%;
    li{
      // height: 60px;
      width: 90%;
      // height: 60px;
      margin: 0 auto;
     .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
       img{
         width: 40px;
         height: 40px;
         border-radius: 50%;
       }
       p{
         height: 40px;
        display: flex;
        justify-content: flex-start;
        align-items:flex-end;
         width: 50vw;
       }
     }
     .content{
       h4{
         margin-top: 5px;
         font-size: 16px;
       }
       p{
        //  width: 100%;
         height: 30px;
        //  line-height: 40px;

       }
       div{
         font-size: 14px;
         height: 40px;
         width: 100%;
         overflow: hidden;
         white-space: nowrap;
         text-overflow: ellipsis;
        //  background: #000;
       }
     }
    }
  }
}
</style>