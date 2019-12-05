<template>
  <div id="tuijian">
    <div class="toubu">
      <a href="javascript:history.go(-1)"><van-icon name="arrow-left" /></a>
      <span>推荐</span>
      <router-link to='/'><van-icon name="wap-home" /></router-link>
    </div>
    <van-tabs v-model="activeName" class="abc" color="orange">
      <van-tab title="大咖推荐" name="a">
        <div v-for="(item,index) in daka" :key="index">
          <div class="tuijian">
            <div class="daka-left" >
              <div class="daka-img">
                <img :src="item.imgs[0].imgUrl" alt="">
              </div>
              <div class="daka-user">
                <router-link to='/' >
                  <p class="username" @click="sesionName(item.name)">
                  {{item.userName}}
                  <img src="../assets/logo.png" alt="标识">
                </p>
                </router-link>
                <span>{{item.userBirth}}</span>
                <span>来自</span>
                <span>大咖推荐</span>
              </div>
            </div>
            <div class="daka-right" >
              <span v-if="item.guanzhu" @click="item.guanzhu=!item.guanzhu">关注</span>
              <span v-else @click="item.guanzhu=!item.guanzhu">未关注</span>
            </div>
          </div>
          <div class="daka-content">
            <span>基本信息</span>
            <div>
              <span>昵称：</span>
              <span>{{item.userNickname}}</span>
            </div>
            <div>
              <span>电话：</span>
              <span>{{item.userPhone}}</span>
            </div>
          </div>
        </div>
        <div class="bottomfull"></div>
      </van-tab>
      <van-tab title="社区推荐" name="b">
        <div v-for="(item,index) in shequ" :key="index">
          <div class="tuijian">
            <div class="daka-left" >
              <div class="daka-img">
                <img :src="item.url" alt="">
              </div>
              <div class="daka-user">
                <router-link to='/scgeren'>
                  <p class="username" @click="sesionName(item.name)" >
                  {{item.name}}
                  <img src="../assets/logo.png" alt="标识">
                  </p>
                </router-link>
                <span>昨天 23:40</span>
                <span>来自</span>
                <span>社区推荐</span>
              </div>
            </div>
            <div class="daka-right" >
              <span v-if="item.guanzhu" @click="guanzhu(item.guanzhu)">关注</span>
              <span v-else>未关注</span>
            </div>
          </div>
          <div class="daka-content">
            <span>基本信息</span>
            <div>
              <span>昵称：</span>
              <span>{{item.name}}</span>
            </div>
            <div>
              <span>性别：</span>
              <span>女</span>
            </div>
            <div>
              <span>简介：</span>
              <span>{{item.jieshao}}</span>
            </div>
          </div>
        </div>
        <div class="bottomfull"></div>
      </van-tab>
    </van-tabs>
  </div>
  
