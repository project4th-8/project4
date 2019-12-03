<template>
  <div>
    <h6>手机号密码登录</h6>
    <div>
      <van-field v-model="tel" clearable placeholder="请输入手机号" class="name" />
      <van-field v-model="password" type="password" placeholder="请输入密码" class="pass" />
    </div>
    <van-button type="primary" size="large" @click="login">登录</van-button>
  </div>
</template>
<script>
import { Field, Button } from "vant";

export default {
  name:'telpass',
   data:function() {
    return {
      tel:'',
      password:''
    }
  },
  components: {
     [Field.name]: Field,
    [Button.name]: Button
  },
  methods: {
    login() {
      this.axios.post("/user/userLogin",{
        userPhone: this.tel,
        userPassword: this.password,
        verifyCode: ""
      })
      .then(res => {
        console.log(res.data);
        if(res.data.code == "200") {
          sessionStorage.setItem("token",res.data.data);
          this.$router.replace("/");

          this.axios.post("/user/findAllUserInfo")
          .then(res => {
            if(res.data.data.user.userSex == 1) {
              res.data.data.userSex = "男";
            } else {
              res.data.data.user.userSex = "女";
            }
            this.$store.state.userInfo = res.data.data.user;
            this.$store.state.accountAge = res.data.data.accountAge;
            console.log("拿到数据：",res.data);
            sessionStorage.setItem("userId",this.$store.state.userInfo.userId);
          });
        }
      });
      
    },
  }
}
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
.van-button {
  margin-top: 20px;
  text-align: center;
  border-radius: 10px;
}
.pass {
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
</style>