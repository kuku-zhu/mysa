<template>
  <div class="wrap_center">
    <div class="top">
      <!-- 顶部 div -->
      <div class="top_inner">
        <div class="top_left">
          <!-- 今日采集数据 涉本地数据-->
          <div class="left">
            <p></p>
            <p>
              <span>1235874</span>
              <span>条</span>
            </p>
          </div>
          <!-- 涉本地敏感数据  推送预警 -->
          <div class="right">
            <div class="right_inner">
              <p></p>
              <p>
                <span>2354</span>
                <span>条</span>
              </p>
            </div>
          </div>
        </div>

        <!-- 顶部右侧 -->
        <div class="top_right">
          <div class="left">
            <p></p>
            <p>
              <span>2354</span>
              <span>条</span>
            </p>
          </div>

          <div class="right">
            <p></p>
            <p>
              <span>35</span>
              <span>次</span>
            </p>
          </div>
        </div>
      </div>

      <!-- 地图 -->
      <vcharts :options="options" style="width:100%" />

       <!-- 滚动文字区域 -->
      <div class="advert-top" v-if="message"> 
        <div class="marquee-wrap">
          <ul class="marquee-box" id="marquee-box">
            <li
              class="marquee-list"
              v-for="i in 3"
              v-html="message"
              :id="i==1?'marquee':''"
              :key="i"
            ></li>
          </ul>
        </div>
      </div> 
    </div>

   <!-- 属地微博账号监管平台 --> 
    <div class="bottom">
      <div class="left"> 
        <p class="p1">
          <span class="bg_img"></span>
        </p>
        <!-- 个人认证  机构认证  属地微博 -->
        <div class="weibo">
          <div class="left_weibo">
            <p class="p1">
              <span class="imgs"></span>
              <span class="span2">1528</span>
              <span class="span3">人</span>
            </p>
          </div>
          <div class="right_renzheng">
            <p class="p1">
              <span class="span1"></span>
              <span class="span11">18345</span>
            </p>
            <p class="p2">
              <span class="span2"></span>
              <span class="span22">3485</span>
            </p>
          </div>
        </div>
        <!-- 今日广安 -->
        <div class="todayGa">
          <div class="ga_left">
            <img src="../assets/img/weiboLogo.png" />
          </div>
          <div class="ga_right">
            <p>
              <span>今日广安</span>
              <span>2018-11-27&nbsp;15:32:14</span>
            </p>
            <div>
              <p>广安888888一起重大888一起88一起888一起重大安大安大安全生圣安是发生安全生圣安是发生一起重大安全</p>
            </div>
          </div>
        </div>
        <!-- 今日广安2 -->
        <div class="todayGa today02">
          <div class="ga_left">
            <img src="../assets/img/weiboLogo.png" />
          </div>
          <div class="ga_right">
            <p>
              <span>今日广安</span>
              <span>2018-11-27&nbsp;15:32:14</span>
            </p>
            <div>
              <p>广安888888安全第一</p>
            </div>
          </div>
        </div>
      </div>
       <!-- 今日微信公众号(精灵图) -->
      <div class="right"> 
        <p class="p1">
          <span class="bg_img"></span>
        </p>
        <!--   属地微博  -->
        <div class="weibo">
          <div class="left_weibo">
            <p class="p1">
              <span class="imgs"></span>
              <span class="span2">1584</span>
              <span class="span3">个</span>
            </p>
          </div>
        </div>
        <!-- 今日广安 -->
        <div class="todayGa">
          <div class="ga_left">
            <img src="../assets/img/weixinlogo.png" />
          </div>
          <div class="ga_right">
            <p>
              <span>今日广安</span>
              <span>2018-11-27&nbsp;15:32:14</span>
            </p>
            <div>
              <p>广安888888一起重大888一 安大安大安全生圣安是发生安全生圣安是发生一起重大安全</p>
            </div>
          </div>
        </div>
        <!-- 今日广安2 -->
        <div class="todayGa today02">
          <div class="ga_left">
            <img src="../assets/img/weixinlogo.png" />
          </div>
          <div class="ga_right">
            <p>
              <span>今日广安</span>
              <span>2018-11-27&nbsp;15:32:14</span>
            </p>
            <div>
              <p>广安888888安全第一</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// 导入香港地图
