<template>
  <div class="setsign">
    <div class="list">
      <h4>请输入你的个性签名</h4>
      <textarea maxlength="120" v-model="userSign" class="input" cols="30" rows="10" @input="pattest"></textarea><br>
      <span class="fontnum"><span>{{num}}</span>/120</span>
      <button type="button" class="btn" @click="quit">取消</button>
      <button type="button" class="btn" @click="submit">确认</button> 
    </div>
  </div>
</template>

<script>
export default {
  name: "setsign",
  data: function() {
    return {
      num: 0,
      userSign: ""
    }
  },
  methods: {
    quit() {
      this.$emit('changeCom','');
    },
    pattest() {
      var con = document.getElementsByClassName("input")[0].value;

      if(con.length < 121) {
        this.num = this.userSign.length;
      }
    },
    submit() {
      this.axios.post("/user/updateUserSign",{
        userSign: this.userSign
      })
      .then(res => {
        console.log(res.data);
        this.$emit('changeCom','');
          this.axios.post("/user/findAllUserInfo")
          .then(res => {
            if(res.data.data.user.userSex == 1) {
              res.data.data.user.userSex = "男";
            } else {
              res.data.data.user.userSex = "女";
            }
            this.$store.state.userInfo = res.data.data.user;
            console.log("拿到数据：",res.data.data.user);
            sessionStorage.setItem("userId",this.$store.state.userInfo.userId);
          });
      })
    }
  },
  created() {
    console.log("我的签名：",this.$store.state.userInfo.userSign);
    this.userSign = this.$store.state.userInfo.userSign;
    this.num = this.userSign.length;
  }
}
</script>

<style lang="less" scoped>
  .list {
    overflow: hidden;
    width: 320px;
    height: 150px;
    background: white;
    text-align:center;
    
    h4 {
     margin-top: 5px;
    }
    .input {
      width: 240px;
      height: 60px;
      border-radius: 5px;
      margin-top: 10px;
      font-size: 16px;
      outline: none;
      padding: 5px;
    }

    .fontnum {
      font-size: 16px;
      float: left;
      margin-left: 33px;
    }

    .btn {
      width: 50px;
      height: 25px;
      border: none;
      outline: none;
      color: white;
      background: rgb(91, 91, 179);
      float: right;
      margin-top: 5px;

      &:nth-of-type(1) {
        margin: 5px 50px 0 5px;
        background: rgb(206, 206, 206);
      }
    }
  }
</style>