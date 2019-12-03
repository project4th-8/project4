<template>
  <div id="app">
    <ul class="nav">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/">发现</router-link></li>
        <li><router-link to="/">
          <div class="addCon">
            +
          </div>
        </router-link></li>
        <li><router-link to="/message">消息</router-link></li>
        <li><router-link to="/about">我的</router-link></li>
      </ul>

      <router-view/>
  </div>
</template>

<style lang="less">
@import "./assets/style/resize.css";
.router-link-exact-active,router-link-active {
  color: red;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}
.nav {
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 -1px 2px #ddd;
    
    li {
      display: inline-block;
      font-size: 18px;
      
      .addCon {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        text-align: center;
        line-height: 45px;
        color: #2c3e50;
        font-size: 40px;
        background: white;
        border: 1px solid rgb(212, 212, 212);
        transform: translateY(-4px);
      }
    }
  }
</style>