<template>
  <div class="commentstwo">
    <div class="top">
      <div @click="tomessage"></div>
      <p>评论</p>
      <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell>
      <van-popup v-model="show" position="top" :style="{ height: '20%' }">内容</van-popup>-->
    </div>
    <ul class="comments_list">
      <li v-for="(item,index) in comlists " :key="index">
        <div class="con-top">
          <div class="hisimg">
            <img :src="item.optionUser.imgs[0].imgUrl" alt />
          </div>
          <div class="hismsg">
            <h4>{{item.optionUser.userNickname}}</h4>
            <span>{{item.adviceTime}}</span>
          </div>
          <button @click="tohui(index)">回复</button>
        </div>

        <p class="tomine">
          <span>@{{huifuname}}{{huifu}}</span>
          <router-link to="./about">@{{myname}}</router-link>
          评论的内容
        </p>
        <div class="con-button">
          <h4>{{item.dynamic.dynamicTitle}}</h4>
          <div>
            <p class="van-ellipsis">{{item.dynamic.dynamicContent}}</p>
          </div>
        </div>
      </li>
    </ul>
    <!-- <van-skeleton title avatar :row="2" /> -->
  </div>
</template>
<script>
// import { Popup,Cell } from 'vant';
/* var comlists =[
  {
    id:1,
    hisimgurl:require("../assets/img/1.jpg"),
    hisname:"消防",
    time:"10:30",
    myname:"我的用户名",
    title:"这是文章标题",
    content:"文章内容超出部分不显示",
    comcont:"这是用户评论的内容"
  },
   {
     id:2,
     hisimgurl:require("../assets/img/1.jpg"),
    hisname:"公安",
    time:"刚刚",
    myname:"我的用户名",
    title:"这是文章标题",
    content:"文章内容超出部分不显示",
    comcont:"这是用户评论的内容"
  },
] */
export default {
  name: "commentstwo",
  data() {
    return {
      comlists: [],
      userId:'',
      myname:'',
      show: false,
      huifuname: "",
      huifu: ""
    };
  },
  created() {
    // var i = sessionStorage.getItem("名字");
    // sessionStorage.removeItem("名字");
    // this.huifuname = i;
    // var j = sessionStorage.getItem("回复");
    // sessionStorage.removeItem("回复");
    // this.huifu = j;
    this.userId = sessionStorage.getItem("userId");
    this.axios
      .post("/user/findOneById", {
        userId: this.userId
      })
      .then(res => {
        this.myname = res.data.data.userNickname;
      });
    this.axios.post("/findAllAdvice").then(res => {
   
      // for(var i =0;i<res.data.data.length;i++){
      this.comlists = res.data.data.filter(function(item) {
        return item.datestate == 5;
      });
  
    });
  },
  // components:{
  //   [Cell.name]:Cell,
  //   [Popup.name]:Popup
  // },
  methods: {
    tomessage() {
      this.$router.push("/message");
    },
    tohui(index) {
      this.$router.push("/replay?id=" + this.comlists[index].id);
      // this.$router.push("/replay")
      // sessionStorage.setItem('userId',this.comlists[index].id)
    }
    /*  showPopup() {
      this.show = true;
    } */
  }
};
</script>
<style lang="less" scoped>
.commentstwo {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  a {
    color: rgb(50, 143, 250);
  }
  ul li {
    list-style: none;
  }
  width: 100%;
  .top {
    height: 40px;
    font-size: 18px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgb(150, 148, 148);
    // overflow: hidden;
    div {
      width: 20px;
      height: 20px;
      background: url(../assets/img/exit.png) no-repeat center;
      background-size: cover;
      margin-left: 20px;
    }
    p {
      width: 80%;
      text-align: center;
    }
  }
  .comments_list {
    // margin: 15px 10px;
    height:calc(100vh - 40px) ;
    overflow:scroll;
     z-index: 2000;
    background: rgb(255, 254, 254);
   
    li {
      width: 100%;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin: 10px 0;

      .con-top {
        width: 90%;
        height: 40px;
        display: flex;
        margin: 0 auto;

        justify-content: space-between;
        align-items: center;
        .hisimg {
          height: 40px;
          width: 40px;
          img {
            height: 30px;
            width: 30px;
            border-radius: 50%;
          }
        }
        .hismsg {
          width: 80%;
          height: 100%;
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
        button {
          width: 60px;
          height: 20px;
          border-radius: 40%;
          border: none;
          outline: none;
        }
      }
      .tomine {
        width: 90%;
        margin: 0 auto;
      }
      .con-button {
        width: 90%;
        margin: 0 auto;
        background: rgb(233, 230, 230);
        padding: 5px;
        .van-ellipsis {
          width: 80%;
        }
      }
    }
  }
}
</style>