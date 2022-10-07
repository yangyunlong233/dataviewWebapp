<template>
  <div class="charts-title" id="chartsTitle">
    <img src="@/assets/images/icon_charts_title.svg">
    <h2><i class="txb">{{cn}}</i><i class="txl">{{en}}</i></h2>
    <div class="line"></div>
    <div class="more"><img src="@/assets/images/icon_charts_more.svg"></div>
  </div>
</template>

<script>
export default {
  name: 'chartsTitle',
  props: ['cn', 'en']
}
</script>

<style lang="scss" scoped>
.charts-title {
  width: 542px;
  display: flex;
  flex-flow: row nowrap;
  h2 {
    flex-shrink: 0;
    font-size: 18px;
    color: #fff;
    padding-left: 10px;
    i.txl {
      font-size: 14px;
      color: rgba(#fff, .5);
      text-transform: uppercase;
      padding-left: 10px;
    }
  }
  .line {
    position: relative;
    top: 15px;
    width: 80%;
    height: 1px;
    background: rgba(#E5F9E2, .3);
    flex-shrink: 1;
    margin: 0 10px;
  }
  .more {
    flex-shrink: 0;
    position: relative;
    top: 7px;
  }
}
</style>
