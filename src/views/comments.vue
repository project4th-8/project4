<template>
  <div class="comments">
    <div class="top">
      <div @click="tomessage"></div>
      <p>@我的</p>
    </div>
    <ul class="comments_list">
      <li v-for="(item,index) in comlists " :key="index">
        <div class="con-top">
          <div class="hisimg"><img :src="item.hisimgurl" alt=""></div>
          <div class="hismsg">
            <h4>{{item.hisname}}</h4>
            <span>{{item.time}}</span>
          </div>
          <button @click="tohui">回复</button>
        </div>
        <p class="tomine"><a href="./about">@{{item.myname}}</a></p>
        <div class="con-button">
          <h4>{{item.title}}</h4>
          <div>
            <p class="van-ellipsis">
              {{item.content}}
            </p>
          </div>
        </div>
      </li>
    </ul>
    <!-- <van-skeleton title avatar :row="2" /> -->
  </div>
 
</template>
<script>
import { Skeleton , List} from 'vant';
var comlists =[
  {
    hisimgurl:require("../assets/img/1.jpg"),
    hisname:"他的用户名",
    time:"10:30",
    myname:"我的用户名",
    title:"这是文章标题",
    content:"文章内容超出部分不显示"
  },
   {
     hisimgurl:require("../assets/img/1.jpg"),
    hisname:"他的用户名",
    time:"刚刚",
    myname:"我的用户名",
    title:"这是文章标题",
    content:"文章内容超出部分不显示"
  },
]
export default {
  name:"comments",
  data(){
    return{
      comlists
    }
  },
   created(){
    this.comlists = comlists
  },
  components:{
    [Skeleton.name]:Skeleton,
    [List.name]:List
  },
  methods:{
    tomessage(){
      this.$router.replace('/message')
    },
    tohui(){
    this.$router.replace('/replayt')

    },
    
  }
}
</script>
<style lang="less" scoped>
.comments{
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
  .comments_list{
    margin: 10px 5px;
    li{
      width: 100%;
      font-size: 8px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin: 10px 0;
      
      .con-top{
        width: 90%;
        height:30px;
        display: flex;
        margin: 0 auto;
    
        justify-content: space-between;
        align-items: center;
        .hisimg{
          height: 30px;
          width: 30px;
          img{
            height: 30px;
            width: 30px;
            border-radius: 50%;
          }
        }
        .hismsg{
          width: 80%;
          height: 100%;
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        button{
          width: 40px;
          height: 15px;
          border-radius: 40%;
          border: none;
          outline: none;
        }

      }
      .tomine{
        width: 90%;
        margin: 0 auto;
      }
      .con-button{
        width: 90%;
        margin: 0 auto;
        background: rgb(233, 230, 230);
        padding: 5px;
        .van-ellipsis{
          width: 80%;
        }
      }
    }
  }
}
</style>