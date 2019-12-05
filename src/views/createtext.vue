<template>
  <div class="create">
    <div>
      <van-nav-bar
        title="发表正文"
        left-text="返回"
        left-arrow
        right-text="发布"
        @click-left="re"
        @click-right="submittxt"
      ></van-nav-bar>
    </div>
    <div>
      <van-cell-group>
        <van-field v-model="title" clearable label="文章标题" placeholder="请输入文章标题" />
      </van-cell-group>
    </div>
    <div>
      <van-cell-group class="autocontent">
        <van-field
          v-model="message"
          rows="6"
          autosize
          label="内容"
          type="textarea"
          placeholder="分享精彩"
        >
        
        </van-field>
   
        <div>
          <van-uploader v-model="fileList" multiple :max-count="3" />
        </div>
      </van-cell-group>
    </div>
    <div class="bottom">
      <span class="iconfont icon-at" @click="at"></span>
      <span class="fund">
        <van-icon name="gold-coin-o" @click="fund" />
      </span>
    </div>
  </div>
</template>
<script>
import { NavBar, Cell, CellGroup, Field, Uploader, Icon } from "vant";

export default {
  name: "createtext",
  data: function() {
    return {
      title: "",
      fileList: [],
      message: "",
      count: 0,
      files:'',
      imgs:''
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Uploader.name]: Uploader,
    [Icon.name]: Icon
  },
  methods: {
    re: function() {
      this.$router.replace("/");
    },
    uploadImages(images) {
      this.refundImages = images;
    },
    at: function() {
      this.message += "@";
    },
    fund: function() {
      this.message += "$";
    },
    submittxt: function() {
      this.axios
        .post("/dynamic/publish", {
          dynamicTitle: this.title,
          dynamicContent: this.message,
          peopleId: null,
          fundId: null,
          userId: 1
        })
        .then(res => {
          console.log(res.data);
          res.data.caode;
        });

        this.fileList.forEach((item) => {
          var form = new FormData();
          this.files = item.file;
          form.append("header",this.files);

        this.axios
          .post("/dynamic/uploadImg", form, {
            header: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(res => {
            console.log(res.data);
           
          }); 
      });
    },
    filenext() {
      console.log();
    }
  }
};
</script>
<style lang="less" scoped>
.create {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1000;
  background: #fff;
}
.autocontent {
  height: auto;
}
.bottom {
  display: flex;
  justify-content: flex-end;
  height: 80px;
  line-height: 80px;
  span {
    width: 30px;
    padding: 0 20px;
  }
  .fund {
    margin-top: 5px;
    font-size: 28px;
  }
  .iconfont {
    font-size: 28px;
  }
}
</style>