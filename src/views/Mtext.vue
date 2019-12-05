<template>
  <div class="text">
    <div class="fix-top"></div>
    <div class="content" v-for="(item,index) in cons" :key="index" :info="item">
      <div class="top">
        <div>
          <div class="links" @click="isselectuser(item.userId)">
            <div class="Img">
              <img :src="item.userImg" alt />
            </div>
            <div>
              <p>
                {{item.userName}}
                <span class="iconfont icon-v" :class="{master:item.mismaster}"></span>
              </p>
              <p class="time">{{item.dynamicLastTime}}</p>
            </div>
          </div>
        </div>
        <div class="down-list">
          <van-icon name="arrow-down" class="down" @click="isshow=!isshow,state=index " />
          <div
            class="Report"
            v-show="index===state && isshow"
            @click="showPopup(index),popsub.isuserId=item.userId,popsub.dynamicId=item.dynamicId"
          >举报</div>
        </div>
      </div>
      <div class="center" @click="sccomment(index)">
        <h5>{{item.dynamicTitle}}</h5>
        <div class="main-content">
          <p class="dynamiccontent">{{item.dynamicContent}}</p>
          <div class="textimg">
            <p v-for="(item,index) in item.imgUrl" :key="index">
              <img :src="item" alt />
            </p>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div @click="forword(item.userId,item.dynamicId)">
          <i class="iconfont icon-tubiao-"></i>
          {{item.dynamicTransmit }}
        </div>
        <div>
          <i class="iconfont icon-duanxin"></i>
          {{item.pingl}}
        </div>
        <div @click="iszan(item.dynamicId,$event,index),mzan[index]=!mzan[index]">
          <i class="iconfont icon-zang"></i>
          {{item.dynamicLikeCount}}
        </div>
      </div>
      <div class="textmoduls" v-show="showclient">
        <component :is="com" @clickbox="boxshow" :showpopsub="popsub"></component>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from "vant";
import popupsub from "../components/popupsub";
export default {
  name: "mtext",
  data: function() {
    return {
      isshow: false,
      com: "popupsub",
      showclient: false,
      cons: [],
      state: "",
      myzan: true,
      states: "",
      mzan: [],
      popsub: {
        isuserId: "",
        dynamicId: ""
      }
    };
  },
  components: {
    [Icon.name]: Icon,
    popupsub
  },
  created() {
    this.axios.get("/dynamic/findAllDUR", {}).then(res => {
      this.cons = res.data.data.data;
      this.cons = this.cons.map((item, index) => {
        item.mzn = false;
        this.mzan[index] = item.mzn;
        if (item.isMaster == 0) {
          item.mismaster = true;
        } else {
          item.mismaster = false;
        }

        return item;
      });
      console.log("txt", this.cons);
      console.log("xx", this.mzan);

    });
  },
  methods: {
    showPopup(/* index */) {
      this.showclient = !this.showclient;
      let that = this;
      setTimeout(function() {
        that.isshow = false;
      }, 1000);
    },
    boxshow: function(res) {
      this.showclient = res;
      console.log(this.showclient);
    },
    forword: function(isuserId, dynamicId) {
      sessionStorage.setItem("forworduserId", isuserId);
      sessionStorage.setItem("forworddynamicId", dynamicId);

      this.$router.push("/forword");
    },
    isselectuser: function(isselectuser) {
      sessionStorage.setItem("isselectuserid", isselectuser);
      this.$router.push("/isselectdynamic");
    },
    sccomment: function(index) {
      sessionStorage.setItem("dynamicId", index);
      this.$router.push("/sccomment");
    },
    iszan: function(dynamicId, e, index) {
      if (!this.mzan[index]) {
        e.currentTarget.innerText = Number(e.currentTarget.innerText) + 1;
        e.currentTarget.innerHTML = `<i class="iconfont icon-zang" style="color:orange"></i> ${e.currentTarget.innerText}`;
      } else {
        e.currentTarget.innerText = Number(e.currentTarget.innerText) - 1;
        e.currentTarget.innerHTML = `<i class="iconfont icon-zang" ></i> ${e.currentTarget.innerText}`;
      }
   
    }
  }
};
</script>
<style  lang="less" scoped>
.content {
  font-size: 16px;
}
.icon-v {
  font-size: 20px;
  color: #ddd;
}
.master {
  color: orange;
}
.main-content {
  display: -webkit-box;
  overflow: hidden;
  white-space: normal !important;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  .dynamiccontent {
    overflow: hidden;
  }
}
.textmoduls {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.01);
  position: fixed;
  z-index: 1000;
  top: 0;
}
.links {
  display: flex;
  justify-content: space-around;
}
.text {
  overflow: auto;
  margin-top: 90px;
}
.time {
  font-size: 12px;
  color: #ddd;
}
.textimg {
  display: flex;
  justify-content: start;
}
.top {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
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
  font-size: 23px;
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
  height: 160px;
  img {
    width: auto;
    height: 60px;
  }
}
.bottom {
  display: flex;
  justify-content: space-around;
  border-bottom: 6px solid #ddd;
  div {
    width: 70px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    padding: 0 20px;
    font-size: 12px;
  }
  .iconfont {
    font-size: 16px;
    color: rgb(173, 173, 173);
  }
}
</style>