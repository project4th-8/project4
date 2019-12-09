<template>
  <div class="systemNotifications">
    <ul>
      <li v-for="(item,index) in slists" :key="index">
        <img src="../assets/img/1.jpg" alt="">
        <div>{{item.msg}}</div>
        <span>{{item.adviceTime}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
/* var tongzhi = [
{
}
] */
export default {
  name:"systemNotifications",
  data(){
    return{
      slists:[],
    }
  },
  created(){
    this.axios.post("/findAllAdvice")
    .then(res=>{
 
        this.slists = res.data.data.filter(function(item){
        return item.datestate == 0 
        });
      
    })
  }
  
}
</script>
<style lang="less" scoped>
.systemNotifications{
  ul li{
    list-style: none;
    font-size: 16px;
  }
  ul{
    margin-top: 20px;
    width: 100%;
    li{
      width: 100%;
      height: 60px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        // background: #000;
      }
      div{
        font-size: 14px;
        height:60px;
        width: 70vw;
      }
      span{
        text-align: center;
        height: 40px;
        width: 60px;
        font-size: 14px;
      }
    }
  }
}
</style>