<template>
  <div class="replay">
     <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell>
      <van-popup v-model="show" position="top" :style="{ height: '20%' }">内容</van-popup> -->
    <div class="top">
      <span @click="esct">取消</span>
      <p>回复要求</p>
      <button>发送</button>
    </div>
    <textarea name="" id="" cols="30" rows="10" placeholder="请输入你要回复的内容"></textarea>
  </div>
</template>
<script>
export default {
  name:"replay",
  methods:{
    esct(){
      this.$router.replace("/commentstwo")
    },
     esc(){
      this.$router.replace("/comments")
    }
  }
}
</script>
<style lang="less" scoped>
.replay{
  font-size: 16px;
    text-align: center;
  .top{
    width: 90%;
    margin: 0 auto;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
      width: 60px;
      height: 30px;
      border-radius: 40%;
      border: none;
    }

  }
  textarea{
      width: 90%;
      padding: 10px 0;
          border: none;
      outline: none;
      font-size: 16px;
    }
}
</style>