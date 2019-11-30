<template>
  <div class="fix-top">

 <Recommendtext v-for="(item,index) in cons" :key='index' :info='item'></Recommendtext>
  </div>
</template>
<script>
import Recommendtext from '../components/recommendtext'
import { mapState,mapActions } from 'vuex'
export default {
  name:'recommend',
  data () {
    return {

    }
  },
  components: {
    Recommendtext
  },
  computed:{
    ...mapState([
      'cons'
    ])
  },
  created(){
    this.getConsSync()
  },
  methods:{
    ...mapActions([
      'getConsSync'
    ])
  }
}




</script>
<style lang="less" scoped>
.fix-top {
  margin-top:30px; 
  margin-bottom:40px; 
}
</style>