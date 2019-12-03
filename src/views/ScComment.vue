<template>
  <div id="ScComment">
    <div class="comment-nav">
      <div class="nav-left">
        <div class="nav-img">
          <img src="../assets/logo.png" alt="">
        </div>
        <div class="nav-text">
          <p class="username">
            小松饼
            <img src="../assets/logo.png" alt="标识">
          </p>
          <span>2016.12.2</span>
          <span>来自</span>
          <span>推荐关注</span>
        </div>
      </div>
      <div class="nav-right"><span>关注</span></div>
    </div>
    <div class="comment-content">
      <div class="content-article">
        <div class="van-hairline--top-bottom">详解sticky</div>
        <p>
          <a href="javascript:;"><span>#</span>传得数据库<span>#</span></a>
          &nbsp;&nbsp;
          <a href="javascript:;"><span>@</span>我是选出来的粉丝用户</a>
          sticky 英文字面意思是粘，粘贴，所以可以把它称之为粘性定位。position: sticky; 基于用户的滚动位置来定位。
粘性定位的元素是依赖于用户的滚动，在 position:relative 与 position:fixed 定位之间切换。
它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。
元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。
        </p>
        <div>
          <van-grid :border="false" :column-num="3">
            <van-grid-item>
              <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
            </van-grid-item>
            <van-grid-item>
              <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
            </van-grid-item>
            <van-grid-item>
              <van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
            </van-grid-item>
          </van-grid>
        </div>
        <div class="tuijian">
          <router-link to="/sctuijian">你可能喜欢他们</router-link>
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <div class="comment-share">
      <div class="share-content">
        <span>分享</span>
        <van-icon name="star" />
        <van-icon name="chat" />
        <van-icon name="alipay" />
        <van-icon name="live" />
      </div>
      <div class="comment-border" style=""></div>
    </div>
    <div class="comment-bottom">
      <van-tabs v-model="active" color="orange"> 
        <van-tab :title="'评论'+lists.length">
            <div class="comment-bottom-pinglun">
              <div class="user-name">
                  <span style="color:orange">{{lists[0].name}}</span>
                  <img src="../assets/logo.png" alt="标识">
                  <span style="margin-right:10px;">:</span>
                  <span class="van-ellipsis">{{lists[0].title}}</span>
              </div>
              <div class="haha">
                    <div v-for="(items,index) in lists[0].children" :key="index" class="pinlun-son">
                      <span style="color:orange">{{items.name}}</span>
                      <img src="../assets/logo.png" alt="标识">
                      <span>回复</span>
                      <span style="color:orange">{{lists[0].name}}</span>
                      <img src="../assets/logo.png" alt="标识">
                      <span>:</span>
                      <span class="van-ellipsis">{{items.title}}</span>
                    </div>
              </div>
              <router-link to="/scpinlun">
                <div class="chakangengduo" v-html="'共有 '+lists[0].name+' 等人发送共 '+lists.length+' 条评论，点击查看'"><van-icon name="arrow" /></div>
              </router-link>
            </div>
        </van-tab>
        <van-tab :title="'转发'+lists.length" >
          <div v-for="(item,index) in lists" :key="index">
            <div class="user-name" style="padding:0 10px;">
              <img src="../assets/logo.png" alt="" style="width:20px">
              <span style="color:orange">{{item.name}}</span>
              <img src="../assets/logo.png" alt="标识" style="width:16px;">
              <span class="van-ellipsis">转发了这片文章</span>
            </div>
          </div>
        </van-tab>
        <van-tab :title="'赞'+dianzan.length">
            <div v-for="(item,index) in dianzan" :key="index">
              <div class="user-name" style="padding:0 10px;">
                <img src="../assets/logo.png" alt="" style="width:20px">
                <span style="color:orange">{{item.name}}</span>
                <img src="../assets/logo.png" alt="标识" style="width:16px;">
                <span class="van-ellipsis">觉得这篇文章很赞！</span>
              </div>
            </div>        
          <!-- <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          </van-list> -->
        </van-tab>
      </van-tabs>
    </div>
    <div class="bottom van-hairline--surround">
      <div class="bottom-bar">
        转发
      </div>
      <div class="bottom-bar" @click="showPopup">
        评论
      </div>
      <van-popup :overlay="false" round v-model="show" closeable close-icon='close' position='bottom' :style="{height:'60vh'}" close-icon-position="bottom-left">
        
        <div class="textarea-box">
          <textarea v-model="zishu" maxlength="80" readonly>
          </textarea>
          <div class="zishu"><span v-text="zonggong"></span><span>/80</span></div>
          <div class="btn">
            <input type="text" v-model="shuru" @keyup="jisuan" @keydown="EnterKey">
            <div class="shuru">
              <router-link to="/scpinlun">
                <span @click="fasong">发送</span>
              </router-link>
            </div>
          </div>
        </div>
      </van-popup>
      <div class="bottom-bar" >
        点赞
      </div>
    </div>
  </div>
