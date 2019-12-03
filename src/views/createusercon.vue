<template>
  <div class="user">
    <div class="top">
      <router-link to="/Login">
        <van-icon name="arrow-left" class="back" />
      </router-link>
    </div>
    <h6>用户信息完善</h6>

    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />
      <van-cell-group>
        <van-field label="头像"  disabled >  
        </van-field>
        <van-uploader v-model="fileList" multiple  :max-count="1" />

      </van-cell-group>
      <van-field v-model="email" label="邮箱" placeholder="请输入邮箱" required />
      <div class="sex">
        <van-field label="性别" disabled required />
        <van-checkbox v-model="checkedm" @click="checkedm=checkedw,checkedw=!checkedw">男</van-checkbox>
        <van-checkbox v-model="checkedw" @click="checkedw=checkedm,checkedm=!checkedm">女</van-checkbox>
      </div>
      <div>
        <van-field label="生日" placeholder="请选择日期" required v-model="datecontent" @click="dates" />
      </div>

      <van-cell-group>
        <van-field
          v-model="messagebox"
          rows="1"
          autosize
          label="个性签名"
          type="textarea"
          placeholder="输入你的操作"
        />
      </van-cell-group>
      <div v-show="showdate" class="datebox">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          :min-date="minDate"
          @confirm="ok"
          @cancel="cancels"
          class="datestyle"
        />
      </div>
    </van-cell-group>

    <van-button type="default" color="#07c160" @click="next">完成</van-button>
  </div>
</template>
<script>
import {
  Field,
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  DatetimePicker,
  Button,
  Icon,
  Uploader
} from "vant";
export default {
  name: "createusercon",
  data() {
    return {
      checkedw: true,
      checkedm: false,
      username: "",
      email: "",
      minDate: new Date(1998, 1, 1),
      currentDate: new Date(),
      showdate: false,
      datecontent: "",
      messagebox: "",
        fileList: [
       
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
  
      ]
    };
  },
  components: {
    [Field.name]: Field,
    [Icon.name]: Icon,
    [Uploader.name]: Uploader,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Checkbox.name]: Checkbox,
    [CheckboxGroup.name]: CheckboxGroup,
    [DatetimePicker.name]: DatetimePicker,
    [Button.name]: Button
  },
  methods: {
    dates: function() {
      this.showdate = !this.showdate;
    },
    cancels: function() {
      this.showdate = !this.showdate;
    },
    ok: function() {
      this.datecontent = this.currentDate
        .toLocaleDateString()
        .split("/")
        .join("-");
      this.showdate = !this.showdate;
    },
    next:function() {
       this.$router.replace("/");
    }
  
  }
};
</script>
<style lang="less" scoped>
.user {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 99999;
}
.datestyle {
  position: fixed;
  z-index: 10000;
  width: 80%;
  top: 30%;
  left: 10%;
}
.datebox {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.384);
  position: fixed;
  top: 0;
  z-index: 55;
}
.van-uploader {
  display: flex;
  justify-content: center;
}
.sex {
  display: flex;
  justify-content: center;
  height: 45px;
  font-size: 20px;
  .van-checkbox {
    padding: 0 20px;
  }
}
h6 {
  font-size: 30px;
  color: #000;
  text-align: center;
  font-weight: 100;
  margin-bottom: 10px;
}
.top {
  height: 60px;
  .van-icon-arrow-left {
    font-size: 30px;
    padding: 20px;
  }
}
.van-button {
  width: 180px;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  margin: auto;
  bottom: -400px;
}
</style>