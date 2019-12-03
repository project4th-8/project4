<template>
  <div class="home">
    <div class="main-top">
      <van-search
        v-model="inputtxt"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @search="onSearch"
        class="top"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
      <ul class="content">
        <li>
          <router-link to="/">推荐</router-link>
        </li>
        <li>
          <router-link to="/text">文章</router-link>
        </li>
        <li>
          <router-link to="/fund">基金</router-link>
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import { Icon, Search } from "vant";

export default {
  name: "home",
  data: function() {
    return {
      inputtxt: ""
    };
  },
  components: {
    [Icon.name]: Icon,
    [Search.name]: Search
  },
  methods: {
    onSearch: function() {}
  },
  created() {
    /*  this.axios.post("/user/userLogin", {

      })
      .then(res => {
        console.log(res)
      })  */
  }
};
</script>

<style lang="less" scoped>
.router-link-exact-active,
router-link-active {
  color: #000;
  border-bottom: 1px solid red;
}
.main-top {
  height: 90px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
}
.top {
  height: 50px;
}
.find {
  height: 40px;
  background: #000;
}
.active {
  border-bottom: 1px red solid;
}
.content {
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: fixed;
  width: 100%;
  height: 30px;
  transition: all 0.5s;
  li a {
    font-size: 20px;
    color: #333;
  }
  height: 40px;
}
</style>
