<template>
  <div id="radar" class="container"></div>
</template>
<script>
import echarts from "echarts/lib/echarts";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";

export default {
  name: "test",
  data: function() {
    return {
      fundid: "",
      cons: []
    };
  },
  created() {
    this.fundid = sessionStorage.getItem("fundId");

    this.axios
      .post("/fund/findById", {
        fundId: this.fundid
      })
      .then(res => {
  
        this.cons = res.data.data;
       var s1 = this.cons[0].fundEarnings;
   

        var option = {
          //创建图表配置数据

          title: {
            text: ""
          },
          tooltip: {
            trigger: "axis"
          },
          legend: {
            data: ["收益走势"]
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              name: "收益走势",
              type: "line",
              stack: "总量",
              data: [s1, s1+0.23, s1+0.2, s1+0.1, s1+0.12, s1+0.34, s1+0.24]
            }
          ]
        };
        //初始化图表
        const chartObj = echarts.init(document.getElementById("radar"));
        chartObj.setOption(option);
      });
  },
  mounted() {
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 320px;
  height: 240px;
}
</style>