<template>
  <div class="dynamic">
    <!-- 标题 -->
    <div class="title">
      <a href="javascript:;" @click="mreturn">取消</a>
      <span>历史动态</span>
      <a href="javascript:;" class="right-attention" @click="attention" id="attention">关注</a>

    </div>

    <!-- 用户信息 -->
    <div class="userinfo">
      <div class="headimg">
      <img :src="imgurl" alt="头像" />
      </div>
      <div class="myinfo">
        <span class="username">{{list.userName}}</span>
        <span class="iconfont icon-v isMatsercolor" :class="{on:isMaster==0}"></span>
      </div>
      <span class="ll">
        今日浏览：
        <span>{{account}}</span>
      </span>
    </div>

    <!-- 动态 -->
    <div class="dt" v-for="(item,index) in lists" :key="index">
      <div class="top">
        <div>
          <span class="links">
          <div class="Img"><img :src="item.user.imgs[0].imgUrl" alt=""></div>
            <div class="yhm">
              <p>
                {{list.userName}}
                <span class="iconfont icon-v isMatsercolor" :class="{on: list.isMaster == 0}"></span>
              </p>
              <p class="time">17:20</p>
            </div>
          </span>
        </div>
        <div class="down-list">
          <van-icon name="arrow-down" class="down" @click="isshow=!isshow,state=index " />
          <div
            class="Report"
            v-show="index===state && isshow"
            @click="showPopup(index),popsub.userId=item.userId,popsub.dynamicId=item.dynamicId"
          >举报</div>
        </div>
      </div>
      <div class="center" @click="textdetails(index)">
        <h5>{{item.dynamicTitle}}</h5>
        <div class="main-content">{{item.dynamicContent}}</div>
      </div>
      <div class="bottom" @click="textdetails(index)">
        <a href="javascript:;">
          <div>
            <i class="iconfont icon-fenxiang"></i>
            {{item.dynamicTransmit}}
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <i class="iconfont icon-comment"></i>
            {{item.countReply}}
          </div>
        </a>
        <a href="javascript:;">
          <div>
            <i class="iconfont icon-dianzan"></i>
            {{item.dynamicLikeCount}}
          </div>
        </a>
      </div>
      <div class="moduls" v-show="showclient">
        <component :is="com" @clickbox="boxshow" :showpopsub="popsub"></component>
      </div>
    </div>
  </div>
</template>

<script>
import popupsub from "../components/popupsub";
import { mapState,mapMutations } from "vuex"
import { Icon, Uploader } from "vant";
export default {
  name: "Isselectdynamic",
  data: function() {
    return {
      isshow: false,
      isdz: true,
      userID: "",
      list: [],
      state: "",
      showclient: false,
      com: "popupsub",
      lists: [],
      imgurl:'',
      isMaster:5,
      popsub: {
        userId: "",
        dynamicId: ""
      }
    };
  },
  created() {
    this.changeAccount;
      sessionStorage.setItem("quitpathTwo", this.$route.fullPath);

    this.userID = sessionStorage.getItem("isselectuserid");
    this.axios
      .post("/user/findOneById", {
        userId: this.userID,
        id: null
      })
      .then(res => {
        this.list = res.data.data.dynamics[0].user;
        this.lists = res.data.data.dynamics;
        console.log("xx",res.data.data.dynamics);
        console.log(this.list.isMaster);
        this.imgurl = this.list.imgs[0].imgUrl
        this.isMaster = this.list.isMaster
      });
  },
  components: {
    [Icon.name]: Icon,
    [Uploader.name]: Uploader,
    popupsub
  },
  computed:{
    ...mapMutations([
      'changeAccount'
    ]),
    ...mapState([
      'account'
    ])
  },
  methods: {
    showPopup() {
      this.showclient = !this.showclient;
         let that = this
      setTimeout(function() {
        that.isshow = false;
      }, 1000);
    },
    boxshow: function(res) {
      this.showclient = res;
    },
    mreturn:function() {
      sessionStorage.removeItem('isselectuserid')
      this.$router.push(sessionStorage.getItem('quitpath'));
      sessionStorage.removeItem("quitpath");
    },
    textdetails:function(index) {
      sessionStorage.setItem("dynamicId", this.lists[index].dynamicId);
      this.$router.push("/sccomment");
    },
    attention:function() {
      if(document.getElementById('attention').innerText == "取关") {
        this.axios.post("/egnolSomePeople",{
          userId: sessionStorage.getItem("isselectuserid")
        })
        .then(res => {
          console.log("收到数据：",res.data);
          if(res.data.code == "200") {
            document.getElementById('attention').innerText = "关注";
          }
        })
      } else {
        this.axios.post("/AttentionSomePeople",{
          userId: sessionStorage.getItem("isselectuserid")
        })
        .then(res => {
          console.log("收到数据：",res.data);
          document.getElementById('attention').innerText = "取关";
        })
      }
  

    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/font/personfont/iconfont.css";

.right-attention {
  display: inline-block;
  transform: translateX(320px);
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
  .main-content {
  display: -webkit-box;
  overflow: hidden;
  white-space: normal !important;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  
}
  .moduls {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.03);
    position: fixed;
    z-index: 1000;
    top: 0;
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
    .headimg {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      box-shadow: 0 0px 2px rgb(88, 88, 88);
      overflow: hidden;
    }
    img {
     height: 60px;
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
    width:  auto;
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
  }
}
.isMatsercolor {
  color: #ddd;
}
.on {
  color: orange;
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
    color: #ddd;
  }
}
.dz {
  color: orange;
}
</style>