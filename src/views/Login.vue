<template>
  <div class="Login">
    <div id="game"></div>
    <h1>利德金融</h1>
    <h4>标记我的生活</h4>

    <div class="rob">
       <component :is="com" />
      <div class="iphone">

          <span class="yz" v-if="shows" @click="com='telyz',text='密码登录',shows=!shows">{{text}} |</span>
          <span class="yz" v-else  @click="com='telpass',text='验证码登录',shows=!shows">{{text}} |</span>

        <router-link to="/Forgetpassword">
          <span>忘记密码 |</span>
        </router-link>
        <router-link to="/Register">
          <span>注册</span>
        </router-link>
      </div>
    </div>
    <div class="zhezhao"></div>
  </div>
</template>
<script>
import { Field, Button } from "vant";
import telpass from '../components/telpass'
import telyz from '../components/telyz'
export default {
  name: "Login",
  data: function() {
    return {
      message: "",
      username: "",
      password: "",
      com:'telpass',
      text:'验证码登录',
      shows:true
    };
  },
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    telyz,
    telpass
  },
  mounted() {
    var game = document.getElementById("game");

    var bgY = 0;
    /* 背景图动起来*/
    setInterval(function() {
      bgY -= 3.5;
      game.style.backgroundPositionY = bgY + "px";
    }, 50);
  }
};
</script>
<style lang="less" scoped>
@import "../assets/style/resize.css";
.Login {
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  top: 0;
}
#game {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url("../../public/img/images/bg.png");
  background-size: cover;
  z-index: 1;
}
.iphone {
  display: flex;
  justify-content: center;
}
.Login span {
  color: #fff;
  font-size: 16px;
  padding: 0 4px;
}
.yz {
  margin-top: 5px;
}
.name {
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
}
.van-button {
  margin-top: 20px;
  text-align: center;
  border-radius: 10px;
}
.pass {
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
.zhezhao {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.418);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}
h1,
h4 {
  color: #fff;
}
h1 {
  position: absolute;
  top: 10%;
  left: 25%;
  z-index: 999;
  font-size: 48px;
}

h4 {
  position: absolute;
  top: 22%;
  left: 20%;
  z-index: 999;
  font-size: 24px;
}
button {
  width: 100%;
  height: 20%;
  z-index: 999;
  border: none;
  outline: none;
}
.rob {
  width: 80%;
  height: 40%;
  position: absolute;
  left: 10%;
  top: 34%;
  z-index: 999;
}
</style>