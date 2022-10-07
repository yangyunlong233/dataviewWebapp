<template>
  <div class="charts-d" id="chartsD">
    <charstTitle cn="茶区物联网数据" en="Tea area Internet of Things data" />
    <div class="tab-title">
      <span class="current">作物信息</span>
      <span>基地信息</span>
      <span>天气情况</span>
      <span>农事</span>
      <span>基地抓拍</span>
      <span>虫情</span>
    </div>
    <div class="tab-1-container">
      <div class="cover">
        <img src="../../../assets/images/charts_d_tab_1.jpg">
        <div class="cont">
          <div class="prev"><img src="../../../assets/images/icon_arrow_prev.svg"></div>
          <div class="next"><img src="../../../assets/images/icon_arrow_next.svg"></div>
          <div class="tt"><i class="txb">西乡县</i></div>
          <div class="item">
            <span>EC</span>
            <span>9.0</span>
          </div>
          <div class="item">
            <span>土壤湿度</span>
            <span>17.6</span>
          </div>
          <div class="item">
            <span>土壤温度</span>
            <span>21.3</span>
          </div>
          <div class="item">
            <span>空气温度</span>
            <span>87.1</span>
          </div>
          <div class="item">
            <span>光照</span>
            <span>1282847</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import charstTitle from './chartsTitle.vue'
export default {
  name: 'chartsD',
  data () {
    return {
      chartData: []
    }
  },
  components: {
    charstTitle
  }
}
</script>

<style lang="scss" scoped>
.charts-d {
  position: absolute;
  z-index: 9;
  top: 110px;
  right: 25px;
  width: 542px;
  padding: 20px;
  background: rgba(#002208, .3);
  .tab-title {
    width: 100%;
    margin: 20px 0;
    text-align: center;
    span {
      position: relative;
      margin: 0 15px;
      font-size: 16px;
      color: rgba(#fff, .7);
    }
    span.current {
      font-size: 18px;
      font-family: txb;
      color: #fff;
    }
    span.current:after {
      content: '';
      width: 100%;
      border-bottom: 2px solid #fff;
      position: absolute;
      bottom: -10px;
      left: 0;
    }
  }
  .tab-1-container {
    .cover {
      margin: 30px 0 0;
      width: 100%;
      img {
        height: 310px;
        width: 100%;
      }
    }
    .cont {
      position: relative;
      height: 40px;
      margin: 20px 0 0;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-around;
      padding: 10px 40px 0;
      .prev, .next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 15px;
        height: 12px;
        img {
          height: 100%;
        }
      }
      .prev {
        left: 0;
      }
      .next {
        right: 0;
      }
      .tt {
        font-size: 18px;
        color: #fff;
      }
      .item {
        span {
          width: 50px;
          display: block;
          text-align: center;
          font-size: 12px;
          color: #fff;
          font-family: txl;
        }
      }
    }
  }
}
</style>
