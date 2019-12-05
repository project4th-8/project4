<template>
  <div id="ScComment">
    <div class="toubu">
      <a href="javascript:;" @click="quit">
        <van-icon name="arrow-left" />
      </a>
      <span>{{yonghu.username}}的文章</span>
      <router-link to="/">
        <van-icon name="wap-home-o" />
      </router-link>
    </div>
    <div class="line"></div>
    <div class="comment-nav">
      <div class="nav-left">
        <div class="nav-img">
          <img :src="yonghu.userimg" alt="" @click="yulanimg(yonghu.userimg)">
        </div>
        <div class="nav-text">
          <p class="username">
            <router-link class="username" :to="'/about?username='+yonghu.username+'&userid='+yonghu.userid">
              {{yonghu.username}}
            </router-link>
            <img v-if="yonghu.isdaka==2" class="user-biaoshi-da" src="../assets/logo.png" alt="标识">
          </p>
          <span>{{wenzhang.date}}</span>
          <span>来自</span>
          <span>{{wenzhang.laizi}}</span>
        </div>
      </div>
      <!-- 点击取消关注 -->
      <div class="nav-right" @click="guanzhufangfa">
        <span v-if="user.isguanzhu">已关注</span>
        <span v-else>关注</span>
      </div>
    </div>
    <div class="comment-content">
      <div class="content-article">
        <div class="van-hairline--top-bottom">
          <h6 class="circle-title">{{wenzhang.title}}</h6>
        </div>
        <p>
          &nbsp;&nbsp;
          <a href="javascript:;"><span>@</span>{{wenzhang.aite}}</a>
          {{wenzhang.circle}}
        </p>
        <div>
          <van-grid :border="false" :column-num="3">
            <van-grid-item v-for="(item,index) in wenzhang.url" :key="index">
              <van-image :src=item @click="yulanimg(item)" />
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
        <span class="span">分享</span>
        <div class="van-icon-share">
          <span class="iconfont icon-weixin1" @click="fenxiang('微信')">
          </span>
          <span class="iconfont icon-QQ" @click="fenxiang('qq')"></span>
          <span class="iconfont icon-pengyou" @click="fenxiang('好友')"></span>
        </div>
      </div>
      <div class="comment-border" style=""></div>
    </div>
    <div class="comment-bottom">
      <div class="shenpin">
        <div class="shenpin-son">
          <div class="repin">热评</div>
          <!-- 发送点赞评论请求 -->
          <van-icon :class="{on:repin.iszan}" @click="repin.iszan=!repin.iszan;repin.zan=repin.iszan?repin.zan+1:repin.zan-1" name="good-job-o">{{repin.zan}}</van-icon>
        </div>
        <div class="shenpin-son">
          <p>
            <router-link :to="'/scpinlun?id='+wenzhang.wenzhangId">{{repin.circle}}</router-link>
          </p>
        </div>
      </div>
      <!-- <van-tabs v-model="active" color="orange"> 
        <van-tab :title="'评论'+lists.length">
            <div class="comment-bottom-pinglun">
              <div class="user-name">
                <div class="userImg-big">
                  <span>头像</span>
                </div>
                  <router-link :to="'/scgeren?username='+lists[0].name+'&userid='+lists[0].userid">
                    <span style="color:orange">{{lists[0].name}}</span>
                  </router-link>
                  
                  <img class="user-biaoshi-da" src="../assets/logo.png" alt="标识">
                  <span style="margin-right:10px;">:</span>
                  <span class="van-ellipsis">{{lists[0].title}}</span>
              </div>
              <div class="haha">
                    <div v-for="(items,index) in lists[0].children" :key="index" class="pinlun-son">
                      <div class="userImg">
                        <span>tou</span>
                      </div>
                      <router-link :to="'/scgeren?username='+items.name+'&userid='+items.userid">
                        <span style="color:orange">{{items.name}}</span>
                      </router-link>
                      <img class="user-biaoshi-xiao" src="../assets/logo.png" alt="标识">
                      <span>回复</span>
                      <div class="userImg">
                        <span>tou</span>
                      </div>
                      <span style="color:orange">{{lists[0].name}}</span>
                      <img class="user-biaoshi-xiao" src="../assets/logo.png" alt="标识">
                      <span>:</span>
                      <span class="van-ellipsis">{{items.title}}</span>
                    </div>
              </div>
              <div >
                <strong>……</strong>
              </div>
              <router-link to="/scpinlun">
              <p class="chakangengduo">{{lists[0].name}} 等发表共{{lists.length}}条评论<van-icon name="arrow" /></p>
              </router-link>
            </div>
        </van-tab>
        <van-tab :title="'转发'+lists.length" >
          <div v-for="(item,index) in lists" :key="index">
            <div class="user-name" style="padding:0 10px;">
              <div class="userImg">
                <span>头</span>
              </div>
              <span style="color:orange">{{item.name}}</span>
              <img src="../assets/logo.png" alt="标识" style="width:16px;">
              <span class="van-ellipsis">转发了这片文章</span>
            </div>
          </div>
        </van-tab>
        <van-tab class="zanFontSize" :title="'赞'+dianzan.length">
            <div v-for="(item,index) in dianzan" :key="index">
              <div class="user-name" style="padding:0 10px;">
                <div class="userImg">
                  <span>头</span>
                </div>
                <router-link :to="'/scgeren?username='+item.name+'&userid='+item.userid">
                  <span style="color:orange">{{item.name}}</span>
                </router-link>
                <img src="../assets/logo.png" alt="标识" style="width:16px;">
                <span class="van-ellipsis">觉得这篇文章很赞！</span>
              </div>
            </div>        
        </van-tab>
      </van-tabs> -->
    </div>
    <div class="bottom van-hairline--surround">
      <div class="bottom-bar">
        <van-icon name="share" @click="share"/>
        <span>{{wenzhang.zhuanfashu}}</span>
      </div>
      <div class="bottom-bar" @click="showPopup">
        <van-icon name="chat-o" />
        <span>{{wenzhang.liuyanshu}}</span>
      </div>
      <van-popup :overlay="false" round v-model="show" position='bottom' >
        <div class="textarea-box">
          <div class="shurukuang">
            <textarea v-model="zishu" maxlength="80" placeholder="写评论……" @keyup="jisuan" @keydown="jisuan">
            </textarea>
            <div class="xianzhi"><span v-text="zonggong"></span><span>/80</span></div>
          </div>
          <div class="zishu">
            <div class="clickFasong">
              <span @click="aite" >@</span>
              <!-- <van-popup :overlay="false" round v-model="showbiao" position='bottom'>
                <table>
                  <tr>
                    <td vue="">小脸</td>
                    <td vue="">哭啦</td>
                  </tr>
                </table>
              </van-popup> -->
              <span @click="show=false;zishu='';zonggong=0" >取消</span>
              <span @click="fasong">发送</span>
            </div>
          </div>
        </div>
      </van-popup>
      <van-popup
        v-model="showAite"
        position="top"
        :style="{ height: '100%' }">
        <div class="toubu"><van-icon @click="showAite=false" name="arrow-left" /></div>
        
        <div class="guanzhuAite">
          <hr>
          <div @click="showAite=false">{{yonghu.userid}}下的关注用户</div>
          <div class="guanzhuUser" v-for="(item,index) in aiteData" :key="index">
            <div class="userimg">
              <img :src="item.userImg[0]" alt="">
            </div>
            <div class="user">
              <p @click="aaa(item.userName)">{{item.userName}}</p>
              <img src="https://img.yzcdn.cn/vant/logo.png" alt="">
            </div>
          </div>
          <div class="line"></div>
          
        </div>
      </van-popup>
      <div class="bottom-bar" @click="collect">
        <van-icon name="like-o" :class="{on:user.isshoucang}" />
        <span>{{wenzhang.shoucangshu}}</span>
      </div>
      <div class="bottom-bar" @click="dianzanfangfa">
        <!-- 需要触发毁掉函数，点击时触发focus -->
        <van-icon name="good-job-o" :class="{on:user.iswenzan}" @click="user.iswenzan=!user.iswenzan;wenzhang.dianzanshu=user.iswenzan?wenzhang.dianzanshu+1:wenzhang.dianzanshu-1" />
        <span>{{wenzhang.dianzanshu}}</span>
      </div>
    </div>
  </div>
