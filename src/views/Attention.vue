<template>
  <div class="attention">
    <!-- 标题 -->
    <div class="title">
      <router-link to="/About">取消</router-link>
      <span>我的关注</span>
    </div>
    <!-- 详细资料 -->
    <div class="fanslist">
      <div class="info" v-for="(item,index) in attention" :key="index">
        <img :src="item.imgs[0].imgUrl" alt="头像">
        <a href="javascript:;" class="infoL">{{item.userName}}</a>
        <span class="iconfont icon-v" :class="{on: item.isMaster==1}"></span>
        <div class="authentication">
          <a v-if="item.state" href="javascript:;" @click="qxAttention(index)">已关注</a>
          <a v-else href="javascript:;" @click="Attention(index)">关注</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "attention",
  data: function() {
    return {
      attention: [],
    }
  },
  components: {
    
  },
  methods: {
    qxAttention(index) {
      this.axios.post("/egnolSomePeople",{
        userId: this.attention[index].userId
      })
      .then(res => {
        console.log("收到数据：",res.data);
        this.attention[index].state = false;
        console.log(this.attention[index].state);
      })
    },
    Attention(index) {
      this.axios.post("/AttentionSomePeople",{
        userId: this.attention[index].userId
      })
      .then(res => {
        console.log("收到数据：",res.data);
        this.attention[index].state = true;
      })
    }
  },
  created() {
    this.axios.post("/findAllAttention",{
      userId: sessionStorage.getItem("userId")
    })
    .then(res => {
      this.attention = res.data.data;
      
      this.attention = this.attention.map(item => {
        item.state = true
        return item
      })
      console.log("我的关注：",this.attention)
    })
  }
}
</script>

<style lang="less" scoped>
@import "../assets/font/personfont/iconfont.css";
  .icon-v {
    color: #ddd;
  }
  .on {
    color: orange;
  }
  .attention {
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
    .fanslist {
      width: 100%;
      box-shadow: 0 -1px 1px rgb(236, 236, 236);
      margin-top: 55px;
      background: white;

      .info {
        position: relative;
        width: 100%;
        height: 40px;
        border-bottom: 1px solid rgb(236, 236, 236);
        font-size: 16px;
        line-height: 40px;

        img {
          width: 30px;
          height: 30px;
          border-radius: 50px;
          border: 1px solid #ddd;
          float: left;
          margin: 5px 0 0 10px;
        }
         .infoL {
          float: left;
          font-size: 13px;
          color: rgb(92, 88, 88);
        }
        a {
          margin: 0 5px;
        }
        .authentication {
          display: inline-block;
          width: 80px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          font-size: 14px;
          color: red;
          border-radius: 6px;
          background: white;
          border: 1px solid rgb(129, 129, 129);
          position: absolute;
          right: 10px;
          top: 10px;
          a {
            color: red;
          }

          &:active {
            background: rgb(233, 233, 233);
          }
        }
      }
    }
  }

</style>