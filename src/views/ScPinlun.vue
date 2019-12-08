<template>
<!--  -->
  <div id="scpinlun">
    <div class="toubu">
      <a href="javascript:history.go(-1)"><van-icon name="arrow-left"/></a>
      <span @click="test">评论页</span>
            <router-link to="/">
        <van-icon name="wap-home-o" />
      </router-link>
    </div>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <div v-for="(item,index) in moni.pinlun" :key="index">
            <div class="comment-nav">
              <div class="nav-left">
                <div class="nav-img">
                  <img :src='item.imgUrl' alt="">
                </div>
                <div class="nav-text">
                  <p class="username">
                    <router-link :to="'/about?userid='+item.userId">
                      {{item.name}}
                    </router-link>
                    <img v-if="item.isDaka" src="../assets/logo.png" alt="标识">
                  </p>
                  <span><span>评论发表于</span> {{item.date}}</span>
                </div>
              </div>
              <div class="nav-right" style="color:black">
                <span><van-icon name="good-job-o"  :class="{on:item.isDianzan}" @click="item.isDianzan=!item.isDianzan;item.dianzan=item.isDianzan?item.dianzan+1:item.dianzan-1" />{{item.dianzan}}</span>
                </div>
            </div>
            <div class="van-hairline--top-bottom">{{item.title}}</div>
            <div class="huifu">
              <div class="huifu-son">
                {{item.children[0].name}}:{{item.children[0].title}}
              </div>
              <div>
                <van-icon name="good-job-o" :class="{on:item.children[0].isDianzan}" @click="item.children[0].isDianzan=!item.children[0].isDianzan;item.children[0].dianzan=item.children[0].isDianzan?item.children[0].dianzan+1:item.children[0].dianzan-1"   />{{item.children[0].dianzan}}
              </div>
            </div>
            <router-link @click="test" :to="'/scpinlunxiang?pinlunid='+item.replyId" >
              <div class="dengren">
                <p id="p">{{item.children[0].name}}等用户{{item.children.length}}条回复</p>
              </div>
            </router-link>
            <van-divider :style="{ color: 'grey', borderColor: 'grey', padding: '10px 5px' }"></van-divider>
            <div class="dianzan">
              <span>
                <a href="javascript:;" :idn="item.replyId" @click="showText({
                  userId:item.userId,
                  replyId:item.replyId,
                  name:item.name
                })" >
                  <span class="iconfont icon-liuyan" :idn="item.replyId"></span>
                </a>
              </span>
              <van-popup class="tankuang-1"
                v-model="show"
                position="bottom"
                :style="{ height: '40vh' }">
                <div class="van-popup">
                  <textarea  v-model="moni.zishu" :placeholder="'回复 '+moni.linshi.name">
                  </textarea>
                </div>
                <div class="van2">
                  <span @click="huifu(item.replyId)">发送</span>
                  <span @click="show=false">取消</span>
                </div>
              </van-popup>
              <span class="dd" @click="toast('举报成功')">
                举报
              </span>
              <span @click="del(item.replyId)">删除</span>
            </div>
          </div>
        </van-list>
  </div>
