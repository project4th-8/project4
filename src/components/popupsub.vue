<template>
  <div class="box">
    <div>
      <van-cell-group>
        <van-cell title="请选择你想投诉的类型" class="type" />
      </van-cell-group>
    </div>

    <div class="sel">
      <van-button type="default" :class="{showcolor:list===1}" @click="list=1">垃圾营销</van-button>
      <van-button type="default" :class="{showcolor:list===2}" @click="list=2">涉黄信息</van-button>
      <van-button type="default" :class="{showcolor:list===3}" @click="list=3">语言攻击</van-button>
      <van-button type="default" :class="{showcolor:list===4}" @click="list=4">违法信息</van-button>
      <van-button type="default" :class="{showcolor:list===5}" @click="list=5">诈骗信息</van-button>
      <van-button type="default" :class="{showcolor:list===6}" @click="list=6">内容抄袭</van-button>
    </div>
    <div>
      <van-cell-group>
        <van-field
          v-model="message"
          rows="1"
          autosize
          label="原因："
          type="textarea"
          placeholder="请输入原因，限制40字"
        />
      </van-cell-group>
    </div>
    <div class="bottom">
      <van-button type="default"   @click="quit">取消</van-button>
      <van-button type="default" color="red" class="ok"  @click="sure">确定</van-button>
    </div>
  </div>
</template>
<script>
import { Icon, Popup, Button, Cell, CellGroup,Field } from "vant";
export default {
  name: "popupsub",
  props: ["showpopsub"],
  data() {
    return {
      list:'',
      message:''
      
    };
  },
  created() {
    this.list = '';
  },
  components: {
    [Icon.name]: Icon,
    [Popup.name]: Popup,
    [Button.name]: Button,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Field.name]:Field
  },
  methods: {
    quit:function() {
      this.list = '';
       this.$emit('clickbox', false);
    },
     sure:function() {
       this.list = '';
       this.$emit('clickbox', false);
    }
  }
};
</script>

<style lang="less" scoped>

.showcolor {
  background: orange;
}
.type {
  color: #000;
}
.sel {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .van-button {
    margin-top: 10px;
    height: 30px;
    line-height: 30px;
  }
}

.box {
  width: 80%;
  height: 300px;
  border-radius: 2px;
  background: #fff;
  margin: 40% auto;
  
  overflow: auto;
}
.bottom {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  .van-button {
    width: 100px;
  }
}
</style>