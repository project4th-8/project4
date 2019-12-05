<template>
  <div  class="fix-top">
    <textcon v-for="(item,index) in cons" :key='index' :info='item' ></textcon>


    这里是indexs页面
  </div>
</template>

<script>
import textcon from '../components/textcon'
import { mapState,mapActions } from 'vuex'
export default {
  name: "texts",
  data () {
    return {

    }
  },
  components: {
    textcon
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
  margin-top:60px; 
  margin-bottom:80px; 
}
</style>