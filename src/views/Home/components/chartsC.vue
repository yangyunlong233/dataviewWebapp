<template>
  <div class="charts-c" id="chartsC">
    <charstTitle cn="茶叶品种年产量" en="Annual yield of tea varieties" />
    <div class="total"><img src="../../../assets/images/chart_c_total.png"></div>
    <div class="x-axis">
      <div>2022年</div>
      <div>2021年</div>
      <div>2020年</div>
      <div>2019年</div>
      <div>2018年</div>
    </div>
    <div class="y-axis">
      <div>汉中仙毫</div>
      <div>汉中炒青</div>
      <div>汉中红</div>
      <div>其他</div>
    </div>
  </div>
</template>

<script>
import charstTitle from './chartsTitle.vue'
export default {
  name: 'chartsC',
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
.charts-c {
  position: absolute;
  z-index: 9;
  top: 760px;
  left: 25px;
  width: 542px;
  padding: 20px;
  background: rgba(#002208, .3);
  .total {
    width: 470px;
    height: 160px;
    margin: 30px 10px 40px 62px;
    border-left: 1px solid rgba(#E5F9E2, .5);
    border-bottom: 1px solid rgba(#E5F9E2, .5);
    img {
      width: 100%;
      height: 100%;
    }
  }
  .x-axis {
    position: absolute;
    bottom: 30px;
    left: 90px;
    font-size: 14px;
    color: #DEF6E5;
    div {
      display: inline-block;
      margin-right: 65px;
    }
    div:last-of-type {
      margin: 0;
    }
  }
  .y-axis {
    position: absolute;
    top: 115px;
    left: 20px;
    font-size: 14px;
    color: #DEF6E5;
    line-height: 28px;
    div {
      font-size: inherit;
      color: inherit;
      text-align: right;
    }
  }
}
</style>
