<template>
  <div class="searchHis">
    
  </div>
</template>
<script>
export default {
  name:"searchHis",
  data(){
    return{
      lists:[],
    }
  },
  created(){
    this.axios.post("/search/findAllSearch")
    .then(res=>{
     this.lists = res.data.data
    })

  },
  methods:{
    
  }
}
</script>
<style lang="less" scoped>
.searchHis{
    
}
  
</style>>