</template>
<script>
var lists=[
  {
    name:"长歌wang日和勤事",
    title:"暴击啊这首歌,我的天呐。。",
    children:[
      {
        name:"aao",
        title:"月如身上挂着的铃，叫做莫失；逍遥身上挂着的铃，叫做莫忘。"
      },
      {
        name:"hahah",
        title:"胡歌说,他演不出那时候李逍遥的眼神了。"
      }
    ]
  },
  {
    name:"song",
    title:"坑就即使，添加的第一条数据。",
    children:[
      {
        name:"aao",
        title:"你真棒2！"
      },
      {
        name:"hahah",
        title:"我真是2"
      }
    ]
  },
  {
    name:"陈思狗",
    title:"坑就即使，第二天数据。",
        children:[
      {
        name:"aao",
        title:"你真棒3！"
      },
      {
        name:"hahah",
        title:"我真是3"
      }
    ]
  },
  {
    name:"你的像",
    title:"坑就即使，第三个数据。",
        children:[
      {
        name:"aao",
        title:"你真棒！"
      },
      {
        name:"hahah",
        title:"我真是"
      }
    ]
  }
]
var dianzan=[
  {
    name:"jack"
  },
  {
    name:"dfsdf"
  },
  {
    name:"dfs"
  },
  {
    name:"fgs"
  },  
  {
    name:"jacwek"
  },
  {
    name:"jacgdk"
  },
  {
    name:"hfdg"
  },
  {
    name:"geg"
  },  {
    name:"jacfefek"
  },
  {
    name:"ege"
  },  {
    name:"jacgek"
  },
  {
    name:"hgdg"
  },  {
    name:"gdg"
  },
  {
    name:"ge"
  },

]
import {Button,List,Cell,Tabbar, TabbarItem, Tabs,Tab,Icon,Grid, GridItem,Image,Popup,Field,Toast} from 'vant'
export default {
  name:"Sccomment",
  components:{
    [Button.name]:Button,
    [List.name]:List,
    [Cell.name]:Cell,
    [Tabbar.name]:Tabbar,
    [TabbarItem.name]:TabbarItem,
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    [Icon.name]:Icon,
    [Grid.name]:Grid,
    [GridItem.name]:GridItem,
    [Image.name]:Image,
    [Popup.name]:Popup,
    [Field.name]:Field,
    [Toast.name]:Toast
  },
  data(){
    return{
      loading:false,
      finished:false,
      lists:[],
      active:2,
      dianzan:[],
      show:false,
      zishu:"",
      zonggong:0,
      shuru:""
    }
  },
  created(){
    this.lists=lists;
    this.dianzan=dianzan;

  },
  methods:{
    onLoad(){
      setTimeout(() => {
        for(let i=0;i<lists.length;i++){
          this.lists.push(lists[i]);
        }
          this.loading=false;
          if(this.lists.length==lists.length){
          this.finished=true;
        }
      }, 2000);
    },
    showPopup(){
      this.show=true;
    },
    jisuan(){
      console.log(this.zishu.split("").length)
      this.zonggong=this.zishu.split('').length;
    },
    EnterKey(e){
      if(e.keyCode==13){
        console.log("huiche")
        if(this.zishu.split('').length<80){
          this.zishu+=this.shuru;
          this.shuru='';
        }
      }
    },
    fasong(){
      this.zishu='';
      console.log(this.zishu);
    }
  
  }
}
</script>
<style lang="less" scoped>
@import '../assets/style/resize.css';
@import '../assets/style/sc.less';
#ScComment{
  background-color:white;
  position: relative;
  z-index: 999;
  .comment-nav{
    background-color: white;
    border-radius: 5px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    .nav-left{
      display: flex;
      justify-content:flex-start;
      align-items:center;
      .nav-img{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        line-height: 60px;
        background-size: 60px;
        border: 1px solid #ddd;
        border-radius: 50%;
        overflow: hidden;
        img{
          width: 100%;
        }
      }
      .nav-text{
        margin-left: 10px;
        p{
          font-size: 20px;
        }
        span{
          font-size: 12px;
          color: gray;
          margin-right: 5px;
        }
        .username{
          display: flex;
          align-items: center;
          color:@mainColor;
          img{
            margin-left: 2px;
            height: 16px;
          }
        }
      }

    }
    .nav-right{
      padding: 5px;
      text-shadow: 0 0 1px @mainColor;
      border: 1px solid @mainColor;
      border-radius: 30px;
      width: 60px;
      font-size: 16px;
      text-align: center;
      color: @mainColor;
    }
  }
  .comment-content{
    padding: 18px;
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
    h3{
      font-size: 23px;
    }
    p{
      letter-spacing: 1px;
      margin-top: 10px;
      font-size: 15px;
      text-align: justify;
      color: @fontColor;
      a{
        color: @zhutiColor;
      }
    }
    .tuijian{
      font-size: 14px;
      color: @zhutiColor;
      background-color: rgba(199, 194, 194, 0.589);
      width: 150px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
  .comment-bottom{
    margin-bottom: 5vh;
    .comment-bottom-pinglun{
      padding: 5vw;
      span{
        white-space: nowrap;
      }
    }
  }
  .bottom{
    display: flex;
    justify-content: space-around;
    width: 100vw;
    height: 5vh;
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9999;
    .bottom-bar{
      color:black;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .textarea-box{
      height: 60vh;
      position: relative;
      display: flex;
      justify-content: center;
      textarea{
        width: 90vw;
        height: 40vh;
        resize: none;
        position: absolute;
        top: 7vh;
        border-radius: 5px;
      }
      .btn{
        position: absolute;
        bottom:10px ;
      }
      .shuru{
        background-color:white;
        border: 1px solid gray;
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        
      }
    }
  }
  .comment-share{
    .comment-border{
      width:100vw;
      height:10px;
      background-color:@mainColor;
    }
    .share-content{
      margin: 30px 0;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      span{
        font-size: 15px;
        color: @mainColor;
      }
    }
  }
}
      .user-name{
        
        font-size: 18px;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        & *{
          margin: 5px 0;
        }
        .ha{
          height: 25px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: nowrap;
        }
        img{
          height: 20px;
        }
        p{
          font-size: 18px;
        }
      }
      .chakangengduo{
        margin-top: 10px;
        display: flex;
        align-items: center;
        font-size: 16px;
      }
      .haha{
        padding: 10px 0;
        font-size: 15px;
        .pinlun-son{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        }
        & *{
          margin: 5px 0;
        }
        img{
          height: 15px;
        }
      }

</style>
