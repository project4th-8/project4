<template>
  <div class="followNotification">
    <ul>
      <li v-for="(item,index) in lists" :key="index">
       <p> <i>{{item.optionUser.userNickname}}&nbsp;&nbsp;关注了你</i> <span>{{item.adviceTime}}</span></p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:"followNotification",
  data(){
    return{
      lists:[],
      flists:[]
    }
  },
  created(){
    this.axios.post("/findAllAdvice")
    .then(res=>{
     
        this.lists = res.data.data.filter(function(item){
        return item.datestate == 1 
        });
    })
  }
}
</script>
<style lang="less" scoped>
  .followNotification{
    ul li {
      list-style: none;
      margin:0 auto;
      margin-top: 15px;
      width: 90vw;
      font-size: 16px;
     p{
       height: 40px;
       line-height: 40px;
       width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        i{
        width: 80%;
        color: rgb(236, 136, 22);
        font-weight: 500;
      }
        span{
          height: 40px;
          width: 80px;
          font-size: 14px;
        }
     }
    }
  }
</style>