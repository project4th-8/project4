<template>
  <div class="messageA">
    <div class="search">
      <div><input @focus="toall" type="text" placeholder="请点击搜索"></div>
    </div>
    <ul class="memu">
      <li ><div class="aite"><img src="../../public/img/jdtIMG/aite.png" alt=""></div><div class="jilu"><span><router-link to="/comments">@我的</router-link></span><div>{{comlists.length}}</div></div> <img src="../../public/img/jdtIMG/left.png" alt=""></li>
      <li @click="clearA"><div class="liuyan"><img src="../../public/img/jdtIMG/liuyan.png" alt=""></div><div class="jilu"><span><router-link to="/commentstwo">评论</router-link></span><div>{{plists.length}}</div></div><img src="../../public/img/jdtIMG/left.png" alt=""></li>
       <li><div class="zan"><img src="../../public/img/jdtIMG/zan.png" alt=""></div><div class="jilu"><span><router-link to="/fabulous">赞</router-link></span><div >{{zlists.length}}</div></div><img src="../../public/img/jdtIMG/left.png" alt=""></li>
    </ul>
    <ul class="chat_list">
      <li v-for="(item,index) in msgList" :key="index">
        <div class="tou"><img :src="item.url" alt=""  class="touimg"></div>
        <div class="nei" @click="tochat(index)">
           <h4 @click="test">{{item.hisname}}</h4> 
           <p>{{item.text}}</p>
           </div>
          <div class="wei">
            <span>{{item.time}}</span>
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
    hisname:"小东西",
    time:"12:30",
    text:"文章内容，显示不完变成省略号",
    count:"1",
    Number:"1"
},
 {
    url: require("../assets/img/1.jpg"),
    hisname:"大东西",
    time:"13：40",
    text:"文章内容，显示不完变成省略号",
    count:"1",
    Number:"1"
},
 {
    url: require("../assets/img/1.jpg"),
    hisname:"气死人",
    time:"22：40",
    text:"文章内容，显示不完变成省略号",
    count:"1",
    Number:"1"
},
 {
    url: require("../assets/img/1.jpg"),
    hisname:"真的气人",
    time:"6:30",
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
      comlists:[],
      data:false,
      plists:[],
      zlists:[]
    }
  },
  created(){
    this.msgList = msgList;

    this.axios.post("/findAllAdvice").then(res => {
    
      // for(var i =0;i<res.data.data.length;i++){
      this.comlists = res.data.data.filter(function(item) {
        return item.datestate == 4 && item.isRead == 0;
      });

 
    });
    this.axios.post("/findAllAdvice").then(res => {
  
      // for(var i =0;i<res.data.data.length;i++){
      this.plists = res.data.data.filter(function(item) {
        return item.datestate == 5 && item.isRead == 0;
      });
    });
    this.axios.post("/findAllAdvice").then(res => {

      // for(var i =0;i<res.data.data.length;i++){
      this.zlists = res.data.data.filter(function(item) {
        return item.datestate == 2 && item.isRead == 0;
      });
    });
  },


  methods:{
    clearA(){
     this.plists.length=0
    },

    tochat(index){
      sessionStorage.setItem("msList",JSON.stringify(msgList[index]));
      // sessionStorage.setItem('userName',this.msgList[index].hisname)
      this.$router.push("/chat")
    },
    toall(){
       this.$router.push("/msgsearch")
      //  sessionStorage.setItem('shuzu',this.msgList)
    },
    test(){
    
     
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
    height: 40px;
    width: 100%;
    position: relative;
    background-color: rgb(230, 225, 225);
    
    div{
      height: 30px;
      width: 80%;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      
      input{
        font-size: 14px;
        width: 100%;
       height: 30px;
       line-height: 30px;
        position: absolute;
        left: 0;
        top: 0;
        border: 1px solid black;
        border-radius: 5px;
        outline: none;
        text-indent: 2em;
      }   
    }
  }
  .memu{
    margin: 10px 5px;
   li {
    height: 40px;
    width: 90%;
    margin: 0 auto;
    margin-top:10px;
    font-size: 14px;
    border-bottom: 1px solid rgb(172, 169, 169);
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .aite{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgb(65, 192, 241);
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 25px;
        height: 25px;
      }
    }
    .jilu{
      width: 70%;
      height: 100%;
      display: flex;
        justify-content: space-between;
        align-items: center;
      div{
        width: 25px;
        height: 25px;
        border-radius: 50%;
         background: rgb(231, 62, 56);
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
     .liuyan{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgb(24, 141, 63);
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 30px;
        height: 30px;
      }
    }
    }
     .zan{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgb(230, 160, 56);
      display: flex;
      justify-content: center;
      align-items: center;
      img{
        width: 30px;
        height: 30px;
      }
    }
  }
  .chat_list{
    li{
      height: 40px;
      width: 90%;
      margin: 0 auto;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
       align-items: center;
      .tou{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        
        .touimg{
          width: 40px;
          height:40px;
          border-radius: 50%;

        }
      }
      .nei{
        margin-left: 2%;
        width: 80%;
        height: 100%;
        border-bottom: 1px solid rgb(172, 169, 169);
        h4{
          font-size: 16px
        }
        p{
          font-size: 14px;
        }
      }
      .wei{
        width: 15%;
        text-align: right;
        //  display: flex;
        //   justify-content: center;
        //   align-items: center;
        //   flex-wrap: wrap;
        span{
          font-size: 12px;

        }
        .mes_count{
          font-size: 14px;
          width: 20px;
          height: 20px;
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