</template>
<script>
var pinlun=[
  {
    userId:1,
    replyId:1,
    name:"说课稿",
    title:"看着落得个IE",
    isDaka:true,
    imgUrl:"https://img.yzcdn.cn/vant/logo.png",
    date:"2018.2.5",
    dianzan:54,
    isDianzan:true,
    children:[{
      userId:2,
      name:"无敌",
      title:"二级评论哈哈哈哈哈哈哈",
      isDaka:true,
      imgUrl:"https://img.yzcdn.cn/vant/logo.png",
      date:"2018.2.5",
      dianzan:4,
      isDianzan:true
    }]
  },{
    userId:2,
    replyId:2,
    name:"说课稿",
    title:"看着落得个IE",
    isDaka:true,
    imgUrl:"https://img.yzcdn.cn/vant/logo.png",
    date:"2018.2.5",
    dianzan:1154,
    isDianzan:false,
    children:[{
      userId:2,
      name:"无敌",
      title:"二级评论哈哈哈哈哈哈哈",
      isDaka:true,
      imgUrl:"https://img.yzcdn.cn/vant/logo.png",
      date:"2018.2.5",
      dianzan:5,
      isDianzan:true
    }]
  },{
    userId:3,
    replyId:3,
    name:"说课稿",
    title:"看着落得个IE",
    isDaka:true,
    imgUrl:"https://img.yzcdn.cn/vant/logo.png",
    date:"2018.2.5",
    dianzan:54,
    isDianzan:false,
    children:[{
      userId:2,
      name:"无敌",
      title:"二级评论哈哈哈哈哈哈哈",
      isDaka:true,
      imgUrl:"https://img.yzcdn.cn/vant/logo.png",
      date:"2018.2.5",
      dianzan:541,
      isDianzan:true
    }]
  }
]
//通过dynamicId parentId=0获取文章评论信息（空数组push引入）
import {List,Divider,Popup,Icon,Button,Tab, Tabs ,Toast,} from 'vant'
export default {
  name:"pinglun",
  data(){
    return{
      //模拟数据
      moni:{
        userid:sessionStorage.getItem("userId"),
        dynamicId:1,
        yonghuid:1,
        pinlun:[],
        zishu:"",
        linshi:{}//动态存储回复人
      },
      loading:false,
      finished:false,
      user:[],
      users:[],
      show:false,
      dianzan:false,
      active:2,
      //评论用户
    }
  },
  created (){
    sessionStorage.setItem("pinlun",JSON.stringify(pinlun));
    // this.moni.pinlun=pinlun;

    //没有服务器，使用静态页面
    // this.axios.post("/dynamic/findOneById",{
    //   dynamicId:this.$route.query.id
    // })
    // .then(res=>{
    //   console.log(res.data);
    //   res=res.data.data;
    //   for(let i=0;i<res.replies.length;i++){
    //     if(res.replies[i].parentId==0){
    //       pinlun.push(res.replies[i]);      
    //     }
    //   }
    //   console.log(this.moni.pinlun);
    // })
    // .catch(err=>{
    //   console.log(err)
    // })
  },
  components:{
    [List.name]:List,
    [Divider.name]:Divider,
    [Popup.name]:Popup,
    [Icon.name]:Icon,
    [Button.name]:Button,
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    [Toast.name]:Toast,
  },
  methods:{
    onLoad(){
      setTimeout(() => {
        for(let i=0;i<pinlun.length;i++){
          this.moni.pinlun.push(pinlun[i]);
        }
          this.loading=false;
          if(this.moni.pinlun.length==pinlun.length){
          this.finished=true;
        }
      }, 1000);
    },
    showText(a){
      this.show=true;
      this.moni.linshi=a;
      console.log(this.moni.linshi)
    },
    dian(){
      this.dianzan=true;
    },
    huifu(a){
      console.log(this.moni.zishu)
      this.show=false;

      
      for(var i=0;i<pinlun.length;i++){
        if(pinlun[i].replyId==a){
          pinlun[i].children.push({
            userId:2,
            name:"好啊",
            title:this.moni.zishu,
            dianzan:0,
            date:new Date(),
            imgUrl:"https://hbimg.huabanimg.com/9134ebad727a9223f3495d384e482da1142eac022e20d-MUJCbz_fw658"
          })
        }
      }
    sessionStorage.setItem("pinlun",JSON.stringify(this.moni.pinlun));
this.moni.zishu='';


      this.moni.pinlun=[];
      for(let i=0;i<pinlun.length;i++){
          this.moni.pinlun.push(pinlun[i]);
        }
          this.loading=false;
          if(this.moni.pinlun.length==pinlun.length){
          this.finished=true;
        }


//       console.log("文章："+this.moni.dynamicId,this.linshi.pinlunid,this.moni.userid,this.moni.zishu)
//       this.show=false;
//       this.axios.post("/reply/addReply",{
//         dynamicId:this.moni.dynamicId,
//         replyId:this.linshi.pinlunid,
//         userId:this.moni.userid,
//         replyContent:this.moni.zishu,
//         })
//         .then(res=>{
//           console.log(res);
//           pinlun=[];
//               this.axios.post("/dynamic/findOneById",{
//       dynamicId:1
//     })
//     .then(res=>{
//       console.log(res.data);
//       res=res.data.data;
//       for(let i=0;i<res.replies.length;i++){
//         if(res.replies[i].parentId==0){
//           pinlun.push(res.replies[i]);      
//         }
//       }
//       console.log(this.moni.pinlun);
//     })
//     .catch(err=>{
//       console.log(err)
//     })
//         })
//         .catch(err=>{
//           console.log(err);
//         })
        
// this.axios.post("/dynamic/findOneById",{
//       dynamicId:1
//     })
//     .then(res=>{
//       pinlun=[];
//       console.log(res.data);
//       res=res.data.data;
//       for(let i=0;i<res.replies.length;i++){
//         if(res.replies[i].parentId==0){
//           pinlun.push(res.replies[i]);      
//         }
//       }
//       console.log(this.moni.pinlun);
//     })
//     .catch(err=>{
//       console.log(err)
//     })
    },
      toast(a){
      Toast(a);
      this.show=false;
    },
    del(a){
      console.log(a);
      
      for(var i=0;i<pinlun.length;i++){
        if(pinlun[i].replyId==a){
          console.log(i)
          pinlun.splice(i,1);
        }
      }
      console.log(pinlun);
      this.moni.pinlun=[];
      for(let i=0;i<pinlun.length;i++){
          this.moni.pinlun.push(pinlun[i]);
        }
          this.loading=false;
          if(this.moni.pinlun.length==pinlun.length){
          this.finished=true;
        }
      // console.log(a);
      // this.axios.post("/dynamic/deleteReplyById",{
      //   replyId:a
      // })
      // .then(res=>{
      //   console.log(res)
      // })
      // .catch(err=>{
      //   console.log(err);
      // })
    },
    test(){
      console.log(this.moni.pinlun)
      sessionStorage.setItem("pinlun",JSON.stringify(this.moni.pinlun));
    }
  },

}
</script>
  
