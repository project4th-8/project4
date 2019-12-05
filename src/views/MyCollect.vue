<template>
  <div class="mycollect">
    <!-- 标题 -->
    <div class="title">
      <router-link to="/About">取消</router-link>
      <span>我的收藏</span>
    </div>

    <!-- 内容 -->
    <div class="collectCon">
      <div class="collentList" v-for="(item,index) in mycollect" :key="index">
        <div @click="todynamic(item.dynamicId)">
          <p class="contitle">{{item.dynamicTitle}}</p>
          <div class="content">
            <p>{{item.dynamicContent}}</p>
          </div>
        </div>

        <p class="collectInfo">
          <span class="time">{{item.dynamicTime}}</span>
          <span class="delcollect" @click="delCollect(item.dynamicId)">删除</span>
        </p>
      </div>
    </div>

    <!-- 提示 -->
    <p v-show="showtishi==1" class="tishi">删除成功！</p>

    <div v-show="!nobody" class="nobody">
      <span>我没有发表过收藏</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "mycollect",
  data: function() {
    return {
      mycollect: [],
      showtishi: 0,
      nobody: false
    };
  },
  created() {
    this.axios
      .post("/user/dynamicList", {
        userId: sessionStorage.getItem("userId")
      })
      .then(res => {
        if(res.data.code == "200") {
          if(res.data.data.length != 0) {
            this.mycollect = res.data.data;
            this.nobody = true;
          } else {
            this.nobody = false;
          }
        }
      });
  },
  methods: {
    delCollect(id) {
      this.axios.post("/dynamic/changeCollect",{
        dynamicId: id,
        userId: sessionStorage.getItem("userId")
      })
      .then(res => {
        console.log(res.data);
        if(res.data.code == "200") {
          this.axios
          .post("/user/dynamicList", {
            userId: sessionStorage.getItem("userId")
          })
          .then(res => {
            this.mycollect = res.data.data;
          });
          this.showtishi = 1;
          setTimeout(() => {
          this.showtishi = 0;
        },1500)
        }
      })
    },
    todynamic(id) {
      console.log("动态id为：",id);
      sessionStorage.setItem("dynamicId",id);
      this.$router.replace("/ScComment");
    }
  },
};
</script>

<style lang="less" scoped>
.mycollect {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: rgb(247, 247, 247);
  overflow: auto;
  .tishi {
      position: fixed;
      bottom: 25px;
      left: 150px;
      font-size: 16px;
      background: rgba(0, 0, 0, 0.1);
      color: rgb(0, 0, 0);
      padding: 2px 10px;
    }
    .nobody {
      position: absolute;
      left: 128px;
      top: 70px;
      width: 200px;
      height: 20px;
      font-size: 15px;
      color: rgb(158, 158, 158);
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
  .collectCon {
    width: 100%;
    margin-top: 55px;
    overflow: hidden;

    .collentList {
      padding: 15px;
      margin-top: 10px;
      background: white;

      .collectInfo {
        margin-top: 20px;
        transform: translateY(-10px);
        .time {
          float: left;
          margin-left: 5px;
          font-size: 14px;
          color: rgb(131, 131, 131);
        }
        .delcollect {
          float: right;
          font-size: 12px;
          color: rgb(131, 131, 131);
          margin-left: 10px;
        }
      }
    }
    .contitle {
      font-size: 20px;
    }
    .content {
      margin-top: 10px;
      display: -webkit-box;
      overflow: hidden;
      white-space: normal !important;
      text-overflow: ellipsis;
      word-wrap: break-word;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      font-size: 14px;
    }
  }
}
</style>