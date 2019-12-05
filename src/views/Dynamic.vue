<template>
  <div class="dynamic">
    <!-- 标题 -->
    <div class="title">
      <router-link to="/About">取消</router-link>
      <span>历史动态</span>
    </div>

    <!-- 用户信息 -->
    <div class="userinfo">
      <div class="myhead">
        <img :src="userInfo.imgs[0].imgUrl" alt="头像" />
      </div>
      <div class="myinfo">
        <span class="username"><router-link to="/informations">{{userInfo.userName}}</router-link></span>
        <span class="iconfont icon-v" :class="{on: userInfo.inMaster==1}"></span>
      </div>
      <span class="ll">
        今日浏览：
        <span>{{account}}</span>
      </span>
    </div>

    <!-- 动态 -->
    <div class="dt" v-for="(item,index) in mydynamic" :key="index">
      <div class="top">
        <div>
          <span class="links">
            <div class="Img">
              <img :src="userInfo.imgs[0].imgUrl" alt="头像">
            </div>
            <div class="yhm">
              <p>
                <router-link to="/informations">{{userInfo.userName}}</router-link>
                <span class="iconfont icon-v" :class="{on: userInfo.inMaster==1}"></span>
              </p>
              <p class="time">{{item.dynamicTime}}</p>
            </div>
          </span>
        </div>
        <div class="down-list">
        </div>
      </div>
      <router-link to="/sccomment">
        <div class="center" @click="sccommentCon(item.dynamicId)">
          <h5>{{item.dynamicTitle}}</h5>
          <div>{{item.dynamicContent}}</div>
        </div>
      </router-link>
      <div class="bottom">
        <span>
          <div>
            <i class="iconfont icon-fenxiang"></i> 22
          </div>
        </span>
        <span>
          <div>
            <i class="iconfont icon-comment"></i> 20
          </div>
        </span>
        <span>
          <div>
            <i class="iconfont icon-dianzan"></i>
            {{item.dynamicLikeCount}}
          </div>
        </span>
      </div>
    </div>

    <div v-show="nobody" class="nobody">
      <span>我没有发表过动态</span>
    </div>
  </div>
</template>

<script>
import { Icon, Uploader } from "vant";
import { mapState,mapMutations } from "vuex"

export default {
  name: "dynamic",
  data: function() {
    return {
      isshow: false,
      isdz: true,
      mydynamic: [],
      nobody: true
    };
  },
  computed: {
    ...mapState([
      "userInfo",
      "account"
    ]),
    ...mapMutations([
      "changeAccount"
    ])
    
  },
  components: {
    [Icon.name]: Icon,
    [Uploader.name]: Uploader
  },
  methods: {
    sccommentCon(id) {
      console.log("文章id：",id);
      sessionStorage.setItem("dynamicId",id);
    }
  },
  created() {
    this.changeAccount;
    sessionStorage.setItem("oldroute",this.$route.fullPath);
    this.mydynamic = this.$store.state.userInfo.dynamics;
    if(this.mydynamic.length == 0) {
      this.nobody = true;
    } else {
      this.nobody = false;
    }
    console.log("我的动态：",this.mydynamic);
  }
};
</script>

<style lang="less" scoped>
@import "../assets/font/personfont/iconfont.css";
.icon-v {
  color: #ddd;
}
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
  .nobody {
      position: absolute;
      left: 128px;
      top: 190px;
      width: 200px;
      height: 20px;
      font-size: 15px;
      color: rgb(158, 158, 158);
    }
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
    width: auto;
    height: 40px;
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
     display: -webkit-box;
     overflow: hidden;
     white-space: normal!important;
     text-overflow: ellipsis;
     word-wrap: break-word;
     -webkit-line-clamp: 4;
     -webkit-box-orient: vertical
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