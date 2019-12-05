<template>
  <div class="about">
    <div class="head">
      <!-- 头像 -->
      <router-link to="/informations">
        <div v-show="token" class="headImg">
          <img :src="head" alt="头像">
        </div>
      </router-link>
      <!-- 登录后 -->
      <!-- 关注粉丝 -->
      <div v-if="token" class="info">
        <p><router-link to="/informations">{{userInfo.userName}}</router-link></p>
        <span><router-link to="/attention">关注</router-link> <span>{{attentionNum}}</span></span>
        <span><router-link to="/myfans">粉丝</router-link> <span>{{fansNum}}</span></span>
      </div>

      <!-- 未登录 -->
      <div v-else class="noLogin">
        <router-link to="/Login">登录/注册</router-link>
      </div>

      <!-- 申请认证 -->
      <div v-show="token" class="authentication">
        <router-link to="/authentication">申请认证</router-link>
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
        <span><router-link to="/">私信</router-link></span>
      </div>
      <div>
        <span class="iconfont icon-shoucang"></span>
        <span><router-link to="/mycollect">收藏</router-link></span>
      </div>
      <div>
        <span class="iconfont icon-caogaoxiang"></span>
        <span><router-link to="/">草稿箱</router-link></span>
      </div>
    </div>
    <div class="functionlist">
      <div>
        <span class="iconfont icon-xiaoxi"></span>
        <span><router-link to="/">消息通知</router-link></span>
      </div>
      <div>
        <span class="iconfont icon-dongtaitixing"></span>
        <span><router-link to="/dynamic">历史动态</router-link></span>
      </div>
      <div>
        <span class="iconfont icon-comment"></span>
        <span><router-link to="/comment">历史评论</router-link></span>
      </div>
    </div>
    <div class="functionlist">
      <div>
        <span class="iconfont icon-jijin"></span>
        <span><router-link to="/">自选基金</router-link></span>
      </div>
      <div>
        <span class="iconfont icon-zhanghao"></span>
        <span><router-link to="/account">账号信息</router-link></span>
      </div>
      <div>
        <span class="iconfont icon-17"></span>
        <span><router-link to="/safety">安全设置</router-link></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  name: "about",
  data: function() {
    return {
      attentionNum: 0,
      fansNum: 0,
      token: '',
      myInfo: {},
      head: ""
    }
  },
  computed: {
    ...mapState([
      "userInfo"
    ])
  },
  methods: {

  },
  created() {
    if(sessionStorage.getItem("token")) {
      this.head = this.userInfo.imgs[0].imgUrl;
      this.token = sessionStorage.getItem("token");

        /* 查询粉丝数 */
        this.axios.post("/fansCount")
        .then(res => {
          this.fansNum = res.data.data;
        })
        /* 查询关注数 */
        this.axios.post("/AttentionCount")
        .then(res => {
          this.attentionNum = res.data.data;
        })
    }
    sessionStorage.removeItem('oldroute');
    document.body.addEventListener(
      "touchmove",
      function(e) {
        e.preventDefault();
      },
      { passive: false }
    );
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
        width: auto;
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
      transform: translateX(-140px);
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
