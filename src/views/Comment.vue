<template>
  <div class="comment">
    <!-- 标题 -->
    <div class="title">
      <a href="/About">取消</a>
      <span>我的评论</span>
    </div>

    <!-- 评论 -->
    <div class="commentList">
      <div class="mycomment">
        <p class="comCon">今天天气真好！ <span class="time">15:30</span></p>
        <!-- 评论文章 -->
        <div>
          <p class="contitle">xxxx</p>
          <p class="conjj">阿三大苏打</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment"
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
        height: 90px;
        background: white;
        padding: 10px;
        margin-bottom: 10px;

        .time {
          font-size: 14px;
          color: rgb(131, 131, 131);
        }
        p {
          font-size: 16px;
        }
        div {
          height: 50px;
          border: 1px solid #ddd;
          margin: 10px auto 0;
          padding: 5px 15px;

          .contitle {
            font-size: 18px;
            font-weight: bold;
          }
          .conjj {
            font-size: 14px;
            margin-top: 5px;
            color: rgb(158, 158, 158);
          }
        }
      }
    }
  }
</style>