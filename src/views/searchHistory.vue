<template>
 <div class="searchHistory">
   <div class="search_kuang clear"><input v-model="Xtext" type="text" placeholder="请输入搜索内容" clearable>
    <span  @click="removeX">X</span>
     <button @click="addHistory"><img src="../../public/img/jdtIMG/search.png" alt=""></button>
     <p><router-link class="a" to="searchAll">haha</router-link></p>
    </div>
    <div>
      <router-view/>
    </div>
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
  name:'searchHistory',
 data () {
 
    return {
      lists,
      // gai:true,
      Atext:"清除历史信息",
      Xtext:"",
      li:[]
    }
  },
  created () {
    this.lists = lists;
     this.axios.post("/search/findAllSearch")
    .then(res=>{
      console.log(res.data)
    })

 /*    this.axios
    .post('/search/findAllSearch')
    .then(res=>{
      console.log(res.data)
      }
    ).catch(err =>{
      console.log('错了',err)
    }) */
  },
  methods: {
    tosousuo(){
    this.$router.push('/searchsou')
  },
  removeHistory: function (index) {
        this.lists.splice(index, 1);
        this.change();
       },
  removeAll:function(){
          this.lists.splice(0,this.lists.length);
          this.change();
  },
    removeX:function(){
      console.log(this.Xtext)
    this.Xtext = "";
  },
  change:function(){
    if(this.lists.length == 0){
       this.Atext = "暂无记录"
    }else if(this.lists.length >=1){
      this.Atext = "清除历史信息"
  }},
  addHistory:function(){
    if(this.Xtext != ""){
       this.Atext = "清除历史信息";
      this.lists.unshift({
       title:this.Xtext
      })
      this.Xtext = "";
    }
  },
  


 },

}
</script>
<style lang="less" scoped>
.searchHistory{
   font-size:14px;
  overflow: hidden;
  p{
    height: 100px;
    line-height: 100px;
    margin-top: 50px;
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
}

</style>