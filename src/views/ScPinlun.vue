<template>
  <div id="scpinlun">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div v-for="(item,index) in lists" :key="index" :title="item.title">
        <div class="comment-nav">
          <div class="nav-left">
            <div class="nav-img">
              <img src="../assets/logo.png" alt="">
            </div>
            <div class="nav-text">
              <p class="username">
                {{item.name}}
                <img src="../assets/logo.png" alt="标识">
              </p>
              <span><span>评论发表于</span> 2016.12.2</span>
            </div>
          </div>
          <div class="nav-right"><span>关注</span></div>
        </div>
        <div class="van-hairline--top-bottom">{{item.title}}</div>
        <div v-for="(items,index) in item.children" :key="index" class="huifu">
              <div class="user-name">
                <div class="ha">
                  <img src="../assets/logo.png" alt="aa">
                  <span style="color:orange">{{items.name}}</span>
                  <img src="../assets/logo.png" alt="bb" >
                  <span style="margin-right:10px;">:</span>
                </div>
                <span>{{items.title}}</span>
              </div>
          <!-- <p>{{items.title}}</p> -->
        </div>
        <van-divider :style="{ color: 'grey', borderColor: 'grey', padding: '10px 5px' }"></van-divider>
        <div class="dianzan">
          <span>
            <a href="javascript:;" :idn="index" @click="showText(item.name)" :value="item.name">
              <van-icon name="chat-o" />
            </a>
          </span>
          <van-popup
            v-model="show"
            closeable
            position="bottom"
            :style="{ height: '40vh' }">
            <div class="van-popup">
              <textarea  v-text="'你 回复 '+linshi+' : '" >
            </textarea>
            </div>
            <div class="van2"><van-button class="input" color="orange" @click="huifu">回复</van-button></div>
          </van-popup>
          <span class="dd" @click="item.state=!item.state" >
            <van-icon name="good-job-o" :class='{on:item.state}' />
            {{item.like}}
          </span>
        </div>

      </div>
    </van-list>
  </div>
</template>
<script>
var lists=[
   {
    name:"长歌wang日和事",
    title:"暴击啊这首歌,我的天呐。。",like:54,state:false,
    children:[
      {
        name:"aao",
        title:"月如身上挂着的铃，叫做莫失；逍遥身上挂着的铃，叫做莫忘。",like:54,state:false,
      },
      {
        name:"hahah",
        title:"胡歌说,他已经演不出那时候李逍遥的眼神了。",like:54,state:false,
      }
    ]
  },
  {
    name:"song",
    title:"坑就即使，添加的第一条数据。",like:54,state:false,
    children:[
      {
        name:"aao",
        title:"你真棒2！",like:54,state:false,
      },
      {
        name:"hahah",
        title:"我真是2",like:54,state:false,
      }
    ]
  },
  {
    name:"陈思狗",
    title:"坑就即使，第二天数据。",like:54,state:false,
        children:[
      {
        name:"aao",
        title:"你真棒3！",like:54,state:false,
      },
      {
        name:"hahah",
        title:"我真是3",like:54,state:false,
      }
    ]
  },
  {
    name:"你的像",
    title:"坑就即使，第三个数据。",like:54,state:false,
        children:[
      {
        name:"aao",
        title:"你真棒！",like:54,state:false,
      },
      {
        name:"hahah",
        title:"我真是",like:54,state:false,
      }
    ]
  }
]
import {List,Divider,Popup,Icon,Button } from 'vant'
export default {
  name:"pinglun",
  data(){
    return{
      loading:false,
      finished:false,
      lists:[],
      show:false,
      dianzan:false,
      linshi:'',//临时存储回复人,
      lisnhizishu:''//临时存储回复
    }
  },
  created (){
    // this.lists=lists;
  },
  components:{
    [List.name]:List,
    [Divider.name]:Divider,
    [Popup.name]:Popup,
    [Icon.name]:Icon,
    [Button.name]:Button
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
    showText(a){
      this.show=true;
      this.linshi=a
    },
    dian(){
      this.dianzan=true;
    },
    huifu(){
      this.lisnhizishu='';
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
  #scpinlun{
    padding: 10px;
    position: relative;
    z-index: 999;
    background-color: white;
    .dianzan{
      display: flex;
      justify-content: space-around;
      margin-bottom: 30px;
      a{
      }
      .van-popup{
        display: flex;
        justify-content: center;
        textarea{
          margin-top: 5vh;
          width: 70vw;
          height: 30vw;
          padding: 5px 10px;
          resize: none;
        }
      }
      .van2{
        width: 100%;
        height: 100%;
        position: relative;
        z-index: -1;
        .input{
          line-height: 40px;
          width: 100%;
          height: 40px;
          position: absolute;
          bottom:0 ;
          left: 0;
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
  .dd{
    display: flex;
    align-items: center;
  }
</style>
