<template>
 <div class="searchHistory">
   <div v-if="isShow" class="search_kuang clear"><input v-model="Xtext" type="text" placeholder="请输入搜索内容" clearable>
    <span  @click="removeX">X</span>
     <button @click="addHistory"><img src="../../public/img/jdtIMG/search.png" alt=""></button>
     <!-- <p><router-link class="a" to="searchAll">haha</router-link></p> -->
    </div>
    <p v-if="isShow">历史搜索：</p>
    <ul class="search_history" v-if="isShow">
      <li @click="removeAll()">
        <router-link v-text="Atext" to=""></router-link>
      </li>
      <li v-for="(item,index) in lists" :key="index">
        <img src="../../public/img/jdtIMG/history.png" alt />
        {{item.searchRecords}}
        <span @click="removeHistory(index)">X</span>
      </li>
    </ul>
    <ul v-show="isTrue" class="searchAll">
      <li v-for="(item,index) in allList " :key="index">{{allList[index]}}</li>
    </ul>
 </div>
</template>


<script>

/* import bus from '../utils/bus' */

export default {
  name:'searchHistory',
 data () {
 
    return {
      lists:[],
      // gai:true,
      Atext:"清除历史信息",
      Xtext:"",
     searchRecords:'',
     isShow:true,
     isTrue:false,
     allList:[]
    }
  },
  created () {
  // this.userId = sessionStorage.getItem('userId')
  //   this.axios.post('/fund/fuzzyQuery',{
  //   userId:this.userId,
  //   fuzzyName:this.Xtext
  //   })

  //   .then(res=>{
      
      // }
  //     console.log(this.allList)
      
  //   })
  //   .catch(err=>{
  //     console.log(err)
  //   })
     this.axios.post("/search/findAllSearch")
    .then(res=>{
      this.lists= res.data.data
      console.log(this.lists)
    })
   },
  methods: {
   /*  tosousuo(){
    let _Xtext = this.Xtext;
    let newlists = [];
    if(_Xtext){
      this.allList.filter(item =>{
        if(item.code.toLowerCase().indexOf(_search) !== -1){
          newlists.push(item)
        }
      })
    }
    this.allList = newlists
  }, */
  removeHistory: function (index) {
    console.log(this.lists[index].id)
        this.lists.splice(index, 1);
        this.change();
        this.axios.post('/search/delSearch',{
          id: this.lists[index].id
        })
        .then(res=>{
          console.log(res.data)
        })
        .catch(err=>{
          console.log(err)
        })
       },
  change:function(){
    if(this.lists.length == 0){
        this.Atext = "暂无记录"
    }else if(this.lists.length >=1){
      this.Atext = "清除历史信息"
  }},
  
  removeAll:function(){
          this.lists.splice(0,this.lists.length);
          this.change();
          this.axios.post('/search/delAllSearch')
          .then(res=>{
            console.log(res.data)
          })
  },
    removeX:function(){
      // console.log(this.Xtext)
    this.Xtext = "";
  },
 
  addHistory:function(){
   
    
    if(this.Xtext != ""){
       this.Atext = "清除历史信息";
      this.isShow = false;
      this.isTrue = true;
       this.axios.post("/search/addSearch",{
         searchText:this.Xtext
       })
       .then(res=>{
        //  this.lists = res.data.data
         console.log(res.data)
       })
       .catch(err=>{
         console.log(err)
       })
        this.axios.post("/search/someSearch",{
         searchText:this.Xtext
       })
       .then(res=>{
          for(var e = 0;e<res.data.data.用户.length;e++){
          this.allList.push(res.data.data.用户[e].userNickname)
          }
         for(var i=0;i<res.data.data.基金.length;i++){
          this.allList.push(res.data.data.基金[i].fundName)
          }
          for(var j=0;j<res.data.data.正文.length;j++){
          this.allList.push(res.data.data.正文[j].dynamicTitle)
          }
         
        //  console.log(this.allList)
         console.log(res.data.data)
       })
       .catch(err=>{
         console.log(err)
       })
      this.lists.unshift({
       searchRecords:this.Xtext
      })
      this.Xtext = "";
    }
  },
 },
  computed: {
    //过滤方法
    items: function() {
      var _Xtext = this.Xtext;
      if (_Xtext) {
        //不区分大小写处理
        var reg = new RegExp(_Xtext, "ig");
        //es6 filter过滤匹配，有则返回当前，无则返回所有
        return this.allList.filter(function(e) {
          //匹配所有字段
          return Object.keys(e).some(function(key) {
            return e[key].match(reg);
          });
          //匹配某个字段
          //  return e.name.match(reg);
        });
      }
      return this.allList;
    }
  }

}
</script>
<style lang="less" scoped>
.searchHistory{
   font-size:14px;
  overflow: hidden;
   p{
    font-size:14px;
    text-align: left;
    margin-left: 5%;
    margin-top: 50px;
    color: rgb(224, 108, 12);
  }
  .search_history{
     overflow:scroll;
    margin-top: 10px;
    width: 80%;
    height: 40vh;
    margin: 0 auto;
    li{
      text-align: center;
      font-size: 14px;
      height: 40px;
      line-height: 40px;
      overflow: hidden;
      img{
        vertical-align: middle;

        float: left;
        margin-top: 13px;
      }
      span{
        display: block;
        width: 50px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        float: right;
        cursor: pointer;
      }
    }
  }
  ul li {
    list-style: none;
  }

  // text-align: left;
  .search_kuang{
  position: relative;
  width: 90%;
  margin-left: 5%;
  // font-size: 14px;
  span{
    font-size: 16px;
     position: absolute;
     color: rgb(80, 78, 78);
    right: 40px;
    top: 6px;
    cursor: pointer;
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

  .searchAll{
    overflow: scroll;
    height: 100vh;
    li{
      text-indent: 2em;
      height: 60px;
      width: 90%;
      margin: 0 auto;
    };
    // background: #000;
  }
}

</style>