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
        ></van-field>

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
    <div>
      <van-action-sheet v-model="show" :close-on-click-action="true" :actions="actions" cancel-text="取消" @cancel="onCancel" @select="onSelect" />
    </div>
  </div>
</template>
<script>

import {
  NavBar,
  Cell,
  CellGroup,
  Field,
  Uploader,
  Icon,
  ActionSheet,
  Toast 
} from "vant";

export default {
  name: "createtext",
  data: function() {
    return {
      title: "",
      fileList: [],
      message: "",
      count: 0,
      files: "",

      imgs: "",
      show: false,
      actions: [],
      funds:[
        {name:"$立德基金"},
        {name:"$钱攀攀股票"},
        {name:"$华宇基金"}
      ]
      
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Uploader.name]: Uploader,
    [Icon.name]: Icon,
    [Toast.name]: Toast,
    [ActionSheet.name]: ActionSheet,
   
  },
  watch:{
   
  },
 
  methods: {
    re: function() {
      this.$router.replace("/");
    },
    uploadImages(images) {
      this.refundImages = images;
    },
    at: function() {
      this.show = true;
      this.axios
        .post("/findAllAttention", {
          userId: sessionStorage.getItem("userId")
        })
        .then(res => {
         this.actions = res.data.data
         this.actions.map((item)=> {
           item.name = "@" +item.userName;
           return item
         })
        });
    },
    onSelect: function(item) {
       this.message += item.name
    },
    fund: function() {
    
      this.show = true;
      this.actions = this.funds
    },
    onCancel() {
      this.show = false;
    },
    submittxt: function() {
      this.axios
        .post("/dynamic/publish", {
          dynamicTitle: this.title,
          dynamicContent: this.message,
          peopleId: null,
          fundId: null,
          userId: sessionStorage.getItem('userId')
        })
        .then(res => {

          if(res.data.code == "200") {
           res.data
           Toast('发布成功');
           setTimeout( ()=>{
           this.$router.replace('/Mtext')
           },1500)
          }
        });

      this.fileList.forEach(item => {
        var form = new FormData();
        this.files = item.file;
        form.append("header", this.files);

        this.axios
          .post("/dynamic/uploadImg", form, {
            header: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(res => {
            res.data
          });
      });
    },
    filenext() {

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