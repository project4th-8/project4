<template>
  <div class="text">
    <div class="fix-top"></div>
    <div class="content">
      <div class="top">
        <div>
          <a href class="links">
            <div class="Img">头像</div>
            <div>
              <p>
                {{info.name}}
                <span class="iconfont icon-v"></span>
              </p>
              <p class="time">{{info.times}}</p>
            </div>
          </a>
        </div>
        <div class="down-list">
          <van-icon name="arrow-down" class="down" @click="isshow=!isshow" />
          <div class="Report" v-show="isshow">举报</div>
        </div>
      </div>
      <div class="center">
        <h5>{{info.title}}</h5>
        <div>{{info.contents}}</div>
      </div>
      <div class="bottom">
        <div>
          <i class="iconfont icon-tubiao-"></i> {{info.fenx}}
        </div>
        <div>
          <i class="iconfont icon-duanxin"></i> {{info.pingl}}
        </div>
        <div>
          <i class="iconfont icon-zang"></i> {{info.zan}}
        </div>
      </div>
    </div>
  
  </div>
</template>
<script>
import { Icon } from "vant";

export default {
  name: "textcon",
  props: ['info'],
  data: function() {
    return {
      isshow: false
    };
  },
  components: {
    [Icon.name]: Icon
  },
  methods: {}
};
</script>
<style  lang="less" scoped>

.content {
  font-size: 32px;
}
.icon-v {
  font-size: 40px;
  color: #ddd;
}
.links {
  display: flex;
  justify-content: space-around;
}
.text {
  overflow: auto;
}
.time {
  font-size: 24px;
  color: #ddd;
}
.top {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 2px solid #ddd;
}
.Img {
  width: 80px;
  height: 80px;
  line-height: 60px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #ddd;
  margin: 0 20px;
}
.down {
  font-size: 48px;
  margin-right: 20px;
}
.Report {
  width: 60px;
  font-size: 24px;
  position: relative;
  z-index: 2;
}
.center {
  width: 84%;
  margin: 40px auto 0;
  font-size: 24px;
  h5 {
    font-size: 32px;
    padding-bottom: 4px;
  }
  height: 180px;
}
.bottom {
  display: flex;
  justify-content: space-around;
  border-bottom: 12px solid #ddd;

  div {
    width: 140px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    padding: 0 40px;
    font-size: 24px;
  }
  .iconfont {
    font-size: 32px;
    color: rgb(173, 173, 173);
  }
}
</style>