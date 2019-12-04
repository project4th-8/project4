<template>
  <div class="fix-top">

 <Recommendtext ></Recommendtext>
  </div>
</template>
<script>
import Recommendtext from '../components/recommendtext'

export default {
  name:'recommend',
  data () {
    return {
      cons:[]
    }
  },
  components: {
    Recommendtext
  },
  computed:{

  },
  created(){

    
  
  },
  methods:{
 
  }
}
</script>
<style lang="less" scoped>
.fix-top {
  margin-top:90px; 
  margin-bottom:40px; 
}
</style>