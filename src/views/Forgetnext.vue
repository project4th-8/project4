<template>
  <div class="Forgetpassword">
    <div class="top">
      <router-link to="/Forgetpassword">
        <van-icon name="arrow-left" class="back" />
      </router-link>
    </div>
    <h6>设置密码</h6>

    <div class="main">
      <van-cell-group>
        <van-cell-group>
          <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
        </van-cell-group>
        <van-cell-group>
          <van-field v-model="password" type="passwordok" label="重复密码" placeholder="请输入密码" required />
        </van-cell-group>
        <van-button class="ok" type="primary" size="large" @click="ok">完成</van-button>
      </van-cell-group>
    </div>

    <!-- 提示框 -->
    <div v-show="showtishi" class="tishi">必填信息不能为空!</div>
  </div>
</template>

<script>
import { Icon, Field, Cell, CellGroup, Button } from "vant";
export default {
  name: "Forgetpassword",
  data() {
    return {
      password: "",
      passwordok: "",
      showtishi: false
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
    ok: function() {
      if(this.password && this.passwordok != 0) {
        this.axios.post("/user/updatePassword",{
          userPhone: sessionStorage.getItem("tel"),
          userPassword: this.password
        })
        .then(res => {
          console.log(res.data);
          if(res.data.code == "200") {
            this.$router.replace("/Login");
            sessionStorage.removeItem("tel");
          }
        })
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