<template>
  <div class="comments">
    <div class="top">
      <div @click="tomessage"></div>
      <p>@我的</p>
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
          <button @click="tohui">回复</button>
        </div>
        <p class="tomine">
          <router-link to="./about">@{{myname}}</router-link>
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
import { Skeleton, List } from "vant";
// var comlists = [];
export default {
  name: "comments",
  data() {
    return {
      comlists: [],
      userId:'',
      myname:''
    };
  },
  created() {
    this.userId = sessionStorage.getItem('userId')
    this.axios.post("/user/findOneById",{
      userId:this.userId
    })
    .then(res=>{
      this.myname = res.data.data.userNickname
    })
    this.axios.post("/findAllAdvice")
    .then(res=>{
      console.log(res.data.data)
      // for(var i =0;i<res.data.data.length;i++){
        this.comlists = res.data.data.filter(function(item){
        return item.datestate==4 
        });
        console.log(this.comlists)
    })
  },
  components: {
    [Skeleton.name]: Skeleton,
    [List.name]: List
  },
  methods: {
    tomessage() {
      this.$router.push("/message");
    },
    tohui() {
      this.$router.push("/replayt");
    }
  }
};
</script>
<style lang="less" scoped>
.comments {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
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