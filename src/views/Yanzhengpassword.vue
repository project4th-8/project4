<template>
  <div class="Yanzhengpassword">
    <div class="top">
      <router-link to="/login"><van-icon name="arrow-left" class="back" /></router-link>
    </div>
    <div class="main">
      <h1>密码登录</h1>
      <div class="a">
        <input type="text" placeholder="请输入手机号码" id="phone" @blur="foo" v-model="username" />
      </div>
      <div class="b">
        <input type="text" placeholder="请输入密码" id="yanzhengma" v-model="password" @blur="foo2"/>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom_zong">
        <input type="button" value="登录" @click='login'>
      </div>
      <div class="wjpw">
        <router-link to="/Forgetpassword">忘记密码</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  name: "Yanzhengpassword",
  data() {
    return {
      username: "",
      password:''
    };
  },
  components: {
    [Icon.name]: Icon
  },
  methods: {
    foo() {
      var youxiang=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      var dianhua = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!dianhua.test(this.username) && !youxiang.test(this.username)) {
    
        return false;
        
      } else {
      
        return true;

      }
    },
    foo2() {
      var pw = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
      if (!pw.test(this.password)) {
      
        return false;
      } else {
      
        return true;
      }
    },
    login (){

    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/style/resize.css";
.PhoneRegister {
  width: 100%;
  height: 100vh;
}
.top {
  width: 100%;
  height: 100px;
  line-height: 100px;
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
}
.back {
  font-size: 72px;
  margin-top: 14px;
  color: #999999;
}

.main h1 {
  font-size: 72px;
  text-align: center;
  margin-bottom: 40px;
}
.a {
  width: 80%;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border: 1px solid #ccc;
  margin-bottom: 5%;
  input[type="text"] {
    border: none;
    width: 100%;
  }
}
.main{
  width: 100%;
  height: 30%;
}
.b {
  width: 80%;
  height: 100px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  border: 1px solid #ccc;
  input[type="text"] {
    border: none;
    width: 100%;
    height: 100%;
  }
  input[type=button] {
    position: absolute;
    top: 0;
    right: 0;
    height: 100px;
    line-height: 100px;
    border: none;
    background: #fff
  }
}
#yzbtn{
  display: none;
}
.bottom{
  width: 100%;
  height: 30%;
  .bottom_zong{
    width: 80%;
    margin: 0 auto;
    input[type=button]{
      width: 100%;
      height: 100%;
    }
  }
}
</style>