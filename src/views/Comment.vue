<template>
  <div class="comment">
    <!-- 标题 -->
    <div class="title">
      <router-link to="/About">取消</router-link>
      <span>我的评论</span>
    </div>

    <!-- 评论 -->
    <div class="commentList">
      <div class="mycomment" v-for="(item,index) in mycommit" :key="index">
        <p class="comCon">{{item.replyContent}}</p>
        <!-- 评论文章 -->
        <div>
          <p class="contitle">{{item.dynamic.dynamicTitle}}</p>
          <p class="conjj">{{item.dynamic.dynamicContent.substr(0,21) + "...."}}</p>
        </div>
        <p class="commentInfo">
          <span class="time">{{item.replyTime}}</span><span class="delcomment" @click="delcomment(item.replyId)">删除</span>
        </p>
      </div>
    </div>

    <!-- 提示 -->
    <p v-show="showtishi==1" class="tishi">删除成功！</p>
  </div>
</template>

<script>
export default {
  name: "comment",
  data: function() {
    return {
      mycommit: [],
      showtishi: 0
    }
  },
  created() {
    this.axios.post("/user/findAllReplyById",{
      userId: sessionStorage.getItem("userId")
    })
    .then(res => {
      this.mycommit = res.data.data;
      console.log("我的评论：",this.mycommit);
    })
  },
  methods: {
    delcomment(id) {
      console.log("删除的是id为：",id,"的评论");
      this.axios.post("/dynamic/deleteReplyById",{
        replyId: id
      })
      .then(res => {
        console.log(res.data);
        this.showtishi = 1;
        this.axios.post("/user/findAllReplyById",{
          userId: sessionStorage.getItem("userId")
        })
        .then(res => {
          this.mycommit = res.data.data;
          console.log("我的评论：",this.mycommit);
        })
        setTimeout(() => {
          this.showtishi = 0;
        },1000)
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .comment {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: rgb(247, 247, 247);
    .tishi {
      position: fixed;
      bottom: 25px;
      left: 155px;
      font-size: 16px;
    }
    .title {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: white;
      box-shadow: 0 1px 1px rgb(236, 236, 236);

      a {
        font-size: 14px;
        color: rgb(92, 92, 92);
        position: absolute;
        left: 10px;
        top: 0;
        &:active {
          color: rgb(233, 233, 233);
        }
      }
      span {
        font-size: 18px;
      }
    }
    .commentList {
      overflow: auto;
      width: 100%;
      height: 612px;
      margin-top: 55px;

      .mycomment {
        height: 115px;
        background: white;
        padding: 10px;
        margin-bottom: 10px;
        .comCon {
          font-size: 16px;
          font-weight: bold;
        }
        .time {
          font-size: 12px;
          color: rgb(131, 131, 131);
          margin-left: 20px;
          margin-top: 2px;
        }

        .delcomment {
          font-size: 12px;
          color: rgb(131, 131, 131);
          margin-left: 10px;
        }
        div {
          height: 50px;
          border: 1px solid #ddd;
          margin: 10px auto 0;
          padding: 5px 15px;
          overflow: auto;

          .contitle {
            font-size: 17px;
          }
          .conjj {
            font-size: 14px;
            margin-top: 5px;
            color: rgb(158, 158, 158);
          }
        }
        .commentInfo {
          margin-top: 10px;
          .time {
            float: left;
            margin-left: 5px;
          }
          .delcomment {
            float: right;
          }
        }
      }
    }
  }
</style>