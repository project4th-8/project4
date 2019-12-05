<template>
  <div class="setemail">
    <div class="list">
      <h4>请输入你的邮箱</h4>
      <textarea maxlength="30" v-model="myemail" class="input" cols="30" rows="10" @input="pattest"></textarea>
      <span class="fontnum"><span>{{num}}</span>/30</span><br>
      <span class="pat">请输入邮箱格式</span>
      <button type="button" class="btn" @click="quit">取消</button>
      <button type="button" class="btn" @click="submit">确认</button> 
    </div>
  </div>
</template>

<script>
export default {
  name: "setemail",
  data: function() {
    return {
      num: 0,
      myemail: ""
    }
  },
  methods: {
    quit() {
      this.$emit('changeCom','');
    },
    pattest() {
      var pat = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      var con = document.getElementsByClassName("input")[0].value;
      if(con.length < 31) {
        this.num = this.myemail.length;
      }
      if(con != "") {
        if(!pat.test(con)) {
          document.getElementsByClassName("pat")[0].style.display = "inline";
        } else {
          document.getElementsByClassName("pat")[0].style.display = "none";
        }
      } else {
        document.getElementsByClassName("pat")[0].style.display = "none";
      }
    },
    submit() {
      this.axios.post("/user/updateUserEmail",{
        userEmail: this.myemail
      })
      .then(res => {
        console.log(res.data);
        this.$emit('changeCom','');
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
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .list {
    overflow: hidden;
    width: 320px;
    height: 110px;
    background: white;
    text-align:center;
    
    h4 {
     margin-top: 5px;
    }
    .input {
      width: 240px;
      height: 20px;
      border-radius: 5px;
      margin-top: 10px;
      font-size: 16px;
      outline: none;
      padding: 5px;
    }

    .fontnum {
      font-size: 16px;
    }
    .pat {
      float: left;
      margin-left: 20px;
      font-size: 14px;
      color: red;
      display: none;
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