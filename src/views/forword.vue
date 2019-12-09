<template>
  <div class="create">
    <div>
      <van-nav-bar
        title="转发正文"
        left-text="返回"
        left-arrow
        right-text="发布"
        @click-left="re"
        @click-right="submittxt"
      ></van-nav-bar>
    </div>

    <div>
      <van-cell-group class="autocontent">
        <van-field
          v-model="dynamicTitle"
          rows="2"
          autosize
          label="内容"
          type="textarea"
          placeholder="分享精彩"
        ></van-field>
      </van-cell-group>
    </div>
    <div class="recommend">
      <div class="fix-top"></div>
      <div class="content">
        <div class="top">
          <div>
            <a href="/about" class="links">
              <div class="Img">
                <img :src="date.userImg" alt />
              </div>
              <div>
                <p>
                  {{date.userName}}
                  <span class="iconfont icon-v" :class="{on:date.isMaster == 0}"></span>
                </p>
                <p class="time">{{date.dynamicTime}}</p>
              </div>
            </a>
          </div>
          <div class="down-list"></div>
        </div>
        <div class="center">
          <h5>{{date.dynamicTitle}}</h5>
          <div class="mian-content">{{date.dynamicContent}}</div>
        </div>
      </div>
    </div>
    <div class="bottoms">
      <span class="iconfont icon-at" @click="at"></span>
      <span class="fund">
        <van-icon name="gold-coin-o" @click="fund" />
      </span>
    </div>
    <div>
      <van-action-sheet
        v-model="show"
        :close-on-click-action="true"
        :actions="actions"
        cancel-text="取消"
        @cancel="onCancel"
        @select="onSelect"
      />
    </div>
  </div>
</template>
<script>
import { NavBar, Cell, CellGroup, Field, Uploader, Icon, Toast,  ActionSheet } from "vant";
export default {
  name: "createtext",
  data: function() {
    return {
      username: "",
      message: "",
      date: [],
      dynamicId: "",
      userId: "",
      dynamicTitle: "",
      token: "",
      show: false,
      actions: [],
      funds: [
        { name: "$立德基金" },
        { name: "$钱攀攀股票" },
        { name: "$华宇基金" }
      ]
    };
  },
  created() {
    this.dynamicId = sessionStorage.getItem("forworddynamicId");
    this.userId = sessionStorage.getItem("forworduserId");
    this.token = sessionStorage.getItem("token");
    this.axios
      .post("/dynamic/findOneById", {
        dynamicId: this.dynamicId
      })
      .then(res => {
        this.date = res.data.data;
      });
  },
  components: {
    [NavBar.name]: NavBar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Uploader.name]: Uploader,
    [Toast.name]: Toast,
    [Icon.name]: Icon,
    [ActionSheet.name]: ActionSheet

    // ActionSheet
  },
  methods: {
    re: function() {
      sessionStorage.removeItem("forworduserId");
      sessionStorage.removeItem("forworddynamicId");
      this.$router.push("/");
    },
    onCancel() {
      this.show = false;
    },
    onSelect: function(item) {
      this.dynamicTitle += item.name;
    },
    at: function() {
      this.show = true;
      this.axios
        .post("/findAllAttention", {
          userId: sessionStorage.getItem("userId")
        })
        .then(res => {
          this.actions = res.data.data;
          this.actions.map(item => {
            item.name = "@" + item.userName;
            return item;
          });
        });
    },
    fund: function() {
      this.show = true;
      this.actions = this.funds;
    },
    submittxt: function() {
      this.axios
        .post("/dynamic/returnBy", {
          ids: null,
          dynamicId: this.dynamicId,
          dynamicTitle: this.dynamicTitle,
          token: this.token
        })
        .then(res => {
          if (res.data.code == "200") {
            res.data;
            Toast("发布成功");
            setTimeout(() => {
              this.$router.replace("/Mtext");
            }, 1500);
          }
        });
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

.main-content {
  white-space: normal !important;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.bottoms {
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
.recommend {
  .content {
    font-size: 16px;
    width: 80%;
    margin: 0 auto;
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
  }

  .icon-v {
    font-size: 20px;
    color: #ddd;
  }
  .on {
    color: orange;
  }
  .moduls {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.407);
    position: fixed;
    z-index: 1000;
    top: 0;
  }

  .links {
    display: flex;
    justify-content: space-around;
  }

  .time {
    font-size: 12px;
    color: #ddd;
  }
  .top {
    display: flex;
    justify-content: space-between;
    padding: 6px 0;
    border-bottom: 1px solid #ddd;
  }
  .Img {
    width: 40px;
    height: 40px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid #ddd;
    margin: 0 10px;
    overflow: hidden;
    img {
      width: auto;
      height: 40px;
    }
  }
  .down {
    font-size: 23px;
    margin-right: 10px;
  }
  .Report {
    width: 30px;
    font-size: 12px;
    position: relative;
    z-index: 2;
  }
  .center {
    width: 84%;
    margin: 20px auto 0;
    font-size: 12px;
    h5 {
      font-size: 16px;
      padding-bottom: 2px;
    }
    height: 90px;
  }
  .bottom {
    display: flex;
    justify-content: space-around;
    border-bottom: 6px solid #ddd;

    div {
      width: 70px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      padding: 0 20px;
      font-size: 12px;
    }
    .iconfont {
      font-size: 16px;
      color: rgb(173, 173, 173);
    }
  }
}
</style>