<template>
  <div id="app">
    <van-icon name="close" />
    <router-view/>

   
  </div>
</template>

<script>
import { Icon } from 'vant';


export default {
  components: {
   [Icon.name]:Icon
   }
}
</script>
<style lang="less">
@import './assets/style/resize.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
