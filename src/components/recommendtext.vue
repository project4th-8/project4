<template>
  <div class="text">
    <div class="fix-top"></div>
    <div
      class="content"
      v-for="(item,index) in cons"
      :key="index"
      :info="item"
      v-show="item.mismaster"
    >
      <div class="top">
        <div>
          <div @click="isselectuser(item.userId)" class="links">
            <div class="Img">
              <img :src="item.userImg" alt />
            </div>
            <div>
              <p>
                {{item.userName}}
                <span class="iconfont icon-v" :class="{master:item.mismaster}"></span>
              </p>
              <p class="time">{{item.dynamicLastTime}}</p>
            </div>
          </div>
        </div>
        <div class="down-list">
          <van-icon name="arrow-down" class="down" @click="isshow=!isshow,state=index " />

          <div
            class="Report"
            v-show="index===state && isshow"
            @click="showPopup(index),popsub.userId=item.isuserId,popsub.dynamicId=item.dynamicId"
          >举报</div>
        </div>
      </div>
      <div class="center" @click="sccomment(index)">
        <h5>{{item.dynamicTitle}}</h5>
        <div class="main-content">
          <p style="overflow:hidden;">{{item.dynamicContent}}</p>
          <div class="textimg">
            <p v-for="(item,index) in item.imgUrl" :key="index">
              <img :src="item" alt />
            </p>
          </div>
        </div>
      </div>
      <div class="bottom" >
        <div @click="forword(item.userId,item.dynamicId)">
          <i class="iconfont icon-tubiao-"></i>
          {{item.dynamicTransmit }}
        </div>
        <div @click="scpinlun(index)">
          <i class="iconfont icon-duanxin"></i>
          {{item.pingl}}
        </div>
        <div @click="iszan(item.dynamicId,$event,index),mzan[index]=!mzan[index]" >
          <i class="iconfont icon-dianzan"></i>
           {{item.dynamicLikeCount}}
        </div>
      </div>
      <div class="moduls" v-show="showclient">
        <component :is="com" @clickbox="boxshow" :showpopsub="popsub"></component>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from "vant";
import popupsub from "./popupsub.vue";
export default {
  name: "Recommendtext",
  data: function() {
    return {
      isshow: false,
      com: "popupsub",
      showclient: false,
      cons: [],
      state: "",
      myzan:true,
      states:'',
      mzan:[],
      userid: "",
      popsub: {
        isuserId: "",
        dynamicId: ""
      },
      alldynamicId: ""
    };
  },
  components: {
    [Icon.name]: Icon,
    popupsub
  },
  created() {
    sessionStorage.removeItem("quitpathTwo");
    sessionStorage.setItem("quitpath",this.$route.fullPath);
    this.axios.get("/dynamic/findAllDUR", {}).then(res => {
      this.cons = res.data.data.data.map((item,index) => {
        item.mzn = false;
        this.mzan[index] = item.mzn
        if (item.isMaster == 0) {
          item.mismaster = true;
        }
        var there = item.dynamicId;
        var items = item;
        this.axios
          .post("/dynamic/isLike", {
            dynamicId: there,
            userId:sessionStorage.getItem('userId')
          })
          .then(res => {
            if (res.data.data) {
              items.miszan = true;
            } else {
              items.miszan = !items.miszan;
            }
          });

        return item;
      });
    });


  },
  methods: {
    showPopup(/* index */) {
      this.showclient = !this.showclient;
      let that = this;
      setTimeout(function() {
        that.isshow = false;
      }, 1000);
    },
    boxshow: function(res) {
      this.showclient = res;
    },
    scpinlun:function(index) {
      this.$router.push({path:'/scpinlun', query: {id: this.cons[index].dynamicId}})
    },
    forword: function(isuserId, dynamicId) {
      sessionStorage.setItem("forworduserId", isuserId);
      sessionStorage.setItem("forworddynamicId", dynamicId);
      this.$router.push("/forword");
    },
    sccomment: function(index) {
      sessionStorage.setItem("dynamicId", this.cons[index].dynamicId);
      this.$router.push({path:"/sccomment"});
    },
    isselectuser: function(isselectuser) {
      sessionStorage.setItem("isselectuserid", isselectuser);
      this.$router.push("/isselectdynamic");
    },
    iszan: function(dynamicId,e,index) {
    
    if(!this.mzan[index]) {
        e.currentTarget.innerText = Number(e.currentTarget.innerText) + 1
      e.currentTarget.innerHTML = `  <i class="iconfont icon-dianzan" style="color:orange;"></i> ${ e.currentTarget.innerText}`
  
    } else {
       e.currentTarget.innerText = Number(e.currentTarget.innerText) - 1
      e.currentTarget.innerHTML = `  <i class="iconfont icon-dianzan"></i> ${ e.currentTarget.innerText}`

    }
 
      this.axios.post("/dynamic/addLike", {
        dynamicId: dynamicId,
        userId: sessionStorage.getItem("userId")
      });
    }
  }
};
</script>
<style  lang="less" scoped>
@import "../assets/font/personfont/iconfont.css";


.content {
  font-size: 16px;
}
.iconfont {
    font-size: 16px;
    color: rgb(173, 173, 173);
  }
.icon-v {
  font-size: 20px;
  color: #ddd;
}
  
.master {
  color: orange;
}
.main-content {
  display: -webkit-box;
  overflow: hidden;
  white-space: normal !important;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.textimg {
  display: flex;
  justify-content: start;
}
.moduls {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.07);
  position: fixed;
  z-index: 1000;
  top: 0;
}
.links {
  display: flex;
  justify-content: space-around;
}
.text {
  overflow: auto;
}
.time {
  font-size: 12px;
  color: #ddd;
}
.top {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
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
  height: 160px;
  img {
    width: auto;
    height: 60px;
  }


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
  .mzans {
    color: orange;
  }

}
  
</style>