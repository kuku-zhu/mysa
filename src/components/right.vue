<template>
  <div class="right">
    <!-- 右边第一个 -->
    <div class="right_top">
      <p class="p1">
        <span></span>
      </p>
      <!-- 监控信源 -->
      <div class="top_innertwo">
        <div class="right1">
          <p class="p2">
            <span class="img_one"></span>
            <span class="num">1584</span>&nbsp;
            <span class="pen">人</span>
          </p>
        </div>
        <!-- 监测方案 -->
        <div class="right2">
          <p class="p3">
            <span class="img_two"></span>
            <span class="num">45</span>&nbsp;
            <span class="pen">家</span>
          </p>
        </div>
      </div>

      <!-- 敏感信息标题和链接 -->
      <div class="inp">
        <vue-seamless-scroll
          :data="list_one_Data"
          :class-option="classOption"
     
          class="seamless-warp"
        >
          <ul class="item">
            <li v-for="(item,index) in list_one_Data" :key="index">
              <span class="title" v-html="item.title"></span>
            </li> 
          </ul>
        </vue-seamless-scroll>
      </div>
    </div>

    <!-- 右边第二个 -->
    <div class="right_center">
      <p class="right_center_p1">
        <span></span>
      </p>
      <p class="p3">
        <span></span>
        <span>1584</span>
        <span>人</span>
        <span>受理</span>
        <span class="sps">45</span>
        <span>办结</span>
        <span class="sps">34</span>
        <span>退回</span>
        <span class="sps">22</span>
      </p>

      <!-- center_bottom 蜘蛛网地图 -->
      <div class="p4">
        <div class="left">
          <div id="left_div">
            <div id="leida" style="width: 182px;height:150px;"></div>
          </div>
        </div>
         
         <!-- 右边第二个 文字滚动 -->
        <div class="right">
          <div class="inp">
            <vue-seamless-scroll
              :data="list_two_Data"
              :class-option="classOption"
              class="seamless-warp"
            >
              <ul class="item">
                <li v-for="(item,index) in list_two_Data" :key="index">
                  <span class="title" v-html="item.title"></span>
                  <span class="title" v-html="item.name"></span>
                </li>
              </ul>
            </vue-seamless-scroll>
          </div> 
        </div>

      </div>
    </div>

    <!-- 右边最后一个 -->
    <div class="right_bottom">
      <!-- 精灵图 -->
      <div class="right_bottom_one">
        <p class="p1">
          <span class="span"></span>
        </p>
        <!-- 涉属地论团 -->
        <div class="top_innertwo">
          <div class="right1">
            <p class="p2">
              <span class="img_one"></span>
              <span class="num">1584</span>&nbsp;
              <span class="pen">人</span>
            </p>
          </div>
          <!-- 监测方案 -->
          <div class="right2">
            <p class="p3">
              <span class="img_two"></span>
              <span class="num">45</span>&nbsp;
              <span class="pen">家</span>
            </p>
          </div>
        </div>
        <!-- 下面的内容 -->
        <div class="right3">
          <div class="inner1">
            <p>今日涉属地论坛贴文</p>
            <p>4356</p>
          </div>
          <div class="inner2">
            <p>今日涉属地论坛总数</p>
            <p>123645</p>
          </div>
        </div>
        <!-- 滚动条 -->
        <div class="bottom_tiao">
           <div class="inp">
            <vue-seamless-scroll
              :data="list_two_Data"
              :class-option="classOption"
              class="seamless-warp"
            >
              <ul class="item">
                <li v-for="(item,index) in list_three_Data" :key="index">
                  <span>精灵图</span>
                  <span class="title" v-html="item.title"></span> 
                </li>
              </ul>
            </vue-seamless-scroll>
          </div>  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 右侧第一个下滑动画
      list_one_Data: [
        {
          title:
            "<span style='border-radius: 5px;display:block;background-color:red;'>这是涉及广安的境外敏感信息的标题和链接</span>"
        },
        {
          title:
            "<span style='border-radius: 5px;display:block;background-color:red;'>这是涉及广安的境外敏感信息的标题和链接</span>"
        },
        {
          title: "这是涉及广安的境外敏感信息的标题和链接"
        },
        {
          title: "这是涉及广安的境外敏感信息的标题和链接"
        },
        {
          title: "这是涉及广安的境外敏感信息的标题和链接"
        },
        {
          title: "这是涉及广安的境外敏感信息的标题和链接"
        },
        {
          title: "这是涉及广安的境外敏感信息的标题和链接"
        }
      ],
      list_two_Data: [
        {
          title: "这是涉及广安",
          name:"受理"
        },
        {
          title: "这是涉及广安",
          name:"受理"
        },
        {
          title: "这是涉及广安",
          name:"受理"
        },
        {
          title: "这是涉及广安",
          name:"受理"
        },
        {
          title: "这是涉及广安",
          name:"受理"
        },
        {
          title: "这是涉及广安",
          name:"受理"
        },
        {
          title: "这是涉及广安",
          name:"受理"
        }
      ],
      list_three_Data: [
        {
          title: "这是涉及广安" 
        },
        {
          title: "这是涉及广安" 
        },
        {
          title: "这是涉及广安" 
        },
        {
          title: "这是涉及广安" 
        },
        {
          title: "这是涉及广安" 
        },
        {
          title: "这是涉及广安" 
        },
        {
          title: "这是涉及广安" 
        }
      ],
    };
  },
  computed: {
    classOption() {
      return {
        direction: 0,
        waitTime:1000,
        step:0.4
      };
    }
  },
  mounted() {
    // 雷达图
    this.myleida();
  },
  methods: {
    myleida() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("leida"));
      // 指定图表的配置项和数据
      var option = {
        radar: {
          indicator: [
            { max: 6500 },
            { max: 16000 },
            { max: 30000 },
            { max: 38000 },
            { max: 52000 },
            { max: 25000 }
          ]
        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4000, 10000, 28000, 35000, 50000, 19000],
                name: "预算分配（Allocated Budget）"
              },
              {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: "实际开销（Actual Spending）"
              }
            ]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
};
</script>