</template>
<script>
var daka = [
  {
    name:"张嘉倪",
    url:"https://img.yzcdn.cn/vant/apple-3.jpg",
    biaoshi:"https://img.yzcdn.cn/vant/apple-3.jpg",
    jieshao:"张嘉倪是一个明星，住在中国，稍随后公开的辉光该地块刚开始。",
    isguanzhu:true

  },
    {
    name:"张倪",
    url:"https://img.yzcdn.cn/vant/apple-3.jpg",
    biaoshi:"https://img.yzcdn.cn/vant/apple-3.jpg",
    jieshao:"张嘉倪是一个明星，住在中国，稍随后公开的辉光该地块刚开始。",
    isguanzhu:true

  },
    {
    name:"张嘉",
    url:"https://img.yzcdn.cn/vant/apple-3.jpg",
    biaoshi:"https://img.yzcdn.cn/vant/apple-3.jpg",
    jieshao:"张嘉倪是一个明星，住在中国，稍随后公开的辉光该地块刚开始。",
    isguanzhu:true

  },
    {
    name:"安达",
    url:"https://img.yzcdn.cn/vant/apple-3.jpg",
    biaoshi:"https://img.yzcdn.cn/vant/apple-3.jpg",
    jieshao:"张嘉倪是一个明星，住在中国，稍随后公开的辉光该地块刚开始。",
    isguanzhu:true

  },
    {
    name:"吴磊",
    url:"https://img.yzcdn.cn/vant/apple-3.jpg",
    biaoshi:"https://img.yzcdn.cn/vant/apple-3.jpg",
    jieshao:"张嘉倪是一个明星，住在中国，稍随后公开的辉光该地块刚开始。",
    isguanzhu:true

  }
]
var shequ=[
  {
    name:"song",
    url:"https://img.yzcdn.cn/vant/apple-3.jpg",
    biaoshi:"https://img.yzcdn.cn/vant/apple-3.jpg",
    jieshao:"张嘉倪是一个明星，住在中国，稍随后公开的辉光该地块刚开始。",
    isguanzhu:true

  },
    {
    name:"hcuan",
    url:"https://img.yzcdn.cn/vant/apple-3.jpg",
    biaoshi:"https://img.yzcdn.cn/vant/apple-3.jpg",
    jieshao:"张嘉倪是一个明星，住在中国，稍随后公开的辉光该地块刚开始。",
    isguanzhu:false

  },
    {
    name:"jasc",
    url:"https://img.yzcdn.cn/vant/apple-3.jpg",
    biaoshi:"https://img.yzcdn.cn/vant/apple-3.jpg",
    jieshao:"张嘉倪是一个明星，住在中国，稍随后公开的辉光该地块刚开始。",
    isguanzhu:true

  },
    {
    name:"安dd",
    url:"https://img.yzcdn.cn/vant/apple-3.jpg",
    biaoshi:"https://img.yzcdn.cn/vant/apple-3.jpg",
    jieshao:"张嘉倪是一个明星，住在中国，稍随后公开的辉光该地块刚开始。",
    isguanzhu:false

  },
    {
    name:"吴",
    url:"https://img.yzcdn.cn/vant/apple-3.jpg",
    biaoshi:"https://img.yzcdn.cn/vant/apple-3.jpg",
    jieshao:"张嘉倪是一个明星，住在中国，稍随后公开的辉光该地块刚开始。",
    isguanzhu:true

  }
]

import {Tab,Tabs,Icon} from 'vant'
export default {
  name:"tui",
  components:{
    [Tab.name]:Tab,
    [Tabs.name]:Tabs,
    [Icon.name]:Icon
  },
  data(){
    return{
      activeName:'a',
      daka:[],
      shequ:[],
    }
  },
  created(){
    this.daka=daka;
    this.shequ=shequ;
    this.axios.post("/user/recommendedUser")
    .then(res=>{

      this.daka=res.data.data;
      for(let i=0;i<this.daka.length;i++){
        this.axios.post("/checkAtt",{
          userId:this.daka[i].userId
        }).then(res=>{
      
          this.daka[i].guanzhu=res.data.data;
      
        })
      }
    })

    
  },
  methods:{
    sesionName(a){
      sessionStorage.setItem("name",a)
    },
    guanzhu(b){
      console.log(b)
    },
  }
}
</script>
<style lang="less" scoped>
.tuijian{
  padding: 20px;
  display: flex;
  justify-content: space-between;
  .daka-left{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .daka-img{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 60px;
      line-height: 60px;
      background-size: 60px;
      border: 1px solid #ddd;
      border-radius: 50%;
      overflow: hidden;   
      img{
        width: 100%;
        height: 100%;
      }
    }
    .daka-user{
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
        color: orange;
        img{
          margin-left: 2px;
          height: 16px;
        }
      }
    }
  }
  .daka-right{
    padding: 5px;
    text-shadow: 0 0 1px orange;
    border: 1px solid orange;
    border-radius: 30px;
    width: 60px;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    text-align: center;
    color: orange;
  }
}
.daka-content{
  padding: 0 30px;
  font-size: 15px;
  color: #555;
}
.bottomfull{
  margin-bottom: 60px;
}
.tuijian-return{
  position: absolute;
  left: 0;
  top: 5vh;
  z-index: 99989;
}
.toubu{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
}
</style>