<template>
  <div class="myfans">
    <!-- 标题 -->
    <div class="title">
      <router-link to="/About">取消</router-link>
      <span>我的粉丝</span>
    </div>
    <!-- 详细资料 -->
    <div v-show="nobody" class="fanslist">
      <div class="info" v-for="(item,index) in fans" :key="index">
        <img :src="item.imgs[0].imgUrl" alt="头像">
        <a href="javascript:;" class="infoL">{{item.userName}}</a>
        <span class="iconfont icon-v" :class="{on: item.isMaster==1}"></span>
        <div class="authentication" @click="Attention($event)">
          <a href="javascript:;" :id="item.userId">互相关注</a>
        </div>
      </div>
    </div>

    <!-- 没有任何关注 -->
    <div v-show="!nobody" class="nobody">
      <span>我还没有粉丝</span>
    </div>
  </div>
</template>

<script>


export default {
  name: "myfans",
  data: function() {
    return {
      fans: [],
      nobody: true
    }
  },
  components: {
    
  },
  methods: {
    Attention(e) {

      if(document.getElementById(e.target.id).innerText == "互相关注") {
        this.axios.post("/AttentionSomePeople",{
          userId: Number(e.target.id)
        })
        .then(res => {
       
          if(res.data.code == "200") {
            document.getElementById(e.target.id).innerText = "取消关注";
          }
        })
      } else {
        this.axios.post("/egnolSomePeople",{
          userId: Number(e.target.id)
        })
        .then(res => {
          res.data
          document.getElementById(e.target.id).innerText = "互相关注";
        })
      }

    },
  },
  created() {
    this.axios.post("/findAllFans")
    .then(res => {
      if(res.data.code == "200") {
        if(res.data.data != null) {
          this.fans = res.data.data;
          this.fans = this.fans.map(item => {
            item.state = true;
            return item;
          })
         
        } else {
          this.nobody = false;
        }  
      }
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
  .myfans {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: rgb(247, 247, 247);
    .nobody {
      position: absolute;
      left: 140px;
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
          border-radius: 50%;
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