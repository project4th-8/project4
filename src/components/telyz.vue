<template>
  <div>
    <h6>手机验证码登录</h6>
    <div>
      <van-field v-model="tel" clearable placeholder="请输入手机号" class="name" />
      <van-field v-model="sms" center clearable placeholder="请输入短信验证码">
        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
      </van-field>
    </div>
    <van-button type="primary" size="large" class="login">登录</van-button>
  </div>
</template>
<script>
import { Field, Button } from "vant";

export default {
  name: "telyz",
  data: function() {
    return {
      tel: "",
      password: "",
      sms:''
    };
  },
  components: {
    [Field.name]: Field,
    [Button.name]: Button
  }
};
</script>
<style lang="less" scoped>
h6 {
  font-size: 20px;
  color: #fff;
  text-align: center;
  font-weight: 100;
  margin-bottom: 10px;
}
.yz {
  margin-top: 5px;
}
.name {
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}
.login {
  margin-top: 20px;
  text-align: center;
  border-radius: 10px;
}
.pass {
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
</style>