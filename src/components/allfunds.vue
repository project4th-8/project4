<template>
  <div class="main">
    <div class="content con-top">
      <div class="names">
        <p class="title">{{infos.title}}</p>
      </div>
      <div>
        {{infos.count}}
      </div>
      <div>{{infos.profit}}</div>
      <div class="starall" :class="{star:issure==true}" @click="issure=!issure">
        <van-icon name="star" />
      </div>
    </div>
    <div class="content">
      <div><span class="code">123213</span></div>
      <div class="time"><span class="code time">{{infos.time}}</span></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script>
import { Icon } from "vant";
export default {
  name: "allfund",
  props: ["infos"],
  data: function() {
    return {
      name: "dadada",
      count: "123",
      profit: "123231",
      issure: ""
    };
  },
  components: {
    [Icon.name]: Icon
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.main {
  height: 50px;
  border-bottom: 2px solid #ddd;
}
.con-top {
  padding-top: 10px;
}
.content {
  display: flex;
  justify-content: space-around;
  font-size: 16px;
  text-align: center;
  width: 100%;
  div {
    width: 100px;

  }
  .time {
  width: 110px;
  margin-left: 20px;
  }
  .code {
    font-size: 10px;
    color: #333;
  }
  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .names {
    width: 100px;
    text-align: left;
    margin-left: 16px;
  }
  .starall {
    margin-left: 20px;
    width: 40px;
    color: #ddd;
  }
  .star {
    color: #333;
  }
}
</style>