import hkmap from "../utils/HK.json";
import echarts from "echarts";
// 注册
echarts.registerMap("HK", hkmap);
import vcharts from "vue-echarts";

export default {
  components: {
    vcharts
  },
  data() {
    return {
      message:
        "<span style='color:pink;'>vue 滚动公告栏 </span><span style='color:red;'>自定义文字</span> 滚动公告栏  <span>自定义文字</span>滚动公告栏 <span>自定义文字</span> 滚动公告栏 <span style='color:green;'>自定义文字</span>",
      options: {
        title: {
          // text: "香港18区人口密度 （2011）",
          // subtext: "人口密度数据来自Wikipedia",
          sublink:
            "http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12"
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}<br/>{c} (p / km2)"
        }, 
        visualMap: {
          min: 800,
          max: 50000,
          text: ["High", "Low"],
          realtime: false,
          calculable: true,
          inRange: {
            color: ["lightskyblue", "yellow", "orangered"]
          }
        },
        series: [
          {
            name: "香港18区人口密度",
            type: "map",
            mapType: "HK", // 自定义扩展图表类型
            label: {
              show: true
            },
            data: [
              { name: "中西区", value: 20057.34 },
              { name: "湾仔", value: 15477.48 },
              { name: "东区", value: 31686.1 },
              { name: "南区", value: 6992.6 },
              { name: "油尖旺", value: 44045.49 },
              { name: "深水埗", value: 40689.64 },
              { name: "九龙城", value: 37659.78 },
              { name: "黄大仙", value: 45180.97 },
              { name: "观塘", value: 55204.26 },
              { name: "葵青", value: 21900.9 },
              { name: "荃湾", value: 4918.26 },
              { name: "屯门", value: 5881.84 },
              { name: "元朗", value: 4178.01 },
              { name: "北区", value: 2227.92 },
              { name: "大埔", value: 2180.98 },
              { name: "沙田", value: 9172.94 },
              { name: "西贡", value: 3368 },
              { name: "离岛", value: 806.98 }
            ],
            // 自定义名称映射
            nameMap: {
              "Central and Western": "中西区",
              Eastern: "东区",
              Islands: "离岛",
              "Kowloon City": "九龙城",
              "Kwai Tsing": "葵青",
              "Kwun Tong": "观塘",
              North: "北区",
              "Sai Kung": "西贡",
              "Sha Tin": "沙田",
              "Sham Shui Po": "深水埗",
              Southern: "南区",
              "Tai Po": "大埔",
              "Tsuen Wan": "荃湾",
              "Tuen Mun": "屯门",
              "Wan Chai": "湾仔",
              "Wong Tai Sin": "黄大仙",
              "Yau Tsim Mong": "油尖旺",
              "Yuen Long": "元朗"
            }
          }
        ]
      }
    };
  },
  mounted: function() {
    // 延时滚动
    setTimeout(() => {
      this.runMarquee();
    }, 1000);
  },
  methods: {
    runMarquee() {
      // 获取文字 计算后宽度
      var width = document.getElementById("marquee").getBoundingClientRect()
          .width,
        marquee = document.getElementById("marquee-box"),
        disx = 0; // 位移距离
      //设置位移
      setInterval(() => {
        disx--; // disx-=1; 滚动步长
        if (-disx >= width) {
          disx = 10; // 如果位移超过文字宽度，则回到起点  marquee-list的margin值
        }
        // marquee.style.transform = 'translateX(' + disx + 'px)'
        marquee.style.left = disx + "px";
      }, 30); //滚动速度
    }
  }
};
</script>

