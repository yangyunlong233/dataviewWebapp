<template>
  <div class="charts-f" id="chartsF">
    <chartsTitle cn="平台公告" switchbutton="0" ding="1" />
    <ul>
      <li>
        <span>2021-12-12 18:00:00</span>
        <p>勐海大数据管理后台晚上10:00维护中，次日早上9:00恢复正常使用，给您的工作带来不便敬请谅解</p>
      </li>
      <li>
        <span>2021-12-12 18:00:00</span>
        <p>勐海大数据管理后台晚上10:00维护中，次日早上9:00恢复正常使用，给您的工作带来不便敬请谅解</p>
      </li>
      <li>
        <span>2021-12-12 18:00:00</span>
        <p>勐海大数据管理后台晚上10:00维护中，次日早上9:00恢复正常使用，给您的工作带来不便敬请谅解</p>
      </li>
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
.charts-f {
  position: absolute;
  right: 0;
  top: 550px;
  width: 535px;
  height: 390px;
  background: rgba(#2A5A3B, .7);
  &:hover {
      background: rgba(#194228, .7);
    }
  ul {
    width: 490px;
    margin: 40px auto 0;
    li {
      position: relative;
      font-size: 16px;
      color: #fff;
      margin: 35px 0 0;
      span,p {
        display: block;
      }
      span {
        padding: 0 0 10px;
        font-size: 14px;
        color: rgba(#fff, .6);
      }
      p {
        font-size: 16px;
        color: #fff;
      }
    }
  }
}
</style>
