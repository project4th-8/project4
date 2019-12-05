<template>
  <div class="safety">
    <!-- 标题 -->
    <div class="title">
      <router-link to="/About">取消</router-link>
      <span>安全设置</span>
    </div>

    <!-- 功能 -->
    <div class="infolist">
      <div class="info" @click="settelephone">
        <a href="javascript:;">修改手机绑定</a>
        <span>
          <van-icon name="arrow" />
        </span>
      </div>
      <div class="info" @click="setpassword">
        <a href="javascript:;">修改密码</a>
        <span>
          <van-icon name="arrow" />
        </span>
      </div>
      <div class="info" @click="setmibao">
        <a href="javascript:;">修改密保</a>
        <span>
          <van-icon name="arrow" />
        </span>
      </div>
    </div>

    <!-- 修改手机号 -->
    <div class="settel">
      <!-- 验证手机号 -->
      <div>
        <p>修改手机号</p>
        <input type="text" v-model="tel" @input="yztel" placeholder="输入当前手机号" />
        <span v-show="showpat" class="pat">请输入正确的手机格式</span>
        <input v-if="showyzmbtn1" type="button" class="fsyzm" value="发送验证码" @click="sendoldcode" />
        <input v-else type="button" :value="yzmtime1 + 's后发送'" disabled />
        <input type="text" v-model="teloldyzm" placeholder="输入验证码" />
        <input type="button" value="确认" @click="showinput" />
      </div>

      <!-- 修改号码 -->
      <div class="inputtel">
        <div>
          <van-icon class="quit" name="close" @click="quitinput" />
          <p>输入要绑定的手机号</p>
          <input type="text" v-model="newtel" @input="yznewtel" placeholder="请输入手机号" />
          <span v-show="showpat2" class="pat">请输入正确的手机格式</span>
          <input v-if="showyzmbtn2" type="button" value="发送验证码" @click="sendnewcode" />
          <input v-else type="button" :value="yzmtime2 + 's后发送'" disabled />
          <input type="text" v-model="telnewyzm" placeholder="输入验证码" />
          <input type="button" value="确认修改" @click="updatatel" />
        </div>
      </div>

      <van-popup v-model="show" class="mtk">{{showCon}}</van-popup>
      <!-- 取消 -->
      <van-icon class="quit" name="close" @click="quitsettel" />
    </div>

    <!-- 修改密码 -->
    <div class="setpwd">
      <div>
        <p>修改密码</p>
        <input type="password" v-model="password" placeholder="请输入原密码" />
        <input type="password" v-model="newpassword" placeholder="请输入新密码" />
        <input type="password" v-model="newpassword2" placeholder="请再次输入新密码" />
        <input type="button" value="确认" @click="submit" />
      </div>

      <van-popup v-model="show" class="mtk">{{showCon}}</van-popup>
      <!-- 取消 -->
      <van-icon class="quit" name="close" @click="quitsetpwd" />
    </div>

    <!-- 修改密保 -->
    <div class="setmb">
      <div>
        <p>修改密保</p>
        <input type="text" v-model="userInfo.encrypteds[0].encryptedQuestion" disabled />
        <input type="text" v-model="oldanswer" placeholder="请输入旧问题答案" />
        <input type="text" v-model="newquestion" placeholder="请输入新问题" />
        <input type="text" v-model="newanswer" placeholder="请输入新问题答案" />
        <input type="button" value="确认修改" @click="submitset" />
      </div>

      <van-popup v-model="show" class="mtk">{{showCon}}</van-popup>
      <!-- 取消 -->
      <van-icon class="quit" name="close" @click="quitsetmb" />
    </div>
  </div>
</template>

<script>
import { Icon, Popup } from "vant";
import { mapState } from "vuex";

