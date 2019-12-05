<template>
  <div class="replay">
     <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell>
      <van-popup v-model="show" position="top" :style="{ height: '20%' }">内容</van-popup> -->
    <div class="top">
      <span @click="esct">取消</span>
      <p>回复<span></span></p>
      <button @click="send">发送</button>
    </div>
    <textarea name="" v-model="content" id="" cols="30" rows="10" placeholder="请输入你要回复的内容"></textarea>
  </div>
</template>
<script>
export default {
  name:"replay",
  data(){
    return{
     userId:""
    }
  },
  methods:{
    esct(){
      this.$router.push("/commentstwo")
    },
    send(){
      // this.$router.push("/commentstwo")
      this.axios
      .post('/dynamic/findAllDyAndRe',{
        dynamicId:1
      })
      .then(res=>{
        console.log(res.data)
      })
      .cacth(err=>{
        console.log(err)
      })
    }
  },
  created(){
    var i = sessionStorage.getItem("userId");
    sessionStorage.removeItem("userId");
    this.userId = i;

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
    border-bottom: 1px solid rgb(156, 151, 151);
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
      width: 60px;
      height: 30px;
      border-radius: 40%;
      border: none;
    }
    p{
      font-size: 16px;
      span{
       color: black;
       font-weight: 600;
      }
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