<template>
  <div class="fabulous">
    <div class="top">
      <div @click="tomessage"></div>
      <p>赞</p>
    </div>
    <ul class="booton">
      <li v-for="(item,index) in lis" :key="index">
        <div class="title">
          <img :src="item.optionUser.imgs[0].imgUrl" alt="">
          <p><a href="javascript:;">{{item.optionUser.userNickname}}</a> 赞了</p>
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
    
    <!-- <van-skeleton title avatar :row="2" /> -->
  </div>
 
</template>
<script>

export default {
  name:"fabulous",
  data(){
    return{
      lis:[],
    }
  },
   created() {
    this.axios.post("/findAllAdvice")
    .then(res=>{

      // for(var i =0;i<res.data.data.length;i++){
        this.lis = res.data.data.filter(function(item){
        return item.datestate==3 
        });
   
    })
  },
  /* components:{
    [Skeleton.name]:Skeleton,
    [List.name]:List
  }, */
  methods:{
    tomessage(){
      this.$router.push('/message')
    }
  }
}
</script>
<style lang="less" scoped>
.fabulous{
  a{
    color: rgb(50, 143, 250)
  }
   ul li {
    list-style: none;
  }
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  // align-items: center;
  
  .top{
    height: 40px;
    font-size: 18px;
    display: flex;
    align-items: center;
    border-bottom:1px solid rgb(150, 148, 148);
    // overflow: hidden;
    div{
      width: 20px;
      height: 20px;
      background: url(../assets/img/exit.png) no-repeat center;
      background-size: cover;
      margin-left: 20px;
    }
    p{
      width: 80%;
      text-align: center
    }
  }
  ul li{
    list-style: none;
    font-size: 14px;
  }
  .booton{
    height:calc(100vh - 40px) ;
    overflow:scroll;
    background: rgb(255, 254, 254);
    z-index: 2000;
    margin-top: 20px;
    width: 100%;
    li{
      border-bottom:1px solid black;
      // height: 60px;
      width: 90%;
      // height: 60px;
      margin: 0 auto;
     .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
       img{
         width: 30px;
         height: 30px;
         border-radius: 50%;
       }
       p{
         width: 50vw;
         height: 40px;
        display: flex;
        justify-content: flex-start;
        align-items:flex-end;
         width: 70vw;
       }
       span{
         font-size: 12px;
         width: 80px;
         color: rgb(168, 179, 179);
       }
     }
     .content{
       p{
        //  width: 100%;
         height: 30px;
        //  line-height: 40px;

       }
       div{
         height: 40px;
         width: 100%;
            overflow: hidden;
           white-space: nowrap;
          text-overflow: ellipsis
       }
     }
    }
  }
 
}
</style>