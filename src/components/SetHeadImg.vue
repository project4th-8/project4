<template>
  <div class="setheadimg">
    <div class="list">
      <a href="javacript:;">
        <van-uploader class="addimg" :after-read="afterRead" />
        从相册选择
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
      // 此时可以自行将文件上传至服务器
      console.log(file);
      
    }
  }
}
</script>

<style lang="less" scoped>
  .list {
    width: 180px;
    height: 120px;
    background: white;
    text-align:center;
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