export default {
  name: "safety",
  data: function() {
    return {
      password: "",
      newpassword: "",
      newpassword2: "",
      show: false,
      showpat: false,
      showpat2: false,
      showCon: "",
      oldanswer: "",
      newquestion: "",
      newanswer: "",
      tel: "",
      newtel: "",
      telnewyzm: "",
      teloldyzm: "",
      showyzmbtn1: true,
      showyzmbtn2: true,
      yzmtime1: 60,
      yzmtime2: 60
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  components: {
    [Icon.name]: Icon,
    [Popup.name]: Popup
  },
  methods: {
    setpassword() {
      document.getElementsByClassName("setpwd")[0].style.top = "0";
    },
    setmibao() {
      document.getElementsByClassName("setmb")[0].style.top = "0";
    },
    settelephone() {
      document.getElementsByClassName("settel")[0].style.top = "0";
    },
    showinput() {
      this.axios
        .post("/user/updateOldUserPhone", {
          oldPhoneCode: this.teloldyzm
        })
        .then(res => {
          console.log(res.data);
          if (res.data.code == "200") {
            document.getElementsByClassName("inputtel")[0].style.left = "0";
          }
        });
    },
    showPopup() {
      this.show = true;
    },
    yztel() {
      if (this.tel != "") {
        var pat = /^1[3456789]\d{9}$/;
        if (!pat.test(this.tel)) {
          this.showpat = true;
        } else {
          this.showpat = false;
        }
      } else {
        this.showpat = false;
      }
    },
    yznewtel() {
      if (this.newtel != "") {
        var pat = /^1[3456789]\d{9}$/;
        if (!pat.test(this.newtel)) {
          this.showpat2 = true;
        } else {
          this.showpat2 = false;
        }
      } else {
        this.showpat2 = false;
      }
    },
    submit() {
      this.axios
        .post("/user/updateMyPassword", {
          oldPassword: this.password,
          newPassword: this.newpassword
        })
        .then(res => {
          console.log(res.data);
          if ((this.password && this.newpassword && this.newpassword2) != "") {
            if (this.newpassword != this.newpassword2) {
              this.showPopup();
              this.showCon = "两次新密码不一致！";
            } else if (res.data.code == "2001") {
              this.showPopup();
              this.showCon = "旧密码输入错误！";
            } else if (
              this.password == (this.newpassword || this.newpassword2)
            ) {
              this.showPopup();
              this.showCon = "新密码不能与旧密码相同！";
            } else {
              if (res.data.code == "200") {
                this.showPopup();
                this.showCon = "密码修改成功！请重新登录！";
                setTimeout(() => {
                  sessionStorage.removeItem("token");
                  sessionStorage.removeItem("userId");
                  sessionStorage.removeItem("dynamicId");
                  this.$router.replace("/Login");
                }, 2000);
              }
            }

            this.password = "";
            this.newpassword = "";
            this.newpassword2 = "";
          } else {
            this.showPopup();
            this.showCon = "必填内容为空！";
          }
        });
    },
    submitset() {
      if ((this.newquestion && this.oldanswer && this.newanswer) != "") {
        console.log("旧问题：", this.userInfo.encrypteds[0].encryptedQuestion);
        this.axios
          .post("/user/updateUserEncrypted", {
            oldQuestion: this.userInfo.encrypteds[0].encryptedQuestion,
            oldAnswer: this.oldanswer,
            encryptedQuestion: this.newquestion,
            encryptedAnswer: this.newanswer
          })
          .then(res => {
            console.log(res.data);
            if (res.data.code == "200") {
              this.showPopup();
              this.showCon = "密保修改成功！";

              this.newquestion = "";
              this.oldanswer = "";
              this.newanswer = "";
              setTimeout(() => {
                this.show = false;
                document.getElementsByClassName("setmb")[0].style.top = "800px";
              }, 2000);
              this.axios.post("/user/findAllUserInfo").then(res => {
                if (res.data.data.user.userSex == 1) {
                  res.data.data.user.userSex = "男";
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
            } else {
              this.showPopup();
              this.showCon = "旧密保答案错误！";
            }
          });
      } else {
        console.log(this.newquestion, this.newanswer, this.oldanswer);
        this.showPopup();
        this.showCon = "必填内容为空！";
      }
    },
    quitsetpwd() {
      document.getElementsByClassName("setpwd")[0].style.top = "800px";
      this.password = "";
      this.newpassword = "";
      this.newpassword2 = "";
    },
    quitsetmb() {
      document.getElementsByClassName("setmb")[0].style.top = "800px";
      this.mb1 = "";
      this.mb2 = "";
      this.mb3 = "";
    },
    quitsettel() {
      document.getElementsByClassName("settel")[0].style.top = "800px";
      this.showyzmbtn1 = true;
      this.tel = "";
      this.teloldyzm = "";
      this.showpat = false;
    },
    quitinput() {
      document.getElementsByClassName("inputtel")[0].style.left = "-750px";
    },
    sendoldcode() {
      if (this.tel != "") {
        this.showyzmbtn1 = false;
        var timer = setInterval(() => {
          if (this.yzmtime1 > 1) {
            this.yzmtime1--;
          } else {
            clearInterval(timer);
            this.showyzmbtn1 = true;
            this.yzmtime1 = 60;
          }
        }, 1000);

        this.axios.post("/user/sendOldUserPhoneCode",{
          oldPhone: this.tel
        })
        .then(res => {
          console.log(res.data);
        });
      } else {
        this.showPopup();
        this.showCon = "必填内容为空！";
      }
    },
    sendnewcode() {
      this.showyzmbtn2 = false;
      if (this.yzmtime2 > 0) {
        setInterval(() => {
          this.yzmtime2--;
        }, 1000);
      } else {
        this.showyzmbtn2 = true;
        this.yzmtime2 = 60;
      }
      this.axios
        .post("/user/sendNewUserPhoneCode", {
          newPhone: this.newtel
        })
        .then(res => {
          console.log(res.data);
        });
    },
    updatatel() {
      this.axios
        .post("/user/updateNewUserPhone", {
          newPhone: this.newtel,
          newPhoneCode: this.telnewyzm
        })
        .then(res => {
          if (res.data.code == "200") {
            this.showPopup();
            this.showCon = "修改成功！请重新登录";
            setTimeout(() => {
              this.$router.replace("/Login");
            }, 1500);
          }
        });
    }
  },
  created() {
    document.body.addEventListener(
      "touchmove",
      function(e) {
        e.preventDefault();
      },
      { passive: false }
    );
  }
};
</script>

<style lang="less" scoped>
input[type="button"]:active {
  color: rgb(233, 211, 171);
}
.safety {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: white;
  overflow: hidden;

  .title {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: white;
    box-shadow: 0 1px 1px rgb(236, 236, 236);

    a {
      font-size: 14px;
      color: rgb(92, 92, 92);
      position: absolute;
      left: 10px;
      top: 0;
      &:active {
        color: rgb(233, 233, 233);
      }
    }
    span {
      font-size: 18px;
    }
  }
  .infolist {
    width: 100%;
    box-shadow: 0 -1px 1px rgb(236, 236, 236);
    margin-top: 55px;
    background: white;

    .info {
      width: 100%;
      height: 40px;
      border-bottom: 1px solid rgb(236, 236, 236);
      font-size: 16px;
      line-height: 40px;
      text-indent: 10px;

      a {
        font-size: 14px;
      }
      span {
        float: right;
      }
    }
  }
}

.setpwd {
  width: 100%;
  height: 100%;
  background: white;
  position: absolute;
  top: 800px;
  left: 0;
  z-index: 999;
  transition: all 0.3s;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 25px;
    }
    input {
      width: 250px;
      height: 35px;
      font-size: 15px;
      margin-top: 10px;
      text-indent: 5px;

      &::-webkit-input-placeholder {
        font-size: 15px;
      }
      &[type="button"] {
        background: rgb(97, 175, 97);
        border: none;
        color: white;
      }
    }
  }

  .mtk {
    width: 250px;
    height: 35px;
    line-height: 35px;
    font-size: 16px;
  }
  .quit {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
.settel {
  width: 100%;
  height: 100%;
  background: white;
  position: absolute;
  top: 800px;
  left: 0;
  z-index: 999;
  transition: all 0.3s;
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    .pat {
      font-size: 14px;
      color: red;
      margin-left: -110px;
    }
    p {
      font-size: 25px;
    }
    input {
      width: 250px;
      height: 35px;
      font-size: 15px;
      margin-top: 10px;
      text-indent: 5px;

      &::-webkit-input-placeholder {
        font-size: 15px;
      }
      &[type="button"] {
        background: rgb(97, 175, 97);
        border: none;
        color: white;
      }
    }
  }
  .mtk {
    width: 250px;
    height: 35px;
    line-height: 35px;
    font-size: 16px;
  }
  .quit {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .inputtel {
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255);
    position: absolute;
    left: -750px;
    top: 0;
    z-index: 999;
    transition: all 0.5s;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
.setmb {
  width: 100%;
  height: 100%;
  background: white;
  position: absolute;
  top: 800px;
  left: 0;
  z-index: 999;
  transition: all 0.3s;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: 25px;
    }
    input {
      width: 250px;
      height: 35px;
      font-size: 15px;
      margin-top: 10px;
      text-indent: 5px;

      &::-webkit-input-placeholder {
        font-size: 15px;
      }
      &[type="button"] {
        background: rgb(97, 175, 97);
        border: none;
        color: white;
      }
    }
  }

  .mtk {
    width: 250px;
    height: 35px;
    line-height: 35px;
    font-size: 16px;
  }
  .quit {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>