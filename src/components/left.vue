<template>
  <div class="lefts">
     <!-- 今日网络舆情调性分布 -->
    <div class="left_top"> 
      <p>
        <span class="bg_img"></span>
      </p>
      <!-- 饼状图 -->
      <div class="wrap_echarts">
        <div id="left_top" style="width: 90px;height:90px;"></div>
        <div id="left_two" style="width: 90px;height:90px;"></div>
        <div id="left_three" style="width: 90px;height:90px;"></div>
      </div> 
      <!-- 柱状图 -->
      <div class="Echarts">
        <div id="left_four" style="width: 100%;height:150px;"></div>
      </div>
    </div>
    <!--  -->
    <div class="left_center">
      <p class="p2">
        <span class="span"></span>
      </p>

      <div class="one_div">
        <!-- 第一家 -->
        <div class="inner">
          <div class="inner_left">
            <p>
              <span class="imgs"></span>
              <span class="span2">1528</span>
              <span class="span3">人</span>
            </p>
          </div>
          <div class="inner_right">
            <p>
              <span class="imgs"></span>
              <span class="span2">1528</span>
              <span class="span3">家</span>
            </p>
          </div>
        </div>
        <!-- 第二家 -->
        <div class="inner inner2">
          <div class="inner_left">
            <p>
              <span class="imgs"></span>
              <span class="span2">48</span>
              <span class="span3">个</span>
            </p>
          </div>
          <div class="inner_right">
            <p>
              <span class="imgs"></span>
              <span class="span2">88</span>
              <span class="span3">%</span>
            </p>
          </div>
        </div>
      </div>
      <!-- 条形图 -->
      <!-- 下面条形图 -->
      <div class="two_div">
        <div class="div1">
          <p>1.市公安局</p>
          <div></div>
          <span>254</span>
        </div>
        <div class="div2">
          <p>2.教育局教育教</p>
          <div></div>
          <span>757</span>
        </div>
        <div class="div3">
          <p>3.网络舆情中心</p>
          <div></div>
          <span>254</span>
        </div>
        <div class="div4">
          <p>4.卫生局</p>
          <div></div>
          <span>124</span>
        </div>
      </div>
    </div>

    <div class="left_bottom">
      <!-- 今日网络舆情调性分布 -->
      <p class="p1">
        <span class="bg_img"></span>
      </p>
      <p class="p2">
        <span class="imgs"></span>
        <span class="span2">1528</span>
        <span class="span3">人</span>
      </p>
      <!-- 广安区 -->
      <div class="bottom_threeDiv">
        <div class="one">
          <span>广安区</span>
          <span>1234</span>
        </div>
        <div class="two">
          <span>广安区</span>
          <span>1234</span>
        </div>
        <div class="three">
          <span>广安区</span>
          <span>1234</span>
        </div>
      </div>
      <!-- 岩机 -->
      <div class="bottom_tiao">
      <!--滚动标签-->  <vue-seamless-scroll  
              :data="list_two_Data"
              :class-option="classOption"
              class="seamless-warp"
               >
          <ul class="item">
            <li v-for="(item,index) in list_two_Data" :key="index">
              <span></span>
              <span class="title" v-text="item.title"></span>
            </li>
          </ul>
        </vue-seamless-scroll>
        
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      list_two_Data: [
        {
          title: "广安市人大www.guangan.cn" 
        },
        {
          title: "广安市人大www.guangan.cn" 
        },
        {
          title: "广安市人大www.guangan.cn" 
        },
        {
          title: "广安市人大www.guangan.cn" 
        },
        {
          title: "广安市人大www.guangan.cn" 
        },
        {
          title: "广安市人大www.guangan.cn" 
        },
        {
          title: "广安市人大www.guangan.cn" 
        }
      ]
    };
  },
  computed: {
    classOption() {
      return {
        direction: 0,
        step:0.4
      };
    }
  },
  mounted() {
    this.myEchart();
    this.myEchart_two();
    this.myEchart_three();
    this.myEchart_four();
  },
  methods: {
    // one
    myEchart() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("left_top"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "12",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    // two
    myEchart_two() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("left_two"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "12",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    // three
    myEchart_three() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("left_three"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "12",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
    // four
    myEchart_four() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("left_four"));
      // 指定图表的配置项和数据
      var option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: "邮件营销",
            type: "bar",
            stack: "广告",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "bar",
            stack: "广告",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "bar",
            stack: "广告",
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: "搜索引擎",
            type: "bar",
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine: {
              lineStyle: {
                type: "dashed"
              },
              data: [[{ type: "min" }, { type: "max" }]]
            }
          },
          {
            name: "百度",
            type: "bar",
            barWidth: 5,
            stack: "搜索引擎",
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: "谷歌",
            type: "bar",
            stack: "搜索引擎",
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: "必应",
            type: "bar",
            stack: "搜索引擎",
            data: [60, 72, 71, 74, 190, 130, 110]
          },
          {
            name: "其他",
            type: "bar",
            stack: "搜索引擎",
            data: [62, 82, 91, 84, 109, 110, 120]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
};
</script>

<style lang="less" scoped>
.lefts {
  display: flex;
  flex-direction: column;
  .left_top {
    width: 370px;
    height: 195px;
    background-color: rgba(17, 31, 55, 0.7);
    padding: 5px;
    p {
      width: 70%;
      .bg_img {
        display: block;
        width: 100%;
        height: 1.25rem;
        background: url("../assets/img/QP_1.png") no-repeat;
        background-position: 0 -7.5rem;
      }
    }
    .wrap_echarts {
      display: flex;
      justify-content: center;
      width: 90%;
      div {
        width: 100px !important;
        height: 100px !important;
      }
      .left_top {
        width: 60px !important;
        height: 60px !important;
      }
    }
    .Echarts {
      height: 80px;
      margin-top: -60px;
      margin-left: -35px;
    }
  }
  .left_center {
    padding: 5px 5px;
    width: 370px;
    height: 195px;
    background-color: rgba(17, 31, 55, 0.7);
    margin: 5px 0;
    .p2 {
      width: 100%;
      .span {
        display: block;
        width: 75%;
        height: 25px;
        background: url("../assets/img/QP_1.png") no-repeat;
        background-position: 0 -142px;
      }
    }
    // 中间
    .one_div {
      margin-top: 5px;
      .inner {
        display: flex;
        .inner_left {
          width: 50%;
          height: 25px; 
          p {
            display: flex;
            .imgs {
              display: block;
              width: 120px;
              height: 25px;
              background: url(../assets/img/QP_1.png) no-repeat;
              background-position: 0 -515px;
            }
            .span2 {
              margin-right: 10px;
              color: #4da8e0;
            }
            .span3 {
              color: #1a4c53;
            }
          }
        }
        .inner_right {
          width: 50%;
          height: 25px;
          // background-color: green;
          p {
            display: flex;
            .imgs {
              display: block;
              // background-color: yellow;
              width: 120px;
              height: 25px;
              background: url(../assets/img/QP_1.png) no-repeat;
              background-position: 0 -550px;
              // vertical-align: baseline;
            }
            .span2 {
              margin-right: 10px;
              color: #4da8e0;
            }
            .span3 {
              color: #1a4c53;
            }
          }
        }
      }
      .inner2 {
        margin-top: 5px;
        display: flex;
        .inner_left {
          width: 50%;
          height: 25px;
          // background-color: green;
          p {
            display: flex;
            .imgs {
              display: block;
              // background-color: yellow;
              width: 120px;
              height: 25px;
              background: url(../assets/img/QP_1.png) no-repeat;
              background-position: 0 -588px;
            }
            .span2 {
              margin-right: 10px;
            }
          }
        }
        .inner_right {
          width: 50%;
          height: 25px;
          // background-color: green;
          p {
            display: flex;
            .imgs {
              display: block;
              // background-color: yellow;
              width: 120px;
              height: 25px;
              background: url(../assets/img/QP_1.png) no-repeat;
              background-position: 0 -623px;
            }
            .span2 {
              margin-right: 10px;
            }
          }
        }
      }
    }
    .two_div {
      .div1 {
        display: flex;
        color: white;
        margin-top: 5px;
        p {
          width: 130px;
        }
        div {
          width: 100px;
          height: 4px;
          background-color: #d38165;
          margin-top: 10px;
        }
        span {
          margin-left: 15px;
        }
      }
      .div2 {
        display: flex;
        color: white;
        margin-top: 5px;
        p {
          width: 130px;
        }
        div {
          width: 150px;
          height: 4px;
          background-color: #d38165;
          margin-top: 10px;
        }
        span {
          margin-left: 15px;
        }
      }
      .div3 {
        display: flex;
        color: white;
        margin-top: 5px;
        p {
          width: 130px;
        }
        div {
          width: 100px;
          height: 4px;
          background-color: #d38165;
          margin-top: 10px;
        }
        span {
          margin-left: 15px;
        }
      }
      .div4 {
        display: flex;
        color: white;
        margin-top: 5px;
        p {
          width: 130px;
        }
        div {
          width: 50px;
          height: 4px;
          background-color: #d38165;
          margin-top: 10px;
        }
        span {
          margin-left: 15px;
        }
      }
    }
  }
  .left_bottom {
    width: 395px;
    height: 210px;
    background-color: rgba(17, 31, 55, 0.8);
    padding: 5px;
    .p1 {
      width: 70%;
      .bg_img {
        display: block;
        width: 100%;
        height: 1.25rem;
        background: url("../assets/img/QP_1.png") no-repeat;
        background-position: 0 -167px;
        padding: 5px;
      }
    }
    .p2 {
      display: flex;
      .imgs {
        display: block;
        width: 120px;
        height: 25px;
        background: url(../assets/img/QP_1.png) no-repeat;
        background-position: 0 -515px;
      }
      .span2 {
        color: #ccc;
      }
      .span3 {
        color: #1d595b;
        margin-left: 5px;
      }
    }
    // 3div
    .bottom_threeDiv {
      width: 94%;
      height: 71px;
      display: flex;
      justify-content: space-around;
      margin-top: 5px; 
      div {
        width: 110px;
        height: 71px;
        background-color: #2a364c;
        border-radius: 8px;
        color: white;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }
    // 三条
    .bottom_tiao {
      width: 94%;
      // background-color: green;
      color: white;
      .item {
        li { 
          display: flex; 
          // justify-content: space-around;
          margin: 5px 0;
          font-size: 14px;
          span {
            &:first-child {
              display: block;
              width: 70px;
              height: 20px;
              background: url(../assets/img/QP_1.png) no-repeat;
              background-position: -105px -90px;
              margin-right: 5px;
            }
            &:nth-child(2) {
              width: 280px;
              background-color: #006262;
              border-radius: 5px;
              // padding-left: 5px;
            }
          }
        }
      } 
    }
  }
}

.seamless-warp {
  height: 80px;
  overflow: hidden;
}
</style>