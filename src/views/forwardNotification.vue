<template>
  <div class="forwardNotification">
    <ul>
      <li>
        <div class="title">
          <img src="../assets/img/1.jpg" alt="">
          <p><a href="javascript:;">某某某</a> 转发了</p>
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
  </div>
</template>
<script>
export default {
  name:"forwardNotification",

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
         width: 70vw;
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
         height: 40px;
         width: 100%;
         background: #000;
       }
     }
    }
  }
}
</style>