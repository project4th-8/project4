<template>
  <div class="create">
    <div>
      <van-nav-bar title="转发正文" left-text="返回" left-arrow right-text="发布" @click-left="re"></van-nav-bar>
    </div>
    <div>
      <van-cell-group>
        <van-field v-model="username"  clearable label="转发标题" placeholder="请输入标题" />
      </van-cell-group>
    </div>
    <div>
      <van-cell-group>
        <van-field
          v-model="message"
          rows="1"
          autosize
          label="内容"
          type="textarea"
          placeholder="分享精彩"
        />
      </van-cell-group>
    </div>
    <div class='recommend'>
    <div class="fix-top"></div>
    <div class="content">
      <div class="top">
        <div>
          <a href="/about" class="links">
            <div class="Img">头像</div>
            <div>
              <p>
                {{date[0].username}}
                <span class="iconfont icon-v"></span>
              </p>
              <p class="time">{{date[0].times}}</p>
            </div>
          </a>
        </div>
        <div class="down-list">

        </div>
      </div>
      <div class="center">
        <h5>{{date[0].title}}</h5>
        <div>{{date[0].contents}}</div>
      </div>
    </div>


    </div>
    <div class="bottoms">
      <van-uploader :after-read="afterRead" />
      <span class="iconfont icon-at" @click="at"></span>
      <span class="fund"><van-icon name="gold-coin-o" @click="fund"/></span>
    </div>
  </div>
</template>
<script>
 const shu =[{
  title:'A基金上线',
  userid:1,
  username:'dada',
  times:'2018-3-1',
  contents:'sasasasasasasasasasdqwdwqdwqddqw',
  fenx:'121',
  pingl:'2312',
  zan:'123'
},
{
  title:'B基金上线',
  userid:2,
  username:'dada',
  times:'2018-3-1',
  contents:'sasasasasasasasasasdqwdwqdwqddqw',
  fenx:'121',
  pingl:'2312',
  zan:'123'
},
{
  title:'C基金上线',
  userid:3,
  username:'dada',
  times:'2018-3-1',
  contents:'sasasasasasasasasasdqwdwqdwqddqw',
  fenx:'121',
  pingl:'2312',
  zan:'123'
}] 

import { NavBar, Cell, CellGroup, Field, Uploader,Icon } from "vant" 
export default {
  name: "createtext",
  data: function() {
    return {
      username: "",
      message: "",
      date:[]
    };
  },
  created(){
   
    this.date = shu
  },
  components: {
    [NavBar.name]: NavBar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Uploader.name]: Uploader,
    [Icon.name]:Icon,
    
  },
  methods: {
    re: function() {
      this.$router.push("/");
    },
     afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    at:function() {
      this.message += '@'
    },
    fund:function () {
      this.message += '$'
    },
      
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

.bottoms {
  position: fixed;
  bottom: 120px;
  right: 60px;
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
}

.icon-v {
  font-size: 20px;
  color: #ddd;
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