<template>
  <div class="msgsearch">
    <div class="sou">
      <span @click="esc">取消</span>
      <input v-model="search" type="text" placeholder="这里的搜索只能输入用户昵称">
      <!-- <button >搜索</button> -->
    </div>
    <ul class="show">
         <li v-for="(item,index) in items" :key="index">
            <img :src="item.touurl" alt="">
            <h4>{{item.name}}</h4>
        </li>
    </ul>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <van-cell v-for="(item,index) in items" :key="index" /></van-list>
  </div>
</template>
<script>
var lists = [
        {
          touurl:require('../assets/img/1.jpg'),
          name:"HwwAH"
        },
         {
          touurl:require('../assets/img/1.jpg'),
          name:"HwwwAH"
        },
         {
          touurl:require('../assets/img/1.jpg'),
          name:"HaAH"
        },
         {
          touurl:require('../assets/img/1.jpg'),
          name:"HadAH"
        },
         {
          touurl:require('../assets/img/1.jpg'),
          name:"HAadasH"
        },
         {
          touurl:require('../assets/img/1.jpg'),
          name:"HAasadaH"
        },
         {
          touurl:require('../assets/img/1.jpg'),
          name:"HwwAH"
        },
         {
          touurl:require('../assets/img/1.jpg'),
          name:"HwwwAH"
        },
         {
          touurl:require('../assets/img/1.jpg'),
          name:"HaAH"
        },
         {
          touurl:require('../assets/img/1.jpg'),
          name:"HadAH"
        },
         {
          touurl:require('../assets/img/1.jpg'),
          name:"HAadasH"
        },
         {
          touurl:require('../assets/img/1.jpg'),
          name:"HAasadaH"
        },
         {
          touurl:require('../assets/img/1.jpg'),
          name:"HwwAH"
        },
         {
          touurl:require('../assets/img/1.jpg'),
          name:"HwwwAH"
        },
         {
          touurl:require('../assets/img/1.jpg'),
          name:"HaAH"
        },
         {
          touurl:require('../assets/img/1.jpg'),
          name:"HadAH"
        },
         {
          touurl:require('../assets/img/1.jpg'),
          name:"HAadasH"
        },
         {
          touurl:require('../assets/img/1.jpg'),
          name:"HAasadaH"
        }
      ];
import { List,Cell } from 'vant';
export default {
  name:'msgsearch',
  data() {
    return {
      list:[],
      search:"",
      loading: false,
      finished: false
    };
  },
  created(){
    this.lists = lists
  },
  components:{
    [List.name]:List,
    [Cell.name]:Cell
  }
  ,
  methods: {
    esc(){
      this.$router.replace('/message') 
       },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.lists[i]);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 10) {
          this.finished = true;
        }
      }, 500);
    }
  },
 computed: {
        //过滤方法
        items: function() {
            var _search = this.search;
            if (_search) {
                //不区分大小写处理
                var reg = new RegExp(_search, 'ig')
                //es6 filter过滤匹配，有则返回当前，无则返回所有
                return this.lists.filter(function(e) {
                    //匹配所有字段
                    return Object.keys(e).some(function(key) {
                        return e[key].match(reg)
                    })
                    //匹配某个字段
                    //  return e.name.match(reg);
                })
            }
            return this.lists;
        }
    },
    }
</script>
<style lang="less" scoped>
.msgsearch{
  font-size: 16px;
  // display:flex ; 
  // align-items: flex-start;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .sou{
    height: 60px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    input{
      width: 85%;
      height: 30px;
      text-indent: 2em;
      line-height: 30px;

    }
    button{
      height: 46px;
      width: 14%;
      border: none;
    }
    span{
      width: 10%;
    }
  }
  .show{
    overflow:scroll;
    width: 100vw;
    height: calc(100vh - 60px);
    z-index: 9999;
    background-color: rgb(238, 242, 247);
    li{
      width: 90%;
      height: 40px;
      margin: 0  auto;
      margin-top: 10px;
      padding-left: 25px;
      background: white;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img{
        height: 30px;
        width: 30px;
        border-radius: 50%;
      }
      h4{
        font-size: 16px;
        margin-left: 10px;
      }
    }
  }
}
</style>