<style scoped lang="less">
.wrap_center {
  width: 100%;
  height: 100%;
  .top {
    position: relative;
    width: 100%;
    height: 415px;
    .top_inner {
      position: absolute;
      width: 100%;
      z-index: 999;
      display: flex;
      .top_left {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        .left {
          p {
            &:first-child {
              width: 150px;
              height: 20px;
              background-color: green;
              background: url(../assets/img/QP_1.png) no-repeat;
              background-position: 0 -323px;
            }
            &:nth-child(2) {
              line-height: 40px;
              background: url(../assets/img/boxBg2.png) no-repeat;
              background-size: 100% 100%;
              margin-top: 10px;
              color: white;
              text-align: center;
              span:first-child {
                color: #51ffff;
              }
              span:nth-child(2) {
                color: #2d9699;
              }
            }
          }
        }
        .right {
          p {
            &:first-child {
              width: 150px;
              height: 20px;
              background: url(../assets/img/QP_1.png) no-repeat;
              background-position: 0 -347px;
            }
            &:nth-child(2) {
              width: 80px;
              line-height: 40px;
              background: url(../assets/img/boxBg2.png) no-repeat;
              background-size: 100% 100%;
              margin-top: 10px;
              text-align: center;
              span:first-child {
                color: #51ffff;
              }
              span:nth-child(2) {
                color: #2d9699;
              }
            }
          }
        }
      }
      // 涉本地敏感数据  推送预警
      .top_right {
        width: 50%;
        height: 100%;
        display: flex;
        .left {
          width: 50%;
          height: 50%;
          p {
            &:first-child {
              width: 150px;
              height: 20px;
              background: url(../assets/img/QP_1.png) no-repeat;
              background-position: 0 -371px;
              margin-left: 80px;
            }
            &:nth-child(2) {
              width: 80px;
              line-height: 40px;
              background: url(../assets/img/boxBg2.png) no-repeat;
              background-size: 100% 100%;
              margin-top: 10px;
              text-align: center;
              margin-left: 80px;
              span:first-child {
                color: #51ffff;
              }
              span:nth-child(2) {
                color: #2d9699;
              }
            }
          }
        }
        .right {
          width: 50%;
          height: 50%;
          p {
            margin-left: 80px;
            &:first-child {
              width: 150px;
              height: 20px;
              background: url(../assets/img/QP_1.png) no-repeat;
              background-position: 0 -400px;
            }
            &:nth-child(2) {
              width: 80px;
              height: 40px;
              margin-top: 10px;
              line-height: 40px;
              background-position: 0 -400px;
              background: url(../assets/img/boxBg2.png) no-repeat;
              background-size: 100% 100%;
              text-align: center;
              span:first-child {
                color: #51ffff;
                margin-right: 5px;
              }
              span:nth-child(2) {
                color: #2d9699;
              }
            }
          }
        }
      }
    }
  }

  // 下方
  .bottom {
    width: 100%;
    background-color: #172b4e;
    height: 220px;
    margin-top: 5px;
    display: flex;
    justify-content: space-evenly;
    .left {
      width: 47%;
      height: 210px;
      background-color: rgba(17, 31, 55, 0.8); 
      padding: 5px;
      .p1 {
        .bg_img {
          display: block;
          width: 100%;
          height: 25px;
          background: url(../assets/img/QP_1.png) no-repeat;
          background-position: 0 -196px;
        }
      }
      .weibo {
        width: 100%;
        height: 50px;
        margin: 5px 0;
        display: flex;
        .left_weibo {
          width: 50%;
          height: 50px; 
          line-height: 50px;
          .p1 {
            display: flex;
            .imgs {
              display: block;
              width: 115px;
              height: 1.25rem;
              background: url("../assets/img/QP_1.png") no-repeat;
              background-position: 0 -695px;
              margin-top: 13px;
            }
            .span2 {
              color: #53b5f0;
              margin-right: 5px;
              font-size: 14px;
            }
            .span3 {
              color: #163d4a;
            }
          }
        }
        .right_renzheng {
          width: 50%;
          height: 50px;
          background-color: rgba(17, 31, 55, 0.8);
          .p1 {
            display: flex;
            padding-left: 10px;
            .span1 {
              display: inline-block;
              width: 80px;
              height: 25px;
              background: url(../assets/img/QP_1.png) no-repeat;
              background-position: 0 -446px;
            }
            .span11 {
              color: white;
              font-size: 14px;
            }
          }

          .p2 {
            display: flex;
            padding-left: 10px;
            .span2 {
              display: inline-block;
              width: 80px;
              height: 25px;
              background: url(../assets/img/QP_1.png) no-repeat;
              background-position: 0 -476px;
            }
            .span22 {
              color: white;
              font-size: 14px;
            }
          }
        }
      }
      .todayGa {
        background-color: #28354b;
        display: flex;
        width: 100%;
        height: 60px;
        border-radius: 8px;
        .ga_left {
          width: 20%;
          height: 100%;
          img {
            border-radius: 50%;
            margin-left: 5px;
            margin: 5px;
          }
        }
        .ga_right {
          p {
            display: flex;
            justify-content: space-between;
            // padding: 0 10px;
            width: 300px;
            color: #9fa1a6;
            margin-bottom: 5px;
            // line-height: 16px;
            span {
              &:first-child {
                font-size: 12px;
                font-weight: 800;
                color: #9fa1a6;
              }
              &:nth-child(2) {
                font-size: 12px;
                font-weight: 800;
                // margin-right: 20px;
                color: #9fa1a6;
                padding-right: 20px;
              }
            }
          }
          div {
            p {
              width: 290px;
              line-height: 12px;
              font-size: 12px;
            }
          }
        }
      }
      .today02 {
        margin-top: 5px;
      }
    }
    .right {
      width: 48%;
      height: 210px;
      background-color: rgba(17, 31, 55, 0.8); 
      padding: 5px;
      .p1 {
        .bg_img {
          display: block;
          width: 100%;
          height: 25px;
          background: url(../assets/img/QP_1.png) no-repeat;
          background-position: 0 -222px;
        }
      }
      .weibo {
        width: 100%;
        height: 50px; 
        margin-top: 5px;
        display: flex;
        .left_weibo {
          width: 235px;
          height: 50px; 
          line-height: 50px;
          .p1 {
            display: flex;
            .imgs {
              display: block;
              width: 700px;
              height: 1.25rem;
              background: url("../assets/img/QP_1.png") no-repeat;
              background-position: 0 -732px;
              margin-top: 13px;
            }
            .span2 {
              color: #53b5f0;
              margin-right: 5px;
              font-size: 14px;
            }
            .span3 {
              color: #163d4a;
            }
          }
        }
      }
      .todayGa {
        background-color: #28354b;
        display: flex;
        width: 100%;
        height: 60px;
        border-radius: 8px;
        .ga_left {
          width: 20%;
          height: 100%;
          // background-color: pink;
          text-align: center;
          img {
            margin-left: 5px;
            width: 90%;
            height: 90%;
            // padding-left: 5px;
            margin-top: 2px;
            // padding-left: 5px;
          }
        }
        .ga_right {
          p {
            display: flex;
            justify-content: space-between;
            padding: 0 10px;
            width: 300px;
            color: #9fa1a6;
            margin-bottom: 5px;
            span {
              &:first-child {
                font-size: 12px;
                font-weight: 800;
                color: #9fa1a6;
              }
              &:nth-child(2) {
                font-size: 12px;
                font-weight: 800;
                margin-right: 10px;
                color: #9fa1a6;
              }
            }
          }
          div {
            p {
              line-height: 12px;
              font-size: 12px;
            }
          }
        }
      }
      .today02 {
        margin-top: 5px;
      }
    }
  }
}


// 文字滚动相关的 样式
.advert-top {
  position: relative;
  display: flex;
  width: 750px;
  height: 30px;
  background-color: #fff;
  background: url(../assets/img/boxBg2.png) no-repeat;
  background-size: 100% 100%;
  color: #2d8cf0;
  font-size: 14px;
  align-items: center;
  bottom: 10px;
}

/* 以下代码与滚动相关 */
.marquee-wrap {
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin-left: 20px;
}
.marquee-box {
  position: absolute;
  top: 50%;
  display: flex;
  white-space: nowrap;
  transform: translateY(-50%);
}
.marquee-list {
  margin-right: 10px;
}
.marquee-list span {
  padding: 0 0.04rem;
  color: #ffe17b;
  font-weight: 700;
}
</style>