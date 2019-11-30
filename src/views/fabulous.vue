<template>
  <div class="fabulous">
    <div class="top">
      <div @click="tomessage"></div>
      <p>赞</p>
    </div>
    <ul>
      <li>
        <div class="title">
          <img src="../assets/img/1.jpg" alt="">
          <p><a href="javascript:;">某某某</a> 赞了</p>
          <span>12:00</span>
        </div>
        <div class="content">
          <h4>这是文章标题</h4>
          <div>
            这是文章内容
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

    }
  },
   created(){
    // this.comlists = comlists
  },
  /* components:{
    [Skeleton.name]:Skeleton,
    [List.name]:List
  }, */
  methods:{
    tomessage(){
      this.$router.replace('/message')
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
  .top{
    height: 30px;
    font-size: 14px;
    display: flex;
    align-items: center;
    border-bottom:1px solid rgb(150, 148, 148);
    // overflow: hidden;
    div{
      width: 15px;
      height: 15px;
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
    font-size: 8px;
  }
  ul{
    margin-top: 10px;
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
         width: 30px;
         height: 30px;
         border-radius: 50%;
       }
       p{
         height: 30px;
        display: flex;
        justify-content: flex-start;
        align-items:flex-end;
         width: 70vw;
       }
     }
     .content{
       p{
        //  width: 100%;
         height: 20px;
        //  line-height: 40px;

       }
       div{
         height: 30px;
         width: 100%;
         background: #000;
       }
     }
    }
  }
 
}
</style>