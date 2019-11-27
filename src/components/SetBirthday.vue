<template>
  <div class="setbirthday">
    <h4>请选择你的生日</h4>
    <input type="text" class="layui-input" id="test1">
    <button type="button" class="btn" @click="quit">取消</button>
    <button type="button" class="btn" @click="submit">确认</button> 
  </div>
</template>

<script>
export default {
  name: "setbirthday",
  methods: {
    quit() {
      this.$emit('changeCom','');
    },
    submit() {
      console.log("保存成功！")
      this.$emit('changeCom','');
    }
  },
  mounted() {
    layui.use('laydate', function(){
      var laydate = layui.laydate;
      laydate.render({
        elem: '#test1'
      });
    });
  }
}
</script>

<style lang="less" scoped>

  .setbirthday {
    width: 180px;
    height: 100px;
    background: white;
    text-align:center;

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