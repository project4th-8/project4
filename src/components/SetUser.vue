<template>
  <div class="setuser">
    <div class="list">
      <h4>请输入你的昵称</h4>
      <textarea maxlength="16" class="input" cols="30" rows="10" @input="pattest">用户xxx</textarea>
      <span class="fontnum"><span>{{num}}</span>/16</span><br>
      <span class="pat">仅支持中英文和数字</span>
      <button type="button" class="btn" @click="quit">取消</button>
      <button type="button" class="btn" @click="submit">确认</button> 
    </div>
  </div>
</template>

<script>
export default {
  name: "setuser",
  data: function() {
    return {
      num: ""
    }
  },
  methods: {
    quit() {
      this.$emit('changeCom','');
    },
    pattest() {
      var pat = /^[\u4e00-\u9fa5a-zA-Z0-9]{1,16}$/;
      var con = document.getElementsByClassName("input")[0].value;
      console.log(con);
      if(con.length < 17) {
        this.num = con.length;
      }
      if(!pat.test(con)) {
        document.getElementsByClassName("pat")[0].style.display = "inline";
      } else {
        document.getElementsByClassName("pat")[0].style.display = "none";
      }
    },
    submit() {
      console.log("保存成功！")
      this.$emit('changeCom','');
    }
  },
  created() {
    this.num = 5;
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