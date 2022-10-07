<template>
  <div class="charts-d" id="chartsD">
    <chartsTitle cn="待办事项" switchbutton="0" ding="0" />
    <div class="items">
      <div class="item">
        <span>6</span>
        <span>预警消息</span>
      </div>
      <div class="item">
        <span>8</span>
        <span>监控消息</span>
      </div>
      <div class="item">
        <span>6</span>
        <span>预警消息</span>
      </div>
      <div class="item">
        <span>6</span>
        <span>预警消息</span>
      </div>
      <div class="item">
        <span>8</span>
        <span>监控消息</span>
      </div>
      <div class="item">
        <span>6</span>
        <span>预警消息</span>
      </div>
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
.charts-d {
  position: absolute;
  top: 550px;
  width: 535px;
  height: 390px;
  background: rgba(#2A5A3B, .7);
  &:hover {
      background: rgba(#194228, .7);
    }
  .chart {
      margin: 40px auto 0;
      width: 485px;
      height: 295px;

      img {
        width: 100%;
        height: 100%;
      }
    }
    .items {
      display: flex;
      flex-flow: row wrap;
      width: 490px;
      margin: 0 auto;
      justify-content: space-between;
      .item {
        width: 33%;
        margin: 80px 0 0;
        span {
          display: block;
          color: #fff;
          text-align: center;
        }
        span:first-of-type {
          font-size: 40px;
          font-family: ub-m;
        }
        span:last-of-type {
          font-size: 18px;
          font-family: txl;
        }
      }
    }
}
</style>
