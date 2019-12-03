<template>
 <div class="search">
   <div class="search_kuang clear"><input @focus="tosearchHistory" type="text" placeholder="请输入搜索内容">
   <button><img src="../../public/img/jdtIMG/search.png" alt=""></button></div>
<!--    <div class="search_history">

   </div> -->
   <p>热搜：</p>
   <ul class="search_hot">
     <li v-for="(item,index) in lists" :key="index">{{item.title}}</li>
     <!-- <li><a href="">查看更多</a></li> -->
   </ul>
 </div>
</template>


<script>

/* import bus from '../utils/bus' */
var lists=[
  {
  title:"今天又是难过的一天"
  },
  {
  title:"今天又是难过的er天"
  },
  {
  title:"今天又是难过的san天"
  },
  {
  title:"今天又是难过的si天"
  },
]
export default {
  name:'search',
 data () {
    return {
      lists: []
    }
  },
  created () {
    this.lists = lists
  },
  methods:{
    tosearchHistory(){
      this.$router.replace("/searchHistory")
    }
  }

}
</script>
<style lang="less" scoped>
.search{
  overflow: hidden;
  ul li {
    list-style: none;
  }
   p{
    font-size:14px;
    float: left;
    margin-left: 5%;
    margin-top: 60px;
    color: rgb(224, 108, 12);
  }
  // text-align: left;
  .search_kuang{
  position: relative;
  width: 90%;
  margin-left: 5%;
  font-size: 14px;
  span{
    font-size: 14px;
     position: absolute;
     color: rgb(80, 78, 78);
    right: 2px;
    top: 7px;
  }
  input{
    width: 100%;
     font-size: 14px;
    text-indent: 2em;
    height: 30px;
     position: absolute;
    right: 0;
    top: 0;
    border: 1px solid rgb(80, 78, 78)
  }
  button{
    height: 32px;
    width: 32px;
     position: absolute;
    right: 0;
    top: 0;
     img{
    width: 30px;
    height: 30px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  }
 
 

  }
}
.search_hot{
  overflow: hidden; 
  float: left;
  width: 90%;
  padding: 0;
  margin: 0;
  margin-left: 5%;
  text-align: left;
  // text-indent: 1em;
  li:nth-of-type(odd){
    float: left;
    height: 15px;
    line-height: 15px;
    width: 48%;
    font-size: 14px;
    margin-top: 10px;
    border-right: 1px solid black;
   
  }
  li:nth-of-type(even){
    float: right;
     height: 15px;
     line-height: 15px;
    width: 48%;
     margin-top: 10px;
    font-size: 14px;
   
  }
}
</style>