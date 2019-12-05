<template>
   <div >
        <h6>手机验证码登录</h6>
        <div>
          <van-field v-model="tel" clearable placeholder="请输入手机号" class="name" />
           <van-field v-model="yzm"  center clearable placeholder="请输入短信验证码">
             <van-button v-if="isfs" slot="button" size="small" type="primary" @click="fsyzm">发送验证码</van-button>
             <van-button v-else slot="button" size="small" type="primary" class="yzm2" disabled>{{seconds}}s后发送</van-button>
           </van-field>
        </div>
        <van-button type="primary" size="large" class="login" @click="login">登录</van-button>
      </div>
</template>
<script>
import { Field, Button } from "vant";

export default {
  name:'telyz',
  data:function() {
    return {
      tel:'',
      password:'',
      yzm: '',
      isfs: true,
      seconds: 60
    }
  },
  components: {
     [Field.name]: Field,
    [Button.name]: Button
  },
  methods: {
    fsyzm() {
      this.isfs = false;
        setInterval(() => {
          if(this.seconds == 0) {
            this.isfs = true;
          } else {
            this.seconds--;
          }
        },1000)
      this.axios.post("/user/sendCode",{
        userPhone: this.tel
      })
      .then(res => { 
        console.log(res.data);
      })
    },
    login() {
      this.yzm = "";
      this.tl = "";
      this.axios.post("user/checkCode",{
         verifyCode: this.yzm
      })
      .then(res => {
        console.log(res.data);
        if(res.data.code == "200") {
          this.axios.post("/user/userLogin",{
            userPhone: this.tel,
            userPassword: "",
            verifyCode: this.yzm
          })
          .then(res => {
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
                console.log("拿到数据：",res.data.data.user);
                sessionStorage.setItem("userId",this.$store.state.userInfo.userId);
              });
            }
          })
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.yzm2 {
  background: #ddd;
  color: black;
  border: none;
}
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
.pass {
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
}
.login {
   margin-top: 20px;
  text-align: center;
  border-radius: 10px;

}
</style>