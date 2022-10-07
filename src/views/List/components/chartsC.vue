<template>
  <div class="charts-c" id="chartsC">
    <chartsTitle cn="交易总额走势" ding="0" />
    <div class="chart">
      <img src="../../../assets/images/list_chart_c.png">
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
.charts-c {
  position: absolute;
  top: 140px;
  right: 0;
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
