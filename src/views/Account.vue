<template>
  <div class="account">
    <!-- 标题 -->
    <div class="title">
      <router-link to="/About">取消</router-link>
      <span>我的账号</span>
    </div>

    <!-- 用户信息 -->
    <div class="userinfo">
      <div class="myhead">
        <img :src="userInfo.imgs[0].imgUrl" alt="头像" />
      </div>
      <div class="myinfo">
        <span class="username"><router-link to="/informations">{{userInfo.userName}}</router-link></span>
        <span class="iconfont icon-v" :class="{on: userInfo.inMaster==1}"></span>
        <span class="hr">|</span>
        <span class="score">积分</span>
        <span class="scorenum">{{userInfo.integrals[0]}}</span>
      </div>
    </div>

    <!-- 账号信息 -->
    <div class="myaccount">

      <!-- 账号说明 -->
      <div class="zhsm">
        <p>账号年龄：<span class="zhnl">{{accountAge}}</span>天</p>
        
        <div class="sjsm">
          <p class="tit">积分说明</p>
          <p class="sm">登录，+2积分</p>
          <p class="sm">发表一篇文章，+5积分</p>
          <p class="sm">发表一次评论，+3积分</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Progress } from 'vant';
import { mapState } from 'vuex'

export default {
  name: "account",
  data() {
    return {
      isLoading: false,
      show: false,
      myhead: ""
    };
  },
  computed: {
    ...mapState([
      "userInfo",
      "accountAge"
    ])
  },
  components: {
    [Progress.name]:Progress
  },
  methods: {

  },
  created() {
    sessionStorage.setItem("oldroute",this.$route.fullPath);
    console.log(this.userInfo);
  } 
};
</script>

<style lang="less" scoped>
.icon-v {
  color: #ddd;
}
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
      transform: translateX(-4px);
      .scorenum {
        font-size: 15px;
        font-weight: bold;
        margin-left: 5px;
        color: orange;
      }
    }
    .myhead {
      width: 60px;
      height: 60px;
      overflow: hidden;
      border-radius: 50%;
      box-shadow: 0 0px 2px rgb(88, 88, 88);
      margin-top: 5px;
      img {
        width: auto;
        height: 60px;
      }
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