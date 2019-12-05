<template>
  <div class="allfunds">
    
    <allfunds :fundtitle="findfund" > </allfunds>
  </div>

</template>
<script>
import allfunds from '../components/allfunds.vue'

export default {
  name: "allfund",
  props:['findfund'],
  data () {
    return {

    }
  },
  components: {
    allfunds
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

  .allfunds {
    height: auto;
  }

  
</style>