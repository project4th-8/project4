<template>
  <div class="fix-top">
    <div>
      <div class="top">
        <van-nav-bar title="基金" left-text="返回" left-arrow @click-left="re">
          <van-icon name="search" slot="right" @click="searchbtn" />
        </van-nav-bar>
        <van-search
          v-model="inputtxt"
          placeholder="请输入搜索关键词"
          show-action
          shape="round"
          @search="onSearch" 
          v-if="shows"
          class="shows"
        >
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </div>
      <ul class="tables">
        <li>
          <a href="javascript:;" @click="com='allfund',issure=1" :class="{showsub:issure===1}">全部</a>
        </li>
        <li>
          <a href="javascript:;" @click="com='fundone',issure=2" :class="{showsub:issure===2}">债券型</a>
        </li>
        <li>
          <a href="javascript:;" @click="com='fundtwo',issure=3" :class="{showsub:issure===3}">混合型</a>
        </li>
        <li>
          <a href="javascript:;" @click="com='fundthree',issure=4" :class="{showsub:issure===4}">指数型</a>
        </li>
        <li>
          <a href="javascript:;" @click="com='fundfour',issure=5" :class="{showsub:issure===5}">FOF型</a>
        </li>
        <li>
          <a href="javascript:;" @click="com='fundfive',issure=6" :class="{showsub:issure===6}">QDII型</a>
        </li>
        <li>
          <a href="javascript:;" @click="com='fundsix',issure=7" :class="{showsub:issure===7}">股票型</a>
        </li>
      </ul>
    </div>
    <component :is="com"/>
  </div>
</template>
<script>
import { Icon, NavBar, Search } from "vant";
import allfund from "./allfund";

import fundone from "../components/fundone.vue";
import fundtwo from "../components/fundtwo.vue";
import fundthree from "../components/fundthree.vue";
import fundfour from "../components/fundfour.vue";
import fundfive from "../components/fundfive.vue";
import fundsix from "../components/fundsix.vue";

export default {
  name: "fund",
  data: function() {
    return {
      com: "allfund",
      inputtxt: "",
      shows:false,
      issure:1

    };
  },
  components: {
    [Icon.name]: Icon,
    [NavBar.name]: NavBar,
    [Search.name]: Search,
    allfund,
    fundone,
    fundtwo,
    fundthree,
    fundfour,
    fundfive,
    fundsix
  },
  methods: {
    re: function() {
      this.$router.replace("/");
    },
    searchbtn: function() {
      this.shows =!this.shows;
    },
    onSearch: function() {

    }
  }
  
};
</script>
<style lang="less" scoped>
.fix-top {
  margin-top: 30px;
  margin-bottom: 40px;
}
.showsub {
  border-bottom: 2px solid red;
  color: red;
}
.top {
  margin-bottom: 4px;
}
.name-list {
  border-top:6px solid rgb(204, 204, 204);
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  padding-top: 5px;
  padding-bottom:8px;
  border-bottom: 2px solid #ddd; 
  .van-icon {
    font-size: 16px;
    vertical-align: middle;
  }
}
.tables {
  display: flex;
  padding: 10px 0;
  justify-content: space-around;
  height: 30px;
  a {
    font-size: 14px;
  }
}
.shows {
  transition: all .5s;
}
.van-nav-bar {
padding-bottom: 10px;
line-height: 25px;
}
.van-nav-bar__left,.van-icon-arrow-left,.van-icon-search {
  font-size: 22px;
}
.van-nav-bar__left {
  font-size: 16px;

}
.van-nav-bar__title{
  font-size: 20px;
  line-height: 60px;

} 
/* .top {
  display: flex;
  justify-content: space-around;
}
.searchtxt {
  height: 30px;
  width: 60%;
  border-radius: 10px;
  font-size: 14px;
} */
</style>