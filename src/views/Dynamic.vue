<template>
  <div class="dynamic">
    <!-- 标题 -->
    <div class="title">
      <a href="/About">取消</a>
      <span>历史动态</span>
    </div>

    <!-- 用户信息 -->
    <div class="userinfo">
      <img src="../assets/logo.png" alt="头像" />
      <div class="myinfo">
        <span class="username">用户名</span>
        <span class="iconfont icon-v" :class="{on: false}"></span>
      </div>
      <span class="ll">
        浏览：
        <span>20</span>
      </span>
    </div>

    <!-- 动态 -->
    <div class="dt">
      <div class="top">
        <div>
          <a href class="links">
            <div class="Img">头像</div>
            <div class="yhm">
              <p>
                用户名
                <span class="iconfont icon-v"></span>
              </p>
              <p class="time">17:20</p>
            </div>
          </a>
        </div>
        <div class="down-list">
          <van-icon name="arrow-down" class="down" @click="isshow=!isshow" />
          <div class="Report" v-show="isshow">举报</div>
        </div>
      </div>
      <div class="center">
        <h5>重大新闻</h5>
        <div>sssssssssssssssssssssssssssss</div>
      </div>
      <div class="bottom">
        <a href="javascript:;">
          <div>
            <i class="iconfont icon-fenxiang"></i> 10
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <i class="iconfont icon-comment"></i> 20
          </div>
        </a>
        <a href="javascript:;" @click="dz">
          <div>
            <i class="iconfont icon-dianzan"></i>
            {{zan}}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon, Uploader } from "vant";
export default {
  name: "dynamic",
  data: function() {
    return {
      isshow: false,
      zan: 0,
      isdz: true
    };
  },
  components: {
    [Icon.name]: Icon,
    [Uploader.name]: Uploader
  },
  methods: {
    dz() {
      this.zan += 1;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/font/personfont/iconfont.css";

.on {
  color: orange;
}
.dynamic {
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
    position: relative;
    width: 100%;
    height: 120px;
    background: rgb(255, 255, 255);
    margin: 55px auto 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      box-shadow: 0 0px 2px rgb(88, 88, 88);
    }
    span {
      font-size: 16px;
    }
    .ll {
      position: absolute;
      bottom: 10px;
      right: 10px;
      font-size: 13px;
      span {
        font-size: 13px;
      }
    }
  }
}
.dt {
  background: white;
  margin-top: 10px;
}
.links {
  display: flex;
  justify-content: space-around;

  .yhm {
    transform: translateY(3px);
  }
}

.text {
  overflow: auto;
}
.time {
  font-size: 12px;
  color: rgb(151, 151, 151);
}
.top {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
}
.Img {
  width: 40px;
  height: 40px;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #ddd;
  margin: 0 10px;
  overflow: hidden;

  img {
    width: 40px;
    height: auto;
  }
}
.down {
  font-size: 24px;
  margin-right: 10px;
}
.Report {
  width: 30px;
  font-size: 12px;
  position: relative;
  z-index: 2;
}
.center {
  width: 84%;
  margin: 20px auto 0;
  font-size: 12px;
  h5 {
    font-size: 16px;
    padding-bottom: 2px;
  }
  height: 90px;

  div {
    margin-top: 10px;
  }
}
.bottom {
  display: flex;
  justify-content: space-around;

  div {
    width: 70px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    padding: 0 20px;
    font-size: 14px;
  }
  .iconfont {
    font-size: 16px;
    color: rgb(173, 173, 173);
  }
}
.dz {
  color: orange;
}
</style>