<template>
  <div class="charts-d" id="chartsD">
    <chartsTitle cn="近期更新日志" switchbutton="0" ding="1" />
    <ul>
      <li>更新内容（V1.12）<span>2021-12-12 18:00:00</span></li>
      <li>系统升级优化<span>2021-12-12 18:00:00</span></li>
      <li>大数据可视化图表优化<span>2021-12-12 18:00:00</span></li>
      <li>新加报警微信公众号通知<span>2021-12-12 18:00:00</span></li>
      <li>新增设置数据导出功能<span>2021-12-12 18:00:00</span></li>
    </ul>
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
  left: 50%;
  transform: translateX(-50%);
  top: 550px;
  width: 535px;
  height: 390px;
  background: rgba(#2A5A3B, .7);
  &:hover {
      background: rgba(#194228, .7);
    }
  ul {
    width: 490px;
    margin: 30px auto 0;
    li {
      position: relative;
      font-size: 16px;
      color: #fff;
      border-bottom: 1px solid rgba(#E5F9E2, .7);
      padding: 20px 0;
      span {
        position: absolute;
        right: 0;
        font-size: 16px;
        color: rgba(#fff, .5);
      }
    }
    li:last-of-type {
      border: 0;
    }
  }
}
</style>
