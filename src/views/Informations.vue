<template>
  <div class="myinfo">
    <!-- 标题 -->
    <div class="title">
      <router-link :to="toOldRoute">取消</router-link>
      <span>编辑资料</span>
    </div>
    <!-- 详细资料 -->
    <div class="infolist">
      <div class="info">
        <span>头像</span>
        <a href="javascript:;" @click="setHeadImg">
          <img :src="userInfo.imgs[0].imgUrl" alt="头像" />
        </a>
      </div>
      <div class="info" @click="setUser">
        <span>昵称</span>
        <a href="javascript:;" class="infoL">{{userInfo.userName}}</a>
      </div>
      <div class="info" @click="setSex">
        <span>性别</span>
        <a href="javascript:;" class="infoL">{{userInfo.userSex}}</a>
      </div>
      <div class="info" @click="setBirthday">
        <span>生日</span>
        <a href="javascript:;" class="infoL">{{userInfo.userBirth}}</a>
      </div>
      <div class="info" @click="setEmail">
        <span>邮箱</span>
        <a href="javascript:;" class="infoL">{{userInfo.userEmail}}</a>
      </div>
      <div class="info" @click="setSign">
        <span>个性签名</span>
        <a href="javascript:;" class="infoL">{{userInfo.userSign.substr(0,10) + '...'}}</a>
      </div>
    </div>

    <!-- 退出登录 -->
    <div class="quitLogin">
      <button type="button" @click="quitLogin">退出登录</button>
    </div>

    <!-- 模态框 -->
    <div v-show="ismb" class="motaikuang">
      <component :is="com" @changeCom="changeCom"></component>
    </div>
  </div>
</template>

<script>
import SetHeadImg from "../components/SetHeadImg";
import SetUser from "../components/SetUser";
import SetSex from "../components/SetSex";
import SetEmail from "../components/SetEmail";
import SetSign from "../components/SetSign";
import SetBirthday from "../components/SetBirthday";
import { mapState } from "vuex";

export default {
  name: "informations",
  data: function() {
    return {
      ismb: false,
      com: "",
      myInfo: {},
      mysign: ""
    };
  },
  components: {
    SetHeadImg,
    SetUser,
    SetSex,
    SetEmail,
    SetSign,
    SetBirthday
  },
  computed: {
    ...mapState(["userInfo"]),
    toOldRoute() {
      var oldroute = sessionStorage.getItem("oldroute") ? sessionStorage.getItem("oldroute") : "/About";
   
      sessionStorage.removeItem("oldroute");
      return oldroute;
    }
  },
  methods: {
    setHeadImg() {
      this.ismb = true;
      this.com = "SetHeadImg";
    },
    setUser() {
      this.ismb = true;
      this.com = "SetUser";
    },
    setSex() {
      this.ismb = true;
      this.com = "SetSex";
    },
    setBirthday() {
      this.ismb = true;
      this.com = "SetBirthday";
    },
    setEmail() {
      this.ismb = true;
      this.com = "SetEmail";
    },
    setSign() {
      this.ismb = true;
      this.com = "SetSign";
    },
    changeCom(com) {
      this.ismb = false;
      this.com = com;
    },
    quitLogin() {
      this.$router.replace("/Login");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("dynamicId");
    }
  },
  created() {
 
   
  }
};
</script>

<style lang="less" scoped>
.myinfo {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: rgb(247, 247, 247);

  .title {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: white;
    box-shadow: 0 1px 1px rgb(236, 236, 236);

    a {
      font-size: 14px;
      color: rgb(92, 92, 92);
      position: absolute;
      left: 10px;
      top: 0;
      &:active {
        color: rgb(233, 233, 233);
      }
    }
    span {
      font-size: 18px;
    }
  }
  .infolist {
    width: 100%;
    box-shadow: 0 -1px 1px rgb(236, 236, 236);
    margin-top: 55px;
    background: white;

    .info {
      width: 100%;
      height: 40px;
      border-bottom: 1px solid rgb(236, 236, 236);
      font-size: 16px;
      line-height: 40px;
      text-indent: 10px;

      span {
        float: left;
      }
      img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 1px solid #ddd;
        float: right;
        margin: 6px 10px 0 0;
      }
      .infoL {
        float: right;
        font-size: 13px;
        margin-right: 10px;
        color: rgb(92, 88, 88);
      }
    }
  }
}

.quitLogin {
  width: 100%;
  height: 40px;
  margin-top: 5px;
  button {
    width: 100%;
    height: 100%;
    background: white;
    border: none;
    outline: none;
    font-size: 17px;
    box-shadow: 0 0 1px #ddd;
  }
}

.motaikuang {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  font-size: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .setHeadImg {
    width: 100px;
    height: 40px;
    border: 1px solid black;
  }
}
</style>