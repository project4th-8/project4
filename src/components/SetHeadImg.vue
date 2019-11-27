<template>
  <div class="setheadimg">
    <div class="list">
      <a href="javacript:;">从相册选择</a>
      <a href="javacript:;" @click="quit">取消</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "setheadimg",
  methods: {
    quit() {
      this.$emit('changeCom','');
    }
  }
}
</script>

<style lang="less" scoped>
  .list {
    width: 150px;
    height: 60px;
    background: white;
    text-align:center;
    
    a {
      display: inline-block;
      width: 100%;
      height: 30px;
      line-height: 30px;
      &:last-child {
        border-top: 1px solid #ddd;
      }
    }
  }
</style>