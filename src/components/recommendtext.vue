<template>
  <div class="text">
    <div class="fix-top"></div>
    <div class="content">
      <div class="top">
        <div>
          <a href="/about" class="links">
            <div class="Img">头像</div>
            <div>
              <p>
                {{info.username}}
                <span class="iconfont icon-v"></span>
              </p>
              <p class="time">{{info.times}}</p>
            </div>
          </a>
        </div>
        <div class="down-list">
          <van-icon name="arrow-down" class="down" @click="isshow=!isshow" />
          <div class="Report" v-show="isshow" @click="showPopup">举报</div>
        </div>
      </div>
      <div class="center">
        <h5>{{info.title}}</h5>
        <div>{{info.contents}}</div>
      </div>
      <div class="bottom">
        <div>
          <i class="iconfont icon-tubiao-"></i>
          {{info.fenx}}
        </div>
        <div>
          <i class="iconfont icon-duanxin"></i>
          {{info.pingl}}
        </div>
        <div>
          <i class="iconfont icon-zang"></i>
          {{info.zan}}
        </div>
      </div>
    </div>

    <div class="moduls" v-show="showclient" >
      <component :is="com" @clickbox="boxshow"></component>
    </div>
  </div>
</template>
<script>
import { Icon } from "vant";
import popupsub from "./popupsub.vue";
export default {
  name: "Recommendtext",
  props: ["info"],
  data: function() {
    return {
      isshow: false,
      com: "popupsub",
      showclient: false
    };
  },
  components: {
    [Icon.name]: Icon,
    popupsub
  },
  methods: {
    showPopup() {
      this.showclient = !this.showclient;
    },
    boxshow: function(res) {
      this.showclient = res;
      console.log(this.showclient)
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
.moduls {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.407);
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
}
.time {
  font-size: 12px;
  color: #ddd;
}
.top {
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
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
  height: 90px;
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