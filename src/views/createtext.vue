<template>
  <div class="create">
    <div>
      <van-nav-bar title="发表正文" left-text="返回" left-arrow right-text="发布" @click-left="re"></van-nav-bar>
    </div>
    <div>
      <van-cell-group>
        <van-field v-model="username"  clearable label="文章标题" placeholder="请输入文章标题" />
      </van-cell-group>
    </div>
    <div>
      <van-cell-group>
        <van-field
          v-model="message"
          rows="1"
          autosize
          label="内容"
          type="textarea"
          placeholder="分享精彩"
        />
      </van-cell-group>
    </div>
    <div class="bottom">
      <van-uploader :after-read="afterRead" />
      <span class="iconfont icon-at" @click="at"></span>
      <span class="fund"><van-icon name="gold-coin-o" @click="fund"/></span>
    </div>
  </div>
</template>
<script>
import { NavBar, Cell, CellGroup, Field, Uploader,Icon } from "vant";

export default {
  name: "createtext",
  data: function() {
    return {
      username: "",
      message: ""
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Uploader.name]: Uploader,
    [Icon.name]:Icon
  },
  methods: {
    re: function() {
      this.$router.replace("/");
    },
     afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    at:function() {
      this.message += '@'
    },
    fund:function () {
      this.message += '$'

    }
  }
};

</script>
<style lang="less" scoped>
.create {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1000;
  background: #fff;
}

.bottom {
  position: fixed;
  bottom: 300px;
  right: 60px;
  display: flex;
  justify-content: flex-end;
  height: 80px;
  line-height: 80px;
  span {
    width: 30px;
    padding: 0 20px;
  }
  .fund {
    margin-top: 5px;
    font-size: 28px; 
  }
  .iconfont {
    font-size: 28px;
  }
}
</style>