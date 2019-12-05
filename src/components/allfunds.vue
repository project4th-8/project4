<template>
  <div class="main">
        
    <div class="name-list">
      <div>基金简称</div>
      <div>
        基金购买数量
        <span @click="isShowt=!isShowt,sortcount(sortid=!sortid)">
          <van-icon name="ascending" v-if="isShowt" />
          <van-icon name="descending" v-else />
        </span>
      </div>
      <div>
        基金收益
        <span @click="isShowsub=!isShowsub,sort(sortid=!sortid)">
          <van-icon name="ascending" v-if="isShowsub" />
          <van-icon name="descending" v-else />
        </span>
      </div>
      <div>收藏</div>
    </div>
    <div v-for="(item,index) in cons" :key="index" :info="item">
      <div>
        <div class="content con-top">
          <div class="names" @click="funddetails(index)">
            <p class="title">{{item.fundName}}</p>
          </div>
          <div @click="funddetails(index)">{{item.fundCount}}</div>
          <div @click="funddetails(index)">{{item.fundEarnings}}</div>
          <div
            class="starall "
          
            @click="iszan(item.fundId,$event,index),mzan[index]=!mzan[index]"
          >
            <van-icon name="star" />
          </div>
        </div>
        <div class="content bottom-content">
          <div>
            <span class="code">{{item.fundId}}3{{item.fundState}}2412</span>
          </div>
          <div class="time">
            <span class="code time">{{item.fundBuytime}}</span>
          </div>
          <div></div>
          <div></div>
          <span class="findfund">
            {{findfunds = fundtitle}}
          </span>
         
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from "vant";
export default {
  name: "allfunds",
  props: ["fundtitle"],
  data: function() {
    return {
      isshow: false,
      isShowt: true,
      isShowsub: true,
      cons: [],
      mzan:[],
      sortid: false,
      findfunds: "",
      state:''
    
    };
  },

  created() {
    this.axios.post("/fund/findAllFund", {}).then(res => {
      this.cons = res.data.data.data;
      this.cons = this.cons.map((item,index)=> {
        item.mzn = false;
        this.mzan[index] = item.mzn

        return item
      })
   
    });
  },
  watch: {

    findfunds(val) {
      console.log(val)
      this.axios.post("/fund/findFundByFundName", {
        fundName:val
      }).then(res => {
        console.log(res.data)
        this.cons = res.data.data;
      });
    },
    test() {
      this.test = !this.test
    }
  },
  components: {
    [Icon.name]: Icon
  },
  methods: {
    funddetails: function(index) {
      sessionStorage.setItem("fundId", this.cons[index].fundId);
      this.$router.push("/funddetails");
    },
    iszan:function(fundId,e,index) {
      
        if(!this.mzan[index]) {
      e.currentTarget.innerHTML = ` <i  class="van-icon van-icon-star" style="color:orange"></i> `
    } else {
      e.currentTarget.innerHTML = ` <i  class="van-icon van-icon-star"></i> `
    }
 
    },
    sort: function(sortid) {
      this.cons = "";
      if (sortid) {
        this.axios
          .post("/fund/earningssort", {
            number: 1
          })
          .then(res => {
            console.log(res.data.data.data);
            this.cons = res.data.data.data;
          });
      } else {
        this.axios
          .post("/fund/earningssort", {
            number: 0
          })
          .then(res => {
            this.cons = res.data.data.data;
          });
      }
    },
    sortcount: function(sortid) {
      this.cons = "";
      if (sortid) {
        this.axios
          .post("/fund/purchase", {
            number: 1
          })
          .then(res => {
            console.log(res.data.data.data);
            this.cons = res.data.data.data;
          });
      } else {
        this.axios
          .post("/fund/purchase", {
            number: 0
          })
          .then(res => {
            this.cons = res.data.data.data;
          });
      }
    }
  },
  mounted() {}
};
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

.findfund {
  display: none;
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
    color: orange;
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