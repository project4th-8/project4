<template>
  <div class="authentication">
    <!-- 标题 -->
    <div class="title">
      <a href="/About">取消</a>
      <span>申请认证大咖</span>
    </div>

    <!-- 用户信息 -->
    <div class="userinfo">
      <img src="../assets/logo.png" alt="头像">
      <div class="myinfo">
        <span class="username">用户名</span>
        <span class="iconfont icon-v" :class="{on: false}"></span>
        <span class="hr">|</span>
        <span class="score">积分</span>
        <span class="scorenum">0</span>
      </div>
    </div>
    <!-- 内容 -->
    <div class="content">
      <div class="ltitle">
        <span>大咖认证</span>
        <button v-if="showbtn==1" @click="rzbtn">申请认证</button>
        <button v-else-if="showbtn==2" class="btn2" disabled>等待审核</button>
        <button v-else class="btn2" disabled>申请成功</button>
      </div>
      <div class="con">
        <p>
          大咖是在本社区身份的象征，它代表你对本社区做出的重要贡献，而认证大咖
          的要求也比较低，只需要积分和等级达到一定的标准（积分：00，等级：00）
          便可申请认证，我们的专业团队会实时为你审核。
        </p>
      </div>
    </div>
    <!-- 大咖介绍 -->
    <div class="viprecommend">
      <div class="rz">
        <p>认证特权</p>
      </div>
      <div class="tq">
        <span class="iconfont icon-v" :class="{on: true}"></span>
        <div>
          <p>独家标识</p>
          <p>享有专属标识，彰显独特身份</p>
        </div>
      </div>
      <div class="tq">
        <span class="iconfont icon-dianzan" :class="{on: true}"></span>
        <div>
          <p>优先推荐</p>
          <p>内容优先推荐，增加曝光快速涨粉</p>
        </div>
      </div>
      <div class="tq">
        <span class="iconfont icon-jifen" :class="{on: true}"></span>
        <div>
          <p>更多特权</p>
          <p>更多认证用户专属功能</p>
        </div>
      </div>
    </div>

    <van-popup v-model="show" class="mtk">{{showCon}}</van-popup>
  </div>
</template>

<script>
import { Popup } from 'vant';
export default {
  name: "authentication",
  data: function() {
    return {
      show: false,
      showCon: "申请已提交，请等待审核",
      showbtn: 1
    }
  },
  components: {
    [Popup.name]:Popup
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    rzbtn() {
      this.showPopup();
      this.showbtn = 2;
      let that = this;
      setTimeout(function() {
        that.show = false;
      },2000)
    }
  }
}
</script>

<style lang="less" scoped>
@import "../assets/font/personfont/iconfont.css";

.on {
  color: orange;
}
.authentication {
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
        margin: 0 10px 0 -2px;
      }
    }
    .content {
      width: 85%;
      height: 130px;
      background: white;
      margin: 10px auto 0;
      font-size: 14px;
      padding: 10px;
      .ltitle {
        span {
          font-size: 16px;
          font-weight: 900;
        }
        button {
          width: 70px;
          height: 23px;
          border: none;
          background: red;
          color: white;
          border-radius: 3px;
          float: right;
        }
        .btn2 {
          width: 70px;
          height: 23px;
          border: none;
          background: rgb(216, 216, 216);
          color: rgb(66, 66, 66);
          border-radius: 3px;
          float: right;
        }
      }
      .con {
        margin-top: 10px;
        color: rgb(139, 139, 139);
      }
    }
    .viprecommend {
      width: 90%;
      height: 200px;
      margin: 50px auto 0;
      
      .rz {
        text-align: center;
      }
      .tq {
        display: flex;
        justify-content: start;
        align-items: center;
        font-size: 13px;
        margin-top: 20px;
        padding: 0 10px;
      }
    }
  }
  .iconfont {
    font-size: 30px;
    margin-right: 10px;
  }
  .mtk {
      width: 250px;
      height: 35px;
      line-height: 35px;
      font-size: 16px;
      text-align: center;
    }
</style>