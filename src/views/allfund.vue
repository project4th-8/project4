<template>
  <div>
    <allfunds v-for="(item,index) in fundlists" :key='index' :infos='item'></allfunds>
  </div>

</template>
<script>
import allfunds from '../components/allfunds.vue'
import { mapState,mapActions } from 'vuex'
export default {
  name: "allfund",
  data () {
    return {

    }
  },
  components: {
    allfunds
  },
  computed:{
    ...mapState([
      'fundlists'
    ])
  },
  created(){
    this.getfundlistsSync()
  },
  methods:{
    ...mapActions([
      'getfundlistsSync'
    ])
  }
}
</script>
<style lang="less" scoped>
.content {
  display: flex;
  justify-content: space-around;
  font-size: 8px;
  text-align: center;
  height: 25px;
  line-height: 25px;
  border-bottom: 1px solid #ddd;
  div {
    width: 40px;
    height: 25px;
  }
  li {
    height: 14px;
  }
  .code {
    font-size: 10px;
    color: #333;
  }
  .names {
    width: 25px;
    text-align: left;
  }
  .starall {
    width: 10px;
  }
  .star {
    color: #ddd;
  }
}
</style>