</template>
<script>


import { ImagePreview,Button,List,Cell,Tabbar, TabbarItem, Tabs,Tab,Icon,Grid, GridItem,Image,Popup,Field,Toast} from 'vant'
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
    [Toast.name]:Toast,
    [ImagePreview.name]:ImagePreview
  },
  data(){
    return{
      //存储@的值
      loading:false,finished:false,
      active:2,
      show:false,showbiao:false,showAite:false,
      zonggong:0,zishu:"",//文章评论
      
      //存储登录用户信息
      loginUser:{
        userid:sessionStorage.getItem("userId")
      },
      //文章用户信息
      yonghu:{
        userid:'1111',
        username:'默认名字',
        userimg:
        "",
        //是否大咖,默认大咖
        isdaka:true
      },
      //登录用户和文章用户的关系
      user:{
        //是否关注该文章用户
        isguanzhu:true,
        //是否点赞该文章，
        iswenzan:true,
        //是否收藏该文章
        isshoucang:true
      },
      //存储文章(需要获取的数据)
      wenzhang:{
        wenzhangId:1,
        title:"默认标题",
        circle:"默认文章",
        url:[
        ],
        date:"默认日期",
        laizi:"推荐关注",
        //被@的对象
        aite:"被招呼的幸运用户",
        zhuanfashu:58,//转发数
        liuyanshu:0,//留言数
        shoucangshu:5,//收藏数
        dianzanshu:44,//文章点赞数
      },
      aiteData:{},
      //存储返回文章的热评
      repin:{
        redu:588,
        zan:898,
        iszan:true,
        circle:"默认热点。"
      }
    }
  },
  created(){
    this.wenzhang.wenzhangId=sessionStorage.getItem('dynamicId');
  
      this.axios.post("/dynamic/findOneById",{
      dynamicId:this.wenzhang.wenzhangId
    })
    .then(res => {
   
      //文章用户信息：
      res=res.data.data;
      this.yonghu.username=res.userName;
      this.yonghu.userid=res.userId;
      this.yonghu.userimg=res.userImg[0];
   
      this.yonghu.isdaka=res.isMaster;
      //文章信息：
      this.wenzhang.zhuanfashu=res.dynamicTransmit;
      for(let i=0;i<res.replies.length;i++){
        if(res.replies[i].parentId==0){
          this.wenzhang.liuyanshu++;
        }
      }
      this.wenzhang.shoucangshu=res.dynamicHeat;
      this.wenzhang.dianzanshu=res.dynamicLikeCount;
      this.wenzhang.circle=res.dynamicContent;
      this.wenzhang.title=res.dynamicTitle;
      this.wenzhang.url=res.imgUrl;
      this.wenzhang.date=res.dynamicLastTime;
      this.wenzhang.wenzhangId=res.dynamicId;
      //热门信息：
      // this.repin.zan=Number(res.replies[0].replyLikecount)+10;
      // this.repin.circle=res.replies[0].replyContent;
      
    });
  //获取可以@的对象
    this.axios.post("/user/fans",{
      userId:sessionStorage.getItem("userId")
    })
    .then(res=>{
      this.aiteData=res.data.data;
 
    })
    //获取是否关注该用户
  },
  methods:{
    collect() {
      this.user.isshoucang=!this.user.isshoucang;
      this.wenzhang.shoucangshu = this.user.isshoucang?this.wenzhang.shoucangshu-1 : this.wenzhang.shoucangshu+1 
      this.axios.post("/dynamic/changeCollect",{
        userId: sessionStorage.getItem("userId"),
        dynamicId: sessionStorage.getItem("dynamicId")
      })
      .then(res => {
        res.data.code;
      })
    },
    quit() {
      var route = sessionStorage.getItem("quitpathTwo") ? sessionStorage.getItem("quitpathTwo") : sessionStorage.getItem("quitpath")
      this.$router.replace(route);
      sessionStorage.removeItem("quitpathTwo");
    },
    showPopup(){
      this.show=true;
    },
    jisuan(){
    
      this.zonggong=this.zishu.split('').length;
    },

    //检测回车事件
    EnterKey(e){
      if(e.keyCode==13){
        console.log("huiche")
      }
    },
    //点赞
    dianzanfangfa(){
      this.user.good=!this.user.good;
    },
    //关注
    guanzhufangfa(){

      this.user.isguanzhu=!this.user.isguanzhu;
    },
    yulanimg(a){
      ImagePreview([
        a
      ]);
    },
    fenxiang(a){
      if(a=="好友"){
        Toast({
          message: '分享给好友',      
        })
        window.location="comment";
      }else{
        Toast({
          message: '扫描'+a+'二维码即可分享',
          icon: 'https://img.yzcdn.cn/vant/logo.png'
        });
      }
    },
    aite(){
      this.showAite=true;
    },
    aaa(a){
    
      this.aiteyonghu=a;
      this.zishu+="@"+a+'';
      this.showAite=false;
    },
    fasong(){
      
      this.show=false;
      this.axios.post("/reply/addReply",{
        dynamicId:this.wenzhang.wenzhangId,
        userId:this.loginUser.userid,
        replyContent:this.zishu,
      })
      .then(res=>{
        res.data
this.axios.post("/dynamic/findOneById",{
      dynamicId:this.wenzhang.wenzhangId
    })
    .then(res => {
     res.data
      this.yonghu={}
      this.wenzhang={
        liuyanshu:0
      }
      this.repin=[]
      //文章用户信息：
      res=res.data.data;
      this.yonghu.username=res.userName;
      this.yonghu.userid=res.userId;
      this.yonghu.userimg=res.userImg[0];
 
      this.yonghu.isdaka=res.isMaster;
      //文章信息：
      this.wenzhang.zhuanfashu=res.dynamicTransmit;
      for(let i=0;i<res.replies.length;i++){
        if(res.replies[i].parentId==0){
          this.wenzhang.liuyanshu++;
        }
      }
      this.wenzhang.shoucangshu=res.dynamicHeat;
      this.wenzhang.dianzanshu=res.dynamicLikeCount;
      this.wenzhang.circle=res.dynamicContent;
      this.wenzhang.title=res.dynamicTitle;
      this.wenzhang.url=res.imgUrl;
      this.wenzhang.date=res.dynamicLastTime;
      this.wenzhang.wenzhangId=res.dynamicId;
      //热门信息：
      this.repin.zan=Number(res.replies[0].replyLikecount)+10;
      this.repin.circle=res.replies[0].replyContent;
      
    });

      })
      .catch(err=>{
        console.log(err);
      })
    },
    share(){
      sessionStorage.setItem("forworddynamicId",this.wenzhang.wenzhangId);
      sessionStorage.setItem("userId",this.loginUser.userid);
      this.$router.push('/forword')
    }
  }
}
</script>
<style lang="less" scoped>
@import '../assets/style/resize.css';
@import '../assets/style/sc.less';
@import '../assets/font/sc_font/iconfont.css';
.line{
  width: 95vw;
  border-bottom: 1px solid rgba(255, 166, 0, 0.465);
  margin: 5px auto;
}
#ScComment{
  background-color:white;
  position: relative;
  z-index: 999;
  margin-bottom: 7vh;
  .toubu{
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    a{
      font-size: 16px;
    }
    span{
      font-size: 14px;
      color: rgb(58, 53, 53);
    }
  }
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
          text-shadow: 0 0 0 black;
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
    h6{
      font-size: 18px;
    }
    p{
      letter-spacing: 1px;
      margin-top: 10px;
      font-size: 12px;
      text-align: justify;
      color: @fontColor;
      a{
        color: @zhutiColor;
      }
    }
    .tuijian{
      font-size: 12px;
      color: @zhutiColor;
      background-color: rgba(199, 194, 194, 0.363);
      width: 110px;
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
    height: 7vh;
    background-color: white;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9999;
    .bottom-bar{
      width: 60px;
      color:black;
      display: flex;
      align-items: center;
      justify-content: space-around;
      span{
        font-size: 14px;
        white-space: nowrap;
      }
    }
  }
  .textarea-box{
  height: 40vh;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  .zishu{
    height: 100%;
  }
  textarea{
    font-size: 15px;
    border-radius: 10px;
    border: none;
    background-color: #eee;
    width: 90vw;
    height: 20vh;
    resize: none;
    position: absolute;
    top: 7vh;
    padding: 10px;
  }
  .clickFasong{
    box-sizing: border-box;
    width: 100vw;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    position: absolute;
    bottom: 0;
    left: 0;
    padding-bottom: 20px;
    font-size: 16px;
  }
}
  .comment-share{
    .comment-border{
      width:95vw;
      height:10px;
      background-color:@mainColor;
      margin: 0 auto;
    }
    .share-content{
      margin: 30px 0;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .van-icon-share{
        width: 150px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        &::before{
          display: none;
        }
        span{
          font-size: 20px;
        }
      }
      .span{
        font-size: 15px;
        color: @mainColor;
      }
    }
  }
}
//处理头像(xiao)
.userImg{
  border-radius: 50%; 
  height: 20px;
  width: 20px;
  background-color: gold; 
  display: flex;
  align-items: center;
  justify-content: center;
}
//处理头像大
.userImg-big{
  border-radius: 50%; 
  height: 30px;
  width: 30px;
  background-color: gold; 
  display: flex;
  align-items: center;
  justify-content: center;
}
//处理标识小
.user-biaoshi-xiao{
  height: 12px;
  margin-left: 2px;
}
.user-biaoshi-da{
  height: 15px;
  margin-left: 3px;
}
      .user-name{
        font-size: 14px;
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
      }
.on{
  color: orange;
}

.shenpin{
  margin: auto;
  box-sizing: border-box;
  width: 95vw;
  background-color: #eee;
  font-size: 16px;
  border-radius: 0 0 10px 10px;
  .shenpin-son{
    box-sizing: border-box;
    padding: 10px 30px;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    p{
      color:rgb(42, 40, 40);
      letter-spacing: 2px;
      text-align: justify;
    }
    .repin{
      padding: 2px;
      width: 40px;
      background-color: orange;
      text-align: center;
      border-radius: 10px;
      color: rgb(255, 255, 255);
    }
  }
}
.shurukuang{
  width: 100vw;
  height: 30vh;
  display: flex;
  justify-content: center;
  position: relative;
  .xianzhi{
    position: absolute;
    bottom: 0;
    right: 10px;
    span{
      font-size: 14px;
    }
  }
}
.guanzhuAite{
  font-size: 16px;
  box-sizing: border-box;
  padding: 0 10px;
  .guanzhuUser{
    box-sizing: border-box;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img{
      height: 16px;
    }
    .userimg{
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background-color: orange;
      overflow: hidden;
      margin-right: 5px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .user{
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
}
</style>
