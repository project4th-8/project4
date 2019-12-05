<template>
  <div class="setheadimg">
    <div class="list">
      <a href="javacript:;">
        <van-uploader class="addimg" :after-read="afterRead" />在相册中选择
      </a>
      <a href="javacript:;" @click="quit">取消</a>
    </div>
  </div>
</template>

<script>
import { Icon,Uploader } from 'vant';

export default {
  name: "setheadimg",
  components: {
    [
      Icon.name
    ]:Icon,
    [
      Uploader.name
    ]:Uploader,
  },
  methods: {
    quit() {
      this.$emit('changeCom','');
    },
    afterRead(file) {
      const form = new FormData();
      form.append("header",file.file);

      this.axios.post("/user/uploadImg",form,{
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => {
        console.log(res.data);
        if(res.data.code == "200") {
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
        }
      })
    },
  }
}
</script>

<style lang="less" scoped>
.list {
  width: 180px;
  height: 120px;
  background: white;
  text-align: center;
  .addimg {
    width: 80px;
    margin-right: -10px;
  }
  a {
    display: inline-block;
    width: 100%;
    height: 80px;
    line-height: 80px;
    &:last-child {
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>