<style scoped lang="less">
.right {
  display: flex;
  color: white;
  flex-direction: column; 
  .right_top {
    width: calc(100% - 20px);
    height: 180px;
    background-color: rgba(17, 31, 55, 0.8);
    margin-bottom: 10px; 
    padding: 10px;
    .p1 {
      span {
        display: block;
        width: 180px;
        height: 25px;
        background: url(../assets/img/QP_1.png) no-repeat;
        background-position: 0 -295px;
      }
    }
    .top_innertwo {
      display: flex;
      margin-top: 22px;
      .right1 {
        width: 50%;
        .p2 {
          display: flex;
          .img_one {
            display: block;
            width: 115px;
            height: 25px;
            background: url(../assets/img/QP_1.png) no-repeat;
            background-position: 0 -838px;
          }
          .pen {
            color: #18444e;
          }
          .num {
            color: #59c1ff;
          }
        }
      }
      .right2 {
        width: 45%;
        margin-left: 17px;
        .p3 {
          display: flex;
          .img_two {
            display: block;
            width: 115px;
            height: 25px;
            background: url(../assets/img/QP_1.png) no-repeat;
            background-position: 0 -875px;
          }
          .pen {
            color: #18444e;
          }
          .num {
            color: #59c1ff;
          }
        }
      }
    }
    // 右边第一个滚动
    .inp {
      .seamless-warp {
        height: 100px;
        overflow: hidden;
        font-size: 14px;
        .item {
          li {
            line-height: 25px;
            width: 80%;
            text-align: center;
            border: 1px solid gray;
            margin: 5px 0;
            border-radius: 5px;
          }
        }
      }
    }
  }

  // 右边第二个大div
  .right_center {
    width: calc(100% - 10px);
    height: 200px;
    background-color: rgba(17, 31, 55, 0.8);
    margin-top: -5px;
    padding: 5px;
    .right_center_p1 {
      margin-bottom: 10px;
      span {
        display: block;
        width: 100%;
        height: 25px;
        background: url(../assets/img/QP_1.png) no-repeat;
        background-position: 0 -270px;
      }
    }
    .p2 {
      .span {
        display: block;
        width: 180px;
        height: 25px;
        background: url(../assets/img/QP_1.png) no-repeat;
        background-position: 0 -295px;
      }
    }
    .p3 {
      margin-top: -5px;
      span:first-child {
        display: inline-block;
        width: 110px;
        height: 24px;
        background: url(../assets/img/QP_1.png) no-repeat;
        background-position: 0 -798px;
        // margin-top: 5px;
        vertical-align: baseline;
      }
      span {
        font-size: 12px;
        &:nth-child(2) {
          color: #59c1ff;
        }
        &:nth-child(3) {
          color: #1d595b;
          margin-right: 19px;
        }
      }
      .sps {
        color: #59c1ff;
        margin-right: 10px;
      }
    }
    .p4 {
      display: flex;
      overflow: hidden;
      margin-top: 5px;
      .left {
        width: 50%;
        height: 140px;
        // background-color: green;
        .left_div {
          margin-left: 100px;
          //  width: 182px;
        }
      }
      .right {
        .seamless-warp {
          height: 130px;
          overflow: hidden;
          font-size: 14px;
          .item {
            li {
              line-height: 25px;
              width: 100%;
              text-align: center; 
              margin: 5px 0;
              border-radius: 5px;
              display: flex; 
              justify-content: space-between;
              span{
                &:first-child{
                  margin-right: 10px;
                  background-color: #414c60;
                  color: #4ae5ea;
                  font-size: 14px;
                  padding: 0 10px;
                  border-radius: 5px;
                }
                &:nth-child(2){
                  background-color: #414c60;
                  color: #4ae5ea;
                  font-size: 14px;
                  padding: 0 10px;
                  border-radius: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
  //右边最后一个
  .right_bottom { 
    height: 210px;
    background-color: rgba(17, 31, 55, 0.8); 
    margin-top: 5px;
    padding: 5px;
    .right_bottom_one {
      .p1 {
        span {
          display: block;
          width: 100%;
          height: 20px;
          background: url(../assets/img/QP_1.png) no-repeat;
          background-position: 0 -246px;
        }
      }
      .top_innertwo {
        display: flex;
        margin-top: 10px;
        .right1 {
          width: 50%;
          .p2 {
            display: flex;
            .img_one {
              display: block;
              width: 115px;
              height: 25px;
              background: url(../assets/img/QP_1.png) no-repeat;
              background-position: 0 -838px;
            }
            .pen {
              color: #18444e;
            }
            .num {
              color: #59c1ff;
            }
          }
        }
        .right2 {
          width: 45%;
          margin-left: 17px;
          .p3 {
            display: flex;
            .img_two {
              display: block;
              width: 115px;
              height: 25px;
              background: url(../assets/img/QP_1.png) no-repeat;
              background-position: 0 -875px;
            }
            .pen {
              color: #18444e;
            }
            .num {
              color: #59c1ff;
            }
          }
        }
      }
      .right3 {
        display: flex;
        justify-content: space-evenly;
        div {
          width: 50%;
          height: 60px;
          background-color: rgb(44, 57, 77, 0.2);
          margin-top: 5px;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          border-radius: 7px;

          &:first-child {
            margin-right: 5px;
            p {
              font-size: 16px;
              &:nth-child(2) {
                color: #59c0ff;
                margin-top: 5px;
              }
            }
          }
          &:nth-child(2) {
            p {
              font-size: 16px;
              &:nth-child(2) {
                color: #59c0ff;
                margin-top: 5px;
              }
            }
          }
        }
      }
      // 三条
      .bottom_tiao {
        width: 350px; 
         .seamless-warp {
          height: 90px;
          overflow: hidden;
          font-size: 14px;
          .item {
            li {
              line-height: 25px;
              width: 100%;
              text-align: center; 
              margin: 5px 0;
              border-radius: 5px;
              display: flex; 
              justify-content: space-between;
              span{
                &:first-child{
                  // margin-right: 10px; 
                  color: #4ae5ea;
                  font-size: 14px;
                  padding: 0 10px;
                  border-radius: 5px;
                   display: block;
                  width: 50px;
                  height: 20px;
                  background: url(../assets/img/QP_1.png) no-repeat;
                  background-position: -105px -90px;
                }
                &:nth-child(2){
                  width: 75%;
                   background-color: #006262;
                  color: #4ae5ea;
                  font-size: 14px;
                  padding: 0 10px;
                  border-radius: 5px;
                }
              }
            }
          }
        }
        
      }
    }
  }
}
</style>