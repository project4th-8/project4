<template>
  <div class="setsex">
    <h4>请选择你的性别</h4>
    <select id="input" v-model="mysex">
      <option value="1">男</option>
      <option value="0">女</option>
    </select><br>
    <button type="button" class="btn" @click="quit">取消</button>
    <button type="button" class="btn" @click="submit">确认</button> 
  </div>
</template>

<script>
export default {
  name: "setsex",
  data: function() {
    return {
      mysex: 1
    }
  },
  methods: {
    quit() {
      this.$emit('changeCom','');
    },
    submit() {
      this.axios.post("/user/updateUserSex",{
        userSex: this.mysex
      })
      .then(res => {
        if(res.data.code == "200") {
          this.$emit('changeCom','');
          this.axios.post("/user/findAllUserInfo")
          .then(res => {
            console.log("我的性别：",res.data.data.user.userSex);
            if(res.data.data.user.userSex == 1) {
              res.data.data.user.userSex = "男";
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
  }
}
</script>

<style lang="less" scoped>
  .setsex {
    width: 180px;
    height: 100px;
    background: white;
    text-align:center;

    h4 {
     margin-top: 5px;
    }

    #input {
      width: 115px;
      height: 25px;
      margin-top: 10px;
      background: transparent;
      text-indent: 45px;
    }

    .btn {
      width: 50px;
      height: 22px;
      border: none;
      outline: none;
      color: white;
      background: rgb(91, 91, 179);
      float: right;
      margin-top: 10px;

      &:nth-of-type(1) {
        margin: 10px 35px 0 13px;
        background: rgb(206, 206, 206);
      }
    }
  }
</style>