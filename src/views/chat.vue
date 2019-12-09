<template>
  <div class="chat">
    <div class="top">
      <div class="topImg" @click="tomessage"></div>
      <h4>{{msList.hisname}}</h4>
      <div class="clear" @click="clears">清除历史</div>
    </div>
    <ul id="content">
      <li v-for="(item,index) in lists" :key="index">
        <p>{{item.sendTime}}</p>
        <div class="chatK">
          <div>{{item.rong}}</div>
          <img :src="head" alt />
        </div>
      </li>
    </ul>
    <div class="button">
      <div class="wet"></div>
      <input type="text" v-model="nei" placeholder="请输入聊天内容" />
      <img @click="click" src="../assets/img/send.png" alt />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import moment from "moment";
var lists = [];
export default {
  name: "chat",
  data() {
    return {
      nei: "",
      hisname: "",
      lists: [],
      msList:[],
      head:"",
    };
  },
   computed: {
    ...mapState([
      "userInfo"
    ])
  },
  created() {
    // this.head = this.userInfo.imgs[0].imgUrl;
    this.lists = lists;
    this.getParams();
     this.msList = JSON.parse(sessionStorage.getItem("msList"));
     sessionStorage.removeItem("msList")
  },
  
  methods: {
    clears() {
      this.lists.splice(0, this.lists.length);
    },
    click() {
      if(this.nei ==""){
        console.log()
      }else{

         var rong = this.nei;
      var data = new Date();
      var sendTime = moment(data).format("YYYY-MM-DD hh:mm:ss");
 
      var username = "haha";
      this.lists.push({
        sendTime,
        username,
        rong
      });
      this.nei = ""
      }
    },
    cleark() {},
    getParams() {
      // 取到路由带过来的参数
      var routerParams = this.$route.params.hisname;
      // 将数据放在当前组件的数据内
      this.hisname = routerParams;
    },
    tomessage() {
      this.$router.push("/message");
      sessionStorage.removeItem("userName");
    }
  },
  updated: function() {
    this.$nextTick(function() {
      var div = document.getElementById('content');
      div.scrollTop = div.scrollHeight;
    });
  },
  watch: {
    $route: "getParams"
  }
};
</script>
<style lang="less" scoped>
.chat {
  ul li {
    list-style: none;
  }
  height: 100vh;
  width: 100vw;
  font-size: 16px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .top {
    border-bottom: 1px solid rgb(182, 180, 182);
    height: 6%;
    width: 100%;
    display: flex;

    align-items: center;
    justify-content: space-between;
    .topImg {
      width: 20px;
      height: 20px;
      margin-left: 5vw;
      background: url(../assets/img/exit.png) no-repeat center;
      background-size: cover;
    }
    h4 {
      font-size: 16px;
      font-weight: 600;
      width: 65vw;
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
    .clear {
      width: 15vw;
      height: 40px;
      line-height: 40px;
      text-align: center;
      margin-right: 2vw;

      font-size: 14px;
    }
  }
  #content {
    font-size: 14px;
    border-bottom: 1px solid rgb(182, 180, 182);
    height: 84%;
    overflow: scroll;
    width: 100%;
    li {
      height: 60px;
      width: 90vw;
      margin: 0 auto;
      
      p {
        margin-top: 15px;
        width: 100%;
        height: 20px;
        text-align: center;
        line-height: 20px;
      }
      .chatK {
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          height: 40px;
          width: 40px;
          border-radius: 50%;
        }
        div {
          height: auto;
          white-space: normal;
          word-break: break-all;
          word-wrap: break-word;
          padding: 5px 10px;
          width: 80%;
          background: rgb(223, 215, 215);
          border-radius: 15px;
          border-top-right-radius: 80px;
        }
      }
    }
  }
  .button {
    background: rgb(211, 207, 207);
    height: 10%;
    width: 100%;
    z-index: 1000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .wet {
      width: 20px;
      height: 20px;
    }
    input {
      height: 30px;
      width: 80vw;
      line-height: 30px;
      text-indent: 2em;
      border: none;
    }
    img {
      height: 20px;
      width: 20px;
    }
  }
}
</style>