<template>
  <div class="wrap">
    <el-container>
      <el-header>
        <!-- 康奈logo -->
        <div class="header_left">
          <span class="span_img"></span>
        </div>
        <div class="header_title">
          <h1>广安市网络舆情应急综合指挥平台</h1>
        </div>
        <div class="header_right">
          <span>2018年11月25号</span>
          <span>23:56:18</span>
        </div>
      </el-header>
      <el-main>
        <div class="main_left">
          <left />
        </div>
        <div class="main_center">
          <center />
        </div>
        <div class="main_right">
          <right />
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import left from "../../components/left";
import right from "../../components/right";
import center from "../../components/center";
export default {
  components: {
    left,
    center,
    right
  }
};
</script>

<style scoped lang="less">
.wrap {
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/img/wxt_bg0.jpg");
  background-size: auto;
  // 头部
  .el-header {
    background-color: #0d1930;
    color: #333;
    text-align: center;
    border-bottom: 6px solid rgb(102, 115, 137, 0.2);
    display: flex;
    justify-content: space-between;
    // 左边logo
    .header_left {
      width: 190px;
      height: 48px;
      margin-top: 6px;
      margin-left: 10px;
      .span_img {
        display: inline-block;
        width: 190px;
        height: 43px;
        background: url("../../assets/img/QP_1.png") no-repeat;
      }
    }
    // 中间文字
    .header_title {
      line-height: 55px;
      h1 {
        color: #ffffff;
        font-size: 2.375rem;
        letter-spacing: 1.25rem;
      }
    }
    //顶部右侧
    .header_right {
      color: #fff;
      display: flex;
      flex-direction: column;
      margin-right: 10px;
      span {
        &:first-child {
          margin-top: 6px;
        }
      }
    }
  }
  .el-main {
    color: #333;
    padding: 10px;
    height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-content: center;
    min-width: 1000px;
    .main_right {
      width: 25%;
      height: 100%;
    }
    .main_center {
      width: 50%;
      height: 100%;
    }
    .main_left {
      width: 25%;
      height: 100%;
    }
  }
}
</style> 