<style lang="less" scoped>
@import '../assets/style/sc.less';
*{
  padding: 0;
  margin: 0;
}
.toubu{
  display: flex;
  box-sizing: border-box;
  padding: 0 5px;
  align-items: center;
  justify-content: space-between;
  
}
  #scpinlun{
    span{font-size: 14px}
    p{font-size: 18px;}
    padding: 10px;
    position: relative;
    z-index: 1999;
    min-height: 100vh;
    background-color: white;
    .dianzan{
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 3px 30px;
      margin-bottom: 30px;

      .van-popup{
        display: flex;
        justify-content: center;
        textarea{
          margin-top: 5vh;
          width: 70vw;
          height: 40vw;
          padding: 5px 10px;
          resize: none;
          border-radius: 20px;
          background-color: rgba(238, 238, 238, 0.459);
          border: none;
        }
      }
      .van2{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
        span{
          line-height: 40px;
          height: 40px;
        }
      }
    }
    .van-hairline--top-bottom{
      padding: 10px;
    }
  }

.user-name{
  img{
    margin-left: 5px;
    height: 16px;
  }
  & *{
    margin: 4px 0;
  }
}

  .line{
    height: 1px;
  }
.van-hairline--top-bottom{
  font-size: 18px;
  color: black;
  border-radius: 10px;
}
.on{
  color: orange;
}
.user-name{
  font-size: 16px;
  display: flex;
  align-items: flex-start;
  .ha{
    display: flex;
    align-items: center;
  }
  img[alt=aa]{
    height: 16px;
  }
  img[alt=bb]{
    height: 12px;
  }
  p{
    font-size: 18px;
  }
}
.huifu{
  background-color: #eee;
  border-radius: 20px;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  box-sizing: border-box;
  padding: 10px 10px;

}
// 人物布局
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
        height: 50px;
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
      border-radius: 30px;
      width: 60px;
      font-size: 16px;
      text-align: center;
      color: @mainColor;
    }
  }
  .dd{
    display: flex;
    align-items: center;
  }
  .tankuang-1{
    border-radius: 20px 20px 0 0;
  }
.dengren{
  #p{
    display: flex;
    align-items: flex-end;
    font-size: 12px;
    display: inline;
    border-radius: 5px;
    padding: 3px 10px;
    color: black;
    box-shadow: 0 0 4px white;
    background-color: rgba(255, 166, 0, 0.575);
  }
}
</style>
