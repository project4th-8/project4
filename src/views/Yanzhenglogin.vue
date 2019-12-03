<template>
  <div class="Yanzhenglogin">
    <div class="top">
      <router-link to="/login"><van-icon name="arrow-left" class="back" /></router-link>
    </div>
    <div class="main">
      <h1>快捷登录</h1>
      <div class="a">
        <input type="text" placeholder="请输入手机号码" id="phone" @blur="foo" v-model="username" />
      </div>
      <div class="b">
        <input type="text" placeholder="请输入验证码" id="yanzhengma" v-model="yanzhengma"/>
        <input type="button"  @click="yanzheng" id="yzbtn" v-model="huoqu">
      </div>
    </div>
    <div class="bottom">
      <div class="bottom_zong">
        <input type="button" value="登录" @click='login'>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "vant";
export default {
  name: "Yanzhenglogin",
  data() {
    return {
      yanzhengma:'',
      username: "",
      huoqu:'获取验证码'
    };
  },
  components: {
    [Icon.name]: Icon
  },
  methods: {
    foo() {
      var dianhua = /^[1][3,4,5,7,8][0-9]{9}$/;
      var yzbtn=this.$el.childNodes[1].childNodes[2].childNodes[1];
      if (!dianhua.test(this.username)) {
        yzbtn.style.display='none';
        console.log(false)
        return false;
        
      } else {
        yzbtn.style.display='block';
        console.log(true)
        return true;

      }
    },
    yanzheng(){
      // var yzrandom=Math.ceil(Math.random()*1000000);
      var a=60;
      var hh=this;
      setInterval(function(){
        a=a-1;
        if(a>0){
          hh.huoqu="重新发送"+a;
        }else{
            hh.huoqu="重新发送"
        }
      },1000)
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
  font-size: 56px;
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
  height: 60%;
}
.b {
  width: 80%;
  height: 100px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  border: 1px solid #ccc;
  margin-bottom: 5%;
  input[type="text"] {
    border: none;
    width: 100%;
    height: 100%;
  }
  input[type=button] {
    position: absolute;
    top: 20px;
    right: 10px;
    height: 60px;
    line-height: 60px;
    border: none;
    background: lightgreen;
    font-size: 28px;
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
.bottom{
  height: 200px;
  line-height: 200px;
  width: 100%
}
</style>