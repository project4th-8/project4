<template>
  <div class="Forgetpassword">
    <div class="top">
      <router-link to="/Login">
        <van-icon name="arrow-left" class="back" />
      </router-link>
    </div>
    <h6>找回密码</h6>

    <div class="main">
      <van-cell-group>
        <van-field v-model="username" label="+86" placeholder="请输入手机号" />
        <van-cell-group>
          <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
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
        </van-cell-group>
        <van-button class="ok" type="primary" size="large" @click="ok">下一步</van-button>
      </van-cell-group>
    </div>

    <!-- 提示框 -->
    <div v-show="showtishi" class="tishi">必填信息不能为空!</div>
    <div v-show="showtishi2" class="tishi">用户不存在，请先注册!</div>
  </div>
</template>

<script>
import { Icon, Field, Cell, CellGroup, Button } from "vant";
export default {
  name: "Forgetpassword",
  data() {
    return {
      username: "",
      sms: "",
      isfs: true,
      seconds: 60,
      showtishi: false,
      showtishi2: false,
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
    fsyzm() {
      if (this.username != "") {
        this.axios
          .post("/user/sendCode", {
            userPhone: this.username
          })
          .then(res => {
      
            if(res.data.code == "2002") {
              this.showtishi2 = true;
              setTimeout(() => {
                this.showtishi2 = false;
              }, 2500);
            } else {
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
            }
          });
      } else {
        this.showtishi = true;
        setTimeout(() => {
          this.showtishi = false;
        }, 2500);
      }
    },
    ok() {
      if (this.username && this.sms != "") {
        this.axios
          .post("/user/checkCode", {
            userPhone: this.username,
            verifyCode: this.sms
          })
          .then(res => {
            this.sms = "";
       
            if (res.data.code == "200") {
              sessionStorage.setItem("tel", this.username);
              this.$router.replace("/Forgetnext");
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
@import "../assets/style/resize.css";

.tishi {
  position: fixed;
  bottom: 30px;
  left: 125px;
  background: black;
  color: white;
  font-size: 14px;
  padding: 10px;
  border-radius: 7px;
}
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