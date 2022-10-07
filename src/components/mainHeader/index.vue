<template>
  <div class="cmpt-main-header" id="cmptMainHeader">
    <div class="header">
      <div class="tt"><router-link to="/"><img src="../../assets/images/login_tt.png"></router-link></div>
      <div class="area">
        <img src="../../assets/images/icon_header_area.svg">
        <span><i class="txb">汉中市</i><i class="txl">切换地区</i></span>
        <img src="../../assets/images/icon_header_area_change.svg">
      </div>
      <div class="time">
        <img src="../../assets/images/icon_header-time.svg">
        <span><i class="txl">数据更新时间</i><i class="ubm">2022-10-07 14:35</i></span>
      </div>
      <div class="usr">
        <img src="../../assets/images/icon_header_ding.svg">
        <div class="ding-num">2</div>
        <div class="line"></div>
        <img src="../../assets/images/icon_header_user.svg">
        <span>admin</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cmptMainHeader'
}
</script>

<style lang="scss" scoped>
@import "./css.scss";
</style>
