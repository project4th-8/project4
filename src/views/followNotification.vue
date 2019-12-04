<template>
  <div class="followNotification">
    <ul>
      <li>
       <p> <i>某某某 关注了你哟</i> <span>12:00</span></p>
      </li>
       <li>
        <p><i>某某某 取关了你</i> <span>12:00</span></p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:"followNotification"
}
</script>
<style lang="less" scoped>
  .followNotification{
    ul li {
      list-style: none;
      margin:0 auto;
      margin-top: 15px;
      width: 90vw;
      font-size: 8px;
     p{
       height: 30px;
       line-height: 30px;
       width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        i{
        width: 80%;
        color: rgb(236, 136, 22);
        font-weight: 500;
      }
     }
    }
  }
</style>