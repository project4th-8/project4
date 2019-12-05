<template>
  <div>
    <h6>手机验证码登录</h6>
    <div>
      <van-field v-model="tel" clearable placeholder="请输入手机号" class="name" />
      <van-field v-model="yzm" center clearable placeholder="请输入短信验证码">
        <van-button v-if="isfs" slot="button" size="small" type="primary" @click="fsyzm">发送验证码</van-button>
        <van-button
          v-else
          slot="button"
          size="small"
          type="primary"
          class="yzm2"
          disabled
        >{{seconds}}s后发送</van-button>
      </van-field>
    </div>
    <van-button type="primary" size="large" class="login" @click="login">登录</van-button>

    <!-- 提示框 -->
    <div v-show="showtishi" class="tishi">请输入正确的手机号和密码</div>
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
      yzm: "",
      isfs: true,
      seconds: 60,
      showtishi: false
    };
  },
  components: {
    [Field.name]: Field,
    [Button.name]: Button
  },
  methods: {
    fsyzm() {
      if(this.tel != "") {
        this.isfs = false;
        var timer = setInterval(() => {
          if (this.seconds > 1) {
            this.seconds--;
          } else {
            clearInterval(timer);
            this.isfs = true;
            this.seconds = 60;
          }
        }, 1000);
        this.axios
          .post("/user/sendCode", {
            userPhone: this.tel
          })
          .then(res => {
            console.log(res.data);
          });
      } else {
        this.showtishi = true;
        setTimeout(() => {
          this.showtishi = false;
        }, 2500);
      }
    },
    login() {
      if (this.yzm != "" && this.tel != "") {
        this.axios
          .post("user/checkCode", {
            userPhone: this.tel,
            verifyCode: this.yzm
          })
          .then(res => {
            console.log(res.data);
            if (res.data.code == "200") {
              this.axios
                .post("/user/userLogin", {
                  userPhone: this.tel,
                  verifyCode: this.yzm,
                  userPassword: ""
                })
                .then(res => {
                  console.log(res.data);
                  if (res.data.code == "200") {
                    this.$router.replace("/home");
                    sessionStorage.setItem("token", res.data.data);

                    this.axios.post("/user/findAllUserInfo").then(res => {
                      if (res.data.data.user.userSex == 1) {
                        res.data.data.userSex = "男";
                      } else {
                        res.data.data.user.userSex = "女";
                      }
                      this.$store.state.userInfo = res.data.data.user;
                      console.log("拿到数据：", res.data.data.user);
                      sessionStorage.setItem(
                        "userId",
                        this.$store.state.userInfo.userId
                      );
                    });
                  }
                });
            }
          });
      } else {
        this.showtishi = true;
        setTimeout(() => {
          this.showtishi = false;
        }, 2500);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.tishi {
  position: fixed;
  bottom: 30px;
  left: 95px;
  background: black;
  color: white;
  font-size: 14px;
  padding: 10px;
  border-radius: 7px;
  transition: all .5s;
}
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
  border-radius: 5px;
}
</style>