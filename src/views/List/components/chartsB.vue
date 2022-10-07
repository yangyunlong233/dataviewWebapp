<template>
  <div class="charts-b" id="chartsB">
    <chartsTitle cn="交易次数走势" ding="0" />
    <div class="chart">
      <img src="../../../assets/images/list_chart_b.png">
    </div>
  </div>
</template>

<script>
import chartsTitle from './chartsTitle.vue'
export default {
  components: {
    chartsTitle
  }
}
</script>

<style lang="scss" scoped>
.charts-b {
  position: absolute;
  top: 140px;
  left: 50%;
  transform: translateX(-50%);
  width: 535px;
  height: 390px;
  background: rgba(#2A5A3B, .7);
  &:hover {
      background: rgba(#194228, .7);
    }
  .chart {
    margin: 40px auto 0;
    width: 490px;
    height: 295px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
