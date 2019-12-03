<template>
  <div class="systemNotifications">
    <ul>
      <li>
        <img src="../assets/img/1.jpg" alt="">
        <div>被通知的内容  ，时间怎么都不够啊，我太难了</div>
        <span>10:30</span>
      </li>
    </ul>
  </div>
</template>
<script>
/* var tongzhi = [
{
}
] */
export default {
  name:"systemNotifications"
}
</script>
<style lang="less" scoped>
.systemNotifications{
  ul li{
    list-style: none;
    font-size: 16px;
  }
  ul{
    margin-top: 20px;
    width: 100%;
    li{
      width: 90%;
      height: 40px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background: #000;
      }
      div{
        height: 40px;
        width: 70vw;
      }
    }
  }
}
</style>