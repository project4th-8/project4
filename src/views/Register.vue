<template>
  <div class="Forgetpassword">
    <div class="top">
      <router-link to="/Login">
        <van-icon name="arrow-left" class="back" />
      </router-link>
    </div>
    <h6>用户注册</h6>

    <div class="main">
      <van-cell-group>
        <van-field v-model="username" label="+86" placeholder="请输入手机号" />
        <van-cell-group>
          <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>
        </van-cell-group>
        <van-button class="ok" type="primary" size="large" @click="ok">下一步</van-button>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { Icon, Field, Cell, CellGroup, Button } from "vant";
export default {
  name: "Forgetpassword",
  data() {
    return {
      username: "",
      sms: ""
    };
  },
  components: {
    [Icon.name]: Icon,
    [Field.name]: Field,
    [Button.name]: Button,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  methods: {
    ok:function() {

      this.$router.replace("/Registernext");
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/style/resize.css";
.Forgetpassword {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 99999;
}
h6 {
  font-size: 30px;
  color: #000;
  text-align: center;
  font-weight: 100;
  margin-bottom: 10px;
}
.main {
  width: 90%;
  margin: 0 auto;
}
.ok {
  margin-top: 30px;
}
.top {
  height: 60px;
  .van-icon-arrow-left {
    font-size: 30px;
    padding: 20px;
  }
}
</style>