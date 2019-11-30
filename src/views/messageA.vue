<template>
  <div class="messageA">
    <div class="search">
      <div><input @focus="toall" type="text" placeholder="请点击搜索"></div>
    </div>
    <ul class="memu">
      <li><div class="aite"><img src="../../public/img/jdtIMG/aite.png" alt=""></div><div class="jilu"><span><a href="/comments">@我的</a></span><div>{{msgList.length}}</div></div> <img src="../../public/img/jdtIMG/left.png" alt=""></li>
      <li><div class="liuyan"><img src="../../public/img/jdtIMG/liuyan.png" alt=""></div><div class="jilu"><span><a href="/commentstwo">评论</a></span><div>{{msgList.length}}</div></div><img src="../../public/img/jdtIMG/left.png" alt=""></li>
       <li><div class="zan"><img src="../../public/img/jdtIMG/zan.png" alt=""></div><div class="jilu"><span><a href="/fabulous">赞</a></span><div>{{msgList.length}}</div></div><img src="../../public/img/jdtIMG/left.png" alt=""></li>
    </ul>
    <ul class="chat_list">
      <li v-for="(item,index) in msgList" :key="index">
        <div class="tou"><img :src="item.url" alt=""  class="touimg"></div>
        <div class="nei" @click="tochat">
           <h4>{{item.hisname}}</h4> 
           <p>{{item.text}}</p>
           </div>
          <div class="wei">
            <p><span>{{item.time}}</span></p>
            <div class="mes_count">{{item.count}}</div>
          </div>
      </li>
    </ul>
  </div>
</template>
<script>
var msgList = [
  {
    url: require("../assets/img/1.jpg"),
    hisname:"这是他的姓名",
    time:"12:30",
    text:"文章内容，显示不完变成省略号",
    count:"2",
    Number:"0"
},
 {
    url: require("../assets/img/1.jpg"),
    hisname:"这是er的姓名",
    time:"12:30",
    text:"文章内容，显示不完变成省略号",
    count:"1",
    Number:"1"
}
]
export default {
  name:"messageA",
  data(){
    return{
      msgList:[],
      hisname:'',
    }
  },
  created(){
    this.msgList = msgList
  },


  methods:{
    tochat(){
      console.log(this.msgList[0].hisname)
      this.$router.replace("/chat")
    },
    toall(){
       this.$router.replace("/msgsearch")
    }
  }
}
</script>
<style lang="less" scoped>
.messageA{
  ul li {
    list-style: none;
  }
  width: 100%; 
  .search{
    height: 30px;
    width: 100%;
    position: relative;
    background-color: rgb(230, 225, 225);
    
    div{
      height: 20px;
      width: 80%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      
      input{
        font-size: 8px;
        width: 100%;
       height: 20px;
       line-height: 20px;
        position: absolute;
        left: 0;
        top: 0;
        border: 1px solid black;
        border-radius: 5px;
        outline: none;
        text-indent: 4em;
      }   
    }
  }
  .memu{
    margin: 10px 5px;
   li {
    height: 30px;
    width: 90%;
    margin: 0 auto;
    margin-top:5px;
    font-size: 8px;
    border-bottom: 1px solid rgb(172, 169, 169);
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .aite{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: rgb(65, 192, 241);
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 20px;
        height: 20px;
      }
    }
    .jilu{
      width: 80%;
      height: 100%;
      display: flex;
        justify-content: space-between;
        align-items: center;
      div{
        width: 20px;
        height: 20px;
        border-radius: 50%;
         background: red;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
     .liuyan{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: rgb(24, 141, 63);
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 20px;
        height: 20px;
      }
    }
    }
     .zan{
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: rgb(230, 160, 56);
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 20px;
        height: 20px;
      }
    }
  }
  .chat_list{
    li{
      height: 30px;
      width: 90%;
      margin: 0 auto;
      margin-bottom: 5px;
      display: flex;
      justify-content: space-between;
       align-items: center;
      .tou{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        
        .touimg{
          width: 30px;
          height:30px;
          border-radius: 50%;

        }
      }
      .nei{
        margin-left: 2%;
        width: 80%;
        height: 100%;
        border-bottom: 1px solid rgb(172, 169, 169);
        h4{
          font-size: 10px
        }
        p{
          font-size: 8px;
        }
      }
      .wei{
        width: 10%;
         display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        p{
          font-size: 8px;
        }
        .mes_count{
          font-size: 8px;
          width: 15px;
          height: 15px;
          background: red;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;

        }
      }
    }
  }
}
</style>