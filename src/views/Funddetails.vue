<template>
  <div class="funddetails">
    <div v-for="(item,index) in cons" :key="index" :info="item">
      <van-nav-bar title="基金详情" left-text="返回" left-arrow @click-left="re">
        <van-icon
          name="star"
          slot="right"
          class="starall"
          :class="{star:issure==true}"
          @click="issure=!issure"
        />
      </van-nav-bar>
      <van-cell-group>
        <van-cell class="title">
          {{item.fundName}}
          <van-icon class="icons" name="gem-o" />
          <p class="label">(381238)混合型</p>
          <p class="label-table">
            <span>主板</span>
            <span>近3月收益冠军</span>
            <span>近三月收益翻倍</span>
          </p>

          <van-row type="flex" class="top-data">
            <van-col span="12">
              <p>日涨幅</p>
              <span class="percentage">{{item.fundEarnings}}0%</span>
            </van-col>
            <van-col span="12">
              <p>净值(12月)</p>
              <span>{{(3.482 - item.fundEarnings).toFixed(2)}}</span>
            </van-col>
          </van-row>
        </van-cell>
        <div class="car">
          <van-cell>购买费率</van-cell>
          <van-cell class="buycar">
            <div class="buycar-top">
              <span>申购</span>
              <span class="label-title">活期</span>
              <span class="discount">1折</span>
              <span class="label">0.15%</span>
              <span class="label-title">银行卡</span>
              <span class="discount">4折</span>
              <span class="label">0.60%</span>
            </div>
            <div class="buycar-bottom">
              <span class="buy-car-first">定投</span>
              <span class="label-title">活期</span>
              <span class="label">1.50%</span>
              <span class="label-title">银行卡</span>
              <span class="label">0.15%</span>
            </div>
          </van-cell>

          <van-steps active-icon="success" active-color="#969799;">
            <van-step>买入提交</van-step>
            <van-step>确认份额</van-step>
            <van-step>查看盈亏</van-step>
          </van-steps>

          <div class="times">
            <p class="todays">{{todays}}</p>
            <p class="todays">{{twoday}}</p>
            <p class="todays">{{twoday}}</p>
          </div>
        </div>
        <van-cell>收益数据</van-cell>
        <van-cell>
          <chart></chart>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
import { Icon, NavBar, Search, Cell, CellGroup, Row, Col } from "vant";
import chart from "./chart.vue";
export default {
  name: "funddetails",
  data: function() {
    return {
      issure: "",
      todays: "",
      twoday: "",
      cons: [],
      fundid: ""
    };
  },
  created() {
    var s = new Date().toLocaleDateString().split("/");
    this.todays = s[0] + "-" + s[1] + "-" + s[2];
    this.twoday = s[0] + "-" + s[1] + "-" + (Number(s[2]) + 1);

    this.fundid = sessionStorage.getItem("fundId");
        console.log(this.fundid);

    this.axios.post("/fund/findById", {
        fundId: this.fundid
      })
      .then(res => {
        console.log(res.data.data);
        this.cons = res.data.data;
      });
  },
  components: {
    [Icon.name]: Icon,
    [NavBar.name]: NavBar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Search.name]: Search,
    [Row.name]: Row,
    [Col.name]: Col,
    chart
  },
  methods: {
    starbtn: function() {},
    re: function() {
      sessionStorage.removeItem('fundId')
      this.$router.push("/fund");
    }
  }
};
</script>
<style lang="less" scoped>
.starall {
  margin-left: 20px;
  width: 40px;
  color: #ddd;
}
.label-table span {
  border: 1px solid #a5a5f8;
  display: inline-block;
  font-size: 10px;
  border-radius: 4px;
  margin: 0 6px;
  padding: 0 4px;
  height: 16px;
  line-height: 16px;
  color: #a5a5f8;
}
.funddetails {
  margin-bottom: 60px;
}
.percentage {
  color: red
}
.top-data {
  margin-top: 10px;
  p {
    color: #ddd;
    font-size: 12px;
  }
}
.star {
  color: #333;
}
.title {
  font-size: 16px;
  border-bottom: 6px solid #f5f5f5;
}
.car {
  border-bottom: 6px solid #f5f5f5;
}
.times {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin-bottom: 10px;
}
.todays,
.label {
  color: #ddd;
  font-size: 12px;
}
.discount {
  display: inline-block;
  background: rgb(252, 217, 217);
  color: rgb(240, 30, 30);
  width: 40px;
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  text-align: center;
  margin-top: 4px;
}
.label-title {
  color: #333;
  font-size: 12px;
}
.buy-car-first {
  margin-left: -12px;
}
.icons {
  margin-left: 10px;
  color: gold;
}
.buycar-top,
.buycar-bottom {
  display: flex;
  justify-content: space-around;
}
</style>