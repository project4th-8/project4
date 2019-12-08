<template>
  <div class="box" @load="Load">
    <div class="toubu van-hairline--bottom">
      <a href="javascript:history.go(-1)"><van-icon name="arrow-left" /></a>
      <span>{{moni.pinlun.children.length}}条回复</span>
      <van-icon name="wap-home-o" />
    </div>
    <div class="content">
      <div class="main">
        <div class="contentUser">
          <div class="DauserImg" style="width:40px;height:40px;background-color:#fff">
            <img :src="moni.pinlun.imgUrl" alt="" style="width:100%;height:100%">
          </div>
          <div class="pinlun-name">
            <div>
              <span  style="font-size:18px;" >{{moni.pinlun.name}}</span>
              <img src="../assets/logo.png" alt="aaa">
            </div>
            <span style="font-size:10px;"> 发表于{{moni.pinlun.date}}</span>
          </div>
        </div>
        <div class="content-right">
          <van-icon name="good-job-o" :class="{on:moni.pinlun.isDianzan}" @click="moni.pinlun.isDianzan=!moni.pinlun.isDianzan;moni.pinlun.dianzan=moni.pinlun.isDianzan?moni.pinlun.dianzan+1:moni.pinlun.dianzan-1" /><span class="zan">{{moni.pinlun.dianzan}}</span>
        </div>
      </div>
      <div class="line-1"></div>
      <p class="right"  @click="tankuang({
        id:moni.pinlun.replyId,
        title:moni.pinlun.title,
        name:moni.pinlun.name
        })">{{moni.pinlun.title}}</p>
      <a :href="'/sccomment?id='+moni.pinlun.replyId" class="right" style="color: blue;"><span>查看原文</span></a>
      <div class="van-hairline--bottom backcolor" v-for="(item,index) in moni.pinlun.children" :key="index" >
        <div class="main">
          <div class="contentUser">
            <div class="DauserImg" style="background-color:#fff">
              <img :src="item.imgUrl" alt="" style="width:100%;height:100%">
            </div>
            <div class="pinlun-name">
              <div class="pinlun-p">
                <span>{{item.name}}</span>
                <img src="../assets/logo.png" alt="aa">
              </div>
              <span>{{item.date}}</span>
            </div>
          </div>
          <div class="content-right">
            <van-icon name="good-job-o" :class="{on:item.isDianzan}" @click="item.isDianzan=!item.isDianzan;item.dianzan=item.isDianzan?item.dianzan+1:item.dianzan-1" /><span class="zan">{{item.dianzan}}</span>
          </div>
      </div>
      <div class="line-1"></div>
        <p class="right" @click="tankuang(
          {
            id:item.replyId,
            title:item.title,
            name:item.name
          }
        )">
          {{item.title}}
        </p>
        <div class="line-2"></div>
      </div>
    
    </div>
    
    <van-popup v-model="show" class="tankuang-1">
      <p style="font-size:20px;">{{moni.linshi.name}}:{{moni.linshi.title}}</p>
      <div class="line-1"></div>
      <div @click="tankuangSon" class="fullwidth">回复</div><div class="line-1"></div>
      <div @click="toast('复制成功')" class="fullwidth">复制</div><div class="line-1"></div>
      <div @click="toast('举报成功')" class="fullwidth">举报</div>
    </van-popup>
    <van-popup class="tankuang-2" v-model="showSon" position="bottom">
      <textarea v-model="moni.zishu"></textarea>
      <div class="huifu">
        <p @click="showSon=false">@</p>
        <p @click="fasong">发送</p>
        <p @click="showSon=false">取消</p>
      </div>
    </van-popup>
    <div class="bottom-bars" v-if="!showSon">
      <div class="bottom-bar">
        <van-icon name="share"  @click="share"/>
      </div>
      <div class="bottom-bar">
        <van-icon @click="tankuangSon" name="chat-o" />
      </div>
      <div class="bottom-bar" @click="user.good=!user.good">
        <van-icon name="good-job-o" :class="{on:user.good}" />
      </div>
    </div>
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
    date:2018,
    dianzan:554,
    isDianzan:false,
    children:[{
      replyId:1,
      userId:2,
      name:"无敌",
      title:"二级评论哈哈哈哈哈哈哈",
      isDaka:true,
      imgUrl:"https://img.yzcdn.cn/vant/logo.png",
      date:2018,
      dianzan:54,
      isDianzan:true
    }]
  }
]
import {Popup,Toast,Uploader,Icon} from 'vant'
export default {
  name:"pinlunxiang",
    components:{
    [Popup.name]:Popup,
    [Toast.name]:Toast,
    [Uploader.name]:Uploader,
    [Icon.name]:Icon
  },
  data(){
    return{
      //模拟数据
      moni:{
        wenzhang:1,
        userid:3,
        pinlun:{
        },
        zishu:'',
        linshi:{}//存储临时回复人
      },
      show:false,
      showSon:false,
      //记录回复谁
      // huifuid:{},
      //记录数据
      huifuzongshu:15,
      user:{
        good:true
      },
      //临时存储文章相关

    }
  },
  created(){
    for(var i=0;i<pinlun.length;i++){
        if(pinlun[i].replyId==this.$route.query.pinlunid){
          this.moni.pinlun=pinlun[i]
        }
      }
      console.log(this.moni.pinlun);
    // for(var i=0;i<pinlun.length;i++){
    //   if(this.$route.query.id==pinlun[i].id){
    //     this.pinlun=pinlun[i];
    //   }
    // }
    // console.log(this.pinlun.children)
    // this.axios.post("/dynamic/findOneById",{
    //   dynamicId:1
    // })
    // .then(res=>{
    //   console.log(res.data.data.replies);
    //   for(let i=0;i<res.data.data.replies.length;i++){
    //     if(res.data.data.replies[i].replyId==this.$route.query.pinlunid){
    //       this.moni.pinlun=res.data.data.replies[i];
    //     }
    //     if(res.data.data.replies[i].parentId==this.$route.query.pinlunid){
    //       this.moni.pinlunSon.push(res.data.data.replies[i]);
    //     }
    //   }
    //   console.log(this.moni.pinlunSon);
    //   console.log(this.moni.pinlun);
    //   console.log(this.moni.pinlun.userInfo.userName);

    // })
  },
  methods:{
    toast(a){
      Toast(a);
      this.show=false;
    },
    //把回复的目标回给huiid
    tankuang(a){
      this.moni.linshi=a;
      this.show=true;
      console.log(this.moni.linshi);
      this.moni.zishu="你 回复 "+this.moni.linshi.name +":  ";
    },
    tankuangSon(){
      this.showSon=true;
      this.show=false;
    },
    fasong(){
      this.showSon=false;
      console.log(pinlun[0].children);
      console.log(this.moni.linshi);
      pinlun[0].children.unshift({
        replyId:1,
        userId:2,
        name:"自定义名字",
        title:this.moni.zishu,
        isDaka:true,
        imgUrl:"https://img.yzcdn.cn/vant/logo.png",
        date:2018,
        dianzan:0,
        isDianzan:false
      });
      this.moni.linshi='';
      console.log(pinlun);
    //   this.axios.post("/reply/addReply",{
    //     dynamicId:this.moni.wenzhang,
    //     replyId:this.moni.pinlun.replyId,
    //     userId:this.moni.userid,
    //     replyContent:this.moni.zishu
    //   })
    //   .then(res=>{
    //     console.log(res);
    //     console.log("成功");
    //     this.moni.zishu='';
    // this.axios.post("/dynamic/findOneById",{
    //   dynamicId:1
    // })
    // .then(res=>{
    //   console.log(res.data.data.replies);
    //   for(let i=0;i<res.data.data.replies.length;i++){
    //     if(res.data.data.replies[i].replyId==this.$route.query.pinlunid){
    //       this.moni.pinlun=res.data.data.replies[i];
    //     }
    //     if(res.data.data.replies[i].parentId==this.$route.query.pinlunid){
    //       this.moni.pinlunSon.push(res.data.data.replies[i]);
    //     }
    //   }
    //   console.log(this.moni.pinlunSon);
    //   console.log(this.moni.pinlun);
    //   console.log(this.moni.pinlun.userInfo.userName);

    // })
    //   })
    //   .catch(err=>{
    //     console.log(err);
    //   })
    },
    Load(){
      
    },
    share(){
      sessionStorage.setItem("forworddynamicId",1);
      sessionStorage.setItem("userId",1);
      this.$router.push('/forword')
    }
  },
}
</script>
<style lang="less" scoped>
.on{
  color: orange;
}
  .box{
    min-height: 100vh;
    background-color: rgba(170, 154, 82, 0.383);
    span{font-size: 14px;}
    p{font-size: 15px;}
    box-sizing: border-box;
    padding: 0 10px;
    margin-bottom: 40px;
    .toubu{
      display: flex;
      box-sizing: border-box;
      justify-content: space-between;
      align-items: center;
      padding: 5px 5px;
    }
    .content{
      .user{
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }
  .content-right{
    display: flex;
    align-items: center;
  }
  .dauserImg{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: orange;
  }
  .DauserImg{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: orange;
  }
.contentUser{
  display: flex;
  justify-content: flex-start;
  font-size: 16px;
  .pinlun-name{
    .pinlun-p{
      display: flex;
      align-items: flex-end;
    }
  }
  span{
    margin-left: 10px;
    font-size: 12px;
  }
  p{
    margin-left:10px;
    font-size: 16px;
  }
}
.main{
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
}
//处理右边的文字
.right{
  margin-left: 40px;
  font-size: 18px;
  margin-bottom: 10px;
  
}
//小标识
img[alt=aa]{
  height: 12px;
}
//大标识
img[alt=aaa]{
  height: 20px;
}
//点赞标志控制
.zan{
  font-size: 12px;
}
.backcolor{
  border-radius: 20px;
  box-sizing: border-box;
  padding: 5px 5px;
  background-color: rgba(238, 238, 238, 0.294);
}
.line-1{
  margin: 5px 0;
  height: 1px;
  border-bottom: 1px solid #eee;
}
.tankuang-1{
  width: 80vw;
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;
}
.fullwidth{
  width: 100%;
  text-align: center;
  padding: 10px 0 ;
  font-size: 16px;
}
.bottom-bars{
  width: 100vw;
  height: 7vh;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 12587;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.tankuang-2{
  width: 100vw;
  padding: 20px;
  border-radius:20px 20px 0 0;
  box-sizing: border-box;
  textarea{
    resize: none;
    box-sizing: border-box;
    background-color: rgba(238, 238, 238, 0.274);
    border: none;
    padding: 10px;
    height: 30vh;
    width: 100%;
    border-radius: 20px;
  }
  .huifu{
    display: flex;
    justify-content: space-around;
  }
}
</style>