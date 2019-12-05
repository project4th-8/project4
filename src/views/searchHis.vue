<template>
  <div class="searchHis">
    <p>历史搜索：</p>
    <ul class="search_history">
      <li @click="removeAll()">
        <a v-text="Atext" href="javscript:;"></a>
      </li>
      <li v-for="(item,index) in lists" :key="index">
        <img src="../../public/img/jdtIMG/history.png" alt />
        {{item.title}}
        <span @click="removeHistory(index)">X</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:"searchHis",
  data(){
    return{

    }
  },
  created(){
    this.axios.post("/search/findAllSearch")
    .then(res=>{
      console.log(res.data)
    })

  },
  methods:{

  }
}
</script>
<style lang="less" scoped>
.searchHis{
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
    border: 1px solid black;
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
        margin-top: 10px;
      }
      span{
        display: block;
        width: 50px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        float: right;
        cursor: pointer;
      }
    }
  }
}
  
</style>>