<template>
  <div class="account">
    <!-- 标题 -->
    <div class="title">
      <a href="/About">取消</a>
      <span>我的账号</span>
    </div>

    <!-- 用户信息 -->
    <div class="userinfo">
      <img src="../assets/head.jpg" alt="头像" />
      <div class="myinfo">
        <span class="username">用户名</span>
        <span class="iconfont icon-v" :class="{on: false}"></span>
        <span class="hr">|</span>
        <span class="score">积分</span>
        <span class="scorenum">0</span>
      </div>
    </div>

    <!-- 账号信息 -->
    <div class="myaccount">

      <!-- 账号说明 -->
      <div class="zhsm">
        <p>账号年龄：<span class="zhnl">{{accountAge}}</span>天</p>
        
        <div class="sjsm">
          <p class="tit">积分说明</p>
          <p class="sm">登录，+1积分</p>
          <p class="sm">发表一篇文章，+5积分</p>
          <p class="sm">发表一次评论，+3积分</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Progress } from 'vant';

export default {
  name: "account",
  data() {
    return {
      isLoading: false,
      show: false,
      jy: 20,
      zjy: 1000,
      accountAge: 0
    };
  },
  components: {
    [Progress.name]:Progress
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.account {
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

  .userinfo {
    width: 90%;
    height: 100px;
    background: white;
    margin: 55px auto 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    .myinfo {
      transform: translateX(-10px);
    }

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      box-shadow: 0 0px 2px rgb(88, 88, 88);
    }
    span {
      font-size: 16px;
    }
    .hr {
      margin: 0 10px;
    }
  }
}
.myaccount {
  width: 90%;
  height: 200px;
  background: white;
  margin: 15px auto 0;
  text-align: center;
  .level {
    margin-right: 10px;
  }
  span {
    font-size: 16px;
    color: orange;
    font-weight: bold;
  }
  .jd {
    margin-top: 20px;
  }
}
.zhsm {
  text-align: left;
  font-size: 18px;
  padding: 30px 20px;
  color: rgb(49, 49, 49);

  .zhnl {
    color: orange;
    font-weight: bold;
    margin-right: 5px;
  }
  .sjsm {
    margin-top: 30px;
    .tit {
      margin-bottom: 10px;
    }
    .sm {
      font-size: 15px;
    }
  }
}
.mtk {
  width: 80px;
  height: 30px;
  line-height: 35px;
  font-size: 14px;
  text-align: center;
  border-radius: 3px;
}
</style>