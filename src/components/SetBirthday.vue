<template>
  <div class="setbirthday">
    <h4>请选择你的生日</h4>
    <van-datetime-picker class="setbir"
      v-model="currentDate"
      type="date"
      :min-date="minDate"
      @cancel="quit"
      @confirm="submit"
    />
  </div>
</template>

<script>
import { DatetimePicker } from 'vant';
export default {
  name: "setbirthday",
  data() {
    return {
      minDate: new Date(1988,1,1),
      currentDate: new Date()
    };
  },
  methods: {
    quit() {
      this.$emit('changeCom','');
    },
    submit() {
      var bir = this.currentDate.toLocaleDateString().split("/").join("-");

      this.axios.post("/user/updateUserBirth",{
        userBirth: bir
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
    },

  },
  components: {
    [DatetimePicker.name]:DatetimePicker
  }

}
</script>

<style lang="less" scoped>

  .setbirthday {
    width: 180px;
    height: 100px;
    background: white;
    text-align:center;
    .setbir {
      margin-top: -100px;
    }
    h4 {
     margin-top: 5px;
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