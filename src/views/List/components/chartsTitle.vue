<template>
  <div class="charts-title" id="chartsTitle">
    <h2 class="txb">{{cn}}<span class="ding" v-show="ding != 0">7</span></h2>
    <div class="switch" v-show="switchbutton != 0">
      <div class="current">本月</div>
      <div>本年</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cn', 'switchbutton', 'ding']
}
</script>

<style lang="scss" scoped>
.charts-title {
  position: relative;
  width: 100%;
  height: 34px;
  h2 {
    font-size: 18px;
    color: #fff;
    padding: 20px;
  }
  .ding {
    font-size: 14px;
    background: #4D9973;
    padding: 3px 15px;
    border-radius: 10px;
    margin-left: 10px;
  }
  .switch {
    position: absolute;
    top: 15px;
    right: 15px;
    border: 1px solid rgba(#83C38E, .7);
    display: flex;
    justify-content: center;
    border-radius: 8px;
    div {
      padding: 10px 15px;
      font-size: 14px;
      color: #fff;
    }
    .current {
      background: #4D9973;
    }
    div:first-of-type.current {
      border-radius: 7px 0 0 7px;
    }
    div:last-of-type.current {
      border-radius: 0 7px 7px 0;
    }
  }
}
</style>
