<template>
  <div class="about">
    <div class="head">
      <!-- 头像 -->
      <a href="/informations" @islogin="changeLogin" :Login="Login">
        <div v-show="Login" class="headImg">
          <img src="../assets/logo.png" alt="头像">
        </div>
      </a>
      <!-- 登录后 -->
      <!-- 关注粉丝 -->
      <div v-if="Login" class="info">
        <p><a href="/informations">用户名</a></p>
        <span><a href="/attention">关注</a> <span>{{attentionNum}}</span></span>
        <span><a href="/myfans">粉丝</a> <span>{{fansNum}}</span></span>
      </div>

      <!-- 未登录 -->
      <div v-else class="noLogin">
        <router-link to="/Login">登录/注册</router-link>
      </div>

      <!-- 申请认证 -->
      <div class="authentication">
        <a href="/authentication">申请认证</a>
      </div>
    </div>

    <!-- 功能列表 -->
    <div class="function">
      常用
    </div>

    <!-- 功能详情 -->
    <div class="functionlist">
      <div>
        <span class="iconfont icon-sixin"></span>
        <span><a href="/">私信</a></span>
      </div>
      <div>
        <span class="iconfont icon-shoucang"></span>
        <span><a href="/">收藏</a></span>
      </div>
      <div>
        <span class="iconfont icon-caogaoxiang"></span>
        <span><a href="/">草稿箱</a></span>
      </div>
    </div>
    <div class="functionlist">
      <div>
        <span class="iconfont icon-xiaoxi"></span>
        <span><a href="/">消息通知</a></span>
      </div>
      <div>
        <span class="iconfont icon-dongtaitixing"></span>
        <span><a href="/dynamic">历史动态</a></span>
      </div>
      <div>
        <span class="iconfont icon-comment"></span>
        <span><a href="/comment">历史评论</a></span>
      </div>
    </div>
    <div class="functionlist">
      <div>
        <span class="iconfont icon-jijin"></span>
        <span><a href="/">自选基金</a></span>
      </div>
      <div>
        <span class="iconfont icon-zhanghao"></span>
        <span><a href="/account">账号信息</a></span>
      </div>
      <div>
        <span class="iconfont icon-17"></span>
        <span><a href="/safety">安全设置</a></span>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vue'

export default {
  name: "about",
  data: function() {
    return {
      attentionNum: 1,
      fansNum: 1,
      Login: false
    }
  },
  methods: {
    changeLogin() {
      this.isLogin = false;
      console.log(this.isLogin);
    },
    // ...mapActions([
    //   "requestInfo"
    // ])
    // getinfo() {
    //   this.axios.post('/user/findAllUserInfo')
    //   .then(res => {
    //     console.log(res.data);
    //   })
    // }
  },
  created() {
    this.attentionNum = 2;
    this.fansNum = 2;
    this.Login = this.$store.state.isLogin;

    // this.getinfo();
  }
}
</script>

<style lang="less" scoped>
@import "../assets/font/personfont/iconfont.css";

  .about {
    overflow: hidden;
    width: 100%;
    background: rgb(240, 240, 240);
  }
  .head {
    width: 100%;
    height: 80px;
    background: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .headImg {
      overflow: hidden;
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      border-radius: 50%;
      border: 1px solid #ddd;

      img{
        width: 60px;
        height: 60px;
      }
    }
    .info {
      width: 180px;
      height: 45px;
      font-size: 16px;
      
      p {
        font-size: 22px;
      }
    }
    .noLogin {
      transform: translateX(-70px);
      font-size: 24px;
    }
    span {
      font-size: 14px;
      margin-right: 10px;
    }
    .authentication {
      width: 80px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      font-size: 14px;
      color: red;
      transform: translateX(22px);
      border-radius: 10px;
      background: rgb(247, 245, 245);
      a {
        color: red;
      }
      &:active {
        background: rgb(233, 233, 233);
      }
    }
  }
  .functionlist,
  .function {
    width: 100%;
    height: 50px;
    margin-top: 5px;
    border-bottom: 1px solid rgb(236, 236, 236);
    background: white;
    font-size: 16px;
    line-height: 50px;
    text-indent: 15px;
  }
  .functionlist {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 15px;
    height: 60px;
    line-height: 60px;
    margin: 0;
    border-bottom: 1px solid rgb(236, 236, 236);
    div {
      width: 120px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      transform: translateX(-12px);
    }
    .iconfont {
      font-size: 18px;
    }
    span {
      margin-left: 5px;
      &:active {
        color: rgb(165, 165, 165);
      }
    }
  }
</style>
