<template>
  <div>
        <div class="name-list">
      <div>基金简称</div>
      <div>
        基金购买数量
        <span @click="isShowt=!isShowt">
          <van-icon name="ascending" v-if="isShowt" />
          <van-icon name="descending" v-else />
        </span>
      </div>
      <div>
        基金收益
        <span @click="isShowsub=!isShowsub">
          <van-icon name="ascending" v-if="isShowsub" />
          <van-icon name="descending" v-else />
        </span>
      </div>
      <div>收藏</div>
    </div>
    <div v-for="(item,index) in cons" :key="index" :info="item">
      <div class="content con-top">
        <div class="names" @click="funddetails(index)">
          <p class="title" >{{item.fundName}}</p>
        </div>
        <div @click="funddetails(index)">{{item.fundCount}}</div>
        <div @click="funddetails(index)">{{item.fundEarnings}}</div>
        <div
          class="starall"
          :class="{star:state===index&&isshow}"
          @click="isshow=!isshow,state=index "
        >
          <van-icon name="star" />
        </div>
      </div>
      <div class="content bottom-content">
        <div>
          <span class="code">123213</span>
        </div>
        <div class="time">
          <span class="code time">{{item.fundBuytime}}</span>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "fundone",
  data:function() {
    return {
   isshow: false,
      cons: [],
      state:'',
      isShowt: true,
      isShowsub: true,
    }
  },
  created () {
     this.axios.post("/fund/findByType", {
       typeId: 5
     }).then(res => {
      console.log(res.data.data.data);
      this.cons = res.data.data.data;
    });
  },
  methods:{
 funddetails: function(index) {
      sessionStorage.setItem("fundId", this.cons[index].fundId);
      this.$router.push("/funddetails");
    },
  }
}

</script>

<style lang="less" scoped>
.main {
  border-bottom: 2px solid #ddd;
}
.con-top {
  padding-top: 10px;
}
.bottom-content {
   border-bottom: 1px solid #ddd;
}
.content {
  display: flex;
  justify-content: space-around;
  font-size: 16px;
  text-align: center;
  width: 100%;
  div {
    width: 100px;
  }
  
  .time {
    width: 110px;
    margin-left: 20px;
  }
  .code {
    font-size: 10px;
    color: #333;
  }
  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .names {
    width: 100px;
    text-align: left;
    margin-left: 16px;
  }
  .starall {
    margin-left: 20px;
    width: 40px;
    color: #ddd;
  }
  .star {
    color: #333;
  }
}
.name-list {
  border-top: 6px solid rgb(204, 204, 204);
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  padding-top: 5px;
  padding-bottom: 8px;
  border-bottom: 2px solid #ddd;
  .van-icon {
    font-size: 16px;
    vertical-align: middle;
  }
}
</style>
